// Homemade cookie-consent store — no third-party library. Only one
// toggleable category exists today ("thirdParty", i.e. the Google Maps
// embed on /nous-contacter); "essential" cookies (securiform-chat) are
// always on and never require consent. See app/politique-cookies/page.tsx
// for the full, human-readable list.
export type Consent = {
  essential: true;
  thirdParty: boolean;
  decidedAt: string;
};

const STORAGE_KEY = "securiform-consent";
// ~6 months, per CNIL guidance on cookie consent lifetime.
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30 * 6;

export const CONSENT_CHANGE_EVENT = "securiform-consent-change";
export const CONSENT_REOPEN_EVENT = "securiform-consent-reopen";

export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (typeof parsed.thirdParty !== "boolean" || typeof parsed.decidedAt !== "string") {
      return null;
    }
    const age = Date.now() - new Date(parsed.decidedAt).getTime();
    if (!Number.isFinite(age) || age > MAX_AGE_MS) return null;
    return { essential: true, thirdParty: parsed.thirdParty, decidedAt: parsed.decidedAt };
  } catch {
    return null;
  }
}

export function writeConsent(thirdParty: boolean): void {
  if (typeof window === "undefined") return;
  const consent: Consent = { essential: true, thirdParty, decidedAt: new Date().toISOString() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Private browsing / blocked storage: consent just won't persist across
    // reloads, which defaults back to "not decided yet" — safe fallback.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: consent }));
}

// Used by the footer's "Gérer mes cookies" link to reopen the banner.
export function reopenConsentBanner(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}
