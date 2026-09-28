"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Message = { role: "user" | "assistant"; content: string };

const STORAGE_KEY = "securiform-chat";
const MAX_LENGTH = 1000;

const SUGGESTIONS = [
  "Quelles formations CACES® proposez-vous ?",
  "Comment obtenir un devis ?",
  "Réalisez-vous les VGP ?",
];

// Renders the small subset of Markdown the assistant is told to use (bold,
// links, "- " lists) as React elements — never as raw HTML. Only internal
// paths and tel:/mailto: links become clickable.
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${i++}`;
    if (match[1]) {
      nodes.push(<strong key={key}>{match[1]}</strong>);
    } else {
      const [, , label, href] = match;
      if (href.startsWith("/") && !href.startsWith("//")) {
        nodes.push(
          <Link key={key} href={href}>
            {label}
          </Link>
        );
      } else if (/^(tel|mailto):/.test(href)) {
        nodes.push(
          <a key={key} href={href}>
            {label}
          </a>
        );
      } else {
        nodes.push(label);
      }
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function renderMarkdown(text: string): ReactNode[] {
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flushList = () => {
    if (list.length === 0) return;
    const k = blocks.length;
    blocks.push(
      <ul key={`ul-${k}`}>
        {list.map((item, j) => (
          <li key={j}>{renderInline(item, `li-${k}-${j}`)}</li>
        ))}
      </ul>
    );
    list = [];
  };
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    const item = line.match(/^[-*•]\s+(.*)$/);
    if (item) {
      list.push(item[1]);
      continue;
    }
    flushList();
    if (line) blocks.push(<p key={`p-${blocks.length}`}>{renderInline(line, `p-${blocks.length}`)}</p>);
  }
  flushList();
  return blocks;
}

function loadMessages(): Message[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1 1 21 12z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" strokeWidth="2.6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12l16-8-6 16-2.5-6.5L4 12z" />
    </svg>
  );
}

export default function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // The panel starts closed, so restoring the saved conversation straight
  // into the initial state cannot cause a hydration mismatch.
  const [messages, setMessages] = useState<Message[]>(loadMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Keep the conversation while the visitor browses from page to page.
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (pathname?.startsWith("/admin")) return null;

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  async function send(text: string) {
    const content = text.trim().slice(0, MAX_LENGTH);
    if (!content || loading) return;
    const next: Message[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || typeof data.reply !== "string") {
        throw new Error(data.error || "L'assistant est momentanément indisponible.");
      }
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={open ? "chat is-open" : "chat"}>
      {open && (
        <div
          className="chat-panel"
          id="chat-panel"
          role="dialog"
          aria-label="Assistant SECURIFORM"
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
        >
          <div className="chat-head">
            <div>
              <strong>Assistant SECURIFORM</strong>
              <span>Réponses générées par IA à partir de notre site</span>
            </div>
            <button type="button" className="chat-close" onClick={close} aria-label="Fermer l'assistant">
              <CloseIcon />
            </button>
          </div>

          <div className="chat-messages" ref={listRef} aria-live="polite">
            <div className="chat-msg chat-msg-bot">
              <p>
                Bonjour&nbsp;! Je suis l&apos;assistant de SECURIFORM. Posez-moi vos questions sur nos
                formations, nos VGP ou notre organisme.
              </p>
            </div>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role === "user" ? "chat-msg-user" : "chat-msg-bot"}`}>
                {m.role === "user" ? <p>{m.content}</p> : renderMarkdown(m.content)}
              </div>
            ))}
            {loading && (
              <div className="chat-msg chat-msg-bot chat-typing" aria-label="L'assistant écrit…">
                <span />
                <span />
                <span />
              </div>
            )}
            {error && (
              <div className="chat-error" role="alert">
                {error}
              </div>
            )}
            {messages.length === 0 && !loading && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Votre question…"
              aria-label="Votre question"
              rows={1}
              maxLength={MAX_LENGTH}
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Envoyer">
              <SendIcon />
            </button>
          </form>
          <p className="chat-mention">
            Ne partagez pas de données personnelles. Messages traités par Google Gemini.
            Pour un devis&nbsp;: <a href="tel:+33320673490">03 20 67 34 90</a>
          </p>
        </div>
      )}

      <button
        ref={toggleRef}
        type="button"
        className="chat-toggle"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Fermer l'assistant" : "Poser une question à notre assistant"}
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  );
}
