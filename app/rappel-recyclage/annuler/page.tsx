import type { Metadata } from "next";
import Link from "next/link";
import { annulerRappel } from "@/app/actions-rappel";
import { lireRappel, type Rappel } from "@/lib/rappels";
import { formaterDate, lireDate } from "@/lib/recyclage";

export const metadata: Metadata = {
  title: "Annuler un rappel de recyclage - SECURIFORM",
  description: "Annulation d'un rappel de recyclage par email.",
  robots: { index: false, follow: false },
};

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

const dateLisible = (iso: string) => {
  const date = lireDate(iso);
  return date ? formaterDate(date) : iso;
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; annule?: string }>;
}) {
  const { id, annule } = await searchParams;
  let rappel: Rappel | null = null;
  if (!annule && id && UUID.test(id)) {
    try {
      rappel = await lireRappel(id);
    } catch (err) {
      console.error("Lecture du rappel de recyclage impossible :", err);
    }
  }

  return (
    <>
      <section className="page-hero" aria-label="Rappel de recyclage">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span>Rappel de recyclage</span>
          </p>
          <h1>Rappel de recyclage</h1>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-annulation">
        <div className="container section-head reveal">
          {annule ? (
            <>
              <span className="surtitre">C&apos;est fait</span>
              <h2 id="titre-annulation">Votre rappel est annulé</h2>
              <p>Votre adresse email a été supprimée&nbsp;: vous ne recevrez plus de message à ce sujet.</p>
            </>
          ) : rappel ? (
            <>
              <span className="surtitre">Annulation</span>
              <h2 id="titre-annulation">Annuler ce rappel&nbsp;?</h2>
              <p>
                Formation&nbsp;: <strong>{rappel.libelle}</strong>, échéance le{" "}
                <strong>{dateLisible(rappel.echeance)}</strong>.
              </p>
              <p style={{ marginTop: "1rem" }}>
                En confirmant, votre rappel et votre adresse email sont définitivement supprimés.
              </p>
              <form action={annulerRappel} style={{ marginTop: "1.5rem" }}>
                <input type="hidden" name="id" value={rappel.id} />
                <button type="submit" className="btn btn-plein">Confirmer l&apos;annulation</button>
              </form>
            </>
          ) : (
            <>
              <span className="surtitre">Introuvable</span>
              <h2 id="titre-annulation">Ce rappel n&apos;existe plus</h2>
              <p>
                Il a peut-être déjà été annulé, ou sa date d&apos;échéance est passée. Pour toute question, appelez-nous
                au{" "}
                <a href="tel:+33320673490" style={{ color: "var(--rouge)", fontWeight: 700 }}>
                  03 20 67 34 90
                </a>
                .
              </p>
            </>
          )}
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-contour" href="/">Retour à l&apos;accueil</Link>
          </div>
        </div>
      </section>
    </>
  );
}
