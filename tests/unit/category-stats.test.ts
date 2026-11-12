import { describe, expect, it } from "vitest";
import { computeCategoryStats, pickNextTopic } from "@/lib/blog/category-stats";
import type { Topic, TopicStatus } from "@/lib/blog/types";

let n = 0;
function sujet(category: string | null, status: TopicStatus, extra: Partial<Topic> = {}): Topic {
  n++;
  return {
    id: `t${n}`,
    title: `Sujet ${n}`,
    description: "",
    keywords: [],
    tone: "professionnel",
    targetLength: 1000,
    status,
    createdAt: new Date(2026, 0, n).toISOString(),
    generatedAt: null,
    publishedAt: null,
    slug: null,
    deletedAt: null,
    category,
    ...extra,
  };
}

describe("computeCategoryStats", () => {
  it("compte publiés, à relire et en attente par catégorie, corbeille exclue", () => {
    const stats = computeCategoryStats(
      [
        sujet("CACES", "published"),
        sujet("CACES", "published"),
        sujet("CACES", "generated"),
        sujet("CACES", "approved"),
        sujet("CACES", "pending"),
        sujet("CACES", "published", { deletedAt: "2026-02-01T00:00:00Z" }),
        sujet("Incendie", "published"),
      ],
      ["CACES", "Incendie", "VGP"]
    );

    expect(stats).toEqual([
      { name: "VGP", published: 0, toReview: 0, pending: 0, articles: 0 },
      { name: "Incendie", published: 1, toReview: 0, pending: 0, articles: 1 },
      { name: "CACES", published: 2, toReview: 2, pending: 1, articles: 4 },
    ]);
  });

  it("garde les catégories supprimées encore portées par des sujets, et « Sans catégorie » en dernier", () => {
    const stats = computeCategoryStats(
      [sujet(null, "pending"), sujet("Ancienne", "published"), sujet("Ancienne", "published")],
      ["CACES"]
    );
    expect(stats.map((s) => s.name)).toEqual(["CACES", "Ancienne", null]);
  });
});

describe("pickNextTopic (choix du cron)", () => {
  it("choisit le sujet de la catégorie qui a le moins d'articles, même s'il est plus récent", () => {
    const ancienCaces = sujet("CACES", "pending");
    const recentVgp = sujet("VGP", "pending");
    const topics = [sujet("CACES", "published"), sujet("CACES", "published"), ancienCaces, recentVgp];

    const stats = computeCategoryStats(topics, ["CACES", "VGP"]);
    expect(pickNextTopic([ancienCaces, recentVgp], stats)).toBe(recentVgp);
  });

  it("à égalité, le plus ancien passe d'abord", () => {
    const premier = sujet("CACES", "pending");
    const second = sujet("VGP", "pending");
    const stats = computeCategoryStats([premier, second], ["CACES", "VGP"]);
    expect(pickNextTopic([second, premier], stats)).toBe(premier);
  });

  it("un sujet sans catégorie passe après les catégories en retard, mais n'est pas bloqué", () => {
    const sansCategorie = sujet(null, "pending");
    const vgp = sujet("VGP", "pending");
    const topics = [sujet("CACES", "published"), sujet("CACES", "published"), sansCategorie, vgp];
    const stats = computeCategoryStats(topics, ["CACES", "VGP"]);

    expect(pickNextTopic([sansCategorie, vgp], stats)).toBe(vgp);
    expect(pickNextTopic([sansCategorie], stats)).toBe(sansCategorie);
  });

  it("file vide : rien à générer", () => {
    expect(pickNextTopic([], [])).toBeUndefined();
  });
});
