import { existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { NextResponse } from "next/server";

// Same filesystem caveat as the rest of the blog storage (data/, content/) —
// this writes to public/image/blog/ at request time, which works locally
// and on any host with a persistent disk, but not on Vercel's serverless
// functions (read-only filesystem). Revisit alongside the rest of the blog
// storage before deploying there.
const UPLOAD_DIR = join(process.cwd(), "public", "image", "blog");

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

  if (!existsSync(UPLOAD_DIR)) mkdirSync(UPLOAD_DIR, { recursive: true });

  const rawExtension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  const extension = ALLOWED_EXTENSIONS.includes(rawExtension) ? rawExtension : ".jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${extension}`;

  const buffer = Buffer.from(await file.arrayBuffer());
  writeFileSync(join(UPLOAD_DIR, filename), buffer);

  return NextResponse.json({ path: `/image/blog/${filename}` });
}
