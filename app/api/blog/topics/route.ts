import { NextResponse } from "next/server";
import { createTopic, getTopics } from "@/lib/blog/topics";
import type { NewTopicInput, TopicTone } from "@/lib/blog/types";

const VALID_TONES: TopicTone[] = ["professionnel", "décontracté", "technique", "pédagogique"];

export async function GET() {
  return NextResponse.json(getTopics());
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.title !== "string" || !body.title.trim()) {
    return NextResponse.json({ error: "Le titre est obligatoire." }, { status: 400 });
  }
  if (typeof body.description !== "string" || !body.description.trim()) {
    return NextResponse.json({ error: "La description est obligatoire." }, { status: 400 });
  }
  if (!VALID_TONES.includes(body.tone)) {
    return NextResponse.json({ error: "Ton invalide." }, { status: 400 });
  }
  const targetLength = Number(body.targetLength);
  if (!Number.isFinite(targetLength) || targetLength <= 0) {
    return NextResponse.json({ error: "Longueur cible invalide." }, { status: 400 });
  }

  const keywords: string[] = Array.isArray(body.keywords)
    ? body.keywords
    : typeof body.keywords === "string"
      ? body.keywords.split(",").map((k: string) => k.trim()).filter(Boolean)
      : [];

  const input: NewTopicInput = {
    title: body.title.trim(),
    description: body.description.trim(),
    keywords,
    tone: body.tone,
    targetLength,
    category: typeof body.category === "string" && body.category.trim() ? body.category.trim() : null,
  };

  const topic = createTopic(input);
  return NextResponse.json(topic, { status: 201 });
}
