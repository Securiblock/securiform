import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation opérateurs AIPR",
      "description": "Formation à l'identification des réseaux, aux classes de précision DT-DICT, aux distances de sécurité et à la conduite à tenir en cas d'anomalie, pour les conducteurs d'engins et opérateurs intervenant à proximité des réseaux.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/aipr/formation-operateurs-aipr/"
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
          "item": "https://securiform.fr/aipr/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation opérateurs AIPR",
          "item": "https://securiform.fr/aipr/formation-operateurs-aipr/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation opérateurs AIPR — SECURIFORM",
  description: "Formation SECURIFORM opérateurs AIPR : classes de précision DT-DICT, distances de sécurité, règle du mètre et règle des 4A.",
  alternates: { canonical: "/aipr-operateurs" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/aipr-operateurs",
    title: "Formation opérateurs AIPR — SECURIFORM",
    description: "Classes de précision, distances de sécurité, règle du mètre : formation SECURIFORM opérateurs AIPR.",
    images: ["/image/formation-aipr-operateur.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation opérateurs AIPR — SECURIFORM",
    description: "Formez vos conducteurs d'engins et canalisateurs à intervenir en sécurité près des réseaux, avec SECURIFORM.",
    images: ["/image/formation-aipr-operateur.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation opérateurs AIPR">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/aipr">Formations AIPR</Link>
          <span aria-hidden="true">›</span>
          <span>Opérateurs</span>
        </p>
        <h1>Formation opérateurs AIPR</h1>
        <p>Pour les conducteurs d'engins, canalisateurs et ouvriers de terrassement&nbsp;: identifier les réseaux, respecter les distances de sécurité et réagir correctement en cas d'anomalie.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-enjeux">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-enjeux">Une chaîne de responsabilités précise</h2>
        <hr className="trait" />
        <p>L'article L.554-4 du Code de l'environnement encadre strictement les interventions à proximité des réseaux. Une entreprise qui déploie du personnel non formé s'expose à des sanctions administratives pouvant atteindre 75&nbsp;000&nbsp;€ pour une personne morale, en plus de la responsabilité civile et pénale engagée en cas d'accident. Trois niveaux de responsabilité se répartissent la vigilance&nbsp;: le concepteur (maîtrise d'ouvrage), l'encadrant (chef de chantier) et l'opérateur, chacun avec ses propres obligations.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-classes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-classes">Les classes de précision DT-DICT</h2>
          <hr className="trait" />
          <p>Chaque réseau localisé est classé selon la fiabilité de sa position&nbsp;: cette classe détermine directement la prudence à observer sur le terrain.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Classe</th>
                <th scope="col">Incertitude de localisation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Classe A</td>
                <td>≤ 40 cm pour un réseau rigide, ≤ 50 cm pour un réseau flexible</td>
              </tr>
              <tr>
                <td>Classe B</td>
                <td>Supérieure à la classe A, jusqu'à 1,50 m</td>
              </tr>
              <tr>
                <td>Classe C</td>
                <td>Supérieure à 1,50 m, ou position non disponible</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Plus la classe est incertaine (B ou C), plus la prudence et les méthodes de recherche manuelle doivent être renforcées.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-distances">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La règle de base</span>
          <h2 id="titre-distances">La règle du mètre, et ses variantes</h2>
          <hr className="trait" />
          <p>Autour de tout point où un réseau émerge du sol, une distance minimale d'un mètre s'impose, à la fois horizontalement et verticalement. Certains réseaux exigent davantage.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Type de réseau</th>
                <th scope="col">Vigilance particulière</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Électrique haute tension</td>
                <td>Distances renforcées, souvent 3 à 5 mètres selon la tension</td>
              </tr>
              <tr>
                <td>Électrique basse tension</td>
                <td>Distance de base, vigilance constante</td>
              </tr>
              <tr>
                <td>Gaz</td>
                <td>Prudence maximale&nbsp;: tout endommagement peut provoquer une explosion</td>
              </tr>
              <tr>
                <td>Eau et assainissement</td>
                <td>Distance modérée, mais rupture aux conséquences significatives</td>
              </tr>
              <tr>
                <td>Fibre optique et télécoms</td>
                <td>Danger humain limité, mais coût de réparation élevé</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-methodes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Sur le terrain</span>
          <h2 id="titre-methodes">Les bonnes méthodes, et ce qu'il ne faut jamais faire</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Recherche manuelle</h3>
            <p>Creuser à distance du réseau localisé, puis progresser prudemment à mesure qu'on s'en rapproche.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Détection géophysique</h3>
            <p>Utiliser un détecteur ou un radar de sol pour confirmer la position exacte avant de creuser.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Arrêt préventif</h3>
            <p>Interrompre les travaux dès que la position réelle diffère de celle annoncée&nbsp;: mieux vaut un arrêt de chantier qu'un réseau endommagé.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Ce qu'il ne faut jamais faire&nbsp;: creuser à la pioche ou à la bêche directement au contact d'un réseau, utiliser un outil pneumatique sans avoir vérifié sa position, ou ignorer un marquage au sol.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-anomalie">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Le réflexe à avoir</span>
          <h2 id="titre-anomalie">En cas de découverte anormale</h2>
          <p>Réseau découvert à un endroit inattendu, fuite détectée, contact accidentel&nbsp;: la formation opérateur reprend et approfondit la règle des 4A déjà enseignée dans nos formations AIPR&nbsp;— Arrêter, Alerter, Aménager, Afficher — avec un accent particulier sur la documentation de l'incident&nbsp;: photos, heure, lieu exact, témoins.</p>
          <p>Cette traçabilité protège à la fois les personnes et l'entreprise en cas de contentieux ultérieur avec l'exploitant du réseau ou les assurances.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> L'opérateur applique la règle des 4A et rapporte l'incident</li>
            <li><span className="puce" aria-hidden="true">✓</span> L'encadrant coordonne la réponse et documente</li>
            <li><span className="puce" aria-hidden="true">✓</span> Le concepteur s'assure de la conformité globale du chantier</li>
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
            <summary>Que risque mon entreprise si mes opérateurs ne sont pas formés&nbsp;?</summary>
            <p>Des sanctions administratives (jusqu'à 75&nbsp;000&nbsp;€ pour une personne morale), en plus de la responsabilité civile et pénale en cas d'accident, et un risque d'arrêt de chantier ordonné par la DREAL.</p>
          </details>

          <details className="faq-item">
            <summary>Que signifie une classe de précision C&nbsp;?</summary>
            <p>Que la position du réseau est incertaine au-delà de 1,50 mètre, ou tout simplement non disponible. Dans ce cas, la prudence et la recherche manuelle progressive deviennent indispensables.</p>
          </details>

          <details className="faq-item">
            <summary>La règle du mètre s'applique-t-elle à tous les réseaux de la même façon&nbsp;?</summary>
            <p>C'est la règle de base, mais certains réseaux, notamment les lignes électriques haute tension, exigent des distances bien supérieures, parfois 3 à 5 mètres.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je continuer à creuser si le marquage au sol semble incohérent&nbsp;?</summary>
            <p>Non, il faut arrêter immédiatement et vérifier. Un marquage incohérent avec la réalité du terrain est justement le signal qui doit déclencher la prudence, pas son contraire.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation suffit-elle pour encadrer un chantier&nbsp;?</summary>
            <p>Non, l'opérateur intervient sur le terrain&nbsp;: l'encadrement d'un chantier relève du niveau Encadrant AIPR, avec des responsabilités plus larges&nbsp;: retrouvez le détail sur notre page Formations AIPR.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation opérateurs AIPR</h2>
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
              <label htmlFor="effectif">Nombre d'opérateurs à former</label>
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
