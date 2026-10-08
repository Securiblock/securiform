"use client";

import Link from "next/link";
import { useEffect, useId, useRef, type FocusEvent, type PointerEvent } from "react";
import type { MegaMenu as ContenuMegaMenu } from "@/lib/nav";

// Délais du survol à la souris : évite qu'un simple passage du curseur ouvre ou ferme le panneau.
const DELAI_OUVERTURE = 120;
const DELAI_FERMETURE = 250;

type Props = {
  libelle: string;
  // Page de l'onglet (ex. /vgp) : un clic sur son nom y mène.
  href: string;
  contenu: ContenuMegaMenu;
  actif: boolean;
  // L'état ouvert est tenu par l'en-tête : un seul panneau ouvert à la fois.
  ouvert: boolean;
  definirOuvert: (ouvert: boolean) => void;
  onNaviguer: () => void;
};

// Onglet à méga menu du menu principal. Sur ordinateur : panneau pleine largeur sous l'en-tête,
// ouvert au survol ou au clic. Dans le menu mobile : accordéon (voir .mega dans globals.css).
export default function MegaMenu({ libelle, href, contenu, actif, ouvert, definirOuvert, onNaviguer }: Props) {
  const minuteur = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Vrai tant que la souris est sur l'onglet ou le panneau : un clic ne doit alors pas refermer
  // un panneau que le survol vient d'ouvrir (réflexe fréquent : survoler puis cliquer).
  const survolEnCours = useRef(false);
  const declencheur = useRef<HTMLButtonElement>(null);
  const racine = useRef<HTMLLIElement>(null);
  const idPanneau = useId();

  const annulerMinuteur = () => {
    if (minuteur.current) clearTimeout(minuteur.current);
  };
  const programmer = (valeur: boolean, delai: number) => {
    annulerMinuteur();
    minuteur.current = setTimeout(() => definirOuvert(valeur), delai);
  };

  // Échap ferme le panneau ; un clic en dehors aussi.
  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        definirOuvert(false);
        declencheur.current?.focus();
      }
    };
    const surClic = (e: MouseEvent) => {
      if (!racine.current?.contains(e.target as Node)) definirOuvert(false);
    };
    document.addEventListener("keydown", surTouche);
    document.addEventListener("mousedown", surClic);
    return () => {
      document.removeEventListener("keydown", surTouche);
      document.removeEventListener("mousedown", surClic);
    };
  }, [ouvert, definirOuvert]);

  useEffect(() => annulerMinuteur, []);

  // Survol : uniquement à la souris et sur grand écran (le menu mobile fonctionne au toucher).
  const survolPossible = (e: PointerEvent) => e.pointerType === "mouse" && window.matchMedia("(min-width: 1025px)").matches;

  const naviguer = () => {
    annulerMinuteur();
    definirOuvert(false);
    onNaviguer();
  };

  const { colonnes, encadre } = contenu;

  return (
    <li
      ref={racine}
      className={ouvert ? "mega is-ouvert" : "mega"}
      onPointerEnter={(e) => {
        if (!survolPossible(e)) return;
        survolEnCours.current = true;
        programmer(true, DELAI_OUVERTURE);
      }}
      onPointerLeave={(e) => {
        if (!survolPossible(e)) return;
        survolEnCours.current = false;
        programmer(false, DELAI_FERMETURE);
      }}
      onBlur={(e: FocusEvent<HTMLLIElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) definirOuvert(false);
      }}
    >
      {/* Le nom de l'onglet mène à sa page ; la flèche ouvre ou ferme le panneau (indispensable au toucher et au clavier). */}
      <div className="mega-entete">
        <Link href={href} className={actif ? "mega-declencheur is-actif" : "mega-declencheur"} onClick={naviguer}>
          {libelle}
        </Link>
        <button
          ref={declencheur}
          type="button"
          className="mega-fleche-bouton"
          aria-expanded={ouvert}
          aria-controls={idPanneau}
          aria-label={`${ouvert ? "Fermer" : "Ouvrir"} le menu ${libelle}`}
          onClick={() => {
            annulerMinuteur();
            definirOuvert(survolEnCours.current ? true : !ouvert);
          }}
        >
          <span className="mega-fleche" aria-hidden="true">
            ▾
          </span>
        </button>
      </div>

      <div id={idPanneau} className="mega-panneau" hidden={!ouvert}>
        <div className="container mega-contenu">
          <div className="mega-domaines">
            {colonnes.map((colonne) => {
              // Pas de sous-liens : toute la carte devient cliquable (comme .categorie-card
              // ailleurs sur le site) plutôt que de ne rendre que le titre cliquable.
              const carteCliquable = Boolean(colonne.href) && colonne.liens.length === 0;
              return (
                <div
                  key={colonne.titre}
                  className={carteCliquable ? "mega-domaine mega-domaine-carte" : "mega-domaine"}
                >
                  {carteCliquable || !colonne.href ? (
                    <p className="mega-titre">{colonne.titre}</p>
                  ) : (
                    <Link className="mega-titre" href={colonne.href} onClick={naviguer}>
                      {colonne.titre}
                    </Link>
                  )}
                  {colonne.description && <p className="mega-description">{colonne.description}</p>}
                  {colonne.liens.length > 0 && (
                    <ul className="mega-liste">
                      {colonne.liens.map((lien) => (
                        <li key={lien.href}>
                          <Link href={lien.href} onClick={naviguer}>
                            {lien.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {carteCliquable && (
                    <Link
                      className="card-cover"
                      href={colonne.href!}
                      onClick={naviguer}
                      aria-label={colonne.titre}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <aside className="mega-aside">
            <p className="mega-aside-titre">{encadre.titre}</p>
            <ul className="mega-liste">
              {encadre.liens.map((lien) => (
                <li key={lien.href}>
                  <Link href={lien.href} onClick={naviguer}>
                    {lien.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a className="mega-tel" href="tel:+33320673490">
              03 20 67 34 90
            </a>
            <p className="mega-aside-texte">Notre équipe vous répond dans l&apos;heure.</p>
            <Link className="btn btn-plein mega-devis" href={encadre.bouton.href} onClick={naviguer}>
              {encadre.bouton.label}
            </Link>
          </aside>
        </div>
      </div>
    </li>
  );
}
