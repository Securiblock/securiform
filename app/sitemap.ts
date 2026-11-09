import type { MetadataRoute } from "next";
import { getPublishedArticles } from "@/lib/blog/content";
import { hubs, legal, pages } from "@/lib/site-pages";

const BASE_URL = "https://securiform.fr";

// Reads published_articles from the database at request time (for the
// article list below), so this can't be prerendered once at build time —
// force it to stay live.
export const dynamic = "force-dynamic";

// Pas de lastModified pour les pages fixes : une date du jour à chaque visite n'apprend rien
// aux moteurs, qui finissent par l'ignorer. Les articles gardent leur vraie date de publication.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getPublishedArticles();

  return [
    ...hubs.map(({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...pages.map((path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legal.map((path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
    ...articles.map((article) => ({
      url: `${BASE_URL}/blog/${article.slug}`,
      ...(article.date && { lastModified: new Date(article.date) }),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
