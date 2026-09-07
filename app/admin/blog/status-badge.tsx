import type { TopicStatus } from "@/lib/blog/types";

const STYLES: Record<TopicStatus, string> = {
  pending: "bg-slate-100 text-slate-600",
  generated: "bg-orange-100 text-orange-700",
  approved: "bg-blue-100 text-blue-700",
  published: "bg-green-100 text-green-700",
};

const LABELS: Record<TopicStatus, string> = {
  pending: "En attente",
  generated: "Généré",
  approved: "Validé",
  published: "Publié",
};

export default function StatusBadge({ status }: { status: TopicStatus }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  );
}
