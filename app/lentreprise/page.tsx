import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "name": "L'entreprise — SECURIFORM",
      "url": "https://securiform.fr/lentreprise/",
      "about": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      }
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
          "name": "L'entreprise",
          "item": "https://securiform.fr/lentreprise/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "L'entreprise SECURIFORM — Organisme certifié Qualiopi",
  description: "SECURIFORM est un organisme de formation à la sécurité au travail, certifié Qualiopi depuis 2021, présent partout en France.",
  alternates: { canonical: "/lentreprise" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/lentreprise",
    title: "L'entreprise — SECURIFORM, organisme de formation certifié Qualiopi",
    description: "Mission, valeurs, méthode et certification Qualiopi de SECURIFORM, organisme de formation à la sécurité au travail présent partout en France.",
    images: ["/image/logo-securiform.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'entreprise — SECURIFORM",
    description: "Découvrez la mission, les valeurs et la certification Qualiopi de SECURIFORM.",
    images: ["/image/logo-securiform.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="L'entreprise SECURIFORM">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>L'entreprise</span>
        </p>
        <h1>L'entreprise</h1>
        <p>Organisme de formation à la sécurité au travail, certifié Qualiopi, SECURIFORM accompagne les entreprises sur tout le territoire français.</p>
        <Link href="/nous-contacter" className="btn btn-plein">Nous contacter</Link>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-mission">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Notre mission</span>
          <h2 id="titre-mission">SECURIFORM</h2>
          <p>Notre vocation est de mettre nos compétences à votre service afin de répondre à vos obligations réglementaires.</p>
          <p>L'expérience partagée au cours de nos interventions nous permet de capitaliser et d'optimiser en permanence nos connaissances ainsi que nos référentiels pédagogiques et opérationnels.</p>
          <p>Par une organisation adaptée et réactive, nous nous efforçons de répondre à vos besoins tout en étant force de propositions et de conseil.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Nos valeurs en bref">
          <h3>En bref</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Organisme de formation certifié Qualiopi depuis 2021</li>
            <li><span className="puce" aria-hidden="true">✓</span> Interventions sur toute la France, en centre ou sur site</li>
            <li><span className="puce" aria-hidden="true">✓</span> 8 domaines de formation à la sécurité au travail</li>
            <li><span className="puce" aria-hidden="true">✓</span> Vérifications Générales Périodiques (VGP) d'équipements</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-valeurs">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui nous guide</span>
          <h2 id="titre-valeurs">Nos valeurs au quotidien</h2>
          <hr className="trait" />
          <p>Quatre principes simples, appliqués à chaque projet de formation, quelle que soit la taille de l'entreprise.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Réactivité</h3>
            <p>Une réponse rapide à chacune de vos demandes, pour organiser vos formations sans retarder votre activité.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Conseil</h3>
            <p>Une écoute attentive de vos besoins pour vous orienter vers la formation réellement adaptée à vos risques.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Service client</h3>
            <p>Un accompagnement suivi, du premier échange jusqu'au renouvellement de vos habilitations.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Qualité</h3>
            <p>Des formateurs expérimentés et une démarche continue d'amélioration, formalisée par la certification Qualiopi.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-qualiopi">
      <div className="container presentation">
        <div className="presentation-visuel reveal" aria-label="Certification Qualiopi" style={{ "background": "linear-gradient(150deg,var(--noir) 0%,#2E2E33 100%)" }}>
          <h3>Depuis 2021</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Certification Qualiopi obtenue et renouvelée</li>
            <li><span className="puce" aria-hidden="true">✓</span> Basée sur un référentiel national de 7 critères qualité</li>
            <li><span className="puce" aria-hidden="true">✓</span> Contrôlée par un organisme certificateur indépendant</li>
            <li><span className="puce" aria-hidden="true">✓</span> Condition d'accès aux financements mutualisés (OPCO)</li>
          </ul>
          <a className="btn btn-blanc" href="https://securiform.fr/wp-content/uploads/2026/03/Certificat-Qualiopi-renouvellement.pdf" style={{ "marginTop": "1.5rem" }}>Voir le certificat</a>
        </div>
        <div className="presentation-txt reveal">
          <span className="surtitre">Une garantie pour vous</span>
          <h2 id="titre-qualiopi">Qu'est-ce que la certification Qualiopi&nbsp;?</h2>
          <p>Qualiopi est la certification qualité délivrée par les organismes accrédités par le Comité français d'accréditation (Cofrac), au nom de l'État. Elle atteste que les processus mis en œuvre par un organisme de formation respectent un référentiel national exigeant, portant notamment sur l'information du public, l'adaptation des prestations, la qualification des formateurs et l'amélioration continue.</p>
          <p>Pour les entreprises clientes, cette certification est aussi une condition pratique&nbsp;: elle conditionne l'accès aux financements mutualisés (OPCO, CPF, France Travail) pour la prise en charge de vos formations. SECURIFORM est certifié Qualiopi depuis 2021 et fait renouveler sa certification selon les échéances fixées par le référentiel national.</p>
        </div>
      </div>
    </section>


    

    
<section className="stats" aria-label="Chiffres clés">
      <div className="container stats-grid">
        <div className="reveal">
          <div className="stat-num" data-count="99.5" data-suffix="%">0%</div>
          <div className="stat-label">Taux de réussite global</div>
        </div>
        <div className="reveal">
          <div className="stat-num" data-count="93.5" data-suffix="%">0%</div>
          <div className="stat-label">Taux de satisfaction</div>
        </div>
        <div className="reveal">
          <div className="stat-num" data-count="24" data-suffix="h">0h</div>
          <div className="stat-label">Délai moyen de traitement de votre demande</div>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-methode">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Comment nous travaillons</span>
          <h2 id="titre-methode">Notre méthode, projet après projet</h2>
          <hr className="trait" />
          <p>Que votre besoin concerne une seule habilitation ou l'ensemble d'un site, la démarche reste la même.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Diagnostic</h3>
            <p>Nous identifions avec vous les postes concernés, les risques réels et les obligations réglementaires applicables.</p>
          </div>
          <div className="etape reveal">
            <h3>Proposition</h3>
            <p>Nous vous proposons les formations adaptées, en centre ou sur site, avec un planning réaliste pour votre activité.</p>
          </div>
          <div className="etape reveal">
            <h3>Formation</h3>
            <p>Nos formateurs interviennent avec une pédagogie pratique, au plus près de votre matériel et de vos conditions réelles.</p>
          </div>
          <div className="etape reveal">
            <h3>Suivi</h3>
            <p>Nous vous accompagnons ensuite sur le renouvellement des habilitations et l'évolution de vos besoins.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" id="formations" aria-labelledby="titre-formations">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Notre offre complète</span>
          <h2 id="titre-formations">Toutes nos formations en un coup d'œil</h2>
          <hr className="trait" />
          <p>Huit domaines de formation à la sécurité au travail, chacun présenté en détail sur sa propre page.</p>
        </div>
        <div className="formations-grid">

          <article className="formation-card reveal">
            <h3>Conduite en sécurité et CACES®</h3>
            <p>R482, R484, R485, R486-A, R489, R490&nbsp;: toutes les recommandations de conduite en sécurité.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/caces" aria-label="Conduite en sécurité et CACES®" />
          </article>

          <article className="formation-card reveal">
            <h3>Habilitation électrique</h3>
            <p>Personnel électricien et non-électricien, basse et haute tensions, véhicules électriques.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/habilitation-electrique" aria-label="Habilitation électrique" />
          </article>

          <article className="formation-card reveal">
            <h3>Secourisme (SST)</h3>
            <p>Formation initiale et MAC de recyclage Sauveteur Secouriste du Travail.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/secourisme" aria-label="Secourisme SST" />
          </article>

          <article className="formation-card reveal">
            <h3>Incendie et évacuation</h3>
            <p>Extincteurs, RIA, Équipiers de Première Intervention, exercices d'évacuation.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/incendie-evacuation" aria-label="Incendie et évacuation" />
          </article>

          <article className="formation-card reveal">
            <h3>Travaux en hauteur et échafaudages</h3>
            <p>Port du harnais, échafaudages fixes (R408) et roulants (R457).</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/travaux-hauteur-echafaudages" aria-label="Travaux en hauteur et échafaudages" />
          </article>

          <article className="formation-card reveal">
            <h3>Gestes et postures</h3>
            <p>Prévention des troubles musculosquelettiques et techniques de manutention.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/gestes-postures" aria-label="Gestes et postures" />
          </article>

          <article className="formation-card reveal">
            <h3>AIPR</h3>
            <p>Opérateur, Encadrant, Concepteur&nbsp;: l'autorisation d'intervention à proximité des réseaux.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/aipr" aria-label="Formations AIPR" />
          </article>

          <article className="formation-card reveal">
            <h3>Formations spécifiques</h3>
            <p>Des formations sur mesure pour vos équipements et risques particuliers.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/formations-specifiques" aria-label="Formations spécifiques" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Questions fréquentes</span>
          <h2 id="titre-faq">Vous vous posez des questions&nbsp;?</h2>
          <hr className="trait" />
        </div>
        <div className="faq reveal">

          <details className="faq-item">
            <summary>Qu'apporte concrètement la certification Qualiopi à mon entreprise&nbsp;?</summary>
            <p>Elle vous garantit que nos formations respectent un référentiel qualité national contrôlé par un organisme indépendant, et elle vous permet de faire prendre en charge vos formations par les financements mutualisés comme les OPCO.</p>
          </details>

          <details className="faq-item">
            <summary>SECURIFORM intervient-il partout en France&nbsp;?</summary>
            <p>Oui, nos formateurs se déplacent sur l'ensemble du territoire français, aussi bien pour des formations en centre que directement sur vos sites.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il choisir entre formation en centre et formation sur site&nbsp;?</summary>
            <p>Non, les deux formules coexistent selon vos besoins&nbsp;: le centre convient bien aux sessions régulières multi-entreprises, la formation sur site permet de s'entraîner directement avec votre matériel et vos configurations réelles.</p>
          </details>

          <details className="faq-item">
            <summary>Et si mon besoin ne correspond à aucune formation du catalogue&nbsp;?</summary>
            <p>SECURIFORM conçoit aussi des formations sur mesure, adaptées à des équipements ou des risques spécifiques à votre activité&nbsp;: voir notre page Formations spécifiques pour plus de détails.</p>
          </details>

          <details className="faq-item">
            <summary>Comment rejoindre l'équipe de formateurs SECURIFORM&nbsp;?</summary>
            <p>SECURIFORM recrute régulièrement des formateurs sur toute la France&nbsp;: consultez notre page Nous recrutons ou contactez-nous directement pour échanger sur votre profil.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-recrute">
      <div className="container recrute reveal">
        <div>
          <span className="surtitre">Rejoignez-nous</span>
          <h2 id="titre-recrute">Nous recrutons</h2>
          <p>Afin de renforcer l'équipe <strong>SECURIFORM</strong>, nous recrutons des formateurs sur toute la France.</p>
        </div>
        <Link className="btn btn-plein" href="/nous-recrutons">En savoir +</Link>
      </div>
    </section>


    

    
<section className="cta" aria-labelledby="titre-contact">
      <div className="container reveal">
        <h2 id="titre-contact">Vous avez une question&nbsp;?</h2>
        <p>Notre équipe vous répond rapidement et construit avec vous la formation adaptée aux risques de votre entreprise, partout en France.</p>
        <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
        <div className="cta-actions">
          <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
          <Link className="btn btn-contour" href="/statistiques" style={{ "borderColor": "#fff", "color": "#fff" }}>Statistiques</Link>
        </div>
      </div>
    </section>


    

    
<section className="section" id="vgp" aria-labelledby="titre-vgp">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>VGP</span>
            <h2 id="titre-vgp">Vérifications Générales Périodiques</h2>
            <p>Au-delà de la formation, SECURIFORM réalise les Vérifications Générales Périodiques de vos équipements de travail et de levage, conformément à la réglementation en vigueur.</p>
            <Link className="btn btn-blanc" href="/vgp">Découvrir les VGP</Link>
          </div>
          <nav className="vgp-liste" aria-label="Nos prestations VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
            <Link href="/vgp-grues-auxiliaires">Grues auxiliaires</Link>
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
            <Link href="/vgp-ponts-roulants">Ponts roulants</Link>
            <Link href="/vgp-chargeuses">Chargeuses</Link>
            <Link href="/vgp-chariots-telescopiques">Chariots télescopiques</Link>
            <Link href="/vgp-compacteurs">Compacteurs</Link>
            <Link href="/vgp-hayons-elevateurs">Hayons élévateurs</Link>
            <Link href="/vgp-bras-de-levage">Bras de levage</Link>
            <Link href="/vgp-tombereaux">Tombereaux</Link>
            <Link href="/vgp-accessoires-levage">Accessoires de levage</Link>
          </nav>
        </div>
      </div>
    </section>


  
    </>
  );
}
