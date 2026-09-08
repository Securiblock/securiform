"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Topic, TopicStatus } from "@/lib/blog/types";
import StatusBadge from "./status-badge";

type FilterValue = "all" | TopicStatus | "trash";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "pending", label: "En attente" },
  { value: "generated", label: "Généré" },
  { value: "approved", label: "Validé" },
  { value: "published", label: "Publié" },
  { value: "trash", label: "Corbeille" },
];

export default function BlogDashboard({ topics }: { topics: Topic[] }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [quickAddText, setQuickAddText] = useState("");
  const [quickAddBusy, setQuickAddBusy] = useState(false);
  const [quickAddError, setQuickAddError] = useState<string | null>(null);
  const [autoGenBusy, setAutoGenBusy] = useState(false);
  const [autoGenMessage, setAutoGenMessage] = useState<string | null>(null);
  const router = useRouter();

  const pendingCount = useMemo(
    () => topics.filter((t) => t.status === "pending" && !t.deletedAt).length,
    [topics]
  );
  const trashCount = useMemo(() => topics.filter((t) => t.deletedAt).length, [topics]);

  const filtered = useMemo(() => {
    if (filter === "trash") return topics.filter((t) => t.deletedAt);
    return topics.filter((t) => !t.deletedAt && (filter === "all" || t.status === filter));
  }, [topics, filter]);

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
          }),
        });
        if (!res.ok) throw new Error((await res.json()).error || `Échec pour « ${titlePart} ».`);
      }
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
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Articles de blog</h1>
        <div className="flex gap-3">
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

      <div className="mb-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
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
          className="shrink-0 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          {autoGenBusy ? "..." : "🧪 Tester maintenant"}
        </button>
      </div>
      {autoGenMessage && <p className="mb-6 text-sm text-slate-600">{autoGenMessage}</p>}

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

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3">Titre</th>
              <th className="px-5 py-3">Description</th>
              <th className="px-5 py-3">Statut</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-slate-400">
                  {filter === "trash" ? "La corbeille est vide." : "Aucun sujet pour ce filtre."}
                </td>
              </tr>
            )}
            {filtered.map((topic) => (
              <tr key={topic.id} className="border-t border-slate-100">
                <td className="px-5 py-4 font-medium text-slate-900">{topic.title}</td>
                <td className="max-w-xs truncate px-5 py-4 text-slate-500">
                  {topic.description}
                </td>
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
