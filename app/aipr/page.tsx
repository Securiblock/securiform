import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formations AIPR",
      "description": "Préparation aux trois niveaux d'Autorisation d'Intervention à Proximité des Réseaux : Opérateur, Encadrant et Concepteur, conformément à la réglementation DT-DICT.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/formations-aipr/"
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
          "name": "Formations AIPR",
          "item": "https://securiform.fr/accueil/formations-aipr/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formations AIPR — SECURIFORM",
  description: "SECURIFORM prépare aux trois niveaux d'Autorisation d'Intervention à Proximité des Réseaux : Opérateur, Encadrant, Concepteur. Attestation valable 5 ans, conforme à la réglementation DT-DICT, partout en France.",
  alternates: { canonical: "/aipr" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/aipr",
    title: "Formations AIPR — SECURIFORM",
    description: "Opérateur, Encadrant, Concepteur : SECURIFORM prépare vos équipes à l'AIPR partout en France.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations AIPR — SECURIFORM",
    description: "Opérateur, Encadrant, Concepteur : préparez vos équipes à l'AIPR avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formations AIPR">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Formations AIPR</span>
        </p>
        <h1>Formations AIPR</h1>
        <p>Formez-vous avec des professionnels à l'Autorisation d'Intervention à Proximité des Réseaux, obligatoire depuis 2018 pour tout chantier à proximité de réseaux enterrés ou aériens.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Une obligation DT-DICT</span>
        <h2 id="titre-intro">Trois niveaux, pour trois rôles sur le chantier</h2>
        <hr className="trait" />
        <p>Depuis le 1ᵉʳ janvier 2018, l'AIPR est obligatoire pour tout intervenant sur un chantier à proximité de réseaux enterrés ou aériens, sensibles (gaz, électricité) ou non (eau, assainissement, télécommunications). Chaque profil de poste correspond à un niveau précis&nbsp;: Opérateur, Encadrant ou Concepteur.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-parcours">
      <div className="container">
        <h2 id="titre-parcours" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Les trois niveaux AIPR</h2>
        <div className="formations-grid cols-3">

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-aipr-operateur.jpg" alt="Formation AIPR Opérateur" loading="lazy" />
            </div>
            <h3>Opérateur</h3>
            <p>Pour les conducteurs d'engins, opérateurs de nacelles et grues, canalisateurs et ouvriers réalisant des fouilles à proximité des réseaux.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/aipr-operateurs" aria-label="Formation opérateurs AIPR" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-aipr-encadrant.jpg" alt="Formation AIPR Encadrant" loading="lazy" />
            </div>
            <h3>Encadrant</h3>
            <p>Pour les chefs de chantier, conducteurs de travaux et chefs d'équipe qui préparent et supervisent les interventions à proximité des réseaux.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/aipr-encadrants" aria-label="Formation encadrants AIPR" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-aipr-concepteur.jpg" alt="Formation AIPR Concepteur" loading="lazy" />
            </div>
            <h3>Concepteur</h3>
            <p>Pour les bureaux d'études, maîtres d'ouvrage et maîtres d'œuvre qui pilotent un projet de travaux, de sa conception à la réception.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/aipr-concepteurs" aria-label="Formation concepteurs AIPR" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-tableau">Quel niveau pour quel poste&nbsp;?</h2>
          <hr className="trait" />
          <p>Un repère pour identifier rapidement le niveau AIPR correspondant à chaque fonction sur un chantier.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Niveau</th>
                <th scope="col">Postes concernés</th>
                <th scope="col">Rôle principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Opérateur</td>
                <td>Conducteurs d'engins, canalisateurs, ouvriers de terrassement</td>
                <td>Intervenir directement à proximité des réseaux</td>
              </tr>
              <tr>
                <td>Encadrant</td>
                <td>Chefs de chantier, conducteurs de travaux, chefs d'équipe</td>
                <td>Préparer et superviser les interventions</td>
              </tr>
              <tr>
                <td>Concepteur</td>
                <td>Bureaux d'études, maîtres d'ouvrage, maîtres d'œuvre</td>
                <td>Piloter le projet de la conception à la réception</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le réflexe à connaître</span>
          <h2 id="titre-etapes">La règle des 4A face à une anomalie</h2>
          <hr className="trait" />
          <p>En cas de découverte d'un réseau non signalé ou d'un dommage accidentel, cette procédure normalisée s'applique dans cet ordre.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Arrêter</h3>
            <p>Stopper immédiatement les travaux dès la découverte d'une anomalie ou d'un endommagement.</p>
          </div>
          <div className="etape reveal">
            <h3>Alerter</h3>
            <p>Prévenir l'exploitant du réseau concerné ainsi que sa hiérarchie sur le chantier.</p>
          </div>
          <div className="etape reveal">
            <h3>Aménager</h3>
            <p>Sécuriser la zone pour éviter tout suraccident, sans tenter de réparer soi-même le réseau.</p>
          </div>
          <div className="etape reveal">
            <h3>Afficher</h3>
            <p>Baliser visiblement la zone concernée en attendant l'intervention de l'exploitant.</p>
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
            <summary>L'AIPR est-elle vraiment obligatoire pour mon entreprise&nbsp;?</summary>
            <p>Oui, dès lors que vos équipes interviennent sur un chantier à proximité de réseaux enterrés, aériens ou subaquatiques, qu'ils soient sensibles (gaz, électricité) ou non (eau, télécommunications). L'obligation s'applique aux opérateurs depuis 2019 et aux encadrants/concepteurs depuis 2018.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de l'attestation AIPR&nbsp;?</summary>
            <p>Elle est valable 5 ans, quel que soit le niveau (Opérateur, Encadrant, Concepteur). Elle peut être portée à 10 ans pour les titulaires d'un CACES R482 intégrant l'option IPR.</p>
          </details>

          <details className="faq-item">
            <summary>Comment se déroule l'examen AIPR&nbsp;?</summary>
            <p>Il s'agit d'un questionnaire à choix multiples&nbsp;: 30 questions pour les Opérateurs, 40 questions pour les Encadrants et Concepteurs, tirées d'une base nationale de 255 questions. Le seuil de réussite est fixé à 60&nbsp;% de bonnes réponses.</p>
          </details>

          <details className="faq-item">
            <summary>Comment renouveler mon AIPR avant son expiration&nbsp;?</summary>
            <p>Il suffit de suivre un stage de mise à niveau, qui actualise vos connaissances sur la réglementation DT-DICT et les évolutions techniques, puis de repasser l'examen QCM correspondant à votre niveau.</p>
          </details>

          <details className="faq-item">
            <summary>Quel est le lien entre l'attestation et l'AIPR délivrée par l'employeur&nbsp;?</summary>
            <p>L'attestation de compétences obtenue en formation ne suffit pas seule&nbsp;: c'est l'employeur qui délivre ensuite l'autorisation d'intervention proprement dite, sur la base de cette attestation.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation AIPR</h2>
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
              <label htmlFor="formation">Niveau souhaité</label>
              <select id="formation" name="formation">
                <option value="operateur">Opérateur</option>
                <option value="encadrant">Encadrant</option>
                <option value="concepteur">Concepteur</option>
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
