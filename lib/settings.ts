import { sql } from "./blog/db";
import { SETTING_LABELS, type SettingKey } from "./settings-shared";

// Admin-editable recipient addresses, stored in the `settings` table (see
// the "Paramètres" modal on /admin/blog). Each key falls back to the
// matching env var, then to a hardcoded default, so nothing breaks before
// an admin ever opens the settings page or if the DB is briefly unreachable.
// A setting's value can hold several addresses, comma-separated (e.g. for
// sending login alerts to more than one person) — see parseEmailList.
//
// SettingKey/SETTING_LABELS live in ./settings-shared, not here: this file
// imports lib/blog/db.ts (the Postgres driver), and dashboard-client.tsx (a
// "use client" component) needs the labels without pulling that driver into
// the browser bundle.
export type { SettingKey };
export { SETTING_LABELS };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseEmailList(raw: string): string[] {
  return raw
    .split(/[,;\n]+/)
    .map((e) => e.trim())
    .filter(Boolean);
}

export function isValidEmailList(raw: string): boolean {
  const list = parseEmailList(raw);
  return list.length > 0 && list.every((e) => EMAIL_RE.test(e));
}

function envFallback(key: SettingKey): string {
  switch (key) {
    case "login_alert_email":
      return process.env.BLOG_NOTIFY_EMAIL || "henri@securiblock.fr";
    case "contact_email_to":
      return process.env.CONTACT_EMAIL_TO || "henri@securiblock.fr";
    case "blog_notify_email":
      return process.env.BLOG_NOTIFY_EMAIL || "henri@securiblock.fr";
  }
}

export async function getSetting(key: SettingKey): Promise<string> {
  try {
    const rows = (await sql`select value from settings where key = ${key}`) as { value: string }[];
    const value = rows[0]?.value?.trim();
    return value || envFallback(key);
  } catch (err) {
    console.error(`Paramètre "${key}" : lecture en base échouée, valeur par défaut utilisée.`, err);
    return envFallback(key);
  }
}

export async function getSettingList(key: SettingKey): Promise<string[]> {
  return parseEmailList(await getSetting(key));
}

export async function getAllSettings(): Promise<Record<SettingKey, string>> {
  const keys = Object.keys(SETTING_LABELS) as SettingKey[];
  const values = await Promise.all(keys.map((key) => getSetting(key)));
  return Object.fromEntries(keys.map((key, i) => [key, values[i]])) as Record<SettingKey, string>;
}

export async function setSetting(key: SettingKey, value: string): Promise<void> {
  const trimmed = value.trim();
  if (!trimmed) throw new Error("La valeur ne peut pas être vide.");
  await sql`
    insert into settings (key, value, updated_at)
    values (${key}, ${trimmed}, now())
    on conflict (key) do update set value = excluded.value, updated_at = excluded.updated_at
  `;
}
