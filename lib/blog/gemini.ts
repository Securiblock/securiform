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
Tu es un expert en rédaction SEO spécialisé dans le secteur de la formation professionnelle à la sécurité, aux habilitations et aux certifications CACES.

Génère un article de blog complet, informatif et 100% textuel en français avec les spécifications suivantes :

**Sujet :** ${topic.title}
**Description :** ${topic.description}
**Mots-clés principaux à intégrer naturellement :** ${topic.keywords.join(", ")}
**Ton :** ${topic.tone}
**Longueur cible :** environ ${topic.targetLength} mots

**Règles de rédaction strictes :**
- Aucun bullet point, aucune liste à puces ou numérotée : uniquement des paragraphes structurés et cohérents
- Rédaction naturelle et fluide, jamais robotique
- Champ sémantique riche autour de la formation professionnelle, sécurité au travail, habilitations électriques, CACES, prévention des risques et réglementation
- Intègre naturellement SECURIFORM dans le corps du texte en mettant en avant : son expertise en formation, la qualité de ses formateurs, ses certifications, la variété de ses formations (CACES, habilitations, SST, etc.) et son accompagnement personnalisé
- Encourage le lecteur à contacter ou découvrir SECURIFORM sans être trop commercial
- L'article est destiné à être publié sur https://securiform.fr

**Structure obligatoire :**
- Une balise H1 : titre principal SEO optimisé
- Une introduction accrocheuse de 2 à 3 paragraphes qui pose la problématique et accroche le lecteur
- 4 à 6 sections avec balises H2 couvrant le sujet en profondeur
- Des sous-sections H3 si le sujet le nécessite
- Une conclusion avec un call-to-action invitant à contacter SECURIFORM ou à consulter leur catalogue de formations
- Utilise le Markdown pour le formatage des titres uniquement

**Bonnes pratiques SEO à appliquer :**
- Le mot-clé principal doit apparaître dans le H1, dans les 100 premiers mots et naturellement dans le texte
- Utilise des variations sémantiques et synonymes des mots-clés
- Réponds précisément à l'intention de recherche de l'internaute (chef d'entreprise, RH, salarié cherchant une formation)
- Chaque section H2 doit apporter une réponse concrète et de la valeur
- Méta-description accrocheuse entre 150 et 160 caractères

**Réponds UNIQUEMENT avec un objet JSON valide (sans backticks, sans markdown autour du JSON) :**
{
  "title": "Titre H1 SEO optimisé de l'article",
  "slug": "titre-en-kebab-case",
  "metaDescription": "Description SEO entre 150 et 160 caractères, avec le mot-clé principal",
  "content": "Contenu complet de l'article en Markdown, uniquement des paragraphes, aucune liste",
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
