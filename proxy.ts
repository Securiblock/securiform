import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { getSettingList } from "@/lib/settings";

// Shared-password gate for the blog admin: /admin/** (the UI) and
// /api/blog/** + /api/admin/** (everything it calls — generation, publish,
// topic CRUD, settings). /api/cron/** is deliberately excluded: it has its
// own Bearer-token check for Vercel Cron, which doesn't send Basic Auth
// credentials.
export const config = {
  matcher: ["/admin/:path*", "/api/blog/:path*", "/api/admin/:path*"],
};

const SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 8; // 8h — a fresh browser session re-notifies

// Brute-force guard on the admin password: counts failed Basic Auth attempts
// per IP, same in-memory pattern as the chat API's rate limiter (per server
// instance, not a hard global quota — enough to stop a password-guessing
// script, not a distributed attack).
const MAX_FAILED_ATTEMPTS = 10;
const FAILED_ATTEMPTS_WINDOW_MS = 10 * 60 * 1000;
const failedAttempts = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (failedAttempts.get(ip) ?? []).filter(
    (t) => now - t < FAILED_ATTEMPTS_WINDOW_MS
  );
  if (timestamps.length >= MAX_FAILED_ATTEMPTS) {
    failedAttempts.set(ip, timestamps);
    return true;
  }
  if (failedAttempts.size > 5000) failedAttempts.clear();
  return false;
}

function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const timestamps = (failedAttempts.get(ip) ?? []).filter(
    (t) => now - t < FAILED_ATTEMPTS_WINDOW_MS
  );
  timestamps.push(now);
  failedAttempts.set(ip, timestamps);
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

// The session cookie only decides whether to send the login alert, so it
// must not be forgeable: a plain "1" would let anyone who found the
// password add `Cookie: admin_session=1` and never trigger the email.
// Value is `<nonce>.<hmac(nonce)>`, keyed with a server secret the password
// alone doesn't reveal.
function sessionSecret(): string {
  return process.env.CRON_SECRET || process.env.ADMIN_PASSWORD || "";
}

function signNonce(nonce: string): string {
  return createHmac("sha256", sessionSecret()).update(nonce).digest("hex");
}

function newSessionCookie(): string {
  const nonce = randomBytes(16).toString("hex");
  return `${nonce}.${signNonce(nonce)}`;
}

function isValidSessionCookie(value: string | undefined): boolean {
  if (!value) return false;
  const [nonce, signature] = value.split(".");
  if (!nonce || !signature) return false;
  return safeEqual(signature, signNonce(nonce));
}

// Browsers attach cached Basic Auth credentials to cross-site requests, so
// a malicious page could POST to /api/blog/* "as" a logged-in admin (CSRF).
// Browsers also always label such requests: Sec-Fetch-Site is "cross-site"
// and Origin names the other site. Reject writes carrying those labels;
// requests with neither header (curl, scripts) are not a browser CSRF.
function isCrossSiteWrite(request: NextRequest): boolean {
  if (["GET", "HEAD", "OPTIONS"].includes(request.method)) return false;

  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin" && fetchSite !== "none") return true;

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.get("host")) return true;
    } catch {
      return true;
    }
  }
  return false;
}

// Basic Auth re-sends the same credentials on every single request (every
// asset, every API call), so this can't fire on every authenticated
// request — it'd be dozens of emails per admin visit. The session cookie
// below caps it to once per ~8h browser session instead.
async function notifyAdminLogin(request: NextRequest): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = await getSettingList("login_alert_email");
  const ip = request.headers.get("x-forwarded-for") || "IP inconnue";
  const userAgent = request.headers.get("user-agent") || "navigateur inconnu";

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Admin SECURIFORM <${fromEmail}>`,
        to: toEmail,
        subject: "Connexion à l'admin SECURIFORM",
        text: `Quelqu'un s'est connecté à /admin.\n\nIP : ${ip}\nNavigateur : ${userAgent}\nDate : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}`,
      }),
    });
  } catch (err) {
    // Best-effort — a failed notification must never block admin access.
    console.error("Notification de connexion admin : échec de l'envoi.", err);
  }
}

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const expected = process.env.ADMIN_PASSWORD;

  // Fail closed: no password configured means no access, not open access.
  if (!expected) {
    return new NextResponse("Admin non configuré (ADMIN_PASSWORD manquant).", {
      status: 503,
    });
  }

  if (isCrossSiteWrite(request)) {
    return new NextResponse("Requête inter-site refusée.", { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "inconnue";
  if (isRateLimited(ip)) {
    return new NextResponse("Trop de tentatives. Réessayez dans quelques minutes.", {
      status: 429,
    });
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    const password = separatorIndex === -1 ? "" : decoded.slice(separatorIndex + 1);
    if (safeEqual(password, expected)) {
      const response = NextResponse.next();
      if (!isValidSessionCookie(request.cookies.get(SESSION_COOKIE)?.value)) {
        // waitUntil keeps the function alive long enough for the email to
        // actually send — a plain un-awaited call can get killed the
        // instant the response above goes out.
        event.waitUntil(notifyAdminLogin(request));
        response.cookies.set(SESSION_COOKIE, newSessionCookie(), {
          maxAge: SESSION_MAX_AGE,
          httpOnly: true,
          sameSite: "lax",
          // A `secure` cookie over plain HTTP (local dev) is silently
          // dropped by real browsers — that would re-trigger the email on
          // every single local admin request instead of once per session.
          secure: process.env.NODE_ENV === "production",
        });
      }
      return response;
    }
    recordFailedAttempt(ip);
  }

  return new NextResponse("Authentification requise.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin SECURIFORM"' },
  });
}
