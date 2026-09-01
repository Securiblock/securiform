import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation manipulation des extincteurs",
      "description": "Formation à la reconnaissance des classes de feu, au choix de l'extincteur adapté et à la technique de manipulation, sur feu réel ou simulé, conformément à l'article R4227-28 du Code du travail.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/formations-incendie-et-evacuation/formation-manipulation-extincteurs/"
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
          "name": "Manipulation des extincteurs",
          "item": "https://securiform.fr/accueil/formations-incendie-et-evacuation/formation-manipulation-extincteurs/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation manipulation des extincteurs — Classes de feu, technique ABCDE — SECURIFORM",
  description: "Formation SECURIFORM à la manipulation des extincteurs : triangle du feu, classes A à F, technique d'utilisation, pratique sur feu réel. Conforme à l'article R4227-28 du Code du travail.",
  alternates: { canonical: "/manipulation-extincteurs" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/manipulation-extincteurs",
    title: "Formation manipulation des extincteurs — SECURIFORM",
    description: "Triangle du feu, classes de feu, technique d'utilisation : formation SECURIFORM à la manipulation des extincteurs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation manipulation des extincteurs — SECURIFORM",
    description: "Formez vos équipes à réagir efficacement face à un début d'incendie, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation manipulation des extincteurs">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/incendie-evacuation">Formations incendie et évacuation</Link>
          <span aria-hidden="true">›</span>
          <span>Manipulation des extincteurs</span>
        </p>
        <h1>Formation manipulation des extincteurs</h1>
        <p>Reconnaître un début d'incendie, choisir l'extincteur adapté et l'utiliser efficacement&nbsp;: une formation avec pratique sur feu réel ou simulé.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-triangle">
      <div className="container section-head reveal">
        <span className="surtitre">Comprendre pour mieux agir</span>
        <h2 id="titre-triangle">Le triangle du feu et les modes d'extinction</h2>
        <hr className="trait" />
        <p>Un feu naît de la rencontre de trois éléments&nbsp;: un combustible, un comburant (généralement l'oxygène de l'air) et une source de chaleur. Supprimer l'un des trois suffit à l'éteindre. C'est exactement ce que fait chaque type d'extincteur, mais pas de la même façon.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-modes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Comment ça marche</span>
          <h2 id="titre-modes">Quatre façons d'éteindre un feu</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Refroidissement</h3>
            <p>Abaisser la température sous le seuil d'inflammation. C'est le principe de l'extincteur à eau.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Étouffement</h3>
            <p>Couper l'apport d'oxygène en formant une barrière. C'est le principe de la mousse et du CO2.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Affamage</h3>
            <p>Supprimer le combustible, par exemple en coupant une alimentation en gaz.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Inhibition</h3>
            <p>Stopper la réaction chimique elle-même. C'est le principe des poudres ABC.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-classes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien choisir son extincteur</span>
          <h2 id="titre-classes">Les classes de feu, et ce qu'il ne faut jamais faire</h2>
          <hr className="trait" />
          <p>Utiliser le mauvais extincteur peut aggraver la situation au lieu de la maîtriser&nbsp;: c'est le premier réflexe enseigné en formation.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Classe</th>
                <th scope="col">Exemple</th>
                <th scope="col">Extincteur adapté</th>
                <th scope="col">À ne jamais utiliser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A — solides</td>
                <td>Bois, papier, textiles</td>
                <td>Eau, poudre</td>
                <td>—</td>
              </tr>
              <tr>
                <td>B — liquides</td>
                <td>Essence, solvants, peintures</td>
                <td>Mousse, poudre</td>
                <td>Eau (le feu s'étend)</td>
              </tr>
              <tr>
                <td>C — gaz</td>
                <td>Propane, butane, méthane</td>
                <td>Poudre (après coupure du gaz)</td>
                <td>Intervenir sans couper l'alimentation</td>
              </tr>
              <tr>
                <td>D — métaux</td>
                <td>Magnésium, sodium</td>
                <td>Poudre spéciale métaux</td>
                <td>Eau et CO2 (réaction violente possible)</td>
              </tr>
              <tr>
                <td>Électrique</td>
                <td>Tableaux, appareils sous tension</td>
                <td>CO2, poudre (non conducteurs)</td>
                <td>Eau et mousse (risque d'électrocution)</td>
              </tr>
              <tr>
                <td>F — huiles de cuisson</td>
                <td>Friteuses professionnelles</td>
                <td>Produit chimique humide dédié</td>
                <td>Eau (explosion de vapeur)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-technique">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le bon geste</span>
          <h2 id="titre-technique">La technique en 5 temps</h2>
          <hr className="trait" />
          <p>Ce déroulé s'applique à tous les extincteurs portatifs, quel que soit le type.</p>
        </div>
        <div className="etapes cols-5">
          <div className="etape reveal">
            <h3>Approcher</h3>
            <p>Se rapprocher du feu tout en gardant une distance de sécurité, avec toujours une issue derrière soi.</p>
          </div>
          <div className="etape reveal">
            <h3>Dégoupiller</h3>
            <p>Retirer la goupille de sécurité qui protège le levier d'action.</p>
          </div>
          <div className="etape reveal">
            <h3>Vérifier</h3>
            <p>Confirmer sur l'étiquette que l'extincteur correspond bien à la classe de feu rencontrée.</p>
          </div>
          <div className="etape reveal">
            <h3>Actionner</h3>
            <p>Appuyer sur la poignée pour libérer l'agent extincteur.</p>
          </div>
          <div className="etape reveal">
            <h3>Diffuser</h3>
            <p>Viser la base du feu, avec un mouvement de balayage, jusqu'à extinction complète.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-types">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Connaître son matériel</span>
          <h2 id="titre-types">Les principaux types d'extincteurs</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Portée indicative</th>
                <th scope="col">Point de vigilance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eau</td>
                <td>10 à 15 mètres</td>
                <td>Jamais sur liquides inflammables, électricité ou métaux</td>
              </tr>
              <tr>
                <td>Poudre</td>
                <td>3 à 6 mètres</td>
                <td>Réduit fortement la visibilité, peut irriter les voies respiratoires</td>
              </tr>
              <tr>
                <td>Mousse</td>
                <td>5 à 10 mètres</td>
                <td>Conductrice&nbsp;: jamais sur installation électrique</td>
              </tr>
              <tr>
                <td>CO2</td>
                <td>1 à 3 mètres</td>
                <td>Ne jamais tenir la tuyère à main nue (risque de brûlure par le froid)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-apres">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce n'est pas terminé</span>
          <h2 id="titre-apres">Que faire une fois le feu éteint&nbsp;?</h2>
          <p>Même après extinction apparente, il faut laisser les sapeurs-pompiers inspecter la zone à la recherche de foyers résiduels, ventiler les lieux pour évacuer les fumées, et surveiller les matériaux qui pourraient se rallumer en refroidissant mal.</p>
          <p>Tout extincteur utilisé, même partiellement, doit être signalé pour être rechargé ou remplacé&nbsp;: il perd rapidement en efficacité une fois entamé.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Alerter les secours avant toute tentative d'extinction</li>
            <li><span className="puce" aria-hidden="true">✓</span> Toujours garder une issue de secours derrière soi</li>
            <li><span className="puce" aria-hidden="true">✓</span> Laisser les pompiers inspecter, même feu éteint</li>
            <li><span className="puce" aria-hidden="true">✓</span> Signaler tout extincteur utilisé pour rechargement</li>
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
            <summary>Pourquoi ne jamais utiliser d'eau sur un feu de liquide inflammable&nbsp;?</summary>
            <p>L'eau, plus dense, coule sous le liquide en feu, se vaporise brutalement et projette le liquide enflammé alentour&nbsp;: au lieu d'éteindre le feu, elle l'étend violemment.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation est-elle obligatoire dans mon entreprise&nbsp;?</summary>
            <p>L'article R4227-28 du Code du travail impose à l'employeur de prendre les mesures nécessaires pour combattre efficacement tout début d'incendie, ce qui suppose que le personnel soit formé à l'utilisation des extincteurs.</p>
          </details>

          <details className="faq-item">
            <summary>À quelle fréquence faut-il renouveler cette formation&nbsp;?</summary>
            <p>Un recyclage est recommandé tous les 6 mois à 3 ans selon les risques propres à votre établissement, pour garder les bons réflexes à jour.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire si je ne suis pas sûr de la classe de feu&nbsp;?</summary>
            <p>Dans le doute, privilégiez toujours l'alerte des secours plutôt qu'une tentative d'extinction hasardeuse&nbsp;: un extincteur mal choisi peut aggraver la situation.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation couvre-t-elle aussi les RIA&nbsp;?</summary>
            <p>Oui, la pratique peut inclure la manipulation des Robinets d'Incendie Armés (RIA), en complément des extincteurs portatifs.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation manipulation des extincteurs</h2>
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
