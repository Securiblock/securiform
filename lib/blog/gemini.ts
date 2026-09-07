import type { Topic } from "./types";

// If Google has retired this model by the time you read this, swap it here
// (or set GEMINI_MODEL in .env.local) — see https://ai.google.dev/gemini-api/docs/models
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";

export type GeneratedArticle = {
  title: string;
  slug: string;
  metaDescription: string;
  content: string;
  readingTime: number;
};

function buildPrompt(topic: Topic): string {
  return `
Tu es un expert en rédaction de contenu web SEO-friendly.

Génère un article de blog complet en français avec les spécifications suivantes :

**Sujet :** ${topic.title}
**Description :** ${topic.description}
**Mots-clés à intégrer :** ${topic.keywords.join(", ")}
**Ton :** ${topic.tone}
**Longueur cible :** environ ${topic.targetLength} mots

**Structure obligatoire de l'article :**
- Une introduction accrocheuse (2-3 paragraphes)
- 4 à 6 sections avec des titres H2
- Des sous-sections H3 si nécessaire
- Une conclusion avec un call-to-action
- Utilise le Markdown pour le formatage

**Réponds UNIQUEMENT avec un objet JSON valide (sans backticks, sans markdown autour du JSON) :**
{
  "title": "Titre SEO optimisé de l'article",
  "slug": "titre-en-kebab-case",
  "metaDescription": "Description SEO entre 150 et 160 caractères",
  "content": "Contenu complet de l'article en Markdown",
  "readingTime": nombre_de_minutes_de_lecture
}
`.trim();
}

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Gemini sometimes wraps its JSON in ```json fences despite instructions —
// strip those before parsing rather than failing the whole generation.
function extractJson(text: string): string {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  return (fenced ? fenced[1] : text).trim();
}

export async function generateArticle(topic: Topic): Promise<GeneratedArticle> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY manquante. Ajoutez-la dans .env.local (voir GEMINI_API_KEY dans le fichier)."
    );
  }

  const prompt = buildPrompt(topic);

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4096,
        },
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(
      `Échec de l'appel à Gemini (${response.status}). ${errorBody.slice(0, 300)}`
    );
  }

  const data = await response.json();
  const text: string | undefined = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error(
      "Réponse Gemini vide ou inattendue. La demande a peut-être été bloquée (filtre de sécurité) — réessayez avec une description différente."
    );
  }

  let parsed: Partial<GeneratedArticle>;
  try {
    parsed = JSON.parse(extractJson(text));
  } catch {
    throw new Error("Impossible d'analyser la réponse JSON de Gemini. Réessayez.");
  }

  if (!parsed.title || !parsed.content) {
    throw new Error("La réponse de Gemini est incomplète (titre ou contenu manquant).");
  }

  return {
    title: parsed.title,
    slug: parsed.slug ? slugify(parsed.slug) : slugify(parsed.title),
    metaDescription: parsed.metaDescription || "",
    content: parsed.content,
    readingTime:
      typeof parsed.readingTime === "number" && parsed.readingTime > 0
        ? parsed.readingTime
        : Math.max(1, Math.round(parsed.content.split(/\s+/).length / 200)),
  };
}
