import { beforeEach, describe, expect, it, vi } from "vitest";
import { CLIENT_VALIDE, RedirectSignal, formData, redirectionDe } from "./helpers";

// Action partagée par les 48 formulaires de contact / devis (app/actions.ts).
// Tout ce qui sort du serveur est simulé : Next, Resend, réglages, captcha.

const mocks = vi.hoisted(() => ({
  ip: "203.0.113.1",
  send: vi.fn(),
  verifyTurnstile: vi.fn(),
}));

vi.mock("next/headers", () => ({
  headers: async () =>
    new Headers({ "x-forwarded-for": mocks.ip, referer: "https://securiform.fr/caces-R489A" }),
}));
vi.mock("next/navigation", () => ({
  redirect: (url: string) => {
    throw new RedirectSignal(url);
  },
}));
vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mocks.send };
  },
}));
vi.mock("@/lib/settings", () => ({
  getSettingList: async () => ["equipe@securiform.fr", "jerome@securiform.fr"],
}));
vi.mock("@/lib/turnstile", () => ({ verifyTurnstile: mocks.verifyTurnstile }));

const { submitForm } = await import("@/app/actions");

let ipSuivante = 1;

describe("submitForm", () => {
  beforeEach(() => {
    // IP différente à chaque test : la limite de 5 envois/heure est en mémoire.
    mocks.ip = `203.0.113.${ipSuivante++}`;
    mocks.send.mockReset().mockResolvedValue({ data: { id: "email-1" }, error: null });
    mocks.verifyTurnstile.mockReset().mockResolvedValue("ok");
    vi.stubEnv("RESEND_API_KEY", "re_test");
    vi.spyOn(console, "warn").mockImplementation(() => {});
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("client valide → email envoyé à l'équipe, page de succès", async () => {
    const url = await redirectionDe(() =>
      submitForm(formData({ ...CLIENT_VALIDE, "cf-turnstile-response": "jeton", site_web: "" }))
    );

    expect(url).toBe("/merci?ok=1");
    expect(mocks.send).toHaveBeenCalledTimes(1);
    const email = mocks.send.mock.calls[0][0];
    expect(email.to).toEqual(["equipe@securiform.fr", "jerome@securiform.fr"]);
    expect(email.replyTo).toBe(CLIENT_VALIDE.email);
    expect(email.subject).toContain("/caces-R489A");
    expect(email.text).toContain("Nom : Dupont");
    expect(email.text).toContain("Téléphone : 06 12 34 56 78");
    expect(email.text).toContain("Formation souhaitée : CACES R489");
    // Ni le jeton du captcha ni le piège à robots ne doivent finir dans l'email.
    expect(email.text).not.toContain("jeton");
    expect(email.text).not.toContain("site_web");
  });

  it("piège à robots rempli → faux succès, aucun email", async () => {
    const url = await redirectionDe(() => submitForm(formData({ ...CLIENT_VALIDE, site_web: "http://spam.ru" })));
    expect(url).toBe("/merci?ok=1");
    expect(mocks.send).not.toHaveBeenCalled();
  });

  it("spam détecté → faux succès, aucun email", async () => {
    const url = await redirectionDe(() =>
      submitForm(formData({ ...CLIENT_VALIDE, societe: "robot@spam.com" }))
    );
    expect(url).toBe("/merci?ok=1");
    expect(mocks.send).not.toHaveBeenCalled();
  });

  it("captcha refusé → page d'erreur, aucun email", async () => {
    mocks.verifyTurnstile.mockResolvedValue("refuse");
    const url = await redirectionDe(() => submitForm(formData(CLIENT_VALIDE)));
    expect(url).toBe("/merci?ok=0");
    expect(mocks.send).not.toHaveBeenCalled();
  });

  it("captcha pas encore configuré → envoi normal", async () => {
    mocks.verifyTurnstile.mockResolvedValue("non-configure");
    expect(await redirectionDe(() => submitForm(formData(CLIENT_VALIDE)))).toBe("/merci?ok=1");
    expect(mocks.send).toHaveBeenCalledTimes(1);
  });

  it("plus de 5 envois en une heure depuis la même IP → 6e refusé", async () => {
    for (let i = 0; i < 5; i++) {
      expect(await redirectionDe(() => submitForm(formData(CLIENT_VALIDE)))).toBe("/merci?ok=1");
    }
    expect(await redirectionDe(() => submitForm(formData(CLIENT_VALIDE)))).toBe("/merci?ok=0");
    expect(mocks.send).toHaveBeenCalledTimes(5);
  });

  it("Resend en erreur → page d'erreur", async () => {
    mocks.send.mockResolvedValue({ data: null, error: { message: "domain not verified" } });
    expect(await redirectionDe(() => submitForm(formData(CLIENT_VALIDE)))).toBe("/merci?ok=0");
  });

  it("pièce jointe : PDF transmis, .exe refusé et signalé", async () => {
    const data = formData(CLIENT_VALIDE);
    data.append("document", new File(["%PDF-1.4"], "cahier-des-charges.pdf", { type: "application/pdf" }));
    data.append("document2", new File(["MZ"], "virus.exe", { type: "application/octet-stream" }));

    expect(await redirectionDe(() => submitForm(data))).toBe("/merci?ok=1");
    const email = mocks.send.mock.calls[0][0];
    expect(email.attachments.map((a: { filename: string }) => a.filename)).toEqual(["cahier-des-charges.pdf"]);
    expect(email.text).toContain('Pièce jointe refusée : "virus.exe"');
  });
});
