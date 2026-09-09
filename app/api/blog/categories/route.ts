import { NextResponse } from "next/server";
import { createCategory, getCategories } from "@/lib/blog/categories";

export async function GET() {
  return NextResponse.json(getCategories());
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = body?.name;
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Le nom de la catégorie est obligatoire." }, { status: 400 });
  }

  const category = createCategory(name);
  return NextResponse.json(category, { status: 201 });
}
