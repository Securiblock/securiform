import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation secourisme (SST)",
      "description": "Formation Sauveteur Secouriste du Travail : formation initiale de 14h (certificat valable 24 mois) et Maintien et Actualisation des Compétences (MAC) de 7h, tous les 24 mois.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/secourisme/"
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
          "name": "Formation secourisme (SST)",
          "item": "https://securiform.fr/secourisme/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation secourisme (SST) — SECURIFORM",
  description: "SECURIFORM est centre habilité SST : formation initiale de 14h et MAC de recyclage tous les 24 mois, partout en France.",
  alternates: { canonical: "/secourisme" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/secourisme",
    title: "Formation secourisme (SST) — SECURIFORM",
    description: "Formation initiale et MAC de recyclage Sauveteur Secouriste du Travail, avec SECURIFORM, centre habilité, partout en France.",
    images: ["/image/formation-secourisme-sst.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation secourisme (SST) — SECURIFORM",
    description: "SST : formation initiale et MAC de recyclage avec SECURIFORM, centre habilité, partout en France.",
    images: ["/image/formation-secourisme-sst.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation secourisme (SST)">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Formation secourisme (SST)</span>
        </p>
        <h1>Formation secourisme (SST)</h1>
        <p>SECURIFORM est habilitée centre de formation Sauveteur Secouriste du Travail. Formez-vous aux gestes qui sauvent avec des professionnels du secourisme.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Le SST en entreprise</span>
        <h2 id="titre-intro">Une obligation dans de nombreuses situations, une recommandation partout ailleurs</h2>
        <hr className="trait" />
        <p>Le Code du travail impose la présence d'au moins un secouriste formé dans les ateliers à travaux dangereux et sur les chantiers de 20 salariés ou plus occupés plus de 15 jours à des travaux dangereux. Au-delà de ces cas, l'INRS recommande de former 10 à 15&nbsp;% de l'effectif, quelle que soit l'activité de l'entreprise.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-parcours">
      <div className="container">
        <h2 id="titre-parcours" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Formation initiale et recyclage MAC</h2>
        <div className="formations-grid cols-2">

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-sst-initiale.jpg" alt="Formation initiale Sauveteur Secouriste du Travail" loading="lazy" />
            </div>
            <h3>Formation initiale SST</h3>
            <p>14 heures réparties sur 2 jours&nbsp;: protection, alerte, gestes de premiers secours et rôle préventif du SST. Certificat valable 24 mois.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/sst-initiale" aria-label="Formation initiale SST" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-sst-mac.jpg" alt="MAC SST — maintien et actualisation des compétences" loading="lazy" />
            </div>
            <h3>MAC SST (recyclage)</h3>
            <p>7 heures pour maintenir et actualiser ses compétences, à réaliser avant l'expiration des 24 mois de validité du certificat.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/sst-mac" aria-label="MAC SST" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-pas">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le réflexe à connaître</span>
          <h2 id="titre-pas">Le protocole Protéger – Alerter – Secourir</h2>
          <hr className="trait" />
          <p>Toute intervention de secourisme suit cette même séquence, dans cet ordre, quelle que soit la situation rencontrée.</p>
        </div>
        <div className="etapes cols-3">
          <div className="etape reveal">
            <h3>Protéger</h3>
            <p>Repérer les dangers persistants, les supprimer ou en écarter la victime, sans jamais se mettre soi-même en danger.</p>
          </div>
          <div className="etape reveal">
            <h3>Alerter</h3>
            <p>Faire alerter ou alerter directement les secours (15, 18 ou 112), en donnant une localisation précise et l'état de la victime.</p>
          </div>
          <div className="etape reveal">
            <h3>Secourir</h3>
            <p>Pratiquer les gestes adaptés à l'état de la victime, en attendant l'arrivée des secours professionnels.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Gestes essentiels</span>
          <h2 id="titre-tableau">Quelle situation, quel geste&nbsp;?</h2>
          <hr className="trait" />
          <p>Un repère synthétique&nbsp;: la formation SST permet de reconnaître ces situations et de réagir avec les bons gestes, dans le calme.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Signes</th>
                <th scope="col">Geste principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arrêt cardiaque</td>
                <td>Ne répond pas, ne respire pas</td>
                <td>Massage cardiaque et défibrillateur dès que possible</td>
              </tr>
              <tr>
                <td>Étouffement</td>
                <td>Ne peut plus parler ni tousser</td>
                <td>Claques dans le dos, puis manœuvre de Heimlich</td>
              </tr>
              <tr>
                <td>Inconscience</td>
                <td>Ne répond pas, mais respire</td>
                <td>Position latérale de sécurité (PLS)</td>
              </tr>
              <tr>
                <td>Malaise</td>
                <td>Vertiges, douleurs, difficultés à parler</td>
                <td>Mise au repos, surveillance, alerte si aggravation</td>
              </tr>
            </tbody>
          </table>
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
            <summary>La formation SST est-elle obligatoire dans mon entreprise&nbsp;?</summary>
            <p>Elle l'est dès lors que vous employez du personnel dans un atelier à travaux dangereux, ou sur un chantier de 20 salariés ou plus occupés plus de 15 jours à des travaux dangereux. En dehors de ces cas, l'INRS recommande tout de même de former 10 à 15&nbsp;% de l'effectif, quelle que soit l'activité.</p>
          </details>

          <details className="faq-item">
            <summary>Combien de salariés former dans mon entreprise&nbsp;?</summary>
            <p>À titre indicatif, l'INRS recommande environ 5 à 8 SST pour 50 salariés, et 10 à 15 pour 100 salariés, en tenant compte des rotations d'équipes, des absences et de la répartition sur plusieurs sites.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité du certificat SST&nbsp;?</summary>
            <p>Le certificat est valable 24 mois. Avant son expiration, le salarié doit suivre un MAC (Maintien et Actualisation des Compétences) de 7 heures pour prolonger sa validité de 24 mois supplémentaires.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si le recyclage MAC n'est pas fait à temps&nbsp;?</summary>
            <p>Le salarié perd son statut de SST tant qu'il n'a pas suivi de nouvelle formation. Un MAC suffit généralement en cas de retard raisonnable après expiration&nbsp;; au-delà, une formation initiale complète de 14 heures peut être nécessaire.</p>
          </details>

          <details className="faq-item">
            <summary>Le SST a-t-il un rôle en dehors des situations d'urgence&nbsp;?</summary>
            <p>Oui. Au quotidien, le SST est aussi un relais de prévention&nbsp;: il peut repérer des situations dangereuses et les signaler à sa hiérarchie, contribuant ainsi à l'amélioration continue de la sécurité dans l'entreprise.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation secourisme (SST)</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser votre session.</p>
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
              <label htmlFor="formation">Formation souhaitée</label>
              <select id="formation" name="formation">
                <option value="initiale">Formation initiale SST (14h)</option>
                <option value="mac">MAC SST — recyclage (7h)</option>
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
