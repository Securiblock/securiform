"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ArticleSummary } from "@/lib/blog/content";

function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogSearch({ articles }: { articles: ArticleSummary[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = useMemo(() => {
    const names = new Set<string>();
    for (const a of articles) if (a.category) names.add(a.category);
    return [...names].sort((a, b) => a.localeCompare(b, "fr"));
  }, [articles]);

  const filtered = useMemo(() => {
    const byCategory = category ? articles.filter((a) => a.category === category) : articles;

    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q)
    );
  }, [articles, query, category]);

  return (
    <>
      <div className="champ" style={{ maxWidth: 480, marginInline: "auto", marginBottom: "1.5rem" }}>
        <label htmlFor="blog-search" className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
          Rechercher un article
        </label>
        <input
          type="search"
          id="blog-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un article..."
        />
      </div>

      {categories.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".6rem",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <button
            type="button"
            onClick={() => setCategory("")}
            className="btn btn-contour"
            style={{
              padding: ".45rem 1.1rem",
              fontSize: "14px",
              background: category === "" ? "var(--rouge)" : undefined,
              color: category === "" ? "#fff" : undefined,
            }}
          >
            Toutes
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className="btn btn-contour"
              style={{
                padding: ".45rem 1.1rem",
                fontSize: "14px",
                background: category === c ? "var(--rouge)" : undefined,
                color: category === c ? "#fff" : undefined,
              }}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--gris)" }}>
          {query
            ? `Aucun article ne correspond à « ${query} ».`
            : "Aucun article dans cette catégorie."}
        </p>
      ) : (
        <div className="grille-categories cols-3">
          {filtered.map((article) => (
            <article key={article.slug} className="categorie-card">
              {article.category && <span className="categorie-badge">{article.category}</span>}
              {article.image && (
                <div className="categorie-photo">
                  <img src={article.image} alt={article.title} />
                </div>
              )}
              {article.date && (
                <span className="surtitre" style={{ display: "block", marginBottom: ".6rem" }}>
                  {formatDate(article.date)}
                </span>
              )}
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className="lien" style={{ marginTop: "1rem" }}>
                Lire l&apos;article
              </span>
              <Link className="card-cover" href={`/blog/${article.slug}`} aria-label={article.title} />
            </article>
          ))}
        </div>
      )}
    </>
  );
}
