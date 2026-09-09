import { randomUUID } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";

export interface Category {
  id: string;
  name: string;
  createdAt: string;
}

const CATEGORIES_FILE = join(process.cwd(), "data", "categories.json");

function ensureFile() {
  const dir = dirname(CATEGORIES_FILE);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (!existsSync(CATEGORIES_FILE)) writeFileSync(CATEGORIES_FILE, "[]\n", "utf8");
}

function readAll(): Category[] {
  ensureFile();
  try {
    return JSON.parse(readFileSync(CATEGORIES_FILE, "utf8")) as Category[];
  } catch {
    return [];
  }
}

function writeAll(categories: Category[]) {
  ensureFile();
  writeFileSync(CATEGORIES_FILE, JSON.stringify(categories, null, 2) + "\n", "utf8");
}

export function getCategories(): Category[] {
  return readAll().sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

export function getCategory(id: string): Category | undefined {
  return readAll().find((c) => c.id === id);
}

export function createCategory(name: string): Category {
  const trimmed = name.trim();
  const categories = readAll();

  const existing = categories.find((c) => c.name.toLowerCase() === trimmed.toLowerCase());
  if (existing) return existing;

  const category: Category = { id: randomUUID(), name: trimmed, createdAt: new Date().toISOString() };
  categories.push(category);
  writeAll(categories);
  return category;
}

// Only removes it from the manageable list — topics/articles/published pages
// that already carry this category name as plain text keep it (see
// lib/blog/types.ts: category is stored denormalized, not by reference, so
// nothing breaks or goes orphaned when a category is deleted here).
export function deleteCategory(id: string): boolean {
  const categories = readAll();
  const next = categories.filter((c) => c.id !== id);
  if (next.length === categories.length) return false;
  writeAll(next);
  return true;
}
