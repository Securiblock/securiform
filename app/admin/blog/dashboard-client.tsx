"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Category } from "@/lib/blog/categories";
import type { Topic, TopicStatus } from "@/lib/blog/types";
import StatusBadge from "./status-badge";

type FilterValue = "all" | TopicStatus | "trash";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "pending", label: "En attente" },
  { value: "generated", label: "Généré" },
  { value: "published", label: "Publié" },
  { value: "trash", label: "Corbeille" },
];

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
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [quickAddText, setQuickAddText] = useState("");
  const [quickAddCategory, setQuickAddCategory] = useState("");
  const [quickAddBusy, setQuickAddBusy] = useState(false);
  const [quickAddError, setQuickAddError] = useState<string | null>(null);
  const [autoGenBusy, setAutoGenBusy] = useState(false);
  const [autoGenMessage, setAutoGenMessage] = useState<string | null>(null);
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

  const pendingCount = useMemo(
    () => topics.filter((t) => t.status === "pending" && !t.deletedAt).length,
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
    if (!confirm(`Envoyer « ${title} » à la corbeille ?`)) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/blog/topics/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      router.refresh();
    } catch {
      alert("Échec de la suppression.");
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
      router.refresh();
    } catch {
      alert("Échec de la restauration.");
    } finally {
      setBusyId(null);
    }
  }

  async function handleUnpublish(id: string) {
    if (!confirm("Dépublier cet article ? La page ne sera plus accessible sur le site, mais rien n'est supprimé — vous pourrez le republier plus tard.")) {
      return;
    }
    setBusyId(id);
    try {
      const res = await fetch(`/api/blog/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (!res.ok) throw new Error();
      router.refresh();
    } catch {
      alert("Échec de la dépublication.");
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
        const [titlePart, descriptionPart] = line.split("|").map((p) => p.trim());
        const res = await fetch("/api/blog/topics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: titlePart,
            description: descriptionPart || titlePart,
            keywords: [],
            tone: "professionnel",
            targetLength: 1000,
            category: quickAddCategory || null,
          }),
        });
        if (!res.ok) throw new Error((await res.json()).error || `Échec pour « ${titlePart} ».`);
      }
      setQuickAddText("");
      setQuickAddCategory("");
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
    setAutoGenMessage(null);
    try {
      const res = await fetch("/api/blog/generate-next", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la génération.");
      setAutoGenMessage(
        data.generated
          ? `Généré : « ${data.title} »${data.emailSent ? " — email envoyé." : " — email NON envoyé (voir la config Resend)."}`
          : data.reason || "Rien à générer."
      );
      router.refresh();
    } catch (err) {
      setAutoGenMessage(err instanceof Error ? err.message : "Erreur inconnue.");
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
    if (
      !confirm(
        `Supprimer la catégorie « ${name} » ? Les articles déjà classés dedans la garderont, mais elle ne sera plus proposée pour les nouveaux sujets.`
      )
    ) {
      return;
    }
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

      const lines: string[] = data.suggestions.map(
        (s: { title: string; description: string }) => `${s.title} | ${s.description}`
      );
      setQuickAddText((prev) => (prev.trim() ? `${prev.trim()}\n${lines.join("\n")}` : lines.join("\n")));
      setQuickAddOpen(true);
      setSuggestOpen(false);
    } catch (err) {
      setSuggestError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setSuggestBusy(false);
    }
  }

  async function handlePurge(id: string, title: string) {
    if (
      !confirm(
        `Supprimer définitivement « ${title} » ? Cette action est irréversible et supprime aussi l'article et sa version publiée s'il y en a une.`
      )
    ) {
      return;
    }
    setBusyId(id);
    try {
      const res = await fetch(`/api/blog/topics/${id}?permanent=true`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      router.refresh();
    } catch {
      alert("Échec de la suppression définitive.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Articles de blog</h1>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setSuggestOpen((v) => !v)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            ✨ Suggestions IA
          </button>
          <button
            type="button"
            onClick={() => setCategoriesOpen((v) => !v)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            🏷️ Catégories
          </button>
          <button
            type="button"
            onClick={() => setQuickAddOpen((v) => !v)}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            📋 Ajout rapide
          </button>
          <Link
            href="/admin/blog/new"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
          >
            + Nouveau sujet
          </Link>
        </div>
      </div>

      {suggestOpen && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-1 text-sm font-bold">Suggestions de sujets (Gemini)</h2>
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
            <button
              type="button"
              onClick={handleSuggestTopics}
              disabled={suggestBusy}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
            >
              {suggestBusy ? "Génération... (10-15 s)" : "✨ Générer des suggestions"}
            </button>
          </div>
        </div>
      )}

      {categoriesOpen && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-3 text-sm font-bold">Catégories</h2>

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
                    className="text-slate-400 hover:text-red-600 disabled:opacity-50"
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
            <button
              type="button"
              onClick={handleAddCategory}
              disabled={categoryBusy === "new" || !newCategoryName.trim()}
              className="shrink-0 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
            >
              {categoryBusy === "new" ? "Ajout..." : "Ajouter"}
            </button>
          </div>
        </div>
      )}

      {quickAddOpen && (
        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-1 text-sm font-bold">Ajouter plusieurs sujets d&apos;un coup</h2>
          <p className="mb-3 text-xs text-slate-500">
            Un sujet par ligne. Optionnel : ajoutez une description après un « | »
            (ex. <code>CACES R489A | les erreurs à éviter</code>). Sans description,
            le titre sert aussi de description — vous pourrez l&apos;affiner plus
            tard. Tous les sujets sont créés en ton « professionnel », 1000 mots.
          </p>
          <textarea
            value={quickAddText}
            onChange={(e) => setQuickAddText(e.target.value)}
            rows={6}
            placeholder={"CACES R489A | les erreurs à éviter\nPourquoi former ses équipes au secourisme\nHabilitation électrique : les bases"}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-sm focus:border-red-600 focus:outline-none"
          />
          <div className="mt-3">
            <label className="mb-1 block text-xs font-semibold text-slate-500">
              Catégorie (appliquée à tous les sujets ajoutés)
            </label>
            <select
              value={quickAddCategory}
              onChange={(e) => setQuickAddCategory(e.target.value)}
              className="w-full max-w-xs rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
            >
              <option value="">Aucune catégorie</option>
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          {quickAddError && <p className="mt-2 text-sm text-red-600">{quickAddError}</p>}
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={handleQuickAdd}
              disabled={quickAddBusy}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
            >
              {quickAddBusy ? "Ajout..." : "Ajouter les sujets"}
            </button>
            <button
              type="button"
              onClick={() => setQuickAddOpen(false)}
              disabled={quickAddBusy}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              Annuler
            </button>
          </div>
        </div>
      )}

      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600">
          <span className="font-semibold">Génération automatique</span> — tous les 2 jours en
          production (Vercel Cron), un sujet en attente est généré et vous recevez un email
          pour le relire. {pendingCount} sujet{pendingCount !== 1 ? "s" : ""} en attente
          dans la file.
        </div>
        <button
          type="button"
          onClick={handleAutoGenerateNow}
          disabled={autoGenBusy}
          className="shrink-0 self-start rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 sm:self-auto"
        >
          {autoGenBusy ? "..." : "🧪 Tester maintenant"}
        </button>
      </div>
      {autoGenMessage && <p className="mb-6 text-sm text-slate-600">{autoGenMessage}</p>}

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

      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
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

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3">Titre</th>
              <th className="px-5 py-3">Description</th>
              <th className="px-5 py-3">Catégorie</th>
              <th className="px-5 py-3">Statut</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-slate-400">
                  {search.trim()
                    ? `Aucun sujet ne correspond à « ${search.trim()} ».`
                    : filter === "trash"
                      ? "La corbeille est vide."
                      : "Aucun sujet pour ce filtre."}
                </td>
              </tr>
            )}
            {filtered.map((topic) => (
              <tr key={topic.id} className="border-t border-slate-100">
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
                  {topic.title}
                </td>
                <td className="max-w-xs truncate px-5 py-4 text-slate-500">
                  {topic.description}
                </td>
                <td className="px-5 py-4 text-slate-500">{topic.category || "—"}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={topic.status} />
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-3">
                    {filter === "trash" ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleRestore(topic.id)}
                          disabled={busyId === topic.id}
                          className="font-medium text-blue-600 hover:underline disabled:opacity-50"
                        >
                          {busyId === topic.id ? "..." : "Restaurer"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handlePurge(topic.id, topic.title)}
                          disabled={busyId === topic.id}
                          className="font-medium text-red-600 hover:underline disabled:opacity-50"
                        >
                          Supprimer définitivement
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href={`/admin/blog/${topic.id}`}
                          className="font-medium text-red-600 hover:underline"
                        >
                          Ouvrir
                        </Link>
                        {topic.status === "published" && (
                          <button
                            type="button"
                            onClick={() => handleUnpublish(topic.id)}
                            disabled={busyId === topic.id}
                            className="font-medium text-orange-600 hover:underline disabled:opacity-50"
                          >
                            {busyId === topic.id ? "..." : "Dépublier"}
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => handleTrash(topic.id, topic.title)}
                          disabled={busyId === topic.id}
                          className="font-medium text-slate-400 hover:text-red-600 disabled:opacity-50"
                        >
                          {busyId === topic.id ? "..." : "Supprimer"}
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
