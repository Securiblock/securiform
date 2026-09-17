import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

// Shared-password gate for the blog admin: /admin/** (the UI) and
// /api/blog/** (everything it calls — generation, publish, topic CRUD).
// /api/cron/** is deliberately excluded: it has its own Bearer-token check
// for Vercel Cron, which doesn't send Basic Auth credentials.
export const config = {
  matcher: ["/admin/:path*", "/api/blog/:path*"],
};

const SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 8; // 8h — a fresh browser session re-notifies

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

// Basic Auth re-sends the same credentials on every single request (every
// asset, every API call), so this can't fire on every authenticated
// request — it'd be dozens of emails per admin visit. The session cookie
// below caps it to once per ~8h browser session instead.
async function notifyAdminLogin(request: NextRequest): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
  const toEmail = process.env.BLOG_NOTIFY_EMAIL || "henri@securiblock.fr";
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

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf8");
    const separatorIndex = decoded.indexOf(":");
    const password = separatorIndex === -1 ? "" : decoded.slice(separatorIndex + 1);
    if (safeEqual(password, expected)) {
      const response = NextResponse.next();
      if (!request.cookies.has(SESSION_COOKIE)) {
        // waitUntil keeps the function alive long enough for the email to
        // actually send — a plain un-awaited call can get killed the
        // instant the response above goes out.
        event.waitUntil(notifyAdminLogin(request));
        response.cookies.set(SESSION_COOKIE, "1", {
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
  }

  return new NextResponse("Authentification requise.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin SECURIFORM"' },
  });
}
