import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedArticle, getPublishedArticles } from "@/lib/blog/content";

type Params = { params: Promise<{ slug: string }> };

function formatArticleDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

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
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) notFound();

  const relatedArticles = article.category
    ? getPublishedArticles()
        .filter((a) => a.category === article.category && a.slug !== article.slug)
        .slice(0, 3)
    : [];

  return (
    <>
      <section className="page-hero" aria-label={article.title}>
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span>Blog</span>
          </p>
          {article.category && (
            <span className="surtitre" style={{ display: "block", marginBottom: ".6rem" }}>
              {article.category}
            </span>
          )}
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-article">
        <div className="container">
          <h2 id="titre-article" className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
            {article.title}
          </h2>
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              style={{
                width: "100%",
                maxWidth: 760,
                margin: "0 auto 2.5rem",
                borderRadius: 12,
                display: "block",
              }}
            />
          )}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="section section-alt" aria-labelledby="titre-lies">
          <div className="container">
            <div className="section-head">
              <span className="surtitre">À lire aussi</span>
              <h2 id="titre-lies">Articles liés</h2>
              <hr className="trait" />
            </div>
            <div className="grille-categories cols-3">
              {relatedArticles.map((related) => (
                <article key={related.slug} className="categorie-card">
                  {related.category && (
                    <span className="categorie-badge">{related.category}</span>
                  )}
                  {related.image && (
                    <div className="categorie-photo">
                      <img src={related.image} alt={related.title} />
                    </div>
                  )}
                  {related.date && (
                    <span className="surtitre" style={{ display: "block", marginBottom: ".6rem" }}>
                      {formatArticleDate(related.date)}
                    </span>
                  )}
                  <h3>{related.title}</h3>
                  <p>{related.description}</p>
                  <span className="lien" style={{ marginTop: "1rem" }}>
                    Lire l&apos;article
                  </span>
                  <Link
                    className="card-cover"
                    href={`/blog/${related.slug}`}
                    aria-label={related.title}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
