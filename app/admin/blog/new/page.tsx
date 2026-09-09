"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { TopicTone } from "@/lib/blog/types";
import type { Category } from "@/lib/blog/categories";

const TONES: TopicTone[] = ["professionnel", "décontracté", "technique", "pédagogique"];
const LENGTHS = [500, 800, 1000, 1500, 2000];

export default function NewTopicPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState<TopicTone>("professionnel");
  const [targetLength, setTargetLength] = useState(1000);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/blog/categories")
      .then((res) => res.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/blog/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          keywords,
          tone,
          targetLength,
          category: category || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de la création.");
      router.push(`/admin/blog/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Link href="/admin/blog" className="mb-6 inline-block text-sm text-slate-500 hover:text-slate-900">
        ← Retour à la liste
      </Link>
      <h1 className="mb-8 text-2xl font-bold">Nouveau sujet</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1 block text-sm font-semibold">Titre du sujet</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-red-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">Description détaillée</label>
          <p className="mb-1 text-xs text-slate-500">
            Plus c&apos;est précis, meilleur sera l&apos;article généré.
          </p>
          <textarea
            required
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-red-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">Mots-clés</label>
          <p className="mb-1 text-xs text-slate-500">Séparés par des virgules.</p>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="SEO, référencement, IA, Google"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-red-600 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">Catégorie</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-red-600 focus:outline-none"
          >
            <option value="">Aucune catégorie</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {categories.length === 0 && (
            <p className="mt-1 text-xs text-slate-400">
              Aucune catégorie créée pour l&apos;instant — gérez-les depuis le dashboard.
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-semibold">Ton souhaité</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as TopicTone)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-red-600 focus:outline-none"
            >
              {TONES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold">Longueur cible</label>
            <select
              value={targetLength}
              onChange={(e) => setTargetLength(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-red-600 focus:outline-none"
            >
              {LENGTHS.map((l) => (
                <option key={l} value={l}>
                  {l} mots
                </option>
              ))}
            </select>
          </div>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
        >
          {submitting ? "Création..." : "Créer le sujet"}
        </button>
      </form>
    </div>
  );
}
