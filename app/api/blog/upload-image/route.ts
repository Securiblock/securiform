import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// Images stay in Vercel Blob even though the rest of the blog (topics,
// articles, published pages) moved to Postgres — Blob is a good fit for
// files/binaries, and this write-once-per-upload path never had the
// read-modify-write races that JSON-document storage did.
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
const MAX_SIZE = 5 * 1024 * 1024; // 5 Mo

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Aucun fichier reçu." }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Type de fichier non autorisé (jpg, png, webp ou gif uniquement)." },
      { status: 400 }
    );
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Fichier trop volumineux (5 Mo maximum)." }, { status: 400 });
  }

  const rawExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  const extension = ALLOWED_EXTENSIONS.includes(rawExtension) ? rawExtension : ".jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${extension}`;

  const buffer = Buffer.from(await file.arrayBuffer());
  const blob = await put(`image/blog/${filename}`, buffer, {
    access: "public",
    addRandomSuffix: false,
    contentType: file.type,
  });

  return NextResponse.json({ path: blob.url });
}
