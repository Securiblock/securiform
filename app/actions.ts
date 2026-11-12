"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { getSettingList } from "@/lib/settings";
import { detectSpam, isFormRateLimited } from "@/lib/spam";
import { verifyTurnstile } from "@/lib/turnstile";

const FROM_EMAIL = process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";

// Hidden honeypot field: real visitors never fill it in (it's visually
// hidden), so a non-empty value means the submission came from a bot.
const HONEYPOT_FIELD = "site_web";

// Jeton du captcha (components/turnstile.tsx) : vérifié, jamais recopié dans l'email.
const TURNSTILE_FIELD = "cf-turnstile-response";

const ALLOWED_ATTACHMENT_EXTENSIONS = [".pdf", ".doc", ".docx"];

const FIELD_LABELS: Record<string, string> = {
  sujet: "Sujet",
  nom: "Nom",
  prenom: "Prénom",
  societe: "Société",
  email: "Email",
  telephone: "Téléphone",
  formation: "Formation souhaitée",
  equipement: "Équipement",
  domaine: "Domaine",
  message: "Message",
};

// Shared handler for every form on the site (contact, demande de devis,
// candidature). Field names differ slightly from one form to the next, so
// this just forwards whatever was actually submitted rather than assuming a
// fixed shape — see app/actions.ts usage across app/**/page.tsx.
export async function submitForm(formData: FormData) {
  // Bots fill in every field they find, including this hidden one. Real
  // visitors never see it, so pretend to succeed without sending anything.
  if (formData.get(HONEYPOT_FIELD)) {
    redirect("/merci?ok=1");
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "inconnue";

  // Same "pretend it worked" answer as the honeypot: telling a bot why it
  // was rejected only helps it adapt. Logged so false positives can be
  // spotted in the Vercel logs.
  const spamReason = detectSpam(formData);
  if (spamReason) {
    console.warn(`Formulaire ignoré (spam : ${spamReason}) — IP ${ip}`);
    redirect("/merci?ok=1");
  }
  // Captcha raté : page d'erreur (pas un faux succès) — un vrai visiteur dont
  // le jeton a expiré doit savoir que sa demande n'est pas partie.
  if ((await verifyTurnstile(formData, ip)) === "refuse") {
    console.warn(`Formulaire refusé (captcha) — IP ${ip}`);
    redirect("/merci?ok=0");
  }
  if (isFormRateLimited(ip)) {
    console.warn(`Formulaire refusé (trop d'envois) — IP ${ip}`);
    redirect("/merci?ok=0");
  }

  const referer = requestHeaders.get("referer") || "";
  let sourcePath = "/";
  try {
    sourcePath = referer ? new URL(referer).pathname : "/";
  } catch {
    // ignore malformed referer
  }

  const lines: string[] = [];
  const attachments: { filename: string; content: Buffer }[] = [];
  let replyTo: string | undefined;

  for (const [key, value] of formData.entries()) {
    if (key === HONEYPOT_FIELD || key === TURNSTILE_FIELD) continue;

    if (value instanceof File) {
      if (value.size > 0) {
        const extension = value.name
          .slice(value.name.lastIndexOf("."))
          .toLowerCase();
        if (!ALLOWED_ATTACHMENT_EXTENSIONS.includes(extension)) {
          lines.push(
            `[Pièce jointe refusée : "${value.name}" n'est pas un type de fichier autorisé (pdf, doc, docx)]`
          );
          continue;
        }
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({ filename: value.name, content: buffer });
      }
      continue;
    }

    const text = value.trim();
    if (!text) continue;
    if (key === "email") replyTo = text;
    lines.push(`${FIELD_LABELS[key] || key} : ${text}`);
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Site SECURIFORM <${FROM_EMAIL}>`,
      to: await getSettingList("contact_email_to"),
      replyTo,
      subject: `Nouveau message depuis securiform.fr (${sourcePath})`,
      text: lines.join("\n"),
      attachments: attachments.length ? attachments : undefined,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Echec de l'envoi du formulaire:", err);
    redirect("/merci?ok=0");
  }

  redirect("/merci?ok=1");
}
