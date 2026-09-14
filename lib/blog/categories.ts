import { randomUUID } from "crypto";
import { sql } from "./db";

export interface Category {
  id: string;
  name: string;
  createdAt: string;
}

type CategoryRow = { id: string; name: string; created_at: string };

function rowToCategory(row: CategoryRow): Category {
  return { id: row.id, name: row.name, createdAt: row.created_at };
}

export async function getCategories(): Promise<Category[]> {
  const rows = (await sql`SELECT * FROM categories ORDER BY name`) as CategoryRow[];
  // localeCompare("fr") sorts accented letters the way French speakers
  // expect (é right after e); Postgres's default collation doesn't, so the
  // ORDER BY above is just a reasonable pre-sort and this is the real one.
  return rows.map(rowToCategory).sort((a, b) => a.name.localeCompare(b.name, "fr"));
}

export async function getCategory(id: string): Promise<Category | undefined> {
  const rows = (await sql`SELECT * FROM categories WHERE id = ${id}`) as CategoryRow[];
  return rows[0] ? rowToCategory(rows[0]) : undefined;
}

export async function createCategory(name: string): Promise<Category> {
  const trimmed = name.trim();

  const existingRows = (await sql`
    SELECT * FROM categories WHERE lower(name) = lower(${trimmed})
  `) as CategoryRow[];
  if (existingRows[0]) return rowToCategory(existingRows[0]);

  const category: Category = { id: randomUUID(), name: trimmed, createdAt: new Date().toISOString() };
  await sql`
    INSERT INTO categories (id, name, created_at)
    VALUES (${category.id}, ${category.name}, ${category.createdAt})
  `;
  return category;
}

// Only removes it from the manageable list — topics/articles/published pages
// that already carry this category name as plain text keep it (see
// lib/blog/types.ts: category is stored denormalized, not by reference, so
// nothing breaks or goes orphaned when a category is deleted here).
export async function deleteCategory(id: string): Promise<boolean> {
  const rows = (await sql`DELETE FROM categories WHERE id = ${id} RETURNING id`) as { id: string }[];
  return rows.length > 0;
}
