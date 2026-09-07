import { notFound, redirect } from "next/navigation";
import { getArticle } from "@/lib/blog/articles";
import { getTopic } from "@/lib/blog/topics";
import ArticleEditor from "./editor-client";

type Params = { params: Promise<{ id: string }> };

export default async function EditArticlePage({ params }: Params) {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) notFound();
  if (!topic.slug) redirect(`/admin/blog/${id}`);

  const article = getArticle(topic.slug);
  if (!article) redirect(`/admin/blog/${id}`);

  return <ArticleEditor key={article.generatedAt} topic={topic} article={article} />;
}
