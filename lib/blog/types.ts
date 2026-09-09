export type TopicStatus = "pending" | "generated" | "approved" | "published";

export type TopicTone = "professionnel" | "décontracté" | "technique" | "pédagogique";

export interface Topic {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  tone: TopicTone;
  targetLength: number;
  status: TopicStatus;
  createdAt: string;
  generatedAt: string | null;
  publishedAt: string | null;
  slug: string | null;
  deletedAt: string | null;
  // Stored as plain text, not a reference to lib/blog/categories.ts — so
  // deleting a category later never orphans a topic/article that used it.
  category: string | null;
}

export type NewTopicInput = {
  title: string;
  description: string;
  keywords: string[];
  tone: TopicTone;
  targetLength: number;
  category: string | null;
};

export interface Article {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  content: string;
  readingTime: number;
  generatedAt: string;
  status: Extract<TopicStatus, "generated" | "approved" | "published">;
  image: string | null;
  category: string | null;
}
