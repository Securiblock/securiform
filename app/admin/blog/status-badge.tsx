import type { TopicStatus } from "@/lib/blog/types";

const STYLES: Record<TopicStatus, string> = {
  pending: "bg-slate-100 text-slate-600",
  generated: "bg-orange-100 text-orange-700",
  approved: "bg-blue-100 text-blue-700",
  published: "bg-green-100 text-green-700",
};

const DOT_STYLES: Record<TopicStatus, string> = {
  pending: "bg-slate-400",
  generated: "bg-orange-500",
  approved: "bg-blue-500",
  published: "bg-green-500",
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
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${STYLES[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_STYLES[status]}`} aria-hidden="true" />
      {LABELS[status]}
    </span>
  );
}
