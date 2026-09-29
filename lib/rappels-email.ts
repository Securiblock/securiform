import { Resend } from "resend";
import { formaterDate, lireDate } from "@/lib/recyclage";
import type { Rappel } from "@/lib/rappels";

// Emails des rappels de recyclage. Même expéditeur que les formulaires (app/actions.ts) :
// RESEND_FROM_EMAIL doit être une adresse d'un domaine vérifié dans Resend, sinon
// Resend refuse d'écrire à une autre adresse que celle du propriétaire du compte.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
// Même destinataire que les formulaires du site (app/actions.ts).
const EQUIPE_EMAIL = "henri@securiblock.fr";
const SITE_URL = (process.env.SITE_URL || "https://securiform.fr").replace(/\/$/, "");
const TELEPHONE = "03 20 67 34 90";

const dateLisible = (iso: string) => {
  const date = lireDate(iso);
  return date ? formaterDate(date) : iso;
};

const lienAnnulation = (rappel: Rappel) => `${SITE_URL}/rappel-recyclage/annuler?id=${rappel.id}`;
const lienDevis = (rappel: Rappel) => `${SITE_URL}/${rappel.formation}#devis`;

const echapperHtml = (texte: string) =>
  texte.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Mise en page commune : un titre, des paragraphes, un bouton, le lien d'annulation.
function gabarit(options: { titre: string; paragraphes: string[]; bouton?: { texte: string; url: string }; annulation: string }) {
  const html = `<!doctype html>
<html lang="fr"><body style="margin:0;background:#F5F5F7;font-family:Arial,Helvetica,sans-serif;color:#1C1C1E">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fff;border-radius:12px;overflow:hidden">
<tr><td style="background:#CE2222;padding:20px 28px;color:#fff;font-size:20px;font-weight:bold;letter-spacing:1px">SECURIFORM</td></tr>
<tr><td style="padding:28px">
<h1 style="font-size:20px;margin:0 0 16px">${echapperHtml(options.titre)}</h1>
${options.paragraphes.map((p) => `<p style="font-size:15px;line-height:1.6;margin:0 0 14px">${echapperHtml(p)}</p>`).join("\n")}
${
  options.bouton
    ? `<p style="margin:24px 0"><a href="${options.bouton.url}" style="background:#CE2222;color:#fff;text-decoration:none;padding:12px 22px;border-radius:6px;font-weight:bold;display:inline-block">${echapperHtml(options.bouton.texte)}</a></p>`
    : ""
}
<p style="font-size:15px;line-height:1.6;margin:0">Une question&nbsp;? Appelez-nous au <strong>${TELEPHONE}</strong>.</p>
</td></tr>
<tr><td style="padding:16px 28px;border-top:1px solid #ECECEF;font-size:12px;color:#5B5B60;line-height:1.5">
Vous recevez cet email car vous avez demandé un rappel de recyclage sur securiform.fr.
<a href="${options.annulation}" style="color:#5B5B60">Annuler ce rappel</a>.
</td></tr>
</table></td></tr></table></body></html>`;

  const texte = [
    options.titre,
    "",
    ...options.paragraphes.flatMap((p) => [p, ""]),
    ...(options.bouton ? [`${options.bouton.texte} : ${options.bouton.url}`, ""] : []),
    `Une question ? Appelez-nous au ${TELEPHONE}.`,
    "",
    `Annuler ce rappel : ${options.annulation}`,
  ].join("\n");

  return { html, texte };
}

async function envoyer(message: { to: string; subject: string; html?: string; text: string; replyTo?: string }) {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({ from: `SECURIFORM <${FROM_EMAIL}>`, ...message });
  if (error) throw new Error(error.message);
}

export async function envoyerConfirmation(rappel: Rappel) {
  const { html, texte } = gabarit({
    titre: "Votre rappel de recyclage est enregistré",
    paragraphes: [
      `Formation : ${rappel.libelle}.`,
      `Dernière formation le ${dateLisible(rappel.date_formation)}, échéance le ${dateLisible(rappel.echeance)}.`,
      `Nous vous enverrons un email le ${dateLisible(rappel.date_rappel)}, pour vous laisser le temps d'organiser le recyclage avant l'échéance.`,
    ],
    annulation: lienAnnulation(rappel),
  });
  await envoyer({ to: rappel.email, subject: "Votre rappel de recyclage est enregistré", html, text: texte });
}

export async function envoyerRappel(rappel: Rappel) {
  const echeance = dateLisible(rappel.echeance);
  const { html, texte } = gabarit({
    titre: `Votre formation arrive à échéance le ${echeance}`,
    paragraphes: [
      `Comme demandé, nous vous rappelons que votre formation « ${rappel.libelle} » arrive à échéance le ${echeance}.`,
      "Pour éviter toute interruption, pensez à programmer dès maintenant votre recyclage : nous vous répondons dans l'heure avec un devis et une date d'intervention.",
    ],
    bouton: { texte: "Programmer mon recyclage", url: lienDevis(rappel) },
    annulation: lienAnnulation(rappel),
  });
  await envoyer({
    to: rappel.email,
    subject: `Recyclage à prévoir : ${rappel.libelle} (échéance le ${echeance})`,
    html,
    text: texte,
  });
}

// Prévient l'équipe au moment où le client reçoit son rappel, pour pouvoir le relancer.
export async function notifierEquipe(rappel: Rappel) {
  await envoyer({
    to: EQUIPE_EMAIL,
    replyTo: rappel.email,
    subject: `Rappel de recyclage envoyé à ${rappel.email}`,
    text: [
      "Un client vient de recevoir son rappel de recyclage :",
      "",
      `Email : ${rappel.email}`,
      `Formation : ${rappel.libelle}`,
      `Dernière formation : ${dateLisible(rappel.date_formation)}`,
      `Échéance : ${dateLisible(rappel.echeance)}`,
      `Page : ${SITE_URL}/${rappel.formation}`,
    ].join("\n"),
  });
}
