"use client";

import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Category } from "@/lib/blog/categories";
import type { Article, Topic, TopicTone } from "@/lib/blog/types";
import { Button, Card, PageHeader, useConfirm, useToast } from "../../ui";

const TONES: TopicTone[] = ["professionnel", "décontracté", "technique", "pédagogique"];
const LENGTHS = [500, 800, 1000, 1500, 2000];

type Props = { topic: Topic; article: Article };

export default function ArticleEditor({ topic, article }: Props) {
  const router = useRouter();
  const confirm = useConfirm();
  const toast = useToast();
  const [title, setTitle] = useState(article.title);
  const [metaDescription, setMetaDescription] = useState(article.metaDescription);
  const [content, setContent] = useState(article.content);
  const [image, setImage] = useState(article.image || "");
  const [category, setCategory] = useState(article.category || "");
  const [categories, setCategories] = useState<Category[]>([]);
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState<null | "save" | "publish" | "regenerate" | "unpublish">(
    null
  );

  const [imageIdeas, setImageIdeas] = useState<string[] | null>(null);
  const [imageIdeasBusy, setImageIdeasBusy] = useState(true);
  const [imageIdeasError, setImageIdeasError] = useState<string | null>(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState<string | null>(null);

  const [regenOpen, setRegenOpen] = useState(false);
  const [regenTopicTitle, setRegenTopicTitle] = useState(topic.title);
  const [regenDescription, setRegenDescription] = useState(topic.description);
  const [regenKeywords, setRegenKeywords] = useState(topic.keywords.join(", "));
  const [regenTone, setRegenTone] = useState<TopicTone>(topic.tone);
  const [regenTargetLength, setRegenTargetLength] = useState(topic.targetLength);
  const [regenCategory, setRegenCategory] = useState(topic.category || "");

  const previewHtml = useMemo(() => {
    const html = DOMPurify.sanitize(marked.parse(content, { async: false }) as string);
    // Tags the closing "À retenir" heading so the preview's red block matches
    // what the public page renders (see lib/blog/content.ts on that side).
    return html.replace("<h2>À retenir</h2>", '<h2 class="a-retenir">À retenir</h2>');
  }, [content]);

  useEffect(() => {
    fetch("/api/blog/categories")
      .then((res) => res.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetch("/api/blog/image-ideas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: article.slug }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Échec de la génération d'idées.");
        setImageIdeas(data.ideas);
      })
      .catch((err) => {
        setImageIdeasError(err instanceof Error ? err.message : "Erreur inconnue.");
      })
      .finally(() => {
        setImageIdeasBusy(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function markDirty<T>(setter: (v: T) => void) {
    return (value: T) => {
      setter(value);
      setDirty(true);
    };
  }

  async function save(): Promise<boolean> {
    setBusy("save");
    try {
      const res = await fetch(`/api/blog/articles/${article.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          metaDescription,
          content,
          image: image || null,
          category: category || null,
        }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la sauvegarde.");
      setDirty(false);
      toast("Modifications sauvegardées.");
      return true;
    } catch (err) {
      toast(err instanceof Error ? err.message : "Erreur inconnue.", "error");
      return false;
    } finally {
      setBusy(null);
    }
  }

  async function handlePublish() {
    setBusy("publish");
    try {
      if (dirty && !(await save())) return;
      const res = await fetch("/api/blog/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topicId: topic.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Échec de la publication.");
      toast(topic.status === "published" ? "Page mise à jour !" : "Article publié !");
      router.refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : "Erreur inconnue.", "error");
    } finally {
      setBusy(null);
    }
  }

  async function handleUnpublish() {
    const ok = await confirm({
      title: "Dépublier cet article ?",
      description:
        "La page ne sera plus accessible sur le site, mais rien n'est supprimé : vous pourrez le republier plus tard.",
      confirmLabel: "Dépublier",
    });
    if (!ok) return;
    setBusy("unpublish");
    try {
      const res = await fetch(`/api/blog/topics/${topic.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la dépublication.");
      toast("Article dépublié : la page n'est plus en ligne.");
      router.refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : "Erreur inconnue.", "error");
    } finally {
      setBusy(null);
    }
  }

  async function submitRegenerate() {
    setBusy("regenerate");
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
          category: regenCategory || null,
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
      toast("Article régénéré.");
      router.refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : "Erreur inconnue.", "error");
      setBusy(null);
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
      <PageHeader
        back={{ href: "/admin/blog", label: "Retour à la liste" }}
        title={
          <span className="flex flex-wrap items-center gap-3">
            Modifier l&apos;article
            {dirty && (
              <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                Modifications non sauvegardées
              </span>
            )}
          </span>
        }
      />

      <Card className="mb-6 space-y-4 p-6">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => markDirty(setTitle)(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-lg font-bold focus:border-red-600 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Meta description</label>
          <input
            type="text"
            value={metaDescription}
            onChange={(e) => markDirty(setMetaDescription)(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
          />
          <p className="mt-1 text-xs text-slate-400">{metaDescription.length} caractères</p>
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Catégorie</label>
          <select
            value={category}
            onChange={(e) => markDirty(setCategory)(e.target.value)}
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

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Image à la une</label>
          <p className="mb-1 text-xs text-slate-500">
            Envoyez une image depuis votre ordinateur (jpg, png, webp ou gif, 5 Mo
            max). Pas d&apos;idée ? Gemini vous suggère 3 pistes ci-dessous :
            cherchez une photo qui correspond, puis envoyez-la.
          </p>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleImageUpload}
            disabled={imageUploading}
            className="w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-1.5 file:text-sm file:font-semibold disabled:opacity-50"
          />
          {imageUploading && <p className="mt-2 text-sm text-slate-500">Envoi en cours...</p>}
          {imageUploadError && <p className="mt-2 text-sm text-red-600">{imageUploadError}</p>}

          {image && (
            <div className="mt-3 flex items-start gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="Aperçu de l'image à la une"
                className="h-40 w-auto rounded-lg border border-slate-200 object-cover"
              />
              <Button variant="ghost" size="sm" onClick={() => markDirty(setImage)("")}>
                Retirer l&apos;image
              </Button>
            </div>
          )}

          {imageIdeasBusy && (
            <p className="mt-2 text-sm text-slate-500">💡 Gemini réfléchit à des idées d&apos;images...</p>
          )}
          {imageIdeasError && <p className="mt-2 text-sm text-red-600">{imageIdeasError}</p>}
          {imageIdeas && (
            <ul className="mt-3 space-y-1.5 rounded-lg bg-slate-50 p-3 text-sm">
              {imageIdeas.map((idea, i) => (
                <li key={i}>
                  <a
                    href={`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(idea)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-red-600 hover:underline"
                  >
                    💡 {idea} 🔍
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="p-4">
          <label className="mb-1 block text-sm font-semibold text-slate-700">Contenu (Markdown)</label>
          <textarea
            value={content}
            onChange={(e) => markDirty(setContent)(e.target.value)}
            rows={24}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-sm focus:border-red-600 focus:outline-none"
          />
        </Card>
        <Card className="p-4">
          <label className="mb-1 block text-sm font-semibold text-slate-700">Aperçu</label>
          <div
            className="prose prose-sm max-w-none rounded-lg border border-slate-200 bg-white px-4 py-3"
            style={{ height: "calc(100% - 1.75rem)", overflowY: "auto" }}
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          />
        </Card>
      </div>

      <div className="flex flex-wrap gap-3">
        {topic.status !== "published" && (
          <Button variant="dark" onClick={() => save()} disabled={busy !== null}>
            {busy === "save" ? "Sauvegarde..." : "💾 Sauvegarder les modifications"}
          </Button>
        )}

        {(topic.status === "generated" ||
          topic.status === "approved" ||
          topic.status === "published") && (
          <Button variant="success" onClick={handlePublish} disabled={busy !== null}>
            {busy === "publish"
              ? "Publication..."
              : topic.status === "published"
                ? "🔄 Mettre à jour la page publiée"
                : "🚀 Publier"}
          </Button>
        )}

        {topic.status === "published" && (
          <Button variant="danger" onClick={handleUnpublish} disabled={busy !== null}>
            {busy === "unpublish" ? "Dépublication..." : "🔽 Dépublier"}
          </Button>
        )}

        <Button variant="secondary" onClick={() => setRegenOpen(true)} disabled={busy !== null}>
          {busy === "regenerate" ? "Régénération en cours… (10-15 s)" : "🔄 Régénérer"}
        </Button>
      </div>

      {regenOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-1 text-lg font-bold text-slate-900">Régénérer l&apos;article</h2>
            <p className="mb-5 text-sm text-slate-500">
              Ajustez les informations du sujet si besoin : Gemini régénérera
              l&apos;article à partir de ces valeurs et remplacera le contenu actuel.
            </p>

            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Titre du sujet</label>
                <input
                  type="text"
                  value={regenTopicTitle}
                  onChange={(e) => setRegenTopicTitle(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Description</label>
                <textarea
                  value={regenDescription}
                  onChange={(e) => setRegenDescription(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Mots-clés</label>
                <input
                  type="text"
                  value={regenKeywords}
                  onChange={(e) => setRegenKeywords(e.target.value)}
                  placeholder="SEO, référencement, IA"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">Catégorie</label>
                <select
                  value={regenCategory}
                  onChange={(e) => setRegenCategory(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-red-600 focus:outline-none"
                >
                  <option value="">Aucune catégorie</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Ton</label>
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
                  <label className="mb-1 block text-sm font-semibold text-slate-700">Longueur cible</label>
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

            <div className="mt-6 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setRegenOpen(false)} disabled={busy !== null}>
                Annuler
              </Button>
              <Button onClick={submitRegenerate} disabled={busy !== null}>
                {busy === "regenerate" ? "Régénération en cours… (10-15 s)" : "🔄 Régénérer"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
