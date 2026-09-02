import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formations travaux en hauteur et échafaudages",
      "description": "Formation au port du harnais anti-chute, formation échafaudages fixes (recommandation R408) et formation échafaudages roulants (recommandation R457), conformément au Code du travail.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/travaux-hauteur-echafaudages/"
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
          "name": "Formations travaux en hauteur et échafaudages",
          "item": "https://securiform.fr/travaux-hauteur-echafaudages/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Travaux en hauteur et échafaudages — SECURIFORM",
  description: "SECURIFORM forme au port du harnais anti-chute et au montage d'échafaudages fixes (R408) et roulants (R457), partout en France.",
  alternates: { canonical: "/travaux-hauteur-echafaudages" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/travaux-hauteur-echafaudages",
    title: "Formations travaux en hauteur et échafaudages — SECURIFORM",
    description: "Port du harnais anti-chute, échafaudages fixes (R408) et roulants (R457) : SECURIFORM forme vos équipes partout en France.",
    images: ["/image/formation-travaux-hauteur.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations travaux en hauteur et échafaudages — SECURIFORM",
    description: "Harnais anti-chute, échafaudages fixes et roulants : préparez vos équipes avec SECURIFORM.",
    images: ["/image/formation-travaux-hauteur.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formations travaux en hauteur et échafaudages">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Travaux en hauteur et échafaudages</span>
        </p>
        <h1>Formations travaux en hauteur et échafaudages</h1>
        <p>Port du harnais anti-chute, montage d'échafaudages fixes et roulants&nbsp;: formez vos équipes aux techniques qui préviennent la première cause d'accidents mortels après la route.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Un risque à ne pas sous-estimer</span>
        <h2 id="titre-intro">La chute de hauteur, 2ᵉ cause d'accidents du travail mortels en France</h2>
        <hr className="trait" />
        <p>Le Code du travail encadre strictement le travail en hauteur et l'usage des échafaudages (articles R4323-58 à R4323-106). Port du harnais, montage d'échafaudages fixes ou roulants&nbsp;: chaque situation demande une formation adaptée et des vérifications régulières du matériel.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-parcours">
      <div className="container">
        <h2 id="titre-parcours" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Nos formations travaux en hauteur et échafaudages</h2>
        <div className="formations-grid cols-3">

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-harnais.jpg" alt="Formation port du harnais anti-chute" loading="lazy" />
            </div>
            <h3>Travaux en hauteur</h3>
            <p>Port du harnais anti-chute, longes, antichutes à rappel automatique et points d'ancrage&nbsp;: les bons réflexes pour travailler en hauteur en sécurité.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/travaux-en-hauteur" aria-label="Formation travaux en hauteur" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-echafaudage-fixe.jpg" alt="Formation échafaudages fixes R408" loading="lazy" />
            </div>
            <h3>Échafaudages fixes (R408)</h3>
            <p>Montage, utilisation, démontage et réception d'échafaudages de pied ancrés à la façade, pour les travaux de longue durée.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/echafaudages-fixes" aria-label="Formation échafaudages fixes" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-echafaudage-roulant.jpg" alt="Formation échafaudages roulants R457" loading="lazy" />
            </div>
            <h3>Échafaudages roulants (R457)</h3>
            <p>Montage, stabilisation et déplacement en sécurité des échafaudages mobiles, adaptés aux interventions ponctuelles.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/echafaudages-roulants" aria-label="Formation échafaudages roulants" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien choisir</span>
          <h2 id="titre-tableau">Échafaudage fixe ou roulant&nbsp;?</h2>
          <hr className="trait" />
          <p>Le choix dépend surtout de la durée des travaux et du besoin de déplacement. SECURIFORM vous aide à identifier la formation adaptée à votre matériel.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">Échafaudage fixe (R408)</th>
                <th scope="col">Échafaudage roulant (R457)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mobilité</td>
                <td>Fixe, ancré à la façade</td>
                <td>Mobile, monté sur roues</td>
              </tr>
              <tr>
                <td>Usage</td>
                <td>Travaux de longue durée</td>
                <td>Interventions ponctuelles et déplacements fréquents</td>
              </tr>
              <tr>
                <td>Charges admissibles</td>
                <td>Élevées</td>
                <td>Plus limitées</td>
              </tr>
              <tr>
                <td>Montage / démontage</td>
                <td>Plus long, structure complète</td>
                <td>Rapide et simple</td>
              </tr>
              <tr>
                <td>Validité de l'attestation</td>
                <td>5 ans</td>
                <td>5 ans</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La bonne méthode</span>
          <h2 id="titre-etapes">Un montage sécurisé en 4 temps</h2>
          <hr className="trait" />
          <p>Ce qui distingue un chantier sécurisé d'un accident&nbsp;: le respect scrupuleux de cet enchaînement, quel que soit le type d'échafaudage.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Préparer</h3>
            <p>Vérifier la portance du sol, caler si besoin, et implanter l'échafaudage en dégageant les circulations.</p>
          </div>
          <div className="etape reveal">
            <h3>Monter niveau par niveau</h3>
            <p>Compléter chaque niveau avant de passer au suivant, garde-corps installés dès qu'un niveau est accessible.</p>
          </div>
          <div className="etape reveal">
            <h3>Ancrer</h3>
            <p>Fixer l'échafaudage à la façade à intervalles réguliers pour empêcher tout basculement.</p>
          </div>
          <div className="etape reveal">
            <h3>Réceptionner</h3>
            <p>Faire vérifier l'ensemble par une personne compétente avant toute utilisation par l'équipe.</p>
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
            <summary>Un harnais suffit-il pour travailler en sécurité en hauteur&nbsp;?</summary>
            <p>Non. Un système antichute complet repose sur trois éléments indissociables&nbsp;: le harnais, une longe ou un antichute à rappel automatique, et un point d'ancrage adapté. L'absence d'un seul de ces éléments rend les deux autres inutiles.</p>
          </details>

          <details className="faq-item">
            <summary>À quelle fréquence un échafaudage doit-il être vérifié&nbsp;?</summary>
            <p>Trois vérifications sont prévues&nbsp;: une réception complète avant la première utilisation, une vérification journalière rapide avant chaque prise de poste, et une vérification trimestrielle approfondie, ou après tout événement exceptionnel comme une tempête.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité des attestations R408 et R457&nbsp;?</summary>
            <p>Ces attestations sont valables 5 ans. Avant leur expiration, un recyclage permet de renouveler la compétence pour une nouvelle période. Le port du harnais fait quant à lui l'objet d'un recyclage recommandé tous les 3 ans.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on former une équipe aux deux types d'échafaudages en même temps&nbsp;?</summary>
            <p>Oui, une formation combinée R408 et R457 est possible pour les équipes amenées à utiliser les deux types de structures, ce qui optimise le temps de formation par rapport à deux sessions séparées.</p>
          </details>

          <details className="faq-item">
            <summary>Formation en centre ou directement sur mon chantier&nbsp;?</summary>
            <p>Les deux formules existent. Une formation sur site permet de s'entraîner directement sur le matériel et la configuration réellement utilisés par vos équipes, ce qui est souvent préférable pour les échafaudages.</p>
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
              <label htmlFor="formation">Formation souhaitée</label>
              <select id="formation" name="formation">
                <option value="harnais">Travaux en hauteur (port du harnais)</option>
                <option value="r408">Échafaudages fixes (R408)</option>
                <option value="r457">Échafaudages roulants (R457)</option>
                <option value="combine">Formation combinée R408 + R457</option>
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
