import { getTopics } from "@/lib/blog/topics";
import BlogDashboard from "./dashboard-client";

// This reads data/topics.json straight off disk with no dynamic API calls,
// so Next would otherwise prerender it once at build time and freeze the
// list — force it to re-read on every request instead.
export const dynamic = "force-dynamic";

export default function BlogAdminPage() {
  const topics = getTopics();
  return <BlogDashboard topics={topics} />;
}
