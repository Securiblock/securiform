import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formations spécifiques",
      "description": "Formations sur mesure adaptées à des équipements et risques spécifiques : conduite de tondeuses auto-portées, utilisation de tronçonneuse thermique à chaîne, conduite de balayeuses routières, sensibilisation aux gestes qui sauvent.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces-copy/"
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
          "name": "Formations spécifiques",
          "item": "https://securiform.fr/caces-copy/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formations spécifiques — SECURIFORM",
  description: "SECURIFORM propose des formations spécifiques et sur mesure : conduite de tondeuses auto-portées, utilisation de tronçonneuse thermique, conduite de balayeuses routières, sensibilisation aux gestes qui sauvent. Partout en France.",
  alternates: { canonical: "/formations-specifiques" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/formations-specifiques",
    title: "Formations spécifiques — SECURIFORM",
    description: "Tondeuses auto-portées, tronçonneuse thermique, balayeuses routières, gestes qui sauvent : des formations sur mesure avec SECURIFORM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations spécifiques — SECURIFORM",
    description: "Des formations sur mesure, adaptées aux équipements et aux risques propres à votre entreprise.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formations spécifiques">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Formations spécifiques</span>
        </p>
        <h1>Formations spécifiques</h1>
        <p>Un équipement ou un risque qui ne rentre dans aucune case&nbsp;? SECURIFORM conçoit des formations sur mesure, adaptées à votre matériel et à votre activité.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Au-delà du catalogue standard</span>
        <h2 id="titre-intro">Des formations pensées pour vos équipements précis</h2>
        <hr className="trait" />
        <p>Toutes les activités ne rentrent pas dans les grandes catégories réglementaires. SECURIFORM développe des formations ciblées sur des équipements ou des situations particulières, avec la même exigence pédagogique que le reste de son catalogue.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-parcours">
      <div className="container">
        <h2 id="titre-parcours" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Nos formations spécifiques</h2>
        <div className="formations-grid">

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-tondeuse.jpg" alt="Conduite en sécurité de tondeuses auto-portées" loading="lazy" />
            </div>
            <h3>Tondeuses auto-portées</h3>
            <p>Conduite en sécurité des tondeuses auto-portées utilisées pour l'entretien de grands espaces verts.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/tondeuses-autoportees" aria-label="Conduite en sécurité de tondeuses auto-portées" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-tronconneuse.jpg" alt="Utilisation en sécurité d'une tronçonneuse thermique à chaîne" loading="lazy" />
            </div>
            <h3>Tronçonneuse thermique</h3>
            <p>Utilisation en sécurité d'une tronçonneuse thermique à chaîne&nbsp;: prise en main, entretien et bonnes pratiques de coupe.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/tronconneuse-thermique" aria-label="Utilisation en sécurité d'une tronçonneuse thermique à chaîne" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-balayeuse.jpg" alt="Conduite en sécurité de balayeuses routières" loading="lazy" />
            </div>
            <h3>Balayeuses routières</h3>
            <p>Conduite en sécurité des balayeuses routières, pour l'entretien de la voirie et des espaces publics.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/balayeuses-routieres" aria-label="Conduite en sécurité de balayeuses routières" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-gestes-qui-sauvent.jpg" alt="Sensibilisation aux gestes qui sauvent" loading="lazy" />
            </div>
            <h3>Gestes qui sauvent</h3>
            <p>Une sensibilisation accessible à tous aux gestes de premiers secours essentiels, sans prérequis.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/gestes-qui-sauvent" aria-label="Sensibilisation aux gestes qui sauvent" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre besoin, notre méthode</span>
          <h2 id="titre-etapes">Comment naît une formation sur mesure</h2>
          <hr className="trait" />
          <p>Que votre besoin concerne un équipement précis ou un risque propre à votre activité, la démarche reste la même.</p>
        </div>
        <div className="etapes cols-3">
          <div className="etape reveal">
            <h3>Échange</h3>
            <p>Nous prenons le temps de comprendre votre matériel, votre activité et les risques réellement rencontrés par vos équipes.</p>
          </div>
          <div className="etape reveal">
            <h3>Conception</h3>
            <p>Nous construisons un programme théorique et pratique adapté, avec des mises en situation représentatives de votre quotidien.</p>
          </div>
          <div className="etape reveal">
            <h3>Formation</h3>
            <p>La session se déroule en centre ou directement sur votre site, avec votre matériel si besoin, puis fait l'objet d'une évaluation.</p>
          </div>
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
            <summary>Mon équipement ne figure pas dans votre liste, pouvez-vous quand même m'aider&nbsp;?</summary>
            <p>Très probablement. Les formations présentées ici sont des exemples&nbsp;: contactez-nous avec le détail de votre matériel et de votre activité, nous vous dirons rapidement si nous pouvons construire une session adaptée.</p>
          </details>

          <details className="faq-item">
            <summary>Une formation sur mesure coûte-t-elle plus cher qu'une formation standard&nbsp;?</summary>
            <p>Le tarif dépend surtout du temps de conception et du nombre de participants, pas du simple fait qu'elle soit "spécifique". Nous vous transmettons un devis clair avant toute confirmation.</p>
          </details>

          <details className="faq-item">
            <summary>Pouvez-vous former directement sur mon site, avec mon propre matériel&nbsp;?</summary>
            <p>Oui, c'est même souvent recommandé pour ce type de formation&nbsp;: vos équipes s'entraînent directement sur les équipements et dans les conditions qu'elles rencontreront au quotidien.</p>
          </details>

          <details className="faq-item">
            <summary>La sensibilisation aux gestes qui sauvent remplace-t-elle une formation SST&nbsp;?</summary>
            <p>Non. Il s'agit d'une sensibilisation courte et accessible à tous, utile pour diffuser les bons réflexes largement dans l'entreprise. Pour un statut de Sauveteur Secouriste du Travail reconnu, la formation SST complète reste nécessaire.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Décrivez-nous votre besoin</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour étudier votre demande.</p>
        </div>

        
        <form className="form-devis reveal" action={submitForm}>
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
              <label htmlFor="formation">Votre besoin</label>
              <select id="formation" name="formation">
                <option value="tondeuse">Tondeuse auto-portée</option>
                <option value="tronconneuse">Tronçonneuse thermique</option>
                <option value="balayeuse">Balayeuse routière</option>
                <option value="gestes">Sensibilisation gestes qui sauvent</option>
                <option value="autre">Autre équipement / besoin spécifique</option>
              </select>
            </div>
            <div className="champ champ-pleine-largeur">
              <label htmlFor="message">Décrivez votre équipement ou votre besoin</label>
              <textarea id="message" name="message" rows={4} />
            </div>
          </div>
          <button type="submit" className="btn btn-plein">Envoyer ma demande</button>
        </form>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-recrute">
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
