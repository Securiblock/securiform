import { NextResponse } from "next/server";
import { aujourdhuiEnFrance, marquerEnvoye, purgerRappelsEchus, rappelsAEnvoyer } from "@/lib/rappels";
import { envoyerRappel, notifierEquipe } from "@/lib/rappels-email";

// Au-delà, le reste part le lendemain : garde l'exécution courte et sous les quotas Resend.
const ENVOIS_MAX_PAR_JOUR = 50;

// Triggered by Vercel Cron (see vercel.json) every morning. Same authentication
// as /api/cron/generate-article: Vercel sends `Authorization: Bearer $CRON_SECRET`,
// and anything else is rejected (fails closed if CRON_SECRET is not set).
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const aujourdhui = aujourdhuiEnFrance();
    const purges = await purgerRappelsEchus(aujourdhui);
    const rappels = await rappelsAEnvoyer(aujourdhui, ENVOIS_MAX_PAR_JOUR);

    let envoyes = 0;
    const echecs: string[] = [];
    for (const rappel of rappels) {
      try {
        await envoyerRappel(rappel);
        await marquerEnvoye(rappel.id);
        envoyes++;
      } catch (err) {
        // Non marqué comme envoyé : il sera retenté au prochain passage.
        console.error(`Rappel de recyclage ${rappel.id} : échec de l'envoi.`, err);
        echecs.push(rappel.id);
        continue;
      }
      try {
        await notifierEquipe(rappel);
      } catch (err) {
        console.error(`Rappel de recyclage ${rappel.id} : échec de la notification équipe.`, err);
      }
    }

    return NextResponse.json({ envoyes, echecs: echecs.length, purges });
  } catch (err) {
    console.error("Cron rappels de recyclage : échec.", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur inconnue." },
      { status: 500 }
    );
  }
}
