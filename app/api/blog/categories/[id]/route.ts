import { NextResponse } from "next/server";
import { deleteCategory } from "@/lib/blog/categories";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  const ok = deleteCategory(id);
  if (!ok) {
    return NextResponse.json({ error: "Catégorie introuvable." }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
