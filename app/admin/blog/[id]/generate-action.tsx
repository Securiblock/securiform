"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Topic } from "@/lib/blog/types";

export default function GenerateAction({ topic }: { topic: Topic }) {
  const [loading, setLoading] = useState(false);
  const [unpublishing, setUnpublishing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: topic.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la génération.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setLoading(false);
    }
  }

  async function handleUnpublish() {
    if (!confirm("Dépublier cet article ? La page ne sera plus accessible sur le site, mais rien n'est supprimé — vous pourrez le republier plus tard.")) {
      return;
    }
    setUnpublishing(true);
    setError(null);
    try {
      const res = await fetch(`/api/blog/topics/${topic.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la dépublication.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setUnpublishing(false);
    }
  }

  if (topic.status === "published") {
    return (
      <div>
        <div className="flex items-center gap-3">
          <Link
            href={`/blog/${topic.slug}`}
            target="_blank"
            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            Voir l&apos;article publié →
          </Link>
          <Link
            href={`/admin/blog/${topic.id}/edit`}
            className="text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            Modifier
          </Link>
          <button
            type="button"
            onClick={handleUnpublish}
            disabled={unpublishing}
            className="text-sm font-medium text-orange-600 hover:underline disabled:opacity-50"
          >
            {unpublishing ? "..." : "Dépublier"}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>
    );
  }

  if (topic.status === "generated" || topic.status === "approved") {
    return (
      <Link
        href={`/admin/blog/${topic.id}/edit`}
        className="inline-block rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
      >
        Voir / Modifier l&apos;article
      </Link>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleGenerate}
        disabled={loading}
        className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? "Génération en cours… (10-15 s)" : "✨ Générer l'article"}
      </button>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
}
