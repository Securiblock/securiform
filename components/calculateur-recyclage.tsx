"use client";

import Link from "next/link";
import { useActionState, useId, useState } from "react";
import { inscrireRappel, type EtatRappel } from "@/app/actions-rappel";
import { allerAuDevis } from "@/lib/formulaire-devis";
import {
  RECYCLAGES,
  calculerEcheance,
  formaterDate,
  formaterDuree,
  lireDate,
  moisEntre,
  type FormationRecyclage,
  type OptionRecyclage,
} from "@/lib/recyclage";

const TELEPHONE = "03 20 67 34 90";

function telechargerRappel(option: OptionRecyclage, rappel: Date, echeance: Date) {
  const jour = (d: Date) =>
    `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const echapper = (texte: string) => texte.replace(/[\\;,]/g, (c) => `\\${c}`);
  const lendemain = new Date(rappel.getFullYear(), rappel.getMonth(), rappel.getDate() + 1);
  const horodatage = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const description = echapper(
    `Votre ${option.libelle} arrive à échéance le ${formaterDate(echeance)}. ` +
      `Pour programmer le recyclage, contactez SECURIFORM au ${TELEPHONE} ou sur https://securiform.fr/nous-contacter`,
  );

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SECURIFORM//Rappel de recyclage//FR",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${horodatage}-${Math.random().toString(36).slice(2)}@securiform.fr`,
    `DTSTAMP:${horodatage}`,
    `DTSTART;VALUE=DATE:${jour(rappel)}`,
    `DTEND;VALUE=DATE:${jour(lendemain)}`,
    `SUMMARY:${echapper(`Recyclage à programmer : ${option.libelle}`)}`,
    `DESCRIPTION:${description}`,
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "TRIGGER:PT9H",
    `DESCRIPTION:${echapper(`Recyclage à programmer : ${option.libelle}`)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
  const lien = document.createElement("a");
  lien.href = url;
  lien.download = "rappel-recyclage-securiform.ics";
  lien.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const ETAT_INITIAL: EtatRappel = { statut: "initial", message: "" };

function AlerteEmail({ formation, indexOption, date }: { formation: FormationRecyclage; indexOption: number; date: string }) {
  const [etat, action, enCours] = useActionState(inscrireRappel, ETAT_INITIAL);
  const id = useId();

  if (etat.statut === "ok") {
    return <p className="recyclage-alerte-ok" role="status">{etat.message}</p>;
  }

  return (
    <form className="recyclage-alerte" action={action}>
      <p className="recyclage-alerte-titre">Ou recevez un rappel par email avant l&apos;échéance</p>
      <input type="hidden" name="formation" value={formation} />
      <input type="hidden" name="option" value={indexOption} />
      <input type="hidden" name="date" value={date} />
      <input type="text" name="site_web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="recyclage-piege" />
      <div className="recyclage-alerte-ligne">
        <label htmlFor={`${id}-email`} className="recyclage-sr">Votre email</label>
        <input type="email" id={`${id}-email`} name="email" required placeholder="votre@email.fr" autoComplete="email" />
        <button type="submit" className="btn btn-plein" disabled={enCours}>
          {enCours ? "Envoi…" : "M'alerter"}
        </button>
      </div>
      <label className="recyclage-consentement">
        <input type="checkbox" name="consentement" value="oui" required />
        <span>
          J&apos;accepte que SECURIFORM conserve mon email jusqu&apos;à l&apos;échéance de la formation, uniquement pour
          m&apos;envoyer ce rappel. Annulable à tout moment depuis chaque email.{" "}
          <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        </span>
      </label>
      {etat.statut === "erreur" && <p className="recyclage-alerte-erreur" role="alert">{etat.message}</p>}
    </form>
  );
}

export default function CalculateurRecyclage({ formation }: { formation: FormationRecyclage }) {
  const options: OptionRecyclage[] = RECYCLAGES[formation];
  const groupes = [...new Set(options.map((o) => o.groupe))];
  const [indexOption, setIndexOption] = useState(0);
  const [dateSaisie, setDateSaisie] = useState("");
  const id = useId();

  const option = options[indexOption];
  const dateFormation = lireDate(dateSaisie);

  let resultat = null;
  if (dateFormation) {
    const aujourdhui = new Date();
    aujourdhui.setHours(0, 0, 0, 0);
    const { echeance, rappel } = calculerEcheance(option, dateFormation);
    const statut = aujourdhui > echeance ? "expire" : aujourdhui >= rappel ? "bientot" : "valide";
    const message =
      `Bonjour, je souhaite programmer le recyclage suivant : ${option.libelle}. ` +
      `Formation précédente le ${formaterDate(dateFormation)}, échéance le ${formaterDate(echeance)}.`;

    resultat = (
      <div className={`recyclage-resultat is-${statut}`}>
        <p className="recyclage-statut">
          {statut === "valide" && "Formation valide"}
          {statut === "bientot" && "Recyclage à programmer dès maintenant"}
          {statut === "expire" && "Formation expirée"}
        </p>
        <p className="recyclage-echeance">
          Échéance&nbsp;: <strong>{formaterDate(echeance)}</strong>
        </p>
        <p className="recyclage-detail">
          {statut === "valide" &&
            `Encore ${formaterDuree(moisEntre(aujourdhui, echeance))} de validité. Nous vous conseillons de programmer le recyclage à partir du ${formaterDate(rappel)}.`}
          {statut === "bientot" &&
            `Votre formation expire dans ${formaterDuree(moisEntre(aujourdhui, echeance))} : programmez votre recyclage pour éviter toute interruption.`}
          {statut === "expire" &&
            `Échéance dépassée depuis ${formaterDuree(moisEntre(echeance, aujourdhui))}. Selon le délai écoulé, un recyclage peut encore suffire ou une formation initiale sera nécessaire : contactez-nous pour faire le point.`}
        </p>
        {option.note && <p className="recyclage-note">{option.note}</p>}
        <div className="recyclage-actions">
          <button type="button" className="btn btn-plein" onClick={() => allerAuDevis(message)}>
            Programmer mon recyclage
          </button>
          {statut === "valide" && (
            <button
              type="button"
              className="btn btn-contour"
              onClick={() => telechargerRappel(option, rappel, echeance)}
            >
              Ajouter un rappel à mon agenda
            </button>
          )}
        </div>
        {statut === "valide" && (
          // La clé réinitialise le formulaire (et son message) quand la formation ou la date change.
          <AlerteEmail key={`${indexOption}-${dateSaisie}`} formation={formation} indexOption={indexOption} date={dateSaisie} />
        )}
      </div>
    );
  }

  return (
    <section className="section recyclage-section" aria-labelledby={`${id}-titre`}>
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Anticipez vos échéances</span>
          <h2 id={`${id}-titre`}>Calculez la date de votre recyclage</h2>
          <hr className="trait" />
          <p>Indiquez la date de votre dernière formation&nbsp;: nous calculons son échéance et le bon moment pour la renouveler.</p>
        </div>

        <div className="recyclage-carte reveal">
          <div className="recyclage-champs">
            {options.length > 1 && (
              <div className="champ">
                <label htmlFor={`${id}-formation`}>Formation</label>
                <select
                  id={`${id}-formation`}
                  value={indexOption}
                  onChange={(e) => setIndexOption(Number(e.target.value))}
                >
                  {groupes.length > 1
                    ? groupes.map((groupe) => (
                        <optgroup key={groupe} label={groupe}>
                          {options.map((o, i) =>
                            o.groupe === groupe ? (
                              <option key={o.libelle} value={i}>
                                {o.libelle}
                              </option>
                            ) : null
                          )}
                        </optgroup>
                      ))
                    : options.map((o, i) => (
                        <option key={o.libelle} value={i}>
                          {o.libelle}
                        </option>
                      ))}
                </select>
                <span className="recyclage-validite">Validité&nbsp;: {formaterDuree(option.mois)}</span>
              </div>
            )}
            {options.length === 1 && (
              <p className="recyclage-formation">
                {option.libelle}
                <span>Validité&nbsp;: {formaterDuree(option.mois)}</span>
              </p>
            )}
            <div className="champ">
              <label htmlFor={`${id}-date`}>Date de la dernière formation</label>
              <input
                type="date"
                id={`${id}-date`}
                value={dateSaisie}
                onChange={(e) => setDateSaisie(e.target.value)}
              />
            </div>
          </div>

          <div className="recyclage-sortie" aria-live="polite">
            {resultat ?? (
              <p className="recyclage-attente">
                Renseignez la date de votre dernière formation pour afficher son échéance.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
