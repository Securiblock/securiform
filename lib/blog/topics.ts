import { randomUUID } from "crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import type { NewTopicInput, Topic, TopicStatus } from "./types";

const TOPICS_FILE = join(process.cwd(), "data", "topics.json");

function ensureFile() {
  const dir = dirname(TOPICS_FILE);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (!existsSync(TOPICS_FILE)) writeFileSync(TOPICS_FILE, "[]\n", "utf8");
}

function readAll(): Topic[] {
  ensureFile();
  const raw = readFileSync(TOPICS_FILE, "utf8");
  try {
    return JSON.parse(raw) as Topic[];
  } catch {
    return [];
  }
}

function writeAll(topics: Topic[]) {
  ensureFile();
  writeFileSync(TOPICS_FILE, JSON.stringify(topics, null, 2) + "\n", "utf8");
}

export function getTopics(): Topic[] {
  return readAll().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getTopic(id: string): Topic | undefined {
  return readAll().find((t) => t.id === id);
}

export function createTopic(input: NewTopicInput): Topic {
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
  const topics = readAll();
  topics.push(topic);
  writeAll(topics);
  return topic;
}

export function updateTopic(id: string, patch: Partial<Topic>): Topic | undefined {
  const topics = readAll();
  const index = topics.findIndex((t) => t.id === id);
  if (index === -1) return undefined;
  topics[index] = { ...topics[index], ...patch, id: topics[index].id };
  writeAll(topics);
  return topics[index];
}

// Permanently removes the topic from topics.json. Use trashTopic() for the
// normal "Supprimer" action — this is only for purging from the corbeille.
export function deleteTopic(id: string): boolean {
  const topics = readAll();
  const next = topics.filter((t) => t.id !== id);
  if (next.length === topics.length) return false;
  writeAll(next);
  return true;
}

export function trashTopic(id: string): Topic | undefined {
  return updateTopic(id, { deletedAt: new Date().toISOString() });
}

export function restoreTopic(id: string): Topic | undefined {
  return updateTopic(id, { deletedAt: null });
}

export function isTopicStatus(value: string): value is TopicStatus {
  return ["pending", "generated", "approved", "published"].includes(value);
}
