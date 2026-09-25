import { getPublishedArticles } from "@/lib/blog/content";
import { hubs, legal, pages } from "@/lib/site-pages";

// The chatbot answers from the site's own rendered pages rather than a
// hand-maintained copy, so it can never drift from what visitors actually
// read. Pages are fetched from this same deployment, reduced to plain text
// and indexed; the index is kept in memory for a few hours per instance.
//
// Sending the whole site with every question costs ~66k tokens, which the
// Gemini free tier caps at ~3 questions a minute. Instead each question is
// scored against the index and only the few best pages are sent, plus a
// one-line-per-page site map so the assistant can still link elsewhere.
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const FETCH_BATCH_SIZE = 8;
const COMMON_LINE_MIN_PAGES = 5;
const MAX_PAGES = 3;
const MAX_ARTICLES = 3;
// A page must score at least this share of the best page to be sent, so a
// precise question ("CACES R489") doesn't drag in loosely related pages.
const MIN_RELATIVE_SCORE = 0.3;
const FALLBACK_PATHS = ["/", "/lentreprise", "/nous-contacter"];

type Page = { path: string; title: string; text: string };
type IndexedDoc = { terms: Map<string, number>; titleTerms: Set<string>; length: number };
type IndexedPage = Page & IndexedDoc;
type IndexedArticle = { line: string } & IndexedDoc;

type SiteIndex = {
  common: string;
  siteMap: string;
  pages: IndexedPage[];
  articles: IndexedArticle[];
  documentFrequency: Map<string, number>;
  averageLength: number;
};

let cached: { index: SiteIndex; at: number } | null = null;
let inFlight: Promise<SiteIndex> | null = null;

// ---------------------------------------------------------------- text

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  rsquo: "’",
  laquo: "«",
  raquo: "»",
};

function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1] === "x" || code[1] === "X" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

function htmlToText(html: string): string {
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? "";
  return decodeEntities(
    main
      .replace(/<(script|style|svg|noscript|template)[\s\S]*?<\/\1>/gi, " ")
      // Keep internal link targets so the assistant can point visitors to them.
      .replace(/<a[^>]*href="(\/[^"#]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href: string, label: string) => {
        const text = label.replace(/<[^>]+>/g, " ").trim();
        return text ? ` ${text} [${href}] ` : " ";
      })
      .replace(/<\/(p|li|h[1-6]|tr|summary|div|section|article)>/gi, "\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/[ \t ]+/g, " ")
    .replace(/ *\n[ \n]*/g, "\n")
    .trim();
}

// ---------------------------------------------------------------- search

const STOP_WORDS = new Set(
  (
    "les des une un le la de du et en au aux pour par sur dans avec sans est sont ce cet cette ces " +
    "qui que quoi quel quelle quels quelles dont ou où il ils elle elles on nous vous je tu me te se " +
    "mon ma mes ton ta tes son sa ses notre nos votre vos leur leurs pas plus ne ni mais donc car " +
    "comme tout tous toute toutes très bien fait faire faites être avoir avez ont peut peux pouvez " +
    "puis-je est-ce estce combien comment pourquoi quand y a à l d s n c j qu bonjour merci svp " +
    "securiform formation formations"
  ).split(" ")
);

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

// Light French stemming: enough for "chariots"/"chariot", "électriques"/
// "électrique", "vérifications"/"vérification".
function stem(word: string): string {
  if (/\d/.test(word)) return word;
  return word.length > 4 ? word.replace(/(aux|eaux|x|s)$/, "") : word;
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !STOP_WORDS.has(w))
    .map(stem);
}

function indexDoc(text: string, title: string): IndexedDoc {
  const terms = new Map<string, number>();
  const words = tokenize(text);
  for (const w of words) terms.set(w, (terms.get(w) ?? 0) + 1);
  return { terms, titleTerms: new Set(tokenize(title)), length: words.length };
}

// Query term → matching document terms. Codes are matched by prefix so
// "r489" finds "r489a"; words need an exact (stemmed) match.
function termMatches(queryTerm: string, docTerm: string): boolean {
  if (queryTerm === docTerm) return true;
  return /\d/.test(queryTerm) && queryTerm.length >= 3 && docTerm.startsWith(queryTerm);
}

type Query = { terms: Map<string, number>; documentFrequency: Map<string, number> };

function buildQuery(userQuestions: string[], index: SiteIndex): Query {
  const terms = new Map<string, number>();
  userQuestions
    .slice(-3)
    .reverse()
    .forEach((question, i) => {
      const weight = i === 0 ? 1 : 0.4 / i;
      for (const term of new Set(tokenize(question))) terms.set(term, Math.max(terms.get(term) ?? 0, weight));
    });

  const documentFrequency = new Map<string, number>();
  for (const q of terms.keys()) {
    let df = 0;
    for (const [term, count] of index.documentFrequency) if (termMatches(q, term)) df = Math.max(df, count);
    documentFrequency.set(q, df);
  }
  return { terms, documentFrequency };
}

// BM25, with a strong bonus when the term is in the page title or path.
function score(doc: IndexedDoc, query: Query, index: SiteIndex): number {
  const k1 = 1.4;
  const b = 0.75;
  const total = index.pages.length;
  let result = 0;
  for (const [q, weight] of query.terms) {
    let tf = 0;
    for (const [term, count] of doc.terms) if (termMatches(q, term)) tf += count;
    const inTitle = [...doc.titleTerms].some((term) => termMatches(q, term));
    if (tf === 0 && !inTitle) continue;
    const df = query.documentFrequency.get(q) ?? 0;
    const idf = Math.log(1 + (total - df + 0.5) / (df + 0.5));
    const norm = (tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * doc.length) / index.averageLength));
    result += weight * idf * (norm + (inTitle ? 2.5 : 0));
  }
  return result;
}

// ---------------------------------------------------------------- index

async function fetchPage(origin: string, path: string): Promise<{ path: string; title: string; lines: string[] } | null> {
  try {
    const res = await fetch(new URL(path, origin), { cache: "no-store" });
    if (!res.ok) return null;
    const html = await res.text();
    const title = decodeEntities(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? path)
      .replace(/\s+[—-]\s+SECURIFORM$/, "");
    const lines = htmlToText(html).split("\n").filter(Boolean);
    return lines.length > 0 ? { path, title, lines } : null;
  } catch (err) {
    console.warn(`Chatbot : impossible de lire la page ${path}.`, err);
    return null;
  }
}

async function buildIndex(origin: string): Promise<SiteIndex> {
  const paths = [...hubs.map((h) => h.path), ...pages, ...legal];
  const fetched: Awaited<ReturnType<typeof fetchPage>>[] = [];
  for (let i = 0; i < paths.length; i += FETCH_BATCH_SIZE) {
    const batch = paths.slice(i, i + FETCH_BATCH_SIZE);
    fetched.push(...(await Promise.all(batch.map((p) => fetchPage(origin, p)))));
  }
  const raw = fetched.filter((p) => p !== null);

  // Blocks repeated on most pages (recruiting banner, contact CTA, quote
  // form…) are stripped from each page and sent once, with every question.
  const frequency = new Map<string, number>();
  for (const page of raw) {
    for (const line of new Set(page.lines)) frequency.set(line, (frequency.get(line) ?? 0) + 1);
  }
  const isCommon = (line: string) => (frequency.get(line) ?? 0) >= COMMON_LINE_MIN_PAGES;

  const indexedPages: IndexedPage[] = raw.map((p) => {
    const text = p.lines.filter((l) => !isCommon(l)).join("\n");
    return { path: p.path, title: p.title, text, ...indexDoc(text, `${p.title} ${p.path}`) };
  });

  const articles = await getPublishedArticles();
  const indexedArticles: IndexedArticle[] = articles.map((a) => ({
    line: `- ${a.title} [/blog/${a.slug}] : ${a.description}`,
    ...indexDoc(`${a.title} ${a.description}`, a.title),
  }));

  const documentFrequency = new Map<string, number>();
  for (const page of indexedPages) {
    for (const term of page.terms.keys()) documentFrequency.set(term, (documentFrequency.get(term) ?? 0) + 1);
  }

  const common = [...frequency.keys()].filter(isCommon).join("\n");
  const siteMap = indexedPages.map((p) => `- ${p.title} [${p.path}]`).join("\n");
  const averageLength = indexedPages.reduce((sum, p) => sum + p.length, 0) / Math.max(1, indexedPages.length);

  console.log(`Chatbot : index construit (${indexedPages.length} pages, ${indexedArticles.length} articles).`);
  return { common, siteMap, pages: indexedPages, articles: indexedArticles, documentFrequency, averageLength };
}

async function getIndex(origin: string): Promise<SiteIndex> {
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.index;
  if (!inFlight) {
    inFlight = buildIndex(origin)
      .then((index) => {
        if (index.pages.length > 0) cached = { index, at: Date.now() };
        return index;
      })
      .finally(() => {
        inFlight = null;
      });
  }
  return inFlight;
}

// ---------------------------------------------------------------- public

/**
 * Builds the context sent to Gemini for this conversation: shared blocks,
 * the site map and the (at most) 3 pages that best match the visitor's
 * questions. The latest question weighs most, earlier ones help follow-ups
 * like "et pour le recyclage ?" stay on the right topic.
 */
export async function getRelevantContent(
  origin: string,
  userQuestions: string[]
): Promise<{ content: string; paths: string[] }> {
  const index = await getIndex(origin);

  const query = buildQuery(userQuestions, index);

  const ranked = index.pages
    .map((page) => ({ page, score: score(page, query, index) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
  const best = ranked[0]?.score ?? 0;
  let selected = ranked
    .filter((r) => r.score >= best * MIN_RELATIVE_SCORE)
    .slice(0, MAX_PAGES)
    .map((r) => r.page);
  if (selected.length === 0) {
    selected = FALLBACK_PATHS.map((p) => index.pages.find((page) => page.path === p)).filter(
      (p): p is IndexedPage => p !== undefined
    );
  }

  const articles = index.articles
    .map((article) => ({ article, score: score(article, query, index) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_ARTICLES)
    .map((r) => r.article.line);

  const sections = [
    `=== ÉLÉMENTS COMMUNS À LA PLUPART DES PAGES ===\n${index.common}`,
    ...selected.map((p) => `=== PAGE ${p.path} — ${p.title} ===\n${p.text}`),
    ...(articles.length > 0 ? [`=== ARTICLES DU BLOG EN LIEN ===\n${articles.join("\n")}`] : []),
    `=== PLAN DU SITE (titres seulement) ===\n${index.siteMap}`,
  ];

  return { content: sections.join("\n\n"), paths: selected.map((p) => p.path) };
}
