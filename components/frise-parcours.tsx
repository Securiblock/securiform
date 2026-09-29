"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Etape = { delai: string; titre: string; textes: string[]; lien?: { href: string; texte: string } };

// Les 4 étapes de la méthode SECURIFORM (page L'entreprise), avec leur délai réel.
const ETAPES: Etape[] = [
  {
    delai: "Dès votre premier appel",
    titre: "Diagnostic",
    textes: [
      "Au cours d'un entretien téléphonique, nous nous assurons de la cohérence de votre demande avec les risques propres à votre entreprise et la réglementation en vigueur.",
    ],
  },
  {
    delai: "Dans l'heure",
    titre: "Proposition chiffrée",
    textes: ["Nous vous adressons dans l'heure un devis sur mesure, avec, le cas échéant, un planning d'intervention."],
  },
  {
    delai: "Le jour J",
    titre: "Formation",
    textes: [
      "Nos formateurs interviennent avec une pédagogie pratique, au plus près de votre matériel et de vos conditions réelles de travail.",
    ],
  },
  {
    delai: "Quelques semaines avant l'échéance",
    titre: "Suivi",
    textes: [
      "À l'issue de notre intervention, nous nous assurons de votre satisfaction et restons à votre service durant toute la durée de validité de la formation.",
      "Quelques semaines avant l'échéance, nous vous alertons sur la nécessité du renouvellement de la formation.",
    ],
    lien: { href: "/outils/calculateur-recyclage", texte: "Calculer mon échéance" },
  },
];

// Hauteur de l'écran (en part de la fenêtre) à laquelle la ligne « avance » et allume les étapes.
const LIGNE_DE_LECTURE = 0.6;
// Demi-hauteur de la pastille (56 px dans globals.css).
const CENTRE_PASTILLE = 28;

export default function FriseParcours() {
  const friseRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const frise = friseRef.current;
    if (!frise) return;
    const etapes = [...frise.querySelectorAll<HTMLElement>(".frise-etape")];
    const pastilles = [...frise.querySelectorAll<HTMLElement>(".frise-pastille")];

    // Sans animation demandée par le visiteur : tout est affiché d'emblée.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frise.style.setProperty("--progression", "1");
      etapes.forEach((e) => e.classList.add("is-visible", "is-active"));
      return;
    }

    // Les étapes ne sont masquées qu'à partir d'ici : sans JavaScript, la frise reste lisible.
    frise.classList.add("is-anime");

    let image = 0;
    const mettreAJour = () => {
      image = 0;
      const hauteurEcran = window.innerHeight;
      const lecture = hauteurEcran * LIGNE_DE_LECTURE;
      const cadre = frise.getBoundingClientRect();
      // La ligne va du centre de la première pastille au centre de la dernière.
      const derniere = pastilles[pastilles.length - 1].getBoundingClientRect();
      const debut = cadre.top + CENTRE_PASTILLE;
      const fin = derniere.top + derniere.height / 2;
      const progression = Math.min(1, Math.max(0, (lecture - debut) / (fin - debut)));
      frise.style.setProperty("--fin", `${(cadre.bottom - fin).toFixed(1)}px`);
      frise.style.setProperty("--progression", progression.toFixed(4));

      for (const etape of etapes) {
        const haut = etape.getBoundingClientRect().top;
        if (haut < hauteurEcran * 0.88) etape.classList.add("is-visible"); // une fois apparue, elle reste
        etape.classList.toggle("is-active", haut + CENTRE_PASTILLE < lecture);
      }
    };
    const surDefilement = () => {
      if (!image) image = requestAnimationFrame(mettreAJour);
    };

    mettreAJour();
    window.addEventListener("scroll", surDefilement, { passive: true });
    window.addEventListener("resize", surDefilement);
    return () => {
      window.removeEventListener("scroll", surDefilement);
      window.removeEventListener("resize", surDefilement);
      cancelAnimationFrame(image);
    };
  }, []);

  return (
    <ol className="frise" ref={friseRef}>
      {ETAPES.map((etape, i) => (
        <li key={etape.titre} className="frise-etape">
          <span className="frise-pastille" aria-hidden="true">
            {i + 1}
          </span>
          <div className="frise-carte">
            <span className="frise-delai">{etape.delai}</span>
            <h3>{etape.titre}</h3>
            {etape.textes.map((texte) => (
              <p key={texte}>{texte}</p>
            ))}
            {etape.lien && (
              <Link className="frise-lien" href={etape.lien.href}>
                {etape.lien.texte}
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
