import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Message envoyé — SECURIFORM",
  description: "Confirmation d'envoi de votre message à SECURIFORM.",
  robots: { index: false, follow: true },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string }>;
}) {
  const { ok } = await searchParams;
  const success = ok !== "0";

  return (
    <>
      <section className="page-hero" aria-label="Confirmation">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span>Message envoyé</span>
          </p>
          <h1>{success ? "Message bien envoyé" : "Un problème est survenu"}</h1>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-merci">
        <div className="container section-head reveal">
          {success ? (
            <>
              <span className="surtitre">Merci&nbsp;!</span>
              <h2 id="titre-merci">Votre demande a bien été transmise</h2>
              <p>
                Notre équipe revient vers vous rapidement, généralement sous
                24 heures. Pour toute urgence, vous pouvez aussi nous joindre
                directement au{" "}
                <a href="tel:+33320673490" style={{ color: "var(--rouge)", fontWeight: 700 }}>
                  03 20 67 34 90
                </a>
                .
              </p>
              <p style={{ marginTop: "1rem" }}>
                En attendant notre réponse, n&apos;hésitez pas à jeter un œil
                à notre boutique en ligne.
              </p>
            </>
          ) : (
            <>
              <span className="surtitre">Oups</span>
              <h2 id="titre-merci">Votre message n&apos;a pas pu être envoyé</h2>
              <p>
                Une erreur technique nous a empêchés de recevoir votre
                message. Merci de réessayer, ou de nous appeler directement
                au{" "}
                <a href="tel:+33320673490" style={{ color: "var(--rouge)", fontWeight: 700 }}>
                  03 20 67 34 90
                </a>
                .
              </p>
            </>
          )}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            {success && (
              <Link
                className="btn btn-contour"
                href="https://securistore.fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Découvrir la boutique
              </Link>
            )}
            <Link className="btn btn-plein" href="/">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
