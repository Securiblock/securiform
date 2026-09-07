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
}

export type NewTopicInput = {
  title: string;
  description: string;
  keywords: string[];
  tone: TopicTone;
  targetLength: number;
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
}
