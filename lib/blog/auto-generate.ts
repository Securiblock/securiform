import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import { Resend } from "resend";
import { saveArticle } from "./articles";
import { getCategories } from "./categories";
import { generateArticle } from "./gemini";
import { getTopics, updateTopic } from "./topics";
import type { Article } from "./types";

const TO_EMAIL = process.env.BLOG_NOTIFY_EMAIL || "henri@securiblock.fr";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
// Base URL used to build the review link in the notification email. Points
// at localhost while developing — set to the real domain once deployed.
const SITE_URL = process.env.SITE_URL || "http://localhost:3000";

export type AutoGenerateResult =
  | { generated: false; reason: string }
  | { generated: true; topicId: string; title: string; slug: string; emailSent: boolean };

// Picks the oldest pending topic (FIFO queue), generates its article, and
// emails a review link. Called by both the Vercel Cron route and the manual
// "test now" button in the admin dashboard — see app/api/cron/generate-article
// and app/api/blog/generate-next.
export async function runAutoGenerate(): Promise<AutoGenerateResult> {
  const allTopics = await getTopics();
  const queue = allTopics
    .filter((t) => t.status === "pending" && !t.deletedAt)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  const topic = queue[0];
  if (!topic) {
    return { generated: false, reason: "Aucun sujet en attente dans la file." };
  }

  const categoryNames = (await getCategories()).map((c) => c.name);
  const generated = await generateArticle(topic, categoryNames);
  const category = topic.category || generated.suggestedCategory;

  const now = new Date().toISOString();
  const article: Article = {
    id: topic.id,
    slug: generated.slug,
    title: generated.title,
    metaDescription: generated.metaDescription,
    content: generated.content,
    readingTime: generated.readingTime,
    generatedAt: now,
    status: "generated",
    image: null,
    category,
  };
  await saveArticle(article);
  await updateTopic(topic.id, { status: "generated", generatedAt: now, slug: article.slug, category });

  const emailSent = await sendReviewEmail(topic.id, article);

  return {
    generated: true,
    topicId: topic.id,
    title: article.title,
    slug: article.slug,
    emailSent,
  };
}

async function sendReviewEmail(topicId: string, article: Article): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.error("Génération auto : RESEND_API_KEY manquante, email non envoyé.");
    return false;
  }

  const editUrl = `${SITE_URL}/admin/blog/${topicId}/edit`;
  const contentHtml = DOMPurify.sanitize(marked.parse(article.content, { async: false }) as string);

  const html = `<!doctype html>
<html lang="fr"><body style="margin:0;background:#F5F5F7;font-family:Arial,Helvetica,sans-serif;color:#1C1C1E">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:#fff;border-radius:12px;overflow:hidden">
<tr><td style="background:#CE2222;padding:20px 28px;color:#fff;font-size:20px;font-weight:bold;letter-spacing:1px">SECURIFORM — Blog</td></tr>
<tr><td style="padding:28px">
<p style="font-size:15px;line-height:1.6;margin:0 0 20px">Un nouvel article a été généré automatiquement. Relisez-le ci-dessous, ajustez si besoin, puis publiez-le.</p>
<p style="margin:0 0 24px"><a href="${editUrl}" style="background:#CE2222;color:#fff;text-decoration:none;padding:12px 22px;border-radius:6px;font-weight:bold;display:inline-block">Ouvrir dans l'éditeur</a></p>
<hr style="border:none;border-top:1px solid #ECECEF;margin:0 0 24px" />
<h1 style="font-size:24px;margin:0 0 10px">${article.title}</h1>
<p style="font-size:14px;color:#5B5B60;margin:0 0 24px">${article.metaDescription}</p>
<div style="font-size:16px;line-height:1.7">${contentHtml}</div>
</td></tr>
<tr><td style="padding:16px 28px;border-top:1px solid #ECECEF;font-size:12px;color:#5B5B60">
Relecture et publication : <a href="${editUrl}" style="color:#5B5B60">${editUrl}</a>
</td></tr>
</table></td></tr></table></body></html>`;

  const text = `Un nouvel article de blog a été généré automatiquement.\n\nTitre : ${article.title}\n\n${article.metaDescription}\n\n${article.content}\n\nRelisez-le, ajustez si besoin, puis publiez-le ici :\n${editUrl}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Blog SECURIFORM <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: `Nouvel article généré : ${article.title}`,
      html,
      text,
    });
    if (error) throw new Error(error.message);
    return true;
  } catch (err) {
    console.error("Génération auto : échec de l'envoi de l'email de notification.", err);
    return false;
  }
}
