"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { allerAuDevis } from "@/lib/formulaire-devis";
import { EQUIPEMENTS_VGP, GROUPES_VGP, type EquipementVgp } from "@/lib/vgp";

type Choix = { quantite: number; usage: number };

const QUANTITE_MAX = 99;

const periodicite = (mois: number) => (mois === 12 ? "Tous les 12 mois" : `Tous les ${mois} mois`);
const moisDe = (e: EquipementVgp, choix: Choix) => e.usages?.[choix.usage]?.mois ?? e.mois;

// Checklist réglementaire VGP : le visiteur coche ses équipements et obtient ses vérifications
// obligatoires, leur fréquence et les formations de conducteurs associées.
export default function ChecklistVgp() {
  const [choix, setChoix] = useState<Record<string, Choix>>({});
  const [autre, setAutre] = useState(false);
  const resultatRef = useRef<HTMLElement>(null);
  const [resultatVisible, setResultatVisible] = useState(true);

  // Sur mobile, le résultat est sous les cartes : une barre en bas de l'écran le rappelle tant qu'il n'est pas visible.
  useEffect(() => {
    const resultat = resultatRef.current;
    if (!resultat || !("IntersectionObserver" in window)) return;
    const observateur = new IntersectionObserver(([entree]) => setResultatVisible(entree.isIntersecting), { threshold: 0.1 });
    observateur.observe(resultat);
    return () => observateur.disconnect();
  }, []);

  const basculer = (id: string) =>
    setChoix((c) => {
      const suivant = { ...c };
      if (suivant[id]) delete suivant[id];
      else suivant[id] = { quantite: 1, usage: 0 };
      return suivant;
    });
  const modifier = (id: string, maj: Partial<Choix>) => setChoix((c) => ({ ...c, [id]: { ...c[id], ...maj } }));

  const selection = EQUIPEMENTS_VGP.filter((e) => choix[e.id]).map((e) => ({ e, c: choix[e.id], mois: moisDe(e, choix[e.id]) }));
  const parFrequence = [6, 12]
    .map((mois) => ({ mois, lignes: selection.filter((s) => s.mois === mois) }))
    .filter((g) => g.lignes.length);
  const verificationsParAn = selection.reduce((total, s) => total + s.c.quantite * (12 / s.mois), 0);
  const formations = [...new Map(selection.filter((s) => s.e.formation).map((s) => [s.e.formation!.page + s.e.formation!.libelle, s.e.formation!])).values()];
  const vide = !selection.length && !autre;

  const demanderDevis = () => {
    const lignes = [
      ...selection.map((s) => `- ${s.c.quantite} × ${s.e.nom}${s.e.usages ? ` (${s.e.usages[s.c.usage].libelle.toLowerCase()})` : ""} : ${periodicite(s.mois).toLowerCase()}`),
      ...(autre ? ["- Autre appareil de levage (palan, treuil, potence…) : périodicité à définir"] : []),
    ];
    const liste = document.getElementById("equipement");
    if (liste instanceof HTMLSelectElement) {
      liste.value = selection.length === 1 && !autre ? selection[0].e.valeurDevis : "autre";
    }
    allerAuDevis(`Bonjour, voici les équipements pour lesquels je souhaite un devis VGP :\n${lignes.join("\n")}`);
  };

  const imprimer = () => {
    document.body.classList.add("impression-checklist-vgp");
    window.addEventListener("afterprint", () => document.body.classList.remove("impression-checklist-vgp"), { once: true });
    window.print();
  };

  return (
    <div className="vgp-checklist">
      <div className="vgp-choix">
        {GROUPES_VGP.map((groupe) => (
          <fieldset key={groupe} className="vgp-groupe">
            <legend>{groupe}</legend>
            <div className="vgp-grille">
              {EQUIPEMENTS_VGP.filter((e) => e.groupe === groupe).map((e) => {
                const c = choix[e.id];
                return (
                  <div key={e.id} className={c ? "vgp-equipement is-coche" : "vgp-equipement"}>
                    <button type="button" className="vgp-case" aria-pressed={!!c} onClick={() => basculer(e.id)}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={e.photo} alt="" loading="lazy" width={320} height={200} />
                      <span className="vgp-coche" aria-hidden="true">✓</span>
                      <span className="vgp-nom">{e.nom}</span>
                      <span className="vgp-frequence">
                        {e.usages ? e.usages.map((u) => `${u.mois} mois`).join(" ou ") : periodicite(e.mois)}
                      </span>
                    </button>
                    {c && (
                      <div className="vgp-reglages">
                        <div className="vgp-quantite" role="group" aria-label={`Nombre de ${e.nom.toLowerCase()}`}>
                          <button type="button" aria-label="Un de moins" onClick={() => (c.quantite > 1 ? modifier(e.id, { quantite: c.quantite - 1 }) : basculer(e.id))}>
                            −
                          </button>
                          <span aria-live="polite">{c.quantite}</span>
                          <button type="button" aria-label="Un de plus" onClick={() => modifier(e.id, { quantite: Math.min(QUANTITE_MAX, c.quantite + 1) })}>
                            +
                          </button>
                        </div>
                        {e.usages && (
                          <select
                            aria-label={`Usage des ${e.nom.toLowerCase()}`}
                            value={c.usage}
                            onChange={(ev) => modifier(e.id, { usage: Number(ev.target.value) })}
                          >
                            {e.usages.map((u, i) => (
                              <option key={u.libelle} value={i}>
                                {u.libelle}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
              {groupe === "Levage" && (
                <div className={autre ? "vgp-equipement vgp-autre is-coche" : "vgp-equipement vgp-autre"}>
                  <button type="button" className="vgp-case" aria-pressed={autre} onClick={() => setAutre((a) => !a)}>
                    <span className="vgp-autre-icone" aria-hidden="true">+</span>
                    <span className="vgp-coche" aria-hidden="true">✓</span>
                    <span className="vgp-nom">Autre appareil de levage</span>
                    <span className="vgp-frequence">Palan, treuil, potence…</span>
                  </button>
                </div>
              )}
            </div>
          </fieldset>
        ))}
      </div>

      {!vide && !resultatVisible && (
        <button
          type="button"
          className="vgp-barre-mobile"
          onClick={() => resultatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          <span>
            {selection.length + (autre ? 1 : 0)} équipement{selection.length + (autre ? 1 : 0) > 1 ? "s" : ""}
            {verificationsParAn > 0 && ` · ${verificationsParAn} vérif./an`}
          </span>
          <strong>Voir ma checklist ↓</strong>
        </button>
      )}

      <aside ref={resultatRef} className="vgp-resultat" aria-labelledby="vgp-resultat-titre" aria-live="polite">
        <h3 id="vgp-resultat-titre">Votre checklist VGP</h3>
        {vide ? (
          <p className="vgp-vide">Cochez les équipements de votre parc&nbsp;: vos vérifications obligatoires s&apos;affichent ici.</p>
        ) : (
          <>
            {verificationsParAn > 0 && (
              <p className="vgp-total">
                <strong>{verificationsParAn}</strong> vérification{verificationsParAn > 1 ? "s" : ""} par an
              </p>
            )}
            {parFrequence.map(({ mois, lignes }) => (
              <div key={mois} className="vgp-bloc">
                <h4>{periodicite(mois)}</h4>
                <ul>
                  {lignes.map(({ e, c }) => (
                    <li key={e.id}>
                      <span>
                        {c.quantite > 1 && <strong>{c.quantite} × </strong>}
                        <Link href={`/${e.page}`}>{e.nom}</Link>
                        {e.usages && <em> ({e.usages[c.usage].libelle.toLowerCase()})</em>}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {autre && (
              <div className="vgp-bloc">
                <h4>À définir ensemble</h4>
                <ul>
                  <li>Autre appareil de levage&nbsp;: nous confirmons avec vous la périodicité applicable.</li>
                </ul>
              </div>
            )}
            {formations.length > 0 && (
              <div className="vgp-bloc vgp-formations">
                <h4>Et vos conducteurs&nbsp;?</h4>
                <p>Ces équipements demandent aussi des opérateurs formés&nbsp;:</p>
                <ul>
                  {formations.map((f) => (
                    <li key={f.page + f.libelle}>
                      <Link href={`/${f.page}`}>{f.libelle}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="vgp-actions">
              <button type="button" className="btn btn-plein" onClick={demanderDevis}>
                Demander un devis VGP
              </button>
              <button type="button" className="btn btn-contour" onClick={imprimer}>
                Imprimer
              </button>
            </div>
          </>
        )}
        <p className="vgp-mention">
          Périodicités indicatives (Code du travail, articles R4323-23 et suivants, et arrêté du 1er mars 2004)&nbsp;:
          SECURIFORM les confirme avec vous selon l&apos;usage réel de chaque équipement.
        </p>
      </aside>
    </div>
  );
}
