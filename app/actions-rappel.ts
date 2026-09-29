"use server";

import { redirect } from "next/navigation";
import {
  RECYCLAGES,
  calculerEcheance,
  estFormationRecyclage,
  lireDate,
  versIso,
} from "@/lib/recyclage";
import { aujourdhuiEnFrance, creerRappel, supprimerRappel } from "@/lib/rappels";
import { envoyerConfirmation } from "@/lib/rappels-email";

export type EtatRappel = { statut: "initial" | "ok" | "erreur"; message: string };

// Même piège à robots que les autres formulaires du site (app/actions.ts).
const HONEYPOT_FIELD = "site_web";
const EMAIL_VALIDE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

// Inscription à un rappel par email depuis le calculateur de recyclage.
// Les dates sont recalculées ici à partir de la formation et de la date saisie :
// rien de ce que le navigateur aurait pu calculer n'est repris tel quel.
export async function inscrireRappel(_etat: EtatRappel, formData: FormData): Promise<EtatRappel> {
  const lire = (cle: string) => String(formData.get(cle) ?? "").trim();

  if (lire(HONEYPOT_FIELD)) {
    return { statut: "ok", message: "C'est noté ! Un email de confirmation vient de vous être envoyé." };
  }

  const email = lire("email").toLowerCase();
  const formation = lire("formation");
  const indexOption = Number(lire("option"));
  const dateFormation = lireDate(lire("date"));

  if (!EMAIL_VALIDE.test(email) || email.length > 254) {
    return { statut: "erreur", message: "Cette adresse email ne semble pas valide." };
  }
  if (lire("consentement") !== "oui") {
    return { statut: "erreur", message: "Merci de cocher la case pour accepter la conservation de votre email." };
  }
  if (!estFormationRecyclage(formation) || !dateFormation) {
    return { statut: "erreur", message: "La formation ou la date saisie est invalide." };
  }
  const option = RECYCLAGES[formation][indexOption];
  if (!option) {
    return { statut: "erreur", message: "La formation ou la date saisie est invalide." };
  }

  const { echeance, rappel } = calculerEcheance(option, dateFormation);
  if (versIso(rappel) <= aujourdhuiEnFrance()) {
    return {
      statut: "erreur",
      message: "Votre échéance est trop proche pour un rappel : programmez votre recyclage dès maintenant.",
    };
  }

  const donnees = {
    email,
    // Page de la formation elle-même (et non celle du calculateur) : cible du lien de l'email de rappel.
    formation: option.page,
    libelle: option.libelle,
    date_formation: versIso(dateFormation),
    echeance: versIso(echeance),
    date_rappel: versIso(rappel),
  };

  try {
    const resultat = await creerRappel(donnees);
    if (resultat.statut === "existant") {
      return { statut: "ok", message: "Ce rappel est déjà enregistré pour cette adresse." };
    }
    if (resultat.statut === "limite") {
      return { statut: "erreur", message: "Trop de rappels sont déjà enregistrés pour cette adresse." };
    }

    try {
      await envoyerConfirmation({ id: resultat.id, ...donnees });
    } catch (err) {
      // Sans email de confirmation, le visiteur n'aurait aucun moyen d'annuler : on n'enregistre rien.
      await supprimerRappel(resultat.id);
      throw err;
    }
  } catch (err) {
    console.error("Échec de l'inscription au rappel de recyclage :", err);
    return {
      statut: "erreur",
      message: "L'enregistrement a échoué. Vérifiez votre adresse ou réessayez plus tard.",
    };
  }

  return { statut: "ok", message: "C'est noté ! Un email de confirmation vient de vous être envoyé." };
}

// Annulation depuis le lien des emails. Passe par un bouton (POST) plutôt que par
// le simple clic sur le lien : les antivirus de messagerie ouvrent les liens tout seuls.
export async function annulerRappel(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (UUID.test(id)) await supprimerRappel(id);
  redirect("/rappel-recyclage/annuler?annule=1");
}
