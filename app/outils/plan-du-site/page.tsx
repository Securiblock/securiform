import type { Metadata } from "next";
import Link from "next/link";
import { menuFormations, menuVgp } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Plan du site - SECURIFORM",
  description: "Plan du site SECURIFORM : toutes nos formations sécurité, nos pages VGP, nos outils et nos informations pratiques.",
  alternates: { canonical: "/outils/plan-du-site" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/outils/plan-du-site",
    title: "Plan du site - SECURIFORM",
    description: "Toutes les pages du site SECURIFORM en un coup d'œil.",
    images: ["/image/logo-securiform.webp"],
  },
};

type Lien = { label: string; href: string };
type Bloc = { titre: string; href?: string; liens: Lien[] };

// Formations et VGP repris des méga menus (lib/nav.ts) : une page ajoutée au menu apparaît ici.
const FORMATIONS: Bloc[] = menuFormations.map(({ titre, href, liens }) => ({ titre, href, liens }));

const VGP: Bloc[] = [
  { titre: "Vérifications Générales Périodiques", liens: [{ label: "Tout savoir sur les VGP", href: "/vgp" }] },
  ...menuVgp.map(({ titre, href, liens }) => ({
    titre,
    // Le bloc « Épreuves de charge » liste déjà sa page : pas de lien en double sur le titre.
    href: liens.some((l) => l.href === href) ? undefined : href,
    liens,
  })),
];

const AUTRES: Bloc[] = [
  {
    titre: "SECURIFORM",
    liens: [
      { label: "Accueil", href: "/" },
      { label: "L'entreprise", href: "/lentreprise" },
      { label: "Avis clients et rapports d'activité", href: "/statistiques" },
      { label: "Blog", href: "/blog" },
      { label: "Nous recrutons", href: "/nous-recrutons" },
      { label: "Nous contacter", href: "/nous-contacter" },
    ],
  },
  {
    titre: "Outils",
    href: "/outils",
    liens: [
      { label: "Calculateur de recyclage", href: "/outils/calculateur-recyclage" },
      { label: "Plan du site", href: "/outils/plan-du-site" },
    ],
  },
  {
    titre: "Informations",
    liens: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Conditions générales de vente", href: "/conditions-generales-de-vente" },
      { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
      { label: "Politique de cookies", href: "/politique-cookies" },
    ],
  },
];

function Grille({ blocs }: { blocs: Bloc[] }) {
  return (
    <div className="plan-site">
      {blocs.map((bloc) => (
        <div key={bloc.titre} className="plan-site-bloc reveal">
          <h3>{bloc.href ? <Link href={bloc.href}>{bloc.titre}</Link> : bloc.titre}</h3>
          {bloc.liens.length > 0 && (
            <ul>
              {bloc.liens.map((lien) => (
                <li key={lien.href}>
                  <Link href={lien.href}>{lien.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section className="page-hero" aria-label="Plan du site">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/outils">Outils</Link>
            <span aria-hidden="true">›</span>
            <span>Plan du site</span>
          </p>
          <h1>Plan du site</h1>
          <p>Toutes les pages du site SECURIFORM en un coup d&apos;œil.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-formations">
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">Nos formations</span>
            <h2 id="titre-formations">Formations</h2>
            <hr className="trait" />
          </div>
          <Grille blocs={FORMATIONS} />
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="titre-vgp">
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">Vos équipements</span>
            <h2 id="titre-vgp">VGP</h2>
            <hr className="trait" />
          </div>
          <Grille blocs={VGP} />
        </div>
      </section>

      <section className="section" aria-labelledby="titre-autres">
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">Et aussi</span>
            <h2 id="titre-autres">SECURIFORM, outils et informations</h2>
            <hr className="trait" />
          </div>
          <Grille blocs={AUTRES} />
        </div>
      </section>

      <section className="cta" aria-labelledby="titre-contact">
        <div className="container reveal">
          <h2 id="titre-contact">Vous ne trouvez pas ce que vous cherchez&nbsp;?</h2>
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
