import { NextResponse } from "next/server";
import { getArticle, saveArticle } from "@/lib/blog/articles";
import { publishArticle } from "@/lib/blog/content";
import { getTopic, updateTopic } from "@/lib/blog/topics";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const topicId = body?.topicId;
  if (typeof topicId !== "string" || !topicId) {
    return NextResponse.json({ error: "topicId manquant." }, { status: 400 });
  }

  const topic = await getTopic(topicId);
  if (!topic) {
    return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
  }
  // No separate "approve" step: publishing a freshly generated article is
  // itself the validation. "published" is also allowed, so an already-live
  // article can be re-published to push saved edits (image, content...) that
  // "Sauvegarder" alone only writes to the draft, not to the live page.
  if (topic.status === "pending") {
    return NextResponse.json(
      { error: "Générez d'abord l'article avant de le publier." },
      { status: 409 }
    );
  }
  if (!topic.slug) {
    return NextResponse.json({ error: "Ce sujet n'a pas encore d'article généré." }, { status: 409 });
  }

  const article = await getArticle(topic.slug);
  if (!article) {
    return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  }

  await publishArticle(article);

  const now = new Date().toISOString();
  await saveArticle({ ...article, status: "published" });
  const updatedTopic = await updateTopic(topic.id, {
    status: "published",
    publishedAt: topic.publishedAt || now,
  });

  return NextResponse.json({ slug: article.slug, topic: updatedTopic });
}
