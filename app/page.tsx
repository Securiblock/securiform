import type { Metadata } from "next";
import Link from "next/link";
import HeroSlider, { type Slide } from "@/components/hero-slider";

export const metadata: Metadata = {
  title:
    "SECURIFORM — Organisme de formation à la sécurité au travail | CACES®, habilitation électrique, SST, incendie",
  description:
    "SECURIFORM, organisme de formation certifié Qualiopi, vous accompagne partout en France : préparation à l'habilitation électrique, conduite en sécurité et CACES® (R482 à R490), secourisme SST, incendie et évacuation, travaux en hauteur, AIPR et VGP.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/",
    title: "SECURIFORM — Formations sécurité au travail partout en France",
    description:
      "Habilitation électrique, conduite en sécurité et CACES®, secourisme SST, incendie et évacuation, travaux en hauteur, VGP. Organisme certifié Qualiopi, 99,5 % de réussite.",
    images: [
      "https://securiform.fr/wp-content/uploads/elementor/thumbs/formation-qg0seffzuzxzt53fhlwn3a16jz0lprbux1mpru55js.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SECURIFORM — Formations sécurité au travail partout en France",
    description:
      "Habilitation électrique, CACES®, SST, incendie, travaux en hauteur, VGP. Organisme certifié Qualiopi.",
    images: [
      "https://securiform.fr/wp-content/uploads/elementor/thumbs/formation-qg0seffzuzxzt53fhlwn3a16jz0lprbux1mpru55js.png",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://securiform.fr/#organization",
      name: "SECURIFORM",
      url: "https://securiform.fr/",
      logo: "https://securiform.fr/wp-content/uploads/2022/12/petit-logo_securiform.png",
      description:
        "Organisme de formation à la sécurité au travail intervenant sur toute la France : habilitation électrique, conduite en sécurité et CACES®, secourisme SST, incendie et évacuation, travaux en hauteur, Vérifications Générales Périodiques (VGP).",
      telephone: "+33320673490",
      areaServed: "FR",
      hasCredential: "Certification Qualiopi",
    },
    {
      "@type": "WebSite",
      "@id": "https://securiform.fr/#website",
      url: "https://securiform.fr/",
      name: "SECURIFORM",
      publisher: { "@id": "https://securiform.fr/#organization" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "WebPage",
      "@id": "https://securiform.fr/#webpage",
      url: "https://securiform.fr/",
      name: "Organisme de formation à la sécurité — SECURIFORM",
      isPartOf: { "@id": "https://securiform.fr/#website" },
      about: { "@id": "https://securiform.fr/#organization" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "Service",
      "@id": "https://securiform.fr/vgp/#service",
      name: "Vérifications Générales Périodiques (VGP)",
      serviceType: "Vérification Générale Périodique d'équipements de travail",
      provider: { "@id": "https://securiform.fr/#organization" },
      areaServed: "FR",
      url: "https://securiform.fr/vgp/",
      description:
        "VGP des chariots élévateurs, nacelles élévatrices, grues auxiliaires, pelleteuses, ponts roulants, chargeuses, compacteurs, hayons élévateurs et accessoires de levage.",
    },
    {
      "@type": "ItemList",
      name: "Formations à la sécurité SECURIFORM",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Formations à la conduite en sécurité et CACES®",
          url: "https://securiform.fr/accueil/formations-a-la-conduite-en-securite-caces/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Préparation à l'habilitation électrique",
          url: "https://securiform.fr/accueil/preparation-habilitation-electrique/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Formation secourisme (SST)",
          url: "https://securiform.fr/accueil/formation-secourisme-sst/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Formations à l'incendie et à l'évacuation",
          url: "https://securiform.fr/accueil/formations-incendie-et-evacuation/",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Formations aux travaux en hauteur et échafaudages",
          url: "https://securiform.fr/accueil/formations-travaux-hauteur-echafaudages/",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Formations AIPR",
          url: "https://securiform.fr/accueil/formations-aipr/",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Formations gestes et postures",
          url: "https://securiform.fr/accueil/formation-gestes-et-postures/",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Formations spécifiques",
          url: "https://securiform.fr/caces-copy/",
        },
      ],
    },
  ],
};

const slides: Slide[] = [
  {
    tag: "Habilitation électrique",
    heading: (
      <>
        Préparation à l&apos;habilitation <span className="accent">électrique</span>
      </>
    ),
    text: "Nous préparons à l'habilitation électrique pour personnel électricien et non-électricien, en basse et haute tensions : H0B0, BE Manœuvre-BS, HE Manœuvre, B1-B2-BR-BE essai-BC, B1L-B2L-BRL-BCL, H1-H2-HE essai-HC.",
    href: "/habilitation-electrique",
    image: "/image/slide-1-habilitation-electrique.jpg",
    ariaLabel: "1 sur 5",
  },
  {
    tag: "Conduite en sécurité & CACES®",
    heading: (
      <>
        Formations à la conduite <span className="accent">en sécurité</span>
      </>
    ),
    text: "Nous préparons à l'autorisation de conduite selon les recommandations suivantes : R482, R484, R485, R486-A, R489 et R490. Pour le passage du CACES®, nous consulter.",
    href: "/caces",
    image: "/image/slide-2-caces.jpg",
    ariaLabel: "2 sur 5",
  },
  {
    tag: "Secourisme",
    heading: (
      <>
        Formation <span className="accent">secourisme</span>
      </>
    ),
    text: "SECURIFORM est habilitée centre de formation Sauveteur Secouriste du Travail (SST).",
    href: "/secourisme",
    image: "/image/slide-3-secourisme.jpg",
    ariaLabel: "3 sur 5",
  },
  {
    tag: "Incendie & évacuation",
    heading: (
      <>
        Formations <span className="accent">incendie</span>
      </>
    ),
    text: "Nous proposons des formations aux moyens de lutte contre l'incendie (manipulation d'extincteurs et de RIA, Équipiers de Première et Seconde Intervention) et à l'évacuation des locaux. Nous restons à votre service pour développer une formation spécifique aux risques liés à votre entreprise.",
    href: "/incendie-evacuation",
    image: "/image/slide-4-incendie.jpg",
    ariaLabel: "4 sur 5",
  },
  {
    tag: "Travaux en hauteur",
    heading: (
      <>
        Formations travaux <span className="accent">en hauteur</span>
      </>
    ),
    text: "Nous proposons des formations au port du harnais anti-chute ainsi qu'aux échafaudages fixes et roulants.",
    href: "/travaux-hauteur-echafaudages",
    image: "/image/slide-5-travaux-hauteur.jpg",
    ariaLabel: "5 sur 5",
  },
];

const formations = [
  {
    img: "/image/formation-caces.jpg",
    alt: "Formation conduite en sécurité et CACES®",
    title: "Conduite en sécurité et CACES®",
    text: "R482, R484, R485, R486-A, R489 et R490 — préparation à l'autorisation de conduite et au passage du CACES®.",
    href: "/caces",
  },
  {
    img: "/image/formation-habilitation-electrique.jpg",
    alt: "Formation habilitation électrique",
    title: "Habilitation électrique",
    text: "Personnel électricien et non-électricien, basse et haute tensions : H0B0, BS, BR, B1-B2, H1-H2, HC…",
    href: "/habilitation-electrique",
  },
  {
    img: "/image/formation-secourisme-sst.jpg",
    alt: "Formation secourisme SST",
    title: "Secourisme (SST)",
    text: "Centre habilité pour la formation Sauveteur Secouriste du Travail : formation initiale et maintien des acquis (MAC).",
    href: "/secourisme",
  },
  {
    img: "/image/formation-incendie.jpg",
    alt: "Formation incendie et évacuation",
    title: "Incendie & évacuation",
    text: "Manipulation d'extincteurs et de RIA, Équipiers de Première et Seconde Intervention, évacuation des locaux.",
    href: "/incendie-evacuation",
  },
  {
    img: "/image/formation-travaux-hauteur.jpg",
    alt: "Formation travaux en hauteur et échafaudages",
    title: "Travaux en hauteur & échafaudages",
    text: "Port du harnais anti-chute, échafaudages fixes et roulants : montage, utilisation et vérification.",
    href: "/travaux-hauteur-echafaudages",
  },
  {
    img: "/image/formation-aipr.jpg",
    alt: "Formation AIPR",
    title: "Formations AIPR",
    text: "Autorisation d'Intervention à Proximité des Réseaux pour opérateurs, encadrants et concepteurs.",
    href: "/aipr",
  },
  {
    img: "/image/formation-gestes-postures.jpg",
    alt: "Formation gestes et postures",
    title: "Gestes et postures",
    text: "Prévenir les troubles musculo-squelettiques et adopter les bons gestes au poste de travail.",
    href: "/gestes-postures",
  },
  {
    img: "/image/formation-specifiques.jpg",
    alt: "Formations spécifiques SECURIFORM",
    title: "Formations spécifiques",
    text: "Tondeuses auto-portées, balayeuses routières, tronçonneuse thermique, gestes qui sauvent… sur mesure.",
    href: "/formations-specifiques",
  },
];

const vgpLinks = [
  { href: "/vgp-chariots-elevateurs", label: "Chariots élévateurs" },
  { href: "/vgp-nacelles-elevatrices", label: "Nacelles élévatrices" },
  { href: "/vgp-grues-auxiliaires", label: "Grues auxiliaires" },
  { href: "/vgp-pelleteuses", label: "Pelleteuses" },
  { href: "/vgp-ponts-roulants", label: "Ponts roulants" },
  { href: "/vgp-chargeuses", label: "Chargeuses" },
  { href: "/vgp-chariots-telescopiques", label: "Chariots télescopiques" },
  { href: "/vgp-compacteurs", label: "Compacteurs" },
  { href: "/vgp-hayons-elevateurs", label: "Hayons élévateurs" },
  { href: "/vgp-bras-de-levage", label: "Bras de levage" },
  { href: "/vgp-tombereaux", label: "Tombereaux" },
  { href: "/vgp-accessoires-levage", label: "Accessoires de levage" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSlider slides={slides} />

      <section className="stats" aria-label="Chiffres clés">
        <div className="container stats-grid">
          <div className="reveal">
            <div className="stat-num" data-count="99.5" data-suffix="%">
              0%
            </div>
            <div className="stat-label">Taux de réussite global</div>
          </div>
          <div className="reveal">
            <div className="stat-num" data-count="93.5" data-suffix="%">
              0%
            </div>
            <div className="stat-label">Taux de satisfaction</div>
          </div>
          <div className="reveal">
            <div className="stat-num" data-count="24" data-suffix="h">
              0h
            </div>
            <div className="stat-label">
              Délai moyen de traitement de votre demande
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-entreprise">
        <div className="container presentation">
          <div className="presentation-txt reveal">
            <span className="surtitre">Qui sommes-nous&nbsp;?</span>
            <h2 id="titre-entreprise">SECURIFORM, votre partenaire sécurité</h2>
            <p>
              Notre vocation est de mettre nos compétences à votre service
              afin de répondre à vos obligations réglementaires.
            </p>
            <p>
              L&apos;expérience partagée au cours de nos interventions nous
              permet de capitaliser et d&apos;optimiser en permanence nos
              connaissances ainsi que nos référentiels pédagogiques et
              opérationnels.
            </p>
            <p>
              Par une organisation adaptée et réactive, nous nous efforçons
              de répondre à vos besoins tout en étant force de propositions
              et de conseil.
            </p>
            <Link className="btn btn-contour" href="/lentreprise">
              En savoir +
            </Link>
          </div>
          <aside className="presentation-visuel reveal" aria-label="Nos valeurs">
            <h3>Nos valeurs au quotidien</h3>
            <ul className="valeurs">
              <li>
                <span className="puce" aria-hidden="true">
                  ✓
                </span>{" "}
                Réactivité : une réponse rapide à chacune de vos demandes
              </li>
              <li>
                <span className="puce" aria-hidden="true">
                  ✓
                </span>{" "}
                Conseil : force de propositions adaptées à vos risques
              </li>
              <li>
                <span className="puce" aria-hidden="true">
                  ✓
                </span>{" "}
                Service client : un accompagnement sur toute la France
              </li>
              <li>
                <span className="puce" aria-hidden="true">
                  ✓
                </span>{" "}
                Qualité : organisme certifié Qualiopi
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section
        className="section section-alt"
        id="formations"
        aria-labelledby="titre-formations"
      >
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">Notre offre</span>
            <h2 id="titre-formations">Nos formations à la sécurité</h2>
            <hr className="trait" />
            <p>
              SECURIFORM vous accompagne dans le domaine de la sécurité au
              travail sur tout le territoire français. Notre équipe cherche
              à se différencier chaque jour par ses valeurs : réactivité,
              conseil, service client.
            </p>
          </div>

          <div className="formations-grid">
            {formations.map((f) => (
              <article className="formation-card reveal" key={f.href}>
                <div className="formation-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.alt} loading="lazy" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className="lien">Découvrir</span>
                <Link className="card-cover" href={f.href} aria-label={f.title} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-recrute">
        <div className="container recrute reveal">
          <div>
            <span className="surtitre">Rejoignez-nous</span>
            <h2 id="titre-recrute">Nous recrutons</h2>
            <p>
              Afin de renforcer l&apos;équipe <strong>SECURIFORM</strong>,
              nous recrutons des formateurs sur toute la France.
            </p>
          </div>
          <Link className="btn btn-plein" href="/nous-recrutons">
            En savoir +
          </Link>
        </div>
      </section>

      <section className="cta" aria-labelledby="titre-contact">
        <div className="container reveal">
          <h2 id="titre-contact">Vous avez une question&nbsp;?</h2>
          <p>
            Notre équipe vous répond rapidement et construit avec vous la
            formation adaptée aux risques de votre entreprise, partout en
            France.
          </p>
          <a className="cta-tel" href="tel:+33320673490">
            03 20 67 34 90
          </a>
          <div className="cta-actions">
            <Link className="btn btn-blanc" href="/nous-contacter">
              Nous contacter
            </Link>
            <Link
              className="btn btn-contour"
              style={{ borderColor: "#fff", color: "#fff" }}
              href="/statistiques"
            >
              Statistiques
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="vgp" aria-labelledby="titre-vgp">
        <div className="container">
          <div className="vgp reveal">
            <div>
              <span className="surtitre" style={{ color: "#FF8A8A" }}>
                VGP
              </span>
              <h2 id="titre-vgp">Vérifications Générales Périodiques</h2>
              <p>
                Au-delà de la formation, SECURIFORM réalise les
                Vérifications Générales Périodiques de vos équipements de
                travail et de levage, conformément à la réglementation en
                vigueur. Un interlocuteur unique pour former vos équipes et
                maintenir vos machines en conformité.
              </p>
              <Link className="btn btn-blanc" href="/vgp">
                Découvrir les VGP
              </Link>
            </div>
            <nav className="vgp-liste" aria-label="Nos prestations VGP">
              {vgpLinks.map((v) => (
                <Link key={v.href} href={v.href}>
                  {v.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
