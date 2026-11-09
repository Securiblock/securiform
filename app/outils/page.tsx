import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils - SECURIFORM",
  description:
    "Outils gratuits SECURIFORM : calculez la date de recyclage de vos formations (CACES®, SST, habilitation électrique, AIPR) et consultez le plan du site.",
  alternates: { canonical: "/outils" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/outils",
    title: "Outils gratuits - SECURIFORM",
    description: "Calculateur de recyclage et plan du site SECURIFORM.",
    images: ["/image/logo-securiform.webp"],
  },
};

const OUTILS = [
  {
    href: "/outils/calculateur-recyclage",
    titre: "Calculateur de recyclage",
    texte:
      "Indiquez la date de votre dernière formation : nous calculons son échéance et vous prévenons par email avant qu'elle n'expire.",
    lien: "Calculer mon échéance",
  },
  {
    href: "/outils/plan-du-site",
    titre: "Plan du site",
    texte:
      "Toutes les pages du site en un coup d'œil : nos formations, nos pages VGP, nos outils et nos informations pratiques.",
    lien: "Voir le plan du site",
  },
];

export default function Page() {
  return (
    <>
      <section className="page-hero" aria-label="Outils SECURIFORM">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span>Outils</span>
          </p>
          <h1>Outils</h1>
          <p>Des outils gratuits pour ne jamais laisser passer une échéance et trouver rapidement la bonne page.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-outils">
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">En libre accès</span>
            <h2 id="titre-outils">Nos outils en ligne</h2>
            <hr className="trait" />
          </div>
          <div className="grille-categories cols-2">
            {OUTILS.map((outil) => (
              <article key={outil.href} className="categorie-card reveal">
                <h3>{outil.titre}</h3>
                <p>{outil.texte}</p>
                <span className="lien">{outil.lien}</span>
                <Link className="card-cover" href={outil.href} aria-label={outil.titre} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" aria-labelledby="titre-contact">
        <div className="container reveal">
          <h2 id="titre-contact">Vous préférez en parler&nbsp;?</h2>
          <p>Notre équipe vous répond dans l&apos;heure et s&apos;assure de l&apos;adéquation de nos formations aux risques de votre entreprise.</p>
          <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
          <div className="cta-actions">
            <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
