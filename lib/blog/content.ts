import { marked } from "marked";
import { sql } from "./db";
import type { Article } from "./types";

type PublishedRow = {
  slug: string;
  title: string;
  description: string;
  date: string;
  reading_time: number;
  image: string | null;
  category: string | null;
  content: string;
  published: boolean;
};

export type PublishedArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  image: string | null;
  category: string | null;
  html: string;
};

// `content` here is the raw Markdown body, kept only so /blog can search
// inside article text client-side — it's not rendered from this type.
export type ArticleSummary = Omit<PublishedArticle, "html"> & { content: string };

function rowToSummary(row: PublishedRow): ArticleSummary {
  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    date: row.date,
    readingTime: row.reading_time,
    image: row.image,
    category: row.category,
    content: row.content,
  };
}

// Tags the closing "## À retenir" heading (see lib/blog/gemini.ts prompt) with
// a class so it can be styled as a red callout block — a plain string match
// rather than a Markdown-level flag, so older articles without this section
// are left untouched instead of mis-styling whatever their last H2 is.
function markKeyTakeawaysHeading(html: string): string {
  return html.replace("<h2>À retenir</h2>", '<h2 class="a-retenir">À retenir</h2>');
}

export async function getPublishedArticles(): Promise<ArticleSummary[]> {
  const rows = (await sql`
    SELECT * FROM published_articles WHERE published = true ORDER BY date DESC
  `) as PublishedRow[];
  return rows.map(rowToSummary);
}

export async function getPublishedArticle(slug: string): Promise<PublishedArticle | undefined> {
  const rows = (await sql`
    SELECT * FROM published_articles WHERE slug = ${slug} AND published = true
  `) as PublishedRow[];
  const row = rows[0];
  if (!row) return undefined;

  return {
    slug: row.slug,
    title: row.title,
    description: row.description,
    date: row.date,
    readingTime: row.reading_time,
    image: row.image,
    category: row.category,
    html: markKeyTakeawaysHeading(marked.parse(row.content, { async: false }) as string),
  };
}

// Publishes (or re-publishes) an article: upserts by slug. Keeps the
// original `date` across a re-publish rather than bumping it to today —
// updating the image or fixing a typo shouldn't make the article look
// brand new.
export async function publishArticle(article: Article): Promise<void> {
  const existingRows = (await sql`
    SELECT date FROM published_articles WHERE slug = ${article.slug}
  `) as { date: string }[];
  const date = existingRows[0]?.date ?? new Date().toISOString().slice(0, 10);

  await sql`
    INSERT INTO published_articles (
      slug, title, description, date, reading_time, image, category, content, published
    ) VALUES (
      ${article.slug}, ${article.title}, ${article.metaDescription}, ${date},
      ${article.readingTime}, ${article.image}, ${article.category}, ${article.content}, true
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      description = EXCLUDED.description,
      reading_time = EXCLUDED.reading_time,
      image = EXCLUDED.image,
      category = EXCLUDED.category,
      content = EXCLUDED.content,
      published = true
  `;
}

// Flips the `published` flag for an already-published article, without
// touching its content. Used when a published topic is trashed (unpublish)
// or restored (republish). No-op if the row doesn't exist.
export async function setPublishedFlag(slug: string, published: boolean): Promise<void> {
  await sql`UPDATE published_articles SET published = ${published} WHERE slug = ${slug}`;
}

// Permanently removes a published article — used when a topic is purged
// from the corbeille (permanent delete), not on a normal unpublish.
export async function deletePublishedArticle(slug: string): Promise<void> {
  await sql`DELETE FROM published_articles WHERE slug = ${slug}`;
}
