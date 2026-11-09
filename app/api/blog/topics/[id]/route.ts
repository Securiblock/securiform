import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { deleteArticleById, getArticle, getArticleById, saveArticle } from "@/lib/blog/articles";
import { deletePublishedArticle, setPublishedFlag } from "@/lib/blog/content";
import { deleteTopic, getTopic, isTopicStatus, trashTopic, updateTopic } from "@/lib/blog/topics";

type Params = { params: Promise<{ id: string }> };

// Every slug this topic may be live under: its own slug and its draft
// article's slug (the article shares the topic's id). They can differ — e.g.
// an older version published under a slug the topic no longer points to —
// and a delete that only follows topic.slug leaves that page online.
async function topicSlugs(topic: { id: string; slug: string | null }): Promise<string[]> {
  const article = await getArticleById(topic.id);
  return [...new Set([topic.slug, article?.slug].filter((s): s is string => !!s))];
}

// The homepage's "derniers articles" block is prerendered (app/page.tsx), so
// it must be told when the published list changes. /blog and the sitemap are
// dynamic and already up to date.
function refreshPublicPages(): void {
  revalidatePath("/");
}

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const topic = await getTopic(id);
  if (!topic) {
    return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
  }
  return NextResponse.json(topic);
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const existing = await getTopic(id);
  if (!existing) {
    return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }
  if (body.status !== undefined && !isTopicStatus(body.status)) {
    return NextResponse.json({ error: "Statut invalide." }, { status: 400 });
  }

  const updated = await updateTopic(id, body);

  // Restoring a topic that was published while trashed: bring its page back
  // online. (Trashing already took it offline — see DELETE below.)
  const isRestore = body.deletedAt === null && existing.deletedAt !== null;
  if (isRestore && existing.status === "published" && existing.slug) {
    await setPublishedFlag(existing.slug, true);
    refreshPublicPages();
  }

  // Moving a published topic to any other status (the "Dépublier" action)
  // takes its page offline without touching the topic or article otherwise
  // — the content stays intact and ready to republish later.
  const isUnpublish =
    existing.status === "published" && body.status !== undefined && body.status !== "published";
  if (isUnpublish && existing.slug) {
    await setPublishedFlag(existing.slug, false);
    const article = await getArticle(existing.slug);
    if (article) await saveArticle({ ...article, status: "approved" });
    refreshPublicPages();
  }

  return NextResponse.json(updated);
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = await params;
  const permanent = new URL(request.url).searchParams.get("permanent") === "true";

  if (!permanent) {
    const existing = await getTopic(id);
    const trashed = await trashTopic(id);
    if (!trashed || !existing) {
      return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
    }
    // Trashing takes any live page offline immediately, whatever the topic's
    // current status: a published topic that was regenerated afterwards is
    // back to "generated" while its previous version is still online.
    for (const slug of await topicSlugs(existing)) {
      await setPublishedFlag(slug, false);
    }
    refreshPublicPages();
    return NextResponse.json({ success: true, trashed: true });
  }

  const topic = await getTopic(id);
  if (!topic) {
    return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
  }

  for (const slug of await topicSlugs(topic)) {
    await deletePublishedArticle(slug);
  }
  // By id, not slug: only ever this topic's own draft, never another topic's
  // article that happens to share a slug.
  await deleteArticleById(topic.id);

  await deleteTopic(id);
  refreshPublicPages();
  return NextResponse.json({ success: true, trashed: false });
}
