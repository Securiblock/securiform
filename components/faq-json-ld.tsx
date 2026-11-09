"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ID = "faq-jsonld";
const texte = (n: Node) => (n.textContent ?? "").replace(/\s+/g, " ").trim();

// Données structurées FAQPage construites à partir des FAQ affichées (details.faq-item) :
// aucune copie des questions à maintenir, elles suivent toujours le contenu de la page.
export default function FaqJsonLd() {
  const pathname = usePathname();

  useEffect(() => {
    document.getElementById(ID)?.remove();

    const questions = Array.from(document.querySelectorAll<HTMLDetailsElement>("details.faq-item")).flatMap((item) => {
      const summary = item.querySelector("summary");
      if (!summary) return [];
      const reponse = item.cloneNode(true) as HTMLDetailsElement;
      reponse.querySelector("summary")?.remove();
      const question = texte(summary);
      const answer = texte(reponse);
      return question && answer
        ? [{ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } }]
        : [];
    });
    if (questions.length === 0) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = ID;
    script.text = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions });
    document.head.appendChild(script);
  }, [pathname]);

  return null;
}
