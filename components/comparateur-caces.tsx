"use client";

import Link from "next/link";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { CACES, type Caces } from "@/lib/caces";

type CleTri = "code" | "debutant" | "recyclage" | "validite";
type Tri = { cle: CleTri; sens: 1 | -1 } | null;

const ORDRE_INITIAL = CACES.map((c) => c.code);
const PAR_CODE = new Map(CACES.map((c) => [c.code, c]));

// Pour chaque colonne triable : valeur comparée, sens du premier clic, libellés des deux sens.
const COLONNES: Record<CleTri, { valeur: (c: Caces) => number | string; premier: 1 | -1; libelle: string; sens: Record<1 | -1, string> }> = {
  code: { valeur: (c) => c.code, premier: 1, libelle: "code", sens: { 1: "A → Z", [-1]: "Z → A" } },
  debutant: { valeur: (c) => c.debutantMaxJours, premier: 1, libelle: "formation initiale", sens: { 1: "la plus courte d'abord", [-1]: "la plus longue d'abord" } },
  recyclage: { valeur: (c) => c.recyclageMaxJours, premier: 1, libelle: "recyclage", sens: { 1: "le plus court d'abord", [-1]: "le plus long d'abord" } },
  validite: { valeur: (c) => c.validiteAns, premier: -1, libelle: "validité", sens: { 1: "la plus courte d'abord", [-1]: "la plus longue d'abord" } },
};

function trier(cle: CleTri, sens: 1 | -1): string[] {
  const { valeur } = COLONNES[cle];
  // Tri stable à partir de l'ordre par défaut : les ex æquo gardent leur place habituelle.
  return [...CACES]
    .sort((a, b) => {
      const va = valeur(a), vb = valeur(b);
      return (va < vb ? -1 : va > vb ? 1 : 0) * sens;
    })
    .map((c) => c.code);
}

const SEUIL_GLISSER = 6; // px parcourus avant qu'un clic devienne un glisser

type Glisse = { code: string; departY: number; prise: number; y: number; actif: boolean; arreter: () => void };

// --- Manipulations du DOM pour l'animation (hors du composant : pures opérations sur des éléments) ---

// Place une ligne pour que son haut suive le pointeur, quelle que soit sa position dans le tableau.
function placerSousPointeur(tr: HTMLElement, y: number, prise: number) {
  tr.style.transition = "none";
  tr.style.transform = "";
  tr.style.transform = `translateY(${y - prise - tr.getBoundingClientRect().top}px)`;
}

// Technique FLIP : chaque ligne repart de son ancienne position puis glisse jusqu'à la nouvelle.
function animerDeplacements(lignes: Map<string, HTMLElement>, avant: Map<string, number>, sauf: string | null) {
  for (const [code, tr] of lignes) {
    if (code === sauf) continue;
    const depart = avant.get(code);
    tr.style.transition = "none";
    tr.style.transform = "";
    if (depart === undefined) continue;
    const delta = depart - tr.getBoundingClientRect().top;
    if (!delta) continue;
    tr.style.transform = `translateY(${delta}px)`;
    requestAnimationFrame(() => {
      tr.style.transition = "transform .3s ease";
      tr.style.transform = "";
    });
  }
}

function reposer(tr: HTMLElement) {
  tr.style.transition = "transform .2s ease";
  tr.style.transform = "";
}

// Tableau comparatif des 6 CACES : tri par colonne, lignes déplaçables à la souris (poignée ⠿ au toucher
// et au clavier). Sur une page CACES, `actuel` met en avant la ligne de la page.
export default function ComparateurCaces({ actuel }: { actuel?: string }) {
  const [ordre, setOrdre] = useState<string[]>(ORDRE_INITIAL);
  const [tri, setTri] = useState<Tri>(null);
  const [codeGlisse, setCodeGlisse] = useState<string | null>(null);
  const [annonce, setAnnonce] = useState("");

  const ordreRef = useRef(ordre);
  const lignes = useRef(new Map<string, HTMLTableRowElement>());
  const positionsAvant = useRef<Map<string, number> | null>(null);
  const glisse = useRef<Glisse | null>(null);
  const bloquerClic = useRef(false);

  // --- Animation des déplacements ---
  const memoriserPositions = () => {
    positionsAvant.current = new Map([...lignes.current].map(([code, tr]) => [code, tr.getBoundingClientRect().top]));
  };

  const suivrePointeur = () => {
    const g = glisse.current;
    const tr = g && lignes.current.get(g.code);
    if (g && tr) placerSousPointeur(tr, g.y, g.prise);
  };

  useLayoutEffect(() => {
    const avant = positionsAvant.current;
    positionsAvant.current = null;
    if (!avant) return;
    const tenue = glisse.current?.actif ? glisse.current.code : null;
    animerDeplacements(lignes.current, avant, tenue);
    const tr = tenue && lignes.current.get(tenue);
    if (tr && glisse.current) placerSousPointeur(tr, glisse.current.y, glisse.current.prise);
  }, [ordre]);

  const changerOrdre = (nouvel: string[]) => {
    memoriserPositions();
    ordreRef.current = nouvel;
    setOrdre(nouvel);
  };

  // --- Tri ---
  const cliquerEnTete = (cle: CleTri) => {
    const { premier } = COLONNES[cle];
    // 1er clic : sens le plus utile ; 2e : sens inverse ; 3e : retour à l'ordre par défaut.
    const suivant: Tri = !tri || tri.cle !== cle ? { cle, sens: premier } : tri.sens === premier ? { cle, sens: (premier * -1) as 1 | -1 } : null;
    setTri(suivant);
    changerOrdre(suivant ? trier(suivant.cle, suivant.sens) : ORDRE_INITIAL);
    setAnnonce(suivant ? `Tableau trié par ${COLONNES[cle].libelle}, ${COLONNES[cle].sens[suivant.sens]}.` : "Ordre par défaut rétabli.");
  };

  const reinitialiser = () => {
    setTri(null);
    changerOrdre(ORDRE_INITIAL);
    setAnnonce("Ordre par défaut rétabli.");
  };

  // --- Glisser-déposer ---
  const deplacer = (code: string, index: number) => {
    const autres = ordreRef.current.filter((c) => c !== code);
    const borne = Math.max(0, Math.min(autres.length, index));
    if (ordreRef.current.indexOf(code) === borne) return false;
    autres.splice(borne, 0, code);
    setTri(null);
    changerOrdre(autres);
    return true;
  };

  // Nettoyage si le composant disparaît pendant un glisser.
  useEffect(() => () => glisse.current?.arreter(), []);

  const saisir = (e: ReactPointerEvent<HTMLTableRowElement>, code: string) => {
    if (e.button !== 0 || glisse.current) return;
    const surPoignee = (e.target as Element).closest(".comparateur-poignee");
    // Au toucher, seule la poignée déplace la ligne : le reste de la carte laisse défiler la page.
    if (e.pointerType !== "mouse" && !surPoignee) return;
    if (e.pointerType === "mouse") e.preventDefault(); // évite la sélection de texte pendant le glisser
    const pointeur = e.pointerId;
    const r = e.currentTarget.getBoundingClientRect();

    const bouger = (ev: PointerEvent) => {
      const g = glisse.current;
      if (!g || ev.pointerId !== pointeur) return;
      g.y = ev.clientY;
      if (!g.actif) {
        if (Math.abs(ev.clientY - g.departY) < SEUIL_GLISSER) return;
        g.actif = true;
        setCodeGlisse(g.code);
        document.body.classList.add("comparateur-glisse-en-cours");
      }
      ev.preventDefault();
      // Nouvelle place : nombre de lignes (hors ligne tenue) dont le milieu est au-dessus du pointeur.
      let index = 0;
      for (const autre of ordreRef.current) {
        if (autre === g.code) continue;
        const box = lignes.current.get(autre)?.getBoundingClientRect();
        if (box && ev.clientY > box.top + box.height / 2) index++;
      }
      if (!deplacer(g.code, index)) suivrePointeur();
    };

    const lacher = (ev: PointerEvent) => {
      const g = glisse.current;
      if (!g || ev.pointerId !== pointeur) return;
      g.arreter();
      if (!g.actif) return; // simple clic : la ligne s'ouvre normalement
      bloquerClic.current = true;
      setTimeout(() => (bloquerClic.current = false), 0);
      const tr = lignes.current.get(g.code);
      if (tr) reposer(tr);
      setCodeGlisse(null);
      setAnnonce(`CACES® ${g.code} déplacé en position ${ordreRef.current.indexOf(g.code) + 1} sur ${ORDRE_INITIAL.length}.`);
    };

    const arreter = () => {
      window.removeEventListener("pointermove", bouger);
      window.removeEventListener("pointerup", lacher);
      window.removeEventListener("pointercancel", lacher);
      document.body.classList.remove("comparateur-glisse-en-cours");
      glisse.current = null;
    };

    glisse.current = { code, departY: e.clientY, prise: e.clientY - r.top, y: e.clientY, actif: false, arreter };
    window.addEventListener("pointermove", bouger, { passive: false });
    window.addEventListener("pointerup", lacher);
    window.addEventListener("pointercancel", lacher);
  };

  const clavierPoignee = (e: KeyboardEvent<HTMLButtonElement>, code: string) => {
    const pas = e.key === "ArrowUp" ? -1 : e.key === "ArrowDown" ? 1 : 0;
    if (!pas) return;
    e.preventDefault();
    const index = ordreRef.current.indexOf(code) + pas;
    if (deplacer(code, index)) {
      setAnnonce(`CACES® ${code} déplacé en position ${index + 1} sur ${ORDRE_INITIAL.length}.`);
      // Le bouton change de ligne dans le DOM : on lui rend le focus.
      requestAnimationFrame(() => lignes.current.get(code)?.querySelector<HTMLButtonElement>(".comparateur-poignee")?.focus());
    }
  };

  const estParDefaut = ordre.every((c, i) => c === ORDRE_INITIAL[i]);
  const etat = tri
    ? `Trié par ${COLONNES[tri.cle].libelle} : ${COLONNES[tri.cle].sens[tri.sens]}`
    : estParDefaut
      ? "Ordre par défaut"
      : "Ordre personnalisé";

  const enTete = (cle: CleTri, libelle: string) => {
    const actif = tri?.cle === cle;
    return (
      <th scope="col" aria-sort={actif ? (tri.sens === 1 ? "ascending" : "descending") : "none"}>
        <button
          type="button"
          className={actif ? "comparateur-tri is-actif" : "comparateur-tri"}
          onClick={() => cliquerEnTete(cle)}
          title={`Trier par ${COLONNES[cle].libelle}`}
        >
          {libelle}
          <span aria-hidden="true">{actif ? (tri.sens === 1 ? "▲" : "▼") : "↕"}</span>
        </button>
      </th>
    );
  };

  return (
    <div className="comparateur">
      <div className="comparateur-barre">
        <p className="comparateur-aide">
          <span className="comparateur-aide-souris">
            Cliquez sur une ligne pour voir la formation, glissez-la pour la déplacer, ou cliquez sur un en-tête pour trier.
          </span>
          <span className="comparateur-aide-tactile">
            Touchez un CACES® pour voir la formation, faites glisser ⠿ pour le déplacer, ou triez avec les boutons.
          </span>
        </p>
        <p className="comparateur-etat">
          <span>{etat}</span>
          {!estParDefaut && (
            <button type="button" className="comparateur-reinit" onClick={reinitialiser}>
              Réinitialiser
            </button>
          )}
        </p>
      </div>
      <p className="comparateur-sr" aria-live="polite">
        {annonce}
      </p>

      <table
        className={codeGlisse ? "comparateur-table is-glisse" : "comparateur-table"}
        aria-label="Comparateur des CACES® préparés par SECURIFORM"
        onDragStart={(e) => e.preventDefault()}
      >
        <colgroup>
          <col className="comparateur-col-caces" />
          <col />
          <col className="comparateur-col-initiale" />
          <col className="comparateur-col-recyclage" />
          <col className="comparateur-col-validite" />
          <col className="comparateur-col-action" />
        </colgroup>
        <thead>
          <tr>
            {enTete("code", "CACES®")}
            <th scope="col">Engins concernés</th>
            {enTete("debutant", "Formation initiale")}
            {enTete("recyclage", "Recyclage")}
            {enTete("validite", "Validité")}
            <th scope="col">
              <span className="comparateur-sr">Lien</span>
            </th>
          </tr>
        </thead>
        <tbody
          onClickCapture={(e) => {
            // Un glisser qui se termine sur une ligne ne doit pas l'ouvrir.
            if (bloquerClic.current) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          {ordre.map((code) => {
            const c = PAR_CODE.get(code)!;
            const estActuel = c.code === actuel;
            const classes = [estActuel && "is-actuel", codeGlisse === c.code && "is-tenue"].filter(Boolean).join(" ");
            return (
              <tr
                key={c.code}
                className={classes || undefined}
                ref={(tr) => {
                  if (tr) lignes.current.set(c.code, tr);
                  else lignes.current.delete(c.code);
                }}
                onPointerDown={(e) => saisir(e, c.code)}
              >
                <td className="comparateur-caces">
                  <button
                    type="button"
                    className="comparateur-poignee"
                    aria-label={`Déplacer le CACES® ${c.code} (flèches haut et bas)`}
                    title="Glisser pour déplacer"
                    onKeyDown={(e) => clavierPoignee(e, c.code)}
                  >
                    <span aria-hidden="true">⠿</span>
                  </button>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.photo} alt="" loading="lazy" width={112} height={76} draggable={false} />
                  <span>
                    <strong>{c.code}</strong>
                    <span className="comparateur-titre">{c.titre}</span>
                    {estActuel && <span className="comparateur-ici">Vous êtes ici</span>}
                  </span>
                </td>
                <td className="comparateur-engins" data-label="Engins">{c.engins}</td>
                <td data-label="Formation initiale">
                  <span className="comparateur-valeur">{c.debutant}</span>
                  <span className="comparateur-precision">Expérimenté&nbsp;: {c.experimente}</span>
                </td>
                <td data-label="Recyclage">
                  <span className="comparateur-valeur">{c.recyclage}</span>
                </td>
                <td data-label="Validité">
                  <span className={c.validiteAns >= 10 ? "comparateur-validite is-longue" : "comparateur-validite"}>
                    {c.validiteAns} ans
                  </span>
                </td>
                <td className="comparateur-action">
                  {estActuel ? (
                    <span className="comparateur-lien is-actuel">Cette page</span>
                  ) : (
                    <Link className="comparateur-lien" href={`/${c.page}`} draggable={false}>
                      Voir<span className="comparateur-sr"> la formation CACES® {c.code} : {c.titre}</span>
                    </Link>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="comparateur-note">
        Durées indicatives, variables selon l&apos;expérience des stagiaires et le nombre de catégories&nbsp;: le détail est
        sur chaque page. Validité comptée à partir de l&apos;obtention du certificat.
      </p>
    </div>
  );
}
