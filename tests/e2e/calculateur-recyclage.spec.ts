import { expect, test } from "@playwright/test";
import { ajouterMois, formaterDate, versIso } from "../../lib/recyclage";

// Calculateur de recyclage des pages formation : calcul de l'échéance,
// préremplissage du devis et formulaire de rappel par email (affichage,
// captcha). L'inscription elle-même écrit en base : elle est couverte par
// les tests unitaires (tests/unit/inscrire-rappel.test.ts).

// Formation passée il y a un an : CACES R489A valable 5 ans → encore valide.
const ilYaUnAn = ajouterMois(new Date(new Date().setHours(0, 0, 0, 0)), -12);
const echeance = ajouterMois(ilYaUnAn, 60);

test("CACES R489A : échéance calculée et devis prérempli", async ({ page }) => {
  await page.goto("/caces-R489A");
  await page.getByLabel("Date de la dernière formation").fill(versIso(ilYaUnAn));

  const resultat = page.locator(".recyclage-resultat");
  await expect(resultat).toHaveClass(/is-valide/);
  await expect(resultat.locator(".recyclage-echeance")).toContainText(formaterDate(echeance));

  await resultat.getByRole("button", { name: "Programmer mon recyclage" }).click();
  await expect(page.locator("form.form-devis #message")).toHaveValue(
    new RegExp(`R489A.*échéance le ${formaterDate(echeance)}`)
  );
});

test("formation expirée : message adapté, pas de rappel proposé", async ({ page }) => {
  await page.goto("/caces-R489A");
  await page.getByLabel("Date de la dernière formation").fill("2015-01-15");

  const resultat = page.locator(".recyclage-resultat");
  await expect(resultat).toHaveClass(/is-expire/);
  await expect(resultat).toContainText("Formation expirée");
  await expect(resultat.locator("form.recyclage-alerte")).toHaveCount(0);
});

test("page Outils : toutes les formations sont proposées", async ({ page }) => {
  await page.goto("/outils/calculateur-recyclage");
  const liste = page.getByLabel("Formation", { exact: true });
  await expect(liste.locator("option")).toHaveCount(10);
  await liste.selectOption({ label: "Habilitation électrique : personnel électricien" });
  await expect(page.getByText("Validité : 3 ans")).toBeVisible();
});

test("rappel par email : formulaire avec captcha et consentement obligatoire", async ({ page }) => {
  await page.goto("/caces-R489A");
  await page.getByLabel("Date de la dernière formation").fill(versIso(ilYaUnAn));

  const alerte = page.locator("form.recyclage-alerte");
  await expect(alerte).toBeVisible();
  await expect(alerte.locator('input[name="cf-turnstile-response"]')).toHaveValue(/.+/, { timeout: 20_000 });

  // Sans consentement, le navigateur bloque l'envoi.
  await alerte.getByPlaceholder("votre@email.fr").fill("client@entreprise-test.fr");
  await alerte.getByRole("button", { name: "M'alerter" }).click();
  const consentementValide = await alerte
    .locator('input[name="consentement"]')
    .evaluate((input: HTMLInputElement) => input.validity.valid);
  expect(consentementValide).toBe(false);
});
