import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formations à la conduite en sécurité et CACES®",
      "description": "Préparation aux recommandations CACES® R482 (engins de chantier), R484 (ponts roulants et portiques), R485 (gerbeurs à conducteur accompagnant), R486-A (nacelles élévatrices), R489 (chariots de manutention) et R490 (grues auxiliaires de chargement).",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces/"
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
          "name": "Formations à la conduite en sécurité et CACES®",
          "item": "https://securiform.fr/caces/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Conduite en sécurité et CACES® — SECURIFORM",
  description: "SECURIFORM prépare vos équipes au CACES® : R482, R484, R485, R486-A, R489, R490. Tests réalisés par un organisme testeur certifié INRS, partout en France.",
  alternates: { canonical: "/caces" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces",
    title: "Formations à la conduite en sécurité et CACES® — SECURIFORM",
    description: "R482, R484, R485, R486-A, R489, R490 : SECURIFORM prépare vos équipes au CACES® partout en France. Tests réalisés par un organisme testeur certifié, référencé INRS.",
    images: ["/image/formation-caces.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations à la conduite en sécurité et CACES® — SECURIFORM",
    description: "R482, R484, R485, R486-A, R489, R490 : préparez vos équipes au CACES® avec SECURIFORM, partout en France.",
    images: ["/image/formation-caces.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formations à la conduite en sécurité et CACES®" style={{ backgroundImage: "url('/image/formation-caces.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Conduite en sécurité et CACES®</span>
        </p>
        <h1>Formations à la conduite en sécurité et CACES®</h1>
        <p>Formez vos équipes avec des professionnels de la formation et obtenez votre CACES® : chariots, engins de chantier, nacelles, ponts roulants et grues auxiliaires.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Nos formations</span>
        <h2 id="titre-intro">6 recommandations CACES® préparées par SECURIFORM</h2>
        <hr className="trait" />
        <p>Chaque recommandation correspond à une famille d'engins précise. SECURIFORM vous aide à identifier la formation adaptée à votre matériel, puis prépare vos équipes à l'obtention du certificat. Les tests sont réalisés par un organisme testeur certifié CACES®, référencé sur la liste de l'INRS, en sous-traitance.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="categories" aria-labelledby="titre-categories">
      <div className="container">
        <h2 id="titre-categories" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Catégories CACES® proposées</h2>
        <div className="grille-categories">

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-r482.jpg" alt="CACES R482 — engins de chantier" loading="lazy" />
            </div>
            <span className="categorie-badge">10 ans</span>
            <span className="categorie-code">R482-A</span>
            <h3>Engins de chantier</h3>
            <p>Pelles, chargeuses, engins de terrassement, compacteurs et chariots télescopiques utilisés en BTP, carrières et travaux publics.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-r482a" aria-label="Formation CACES R482A — engins de chantier" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-r489.jpg" alt="CACES R489 — chariots de manutention" loading="lazy" />
            </div>
            <span className="categorie-badge">5 ans</span>
            <span className="categorie-code">R489</span>
            <h3>Chariots de manutention</h3>
            <p>Transpalettes, gerbeurs et chariots élévateurs en porte-à-faux, pour l'entrepôt, la logistique et la distribution.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-r489" aria-label="Formation CACES R489 — chariots de manutention" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-r486a.jpg" alt="CACES R486-A — nacelles élévatrices" loading="lazy" />
            </div>
            <span className="categorie-badge">10 ans</span>
            <span className="categorie-code">R486-A</span>
            <h3>Nacelles élévatrices (PEMP)</h3>
            <p>Plateformes élévatrices mobiles de personnes à élévation verticale, pour les interventions en hauteur ponctuelles.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-r486a" aria-label="Formation CACES R486 Catégorie A — nacelles élévatrices" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-r484.jpg" alt="CACES R484 — ponts roulants et portiques" loading="lazy" />
            </div>
            <span className="categorie-badge">10 ans</span>
            <span className="categorie-code">R484</span>
            <h3>Ponts roulants et portiques</h3>
            <p>Conduite des ponts roulants et portiques de levage utilisés en ateliers et environnements industriels.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-r484" aria-label="Formation CACES R484 — ponts roulants et portiques" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-r485.jpg" alt="CACES R485 — gerbeurs à conducteur accompagnant" loading="lazy" />
            </div>
            <span className="categorie-badge">5 ans</span>
            <span className="categorie-code">R485</span>
            <h3>Gerbeurs à conducteur accompagnant</h3>
            <p>Conduite de gerbeurs accompagnants pour la manutention en entrepôt et environnements spécialisés.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-r485" aria-label="Formation CACES R485 — gerbeurs à conducteur accompagnant" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-r490.jpg" alt="CACES R490 — grues auxiliaires de chargement" loading="lazy" />
            </div>
            <span className="categorie-badge">10 ans</span>
            <span className="categorie-code">R490</span>
            <h3>Grues auxiliaires de chargement</h3>
            <p>Grues de chargement montées sur véhicules porteurs, pour le transport routier et l'approvisionnement de chantier.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-r490" aria-label="Formation CACES R490 — grues auxiliaires de chargement" />
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2.5rem", "color": "var(--gris)" }}>Pour le passage d'autres CACES® (R483 grues mobiles, R487 grues à tour…), nous consulter.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien choisir</span>
          <h2 id="titre-tableau">Quelle recommandation pour quel engin&nbsp;?</h2>
          <hr className="trait" />
          <p>Un premier repère pour identifier la formation adaptée à votre matériel. SECURIFORM affine ensuite ce choix avec vous selon vos équipements exacts.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Type d'engin</th>
                <th scope="col">Recommandation</th>
                <th scope="col">Validité</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chariot élévateur, transpalette, gerbeur porté</td>
                <td>R489</td>
                <td>5 ans</td>
              </tr>
              <tr>
                <td>Pelle, chargeuse, engin de terrassement</td>
                <td>R482-A</td>
                <td>10 ans</td>
              </tr>
              <tr>
                <td>Nacelle, plateforme élévatrice (PEMP)</td>
                <td>R486-A</td>
                <td>5 ans</td>
              </tr>
              <tr>
                <td>Pont roulant, portique</td>
                <td>R484</td>
                <td>5 ans</td>
              </tr>
              <tr>
                <td>Gerbeur à conducteur accompagnant</td>
                <td>R485</td>
                <td>5 ans</td>
              </tr>
              <tr>
                <td>Grue auxiliaire de chargement sur porteur</td>
                <td>R490</td>
                <td>5 ans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Déroulé</span>
          <h2 id="titre-etapes">Votre parcours de formation</h2>
          <hr className="trait" />
          <p>Un parcours structuré, alternant théorie et pratique, jusqu'à la certification.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Théorie</h3>
            <p>Réglementation, technologie de l'engin et prévention des risques, en salle de formation.</p>
          </div>
          <div className="etape reveal">
            <h3>Pratique</h3>
            <p>Prise en main, manœuvres progressives et mises en situation réelles sur nos terrains d'évolution.</p>
          </div>
          <div className="etape reveal">
            <h3>Tests</h3>
            <p>Évaluation théorique et pratique réalisée par un organisme testeur certifié CACES®, référencé INRS.</p>
          </div>
          <div className="etape reveal">
            <h3>Certificat</h3>
            <p>Délivrance du CACES® en cas de réussite, valable 5 ou 10 ans selon la recommandation obtenue.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Questions fréquentes</span>
          <h2 id="titre-faq">Vous vous posez des questions&nbsp;?</h2>
          <hr className="trait" />
        </div>
        <div className="faq reveal">

          <details className="faq-item">
            <summary>Comment savoir quelle formation CACES® choisir&nbsp;?</summary>
            <p>Tout dépend du type d'engin utilisé dans votre entreprise. Le tableau ci-dessus donne un premier repère ; SECURIFORM affine ensuite le choix avec vous selon le modèle exact de vos équipements et vos besoins (formation initiale ou recyclage).</p>
          </details>

          <details className="faq-item">
            <summary>Qui réalise les tests CACES®&nbsp;?</summary>
            <p>Les tests sont réalisés par un organisme testeur certifié CACES®, référencé sur la liste officielle de l'INRS, en sous-traitance. SECURIFORM assure la formation théorique et pratique ; l'organisme testeur évalue et délivre le certificat en cas de réussite.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de mon CACES®&nbsp;?</summary>
            <p>Elle varie selon la recommandation&nbsp;: 5 ans pour les chariot élévateur, transpalette, gerbeur porté (R489), les gerbeurs à conducteur accompagnant (R485), nacelle, plateforme élévatrice (R486-A), pont roulant, portique (R484), gerbeur à conducteur accompagnant (R485), grue auxiliaire de chargement sur porteur (R490) et 10 ans pour les pelle, chargeuse, engin de terrassement(R482-A). Un renouvellement anticipé, avant l'expiration, permet une formation de recyclage plus courte qu'une formation initiale complète.</p>
          </details>

          <details className="faq-item">
            <summary>CACES® et autorisation de conduite&nbsp;: quelle différence&nbsp;?</summary>
            <p>Le CACES® atteste d'une aptitude à conduire en sécurité, mais il ne suffit pas à lui seul&nbsp;: l'employeur doit également délivrer une autorisation de conduite, propre à son entreprise, tenant compte de l'aptitude médicale du salarié et de sa connaissance des lieux de travail.</p>
          </details>

          <details className="faq-item">
            <summary>Formation en centre ou directement sur site&nbsp;: que choisir&nbsp;?</summary>
            <p>Les deux formules sont possibles. Le centre SECURIFORM dispose d'un parc matériel varié et de terrains d'évolution adaptés. La formation sur site utilise vos propres équipements et convient bien aux groupes d'au moins 4 à 6 personnes sur une même catégorie.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES®</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser votre session.</p>
        </div>

        
        <form className="form-devis reveal" action={submitForm}>
          <input type="text" name="site_web" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
          <div className="form-devis-grid">
            <div className="champ">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" required />
            </div>
            <div className="champ">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" required />
            </div>
            <div className="champ">
              <label htmlFor="societe">Société</label>
              <input type="text" id="societe" name="societe" />
            </div>
            <div className="champ">
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" required />
            </div>
            <div className="champ">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="champ">
              <label htmlFor="formation">Formation souhaitée</label>
              <select id="formation" name="formation">
                <option value="R482">R482-A — Engins de chantier</option>
                <option value="R489">R489 — Chariots de manutention</option>
                <option value="R486-A">R486-A — Nacelles élévatrices</option>
                <option value="R484">R484 — Ponts roulants et portiques</option>
                <option value="R485">R485 — Gerbeurs à conducteur accompagnant</option>
                <option value="R490">R490 — Grues auxiliaires de chargement</option>
                <option value="autre">Autre / je ne sais pas encore</option>
              </select>
            </div>
            <div className="champ champ-pleine-largeur">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} />
            </div>
          </div>
          <button type="submit" className="btn btn-plein">Envoyer ma demande</button>
        </form>
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
