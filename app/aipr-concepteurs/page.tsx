import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation concepteurs AIPR",
      "description": "Formation à la gestion du Guichet Unique, à l'analyse des réponses DT, aux investigations complémentaires et à la rédaction des clauses DCE, pour les maîtres d'ouvrage et maîtres d'œuvre pilotant un projet à proximité des réseaux.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/formations-aipr/formation-concepteurs-aipr/"
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation concepteurs AIPR",
          "item": "https://securiform.fr/accueil/formations-aipr/formation-concepteurs-aipr/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation concepteurs AIPR — Guichet Unique, DCE, investigations complémentaires — SECURIFORM",
  description: "Formation SECURIFORM concepteurs AIPR : Guichet Unique, analyse des réponses DT, investigations complémentaires, clauses DCE, vérification des compétences. Pour maîtres d'ouvrage et maîtres d'œuvre.",
  alternates: { canonical: "/aipr-concepteurs" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/aipr-concepteurs",
    title: "Formation concepteurs AIPR — SECURIFORM",
    description: "Guichet Unique, investigations complémentaires, clauses DCE : formation SECURIFORM concepteurs AIPR.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation concepteurs AIPR — SECURIFORM",
    description: "Formez vos maîtres d'ouvrage et maîtres d'œuvre à piloter un projet en conformité AIPR, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation concepteurs AIPR">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/aipr">Formations AIPR</Link>
          <span aria-hidden="true">›</span>
          <span>Concepteurs</span>
        </p>
        <h1>Formation concepteurs AIPR</h1>
        <p>Pour les bureaux d'études, maîtres d'ouvrage et maîtres d'œuvre&nbsp;: piloter un projet de travaux en conformité, du Guichet Unique jusqu'à la réception.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-guichet">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-guichet">Le Guichet Unique, point de départ de tout projet</h2>
        <hr className="trait" />
        <p>Avant tout projet susceptible d'affecter des réseaux, le concepteur dépose sa Déclaration de Travaux (DT) sur la plateforme du Guichet Unique. Cette démarche notifie automatiquement tous les exploitants concernés, qui disposent ensuite d'un délai légal pour répondre&nbsp;: généralement 9 jours ouvrés pour les réseaux sensibles, 15 jours pour les autres. Chaque réponse précise la position des réseaux, leur classe de précision et les recommandations à respecter.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-ic">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Un point technique clé</span>
          <h2 id="titre-ic">Quand commander des investigations complémentaires (IC)&nbsp;?</h2>
          <hr className="trait" />
          <p>Les investigations complémentaires précisent la position réelle d'un réseau quand l'incertitude est trop grande. L'article R.554-23 du Code de l'environnement en définit les conditions.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">IC obligatoires&nbsp;?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Réseau sensible en classe B ou C, avec terrassement mécanisé</td>
                <td>Oui</td>
              </tr>
              <tr>
                <td>Réseau déjà en classe A</td>
                <td>Non, dispensé</td>
              </tr>
              <tr>
                <td>Travaux sans tranchée (forage dirigé)</td>
                <td>Non, dispensé</td>
              </tr>
              <tr>
                <td>Hors zone urbaine, réseau non sensible</td>
                <td>Non, dispensé</td>
              </tr>
              <tr>
                <td>Surface terrassée inférieure à 100 m²</td>
                <td>Non, dispensé (seuil de minimis)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-financement">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui paie quoi</span>
          <h2 id="titre-financement">Le financement des investigations complémentaires</h2>
          <hr className="trait" />
          <p>Un sujet fréquent de désaccord entre responsable de projet et exploitant&nbsp;: la répartition est pourtant clairement fixée par la réglementation.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Répartition du financement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Réseau en classe B</td>
                <td>50&nbsp;% responsable de projet, 50&nbsp;% exploitant</td>
              </tr>
              <tr>
                <td>Réseau en classe C dès le départ</td>
                <td>100&nbsp;% à la charge du responsable de projet</td>
              </tr>
              <tr>
                <td>Réseau annoncé en classe B, déclassé en C lors des IC</td>
                <td>100&nbsp;% à la charge de l'exploitant</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Cette distinction protège le responsable de projet contre un exploitant qui aurait mal évalué la fiabilité de ses propres plans.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-dce">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Transmettre l'information</span>
          <h2 id="titre-dce">Les clauses essentielles du DCE</h2>
          <hr className="trait" />
          <p>Le concepteur ne se contente pas de recueillir les informations sur les réseaux&nbsp;: il doit aussi les transmettre correctement à l'entreprise exécutante via le Dossier de Consultation des Entreprises.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Plans à jour</h3>
            <p>Intégrer les plans de réseaux avec leur classe de précision, remplacés par les plans classe A si des IC ont été réalisées.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>AIPR du personnel</h3>
            <p>Exiger explicitement que tout intervenant (opérateur, encadrant) soit titulaire d'une AIPR en cours de validité.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Marquage et piquetage</h3>
            <p>Préciser qui commande le marquage et comment il doit être protégé pendant toute la durée du chantier.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Procédure d'anomalie</h3>
            <p>Rappeler la règle des 4A et les délais de notification au maître d'ouvrage en cas d'incident.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-verification">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Avant et après le chantier</span>
          <h2 id="titre-verification">Vérifier les compétences, puis clore le projet</h2>
          <p>Avant le démarrage, le concepteur doit s'assurer que chaque opérateur et encadrant intervenant possède une AIPR valide, et conserver ces justificatifs dans le dossier de projet. Un accident impliquant du personnel non habilité peut engager la responsabilité du maître d'ouvrage s'il n'a pas effectué cette vérification.</p>
          <p>À l'issue des travaux, si le projet a créé de nouveaux réseaux, le concepteur fait réaliser leur géo-référencement en classe A et transmet les plans à la collectivité et au futur exploitant&nbsp;: c'est le récolement, dernière étape de la conformité AIPR.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Vérifier les AIPR de tout le personnel avant le démarrage</li>
            <li><span className="puce" aria-hidden="true">✓</span> Conserver les justificatifs dans le dossier de projet</li>
            <li><span className="puce" aria-hidden="true">✓</span> Faire géo-référencer les nouveaux réseaux en fin de chantier</li>
          </ul>
        </aside>
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
            <summary>Que faire si un exploitant ne répond pas à ma DT&nbsp;?</summary>
            <p>Il faut le relancer&nbsp;: le délai légal de réponse déclenché par le récépissé de DT s'impose à l'exploitant, et son silence ne dispense pas de la vigilance nécessaire avant travaux.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je me passer d'investigations complémentaires pour aller plus vite&nbsp;?</summary>
            <p>Non, si les conditions les rendent obligatoires (réseau sensible en classe B ou C avec terrassement mécanisé). S'en dispenser expose à une responsabilité civile et pénale en cas d'accident.</p>
          </details>

          <details className="faq-item">
            <summary>Comment obtenir l'AIPR profil Concepteur&nbsp;?</summary>
            <p>Par la réussite du QCM (40 questions, 60 minutes, seuil de 60&nbsp;%), ou dans certains cas par un diplôme de moins de 5 ans intégrant les compétences AIPR. L'attestation est valable 5 ans.</p>
          </details>

          <details className="faq-item">
            <summary>Suis-je responsable si l'entreprise exécutante emploie du personnel sans AIPR&nbsp;?</summary>
            <p>Vous engagez votre responsabilité si vous n'avez pas vérifié les AIPR avant le démarrage des travaux. C'est pourquoi cette vérification doit être documentée et conservée dans le dossier de projet.</p>
          </details>

          <details className="faq-item">
            <summary>Et pour le pilotage opérationnel du chantier&nbsp;?</summary>
            <p>C'est le rôle de l'Encadrant AIPR, qui applique sur le terrain les prescriptions que vous avez intégrées au DCE&nbsp;: retrouvez le détail sur notre page Formations AIPR.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation concepteurs AIPR</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser votre session.</p>
        </div>

        
        <form className="form-devis reveal" action="#" method="post">
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
              <label htmlFor="effectif">Nombre de personnes à former</label>
              <input type="number" id="effectif" name="effectif" min="1" />
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
