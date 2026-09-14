import { randomUUID } from "crypto";
import { sql } from "./db";
import type { NewTopicInput, Topic, TopicStatus } from "./types";

type TopicRow = {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  tone: string;
  target_length: number;
  status: string;
  created_at: string;
  generated_at: string | null;
  published_at: string | null;
  slug: string | null;
  deleted_at: string | null;
  category: string | null;
};

function rowToTopic(row: TopicRow): Topic {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    keywords: row.keywords ?? [],
    tone: row.tone as Topic["tone"],
    targetLength: row.target_length,
    status: row.status as TopicStatus,
    createdAt: row.created_at,
    generatedAt: row.generated_at,
    publishedAt: row.published_at,
    slug: row.slug,
    deletedAt: row.deleted_at,
    category: row.category,
  };
}

export async function getTopics(): Promise<Topic[]> {
  const rows = (await sql`
    SELECT * FROM topics ORDER BY created_at DESC
  `) as TopicRow[];
  return rows.map(rowToTopic);
}

export async function getTopic(id: string): Promise<Topic | undefined> {
  const rows = (await sql`SELECT * FROM topics WHERE id = ${id}`) as TopicRow[];
  return rows[0] ? rowToTopic(rows[0]) : undefined;
}

export async function createTopic(input: NewTopicInput): Promise<Topic> {
  const topic: Topic = {
    id: randomUUID(),
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    tone: input.tone,
    targetLength: input.targetLength,
    status: "pending",
    createdAt: new Date().toISOString(),
    generatedAt: null,
    publishedAt: null,
    slug: null,
    deletedAt: null,
    category: input.category,
  };

  await sql`
    INSERT INTO topics (
      id, title, description, keywords, tone, target_length, status,
      created_at, generated_at, published_at, slug, deleted_at, category
    ) VALUES (
      ${topic.id}, ${topic.title}, ${topic.description}, ${topic.keywords},
      ${topic.tone}, ${topic.targetLength}, ${topic.status}, ${topic.createdAt},
      ${topic.generatedAt}, ${topic.publishedAt}, ${topic.slug}, ${topic.deletedAt},
      ${topic.category}
    )
  `;

  return topic;
}

// Builds an UPDATE from only the fields present in `patch` — every field on
// Topic is optional here since callers only ever change one or two at a
// time (status, category, deletedAt, etc.).
export async function updateTopic(id: string, patch: Partial<Topic>): Promise<Topic | undefined> {
  const existing = await getTopic(id);
  if (!existing) return undefined;

  const merged: Topic = { ...existing, ...patch, id };

  await sql`
    UPDATE topics SET
      title = ${merged.title},
      description = ${merged.description},
      keywords = ${merged.keywords},
      tone = ${merged.tone},
      target_length = ${merged.targetLength},
      status = ${merged.status},
      generated_at = ${merged.generatedAt},
      published_at = ${merged.publishedAt},
      slug = ${merged.slug},
      deleted_at = ${merged.deletedAt},
      category = ${merged.category}
    WHERE id = ${id}
  `;

  return merged;
}

// Permanently removes the topic. Use trashTopic() for the normal
// "Supprimer" action — this is only for purging from the corbeille.
export async function deleteTopic(id: string): Promise<boolean> {
  const rows = (await sql`DELETE FROM topics WHERE id = ${id} RETURNING id`) as { id: string }[];
  return rows.length > 0;
}

export async function trashTopic(id: string): Promise<Topic | undefined> {
  return updateTopic(id, { deletedAt: new Date().toISOString() });
}

export async function restoreTopic(id: string): Promise<Topic | undefined> {
  return updateTopic(id, { deletedAt: null });
}

export function isTopicStatus(value: string): value is TopicStatus {
  return ["pending", "generated", "approved", "published"].includes(value);
}
