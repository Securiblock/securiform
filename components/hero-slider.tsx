"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Slide = {
  tag: string;
  heading: React.ReactNode;
  text: string;
  href: string;
  image: string;
  ariaLabel: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startXRef = useRef<number | null>(null);

  function go(i: number) {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }

  function restart() {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
  }

  useEffect(() => {
    restart();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="hero" aria-label="Nos domaines de formation" ref={heroRef}>
      <h1 style={{ position: "absolute", left: "-9999px" }}>
        SECURIFORM — Organisme de formation à la sécurité au travail sur
        toute la France
      </h1>
      <div
        className="slider"
        id="slider"
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
        {slides.map((slide, i) => (
          <article
            key={slide.href}
            className={`slide${i === index ? " active" : ""}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
            role="group"
            aria-roledescription="diapositive"
            aria-label={`${i + 1} sur ${slides.length}`}
          >
            <div className="container">
              <div className="slide-content">
                <span className="slide-tag">{slide.tag}</span>
                <h2>{slide.heading}</h2>
                <p>{slide.text}</p>
                <Link className="btn btn-plein" href={slide.href}>
                  En savoir +
                </Link>
              </div>
            </div>
          </article>
        ))}

        <div className="slider-controls">
          <div
            className="slider-dots"
            role="tablist"
            aria-label="Choisir une diapositive"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.href}
                type="button"
                role="tab"
                aria-label={`Aller à la diapositive ${i + 1}`}
                aria-selected={i === index}
                onClick={() => {
                  go(i);
                  restart();
                }}
              />
            ))}
          </div>
          <div className="slider-arrows">
            <button
              type="button"
              id="prev"
              aria-label="Diapositive précédente"
              onClick={() => {
                go(index - 1);
                restart();
              }}
            >
              ‹
            </button>
            <button
              type="button"
              id="next"
              aria-label="Diapositive suivante"
              onClick={() => {
                go(index + 1);
                restart();
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
