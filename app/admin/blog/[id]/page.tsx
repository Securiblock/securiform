import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic } from "@/lib/blog/topics";
import StatusBadge from "../status-badge";
import GenerateAction from "./generate-action";

type Params = { params: Promise<{ id: string }> };

export default async function TopicDetailPage({ params }: Params) {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) notFound();

  return (
    <div className="mx-auto max-w-2xl">
      <Link href="/admin/blog" className="mb-6 inline-block text-sm text-slate-500 hover:text-slate-900">
        ← Retour à la liste
      </Link>

      <div className="mb-6 flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold">{topic.title}</h1>
        <StatusBadge status={topic.status} />
      </div>

      <dl className="mb-8 space-y-4 rounded-xl border border-slate-200 bg-white p-6 text-sm">
        <div>
          <dt className="font-semibold text-slate-500">Description</dt>
          <dd className="mt-1">{topic.description}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">Mots-clés</dt>
          <dd className="mt-1">
            {topic.keywords.length ? topic.keywords.join(", ") : "—"}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">Catégorie</dt>
          <dd className="mt-1">{topic.category || "—"}</dd>
        </div>
        <div className="flex gap-10">
          <div>
            <dt className="font-semibold text-slate-500">Ton</dt>
            <dd className="mt-1 capitalize">{topic.tone}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-500">Longueur cible</dt>
            <dd className="mt-1">{topic.targetLength} mots</dd>
          </div>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">Créé le</dt>
          <dd className="mt-1">{new Date(topic.createdAt).toLocaleString("fr-FR")}</dd>
        </div>
      </dl>

      <GenerateAction topic={topic} />
    </div>
  );
}
