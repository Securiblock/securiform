import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Politique de cookies",
      "description": "Liste des cookies et traceurs utilisés par le site SECURIFORM, et gestion du consentement.",
      "url": "https://securiform.fr/politique-cookies/"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://securiform.fr/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Politique de cookies",
          "item": "https://securiform.fr/politique-cookies/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Politique de cookies — SECURIFORM",
  description: "Liste des cookies et traceurs utilisés par le site SECURIFORM (nom, émetteur, finalité, durée) et gestion du consentement.",
  alternates: { canonical: "/politique-cookies" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/politique-cookies",
    title: "Politique de cookies — SECURIFORM",
    description: "Quels cookies utilise le site SECURIFORM, et comment gérer votre consentement.",
    images: ["/image/logo-securiform.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de cookies — SECURIFORM",
    description: "Politique de cookies du site SECURIFORM.",
    images: ["/image/logo-securiform.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero" aria-label="Politique de cookies">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span>Politique de cookies</span>
          </p>
          <h1>Politique de cookies</h1>
          <p>Ce site utilise le minimum de traceurs nécessaire à son fonctionnement. Voici la liste complète, et comment gérer votre consentement.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-quoi">
        <div className="container section-head reveal">
          <span className="surtitre">1</span>
          <h2 id="titre-quoi">Qu&apos;est-ce qu&apos;un cookie&nbsp;?</h2>
          <hr className="trait" />
          <p>Un cookie (ou traceur) est un petit fichier déposé sur votre appareil lors de la consultation d&apos;un site, permettant de conserver des informations le temps de votre navigation ou d&apos;une visite à l&apos;autre. Certains sont indispensables au fonctionnement du site, d&apos;autres (mesure d&apos;audience, contenus tiers, publicité) nécessitent votre consentement préalable.</p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="titre-liste">
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">2</span>
            <h2 id="titre-liste">Les traceurs utilisés sur ce site</h2>
            <hr className="trait" />
            <p>Cette liste correspond exactement aux traceurs présents sur le site — nous ne déposons rien d&apos;autre.</p>
          </div>

          <div className="table-scroll reveal">
            <table className="tableau-comparatif">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Émetteur</th>
                  <th>Finalité</th>
                  <th>Durée</th>
                  <th>Soumis à consentement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>securiform-chat</code></td>
                  <td>SECURIFORM (1<sup>re</sup> partie)</td>
                  <td>Conservation de l&apos;historique de votre conversation avec l&apos;assistant, le temps de votre visite</td>
                  <td>Session (supprimé à la fermeture de l&apos;onglet)</td>
                  <td>Non — strictement nécessaire</td>
                </tr>
                <tr>
                  <td><code>securiform-consent</code></td>
                  <td>SECURIFORM (1<sup>re</sup> partie)</td>
                  <td>Mémorisation de votre choix concernant les cookies</td>
                  <td>6 mois</td>
                  <td>Non — strictement nécessaire</td>
                </tr>
                <tr>
                  <td>Cookies Google Maps</td>
                  <td>Google</td>
                  <td>Affichage de la carte interactive sur notre page « Nous contacter »</td>
                  <td>Définie par Google</td>
                  <td>Oui — catégorie « Contenus tiers »</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="reveal" style={{ marginTop: "1.5rem" }}>Ce site n&apos;utilise aucun cookie de mesure d&apos;audience (analytics), de publicité ou de réseau social. Les polices utilisées sur ce site (Rajdhani, Quicksand) sont hébergées par nos soins et ne déclenchent aucune requête ni aucun cookie vers un serveur tiers.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-gerer">
        <div className="container section-head reveal">
          <span className="surtitre">3</span>
          <h2 id="titre-gerer">Gérer votre consentement</h2>
          <hr className="trait" />
          <p>Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser le dépôt du cookie « Contenus tiers » (Google Maps), globalement ou catégorie par catégorie. Tant que vous ne l&apos;acceptez pas, la carte Google Maps n&apos;est pas chargée&nbsp;: une carte de remplacement vous propose un lien simple vers Google Maps, qui ne dépose aucun cookie.</p>
          <p style={{ marginTop: "1rem" }}>Vous pouvez modifier votre choix à tout moment en cliquant sur <strong>« Gérer mes cookies »</strong>, en bas de chaque page du site. Votre choix est conservé 6 mois, au-delà desquels le bandeau vous sera de nouveau présenté.</p>
        </div>
      </section>

      <section className="cta" aria-labelledby="titre-contact">
        <div className="container reveal">
          <h2 id="titre-contact">Une question sur les cookies&nbsp;?</h2>
          <p>Notre équipe reste à votre disposition pour tout complément d&apos;information.</p>
          <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
          <div className="cta-actions">
            <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
            <Link className="btn btn-contour" href="/politique-de-confidentialite" style={{ borderColor: "#fff", color: "#fff" }}>Politique de confidentialité</Link>
          </div>
        </div>
      </section>
    </>
  );
}
