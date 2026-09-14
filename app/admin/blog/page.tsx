import { getAllArticles } from "@/lib/blog/articles";
import { getCategories } from "@/lib/blog/categories";
import { getTopics } from "@/lib/blog/topics";
import BlogDashboard from "./dashboard-client";

// Reads the database on every request rather than once at build time —
// this list changes constantly as topics/articles are created and edited.
export const dynamic = "force-dynamic";

export default async function BlogAdminPage() {
  const topics = await getTopics();
  const categories = await getCategories();

  // Article.id === Topic.id (see app/api/blog/generate) — used to surface
  // the featured image, if any, in the topics list without a real join.
  const images: Record<string, string> = {};
  for (const article of await getAllArticles()) {
    if (article.image) images[article.id] = article.image;
  }

  return <BlogDashboard topics={topics} categories={categories} images={images} />;
}
