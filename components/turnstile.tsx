"use client";

import { useEffect, useRef } from "react";

// Captcha Cloudflare Turnstile. Invisible pour la grande majorité des
// visiteurs (appearance "interaction-only") : une case à cocher n'apparaît
// que si Cloudflare a un doute. Le widget ajoute au formulaire parent un
// champ caché `cf-turnstile-response`, vérifié côté serveur (lib/turnstile.ts).
//
// Rendu explicite (pas le mode automatique `class="cf-turnstile"`) : avec la
// navigation côté client de Next, le script n'est chargé qu'une fois et ne
// rescanne pas la page, donc chaque formulaire monte son propre widget.

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile absent")));
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error("Chargement de Turnstile impossible"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// `resetKey` : à changer après chaque envoi qui ne quitte pas la page (un
// jeton Turnstile ne sert qu'une fois), ex. le formulaire de rappel.
export default function Turnstile({ resetKey }: { resetKey?: unknown }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;
    let cancelled = false;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !containerRef.current) return;
        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          appearance: "interaction-only",
          language: "fr",
          "refresh-expired": "auto",
        });
      })
      .catch((err) => console.warn(err));

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (resetKey !== undefined && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  }, [resetKey]);

  // Pas de clé configurée = pas de widget (le serveur ne vérifie pas non
  // plus dans ce cas, voir lib/turnstile.ts).
  if (!SITE_KEY) return null;
  return <div ref={containerRef} className="turnstile-widget" />;
}
