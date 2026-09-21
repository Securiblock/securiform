"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { ArticleSummary } from "@/lib/blog/content";

const RELATIVE_UNITS: { unit: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
  { unit: "year", seconds: 31536000 },
  { unit: "month", seconds: 2592000 },
  { unit: "week", seconds: 604800 },
  { unit: "day", seconds: 86400 },
  { unit: "hour", seconds: 3600 },
  { unit: "minute", seconds: 60 },
];
const relativeFormatter = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });

function formatRelativeDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  const seconds = (Date.now() - d.getTime()) / 1000;
  for (const { unit, seconds: unitSeconds } of RELATIVE_UNITS) {
    if (seconds >= unitSeconds) {
      return relativeFormatter.format(-Math.floor(seconds / unitSeconds), unit);
    }
  }
  return relativeFormatter.format(0, "day");
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
          <h3>{article.title}</h3>
          <div className="blog-slide-meta">
            {article.date && (
              <span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {formatRelativeDate(article.date)}
              </span>
            )}
            <span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Temps de lecture&nbsp;: {article.readingTime}&nbsp;min
            </span>
          </div>
          <Link className="blog-slide-cta" href={`/blog/${article.slug}`}>
            Lire la suite
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
        </div>
      )}
    </div>
  );
}
