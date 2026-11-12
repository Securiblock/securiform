import { defineConfig, devices } from "@playwright/test";

// Tests navigateur (tests/e2e) : un vrai Chrome remplit et envoie les
// formulaires du site compilé.
// - Captcha : clés de test officielles Cloudflare (toujours validées, mais le
//   vrai widget se charge quand même : on teste tout le circuit).
// - Emails : envoyés au faux serveur tests/e2e/mock-resend.mjs, jamais réels.
// - Base de données : volontairement absente ; les destinataires viennent de
//   CONTACT_EMAIL_TO (repli prévu par lib/settings.ts).

const PORT = 3100;
const MOCK_RESEND_PORT = 4010;

// Les variables passées ici l'emportent sur celles de .env.local.
const env = {
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: "1x00000000000000000000AA",
  TURNSTILE_SECRET_KEY: "1x0000000000000000000000000000000AA",
  RESEND_API_KEY: "re_test_e2e",
  RESEND_BASE_URL: `http://localhost:${MOCK_RESEND_PORT}`,
  CONTACT_EMAIL_FROM: "ne-pas-repondre@securiform.test",
  CONTACT_EMAIL_TO: "equipe@securiform.test",
  DATABASE_URL: "",
  MOCK_RESEND_PORT: String(MOCK_RESEND_PORT),
};

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: false,
  // Les tests partagent la boîte du faux Resend : un seul à la fois.
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  timeout: 60_000,
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: "node tests/e2e/mock-resend.mjs",
      url: `http://localhost:${MOCK_RESEND_PORT}/health`,
      env,
      reuseExistingServer: false,
    },
    {
      // Build dédié : la Site key de test doit être intégrée au moment du build.
      command: `npx next build && npx next start -p ${PORT}`,
      url: `http://localhost:${PORT}`,
      env,
      timeout: 300_000,
      reuseExistingServer: false,
    },
  ],
});
