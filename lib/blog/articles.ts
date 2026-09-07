import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";
import type { Article } from "./types";

const ARTICLES_DIR = join(process.cwd(), "data", "articles");

function ensureDir() {
  if (!existsSync(ARTICLES_DIR)) mkdirSync(ARTICLES_DIR, { recursive: true });
}

function fileFor(slug: string) {
  return join(ARTICLES_DIR, `${slug}.json`);
}

export function getArticle(slug: string): Article | undefined {
  const file = fileFor(slug);
  if (!existsSync(file)) return undefined;
  try {
    return JSON.parse(readFileSync(file, "utf8")) as Article;
  } catch {
    return undefined;
  }
}

export function saveArticle(article: Article): void {
  ensureDir();
  writeFileSync(fileFor(article.slug), JSON.stringify(article, null, 2) + "\n", "utf8");
}

export function deleteArticle(slug: string): void {
  const file = fileFor(slug);
  if (existsSync(file)) unlinkSync(file);
}
