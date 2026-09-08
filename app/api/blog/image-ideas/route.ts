import { NextResponse } from "next/server";
import { getArticle } from "@/lib/blog/articles";
import { suggestImageIdeas } from "@/lib/blog/gemini";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const slug = body?.slug;
  if (typeof slug !== "string" || !slug) {
    return NextResponse.json({ error: "slug manquant." }, { status: 400 });
  }

  const article = getArticle(slug);
  if (!article) {
    return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  }

  try {
    const ideas = await suggestImageIdeas(article.title, article.content);
    return NextResponse.json({ ideas });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
