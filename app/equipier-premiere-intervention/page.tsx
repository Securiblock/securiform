import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation Équipier de Première Intervention (EPI)",
      "description": "Formation à l'organisation de l'intervention sur un début d'incendie, à l'utilisation des RIA et extincteurs, aux limites de l'intervention et aux coupures d'énergie, conformément à l'article R4227-28 du Code du travail et au référentiel APSAD R6.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/formations-incendie-et-evacuation/formation-equipier-de-premiere-intervention/"
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
          "item": "https://securiform.fr/accueil/formations-incendie-et-evacuation/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Équipier de Première Intervention",
          "item": "https://securiform.fr/accueil/formations-incendie-et-evacuation/formation-equipier-de-premiere-intervention/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation Équipier de Première Intervention (EPI) — RIA, extincteurs, coupures — SECURIFORM",
  description: "Formation SECURIFORM Équipier de Première Intervention : obligations légales, organisation de l'intervention, RIA, limites à ne jamais dépasser, coupures d'énergie. Référentiel APSAD R6.",
  alternates: { canonical: "/equipier-premiere-intervention" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/equipier-premiere-intervention",
    title: "Formation Équipier de Première Intervention — SECURIFORM",
    description: "RIA, extincteurs, coupures d'énergie, limites de l'intervention : formation SECURIFORM aux Équipiers de Première Intervention.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation Équipier de Première Intervention — SECURIFORM",
    description: "Formez vos référents internes à intervenir sur un début d'incendie, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation Équipier de Première Intervention">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/incendie-evacuation">Formations incendie et évacuation</Link>
          <span aria-hidden="true">›</span>
          <span>Équipier de Première Intervention</span>
        </p>
        <h1>Formation Équipier de Première Intervention</h1>
        <p>Former des référents internes capables d'agir dans les premières minutes critiques d'un incendie, avec extincteurs et RIA, avant l'arrivée des secours.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-obligations">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-obligations">Une obligation qui dépend de votre profil</h2>
        <hr className="trait" />
        <p>L'article R4227-28 du Code du travail impose au chef d'établissement de prendre les mesures nécessaires pour combattre efficacement tout début d'incendie. Le référentiel APSAD R6, reconnu par les assureurs, structure l'organisation de la sécurité incendie autour de trois rôles complémentaires.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-roles">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-roles">Les trois rôles du référentiel APSAD R6</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Rôle</th>
                <th scope="col">Mission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EPI — Équipier de Première Intervention</td>
                <td>Donne l'alarme, alerte les secours, intervient avec les moyens sur place (extincteurs, RIA)</td>
              </tr>
              <tr>
                <td>ESI — Équipier de Seconde Intervention</td>
                <td>Renforce les EPI avec des moyens complémentaires, en attendant les secours (facultatif)</td>
              </tr>
              <tr>
                <td>EIT — Équipier d'Intervention Technique</td>
                <td>Effectue les coupures d'énergies et fluides, met les installations en sécurité (facultatif)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Au-delà de 50 salariés, la formation EPI devient obligatoire, avec au moins 10&nbsp;% de l'effectif formé et réparti géographiquement pour réunir deux EPI en moins d'une minute sur tout point du site. Elle l'est aussi, quelle que soit la taille, pour les ERP et les entreprises manipulant des matières inflammables.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intervention">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le bon enchaînement</span>
          <h2 id="titre-intervention">Organiser son intervention</h2>
          <hr className="trait" />
        </div>
        <div className="etapes cols-5">
          <div className="etape reveal">
            <h3>Reconnaître</h3>
            <p>Évaluer rapidement la classe de feu et son ampleur&nbsp;: début maîtrisable ou incendie développé.</p>
          </div>
          <div className="etape reveal">
            <h3>Alarme et alerte</h3>
            <p>Déclencher l'alarme et appeler les pompiers (18 ou 112), simultanément, sans jamais retarder l'un pour l'autre.</p>
          </div>
          <div className="etape reveal">
            <h3>Mettre en sécurité</h3>
            <p>S'assurer que toute personne présente évacue&nbsp;: la protection des vies prime toujours sur celle des biens.</p>
          </div>
          <div className="etape reveal">
            <h3>Intervenir</h3>
            <p>Attaquer le feu à deux minimum, avec l'extincteur ou le RIA adapté, en gardant toujours une issue de repli.</p>
          </div>
          <div className="etape reveal">
            <h3>Accueillir les secours</h3>
            <p>Guider les pompiers vers le foyer et leur transmettre toutes les informations utiles à leur arrivée.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-limites">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qu'il ne faut jamais dépasser</span>
          <h2 id="titre-limites">Les limites absolues de l'intervention</h2>
          <hr className="trait" />
          <p>C'est sans doute l'enseignement le plus important&nbsp;: un EPI n'est pas un sapeur-pompier, et sa mission s'arrête là où le danger devient trop grand.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Un début d'incendie seulement</h3>
            <p>Flammes limitées, fumée modérée, chaleur supportable. Au-delà, on évacue immédiatement.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Jamais seul</h3>
            <p>Toujours à deux minimum&nbsp;: l'un attaque le feu, l'autre surveille et assiste.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Un nombre d'essais limité</h3>
            <p>Si le feu n'est pas maîtrisé après 2 à 3 extincteurs, l'intervention s'arrête&nbsp;: on évacue et on attend les secours.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Connaître ses limites</h3>
            <p>Pas d'équipement respiratoire, pas de tenue ignifuge&nbsp;: un EPI n'entre jamais dans une zone enfumée ou en flammes.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-ria">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Plus puissant qu'un extincteur</span>
          <h2 id="titre-ria">Le RIA, Robinet d'Incendie Armé</h2>
          <hr className="trait" />
          <p>Toujours alimenté en eau et prêt à l'emploi, le RIA offre une capacité d'extinction nettement supérieure à celle d'un extincteur portatif.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">Extincteur portatif</th>
                <th scope="col">RIA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Durée d'utilisation</td>
                <td>15 à 30 secondes</td>
                <td>Illimitée, tant que l'eau est disponible</td>
              </tr>
              <tr>
                <td>Portée</td>
                <td>3 à 6 mètres</td>
                <td>Jusqu'à 15 mètres en jet bâton</td>
              </tr>
              <tr>
                <td>Classes de feu couvertes</td>
                <td>Selon le type d'agent</td>
                <td>Efficace sur A et B&nbsp;; jamais sur gaz (C) ni électricité (E)</td>
              </tr>
              <tr>
                <td>Manipulation</td>
                <td>Une personne</td>
                <td>Deux personnes recommandées (force de recul importante)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-coupures">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Avant d'intervenir</span>
          <h2 id="titre-coupures">Connaître les coupures essentielles</h2>
          <hr className="trait" />
          <p>Couper certaines énergies avant d'attaquer le feu réduit considérablement les risques, pour l'intervenant comme pour l'efficacité de l'extinction.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Électricité</h3>
            <p>Couper le disjoncteur général ou utiliser l'arrêt d'urgence, pour éviter tout risque d'électrocution.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Gaz</h3>
            <p>Fermer la vanne générale ou le robinet de la bouteille, pour ne pas alimenter davantage le foyer.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Ventilation</h3>
            <p>Arrêter les systèmes de ventilation, qui propagent fumées et oxygène dans tout le bâtiment.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Machines</h3>
            <p>Actionner les arrêts d'urgence pour éviter étincelles, échauffements ou mouvements dangereux.</p>
          </article>

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
            <summary>Combien d'EPI dois-je former dans mon entreprise&nbsp;?</summary>
            <p>La règle courante est d'au moins 10&nbsp;% de l'effectif, réparti géographiquement pour qu'au moins deux EPI puissent se réunir en moins d'une minute sur n'importe quel point du site. Si vous travaillez en équipes (3x8), chaque équipe doit disposer de son propre contingent d'EPI.</p>
          </details>

          <details className="faq-item">
            <summary>Un extincteur ou un RIA&nbsp;: lequel utiliser&nbsp;?</summary>
            <p>L'extincteur convient pour un feu très naissant et localisé. Le RIA, avec sa durée illimitée et sa portée supérieure, permet une attaque plus soutenue, mais jamais sur un feu de gaz ou d'origine électrique.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire si le feu ne diminue pas malgré l'intervention&nbsp;?</summary>
            <p>Il faut arrêter immédiatement et évacuer. Passé 2 à 3 extincteurs sans résultat, l'intervention EPI est terminée&nbsp;: la suite revient aux sapeurs-pompiers.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de cette formation&nbsp;?</summary>
            <p>Il n'existe pas de durée légale stricte, mais un renouvellement tous les 1 à 2 ans est recommandé pour maintenir les réflexes et former les nouveaux EPI désignés.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation couvre-t-elle aussi l'évacuation&nbsp;?</summary>
            <p>Non, l'évacuation fait l'objet d'une formation dédiée, complémentaire à celle-ci&nbsp;: retrouvez le détail sur notre page Formations incendie et évacuation.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation Équipier de Première Intervention</h2>
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
              <label htmlFor="effectif">Effectif total de l'entreprise</label>
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
