import { getAllArticles } from "@/lib/blog/articles";
import { getCategories } from "@/lib/blog/categories";
import { getTopics } from "@/lib/blog/topics";
import BlogDashboard from "./dashboard-client";

// This reads data/topics.json straight off disk with no dynamic API calls,
// so Next would otherwise prerender it once at build time and freeze the
// list — force it to re-read on every request instead.
export const dynamic = "force-dynamic";

export default function BlogAdminPage() {
  const topics = getTopics();
  const categories = getCategories();

  // Article.id === Topic.id (see app/api/blog/generate) — used to surface
  // the featured image, if any, in the topics list without a real join.
  const images: Record<string, string> = {};
  for (const article of getAllArticles()) {
    if (article.image) images[article.id] = article.image;
  }

  return <BlogDashboard topics={topics} categories={categories} images={images} />;
}
