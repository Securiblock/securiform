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
  image: string | null;
  category: string | null;
  html: string;
};

// `content` here is the raw Markdown body, kept only so /blog can search
// inside article text client-side — it's not rendered from this type.
export type ArticleSummary = Omit<PublishedArticle, "html"> & { content: string };

// Listing for /blog — frontmatter + raw content, no Markdown-to-HTML
// rendering needed here (that only happens on the article page itself).
export function getPublishedArticles(): ArticleSummary[] {
  if (!existsSync(BLOG_CONTENT_DIR)) return [];

  const summaries: ArticleSummary[] = [];
  for (const file of readdirSync(BLOG_CONTENT_DIR)) {
    if (!file.endsWith(".mdx")) continue;
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = matter(readFileSync(join(BLOG_CONTENT_DIR, file), "utf8"));
    if (!data.published) continue;

    summaries.push({
      slug: data.slug || slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      readingTime: data.readingTime || 1,
      image: data.image || null,
      category: data.category || null,
      content,
    });
  }

  return summaries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Tags the closing "## À retenir" heading (see lib/blog/gemini.ts prompt) with
// a class so it can be styled as a red callout block — a plain string match
// rather than a Markdown-level flag, so older articles without this section
// are left untouched instead of mis-styling whatever their last H2 is.
function markKeyTakeawaysHeading(html: string): string {
  return html.replace("<h2>À retenir</h2>", '<h2 class="a-retenir">À retenir</h2>');
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
    image: data.image || null,
    category: data.category || null,
    html: markKeyTakeawaysHeading(marked.parse(content, { async: false }) as string),
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
