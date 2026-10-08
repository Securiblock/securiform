"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Category } from "@/lib/blog/categories";
import type { Topic, TopicStatus, TopicTone } from "@/lib/blog/types";
import StatusBadge from "./status-badge";
import { Button, ButtonLink, Card, PageHeader, StatChip, useConfirm, useToast } from "./ui";

type FilterValue = "all" | TopicStatus | "trash";

const TONES: TopicTone[] = ["professionnel", "décontracté", "technique", "pédagogique"];

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "pending", label: "En attente" },
  { value: "generated", label: "Généré" },
  { value: "published", label: "Publié" },
  { value: "trash", label: "Corbeille" },
];

function formatShortDate(iso: string): string {
  return new Date(iso).toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function BlogDashboard({
  topics,
  categories,
  images,
}: {
  topics: Topic[];
  categories: Category[];
  images: Record<string, string>;
}) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [search, setSearch] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [emptyTrashBusy, setEmptyTrashBusy] = useState(false);
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [quickAddText, setQuickAddText] = useState("");
  const [quickAddBusy, setQuickAddBusy] = useState(false);
  const [quickAddError, setQuickAddError] = useState<string | null>(null);
  const [autoGenBusy, setAutoGenBusy] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [categoryBusy, setCategoryBusy] = useState<string | null>(null);
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [suggestCount, setSuggestCount] = useState(5);
  const [suggestBrief, setSuggestBrief] = useState("");
  const [suggestBusy, setSuggestBusy] = useState(false);
  const [suggestError, setSuggestError] = useState<string | null>(null);
  const router = useRouter();
  const confirm = useConfirm();
  const toast = useToast();

  const pendingCount = useMemo(
    () => topics.filter((t) => t.status === "pending" && !t.deletedAt).length,
    [topics]
  );
  const publishedCount = useMemo(
    () => topics.filter((t) => t.status === "published").length,
    [topics]
  );
  const trashCount = useMemo(() => topics.filter((t) => t.deletedAt).length, [topics]);

  const filtered = useMemo(() => {
    const byStatus =
      filter === "trash"
        ? topics.filter((t) => t.deletedAt)
        : topics.filter((t) => !t.deletedAt && (filter === "all" || t.status === filter));

    const byCategory = categoryFilter
      ? byStatus.filter((t) => t.category === categoryFilter)
      : byStatus;

    const q = search.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }, [topics, filter, categoryFilter, search]);

  async function handleTrash(id: string, title: string) {
    const ok = await confirm({
      title: "Envoyer à la corbeille ?",
      description: `« ${title} » sera déplacé dans la corbeille. Vous pourrez le restaurer plus tard.`,
      confirmLabel: "Envoyer à la corbeille",
    });
    if (!ok) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/blog/topics/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      toast("Sujet envoyé à la corbeille.");
      router.refresh();
    } catch {
      toast("Échec de la suppression.", "error");
    } finally {
      setBusyId(null);
    }
  }

  async function handleRestore(id: string) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/blog/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deletedAt: null }),
      });
      if (!res.ok) throw new Error();
      toast("Sujet restauré.");
      router.refresh();
    } catch {
      toast("Échec de la restauration.", "error");
    } finally {
      setBusyId(null);
    }
  }

  async function handleUnpublish(id: string) {
    const ok = await confirm({
      title: "Dépublier cet article ?",
      description:
        "La page ne sera plus accessible sur le site, mais rien n'est supprimé : vous pourrez le republier plus tard.",
      confirmLabel: "Dépublier",
    });
    if (!ok) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/blog/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (!res.ok) throw new Error();
      toast("Article dépublié.");
      router.refresh();
    } catch {
      toast("Échec de la dépublication.", "error");
    } finally {
      setBusyId(null);
    }
  }

  async function handleQuickAdd() {
    const lines = quickAddText
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) {
      setQuickAddError("Ajoutez au moins un sujet.");
      return;
    }

    setQuickAddBusy(true);
    setQuickAddError(null);
    try {
      for (const line of lines) {
        const [titlePart, descriptionPart, tonePart] = line.split("|").map((p) => p.trim());
        const tone = TONES.includes(tonePart as TopicTone) ? (tonePart as TopicTone) : "professionnel";
        const res = await fetch("/api/blog/topics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: titlePart,
            description: descriptionPart || titlePart,
            keywords: [],
            tone,
            targetLength: 1000,
            category: null,
          }),
        });
        if (!res.ok) throw new Error((await res.json()).error || `Échec pour « ${titlePart} ».`);
      }
      toast(`${lines.length} sujet${lines.length > 1 ? "s" : ""} ajouté${lines.length > 1 ? "s" : ""}.`);
      setQuickAddText("");
      setQuickAddOpen(false);
      router.refresh();
    } catch (err) {
      setQuickAddError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setQuickAddBusy(false);
    }
  }

  async function handleAutoGenerateNow() {
    setAutoGenBusy(true);
    try {
      const res = await fetch("/api/blog/generate-next", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la génération.");
      toast(
        data.generated
          ? `Généré : « ${data.title} »${data.emailSent ? " : email envoyé." : " : email NON envoyé (voir la config Resend)."}`
          : data.reason || "Rien à générer.",
        data.generated ? "success" : "error"
      );
      router.refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : "Erreur inconnue.", "error");
    } finally {
      setAutoGenBusy(false);
    }
  }

  async function handleAddCategory() {
    if (!newCategoryName.trim()) return;
    setCategoryBusy("new");
    setCategoryError(null);
    try {
      const res = await fetch("/api/blog/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName.trim() }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la création.");
      setNewCategoryName("");
      router.refresh();
    } catch (err) {
      setCategoryError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setCategoryBusy(null);
    }
  }

  async function handleDeleteCategory(id: string, name: string) {
    const ok = await confirm({
      title: "Supprimer cette catégorie ?",
      description: `« ${name} » : les articles déjà classés dedans la garderont, mais elle ne sera plus proposée pour les nouveaux sujets.`,
      confirmLabel: "Supprimer",
    });
    if (!ok) return;
    setCategoryBusy(id);
    setCategoryError(null);
    try {
      const res = await fetch(`/api/blog/categories/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la suppression.");
      router.refresh();
    } catch (err) {
      setCategoryError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setCategoryBusy(null);
    }
  }

  async function handleSuggestTopics() {
    setSuggestBusy(true);
    setSuggestError(null);
    try {
      const res = await fetch("/api/blog/suggest-topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ count: suggestCount, brief: suggestBrief }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la suggestion.");

      const lines: string[] = data.suggestions.map((s: { title: string; description: string }) => {
        const tone = TONES[Math.floor(Math.random() * TONES.length)];
        return `${s.title} | ${s.description} | ${tone}`;
      });
      setQuickAddText((prev) => (prev.trim() ? `${prev.trim()}\n${lines.join("\n")}` : lines.join("\n")));
      setQuickAddOpen(true);
      setSuggestOpen(false);
    } catch (err) {
      setSuggestError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setSuggestBusy(false);
    }
  }

  async function handleEmptyTrash() {
    const aSupprimer = topics.filter((t) => t.deletedAt);
    if (aSupprimer.length === 0) return;
    const ok = await confirm({
      title: "Vider la corbeille ?",
      description: `Supprime définitivement les ${aSupprimer.length} sujet${aSupprimer.length > 1 ? "s" : ""} de la corbeille, ainsi que leurs articles et versions publiées s'il y en a. Cette action est irréversible.`,
      confirmLabel: "Vider la corbeille",
    });
    if (!ok) return;
    setEmptyTrashBusy(true);
    try {
      const resultats = await Promise.all(
        aSupprimer.map((t) => fetch(`/api/blog/topics/${t.id}?permanent=true`, { method: "DELETE" }))
      );
      if (resultats.some((r) => !r.ok)) {
        toast("Certains sujets n'ont pas pu être supprimés. Réessayez.", "error");
      } else {
        toast("Corbeille vidée.");
      }
      router.refresh();
    } catch {
      toast("Échec de la suppression de la corbeille.", "error");
    } finally {
      setEmptyTrashBusy(false);
    }
  }

  async function handlePurge(id: string, title: string) {
    const ok = await confirm({
      title: "Supprimer définitivement ?",
      description: `« ${title} » : l'article et sa version publiée (s'il y en a une) seront aussi supprimés. Cette action est irréversible.`,
      confirmLabel: "Supprimer définitivement",
    });
    if (!ok) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/blog/topics/${id}?permanent=true`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      toast("Sujet supprimé définitivement.");
      router.refresh();
    } catch {
      toast("Échec de la suppression définitive.", "error");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <PageHeader
        title="Articles de blog"
        subtitle="Génération, relecture et publication des articles du site."
        actions={
          <>
            <Button variant="secondary" onClick={() => setSuggestOpen((v) => !v)}>
              ✨ Suggestions IA
            </Button>
            <Button variant="secondary" onClick={() => setCategoriesOpen((v) => !v)}>
              🏷️ Catégories
            </Button>
            <Button variant="secondary" onClick={() => setQuickAddOpen((v) => !v)}>
              📋 Ajout rapide
            </Button>
            <ButtonLink href="/admin/blog/new">+ Nouveau sujet</ButtonLink>
          </>
        }
      />

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatChip label="Sujets au total" value={topics.filter((t) => !t.deletedAt).length} />
        <StatChip label="En attente" value={pendingCount} />
        <StatChip label="Publiés" value={publishedCount} />
        <StatChip label="Corbeille" value={trashCount} />
      </div>

      {suggestOpen && (
        <Card className="mb-6 p-5">
          <h2 className="mb-1 text-sm font-bold text-slate-900">Suggestions de sujets (Gemini)</h2>
          <p className="mb-3 text-xs text-slate-500">
            Gemini reçoit à chaque fois la liste de tous les sujets déjà traités ou en
            file pour éviter les doublons, et propose de nouvelles idées. Elles
            s&apos;ajoutent à l&apos;ajout rapide pour relecture avant création.
          </p>
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Nombre de sujets
              </label>
              <input
                type="number"
                min={1}
                max={10}
                value={suggestCount}
                onChange={(e) =>
                  setSuggestCount(Math.min(10, Math.max(1, Number(e.target.value) || 1)))
                }
                className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
              />
            </div>
            <div className="min-w-[220px] flex-1">
              <label className="mb-1 block text-xs font-semibold text-slate-500">
                Description / consignes (optionnel)
              </label>
              <input
                type="text"
                value={suggestBrief}
                onChange={(e) => setSuggestBrief(e.target.value)}
                placeholder="ex. sujets orientés BTP, ou sur les nouveautés réglementaires"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
              />
            </div>
          </div>
          {suggestError && <p className="mt-3 text-sm text-red-600">{suggestError}</p>}
          <div className="mt-3">
            <Button onClick={handleSuggestTopics} disabled={suggestBusy}>
              {suggestBusy ? "Génération... (10-15 s)" : "✨ Générer des suggestions"}
            </Button>
          </div>
        </Card>
      )}

      {categoriesOpen && (
        <Card className="mb-6 p-5">
          <h2 className="mb-3 text-sm font-bold text-slate-900">Catégories</h2>

          {categories.length === 0 ? (
            <p className="mb-3 text-sm text-slate-400">Aucune catégorie pour l&apos;instant.</p>
          ) : (
            <ul className="mb-3 flex flex-wrap gap-2">
              {categories.map((c) => (
                <li
                  key={c.id}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1 pl-3 pr-2 text-sm"
                >
                  {c.name}
                  <button
                    type="button"
                    onClick={() => handleDeleteCategory(c.id, c.name)}
                    disabled={categoryBusy === c.id}
                    aria-label={`Supprimer la catégorie ${c.name}`}
                    className="rounded text-slate-400 hover:text-red-600 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1"
                  >
                    {categoryBusy === c.id ? "..." : "✕"}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {categoryError && <p className="mb-3 text-sm text-red-600">{categoryError}</p>}

          <div className="flex flex-wrap gap-3">
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddCategory();
                }
              }}
              placeholder="Nom de la nouvelle catégorie"
              className="w-full max-w-xs rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
            />
            <Button onClick={handleAddCategory} disabled={categoryBusy === "new" || !newCategoryName.trim()}>
              {categoryBusy === "new" ? "Ajout..." : "Ajouter"}
            </Button>
          </div>
        </Card>
      )}

      {quickAddOpen && (
        <Card className="mb-6 p-5">
          <h2 className="mb-1 text-sm font-bold text-slate-900">Ajouter plusieurs sujets d&apos;un coup</h2>
          <p className="mb-3 text-xs text-slate-500">
            Un sujet par ligne. Optionnel : ajoutez une description après un « | »
            (ex. <code>CACES R489A | les erreurs à éviter</code>). Sans description,
            le titre sert aussi de description : vous pourrez l&apos;affiner plus
            tard. Tous les sujets sont créés en ton « professionnel », 1000 mots
            (les suggestions IA arrivent déjà avec leur propre ton varié). La
            catégorie est choisie automatiquement par l&apos;IA à la génération
            de chaque article.
          </p>
          <textarea
            value={quickAddText}
            onChange={(e) => setQuickAddText(e.target.value)}
            rows={6}
            placeholder={"CACES R489A | les erreurs à éviter\nPourquoi former ses équipes au secourisme\nHabilitation électrique : les bases"}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-sm focus:border-red-600 focus:outline-none"
          />
          {quickAddError && <p className="mt-2 text-sm text-red-600">{quickAddError}</p>}
          <div className="mt-3 flex gap-3">
            <Button onClick={handleQuickAdd} disabled={quickAddBusy}>
              {quickAddBusy ? "Ajout..." : "Ajouter les sujets"}
            </Button>
            <Button variant="secondary" onClick={() => setQuickAddOpen(false)} disabled={quickAddBusy}>
              Annuler
            </Button>
          </div>
        </Card>
      )}

      <Card className="mb-6 flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          <span className="font-semibold">Génération automatique</span> : tous les 2 jours en
          production (Vercel Cron), un sujet en attente est généré et vous recevez un email
          pour le relire. {pendingCount} sujet{pendingCount !== 1 ? "s" : ""} en attente
          dans la file.
        </div>
        <Button
          variant="secondary"
          onClick={handleAutoGenerateNow}
          disabled={autoGenBusy}
          className="shrink-0 self-start sm:self-auto"
        >
          {autoGenBusy ? "..." : "🧪 Tester maintenant"}
        </Button>
      </Card>

      <div className="mb-4 flex flex-wrap gap-3">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un sujet (titre, description, mots-clés)..."
          className="w-full max-w-md rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
        />
        {categories.length > 0 && (
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
          >
            <option value="">Toutes les catégories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f.value
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              } border border-slate-200`}
            >
              {f.label}
              {f.value === "trash" && trashCount > 0 ? ` (${trashCount})` : ""}
            </button>
          ))}
        </div>
        {filter === "trash" && trashCount > 0 && (
          <Button variant="danger" onClick={handleEmptyTrash} disabled={emptyTrashBusy}>
            {emptyTrashBusy ? "Suppression..." : "🗑️ Vider la corbeille"}
          </Button>
        )}
      </div>

      <Card className="overflow-x-auto">
        <table className="w-full min-w-[1150px] table-fixed text-left text-sm">
          <colgroup>
            <col className="w-[18%]" />
            <col className="w-[28%]" />
            <col className="w-[8%]" />
            <col className="w-[10%]" />
            <col className="w-[14%]" />
            <col className="w-[22%]" />
          </colgroup>
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3">Titre</th>
              <th className="px-5 py-3">Description</th>
              <th className="px-5 py-3">Catégorie</th>
              <th className="px-5 py-3">Statut</th>
              <th className="px-5 py-3">Dates</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-slate-400">
                  {search.trim()
                    ? `Aucun sujet ne correspond à « ${search.trim()} ».`
                    : filter === "trash"
                      ? "La corbeille est vide."
                      : "Aucun sujet pour ce filtre."}
                </td>
              </tr>
            )}
            {filtered.map((topic) => (
              <tr key={topic.id} className="border-t border-slate-100 transition-colors hover:bg-slate-50">
                <td
                  className="bg-cover bg-center px-5 py-4 font-medium text-slate-900"
                  style={
                    images[topic.id]
                      ? {
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.72), rgba(255,255,255,0.72)), url(${images[topic.id]})`,
                        }
                      : undefined
                  }
                >
                  <div className="flex flex-col gap-1">
                    <span>{topic.title}</span>
                    {topic.status === "published" && topic.slug && (
                      <a
                        href={`/blog/${topic.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-normal whitespace-normal text-red-600 hover:underline"
                      >
                        🔗 Voir l&apos;article publié
                      </a>
                    )}
                  </div>
                </td>
                <td className="px-5 py-4 text-slate-500">
                  {topic.description}
                </td>
                <td className="px-5 py-4 text-slate-500">{topic.category || "—"}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={topic.status} />
                </td>
                <td className="px-5 py-4 text-xs text-slate-500">
                  <div>Créé : {formatShortDate(topic.createdAt)}</div>
                  {topic.generatedAt && <div>Généré : {formatShortDate(topic.generatedAt)}</div>}
                  {topic.publishedAt && <div>Publié : {formatShortDate(topic.publishedAt)}</div>}
                </td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    {filter === "trash" ? (
                      <>
                        <Button
                          size="sm"
                          variant="info"
                          onClick={() => handleRestore(topic.id)}
                          disabled={busyId === topic.id}
                        >
                          {busyId === topic.id ? "..." : "Restaurer"}
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          onClick={() => handlePurge(topic.id, topic.title)}
                          disabled={busyId === topic.id}
                        >
                          Supprimer définitivement
                        </Button>
                      </>
                    ) : (
                      <>
                        <ButtonLink size="sm" href={`/admin/blog/${topic.id}`}>
                          Ouvrir
                        </ButtonLink>
                        {topic.status === "published" && (
                          <Button
                            size="sm"
                            variant="warning"
                            onClick={() => handleUnpublish(topic.id)}
                            disabled={busyId === topic.id}
                          >
                            {busyId === topic.id ? "..." : "Dépublier"}
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleTrash(topic.id, topic.title)}
                          disabled={busyId === topic.id}
                        >
                          {busyId === topic.id ? "..." : "Supprimer"}
                        </Button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
