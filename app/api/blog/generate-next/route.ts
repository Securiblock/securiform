import { NextResponse } from "next/server";
import { runAutoGenerate } from "@/lib/blog/auto-generate";

// Manual "test now" trigger for the admin dashboard — runs the exact same
// logic as the Vercel Cron route, without the secret check, since it's only
// reachable from inside /admin (unauthenticated for now, like the rest of it).
export async function POST() {
  try {
    const result = await runAutoGenerate();
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      { generated: false, error: err instanceof Error ? err.message : "Erreur inconnue." },
      { status: 500 }
    );
  }
}
