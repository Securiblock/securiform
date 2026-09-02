import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formations incendie et évacuation",
      "description": "Formation à la manipulation des extincteurs et RIA, formation à l'évacuation des locaux, formation Équipier de Première Intervention (EPI), conformes aux articles R4227-28 et suivants du Code du travail.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/incendie-evacuation/"
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
          "name": "Formations incendie et évacuation",
          "item": "https://securiform.fr/incendie-evacuation/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formations incendie et évacuation — SECURIFORM",
  description: "SECURIFORM forme à la manipulation des extincteurs et RIA, à l'évacuation des locaux et aux Équipiers de Première Intervention.",
  alternates: { canonical: "/incendie-evacuation" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/incendie-evacuation",
    title: "Formations incendie et évacuation — SECURIFORM",
    description: "Manipulation d'extincteurs et de RIA, Équipiers de Première et Seconde Intervention, évacuation des locaux : SECURIFORM forme vos équipes partout en France.",
    images: ["/image/formation-incendie.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations incendie et évacuation — SECURIFORM",
    description: "Extincteurs, RIA, EPI, évacuation : préparez vos équipes à la sécurité incendie avec SECURIFORM.",
    images: ["/image/formation-incendie.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formations incendie et évacuation">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Formations incendie et évacuation</span>
        </p>
        <h1>Formations incendie et évacuation</h1>
        <p>Manipulation d'extincteurs et de RIA, Équipiers de Première et Seconde Intervention, évacuation des locaux&nbsp;: formez vos équipes à réagir efficacement face à un début d'incendie.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Une obligation qui dépend de votre profil</span>
        <h2 id="titre-intro">Qui doit être formé à la sécurité incendie&nbsp;?</h2>
        <hr className="trait" />
        <p>En dessous de 50 salariés, la formation est recommandée mais pas strictement imposée. À partir de 50 salariés, elle devient obligatoire pour l'ensemble du personnel, avec au moins 10&nbsp;% de l'effectif formé comme Équipier de Première Intervention. Les établissements recevant du public et les entreprises manipulant des matières inflammables y sont soumis quelle que soit leur taille. Nous restons à votre service pour développer une formation spécifique aux risques liés à votre entreprise.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-parcours">
      <div className="container">
        <h2 id="titre-parcours" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Nos formations incendie et évacuation</h2>
        <div className="formations-grid cols-3">

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-extincteurs.jpg" alt="Formation à la manipulation des extincteurs" loading="lazy" />
            </div>
            <h3>Manipulation des extincteurs</h3>
            <p>Reconnaître un début d'incendie, choisir l'extincteur adapté et l'utiliser efficacement sur feu réel ou simulé.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/manipulation-extincteurs" aria-label="Formation à la manipulation des extincteurs" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-evacuation.jpg" alt="Formation à l'évacuation des locaux" loading="lazy" />
            </div>
            <h3>Évacuation des locaux</h3>
            <p>Préparer et encadrer un exercice d'évacuation&nbsp;: consignes, guides-files, serre-files, point de rassemblement.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/evacuation" aria-label="Formation à l'évacuation" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-epi.jpg" alt="Formation Équipier de Première Intervention" loading="lazy" />
            </div>
            <h3>Équipier de Première Intervention</h3>
            <p>Former les référents internes capables d'intervenir sur un début d'incendie avec extincteurs et RIA, avant l'arrivée des secours.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/equipier-premiere-intervention" aria-label="Formation Équipier de Première Intervention" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-tableau">Quel extincteur pour quel feu&nbsp;?</h2>
          <hr className="trait" />
          <p>Chaque type de feu appelle un agent extincteur précis. Utiliser le mauvais type peut aggraver la situation&nbsp;: c'est l'un des premiers réflexes enseignés en formation.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Classe de feu</th>
                <th scope="col">Matières concernées</th>
                <th scope="col">Extincteur adapté</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Classe A</td>
                <td>Matériaux solides (bois, papier, tissus)</td>
                <td>Eau, eau avec additif</td>
              </tr>
              <tr>
                <td>Classe B</td>
                <td>Liquides inflammables (essence, solvants)</td>
                <td>Poudre, mousse</td>
              </tr>
              <tr>
                <td>Classe C</td>
                <td>Gaz inflammables</td>
                <td>Poudre</td>
              </tr>
              <tr>
                <td>Classe D</td>
                <td>Métaux (magnésium, sodium)</td>
                <td>Poudre spéciale</td>
              </tr>
              <tr>
                <td>Classe F</td>
                <td>Huiles et graisses de cuisson</td>
                <td>Extincteur spécifique cuisine</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le bon enchaînement</span>
          <h2 id="titre-etapes">Face à un début d'incendie</h2>
          <hr className="trait" />
          <p>Les formations SECURIFORM entraînent vos équipes à enchaîner ces actions sans hésitation.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Alerter</h3>
            <p>Déclencher l'alarme et prévenir les secours internes et externes, en donnant une localisation précise.</p>
          </div>
          <div className="etape reveal">
            <h3>Intervenir</h3>
            <p>Si le foyer est maîtrisable, l'Équipier de Première Intervention agit avec l'extincteur ou le RIA adapté.</p>
          </div>
          <div className="etape reveal">
            <h3>Évacuer</h3>
            <p>Guides-files et serre-files encadrent la sortie vers le point de rassemblement, en vérifiant les effectifs.</p>
          </div>
          <div className="etape reveal">
            <h3>Attendre les secours</h3>
            <p>À l'arrivée des sapeurs-pompiers, transmettre les informations utiles&nbsp;: localisation, effectifs, actions déjà menées.</p>
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
            <summary>Ma petite entreprise doit-elle former son personnel à l'incendie&nbsp;?</summary>
            <p>En dessous de 50 salariés, ce n'est pas une obligation stricte, mais c'est vivement recommandé&nbsp;: en cas d'incident, la responsabilité de l'employeur peut être engagée même sans obligation légale explicite. Au-delà de 50 salariés, la formation devient obligatoire pour tous.</p>
          </details>

          <details className="faq-item">
            <summary>Qu'est-ce qu'un Équipier de Première Intervention (EPI)&nbsp;?</summary>
            <p>C'est un salarié formé pour donner l'alerte, intervenir rapidement sur un début d'incendie avec un extincteur ou un RIA, et sécuriser la zone en attendant les secours. Les entreprises de plus de 50 salariés doivent en former au moins 10&nbsp;% de leur effectif.</p>
          </details>

          <details className="faq-item">
            <summary>À quelle fréquence organiser un exercice d'évacuation&nbsp;?</summary>
            <p>Le Code du travail impose un exercice d'évacuation au moins tous les 6 mois. Ces exercices permettent de vérifier que les consignes sont connues et que les issues de secours sont bien identifiées par tous.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de ces formations&nbsp;?</summary>
            <p>Elle est généralement de 6 mois à 3 ans selon les risques propres à votre établissement. Un recyclage régulier permet de maintenir les réflexes des équipiers, notamment sur la manipulation des extincteurs.</p>
          </details>

          <details className="faq-item">
            <summary>Formation en centre ou directement dans mes locaux&nbsp;?</summary>
            <p>SECURIFORM peut intervenir directement dans votre établissement, ce qui permet d'adapter l'exercice à vos propres issues de secours et points de rassemblement&nbsp;: c'est souvent le format le plus pertinent pour ce type de formation.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation incendie et évacuation</h2>
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
                <option value="extincteurs">Manipulation des extincteurs</option>
                <option value="evacuation">Évacuation des locaux</option>
                <option value="epi">Équipier de Première Intervention</option>
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
