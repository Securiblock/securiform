import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedArticles } from "@/lib/blog/content";
import BlogSearch from "./blog-search";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — SECURIFORM",
  description:
    "Conseils, actualités et guides pratiques sur la sécurité au travail, le CACES®, l'habilitation électrique et la prévention des risques.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/blog",
    title: "Blog SECURIFORM",
    description: "Conseils et guides pratiques sur la sécurité au travail.",
  },
};

export default function BlogIndexPage() {
  const articles = getPublishedArticles();

  return (
    <>
      <section className="page-hero" aria-label="Blog">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span>Blog</span>
          </p>
          <h1>Blog</h1>
          <p>
            Conseils, actualités et guides pratiques sur la sécurité au travail,
            partout en France.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-articles">
        <div className="container">
          <h2 id="titre-articles" className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
            Tous les articles
          </h2>

          {articles.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--gris)" }}>
              Aucun article publié pour le moment. Revenez bientôt !
            </p>
          ) : (
            <BlogSearch articles={articles} />
          )}
        </div>
      </section>
    </>
  );
}
