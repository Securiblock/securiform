import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/blog/content";
import { hubs, legal, pages } from "@/lib/site-pages";

const BASE_URL = "https://securiform.fr";

// Reads published_articles from the database at request time (for the
// article list below), so this can't be prerendered once at build time —
// force it to stay live.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const articles = await getPublishedArticles();

  return [
    ...hubs.map(({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...pages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legal.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...articles.map((article) => ({
      url: `${BASE_URL}/blog/${article.slug}`,
      lastModified: article.date ? new Date(article.date) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
