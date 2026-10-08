import { notFound } from "next/navigation";
import { getTopic } from "@/lib/blog/topics";
import StatusBadge from "../status-badge";
import { Card, PageHeader } from "../ui";
import GenerateAction from "./generate-action";

type Params = { params: Promise<{ id: string }> };

export default async function TopicDetailPage({ params }: Params) {
  const { id } = await params;
  const topic = await getTopic(id);
  if (!topic) notFound();

  return (
    <div className="mx-auto max-w-2xl">
      <PageHeader
        back={{ href: "/admin/blog", label: "Retour à la liste" }}
        title={topic.title}
        subtitle={
          topic.status === "published" && topic.slug ? (
            <a
              href={`/blog/${topic.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-red-600 hover:underline"
            >
              🔗 Voir l&apos;article publié
            </a>
          ) : undefined
        }
        actions={<StatusBadge status={topic.status} />}
      />

      <Card className="mb-8 p-6">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-slate-500">Description</dt>
            <dd className="mt-1 text-slate-900">{topic.description}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-500">Mots-clés</dt>
            <dd className="mt-1 text-slate-900">
              {topic.keywords.length ? topic.keywords.join(", ") : "—"}
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-500">Catégorie</dt>
            <dd className="mt-1 text-slate-900">{topic.category || "—"}</dd>
          </div>
          <div className="flex gap-10">
            <div>
              <dt className="font-semibold text-slate-500">Ton</dt>
              <dd className="mt-1 capitalize text-slate-900">{topic.tone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500">Longueur cible</dt>
              <dd className="mt-1 text-slate-900">{topic.targetLength} mots</dd>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-100 pt-4">
            <div>
              <dt className="font-semibold text-slate-500">Créé le</dt>
              <dd className="mt-1 text-slate-900">{new Date(topic.createdAt).toLocaleString("fr-FR")}</dd>
            </div>
            {topic.generatedAt && (
              <div>
                <dt className="font-semibold text-slate-500">Généré le</dt>
                <dd className="mt-1 text-slate-900">{new Date(topic.generatedAt).toLocaleString("fr-FR")}</dd>
              </div>
            )}
            {topic.publishedAt && (
              <div>
                <dt className="font-semibold text-slate-500">Publié le</dt>
                <dd className="mt-1 text-slate-900">{new Date(topic.publishedAt).toLocaleString("fr-FR")}</dd>
              </div>
            )}
          </div>
        </dl>
      </Card>

      <GenerateAction topic={topic} />
    </div>
  );
}
