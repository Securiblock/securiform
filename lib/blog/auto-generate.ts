import { Resend } from "resend";
import { saveArticle } from "./articles";
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
  const queue = getTopics()
    .filter((t) => t.status === "pending" && !t.deletedAt)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

  const topic = queue[0];
  if (!topic) {
    return { generated: false, reason: "Aucun sujet en attente dans la file." };
  }

  const generated = await generateArticle(topic);

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
  };
  saveArticle(article);
  updateTopic(topic.id, { status: "generated", generatedAt: now, slug: article.slug });

  const emailSent = await sendReviewEmail(topic.id, article.title);

  return {
    generated: true,
    topicId: topic.id,
    title: article.title,
    slug: article.slug,
    emailSent,
  };
}

async function sendReviewEmail(topicId: string, title: string): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.error("Génération auto : RESEND_API_KEY manquante, email non envoyé.");
    return false;
  }

  const editUrl = `${SITE_URL}/admin/blog/${topicId}/edit`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Blog SECURIFORM <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: `Nouvel article généré : ${title}`,
      text: `Un nouvel article de blog a été généré automatiquement.\n\nTitre : ${title}\n\nRelisez-le, ajustez si besoin, puis publiez-le ici :\n${editUrl}`,
    });
    if (error) throw new Error(error.message);
    return true;
  } catch (err) {
    console.error("Génération auto : échec de l'envoi de l'email de notification.", err);
    return false;
  }
}
