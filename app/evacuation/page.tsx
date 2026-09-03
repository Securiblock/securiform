import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation évacuation",
      "description": "Formation aux rôles de guide-file et serre-file, à l'organisation d'exercices d'évacuation réglementaires et à l'adaptation de l'évacuation aux personnes en situation de handicap, conformément aux articles R4227-28 et R4227-39 du Code du travail.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/incendie-evacuation/formation-evacuation/"
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation évacuation",
          "item": "https://securiform.fr/incendie-evacuation/formation-evacuation/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation évacuation des locaux — SECURIFORM",
  description: "Formation SECURIFORM à l'évacuation : rôles de guide-file et serre-file, comportement en situation de danger, exercices tous les 6 mois.",
  alternates: { canonical: "/evacuation" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/evacuation",
    title: "Formation évacuation — SECURIFORM",
    description: "Guides-files, serre-files, organisation d'exercices : formation SECURIFORM à l'évacuation des locaux.",
    images: ["/image/formation-evacuation.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation évacuation — SECURIFORM",
    description: "Formez vos guides-files et serre-files à organiser une évacuation efficace, avec SECURIFORM.",
    images: ["/image/formation-evacuation.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation évacuation" style={{ backgroundImage: "url('/image/formation-evacuation.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/incendie-evacuation">Formations incendie et évacuation</Link>
          <span aria-hidden="true">›</span>
          <span>Évacuation</span>
        </p>
        <h1>Formation évacuation</h1>
        <p>Préparer et encadrer un exercice d'évacuation&nbsp;: rôles de guide-file et serre-file, comportement humain en situation de danger, point de rassemblement.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-roles">
      <div className="container section-head reveal">
        <span className="surtitre">Deux rôles complémentaires</span>
        <h2 id="titre-roles">Guide-file et serre-file</h2>
        <hr className="trait" />
        <p>Une évacuation ordonnée repose sur des personnes désignées à l'avance, reconnaissables et formées à leur rôle précis. La règle de base&nbsp;: un guide-file et un serre-file pour environ 25 personnes.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-tableau-roles">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui fait quoi</span>
          <h2 id="titre-tableau-roles">Les missions de chacun</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Rôle</th>
                <th scope="col">Missions principales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Guide-file</td>
                <td>Dirige les personnes vers la sortie appropriée, les accompagne jusqu'au point de rassemblement, maintient le calme</td>
              </tr>
              <tr>
                <td>Serre-file</td>
                <td>Vérifie que chaque local est vide (y compris sanitaires et réserves), ferme portes et fenêtres, évacue en dernier</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Pour être identifiables immédiatement, guides-files et serre-files sont équipés d'un sifflet, d'un brassard ou gilet fluorescent, et parfois d'un mégaphone.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-comportement">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Comprendre pour mieux agir</span>
          <h2 id="titre-comportement">Le comportement humain face au danger</h2>
          <p>Face à un signal de danger, la peur peut dégénérer en réactions désorganisées&nbsp;: mouvements chaotiques vers les sorties, imitation aveugle des autres, ou au contraire déni du danger et refus d'évacuer. Ces réflexes ne sont pas des exceptions&nbsp;: ce sont des réactions humaines courantes que la formation permet d'anticiper.</p>
          <p>Une alarme reconnaissable, des consignes simples et répétées, et la présence visible de guides-files rassurants suffisent à transformer ces réactions instinctives en évacuation ordonnée.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Ce qui canalise le comportement">
          <h3>Ce qui rassure et canalise</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Un signal d'alarme reconnu de tous</li>
            <li><span className="puce" aria-hidden="true">✓</span> Une consigne unique et claire, répétée si besoin</li>
            <li><span className="puce" aria-hidden="true">✓</span> Une autorité visible (guide-file identifiable)</li>
            <li><span className="puce" aria-hidden="true">✓</span> Un point de rassemblement clairement identifié</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-actions">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Dès la détection</span>
          <h2 id="titre-actions">Trois actions à mener en même temps</h2>
          <hr className="trait" />
          <p>Dès qu'un danger est détecté, ces trois actions démarrent simultanément, sans attendre l'une pour commencer l'autre.</p>
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Alarme et évacuation</h3>
            <p>Déclenchement immédiat du signal d'alarme, guides-files et serre-files entrent en action.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Alerte des secours</h3>
            <p>Une personne dédiée contacte les pompiers (18 ou 112), en donnant localisation, nature du danger et effectif présent.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Confinement du foyer</h3>
            <p>Si possible sans risque, un Équipier de Première Intervention agit sur un début d'incendie, sans jamais retarder l'évacuation.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-exercice">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Une obligation tous les 6 mois</span>
          <h2 id="titre-exercice">Organiser un exercice d'évacuation</h2>
          <hr className="trait" />
          <p>L'article R4227-39 du Code du travail impose au moins deux exercices par an. La formation prépare à les organiser en 3 temps.</p>
        </div>
        <div className="etapes cols-3">
          <div className="etape reveal">
            <h3>Préparer</h3>
            <p>Définir le scénario, désigner guides-files et serre-files, préparer les fiches d'observation, prévenir les pompiers pour éviter une fausse alerte.</p>
          </div>
          <div className="etape reveal">
            <h3>Dérouler</h3>
            <p>Déclencher l'exercice, chronométrer l'évacuation complète, observer les comportements et les éventuels dysfonctionnements.</p>
          </div>
          <div className="etape reveal">
            <h3>Évaluer</h3>
            <p>Débriefer à chaud, consigner les résultats dans le registre incendie, et mettre à jour le plan d'évacuation si nécessaire.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-handicap">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Une évacuation pour tous</span>
          <h2 id="titre-handicap">Adapter l'évacuation aux personnes handicapées</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Situation</th>
                <th scope="col">Bonne pratique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fauteuil roulant</td>
                <td>Jamais dans les escaliers seul&nbsp;: orienter vers une zone d'attente sécurisée (ZAS)</td>
              </tr>
              <tr>
                <td>Déficience visuelle</td>
                <td>Guidage verbal détaillé, contact physique maintenu jusqu'au point de rassemblement</td>
              </tr>
              <tr>
                <td>Déficience auditive</td>
                <td>Communication visuelle, gestes clairs, signal lumineux d'alarme</td>
              </tr>
              <tr>
                <td>Mobilité réduite</td>
                <td>Bras d'appui, rythme adapté, mieux vaut une progression lente qu'un maintien sur place</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>La zone d'attente sécurisée (ZAS) est un local résistant au feu au moins une heure, permettant d'attendre l'extraction par les pompiers en toute sécurité.</p>
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
            <summary>Combien de guides-files faut-il désigner dans mon entreprise&nbsp;?</summary>
            <p>La règle courante est d'environ un guide-file pour 25 personnes. Une entreprise de 100 salariés désignera donc au minimum 4 guides-files, et autant de serre-files.</p>
          </details>

          <details className="faq-item">
            <summary>Qu'est-ce qu'une zone d'attente sécurisée (ZAS)&nbsp;?</summary>
            <p>C'est un local résistant au feu pendant au moins une heure, destiné aux personnes ne pouvant évacuer seules par les escaliers, en attendant leur extraction par les sapeurs-pompiers.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on utiliser l'ascenseur pour évacuer une personne à mobilité réduite&nbsp;?</summary>
            <p>Non, l'usage des ascenseurs est interdit en cas d'incendie, quelle que soit la situation, car ils peuvent se bloquer ou propager fumée et flammes.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il prévenir les pompiers avant un exercice d'évacuation&nbsp;?</summary>
            <p>Oui, c'est recommandé pour éviter qu'ils ne se déplacent inutilement en pensant à un incendie réel.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation remplace-t-elle celle d'Équipier de Première Intervention&nbsp;?</summary>
            <p>Non, ce sont deux formations complémentaires&nbsp;: l'une prépare à organiser l'évacuation, l'autre à intervenir sur un début d'incendie. Retrouvez le détail sur notre page Formations incendie et évacuation.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation évacuation</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser votre session.</p>
        </div>

        
        <form className="form-devis reveal" action={submitForm}>
          <input type="text" name="site_web" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
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
              <label htmlFor="effectif">Effectif à évacuer</label>
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
