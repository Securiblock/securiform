import { NextResponse } from "next/server";
import { runAutoGenerate } from "@/lib/blog/auto-generate";
import { isAuthorizedCronRequest } from "@/lib/cron-auth";

// Triggered by Vercel Cron (see vercel.json) every 2 days. Vercel sends
// `Authorization: Bearer $CRON_SECRET` automatically once CRON_SECRET is set
// as an env var on the project — this route rejects anything else,
// including requests with no secret configured at all (fails closed).
export async function GET(request: Request) {
  if (!isAuthorizedCronRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await runAutoGenerate();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Cron génération article : échec.", err);
    return NextResponse.json(
      { generated: false, error: err instanceof Error ? err.message : "Erreur inconnue." },
      { status: 500 }
    );
  }
}
