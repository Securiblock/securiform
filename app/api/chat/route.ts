import { NextResponse } from "next/server";
import { askGemini, type ChatMessage } from "@/lib/chatbot/gemini-chat";
import { getRelevantContent } from "@/lib/chatbot/site-content";

// Public endpoint, so every request costs money: cap message size, history
// length and per-visitor rate. The rate limit lives in memory, so it is
// per server instance — enough to stop a runaway script, not a hard quota.
const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 1000;
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (recentRequests.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT) {
    recentRequests.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  recentRequests.set(ip, timestamps);
  if (recentRequests.size > 5000) recentRequests.clear();
  return false;
}

function parseMessages(body: unknown): ChatMessage[] | null {
  const messages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(messages) || messages.length === 0) return null;

  const parsed = messages.slice(-MAX_MESSAGES).map((m) => ({
    role: m?.role === "assistant" ? "assistant" : "user",
    content: typeof m?.content === "string" ? m.content.trim().slice(0, MAX_MESSAGE_LENGTH) : "",
  })) as ChatMessage[];

  // Gemini requires the conversation to start and end on a user turn.
  while (parsed.length > 0 && parsed[0].role !== "user") parsed.shift();
  const last = parsed.at(-1);
  if (!last || last.role !== "user" || !last.content) return null;
  return parsed.filter((m) => m.content);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "inconnue";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Vous avez envoyé beaucoup de messages. Merci de patienter quelques minutes ou de nous appeler au 03 20 67 34 90." },
      { status: 429 }
    );
  }

  const messages = parseMessages(await request.json().catch(() => null));
  if (!messages) {
    return NextResponse.json({ error: "Message manquant." }, { status: 400 });
  }

  try {
    const { content, paths } = await getRelevantContent(
      new URL(request.url).origin,
      messages.filter((m) => m.role === "user").map((m) => m.content)
    );
    if (process.env.NODE_ENV === "development") {
      console.log(`Chatbot : pages envoyées ${paths.join(", ")} (${content.length} caractères).`);
    }
    const reply = await askGemini(messages, content);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chatbot :", err);
    return NextResponse.json(
      {
        error: "L'assistant est momentanément indisponible. Vous pouvez nous joindre au 03 20 67 34 90.",
        ...(process.env.NODE_ENV === "development" && { detail: err instanceof Error ? err.message : String(err) }),
      },
      { status: 502 }
    );
  }
}
