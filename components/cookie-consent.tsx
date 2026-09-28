"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CONSENT_REOPEN_EVENT, readConsent, writeConsent } from "@/lib/consent";

export default function CookieConsent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [thirdParty, setThirdParty] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // `open` starts false so server and first client render match (no
    // hydration mismatch); this decides real visibility right after mount,
    // once localStorage is actually readable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!readConsent()) setOpen(true);
  }, []);

  useEffect(() => {
    function reopen() {
      const current = readConsent();
      setThirdParty(current?.thirdParty ?? false);
      setCustomizing(false);
      setOpen(true);
    }
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (pathname?.startsWith("/admin")) return null;
  if (!open) return null;

  function acceptAll() {
    writeConsent(true);
    setOpen(false);
  }

  function rejectAll() {
    writeConsent(false);
    setOpen(false);
  }

  function saveChoices() {
    writeConsent(thirdParty);
    setOpen(false);
  }

  return (
    <div
      ref={panelRef}
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      tabIndex={-1}
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <strong id="cookie-banner-title">Votre choix concernant les cookies</strong>
          <p>
            Ce site utilise uniquement des cookies strictement nécessaires à son
            fonctionnement, ainsi qu&apos;un contenu tiers (Google Maps) soumis à
            votre consentement. Détails dans notre{" "}
            <Link href="/politique-cookies">politique de cookies</Link>.
          </p>
        </div>

        {customizing && (
          <div className="cookie-banner-options">
            <label className="cookie-option">
              <input type="checkbox" checked disabled />
              <span>
                <strong>Essentiels</strong> — toujours actifs (mémorisation de
                votre choix, historique du chat)
              </span>
            </label>
            <label className="cookie-option">
              <input
                type="checkbox"
                checked={thirdParty}
                onChange={(e) => setThirdParty(e.target.checked)}
              />
              <span>
                <strong>Contenus tiers</strong> — carte Google Maps sur la page
                « Nous contacter »
              </span>
            </label>
          </div>
        )}

        <div className="cookie-banner-actions">
          {customizing ? (
            <button type="button" className="btn btn-plein" onClick={saveChoices}>
              Enregistrer mes choix
            </button>
          ) : (
            <>
              <button type="button" className="btn btn-sombre" onClick={rejectAll}>
                Tout refuser
              </button>
              <button type="button" className="btn btn-plein" onClick={acceptAll}>
                Tout accepter
              </button>
              <button
                type="button"
                className="cookie-customize"
                onClick={() => setCustomizing(true)}
              >
                Personnaliser
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
