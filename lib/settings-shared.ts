// Pure constants shared between server code (lib/settings.ts) and the admin
// dashboard client component. Deliberately has zero dependency on lib/settings.ts
// or lib/blog/db.ts — importing the DB-backed module from a "use client" file
// would pull the Postgres driver into the browser bundle.
export type SettingKey = "login_alert_email" | "contact_email_to" | "blog_notify_email";

export const SETTING_LABELS: Record<SettingKey, string> = {
  login_alert_email: "Alertes de connexion à l'admin",
  contact_email_to: "Messages du formulaire de contact",
  blog_notify_email: "Notifications du blog (article généré, file vide)",
};
