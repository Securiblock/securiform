"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const TO_EMAIL = "henri@securiblock.fr";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

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
  const referer = (await headers()).get("referer") || "";
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
    if (value instanceof File) {
      if (value.size > 0) {
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
      to: TO_EMAIL,
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
