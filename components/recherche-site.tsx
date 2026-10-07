"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { PAGES_RECHERCHE, type PageRecherche } from "@/lib/recherche";

const RESULTATS_MAX = 8;

// Suggestions affichées tant que rien n'est tapé.
const SUGGESTIONS = ["/caces-R489A", "/sst-initiale", "/habilitation-electrique", "/vgp", "/outils/quelle-formation"];

// Minuscules, sans accents ni ponctuation : « Élévatrices » et « elevatrice » se retrouvent.
const normaliser = (texte: string) =>
  texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

type PageIndexee = PageRecherche & { champs: { mots: string[]; texte: string; poids: number }[]; titreNormalise: string };

const INDEX: PageIndexee[] = PAGES_RECHERCHE.map((p) => {
  const champ = (texte: string, poids: number) => {
    const n = normaliser(texte);
    return { mots: n.split(" "), texte: n, poids };
  };
  return {
    ...p,
    titreNormalise: normaliser(p.titre),
    champs: [champ(p.titre, 10), champ(p.motsCles, 6), champ(p.href.replace(/[/#-]/g, " "), 4), champ(p.description, 2)],
  };
});

// Chaque mot tapé doit se retrouver dans la page (début de mot de préférence) ; le score favorise le titre.
function rechercher(requete: string): PageRecherche[] {
  const termes = normaliser(requete).split(" ").filter(Boolean);
  if (!termes.length) return [];
  const resultats: { page: PageRecherche; score: number }[] = [];
  for (const page of INDEX) {
    let score = 0;
    let complet = true;
    for (const terme of termes) {
      let meilleur = 0;
      for (const { mots, texte, poids } of page.champs) {
        if (mots.some((m) => m.startsWith(terme))) meilleur = Math.max(meilleur, poids);
        else if (terme.length >= 3 && texte.includes(terme)) meilleur = Math.max(meilleur, poids / 2);
      }
      if (!meilleur) {
        complet = false;
        break;
      }
      score += meilleur;
    }
    if (!complet) continue;
    if (page.titreNormalise.includes(termes.join(" "))) score += 8;
    resultats.push({ page, score });
  }
  return resultats.sort((a, b) => b.score - a.score).slice(0, RESULTATS_MAX).map((r) => r.page);
}

const Loupe = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
    <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

// Loupe de l'en-tête et fenêtre de recherche (Ctrl + K ou « / » pour l'ouvrir au clavier).
export default function RechercheSite() {
  const [ouvert, setOuvert] = useState(false);
  const [requete, setRequete] = useState("");
  const [actif, setActif] = useState(0);
  const champ = useRef<HTMLInputElement>(null);
  const bouton = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const id = useId();

  const resultats = requete.trim()
    ? rechercher(requete)
    : SUGGESTIONS.map((href) => PAGES_RECHERCHE.find((p) => p.href === href)!).filter(Boolean);

  const ouvrir = () => {
    setRequete("");
    setActif(0);
    setOuvert(true);
  };
  const fermer = () => {
    setOuvert(false);
    bouton.current?.focus();
  };

  // Raccourcis clavier globaux.
  useEffect(() => {
    const surTouche = (e: globalThis.KeyboardEvent) => {
      const saisie = (e.target as HTMLElement | null)?.closest("input, textarea, select, [contenteditable]");
      if ((e.key === "k" && (e.ctrlKey || e.metaKey)) || (e.key === "/" && !saisie)) {
        e.preventDefault();
        ouvrir();
      }
    };
    document.addEventListener("keydown", surTouche);
    return () => document.removeEventListener("keydown", surTouche);
  }, []);

  // Fenêtre ouverte : focus dans le champ et page bloquée derrière.
  useEffect(() => {
    if (!ouvert) return;
    champ.current?.focus();
    const ancien = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = ancien;
    };
  }, [ouvert]);

  const aller = (page: PageRecherche) => {
    setOuvert(false);
    router.push(page.href);
  };

  const clavier = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      fermer();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActif((a) => Math.min(a + 1, resultats.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActif((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && resultats[actif]) {
      e.preventDefault();
      aller(resultats[actif]);
    }
  };

  return (
    <>
      <button ref={bouton} type="button" className="recherche-declencheur" aria-label="Rechercher sur le site" title="Rechercher (Ctrl + K)" onClick={ouvrir}>
        <Loupe />
      </button>

      {ouvert && (
        <div className="recherche-fond" onMouseDown={(e) => e.target === e.currentTarget && fermer()}>
          <div className="recherche-fenetre" role="dialog" aria-modal="true" aria-label="Rechercher sur le site">
            <div className="recherche-saisie">
              <Loupe />
              <input
                ref={champ}
                type="search"
                value={requete}
                onChange={(e) => {
                  setRequete(e.target.value);
                  setActif(0);
                }}
                onKeyDown={clavier}
                placeholder="Rechercher une formation, un CACES®, une VGP…"
                aria-label="Rechercher"
                role="combobox"
                aria-expanded={resultats.length > 0}
                aria-controls={`${id}-liste`}
                aria-activedescendant={resultats[actif] ? `${id}-${actif}` : undefined}
                autoComplete="off"
              />
              <button type="button" className="recherche-fermer" onClick={fermer} aria-label="Fermer la recherche">
                Échap
              </button>
            </div>

            {!requete.trim() && <p className="recherche-intitule">Recherches fréquentes</p>}
            {resultats.length > 0 ? (
              <ul id={`${id}-liste`} className="recherche-resultats" role="listbox">
                {resultats.map((page, i) => (
                  <li key={page.href} id={`${id}-${i}`} role="option" aria-selected={i === actif}>
                    <Link
                      href={page.href}
                      className={i === actif ? "recherche-resultat is-actif" : "recherche-resultat"}
                      onMouseEnter={() => setActif(i)}
                      onClick={() => setOuvert(false)}
                      tabIndex={-1}
                    >
                      <span className={`recherche-categorie is-${page.categorie.toLowerCase()}`}>{page.categorie}</span>
                      <span className="recherche-texte">
                        <strong>{page.titre}</strong>
                        <span>{page.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="recherche-vide">
                <p>
                  Aucune page ne correspond à «&nbsp;{requete.trim()}&nbsp;».
                </p>
                <p>
                  Essayez un autre mot, faites notre{" "}
                  <Link href="/outils/quelle-formation" onClick={() => setOuvert(false)}>
                    questionnaire
                  </Link>{" "}
                  ou appelez-nous au <a href="tel:+33320673490">03&nbsp;20&nbsp;67&nbsp;34&nbsp;90</a>.
                </p>
              </div>
            )}
            <p className="recherche-aide" aria-hidden="true">
              <kbd>↑</kbd> <kbd>↓</kbd> pour choisir · <kbd>Entrée</kbd> pour ouvrir · <kbd>Échap</kbd> pour fermer
            </p>
          </div>
        </div>
      )}
    </>
  );
}
