import { sql } from "./db";
import type { Article } from "./types";

type ArticleRow = {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  content: string;
  reading_time: number;
  generated_at: string;
  status: string;
  image: string | null;
  category: string | null;
};

function rowToArticle(row: ArticleRow): Article {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    metaDescription: row.meta_description,
    content: row.content,
    readingTime: row.reading_time,
    generatedAt: row.generated_at,
    status: row.status as Article["status"],
    image: row.image,
    category: row.category,
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const rows = (await sql`SELECT * FROM articles`) as ArticleRow[];
  return rows.map(rowToArticle);
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const rows = (await sql`SELECT * FROM articles WHERE slug = ${slug}`) as ArticleRow[];
  return rows[0] ? rowToArticle(rows[0]) : undefined;
}

// Upsert on id: a topic's draft article is replaced wholesale on every
// generate/regenerate/save, and its slug can change between regenerations
// (Gemini re-derives it from the new title) — ON CONFLICT (id) covers that,
// ON CONFLICT (slug) would wrongly collide if a regenerate reused an old
// slug from a different, unrelated topic.
export async function saveArticle(article: Article): Promise<void> {
  await sql`
    INSERT INTO articles (
      id, slug, title, meta_description, content, reading_time,
      generated_at, status, image, category
    ) VALUES (
      ${article.id}, ${article.slug}, ${article.title}, ${article.metaDescription},
      ${article.content}, ${article.readingTime}, ${article.generatedAt},
      ${article.status}, ${article.image}, ${article.category}
    )
    ON CONFLICT (id) DO UPDATE SET
      slug = EXCLUDED.slug,
      title = EXCLUDED.title,
      meta_description = EXCLUDED.meta_description,
      content = EXCLUDED.content,
      reading_time = EXCLUDED.reading_time,
      generated_at = EXCLUDED.generated_at,
      status = EXCLUDED.status,
      image = EXCLUDED.image,
      category = EXCLUDED.category
  `;
}

export async function deleteArticle(slug: string): Promise<void> {
  await sql`DELETE FROM articles WHERE slug = ${slug}`;
}
