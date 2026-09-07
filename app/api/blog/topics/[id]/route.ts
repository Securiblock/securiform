import { existsSync, unlinkSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";
import { deleteArticle, getArticle, saveArticle } from "@/lib/blog/articles";
import { setPublishedFlag } from "@/lib/blog/content";
import { deleteTopic, getTopic, isTopicStatus, trashTopic, updateTopic } from "@/lib/blog/topics";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const topic = getTopic(id);
  if (!topic) {
    return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
  }
  return NextResponse.json(topic);
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const existing = getTopic(id);
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

  const updated = updateTopic(id, body);

  // Restoring a topic that was published while trashed: bring its page back
  // online. (Trashing already took it offline — see DELETE below.)
  const isRestore = body.deletedAt === null && existing.deletedAt !== null;
  if (isRestore && existing.status === "published" && existing.slug) {
    setPublishedFlag(existing.slug, true);
  }

  // Moving a published topic to any other status (the "Dépublier" action)
  // takes its page offline without touching the topic or article otherwise
  // — the content stays intact and ready to republish later.
  const isUnpublish =
    existing.status === "published" && body.status !== undefined && body.status !== "published";
  if (isUnpublish && existing.slug) {
    setPublishedFlag(existing.slug, false);
    const article = getArticle(existing.slug);
    if (article) saveArticle({ ...article, status: "approved" });
  }

  return NextResponse.json(updated);
}

export async function DELETE(request: Request, { params }: Params) {
  const { id } = await params;
  const permanent = new URL(request.url).searchParams.get("permanent") === "true";

  if (!permanent) {
    const existing = getTopic(id);
    const trashed = trashTopic(id);
    if (!trashed) {
      return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
    }
    // Trashing a published topic takes its page offline immediately —
    // otherwise it'd still be publicly reachable while "deleted" in admin.
    if (existing?.status === "published" && existing.slug) {
      setPublishedFlag(existing.slug, false);
    }
    return NextResponse.json({ success: true, trashed: true });
  }

  const topic = getTopic(id);
  if (!topic) {
    return NextResponse.json({ error: "Sujet introuvable." }, { status: 404 });
  }

  if (topic.slug) {
    deleteArticle(topic.slug);
    const mdxFile = join(process.cwd(), "content", "blog", `${topic.slug}.mdx`);
    if (existsSync(mdxFile)) unlinkSync(mdxFile);
  }

  deleteTopic(id);
  return NextResponse.json({ success: true, trashed: false });
}
