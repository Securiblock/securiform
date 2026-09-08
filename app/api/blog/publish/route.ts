import matter from "gray-matter";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
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
  // No separate "approve" step: publishing a freshly generated article is
  // itself the validation. "published" is also allowed, so an already-live
  // article can be re-published to push saved edits (image, content...) that
  // "Sauvegarder" alone only writes to the draft, not to the live .mdx.
  if (topic.status === "pending") {
    return NextResponse.json(
      { error: "Générez d'abord l'article avant de le publier." },
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
  const mdxFile = join(BLOG_CONTENT_DIR, `${article.slug}.mdx`);

  // Keep the original publish date on a re-publish rather than bumping it to
  // today — updating the image shouldn't make the article look brand new.
  const existingDate = existsSync(mdxFile)
    ? matter(readFileSync(mdxFile, "utf8")).data.date
    : undefined;

  const mdx = matter.stringify(article.content, {
    title: article.title,
    description: article.metaDescription,
    date: existingDate || now.slice(0, 10),
    slug: article.slug,
    readingTime: article.readingTime,
    image: article.image || null,
    published: true,
  });

  writeFileSync(mdxFile, mdx, "utf8");

  saveArticle({ ...article, status: "published" });
  const updatedTopic = updateTopic(topic.id, {
    status: "published",
    publishedAt: topic.publishedAt || now,
  });

  return NextResponse.json({ slug: article.slug, topic: updatedTopic });
}
