import { NextResponse } from "next/server";
import { suggestTopics } from "@/lib/blog/gemini";
import { getTopics } from "@/lib/blog/topics";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const count =
    typeof body?.count === "number" && Number.isFinite(body.count)
      ? Math.min(Math.max(Math.round(body.count), 1), 10)
      : 5;
  const brief = typeof body?.brief === "string" ? body.brief : "";

  const existingTitles = getTopics()
    .filter((t) => !t.deletedAt)
    .map((t) => t.title);

  try {
    const suggestions = await suggestTopics(existingTitles, count, brief);
    return NextResponse.json({ suggestions });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue lors de la suggestion.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
