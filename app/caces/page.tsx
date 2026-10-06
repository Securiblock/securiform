import type { Metadata } from "next";
import Link from "next/link";
import ComparateurCaces from "@/components/comparateur-caces";
import { submitForm } from "@/app/actions";
import CalculateurRecyclage from "@/components/calculateur-recyclage";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formations à la conduite en sécurité et CACES®",
      "description": "Préparation aux recommandations CACES® R482B (engins de chantier), R484A (ponts roulants et portiques), R485A (gerbeurs à conducteur accompagnant), R486B (nacelles élévatrices), R489A (chariots de manutention) et R490A (grues auxiliaires de chargement).",
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
  title: "Conduite en sécurité et CACES® - SECURIFORM",
  description: "SECURIFORM prépare vos équipes au CACES® : R482B, R484A, R485A, R486B, R489A et R490A. Tests réalisés par un organisme testeur certifié INRS, sur toute la moitié nord de la France.",
  alternates: { canonical: "/caces" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces",
    title: "Formations à la conduite en sécurité et CACES® - SECURIFORM",
    description: "R482B, R484A, R485A, R486B, R489A, R490A : SECURIFORM prépare vos équipes au CACES® sur toute la moitié nord de la France. Tests réalisés par un organisme testeur certifié, référencé INRS.",
    images: ["/image/formation-caces.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations à la conduite en sécurité et CACES® - SECURIFORM",
    description: "R482B, R484A, R485A, R486B, R489A, R490A : préparez vos équipes au CACES® avec SECURIFORM, sur toute la moitié nord de la France.",
    images: ["/image/formation-caces.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formations à la conduite en sécurité et CACES®" style={{ backgroundImage: "url('/image/formation-caces.webp')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Conduite en sécurité et CACES®</span>
        </p>
        <h1>Formations à la conduite en sécurité et CACES®</h1>
        <p>Formez vos équipes avec des professionnels de la formation et obtenez votre CACES® : chariots élévateurs, engins de chantier, nacelles élévatrices, ponts roulants, grues auxiliaires et gerbeurs à conducteur accompagnant.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Nos formations</span>
        <h2 id="titre-intro">6 recommandations CACES®</h2>
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
              <img src="/image/caces-R482B.webp" alt="CACES R482B : engins de chantier" loading="lazy" />
            </div>
            <span className="categorie-badge">10 ans</span>
            <span className="categorie-code">R482B</span>
            <h3>Engins de chantier</h3>
            <p>Pelles hydrauliques, chargeuses, engins de terrassement, compacteurs et chariots télescopiques utilisés dans le bâtiment, les carrières et les travaux publics.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-R482B" aria-label="Formation CACES R482B : engins de chantier" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-R489A.webp" alt="CACES R489A : chariots de manutention" loading="lazy" />
            </div>
            <span className="categorie-badge">5 ans</span>
            <span className="categorie-code">R489A</span>
            <h3>Chariots de manutention</h3>
            <p>Transpalettes, gerbeurs et chariots élévateurs en porte-à-faux, pour l'entrepôt, la logistique et la distribution.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-R489A" aria-label="Formation CACES R489A : chariots de manutention" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-R486B.webp" alt="CACES R486B : nacelles élévatrices" loading="lazy" />
            </div>
            <span className="categorie-badge">5 ans</span>
            <span className="categorie-code">R486B</span>
            <h3>Nacelles élévatrices (PEMP)</h3>
            <p>Plateformes élévatrices mobiles de personnel, pour les interventions ponctuelles en hauteur.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-R486B" aria-label="Formation CACES R486B : nacelles élévatrices" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-R484A.webp" alt="CACES R484A : ponts roulants et portiques" loading="lazy" />
            </div>
            <span className="categorie-badge">5 ans</span>
            <span className="categorie-code">R484A</span>
            <h3>Ponts roulants et portiques</h3>
            <p>Ponts roulants et portiques de levage utilisés en ateliers et environnements industriels.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-R484A" aria-label="Formation CACES R484A : ponts roulants et portiques" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-R485A.webp" alt="CACES R485A : gerbeurs à conducteur accompagnant" loading="lazy" />
            </div>
            <span className="categorie-badge">5 ans</span>
            <span className="categorie-code">R485A</span>
            <h3>Gerbeurs à conducteur accompagnant</h3>
            <p>Gerbeurs accompagnants pour la manutention en entrepôts et environnements spécialisés.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-R485A" aria-label="Formation CACES R485A : gerbeurs à conducteur accompagnant" />
          </article>

          <article className="categorie-card reveal">
            <div className="categorie-photo">
              <img src="/image/caces-R490A.webp" alt="CACES R490A : grues auxiliaires de chargement" loading="lazy" />
            </div>
            <span className="categorie-badge">5 ans</span>
            <span className="categorie-code">R490A</span>
            <h3>Grues auxiliaires de chargement</h3>
            <p>Grues de chargement embarquées sur véhicules porteurs, pour le transport routier et l'approvisionnement de chantier.</p>
            <span className="lien">En savoir +</span>
            <Link className="card-cover" href="/caces-R490A" aria-label="Formation CACES R490A : grues auxiliaires de chargement" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" id="comparateur" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien choisir</span>
          <h2 id="titre-tableau">Quelle recommandation pour quel engin&nbsp;?</h2>
          <hr className="trait" />
          <p>Engins concernés, durée de formation et validité des 6 CACES® en un coup d'œil. SECURIFORM affine ensuite ce choix avec vous selon vos équipements exacts.</p>
        </div>
        <div className="reveal">
          <ComparateurCaces />
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
            <p>Prise en main, manœuvres progressives et mises en situation réelles sur aire d'évolution.</p>
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
            <p>Les tests sont réalisés par un organisme testeur certifié CACES®, référencé sur la liste officielle de l'INRS, en sous-traitance.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de mon CACES®&nbsp;?</summary>
            <p>Elle varie selon la recommandation&nbsp;: 5 ans pour les chariots élévateurs relevant de la recommandation R489A, les gerbeurs à conducteur accompagnant (R485A), les plateformes élévatrices (R486B), les ponts roulants et portiques (R484A) et les grues auxiliaires de chargement (R490A)&nbsp;; 10 ans pour tous les engins de chantier relevant de la R482B.</p>
          </details>

          <details className="faq-item">
            <summary>CACES® et autorisation de conduite&nbsp;: quelle différence&nbsp;?</summary>
            <p>Le CACES® atteste d'une aptitude à conduire en sécurité, mais il ne suffit pas à lui seul&nbsp;: l'employeur doit également délivrer une autorisation de conduite, propre à son entreprise, tenant compte de l'absence de contre-indication médicale du salarié et de sa connaissance des lieux de travail.</p>
          </details>

          <details className="faq-item">
            <summary>Combien de temps dure une formation CACES®&nbsp;?</summary>
            <p>Cela dépend de la recommandation, du nombre de catégories et de l'expérience des stagiaires&nbsp;: une formation initiale dure de 1 à 5 jours, un recyclage de 0.5 à 2 jours. Le détail pour chaque CACES® figure dans notre <a href="#comparateur">comparateur</a> et sur la page de chaque recommandation.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<CalculateurRecyclage formation="caces" />

    

<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES®</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe vous recontacte dans l'heure pour organiser votre session.</p>
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
                <option value="R482B">R482B : Engins de chantier</option>
                <option value="R489A">R489A : Chariots de manutention</option>
                <option value="R486B">R486B : Nacelles élévatrices</option>
                <option value="R484A">R484A : Ponts roulants et portiques</option>
                <option value="R485A">R485A : Gerbeurs à conducteur accompagnant</option>
                <option value="R490A">R490A : Grues auxiliaires de chargement</option>
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
          <p>Afin de renforcer l'équipe <strong>SECURIFORM</strong>, nous recrutons des formateurs sur toute la moitié nord de la France.</p>
        </div>
        <Link className="btn btn-plein" href="/nous-recrutons">En savoir +</Link>
      </div>
    </section>


    

    
<section className="cta" aria-labelledby="titre-contact">
      <div className="container reveal">
        <h2 id="titre-contact">Vous avez une question&nbsp;?</h2>
        <p>Notre équipe vous répond dans l'heure et s'assure de l'adéquation de nos formations aux risques de votre entreprise.</p>
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
            <div className="vgp-boutons">
              <Link className="btn btn-blanc" href="/vgp">Découvrir les VGP</Link>
              <Link className="btn btn-contour" href="/vgp#checklist">Ma checklist VGP</Link>
            </div>
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
