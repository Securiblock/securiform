import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

// Garde-fou sur le code source : tout formulaire branché sur submitForm doit
// garder ses protections. Évite qu'une nouvelle page de formation (copiée
// d'une autre) parte en production sans captcha ni piège à robots.

const RACINE = join(__dirname, "..", "..");

function fichiersTsx(dossier: string): string[] {
  return readdirSync(dossier).flatMap((nom) => {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) return nom === "node_modules" ? [] : fichiersTsx(chemin);
    return chemin.endsWith(".tsx") ? [chemin] : [];
  });
}

const formulaires = [...fichiersTsx(join(RACINE, "app")), ...fichiersTsx(join(RACINE, "components"))]
  .map((chemin) => ({ fichier: relative(RACINE, chemin).replaceAll("\\", "/"), source: readFileSync(chemin, "utf8") }))
  .filter(({ source }) => source.includes("action={submitForm}"));

describe("formulaires de contact / devis", () => {
  it("le site en compte bien (au moins 48)", () => {
    expect(formulaires.length).toBeGreaterThanOrEqual(48);
  });

  it.each(formulaires.map((f) => [f.fichier, f.source]))("%s : captcha, piège à robots, email obligatoire", (_, source) => {
    const formulaire = source.slice(source.indexOf("action={submitForm}"), source.indexOf("</form>"));
    expect(formulaire, "captcha <Turnstile /> manquant").toContain("<Turnstile />");
    expect(formulaire, "piège à robots site_web manquant").toContain('name="site_web"');
    expect(formulaire, "champ email obligatoire manquant").toMatch(/type="email"[^>]*name="email"[^>]*required/);
    expect(source, "import de Turnstile manquant").toContain('import Turnstile from "@/components/turnstile"');
  });
});

describe("formulaire de rappel de recyclage", () => {
  const source = readFileSync(join(RACINE, "components", "calculateur-recyclage.tsx"), "utf8");

  it("garde captcha, piège à robots et consentement", () => {
    expect(source).toContain("<Turnstile resetKey={etat} />");
    expect(source).toContain('name="site_web"');
    expect(source).toMatch(/name="consentement"[^>]*required/);
  });
});
