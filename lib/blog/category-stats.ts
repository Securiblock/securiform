import type { Topic } from "./types";

// Répartition des sujets par catégorie : vue d'ensemble de l'admin,
// suggestions IA et choix du prochain sujet par le cron (équilibrage).
// Aucune dépendance serveur : importable aussi côté client.

export type CategoryStat = {
  // null = sujets sans catégorie (pas encore classés).
  name: string | null;
  published: number;
  // Générés ou approuvés, en attente de relecture/publication.
  toReview: number;
  pending: number;
  // Articles qui existent déjà (publiés + à relire) : la mesure utilisée
  // pour équilibrer les catégories.
  articles: number;
};

function emptyStat(name: string | null): CategoryStat {
  return { name, published: 0, toReview: 0, pending: 0, articles: 0 };
}

// Toutes les catégories gérées apparaissent (même à 0), plus celles qui
// n'existent plus dans la liste mais restent portées par des sujets. Tri :
// les moins fournies d'abord, « Sans catégorie » toujours en dernier.
export function computeCategoryStats(topics: Topic[], categoryNames: string[]): CategoryStat[] {
  const byName = new Map<string | null, CategoryStat>();
  for (const name of categoryNames) byName.set(name, emptyStat(name));

  for (const topic of topics) {
    if (topic.deletedAt) continue;
    const key = topic.category || null;
    const stat = byName.get(key) ?? emptyStat(key);
    byName.set(key, stat);
    if (topic.status === "published") stat.published++;
    else if (topic.status === "pending") stat.pending++;
    else stat.toReview++;
    stat.articles = stat.published + stat.toReview;
  }

  return [...byName.values()].sort((a, b) => {
    if (a.name === null) return 1;
    if (b.name === null) return -1;
    return a.articles - b.articles || a.name.localeCompare(b.name, "fr");
  });
}

// Prochain sujet à générer : celui dont la catégorie a le moins d'articles,
// puis le plus ancien (file FIFO entre catégories à égalité). Un sujet sans
// catégorie compte comme la catégorie la plus fournie : il passe après les
// catégories en retard, sans être bloqué indéfiniment.
export function pickNextTopic(pendingTopics: Topic[], stats: CategoryStat[]): Topic | undefined {
  const counts = new Map(stats.filter((s) => s.name !== null).map((s) => [s.name, s.articles]));
  const max = Math.max(0, ...counts.values());
  const score = (t: Topic) => (t.category ? (counts.get(t.category) ?? 0) : max);

  return [...pendingTopics].sort(
    (a, b) =>
      score(a) - score(b) || new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  )[0];
}
