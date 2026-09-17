import type { Metadata } from "next";
import Link from "next/link";
import BlogSlider from "@/components/blog-slider";
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

export default async function BlogIndexPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <section className="section" aria-label="Blog" style={{ paddingTop: 0, paddingBottom: 15 }}>
        <h1 style={{ position: "absolute", left: "-9999px" }}>
          Blog SECURIFORM — Conseils et guides pratiques sur la sécurité au travail
        </h1>
        {articles.length > 0 && <BlogSlider articles={articles.slice(0, 8)} />}
      </section>

      <section className="section section-alt" aria-labelledby="titre-articles">
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

      <section className="cta" aria-labelledby="titre-cta">
        <div className="container">
          <h2 id="titre-cta">Vous avez une question sur le blog&nbsp;?</h2>
          <p>
            Notre équipe vous répond rapidement, et notre boutique propose le
            matériel de sécurité dont vous avez besoin.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-blanc" href="/nous-contacter">
              Nous contacter
            </Link>
            <a
              className="btn btn-contour"
              style={{ borderColor: "#fff", color: "#fff" }}
              href="https://www.securistore.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir la boutique
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
