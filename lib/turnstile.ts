// Vérification serveur du captcha Cloudflare Turnstile (components/turnstile.tsx).
// https://developers.cloudflare.com/turnstile/get-started/server-side-validation/

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileResult = "ok" | "refuse" | "non-configure";

export async function verifyTurnstile(formData: FormData, ip: string): Promise<TurnstileResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Clés pas encore créées : on laisse passer plutôt que de bloquer tous les
  // formulaires du site. Les autres filtres (lib/spam.ts) restent actifs.
  if (!secret || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return "non-configure";

  const token = formData.get("cf-turnstile-response");
  if (typeof token !== "string" || !token) return "refuse";

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "inconnue") body.set("remoteip", ip);
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (!data.success) {
      console.warn("Turnstile : jeton refusé.", data["error-codes"]);
      return "refuse";
    }
    return "ok";
  } catch (err) {
    // Cloudflare injoignable : on laisse passer pour ne pas perdre une vraie
    // demande de devis, le reste de l'anti-spam s'applique quand même.
    console.error("Turnstile : vérification impossible, envoi accepté.", err);
    return "ok";
  }
}
