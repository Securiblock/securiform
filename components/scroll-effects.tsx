"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Global, page-agnostic effects ported from script.js: reveals `.reveal`
 * elements as they enter the viewport, and animates `.stat-num` counters.
 * Mounted once in the root layout, which never unmounts on client-side
 * navigation — so this must key off the pathname to re-scan the DOM for
 * each new page's `.reveal`/`.stat-num` elements after every navigation.
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealEls = document.querySelectorAll(".reveal:not(.visible)");
    let revealObserver: IntersectionObserver | undefined;
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => revealObserver?.observe(el));
    }

    function animateCounter(el: Element) {
      const target = parseFloat((el as HTMLElement).dataset.count || "0");
      const suffix = (el as HTMLElement).dataset.suffix || "";
      const decimals = (
        ((el as HTMLElement).dataset.count || "").split(".")[1] || ""
      ).length;

      if (reduced) {
        el.textContent = target.toFixed(decimals).replace(".", ",") + suffix;
        return;
      }

      const duration = 1400;
      const start = performance.now();
      function step(t: number) {
        const p = Math.min((t - start) / duration, 1);
        el.textContent =
          (target * (1 - Math.pow(1 - p, 3))).toFixed(decimals).replace(".", ",") +
          suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    const nums = document.querySelectorAll(".stat-num");
    let countObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      countObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              countObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      nums.forEach((el) => countObserver?.observe(el));
    } else {
      nums.forEach((el) => animateCounter(el));
    }

    return () => {
      revealObserver?.disconnect();
      countObserver?.disconnect();
    };
  }, [pathname]);

  return null;
}
