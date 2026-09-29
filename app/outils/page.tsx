import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils - SECURIFORM",
  description:
    "Outils gratuits SECURIFORM : trouvez la formation sécurité adaptée à vos salariés, calculez la date de recyclage de vos formations, comparez les CACES® et listez vos VGP obligatoires.",
  alternates: { canonical: "/outils" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/outils",
    title: "Outils gratuits - SECURIFORM",
    description: "Questionnaire de choix de formation, calculateur de recyclage, comparateur de CACES® et checklist VGP.",
    images: ["/image/logo-securiform.webp"],
  },
};

const OUTILS = [
  {
    href: "/outils/quelle-formation",
    numero: "01",
    titre: "Quelle formation me faut-il ?",
    texte:
      "Répondez à quelques questions sur votre activité : nous vous indiquons la formation adaptée à vos salariés et le lieu de formation le plus pertinent.",
    lien: "Faire le questionnaire",
  },
  {
    href: "/outils/calculateur-recyclage",
    numero: "02",
    titre: "Calculateur de recyclage",
    texte:
      "Indiquez la date de votre dernière formation : nous calculons son échéance et vous prévenons par email avant qu'elle n'expire.",
    lien: "Calculer mon échéance",
  },
  {
    href: "/caces#comparateur",
    numero: "03",
    titre: "Comparateur de CACES®",
    texte:
      "Les 6 CACES® côte à côte : engins concernés, durée de formation, recyclage et validité, pour trouver le vôtre sans ouvrir chaque page.",
    lien: "Comparer les CACES®",
  },
  {
    href: "/vgp#checklist",
    numero: "04",
    titre: "Checklist réglementaire VGP",
    texte:
      "Cochez les équipements de votre parc : vous obtenez vos vérifications obligatoires, leur fréquence et les formations de vos conducteurs.",
    lien: "Faire ma checklist",
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
          <p>Des outils gratuits pour choisir vos formations et ne jamais laisser passer une échéance.</p>
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
                <span className="categorie-code">{outil.numero}</span>
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
