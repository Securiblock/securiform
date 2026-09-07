import matter from "gray-matter";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { marked } from "marked";
import { join } from "path";

const BLOG_CONTENT_DIR = join(process.cwd(), "content", "blog");

export type PublishedArticle = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  html: string;
};

export type ArticleSummary = Omit<PublishedArticle, "html">;

// Listing for /blog — only frontmatter, no Markdown rendering needed here.
export function getPublishedArticles(): ArticleSummary[] {
  if (!existsSync(BLOG_CONTENT_DIR)) return [];

  const summaries: ArticleSummary[] = [];
  for (const file of readdirSync(BLOG_CONTENT_DIR)) {
    if (!file.endsWith(".mdx")) continue;
    const slug = file.replace(/\.mdx$/, "");
    const { data } = matter(readFileSync(join(BLOG_CONTENT_DIR, file), "utf8"));
    if (!data.published) continue;

    summaries.push({
      slug: data.slug || slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      readingTime: data.readingTime || 1,
    });
  }

  return summaries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPublishedArticle(slug: string): PublishedArticle | undefined {
  const file = join(BLOG_CONTENT_DIR, `${slug}.mdx`);
  if (!existsSync(file)) return undefined;

  const raw = readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  if (!data.published) return undefined;

  return {
    slug: data.slug || slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    readingTime: data.readingTime || 1,
    html: marked.parse(content, { async: false }) as string,
  };
}

// Flips the `published` flag in an already-published article's MDX
// frontmatter, without touching its content. Used when a published topic is
// trashed (unpublish) or restored (republish). No-op if the file is missing.
export function setPublishedFlag(slug: string, published: boolean): void {
  const file = join(BLOG_CONTENT_DIR, `${slug}.mdx`);
  if (!existsSync(file)) return;

  const raw = readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  writeFileSync(file, matter.stringify(content, { ...data, published }), "utf8");
}
