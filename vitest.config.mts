import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Tests unitaires (tests/unit) : logique serveur des formulaires, sans réseau
// ni base de données. Les tests navigateur sont dans tests/e2e (Playwright).
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./", import.meta.url)) },
  },
  test: {
    include: ["tests/unit/**/*.test.ts"],
    environment: "node",
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
  },
});
