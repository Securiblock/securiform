import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

// Lazy singleton: only validates/connects the first time a query actually
// runs, so importing this module never breaks a route that happens not to
// touch the database (same convention as GEMINI_API_KEY elsewhere in
// lib/blog/ — fail at the point of use, not at import time).
let client: NeonQueryFunction<false, false> | null = null;

function getClient(): NeonQueryFunction<false, false> {
  if (!client) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error(
        "DATABASE_URL manquant. Ajoutez-le dans .env.local (voir lib/blog/db.ts et data/schema.sql)."
      );
    }
    client = neon(connectionString);
  }
  return client;
}

// Tagged-template SQL, e.g. sql`select * from topics where id = ${id}`.
// Kept as a plain function (not `export const sql = neon(...)`) so the
// DATABASE_URL check above only fires on first real use.
export function sql(strings: TemplateStringsArray, ...values: unknown[]) {
  return getClient()(strings, ...values);
}
