import { beforeEach, describe, expect, it, vi } from "vitest";
import { verifyTurnstile } from "@/lib/turnstile";
import { formData } from "./helpers";

const TOKEN = { "cf-turnstile-response": "jeton-du-navigateur" };

function reponseCloudflare(body: object) {
  return vi.fn(async () => new Response(JSON.stringify(body)));
}

describe("verifyTurnstile", () => {
  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_TURNSTILE_SITE_KEY", "site-key");
    vi.stubEnv("TURNSTILE_SECRET_KEY", "secret-key");
  });

  it("jeton validé par Cloudflare → ok, avec la clé secrète et l'IP", async () => {
    const fetchMock = reponseCloudflare({ success: true });
    vi.stubGlobal("fetch", fetchMock);

    expect(await verifyTurnstile(formData(TOKEN), "1.2.3.4")).toBe("ok");

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://challenges.cloudflare.com/turnstile/v0/siteverify");
    const body = init.body as URLSearchParams;
    expect(body.get("secret")).toBe("secret-key");
    expect(body.get("response")).toBe("jeton-du-navigateur");
    expect(body.get("remoteip")).toBe("1.2.3.4");
  });

  it("jeton refusé (ex. déjà utilisé) → refuse", async () => {
    vi.stubGlobal("fetch", reponseCloudflare({ success: false, "error-codes": ["timeout-or-duplicate"] }));
    vi.spyOn(console, "warn").mockImplementation(() => {});
    expect(await verifyTurnstile(formData(TOKEN), "1.2.3.4")).toBe("refuse");
  });

  it("robot sans jeton → refuse, sans même appeler Cloudflare", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    expect(await verifyTurnstile(formData({}), "1.2.3.4")).toBe("refuse");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("Cloudflare injoignable → ok (on ne perd pas une vraie demande)", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => Promise.reject(new Error("réseau"))));
    vi.spyOn(console, "error").mockImplementation(() => {});
    expect(await verifyTurnstile(formData(TOKEN), "1.2.3.4")).toBe("ok");
  });

  it("clés absentes → non-configure (le site fonctionne sans captcha)", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    expect(await verifyTurnstile(formData(TOKEN), "1.2.3.4")).toBe("non-configure");
  });
});
