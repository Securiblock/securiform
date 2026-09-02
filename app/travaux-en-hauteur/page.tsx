import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation travaux en hauteur",
      "description": "Formation à la hiérarchie des protections contre les chutes de hauteur, au contrôle du harnais antichute, aux points d'ancrage et aux systèmes de liaison (longes, enrouleurs, lignes de vie).",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/travaux-hauteur-echafaudages/formation-travaux-en-hauteur/"
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
          "name": "Travaux en hauteur et échafaudages",
          "item": "https://securiform.fr/travaux-hauteur-echafaudages/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation travaux en hauteur",
          "item": "https://securiform.fr/travaux-hauteur-echafaudages/formation-travaux-en-hauteur/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation travaux en hauteur — SECURIFORM",
  description: "Formation SECURIFORM aux travaux en hauteur : hiérarchie des protections, harnais, points d'ancrage, longes, lignes de vie.",
  alternates: { canonical: "/travaux-en-hauteur" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/travaux-en-hauteur",
    title: "Formation travaux en hauteur — SECURIFORM",
    description: "Hiérarchie des protections, harnais, points d'ancrage, lignes de vie : formation SECURIFORM aux travaux en hauteur.",
    images: ["/image/formation-harnais.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation travaux en hauteur — SECURIFORM",
    description: "Formez vos équipes aux bons réflexes du travail en hauteur, avec SECURIFORM.",
    images: ["/image/formation-harnais.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation travaux en hauteur">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/travaux-hauteur-echafaudages">Travaux en hauteur et échafaudages</Link>
          <span aria-hidden="true">›</span>
          <span>Travaux en hauteur</span>
        </p>
        <h1>Formation travaux en hauteur</h1>
        <p>Hiérarchie des protections, port du harnais, points d'ancrage et systèmes antichute&nbsp;: les bons réflexes pour travailler en hauteur en sécurité.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-hierarchie">
      <div className="container section-head reveal">
        <span className="surtitre">Le principe fondamental</span>
        <h2 id="titre-hierarchie">Toujours privilégier la protection collective</h2>
        <hr className="trait" />
        <p>Les articles R4323-59 et R4323-60 du Code du travail fixent une règle non négociable&nbsp;: les protections collectives (garde-corps, filets, planchers) doivent toujours être envisagées en premier. Le harnais individuel n'intervient qu'en dernier recours, lorsque la protection collective est techniquement impossible&nbsp;— une impossibilité qui doit être démontrée et documentée par l'employeur.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-tableau-hierarchie">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-tableau-hierarchie">Protection collective ou individuelle&nbsp;?</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Niveau</th>
                <th scope="col">Moyens</th>
                <th scope="col">Quand l'utiliser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 — Priorité absolue</td>
                <td>Garde-corps, filets de sécurité, planchers pleins</td>
                <td>Systématiquement, dès que techniquement possible</td>
              </tr>
              <tr>
                <td>2 — Dernier recours</td>
                <td>Harnais, longes, antichutes à rappel automatique</td>
                <td>Uniquement si la protection collective est impossible</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Un garde-corps protège tout le monde en permanence&nbsp;; un harnais ne protège qu'une personne, et seulement s'il est correctement utilisé.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-gardecorps">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Protection collective</span>
          <h2 id="titre-gardecorps">Un garde-corps conforme, ça se compose de quoi&nbsp;?</h2>
          <hr className="trait" />
          <p>Selon la norme NF EN 13374, un garde-corps doit réunir simultanément ces éléments&nbsp;: une lisse haute (1 à 1,10&nbsp;m), une lisse intermédiaire (à mi-hauteur), une plinthe basse (10 à 15&nbsp;cm) et des potelets espacés de 2,5 à 3&nbsp;m maximum. Une simple barre horizontale isolée n'est pas conforme.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Classe</th>
                <th scope="col">Pente de la surface</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Classe A</td>
                <td>Jusqu'à 10° (toitures plates, terrasses)</td>
              </tr>
              <tr>
                <td>Classe B</td>
                <td>De 10° à 30°</td>
              </tr>
              <tr>
                <td>Classe C</td>
                <td>De 30° à 60° (toitures en pente)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-controle">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Une compétence indispensable</span>
          <h2 id="titre-controle">Contrôler et entretenir son harnais</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-2">

          <article className="categorie-card reveal">
            <h3>Vérification quotidienne</h3>
            <p>Avant chaque utilisation, l'utilisateur contrôle lui-même son harnais&nbsp;: marquage lisible, sangles sans coupure ni décoloration, coutures intactes, anneaux sans corrosion ni déformation, boucles fonctionnelles. Le moindre défaut impose une mise au rebut immédiate.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Vérification générale périodique</h3>
            <p>Une inspection approfondie, réalisée au moins une fois par an par une personne compétente ou un organisme habilité, avec tests fonctionnels et rapport écrit. Un harnais ayant arrêté une chute doit toujours être mis au rebut, même s'il semble intact.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Un harnais a une durée de vie limitée, généralement 10 ans après sa fabrication&nbsp;: au-delà, il doit être remplacé même sans défaut visible.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-ancrage">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien choisir son point</span>
          <h2 id="titre-ancrage">Point dorsal, sternal ou latéral&nbsp;?</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Point d'ancrage</th>
                <th scope="col">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dorsal (entre les omoplates)</td>
                <td>Point par défaut pour la majorité des situations&nbsp;: toitures, échafaudages, déplacements</td>
              </tr>
              <tr>
                <td>Sternal (sur la poitrine)</td>
                <td>Espaces confinés, échelles verticales, manœuvres fréquentes du système antichute</td>
              </tr>
              <tr>
                <td>Latéral (sur les hanches)</td>
                <td>Maintien en position de travail uniquement&nbsp;— jamais pour arrêter une chute</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Le point dorsal reste la référence&nbsp;: le point sternal ne s'utilise qu'en cas d'accès difficile au dos, et le point latéral doit toujours être associé à un système antichute dorsal ou sternal.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-systemes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le bon système pour chaque situation</span>
          <h2 id="titre-systemes">Longes, enrouleurs et lignes de vie</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Système recommandé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Position fixe, courte durée</td>
                <td>Longe simple avec absorbeur d'énergie</td>
              </tr>
              <tr>
                <td>Progression sur échafaudage</td>
                <td>Longe double (en Y), toujours connecté pendant le déplacement</td>
              </tr>
              <tr>
                <td>Déplacements fréquents sur toiture</td>
                <td>Antichute à rappel automatique (enrouleur)</td>
              </tr>
              <tr>
                <td>Montée d'échelle verticale</td>
                <td>Ligne de vie verticale avec antichute mobile</td>
              </tr>
              <tr>
                <td>Grande surface de travail</td>
                <td>Ligne de vie horizontale avec coulisseau</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Le choix dépend aussi du tirant d'air disponible sous le point d'ancrage et de la distance de chute possible&nbsp;: SECURIFORM vous aide à raisonner ces paramètres pendant la formation.</p>
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
            <summary>Peut-on utiliser un harnais à la place d'un garde-corps par simplicité&nbsp;?</summary>
            <p>Non. La réglementation impose de toujours privilégier la protection collective. Le harnais ne peut être utilisé qu'en cas d'impossibilité technique démontrée d'installer un garde-corps ou un filet.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire si mon harnais a déjà arrêté une chute&nbsp;?</summary>
            <p>Il doit être mis au rebut immédiatement, sans exception, même s'il paraît en parfait état. L'énergie absorbée lors de la chute peut avoir endommagé les fibres internes de façon invisible.</p>
          </details>

          <details className="faq-item">
            <summary>Quel point d'ancrage utiliser par défaut&nbsp;?</summary>
            <p>Le point dorsal, entre les omoplates, reste la référence pour la grande majorité des situations. Le point sternal est réservé aux cas particuliers&nbsp;: espaces confinés, échelles, manœuvres fréquentes.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de cette formation&nbsp;?</summary>
            <p>Un recyclage est recommandé tous les 3 ans pour maintenir les compétences à jour, notamment sur le contrôle du harnais et le choix des systèmes antichute.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation couvre-t-elle aussi les échafaudages&nbsp;?</summary>
            <p>Non, les échafaudages font l'objet de formations dédiées (R408 pour les échafaudages fixes, R457 pour les roulants)&nbsp;: retrouvez le détail sur notre page Travaux en hauteur et échafaudages.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation travaux en hauteur</h2>
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
              <label htmlFor="besoin">Votre besoin</label>
              <select id="besoin" name="besoin">
                <option value="initiale">Formation initiale</option>
                <option value="recyclage">Recyclage</option>
                <option value="controle">Contrôle et entretien du harnais</option>
                <option value="autre">Je ne sais pas encore</option>
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
