"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ArticleSummary } from "@/lib/blog/content";

function formatArticleDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

// Adapted from components/hero-slider.tsx (same autoplay/swipe/keyboard
// interaction), but renders only the active article instead of stacking
// every slide with absolute positioning — simpler here since this sits
// in-flow in a normal section instead of a full-viewport hero.
export default function BlogSlider({ articles }: { articles: ArticleSummary[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startXRef = useRef<number | null>(null);

  function go(i: number) {
    setIndex(((i % articles.length) + articles.length) % articles.length);
  }

  function restart() {
    if (articles.length <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % articles.length);
    }, 6000);
  }

  useEffect(() => {
    restart();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles.length]);

  if (articles.length === 0) return null;

  const article = articles[index];

  return (
    <div
      className="blog-slider"
      aria-roledescription="carrousel"
      aria-live="polite"
      onMouseEnter={() => {
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onMouseLeave={restart}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          go(index - 1);
          restart();
        }
        if (e.key === "ArrowRight") {
          go(index + 1);
          restart();
        }
      }}
      onTouchStart={(e) => {
        startXRef.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (startXRef.current === null) return;
        const delta = e.changedTouches[0].clientX - startXRef.current;
        if (Math.abs(delta) > 50) {
          go(delta < 0 ? index + 1 : index - 1);
          restart();
        }
        startXRef.current = null;
      }}
    >
      <article
        className="blog-slide"
        role="group"
        aria-roledescription="diapositive"
        aria-label={`${index + 1} sur ${articles.length}`}
      >
        {article.image && (
          <div className="blog-slide-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.image} alt={article.title} />
          </div>
        )}
        <div className="blog-slide-content">
          {article.category && <span className="blog-slide-badge">{article.category}</span>}
          {article.date && (
            <span className="surtitre" style={{ display: "block", margin: ".8rem 0 .4rem" }}>
              {formatArticleDate(article.date)}
            </span>
          )}
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <Link className="lien" href={`/blog/${article.slug}`}>
            Lire l&apos;article →
          </Link>
        </div>
      </article>

      {articles.length > 1 && (
        <div className="blog-slider-controls">
          <div className="blog-slider-arrows">
            <button
              type="button"
              aria-label="Article précédent"
              onClick={() => {
                go(index - 1);
                restart();
              }}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Article suivant"
              onClick={() => {
                go(index + 1);
                restart();
              }}
            >
              ›
            </button>
          </div>
          <div className="blog-slider-dots" role="tablist" aria-label="Choisir un article">
            {articles.map((a, i) => (
              <button
                key={a.slug}
                type="button"
                role="tab"
                aria-label={`Aller à l'article ${i + 1}`}
                aria-selected={i === index}
                onClick={() => {
                  go(i);
                  restart();
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
