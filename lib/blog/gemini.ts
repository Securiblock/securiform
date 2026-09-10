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
  suggestedCategory: string | null;
};

function buildPrompt(topic: Topic, existingCategories: string[]): string {
  const categoryInstructions =
    existingCategories.length > 0
      ? `Choisis la catégorie la plus pertinente parmi CELLES-CI UNIQUEMENT (reprends le nom exactement à l'identique) : ${existingCategories.join(", ")}. Si aucune ne convient vraiment, mets null.`
      : `Aucune catégorie n'existe encore, mets null.`;

  return `
Tu es un expert en rédaction SEO spécialisé dans le secteur de la formation professionnelle à la sécurité, aux habilitations et aux certifications CACES.

Génère un article de blog complet, informatif et 100% textuel en français avec les spécifications suivantes :

**Sujet :** ${topic.title}
**Description :** ${topic.description}
**Mots-clés principaux à intégrer naturellement :** ${topic.keywords.join(", ")}
**Ton :** ${topic.tone}
**Longueur cible :** environ ${topic.targetLength} mots

**Règles de rédaction strictes :**
- Aucun bullet point, aucune liste à puces ou numérotée dans le corps de l'article : uniquement des paragraphes structurés et cohérents (seule exception : la section finale « À retenir », voir structure ci-dessous)
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
- Termine l'article par une dernière section « ## À retenir » contenant une liste à puces Markdown de 4 points clés qui résument l'article, chacun au format "**Titre court** : explication brève" (c'est la seule section de tout l'article où une liste à puces est autorisée)
- Utilise le Markdown pour le formatage des titres et de cette liste finale uniquement

**Bonnes pratiques SEO à appliquer :**
- Le mot-clé principal doit apparaître dans le H1, dans les 100 premiers mots et naturellement dans le texte
- Utilise des variations sémantiques et synonymes des mots-clés
- Réponds précisément à l'intention de recherche de l'internaute (chef d'entreprise, RH, salarié cherchant une formation)
- Chaque section H2 doit apporter une réponse concrète et de la valeur
- Méta-description accrocheuse entre 150 et 160 caractères

**Catégorie :** ${categoryInstructions}

**Réponds UNIQUEMENT avec un objet JSON valide (sans backticks, sans markdown autour du JSON) :**
{
  "title": "Titre H1 SEO optimisé de l'article",
  "slug": "titre-en-kebab-case",
  "metaDescription": "Description SEO entre 150 et 160 caractères, avec le mot-clé principal",
  "content": "Contenu complet de l'article en Markdown, paragraphes uniquement sauf la liste à puces de la section finale « À retenir »",
  "readingTime": nombre_de_minutes_de_lecture,
  "suggestedCategory": "nom exact d'une catégorie existante, ou null"
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

async function callGemini(prompt: string, maxOutputTokens = 4096): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY manquante. Ajoutez-la dans .env.local (voir GEMINI_API_KEY dans le fichier)."
    );
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens,
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
  return text;
}

export async function generateArticle(
  topic: Topic,
  existingCategories: string[] = []
): Promise<GeneratedArticle> {
  const text = await callGemini(buildPrompt(topic, existingCategories));

  let parsed: Partial<GeneratedArticle> & { suggestedCategory?: unknown };
  try {
    parsed = JSON.parse(extractJson(text));
  } catch {
    throw new Error("Impossible d'analyser la réponse JSON de Gemini. Réessayez.");
  }

  if (!parsed.title || !parsed.content) {
    throw new Error("La réponse de Gemini est incomplète (titre ou contenu manquant).");
  }

  // Only trust the suggestion if it exactly matches one of the categories we
  // actually offered — Gemini can invent names despite instructions.
  const suggestedCategory =
    typeof parsed.suggestedCategory === "string" &&
    existingCategories.includes(parsed.suggestedCategory)
      ? parsed.suggestedCategory
      : null;

  return {
    title: parsed.title,
    slug: parsed.slug ? slugify(parsed.slug) : slugify(parsed.title),
    metaDescription: parsed.metaDescription || "",
    content: parsed.content,
    readingTime:
      typeof parsed.readingTime === "number" && parsed.readingTime > 0
        ? parsed.readingTime
        : Math.max(1, Math.round(parsed.content.split(/\s+/).length / 200)),
    suggestedCategory,
  };
}

function buildImageIdeasPrompt(title: string, content: string): string {
  // Only the first chunk of the article is enough context for image ideas,
  // no need to spend tokens on the whole thing.
  const excerpt = content.slice(0, 2000);

  return `
Tu es directeur artistique pour le blog d'un organisme de formation à la sécurité au travail (SECURIFORM).

Voici un article de blog :

**Titre :** ${title}
**Extrait :** ${excerpt}

Propose 5 idées d'images à la une pour illustrer cet article. Chaque idée doit être une description concrète et visuelle (ce qu'on verrait sur la photo : lieu, action, équipement, personnes), utilisable telle quelle comme requête de recherche sur une banque d'images (Unsplash, Pexels...). Pas de texte à ajouter sur l'image, pas de logo, pas de typographie — uniquement des scènes réalistes en lien avec la formation professionnelle et la sécurité au travail.

**Réponds UNIQUEMENT avec un tableau JSON de 5 chaînes de texte en français, sans backticks ni markdown autour :**
["idée 1", "idée 2", "idée 3", "idée 4", "idée 5"]
`.trim();
}

export async function suggestImageIdeas(title: string, content: string): Promise<string[]> {
  const text = await callGemini(buildImageIdeasPrompt(title, content), 1024);

  let parsed: unknown;
  try {
    parsed = JSON.parse(extractJson(text));
  } catch {
    throw new Error("Impossible d'analyser les suggestions d'images de Gemini. Réessayez.");
  }

  if (!Array.isArray(parsed) || parsed.some((idea) => typeof idea !== "string")) {
    throw new Error("Réponse de suggestions d'images inattendue.");
  }

  return parsed as string[];
}

export type TopicSuggestion = { title: string; description: string };

// Catalogue réel des formations SECURIFORM (extrait des pages du site) —
// permet à Gemini de proposer des sujets ancrés dans l'offre réelle plutôt
// que des thèmes génériques hors catalogue.
const FORMATIONS_CATALOGUE = `
- CACES® : R482B (engins de chantier), R489A (chariots de manutention), R486B (nacelles élévatrices), R484A (ponts roulants et portiques), R485A (gerbeurs à conducteur accompagnant), R490A (grues auxiliaires de chargement)
- VGP (Vérifications Générales Périodiques) : chariots élévateurs, nacelles élévatrices, grues auxiliaires, pelleteuses, ponts roulants, chargeuses, chariots télescopiques, compacteurs, hayons élévateurs, bras de levage, tombereaux, accessoires de levage
- Habilitation électrique : personnel électricien, personnel non-électricien
- Incendie et évacuation : manipulation d'extincteurs, évacuation, équipier de première intervention
- Travaux en hauteur et échafaudages : travaux en hauteur, échafaudages fixes, échafaudages roulants
- Secourisme : SST initiale, MAC SST, gestes qui sauvent
- Gestes et postures
- AIPR : opérateurs, encadrants, concepteurs
- Formations spécifiques : tondeuses auto-portées, tronçonneuse thermique, balayeuses routières
`.trim();

function buildTopicSuggestionsPrompt(
  existingTitles: string[],
  count: number,
  brief: string
): string {
  const existingList =
    existingTitles.length > 0
      ? existingTitles.map((t) => `- ${t}`).join("\n")
      : "(aucun sujet pour l'instant)";
  const briefLine = brief.trim()
    ? `**Consignes particulières à respecter :** ${brief.trim()}`
    : "";

  return `
Tu es stratège de contenu SEO pour le blog d'un organisme de formation professionnelle à la sécurité au travail (SECURIFORM).

Voici le catalogue réel des formations proposées par SECURIFORM — privilégie des sujets ancrés dans cette offre réelle (obligations légales, préparation, renouvellement, cas concrets, différences entre catégories...) plutôt que des thèmes trop génériques ou hors catalogue :
${FORMATIONS_CATALOGUE}

Voici les sujets d'articles déjà traités (publiés ou en file d'attente) — NE PROPOSE RIEN QUI FASSE DOUBLON OU SOIT TROP PROCHE DE CETTE LISTE :
${existingList}

${briefLine}

Propose ${count} nouveaux sujets d'articles de blog, originaux et pertinents pour ce secteur, qui n'existent pas encore dans la liste ci-dessus.

**Réponds UNIQUEMENT avec un tableau JSON valide de ${count} objets, sans backticks ni markdown autour :**
[{"title": "Titre du sujet", "description": "Description du sujet en 1 à 2 phrases"}]
`.trim();
}

export async function suggestTopics(
  existingTitles: string[],
  count: number,
  brief: string
): Promise<TopicSuggestion[]> {
  const text = await callGemini(buildTopicSuggestionsPrompt(existingTitles, count, brief), 2048);

  let parsed: unknown;
  try {
    parsed = JSON.parse(extractJson(text));
  } catch {
    throw new Error("Impossible d'analyser les suggestions de sujets de Gemini. Réessayez.");
  }

  if (!Array.isArray(parsed)) {
    throw new Error("Réponse de suggestions de sujets inattendue.");
  }

  return parsed
    .filter(
      (item): item is TopicSuggestion =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as TopicSuggestion).title === "string" &&
        typeof (item as TopicSuggestion).description === "string"
    )
    .slice(0, count);
}
