import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedArticle } from "@/lib/blog/content";

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} — Blog SECURIFORM`,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      siteName: "SECURIFORM",
      locale: "fr_FR",
      url: `/blog/${slug}`,
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) notFound();

  return (
    <>
      <section className="page-hero" aria-label={article.title}>
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span>Blog</span>
          </p>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-article">
        <div className="container">
          <h2 id="titre-article" className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
            {article.title}
          </h2>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>
    </>
  );
}
