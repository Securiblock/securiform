import { NextResponse } from "next/server";
import { getArticle, saveArticle } from "@/lib/blog/articles";
import { getCategories } from "@/lib/blog/categories";
import { generateArticle } from "@/lib/blog/gemini";
import { getTopic, updateTopic } from "@/lib/blog/topics";
import type { Article } from "@/lib/blog/types";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const topicId = body?.topicId;
  if (typeof topicId !== "string" || !topicId) {
    return NextResponse.json({ error: "topicId manquant." }, { status: 400 });
  }

  const topic = getTopic(topicId);
  if (!topic) {
    return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
  }

  const categoryNames = getCategories().map((c) => c.name);

  let generated;
  try {
    generated = await generateArticle(topic, categoryNames);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue lors de la génération.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  // Régénération sur le même slug : on garde l'image déjà choisie plutôt que
  // de la perdre à chaque nouvelle génération.
  const previousImage =
    topic.slug === generated.slug ? getArticle(generated.slug)?.image ?? null : null;

  // Le sujet a déjà une catégorie choisie manuellement -> on la garde telle
  // quelle. Sinon on reprend la suggestion de Gemini (peut rester null).
  const category = topic.category || generated.suggestedCategory;

  const now = new Date().toISOString();
  const article: Article = {
    id: topic.id,
    slug: generated.slug,
    title: generated.title,
    metaDescription: generated.metaDescription,
    content: generated.content,
    readingTime: generated.readingTime,
    generatedAt: now,
    status: "generated",
    image: previousImage,
    category,
  };

  saveArticle(article);
  const updatedTopic = updateTopic(topic.id, {
    status: "generated",
    generatedAt: now,
    slug: article.slug,
    category,
  });

  return NextResponse.json({ article, topic: updatedTopic });
}
