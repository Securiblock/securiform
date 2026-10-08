"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Topic } from "@/lib/blog/types";
import { Button, ButtonLink, useConfirm, useToast } from "../ui";

export default function GenerateAction({ topic }: { topic: Topic }) {
  const [loading, setLoading] = useState(false);
  const [unpublishing, setUnpublishing] = useState(false);
  const router = useRouter();
  const confirm = useConfirm();
  const toast = useToast();

  async function handleGenerate() {
    setLoading(true);
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
      toast(err instanceof Error ? err.message : "Erreur inconnue.", "error");
    } finally {
      setLoading(false);
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
    setUnpublishing(true);
    try {
      const res = await fetch(`/api/blog/topics/${topic.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Échec de la dépublication.");
      toast("Article dépublié.");
      router.refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : "Erreur inconnue.", "error");
    } finally {
      setUnpublishing(false);
    }
  }

  if (topic.status === "published") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink href={`/blog/${topic.slug}`} target="_blank" variant="success">
          Voir l&apos;article publié →
        </ButtonLink>
        <ButtonLink href={`/admin/blog/${topic.id}/edit`} variant="secondary">
          Modifier
        </ButtonLink>
        <Button variant="danger" onClick={handleUnpublish} disabled={unpublishing}>
          {unpublishing ? "..." : "Dépublier"}
        </Button>
      </div>
    );
  }

  if (topic.status === "generated" || topic.status === "approved") {
    return (
      <ButtonLink href={`/admin/blog/${topic.id}/edit`}>Voir / Modifier l&apos;article</ButtonLink>
    );
  }

  return (
    <Button onClick={handleGenerate} disabled={loading}>
      {loading ? "Génération en cours… (10-15 s)" : "✨ Générer l'article"}
    </Button>
  );
}
