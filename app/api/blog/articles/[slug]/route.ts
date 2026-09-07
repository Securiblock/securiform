import { NextResponse } from "next/server";
import { getArticle, saveArticle } from "@/lib/blog/articles";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  }
  return NextResponse.json(article);
}

export async function PUT(request: Request, { params }: Params) {
  const { slug } = await params;
  const existing = getArticle(slug);
  if (!existing) {
    return NextResponse.json({ error: "Article introuvable." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const updated = {
    ...existing,
    title: typeof body.title === "string" ? body.title : existing.title,
    metaDescription:
      typeof body.metaDescription === "string" ? body.metaDescription : existing.metaDescription,
    content: typeof body.content === "string" ? body.content : existing.content,
  };

  saveArticle(updated);
  return NextResponse.json(updated);
}
