import { timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Shared-password gate for the blog admin: /admin/** (the UI) and
// /api/blog/** (everything it calls — generation, publish, topic CRUD).
// /api/cron/** is deliberately excluded: it has its own Bearer-token check
// for Vercel Cron, which doesn't send Basic Auth credentials.
export const config = {
  matcher: ["/admin/:path*", "/api/blog/:path*"],
};

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function proxy(request: NextRequest) {
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
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentification requise.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin SECURIFORM"' },
  });
}
