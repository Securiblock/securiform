import { beforeEach, describe, expect, it, vi } from "vitest";
import { RedirectSignal, formData, redirectionDe } from "./helpers";

// Inscription à un rappel de recyclage (app/actions-rappel.ts), appelée par le
// calculateur des pages formation. Base de données et emails simulés.

const mocks = vi.hoisted(() => ({
  ip: "198.51.100.1",
  creerRappel: vi.fn(),
  supprimerRappel: vi.fn(),
  envoyerConfirmation: vi.fn(),
  verifyTurnstile: vi.fn(),
}));

vi.mock("next/headers", () => ({
  headers: async () => new Headers({ "x-forwarded-for": mocks.ip }),
}));
vi.mock("next/navigation", () => ({
  redirect: (url: string) => {
    throw new RedirectSignal(url);
  },
}));
vi.mock("@/lib/rappels", () => ({
  aujourdhuiEnFrance: () => "2026-01-01",
  creerRappel: mocks.creerRappel,
  supprimerRappel: mocks.supprimerRappel,
}));
vi.mock("@/lib/rappels-email", () => ({ envoyerConfirmation: mocks.envoyerConfirmation }));
vi.mock("@/lib/turnstile", () => ({ verifyTurnstile: mocks.verifyTurnstile }));

const { inscrireRappel, annulerRappel } = await import("@/app/actions-rappel");

const ETAT = { statut: "initial", message: "" } as const;

// CACES R489A passé le 15/03/2024 : échéance 15/03/2029, rappel le 15/12/2028.
const DEMANDE = {
  email: "Jean.Dupont@BTP-Nord.fr",
  formation: "caces-R489A",
  option: "0",
  date: "2024-03-15",
  consentement: "oui",
  "cf-turnstile-response": "jeton",
};

let ipSuivante = 1;

describe("inscrireRappel", () => {
  beforeEach(() => {
    mocks.ip = `198.51.100.${ipSuivante++}`;
    mocks.creerRappel.mockReset().mockResolvedValue({ statut: "cree", id: "rappel-1" });
    mocks.supprimerRappel.mockReset().mockResolvedValue(undefined);
    mocks.envoyerConfirmation.mockReset().mockResolvedValue(undefined);
    mocks.verifyTurnstile.mockReset().mockResolvedValue("ok");
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("demande valide → dates recalculées côté serveur et email de confirmation", async () => {
    const etat = await inscrireRappel(ETAT, formData(DEMANDE));

    expect(etat.statut).toBe("ok");
    expect(mocks.creerRappel).toHaveBeenCalledWith({
      email: "jean.dupont@btp-nord.fr",
      formation: "caces-R489A",
      libelle: "R489A : Chariots de manutention",
      date_formation: "2024-03-15",
      echeance: "2029-03-15",
      date_rappel: "2028-12-15",
    });
    expect(mocks.envoyerConfirmation).toHaveBeenCalledWith(expect.objectContaining({ id: "rappel-1" }));
  });

  it.each([
    ["email invalide", { email: "pas-un-email" }, "adresse email"],
    ["consentement non coché", { consentement: "" }, "cocher la case"],
    ["formation inconnue", { formation: "piratage" }, "invalide"],
    ["option hors liste", { option: "99" }, "invalide"],
    ["date impossible", { date: "2024-02-31" }, "invalide"],
    ["échéance trop proche", { date: "2021-01-15" }, "trop proche"],
  ])("%s → erreur affichée, rien enregistré", async (_, modif, message) => {
    const etat = await inscrireRappel(ETAT, formData({ ...DEMANDE, ...modif }));
    expect(etat.statut).toBe("erreur");
    expect(etat.message).toContain(message);
    expect(mocks.creerRappel).not.toHaveBeenCalled();
  });

  it("piège à robots → faux succès, rien enregistré", async () => {
    const etat = await inscrireRappel(ETAT, formData({ ...DEMANDE, site_web: "spam" }));
    expect(etat.statut).toBe("ok");
    expect(mocks.creerRappel).not.toHaveBeenCalled();
  });

  it("captcha refusé → erreur, rien enregistré", async () => {
    mocks.verifyTurnstile.mockResolvedValue("refuse");
    const etat = await inscrireRappel(ETAT, formData(DEMANDE));
    expect(etat.statut).toBe("erreur");
    expect(etat.message).toContain("anti-robot");
    expect(mocks.creerRappel).not.toHaveBeenCalled();
  });

  it("plus de 10 demandes en une heure depuis la même IP → refusé", async () => {
    for (let i = 0; i < 10; i++) await inscrireRappel(ETAT, formData(DEMANDE));
    const etat = await inscrireRappel(ETAT, formData(DEMANDE));
    expect(etat.message).toContain("Trop de demandes");
    expect(mocks.creerRappel).toHaveBeenCalledTimes(10);
  });

  it("email de confirmation impossible → rappel supprimé (pas d'adresse gardée sans lien d'annulation)", async () => {
    mocks.envoyerConfirmation.mockRejectedValue(new Error("Resend en panne"));
    const etat = await inscrireRappel(ETAT, formData(DEMANDE));
    expect(etat.statut).toBe("erreur");
    expect(mocks.supprimerRappel).toHaveBeenCalledWith("rappel-1");
  });

  it("rappel déjà enregistré → message dédié", async () => {
    mocks.creerRappel.mockResolvedValue({ statut: "existant" });
    const etat = await inscrireRappel(ETAT, formData(DEMANDE));
    expect(etat).toEqual({ statut: "ok", message: "Ce rappel est déjà enregistré pour cette adresse." });
    expect(mocks.envoyerConfirmation).not.toHaveBeenCalled();
  });
});

describe("annulerRappel", () => {
  beforeEach(() => mocks.supprimerRappel.mockReset());

  it("identifiant valide → supprimé", async () => {
    const id = "6f1c2a3b-4d5e-4f60-8a7b-9c0d1e2f3a4b";
    expect(await redirectionDe(() => annulerRappel(formData({ id })))).toBe("/rappel-recyclage/annuler?annule=1");
    expect(mocks.supprimerRappel).toHaveBeenCalledWith(id);
  });

  it("identifiant forgé → rien supprimé", async () => {
    await redirectionDe(() => annulerRappel(formData({ id: "' OR 1=1 --" })));
    expect(mocks.supprimerRappel).not.toHaveBeenCalled();
  });
});
