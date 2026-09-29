import { sql } from "@/lib/blog/db";

// Accès à la table rappels_recyclage (voir data/schema.sql).

export type Rappel = {
  id: string;
  email: string;
  formation: string;
  libelle: string;
  date_formation: string;
  echeance: string;
  date_rappel: string;
};

// Au-delà, on considère l'adresse comme abusive (quelqu'un qui inscrit une adresse en boucle).
const MAX_RAPPELS_PAR_EMAIL = 20;

// Date du jour en France, au format AAAA-MM-JJ — le serveur Vercel tourne en UTC.
export const aujourdhuiEnFrance = () =>
  new Date().toLocaleDateString("en-CA", { timeZone: "Europe/Paris" });

export async function creerRappel(
  rappel: Omit<Rappel, "id">
): Promise<{ statut: "cree"; id: string } | { statut: "existant" } | { statut: "limite" }> {
  const existants = (await sql`
    SELECT formation, libelle, echeance FROM rappels_recyclage WHERE email = ${rappel.email}
  `) as Pick<Rappel, "formation" | "libelle" | "echeance">[];

  if (existants.some((r) => r.libelle === rappel.libelle && r.echeance === rappel.echeance)) {
    return { statut: "existant" };
  }
  if (existants.length >= MAX_RAPPELS_PAR_EMAIL) return { statut: "limite" };

  const id = crypto.randomUUID();
  await sql`
    INSERT INTO rappels_recyclage (id, email, formation, libelle, date_formation, echeance, date_rappel, created_at)
    VALUES (${id}, ${rappel.email}, ${rappel.formation}, ${rappel.libelle}, ${rappel.date_formation},
            ${rappel.echeance}, ${rappel.date_rappel}, ${new Date().toISOString()})
  `;
  return { statut: "cree", id };
}

export async function lireRappel(id: string): Promise<Rappel | null> {
  const rows = (await sql`
    SELECT id, email, formation, libelle, date_formation, echeance, date_rappel
    FROM rappels_recyclage WHERE id = ${id}
  `) as Rappel[];
  return rows[0] ?? null;
}

export async function supprimerRappel(id: string) {
  await sql`DELETE FROM rappels_recyclage WHERE id = ${id}`;
}

export async function rappelsAEnvoyer(aujourdhui: string, limite: number): Promise<Rappel[]> {
  return (await sql`
    SELECT id, email, formation, libelle, date_formation, echeance, date_rappel
    FROM rappels_recyclage
    WHERE sent_at IS NULL AND date_rappel <= ${aujourdhui}
    ORDER BY date_rappel
    LIMIT ${limite}
  `) as Rappel[];
}

export async function marquerEnvoye(id: string) {
  await sql`UPDATE rappels_recyclage SET sent_at = ${new Date().toISOString()} WHERE id = ${id}`;
}

// Une fois l'échéance passée, l'adresse n'a plus d'utilité : on la supprime.
export async function purgerRappelsEchus(aujourdhui: string): Promise<number> {
  const rows = await sql`DELETE FROM rappels_recyclage WHERE echeance < ${aujourdhui} RETURNING id`;
  return rows.length;
}
