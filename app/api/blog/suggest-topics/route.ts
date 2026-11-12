import { NextResponse } from "next/server";
import { getCategories } from "@/lib/blog/categories";
import { computeCategoryStats } from "@/lib/blog/category-stats";
import { mentionsForbiddenTopic } from "@/lib/blog/forbidden";
import { suggestTopics } from "@/lib/blog/gemini";
import { getTopics } from "@/lib/blog/topics";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const count =
    typeof body?.count === "number" && Number.isFinite(body.count)
      ? Math.min(Math.max(Math.round(body.count), 1), 10)
      : 5;
  const brief = typeof body?.brief === "string" ? body.brief : "";

  const allTopics = await getTopics();
  const existingTitles = allTopics.filter((t) => !t.deletedAt).map((t) => t.title);

  // Catégories gérées avec leur nombre d'articles, pour que Gemini classe
  // ses idées et vise en priorité les catégories en retard. Une catégorie
  // SST éventuelle n'est jamais proposée (voir lib/blog/forbidden.ts).
  const categoryNames = (await getCategories())
    .map((c) => c.name)
    .filter((name) => !mentionsForbiddenTopic(name));
  const available = computeCategoryStats(allTopics, categoryNames)
    .filter((s): s is typeof s & { name: string } => s.name !== null && categoryNames.includes(s.name))
    .map((s) => ({ name: s.name, articles: s.articles }));

  const requested = typeof body?.category === "string" ? body.category.trim() : "";
  const target = requested ? (categoryNames.find((n) => n === requested) ?? null) : null;
  if (requested && !target) {
    return NextResponse.json({ error: `Catégorie inconnue : « ${requested} ».` }, { status: 400 });
  }

  try {
    const suggestions = await suggestTopics(existingTitles, count, brief, { available, target });
    return NextResponse.json({ suggestions });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue lors de la suggestion.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
