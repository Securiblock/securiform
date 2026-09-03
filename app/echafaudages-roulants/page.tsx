import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation échafaudages roulants R457",
      "description": "Formation à la stabilisation, au montage et au déplacement sécurisé des échafaudages roulants, conformément à la recommandation R457 de l'INRS et à l'article R4323-75 du Code du travail. Habilitation valable 5 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/travaux-hauteur-echafaudages/formation-echafaudages-roulants/"
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
          "name": "Formation échafaudages roulants",
          "item": "https://securiform.fr/travaux-hauteur-echafaudages/formation-echafaudages-roulants/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation échafaudages roulants R457 — SECURIFORM",
  description: "Formation SECURIFORM aux échafaudages roulants R457 : blocage des roues, stabilisateurs, procédure de déplacement sécurisé.",
  alternates: { canonical: "/echafaudages-roulants" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/echafaudages-roulants",
    title: "Formation échafaudages roulants R457 — SECURIFORM",
    description: "Stabilisation, blocage des roues, déplacement sécurisé : formation SECURIFORM aux échafaudages roulants R457.",
    images: ["/image/formation-echafaudage-roulant.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation échafaudages roulants R457 — SECURIFORM",
    description: "Formez vos équipes à la stabilisation et au déplacement sécurisé des échafaudages roulants, avec SECURIFORM.",
    images: ["/image/formation-echafaudage-roulant.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation échafaudages roulants" style={{ backgroundImage: "url('/image/formation-echafaudage-roulant.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/travaux-hauteur-echafaudages">Travaux en hauteur et échafaudages</Link>
          <span aria-hidden="true">›</span>
          <span>Échafaudages roulants</span>
        </p>
        <h1>Formation échafaudages roulants (R457)</h1>
        <p>Stabilisation, blocage des roues et déplacement sécurisé&nbsp;: la formation dédiée aux échafaudages mobiles, adaptés aux interventions ponctuelles.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Une formation dédiée à la mobilité</h2>
        <hr className="trait" />
        <p>La recommandation R457 de l'INRS encadre les échafaudages préfabriqués reposant sur roues, conformes à la norme NF EN 1004. Elle ne couvre pas les tours roulantes assemblées à partir d'éléments d'échafaudages fixes, qui restent sous la recommandation R408. La règle absolue à retenir&nbsp;: l'article R4323-75 du Code du travail interdit formellement qu'un travailleur reste sur l'échafaudage pendant son déplacement.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-comparaison">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-comparaison">R408 ou R457&nbsp;?</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">R408 — Échafaudage fixe</th>
                <th scope="col">R457 — Échafaudage roulant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stabilisation</td>
                <td>Ancrages permanents à la façade</td>
                <td>Freins sur les roues + stabilisateurs</td>
              </tr>
              <tr>
                <td>Hauteur maximale</td>
                <td>Plusieurs dizaines de mètres selon ancrages</td>
                <td>8 m en intérieur, 12 m en extérieur</td>
              </tr>
              <tr>
                <td>Durée typique d'usage</td>
                <td>Travaux de longue durée</td>
                <td>Interventions courtes à moyennes</td>
              </tr>
              <tr>
                <td>Durée de la formation</td>
                <td>3 jours (21 heures)</td>
                <td>2 jours (14 heures)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Une formation combinée R408 + R457 (4 à 5 jours) est possible pour les équipes amenées à utiliser les deux types de structures. Les deux habilitations sont valables 5 ans.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-stabilisation">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le principe fondamental</span>
          <h2 id="titre-stabilisation">Trois conditions pour rester stable</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Freins bloqués</h3>
            <p>Toutes les roues doivent être freinées avant toute montée sur l'échafaudage, sans exception.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Stabilisateurs déployés</h3>
            <p>Obligatoires dès 2,5 mètres de hauteur de plancher, étendus au maximum et à égale longueur des quatre côtés.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Ratio hauteur/largeur</h3>
            <p>La hauteur ne doit pas dépasser 3 à 4 fois la largeur de la base, stabilisateurs déployés compris.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-deplacement">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le moment le plus sensible</span>
          <h2 id="titre-deplacement">Déplacer un échafaudage roulant en sécurité</h2>
          <hr className="trait" />
          <p>Aucune exception&nbsp;: personne ne reste sur l'échafaudage pendant qu'il se déplace.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Évacuer et décharger</h3>
            <p>Toutes les personnes descendent, tous les outils et matériaux sont retirés de la plateforme.</p>
          </div>
          <div className="etape reveal">
            <h3>Rétracter et débloquer</h3>
            <p>Les stabilisateurs sont repliés, puis les freins sont débloqués&nbsp;— jamais avant l'évacuation complète.</p>
          </div>
          <div className="etape reveal">
            <h3>Pousser et guider</h3>
            <p>Déplacement à vitesse lente, uniquement par poussée manuelle, jamais par traction d'un véhicule.</p>
          </div>
          <div className="etape reveal">
            <h3>Restabiliser</h3>
            <p>Une fois repositionné, l'échafaudage est à nouveau freiné, stabilisé et vérifié avant toute remontée.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-equipe">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Une manœuvre coordonnée</span>
          <h2 id="titre-equipe">Une équipe, des rôles précis</h2>
          <p>Un déplacement d'échafaudage roulant ne s'improvise pas&nbsp;: il implique une reconnaissance préalable du parcours (nature du sol, obstacles, lignes électriques) et une coordination claire entre plusieurs personnes.</p>
          <p>La formation prépare les stagiaires à occuper chacun de ces rôles, et à savoir arrêter immédiatement la manœuvre en cas d'imprévu.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Rôles de l'équipe">
          <h3>Les rôles clés</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Chef de manœuvre&nbsp;: coordonne et donne le signal de départ</li>
            <li><span className="puce" aria-hidden="true">✓</span> Guideurs&nbsp;: anticipent les obstacles et la trajectoire</li>
            <li><span className="puce" aria-hidden="true">✓</span> Pousseurs&nbsp;: assurent un effort coordonné et uniforme</li>
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
            <summary>Peut-on tracter un échafaudage roulant avec un véhicule&nbsp;?</summary>
            <p>Non, c'est formellement interdit. Le déplacement doit toujours se faire par poussée manuelle, à vitesse lente et contrôlée.</p>
          </details>

          <details className="faq-item">
            <summary>À partir de quelle hauteur les stabilisateurs sont-ils obligatoires&nbsp;?</summary>
            <p>Généralement dès 2,5 mètres de hauteur de plancher, et systématiquement au-delà de 3 mètres de hauteur totale, selon les préconisations du fabricant.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on utiliser un échafaudage roulant par vent fort&nbsp;?</summary>
            <p>Non, l'utilisation doit être interrompue en cas de vent fort, l'échafaudage devant rester stable sans déplacement ni basculement inopiné, quelles que soient les conditions rencontrées.</p>
          </details>

          <details className="faq-item">
            <summary>Que risque-t-on à déplacer l'échafaudage avec quelqu'un dessus&nbsp;?</summary>
            <p>C'est une infraction au Code du travail engageant la responsabilité du superviseur et de l'employeur, en plus du risque d'accident grave. Cette règle ne souffre aucune exception.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je combiner cette formation avec celle des échafaudages fixes&nbsp;?</summary>
            <p>Oui, une formation combinée R408 et R457 existe pour les équipes utilisant les deux types de structures, sur 4 à 5 jours au lieu de deux sessions séparées.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation échafaudages roulants</h2>
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
              <label htmlFor="formule">Formule souhaitée</label>
              <select id="formule" name="formule">
                <option value="r457">R457 seul</option>
                <option value="combine">Formation combinée R408 + R457</option>
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
