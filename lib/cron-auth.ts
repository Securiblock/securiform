import { timingSafeEqual } from "crypto";

// Shared by both /api/cron/* routes. Vercel Cron sends
// `Authorization: Bearer $CRON_SECRET` automatically; anything else is
// rejected, including requests with no secret configured at all (fails
// closed). Timing-safe compare, same convention as the admin password
// check in proxy.ts — a plain `!==` leaks timing information proportional
// to how many leading bytes match.
export function isAuthorizedCronRequest(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;

  const authHeader = request.headers.get("authorization") || "";
  const expected = `Bearer ${secret}`;
  const bufA = Buffer.from(authHeader);
  const bufB = Buffer.from(expected);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}
