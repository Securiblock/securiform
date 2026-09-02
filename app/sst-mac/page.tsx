import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "MAC SST — Maintien et Actualisation des Compétences",
      "description": "Recyclage obligatoire de 7 heures pour les Sauveteurs Secouristes du Travail, à réaliser tous les 24 mois avant l'expiration du certificat initial, couvrant la révision des acquis, l'actualisation des compétences et l'évaluation du maintien des acquis.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/sst-mac/"
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
          "name": "Secourisme (SST)",
          "item": "https://securiform.fr/secourisme/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MAC SST",
          "item": "https://securiform.fr/sst-mac/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Recyclage MAC SST — SECURIFORM",
  description: "Recyclage MAC SST avec SECURIFORM : 7h pour maintenir vos compétences, tous les 24 mois avant expiration du certificat.",
  alternates: { canonical: "/sst-mac" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/sst-mac",
    title: "MAC SST — Recyclage Sauveteur Secouriste du Travail — SECURIFORM",
    description: "7 heures pour maintenir vos compétences SST à jour, avant l'expiration de votre certificat. Avec SECURIFORM, centre habilité INRS.",
    images: ["/image/formation-sst-mac.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAC SST — SECURIFORM",
    description: "Renouvelez votre certificat SST avec le recyclage MAC, avec SECURIFORM.",
    images: ["/image/formation-sst-mac.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="MAC SST — recyclage">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/secourisme">Secourisme (SST)</Link>
          <span aria-hidden="true">›</span>
          <span>MAC SST</span>
        </p>
        <h1>MAC SST — Recyclage Sauveteur Secouriste du Travail</h1>
        <p>7 heures pour maintenir vos réflexes à jour et prolonger votre certificat SST de 24 mois supplémentaires.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-pourquoi">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-pourquoi">Pourquoi un recyclage est nécessaire</h2>
        <hr className="trait" />
        <p>Les compétences en secourisme se dégradent rapidement sans pratique régulière&nbsp;: les gestes s'oublient, la confiance en situation réelle diminue, et les protocoles évoluent avec le temps. Le MAC (Maintien et Actualisation des Compétences) répond à ces trois enjeux en une seule session de 7 heures, généralement réalisée en une journée.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-contenu">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que couvre la journée</span>
          <h2 id="titre-contenu">Le MAC en trois temps</h2>
          <hr className="trait" />
        </div>
        <div className="etapes cols-3">
          <div className="etape reveal">
            <h3>Réviser les acquis</h3>
            <p>Retour d'expérience sur les situations rencontrées depuis la dernière formation, rappel des gestes essentiels et de leurs points de vigilance.</p>
          </div>
          <div className="etape reveal">
            <h3>Actualiser ses compétences</h3>
            <p>Découverte des évolutions de protocoles, des nouveaux équipements (défibrillateurs récents) et de cas pratiques adaptés aux risques actuels de l'entreprise.</p>
          </div>
          <div className="etape reveal">
            <h3>Valider le maintien des acquis</h3>
            <p>Mise en situation pratique et validation des gestes techniques, condition du renouvellement du certificat.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-delais">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le point à ne pas manquer</span>
          <h2 id="titre-delais">Anticiper l'échéance</h2>
          <hr className="trait" />
          <p>Le MAC doit être réalisé avant l'expiration du certificat, tous les 24 mois maximum. En pratique, il est recommandé de le planifier 2 à 3 mois avant l'échéance, pour éviter toute rupture de couverture SST dans l'entreprise.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Ce qu'il faut faire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MAC réalisé avant l'expiration du certificat</td>
                <td>Recyclage de 7 heures, certificat prolongé de 24 mois</td>
              </tr>
              <tr>
                <td>Certificat expiré depuis moins de 24 mois</td>
                <td>Un simple MAC de 7 heures suffit encore à régulariser la situation</td>
              </tr>
              <tr>
                <td>Certificat expiré depuis 24 mois ou plus</td>
                <td>La formation initiale complète de 14 heures doit être repassée en totalité</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-consequences">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui est en jeu</span>
          <h2 id="titre-consequences">Les conséquences d'un recyclage manqué</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Perte du statut SST</h3>
            <p>Le salarié n'est plus reconnu officiellement comme Sauveteur Secouriste du Travail au sein de l'entreprise.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Non-conformité</h3>
            <p>L'entreprise peut ne plus respecter ses obligations légales de couverture en secouristes formés.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Responsabilité engagée</h3>
            <p>En cas d'accident, l'absence de SST à jour peut aggraver la responsabilité juridique de l'employeur.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-gestion">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Un conseil pratique</span>
          <h2 id="titre-gestion">Tenir un registre de vos SST</h2>
          <p>Pour ne jamais être pris de court, il est recommandé de tenir un registre recensant l'identité de chaque SST, ses dates de formation initiale et de MAC, ainsi que la date d'échéance de son certificat. Une alerte 2 à 3 mois avant chaque échéance permet de planifier sereinement les sessions, d'anticiper le budget formation et de prévoir les remplacements en cas de départ d'un SST.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À suivre dans votre registre">
          <h3>À suivre dans votre registre</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Identité des SST formés et en cours de validité</li>
            <li><span className="puce" aria-hidden="true">✓</span> Dates de formation initiale et de MAC</li>
            <li><span className="puce" aria-hidden="true">✓</span> Dates d'échéance des recyclages</li>
            <li><span className="puce" aria-hidden="true">✓</span> Organismes de formation utilisés</li>
          </ul>
        </aside>
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
            <summary>Combien de temps dure le MAC SST&nbsp;?</summary>
            <p>7 heures minimum, généralement réalisées en une seule journée. Certains organismes peuvent proposer une durée plus longue selon les besoins constatés.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je faire mon MAC un peu avant l'échéance de mon certificat&nbsp;?</summary>
            <p>Oui, c'est même recommandé&nbsp;: réaliser le MAC 2 à 3 mois avant l'expiration évite toute rupture de couverture SST et laisse une marge en cas d'imprévu de planning.</p>
          </details>

          <details className="faq-item">
            <summary>J'ai oublié mon recyclage, mon certificat a expiré depuis un an&nbsp;: que dois-je faire&nbsp;?</summary>
            <p>Puisque le retard reste inférieur à 24 mois, un simple MAC de 7 heures suffit à régulariser votre situation. Passé ce délai, la formation initiale complète de 14 heures redevient nécessaire.</p>
          </details>

          <details className="faq-item">
            <summary>Le contenu du MAC est-il toujours le même d'une session à l'autre&nbsp;?</summary>
            <p>Non, il s'adapte aux évolutions récentes des protocoles et des équipements, ainsi qu'aux retours d'expérience des stagiaires depuis leur dernière formation.</p>
          </details>

          <details className="faq-item">
            <summary>Et si je n'ai jamais suivi la formation initiale&nbsp;?</summary>
            <p>Le MAC ne s'adresse qu'aux titulaires d'un certificat SST existant. Sans formation initiale préalable, c'est notre formation initiale SST de 14 heures qu'il faut suivre en premier lieu.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer un recyclage MAC SST</h2>
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
              <label htmlFor="echeance">Date d'expiration du certificat (si connue)</label>
              <input type="date" id="echeance" name="echeance" />
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
