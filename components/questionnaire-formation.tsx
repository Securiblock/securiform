"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { allerAuDevis } from "@/lib/formulaire-devis";
import {
  DOMAINES,
  EFFECTIFS,
  FORMATIONS,
  conseilLieu,
  type Choix,
  type Effectif,
  type Formation,
  type IdFormation,
} from "@/lib/questionnaire";

type Reponses = {
  domaine?: string;
  formation?: IdFormation;
  recyclage?: boolean;
  effectif?: Effectif;
};

type Etape = "domaine" | "precision" | "recyclage" | "effectif" | "resultat";

// Étape suivante selon les réponses déjà données : certaines questions ne se posent pas
// (domaine à formation unique, formation sans recyclage, SST déjà tranché à l'étape précédente).
function etapeCourante(r: Reponses): Etape {
  if (!r.domaine) return "domaine";
  if (!r.formation) return "precision";
  const formation = FORMATIONS[r.formation];
  const recyclageDejaConnu = r.domaine === "secours";
  if (formation.recyclage && !recyclageDejaConnu && r.recyclage === undefined) return "recyclage";
  if (!r.effectif) return "effectif";
  return "resultat";
}

function Options({ choix, onChoisir }: { choix: Choix[]; onChoisir: (index: number) => void }) {
  return (
    <div className="quiz-options">
      {choix.map((c, i) => (
        <button key={c.libelle} type="button" className="quiz-option" onClick={() => onChoisir(i)}>
          <span className="quiz-option-libelle">{c.libelle}</span>
          {c.precision && <span className="quiz-option-precision">{c.precision}</span>}
        </button>
      ))}
    </div>
  );
}

export default function QuestionnaireFormation() {
  // Historique des réponses : revenir en arrière = retirer la dernière.
  const [historique, setHistorique] = useState<Reponses[]>([{}]);
  const reponses = historique[historique.length - 1];
  const etape = etapeCourante(reponses);
  const titreRef = useRef<HTMLHeadingElement>(null);
  const premierRendu = useRef(true);

  // Place le focus sur la nouvelle question à chaque étape (lecteurs d'écran, clavier).
  useEffect(() => {
    if (premierRendu.current) {
      premierRendu.current = false;
      return;
    }
    titreRef.current?.focus();
  }, [historique.length]);

  const repondre = (ajout: Reponses) => setHistorique((h) => [...h, { ...h[h.length - 1], ...ajout }]);
  const retour = () => setHistorique((h) => (h.length > 1 ? h.slice(0, -1) : h));
  const recommencer = () => setHistorique([{}]);

  const domaine = DOMAINES.find((d) => d.id === reponses.domaine);
  const nbQuestions = etape === "resultat" ? historique.length - 1 : null;

  let contenu;
  if (etape === "domaine") {
    contenu = (
      <>
        <h3 ref={titreRef} tabIndex={-1}>Dans quel domaine souhaitez-vous former vos salariés&nbsp;?</h3>
        <Options
          choix={DOMAINES}
          onChoisir={(i) => repondre({ domaine: DOMAINES[i].id, formation: DOMAINES[i].formation })}
        />
      </>
    );
  } else if (etape === "precision" && domaine?.question) {
    const { intitule, choix } = domaine.question;
    contenu = (
      <>
        <h3 ref={titreRef} tabIndex={-1}>{intitule}</h3>
        <Options choix={choix} onChoisir={(i) => repondre({ formation: choix[i].formation })} />
      </>
    );
  } else if (etape === "recyclage") {
    contenu = (
      <>
        <h3 ref={titreRef} tabIndex={-1}>S&apos;agit-il d&apos;une première formation ou d&apos;un recyclage&nbsp;?</h3>
        <Options
          choix={[
            { libelle: "Une première formation", precision: "Les salariés n'ont jamais été formés, ou leur formation n'est plus valable" },
            { libelle: "Un recyclage", precision: "Renouveler une formation qui arrive à échéance" },
          ]}
          onChoisir={(i) => repondre({ recyclage: i === 1 })}
        />
      </>
    );
  } else if (etape === "effectif") {
    contenu = (
      <>
        <h3 ref={titreRef} tabIndex={-1}>Combien de personnes souhaitez-vous former&nbsp;?</h3>
        <Options choix={[...EFFECTIFS]} onChoisir={(i) => repondre({ effectif: EFFECTIFS[i].id })} />
      </>
    );
  } else if (etape === "resultat" && reponses.formation && reponses.effectif) {
    const formation: Formation = FORMATIONS[reponses.formation];
    const lieu = conseilLieu(formation, reponses.effectif);
    const effectif = EFFECTIFS.find((e) => e.id === reponses.effectif)!.libelle.toLowerCase();
    const estRecyclage = reponses.recyclage || reponses.formation === "sst-mac";
    const message =
      `Bonjour, suite au questionnaire en ligne, je souhaite un devis pour la formation « ${formation.titre} »` +
      `${estRecyclage ? " (recyclage)" : ""}, pour ${effectif}.`;

    contenu = (
      <div className="quiz-resultat">
        <p className="quiz-resultat-surtitre">La formation qu&apos;il vous faut</p>
        <h3 ref={titreRef} tabIndex={-1}>{formation.titre}</h3>
        <p>{formation.description}</p>

        <div className="quiz-conseils">
          <div className="quiz-conseil">
            <strong>{lieu.titre}</strong>
            <p>{lieu.texte}</p>
          </div>
          {formation.caces && (
            <div className="quiz-conseil">
              <strong>Plusieurs engins&nbsp;?</strong>
              <p>
                Comparez durées et validités des 6 CACES® avec notre{" "}
                <Link href="/caces#comparateur">comparateur de CACES®</Link>.
              </p>
            </div>
          )}
          {estRecyclage && (
            <div className="quiz-conseil">
              <strong>Recyclage</strong>
              <p>
                Vérifiez la date d&apos;échéance de vos formations en cours avec notre{" "}
                <Link href="/outils/calculateur-recyclage">calculateur de recyclage</Link>.
              </p>
            </div>
          )}
        </div>

        <div className="quiz-actions">
          <button type="button" className="btn btn-plein" onClick={() => allerAuDevis(message)}>
            Demander un devis
          </button>
          <Link className="btn btn-contour" href={`/${formation.page}`}>
            Voir la formation
          </Link>
        </div>
        <p className="quiz-rappel-contact">
          Un doute&nbsp;? Appelez-nous au <a href="tel:+33320673490">03&nbsp;20&nbsp;67&nbsp;34&nbsp;90</a>, nous vous
          répondons dans l&apos;heure.
        </p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-entete">
        {etape !== "resultat" ? (
          <p className="quiz-progression">Question {historique.length}</p>
        ) : (
          <p className="quiz-progression">Résultat en {nbQuestions} questions</p>
        )}
        <div className="quiz-navigation">
          {historique.length > 1 && (
            <button type="button" className="quiz-lien" onClick={retour}>
              ← Question précédente
            </button>
          )}
          {etape === "resultat" && (
            <button type="button" className="quiz-lien" onClick={recommencer}>
              Recommencer
            </button>
          )}
        </div>
      </div>
      <div className="quiz-corps" key={historique.length} aria-live="polite">
        {contenu}
      </div>
    </div>
  );
}
