import { expect, test, type Locator, type Page } from "@playwright/test";

// Formulaires de contact et de devis, de bout en bout : vrai navigateur,
// vrai widget Cloudflare (clés de test), action serveur, email intercepté.

const MOCK_RESEND = `http://localhost:${process.env.MOCK_RESEND_PORT || 4010}`;

type EmailRecu = { from: string; to: string[]; reply_to?: string[] | string; subject: string; text: string };

async function emailsRecus(page: Page): Promise<EmailRecu[]> {
  const res = await page.request.get(`${MOCK_RESEND}/__emails`);
  return res.json();
}

// Le widget dépose son jeton dans un champ caché du formulaire : on attend
// qu'il soit là avant d'envoyer, comme un visiteur qui prend le temps d'écrire.
async function attendreCaptcha(form: Locator) {
  await expect(form.locator('input[name="cf-turnstile-response"]')).toHaveValue(/.+/, { timeout: 20_000 });
}

let visiteur = 0;

test.beforeEach(async ({ page }) => {
  await page.request.delete(`${MOCK_RESEND}/__emails`);
  // Une IP par test, comme des visiteurs différents : sinon la limite de
  // 5 envois/heure par IP (lib/spam.ts) se déclenche au fil des tests.
  visiteur++;
  await page.setExtraHTTPHeaders({ "x-forwarded-for": `192.0.2.${visiteur % 250}, 10.0.0.1` });
});

test("contact : le message arrive à l'équipe et la page de succès s'affiche", async ({ page }) => {
  await page.goto("/nous-contacter");
  const form = page.locator("form").filter({ has: page.locator("#sujet") });

  await form.locator("#sujet").selectOption("renseignement");
  await form.locator("#nom").fill("Test E2E");
  await form.locator("#societe").fill("Entreprise Test");
  await form.locator("#email").fill("client.test@entreprise-test.fr");
  await form.locator("#telephone").fill("06 12 34 56 78");
  await form.locator("#message").fill("Message envoyé par les tests automatiques.");
  await attendreCaptcha(form);
  await form.getByRole("button", { name: "Envoyer" }).click();

  await expect(page).toHaveURL(/\/merci\?ok=1$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Message bien envoyé");

  const emails = await emailsRecus(page);
  expect(emails).toHaveLength(1);
  const [email] = emails;
  expect(email.to).toEqual(["equipe@securiform.test"]);
  expect(email.subject).toContain("/nous-contacter");
  expect(email.text).toContain("Sujet : renseignement");
  expect(email.text).toContain("Nom : Test E2E");
  expect(email.text).toContain("Email : client.test@entreprise-test.fr");
  expect(email.text).toContain("Message : Message envoyé par les tests automatiques.");
  expect(email.text).not.toContain("cf-turnstile-response");
  expect(email.text).not.toContain("DUMMY");
});

test("devis sur une page formation : l'email indique la page d'origine", async ({ page }) => {
  await page.goto("/caces-R489A");
  const form = page.locator("form.form-devis");

  await form.locator("#nom").fill("Martin");
  await form.locator("#prenom").fill("Paul");
  await form.locator("#societe").fill("Logistique Nord");
  await form.locator("#telephone").fill("03 20 00 00 00");
  await form.locator("#email").fill("p.martin@logistique-nord.fr");
  await attendreCaptcha(form);
  await form.getByRole("button", { name: /Envoyer/ }).click();

  await expect(page).toHaveURL(/\/merci\?ok=1$/);
  const [email] = await emailsRecus(page);
  expect(email.subject).toContain("/caces-R489A");
  expect(email.text).toContain("Prénom : Paul");
});

test("double clic sur Envoyer : un seul email et page de succès", async ({ page }) => {
  await page.goto("/caces-R489A");
  const form = page.locator("form.form-devis");

  await form.locator("#nom").fill("Double");
  await form.locator("#prenom").fill("Clic");
  await form.locator("#telephone").fill("06 00 00 00 00");
  await form.locator("#email").fill("double.clic@entreprise-test.fr");
  await attendreCaptcha(form);
  await form.getByRole("button", { name: /Envoyer/ }).dblclick();

  await expect(page).toHaveURL(/\/merci\?ok=1$/);
  await page.waitForTimeout(1_000);
  expect(await emailsRecus(page)).toHaveLength(1);
});

test("robot sans jeton captcha : refusé côté serveur, aucun email", async ({ page }) => {
  await page.goto("/nous-contacter");
  const form = page.locator("form").filter({ has: page.locator("#sujet") });

  await form.locator("#nom").fill("Robot");
  await form.locator("#email").fill("robot@entreprise-test.fr");
  await form.locator("#message").fill("Je n'ai pas de jeton.");
  await attendreCaptcha(form);
  // Simule un robot qui poste sans passer le captcha.
  await form.locator('input[name="cf-turnstile-response"]').evaluate((input) => input.remove());
  await form.getByRole("button", { name: "Envoyer" }).click();

  await expect(page).toHaveURL(/\/merci\?ok=0$/);
  expect(await emailsRecus(page)).toHaveLength(0);
});

test("spam (email dans « Société ») : faux succès, aucun email", async ({ page }) => {
  await page.goto("/nous-contacter");
  const form = page.locator("form").filter({ has: page.locator("#sujet") });

  await form.locator("#nom").fill("Robertnoumb");
  await form.locator("#societe").fill("alan-baker424245242@gmx.com");
  await form.locator("#email").fill("alan-baker424245242@gmx.com");
  await form.locator("#message").fill("Gfihudwgfyehjwowjifwhu");
  await attendreCaptcha(form);
  await form.getByRole("button", { name: "Envoyer" }).click();

  await expect(page).toHaveURL(/\/merci\?ok=1$/);
  expect(await emailsRecus(page)).toHaveLength(0);
});

test("le bouton est désactivé pendant l'envoi", async ({ page }) => {
  await page.goto("/caces-R489A");
  const form = page.locator("form.form-devis");
  await form.locator("#nom").fill("Bouton");
  await form.locator("#prenom").fill("Grisé");
  await form.locator("#telephone").fill("06 00 00 00 00");
  await form.locator("#email").fill("bouton@entreprise-test.fr");
  await attendreCaptcha(form);

  // Ralentit la réponse du serveur pour observer l'état du bouton.
  await page.route("**/caces-R489A", async (route) => {
    if (route.request().method() === "POST") await new Promise((r) => setTimeout(r, 1_500));
    await route.continue();
  });
  const bouton = form.getByRole("button", { name: /Envoyer/ });
  await bouton.click();
  await expect(bouton).toBeDisabled();
  await expect(page).toHaveURL(/\/merci\?ok=1$/);
});
