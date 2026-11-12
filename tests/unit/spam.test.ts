import { describe, expect, it } from "vitest";
import { detectSpam, isFormRateLimited, isRappelRateLimited } from "@/lib/spam";
import { CLIENT_VALIDE, formData } from "./helpers";

describe("detectSpam : vrais clients acceptés", () => {
  const clients: [string, Record<string, string>][] = [
    ["client classique", CLIENT_VALIDE],
    ["téléphone international", { ...CLIENT_VALIDE, telephone: "+33 (0)6 12-34-56-78" }],
    ["téléphone avec poste", { ...CLIENT_VALIDE, telephone: "03 20 00 00 00 poste 12" }],
    ["sans téléphone (formulaire contact)", { ...CLIENT_VALIDE, telephone: "" }],
    ["société avec &", { ...CLIENT_VALIDE, societe: "Martin & Fils" }],
    ["email prenom.nom", { ...CLIENT_VALIDE, email: "jean.pierre.dupont@gmail.com" }],
    ["lien dans le message", { ...CLIENT_VALIDE, message: "Notre site : https://btp-nord.fr" }],
    ["message vide (facultatif)", { ...CLIENT_VALIDE, message: "" }],
  ];

  it.each(clients)("%s", (_, champs) => {
    expect(detectSpam(formData(champs))).toBeNull();
  });
});

// Spams réellement reçus sur securiform.fr après la mise en ligne.
describe("detectSpam : spams reçus bloqués", () => {
  const spams: [string, Record<string, string>, string][] = [
    [
      "lien dans le nom",
      {
        nom: "Thank you very much for your inquiry 8390129 https://youtube.com faceapple !",
        societe: "h.u.mm.er.to.l.ympia@gmail.com",
        email: "hu.mmerto.l.y.mpia@gmail.com",
        telephone: "Thank you https://youtube.com",
      },
      "lien",
    ],
    [
      "Robertnoumb",
      { nom: "Robertnoumb", societe: "alan-baker424245242@gmx.com", email: "alan-baker424245242@gmx.com", telephone: "86921281911" },
      "société",
    ],
    [
      "Delosq8",
      { nom: "Delosq8", societe: "aaronqu2u@hotmail.com", email: "casey3r45@hotmail.com", telephone: "222325315" },
      "société",
    ],
    [
      "DavidKen",
      { nom: "DavidKen", societe: "no.reply.HeinzBertrand@gmail.com", email: "no.reply.TimRichard@gmail.com", telephone: "84569215266" },
      "société",
    ],
    ["email truffé de points", { ...CLIENT_VALIDE, email: "h.u.mm.er.to.l.ympia@gmail.com" }, "points"],
    ["email invalide", { ...CLIENT_VALIDE, email: "pas-un-email" }, "email"],
    ["email absent", { nom: "Robot", telephone: "0612345678" }, "email"],
    ["téléphone sans chiffres", { ...CLIENT_VALIDE, telephone: "appelez-moi" }, "téléphone"],
  ];

  it.each(spams)("%s", (_, champs, raison) => {
    expect(detectSpam(formData(champs))).toContain(raison);
  });
});

describe("limites par IP", () => {
  it("formulaires : 5 envois par heure, le 6e est refusé", () => {
    const ip = "10.0.0.1";
    for (let i = 0; i < 5; i++) expect(isFormRateLimited(ip)).toBe(false);
    expect(isFormRateLimited(ip)).toBe(true);
    expect(isFormRateLimited("10.0.0.2")).toBe(false);
  });

  it("rappels : 10 par heure, compteur séparé des formulaires", () => {
    const ip = "10.0.0.3";
    for (let i = 0; i < 5; i++) isFormRateLimited(ip);
    for (let i = 0; i < 10; i++) expect(isRappelRateLimited(ip)).toBe(false);
    expect(isRappelRateLimited(ip)).toBe(true);
  });
});
