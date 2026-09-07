import { NextResponse } from "next/server";
import { saveArticle } from "@/lib/blog/articles";
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

  let generated;
  try {
    generated = await generateArticle(topic);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue lors de la génération.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

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
  };

  saveArticle(article);
  const updatedTopic = updateTopic(topic.id, {
    status: "generated",
    generatedAt: now,
    slug: article.slug,
  });

  return NextResponse.json({ article, topic: updatedTopic });
}
