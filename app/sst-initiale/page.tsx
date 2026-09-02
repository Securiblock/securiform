import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation initiale SST",
      "description": "Formation initiale Sauveteur Secouriste du Travail, 14 heures sur 2 jours, couvrant le cadre légal, le programme en 10 modules du référentiel INRS, l'évaluation certificative et le rôle préventif du SST. Certificat valable 24 mois.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/sst-initiale/"
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
          "name": "Formation initiale SST",
          "item": "https://securiform.fr/sst-initiale/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation initiale SST — SECURIFORM",
  description: "Formation initiale SST avec SECURIFORM : cadre légal, programme en 10 modules, évaluation. 14h sur 2 jours, certificat valable 24 mois.",
  alternates: { canonical: "/sst-initiale" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/sst-initiale",
    title: "Formation initiale SST — SECURIFORM",
    description: "Cadre légal, programme en 10 modules, rôle préventif du SST : formation initiale SST avec SECURIFORM, 14h, certificat valable 24 mois.",
    images: ["/image/formation-sst-initiale.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation initiale SST — SECURIFORM",
    description: "Devenez Sauveteur Secouriste du Travail avec SECURIFORM, centre habilité INRS.",
    images: ["/image/formation-sst-initiale.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation initiale SST">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/secourisme">Secourisme (SST)</Link>
          <span aria-hidden="true">›</span>
          <span>Formation initiale</span>
        </p>
        <h1>Formation initiale SST</h1>
        <p>Devenez Sauveteur Secouriste du Travail&nbsp;: cadre légal, programme complet en 10 modules et rôle préventif au sein de votre entreprise.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-cadre">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-cadre">Une obligation légale, parfois absolue</h2>
        <hr className="trait" />
        <p>L'article R4224-15 du Code du travail impose la présence d'au moins un secouriste formé dans les ateliers où sont accomplis des travaux dangereux, ainsi que sur les chantiers employant 20 travailleurs ou plus pendant 15 jours et davantage, dès lors que des travaux dangereux y sont réalisés. Au-delà de ces cas stricts, l'article L4121-1 impose à tout employeur une obligation générale de sécurité, qui l'amène à évaluer ses propres besoins selon ses risques, sa taille et son éloignement des secours. L'INRS recommande, pour toute entreprise, de former 10 à 15&nbsp;% de l'effectif.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-obligation">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-obligation">Obligation absolue ou recommandation&nbsp;?</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Atelier avec travaux dangereux (machines, produits chimiques, hauteur, énergie)</td>
                <td>Obligation absolue</td>
              </tr>
              <tr>
                <td>Chantier de 20 travailleurs ou plus, pendant 15 jours ou davantage, avec travaux dangereux</td>
                <td>Obligation absolue</td>
              </tr>
              <tr>
                <td>Toute autre entreprise, quelle que soit sa taille</td>
                <td>Recommandation INRS&nbsp;: 10 à 15&nbsp;% de l'effectif</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>À titre indicatif, cela représente environ 5 à 8 SST pour 50 salariés, ou 10 à 15 SST pour 100 salariés, en tenant compte des rotations d'équipes et des absences.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que couvre le stage</span>
          <h2 id="titre-programme">Un programme structuré en 10 modules</h2>
          <hr className="trait" />
          <p>Le référentiel INRS organise la formation initiale autour de modules progressifs, du rôle du SST jusqu'aux gestes de secours proprement dits.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Module</th>
                <th scope="col">Contenu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Module 1</td>
                <td>Situer le rôle du SST dans l'organisation de la prévention de l'entreprise</td>
              </tr>
              <tr>
                <td>Module 2</td>
                <td>Protéger&nbsp;: reconnaître les risques persistants et supprimer ou isoler le danger</td>
              </tr>
              <tr>
                <td>Module 3</td>
                <td>Examiner la victime selon un ordre déterminé et faire alerter les secours</td>
              </tr>
              <tr>
                <td>Modules 4 à 10</td>
                <td>Secourir selon la situation rencontrée&nbsp;: étouffement, saignement, brûlure, plaie, malaise, inconscience, arrêt cardiaque</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Retrouvez le détail des gestes de premiers secours (protocole PAS, arrêt cardiaque, PLS, étouffement) sur notre page Secourisme (SST).</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-modalites">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Comment ça se déroule</span>
          <h2 id="titre-modalites">14 heures, en groupe restreint</h2>
          <p>La formation se déroule sur 2 jours consécutifs de 7 heures chacun, en groupe restreint pour garantir un temps de pratique suffisant à chaque stagiaire. Elle alterne apports théoriques et mises en situation pratiques, sur mannequins de réanimation et cas concrets adaptés aux risques de votre entreprise.</p>
          <p>La certification repose sur deux épreuves&nbsp;: une épreuve de prévention (identifier et rendre compte d'une situation dangereuse) et une épreuve de secours (réaliser les gestes techniques sur un cas concret). Seuls les organismes habilités par l'INRS, comme SECURIFORM, peuvent délivrer le certificat SST.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> 14 heures sur 2 jours consécutifs</li>
            <li><span className="puce" aria-hidden="true">✓</span> Deux épreuves&nbsp;: prévention et secours</li>
            <li><span className="puce" aria-hidden="true">✓</span> Certificat délivré par un organisme habilité INRS</li>
            <li><span className="puce" aria-hidden="true">✓</span> Valable 24 mois, recyclage MAC ensuite</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-prevention">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Au-delà du secours</span>
          <h2 id="titre-prevention">Le rôle préventif du SST</h2>
          <hr className="trait" />
          <p>Un SST n'est pas seulement formé à intervenir en urgence&nbsp;: sa formation en fait aussi un acteur de la prévention au quotidien, capable de repérer ce qui échappe souvent à l'œil non averti.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Observer</h3>
            <p>Repérer les équipements défaillants, les comportements à risque ou un environnement de travail dégradé.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Signaler</h3>
            <p>Transmettre l'information de façon factuelle et constructive à la hiérarchie ou au service prévention.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Contribuer au Document Unique</h3>
            <p>Apporter son vécu de terrain pour identifier de nouveaux risques ou actualiser l'évaluation existante.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Sensibiliser ses collègues</h3>
            <p>Partager les bonnes pratiques et encourager une culture du signalement au sein de son équipe.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Ce rôle a ses limites&nbsp;: le SST observe, informe et propose, mais ce sont l'encadrement et les préventeurs professionnels qui décident et mettent en œuvre les mesures de prévention.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-validite">
      <div className="container section-head reveal">
        <span className="surtitre">Et après</span>
        <h2 id="titre-validite">Validité du certificat et recyclage</h2>
        <hr className="trait" />
        <p>Le certificat SST est valable 24 mois exactement à compter de sa délivrance. Avant son expiration, un recyclage MAC (Maintien et Actualisation des Compétences) de 7 heures permet de le renouveler. Passé un délai de 24 mois après l'expiration sans recyclage, c'est la formation initiale complète de 14 heures qui doit être repassée&nbsp;: mieux vaut donc anticiper l'échéance de quelques mois.</p>
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
            <summary>Combien de SST dois-je former dans mon entreprise&nbsp;?</summary>
            <p>Si vous êtes concerné par l'obligation absolue (atelier dangereux, chantier BTP important), au moins un SST doit être présent en permanence. Sinon, l'INRS recommande de former 10 à 15&nbsp;% de votre effectif, en tenant compte des rotations d'équipes et des absences.</p>
          </details>

          <details className="faq-item">
            <summary>Le SST peut-il imposer des mesures de sécurité à ses collègues&nbsp;?</summary>
            <p>Non, son rôle se limite à observer, informer et proposer. La décision et la mise en œuvre des mesures de prévention reviennent à l'encadrement et aux préventeurs professionnels de l'entreprise.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si mon certificat SST expire sans recyclage&nbsp;?</summary>
            <p>Si le retard reste inférieur à 24 mois après l'expiration, un simple recyclage MAC de 7 heures suffit. Au-delà, la formation initiale complète de 14 heures doit être repassée en totalité.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je organiser cette formation directement dans mon entreprise&nbsp;?</summary>
            <p>Oui, une session intra-entreprise est possible à partir de quelques stagiaires, avec des mises en situation adaptées aux risques réels de votre activité.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la différence avec la sensibilisation aux gestes qui sauvent&nbsp;?</summary>
            <p>La sensibilisation est courte, accessible à tous sans prérequis, mais ne confère aucun statut officiel. Seule la formation SST complète, avec ses évaluations certificatives, confère le statut reconnu de Sauveteur Secouriste du Travail.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation initiale SST</h2>
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
