import { NextResponse } from "next/server";
import { getAllSettings, isValidEmailList, setSetting, type SettingKey } from "@/lib/settings";

const VALID_KEYS: SettingKey[] = ["login_alert_email", "contact_email_to", "blog_notify_email"];

// Protected by proxy.ts (matcher includes /api/admin/:path*) — same Basic
// Auth gate as the rest of /admin.
export async function GET() {
  const settings = await getAllSettings();
  return NextResponse.json(settings);
}

export async function PATCH(request: Request) {
  const body = await request.json().catch(() => null);
  const key = body?.key as string | undefined;
  const value = body?.value as string | undefined;

  if (!key || !VALID_KEYS.includes(key as SettingKey)) {
    return NextResponse.json({ error: "Paramètre inconnu." }, { status: 400 });
  }
  if (!value || !isValidEmailList(value)) {
    return NextResponse.json(
      { error: "Adresse email invalide (séparez plusieurs adresses par une virgule)." },
      { status: 400 }
    );
  }

  try {
    await setSetting(key as SettingKey, value.trim());
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mise à jour d'un paramètre : échec.", err);
    return NextResponse.json({ error: "Échec de l'enregistrement." }, { status: 500 });
  }
}
