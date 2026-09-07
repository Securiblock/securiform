import matter from "gray-matter";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";
import { getArticle, saveArticle } from "@/lib/blog/articles";
import { getTopic, updateTopic } from "@/lib/blog/topics";

const BLOG_CONTENT_DIR = join(process.cwd(), "content", "blog");

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
  if (topic.status !== "approved") {
    return NextResponse.json(
      { error: "Seul un article validé (statut « approved ») peut être publié." },
      { status: 409 }
    );
  }
  if (!topic.slug) {
    return NextResponse.json({ error: "Ce sujet n'a pas encore d'article généré." }, { status: 409 });
  }

  const article = getArticle(topic.slug);
  if (!article) {
    return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  }

  if (!existsSync(BLOG_CONTENT_DIR)) mkdirSync(BLOG_CONTENT_DIR, { recursive: true });

  const now = new Date().toISOString();
  const mdx = matter.stringify(article.content, {
    title: article.title,
    description: article.metaDescription,
    date: now.slice(0, 10),
    slug: article.slug,
    readingTime: article.readingTime,
    published: true,
  });

  writeFileSync(join(BLOG_CONTENT_DIR, `${article.slug}.mdx`), mdx, "utf8");

  saveArticle({ ...article, status: "published" });
  const updatedTopic = updateTopic(topic.id, {
    status: "published",
    publishedAt: now,
  });

  return NextResponse.json({ slug: article.slug, topic: updatedTopic });
}
