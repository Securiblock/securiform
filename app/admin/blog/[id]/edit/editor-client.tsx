"use client";

import { marked } from "marked";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { Article, Topic, TopicTone } from "@/lib/blog/types";

const TONES: TopicTone[] = ["professionnel", "décontracté", "technique", "pédagogique"];
const LENGTHS = [500, 800, 1000, 1500, 2000];

type Props = { topic: Topic; article: Article };

export default function ArticleEditor({ topic, article }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(article.title);
  const [metaDescription, setMetaDescription] = useState(article.metaDescription);
  const [content, setContent] = useState(article.content);
  const [image, setImage] = useState(article.image || "");
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState<null | "save" | "publish" | "regenerate" | "unpublish">(
    null
  );
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [imageIdeas, setImageIdeas] = useState<string[] | null>(null);
  const [imageIdeasBusy, setImageIdeasBusy] = useState(false);
  const [imageIdeasError, setImageIdeasError] = useState<string | null>(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState<string | null>(null);

  const [regenOpen, setRegenOpen] = useState(false);
  const [regenTopicTitle, setRegenTopicTitle] = useState(topic.title);
  const [regenDescription, setRegenDescription] = useState(topic.description);
  const [regenKeywords, setRegenKeywords] = useState(topic.keywords.join(", "));
  const [regenTone, setRegenTone] = useState<TopicTone>(topic.tone);
  const [regenTargetLength, setRegenTargetLength] = useState(topic.targetLength);

  const previewHtml = useMemo(() => marked.parse(content, { async: false }) as string, [content]);

  function markDirty<T>(setter: (v: T) => void) {
    return (value: T) => {
      setter(value);
      setDirty(true);
      setMessage(null);
    };
  }

  async function save(): Promise<boolean> {
    setBusy("save");
    setError(null);
    try {
      const res = await fetch(`/api/blog/articles/${article.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, metaDescription, content, image: image || null }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la sauvegarde.");
      setDirty(false);
      setMessage("Modifications sauvegardées.");
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
      return false;
    } finally {
      setBusy(null);
    }
  }

  async function handlePublish() {
    setBusy("publish");
    setError(null);
    try {
      if (dirty && !(await save())) return;
      const res = await fetch("/api/blog/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: topic.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la publication.");
      setMessage(
        topic.status === "published" ? "Page mise à jour !" : "Article publié !"
      );
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setBusy(null);
    }
  }

  async function handleUnpublish() {
    if (!confirm("Dépublier cet article ? La page ne sera plus accessible sur le site, mais rien n'est supprimé — vous pourrez le republier plus tard.")) {
      return;
    }
    setBusy("unpublish");
    setError(null);
    try {
      const res = await fetch(`/api/blog/topics/${topic.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la dépublication.");
      setMessage("Article dépublié — la page n'est plus en ligne.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setBusy(null);
    }
  }

  async function submitRegenerate() {
    setBusy("regenerate");
    setError(null);
    try {
      const keywords = regenKeywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

      const putRes = await fetch(`/api/blog/topics/${topic.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: regenTopicTitle,
          description: regenDescription,
          keywords,
          tone: regenTone,
          targetLength: regenTargetLength,
        }),
      });
      if (!putRes.ok) throw new Error((await putRes.json()).error || "Échec de la mise à jour du sujet.");

      const res = await fetch("/api/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: topic.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la régénération.");

      setRegenOpen(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue.");
      setBusy(null);
    }
  }

  async function handleImageIdeas() {
    setImageIdeasBusy(true);
    setImageIdeasError(null);
    try {
      const res = await fetch("/api/blog/image-ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: article.slug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la génération d'idées.");
      setImageIdeas(data.ideas);
    } catch (err) {
      setImageIdeasError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setImageIdeasBusy(false);
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file later
    if (!file) return;

    setImageUploading(true);
    setImageUploadError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/blog/upload-image", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de l'envoi de l'image.");
      setImage(data.path);
      setDirty(true);
    } catch (err) {
      setImageUploadError(err instanceof Error ? err.message : "Erreur inconnue.");
    } finally {
      setImageUploading(false);
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link href={`/admin/blog/`} className="text-sm text-slate-500 hover:text-slate-900">
          ← Retour à la liste
        </Link>
        {dirty && <span className="text-xs font-medium text-orange-600">Modifications non sauvegardées</span>}
      </div>

      <div className="mb-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-semibold">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => markDirty(setTitle)(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-lg font-bold focus:border-red-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Meta description</label>
          <input
            type="text"
            value={metaDescription}
            onChange={(e) => markDirty(setMetaDescription)(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
          />
          <p className="mt-1 text-xs text-slate-400">{metaDescription.length} caractères</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold">Image à la une</label>
          <p className="mb-1 text-xs text-slate-500">
            Envoyez une image depuis votre ordinateur (jpg, png, webp ou gif, 5 Mo
            max). Pas d&apos;idée ? Demandez des suggestions à Gemini ci-dessous,
            cherchez une photo qui correspond, puis envoyez-la.
          </p>
          <div className="flex gap-3">
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleImageUpload}
              disabled={imageUploading}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-sm file:font-semibold disabled:opacity-50"
            />
            <button
              type="button"
              onClick={handleImageIdeas}
              disabled={imageIdeasBusy}
              className="shrink-0 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              {imageIdeasBusy ? "..." : "💡 Idées d'images"}
            </button>
          </div>
          {imageUploading && <p className="mt-2 text-sm text-slate-500">Envoi en cours...</p>}
          {imageUploadError && <p className="mt-2 text-sm text-red-600">{imageUploadError}</p>}

          {image && (
            <div className="mt-3 flex items-start gap-3">
              <img
                src={image}
                alt="Aperçu de l'image à la une"
                className="h-40 w-auto rounded-lg border border-slate-200 object-cover"
              />
              <button
                type="button"
                onClick={() => markDirty(setImage)("")}
                className="text-sm font-medium text-slate-400 hover:text-red-600"
              >
                Retirer l&apos;image
              </button>
            </div>
          )}

          {imageIdeasError && <p className="mt-2 text-sm text-red-600">{imageIdeasError}</p>}
          {imageIdeas && (
            <ul className="mt-3 space-y-1.5 rounded-lg bg-slate-50 p-3 text-sm text-slate-700">
              {imageIdeas.map((idea, i) => (
                <li key={i}>💡 {idea}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold">Contenu (Markdown)</label>
          <textarea
            value={content}
            onChange={(e) => markDirty(setContent)(e.target.value)}
            rows={24}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-sm focus:border-red-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Aperçu</label>
          <div
            className="prose prose-sm max-w-none rounded-lg border border-slate-200 bg-white px-4 py-3"
            style={{ height: "calc(100% - 1.75rem)", overflowY: "auto" }}
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />
        </div>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      {message && !error && <p className="mb-4 text-sm text-green-600">{message}</p>}

      <div className="flex flex-wrap gap-3">
        {topic.status !== "published" && (
          <button
            type="button"
            onClick={() => save()}
            disabled={busy !== null}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
          >
            {busy === "save" ? "Sauvegarde..." : "💾 Sauvegarder les modifications"}
          </button>
        )}

        {(topic.status === "generated" ||
          topic.status === "approved" ||
          topic.status === "published") && (
          <button
            type="button"
            onClick={handlePublish}
            disabled={busy !== null}
            className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50"
          >
            {busy === "publish"
              ? "Publication..."
              : topic.status === "published"
                ? "🔄 Mettre à jour la page publiée"
                : "🚀 Publier"}
          </button>
        )}

        {topic.status === "published" && (
          <button
            type="button"
            onClick={handleUnpublish}
            disabled={busy !== null}
            className="rounded-lg border border-orange-300 bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50 disabled:opacity-50"
          >
            {busy === "unpublish" ? "Dépublication..." : "🔽 Dépublier"}
          </button>
        )}

        <button
          type="button"
          onClick={() => setRegenOpen(true)}
          disabled={busy !== null}
          className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          {busy === "regenerate" ? "Régénération en cours… (10-15 s)" : "🔄 Régénérer"}
        </button>
      </div>

      {regenOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
            <h2 className="mb-1 text-lg font-bold">Régénérer l&apos;article</h2>
            <p className="mb-5 text-sm text-slate-500">
              Ajustez les informations du sujet si besoin — Gemini régénérera
              l&apos;article à partir de ces valeurs et remplacera le contenu actuel.
            </p>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold">Titre du sujet</label>
                <input
                  type="text"
                  value={regenTopicTitle}
                  onChange={(e) => setRegenTopicTitle(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Description</label>
                <textarea
                  value={regenDescription}
                  onChange={(e) => setRegenDescription(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold">Mots-clés</label>
                <input
                  type="text"
                  value={regenKeywords}
                  onChange={(e) => setRegenKeywords(e.target.value)}
                  placeholder="SEO, référencement, IA"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-semibold">Ton</label>
                  <select
                    value={regenTone}
                    onChange={(e) => setRegenTone(e.target.value as TopicTone)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
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
                    value={regenTargetLength}
                    onChange={(e) => setRegenTargetLength(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                  >
                    {LENGTHS.map((l) => (
                      <option key={l} value={l}>
                        {l} mots
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setRegenOpen(false)}
                disabled={busy !== null}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                Annuler
              </button>
              <button
                type="button"
                onClick={submitRegenerate}
                disabled={busy !== null}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
              >
                {busy === "regenerate" ? "Régénération en cours… (10-15 s)" : "🔄 Régénérer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
