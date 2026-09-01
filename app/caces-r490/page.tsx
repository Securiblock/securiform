import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation CACES R490 — Grues auxiliaires de chargement",
      "description": "Formation à la conduite en sécurité des grues auxiliaires de chargement montées sur véhicules porteurs, avec options télécommande et treuil. Certificat valable 10 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces-r490/"
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
          "name": "Conduite en sécurité et CACES®",
          "item": "https://securiform.fr/accueil/formations-a-la-conduite-en-securite-caces/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CACES R490",
          "item": "https://securiform.fr/caces-r490/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R490 — Grues auxiliaires de chargement — SECURIFORM",
  description: "Formation CACES R490 avec SECURIFORM : conduite des grues auxiliaires de chargement montées sur véhicules porteurs, options télécommande et treuil. Certificat valable 10 ans, partout en France.",
  alternates: { canonical: "/caces-r490" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-r490",
    title: "Formation CACES® R490 — Grues auxiliaires de chargement — SECURIFORM",
    description: "Conduite en sécurité des grues auxiliaires de chargement, options télécommande et treuil. Formation SECURIFORM, certificat valable 10 ans.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R490 — SECURIFORM",
    description: "Conduite en sécurité des grues auxiliaires de chargement, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R490">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R490</span>
        </p>
        <h1>Formation CACES® R490 — Grues auxiliaires de chargement</h1>
        <p>Formez-vous à la conduite en sécurité des grues de chargement montées sur véhicules porteurs, pour le transport routier et l'approvisionnement de chantier.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Une seule catégorie, deux options possibles</h2>
        <hr className="trait" />
        <p>Le CACES R490 encadre la conduite des grues auxiliaires de chargement, ces bras de levage montés à l'arrière ou sur le flanc d'un véhicule porteur, utilisés pour charger et décharger des matériaux sur les chantiers et lors du transport routier. Contrairement au R482, il ne comporte pas de sous-catégories par masse&nbsp;: une seule certification couvre l'ensemble des grues de chargement, avec deux options possibles selon leur équipement.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-options">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Selon votre matériel</span>
          <h2 id="titre-options">Les options du CACES R490</h2>
          <hr className="trait" />
          <p>Ces options s'ajoutent à la certification de base, selon les équipements réellement présents sur votre grue.</p>
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Certification de base</h3>
            <p>Conduite standard de la grue depuis son poste de commande fixe, pour le chargement et le déchargement de charges courantes.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Option télécommande</h3>
            <p>Pour les grues pilotées à distance depuis le sol, offrant une meilleure visibilité sur la charge et la zone de manœuvre.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Option treuil</h3>
            <p>Pour les grues équipées d'un treuil, utilisé pour des opérations de levage spécifiques nécessitant plus de précision.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Vous ne savez pas si votre grue nécessite une ou plusieurs options&nbsp;? Contactez-nous, nous identifions cela avec vous.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que couvre la formation</span>
          <h2 id="titre-programme">Un programme théorique et pratique complet</h2>
          <p>La partie théorique aborde la réglementation applicable (recommandation R490 de la CNAM), la technologie de la grue (vérins, stabilisateurs, limiteur de charge), les règles de stabilité du véhicule porteur, les zones dangereuses et les vérifications d'usage avant chaque utilisation.</p>
          <p>La partie pratique se déroule sur une grue réelle&nbsp;: déploiement des stabilisateurs, prise et pose de charges à différentes hauteurs et portées, utilisation de la télécommande ou du treuil si votre matériel en est équipé, puis repliement et rangement en sécurité.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Répartition théorie/pratique">
          <h3>Répartition type</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Théorie&nbsp;: réglementation, technologie, stabilité</li>
            <li><span className="puce" aria-hidden="true">✓</span> Pratique&nbsp;: mise en œuvre complète sur grue réelle</li>
            <li><span className="puce" aria-hidden="true">✓</span> Évaluations progressives tout au long du stage</li>
            <li><span className="puce" aria-hidden="true">✓</span> Test final par un organisme testeur certifié INRS</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La bonne méthode</span>
          <h2 id="titre-etapes">Utiliser une grue de chargement en 4 temps</h2>
          <hr className="trait" />
          <p>Cet enchaînement fait partie des automatismes que la formation cherche à installer durablement.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Vérifier</h3>
            <p>Contrôler l'état de la grue, du limiteur de charge et du véhicule porteur avant toute utilisation.</p>
          </div>
          <div className="etape reveal">
            <h3>Stabiliser</h3>
            <p>Déployer entièrement les stabilisateurs sur un sol adapté, condition indispensable à toute manœuvre.</p>
          </div>
          <div className="etape reveal">
            <h3>Manutentionner</h3>
            <p>Prendre et poser la charge en respectant les limites de charge selon la portée utilisée.</p>
          </div>
          <div className="etape reveal">
            <h3>Replier</h3>
            <p>Ranger la grue et les stabilisateurs en position de transport avant de reprendre la route.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient</span>
          <h2 id="titre-risques">Les principaux risques de la grue de chargement</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Basculement du véhicule</h3>
            <p>Lié à une stabilisation insuffisante ou un sol instable. Prévenu par le déploiement complet des stabilisateurs avant toute manœuvre.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chute de charge</h3>
            <p>Causée par un élingage mal réalisé ou un dépassement du diagramme de charge. Prévenu par le respect strict des limites indiquées par la grue.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Écrasement</h3>
            <p>Risque pour les personnes présentes dans la zone de manœuvre. Prévenu par un périmètre de sécurité clairement délimité.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Électrocution</h3>
            <p>Par proximité d'une ligne électrique aérienne lors du déploiement du bras. Prévenu par le repérage systématique avant utilisation.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-durees">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Combien de temps</span>
          <h2 id="titre-durees">Durée et validité</h2>
          <hr className="trait" />
          <p>À titre indicatif&nbsp;; la durée exacte dépend de votre expérience et des options nécessaires.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Profil</th>
                <th scope="col">Durée indicative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Formation initiale débutant</td>
                <td>2 à 3 jours</td>
              </tr>
              <tr>
                <td>Formation initiale avec option (télécommande ou treuil)</td>
                <td>3 jours</td>
              </tr>
              <tr>
                <td>Expérimenté (pratique déjà acquise)</td>
                <td>1 à 2 jours</td>
              </tr>
              <tr>
                <td>Recyclage avant expiration</td>
                <td>1 jour</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Le certificat CACES R490 est valable 10 ans à compter de son obtention.</p>
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
            <summary>Le CACES R490 comporte-t-il plusieurs catégories, comme le R482&nbsp;?</summary>
            <p>Non. Contrairement au R482 et ses onze catégories, le R490 constitue une seule certification pour l'ensemble des grues auxiliaires de chargement, avec deux options possibles&nbsp;: télécommande et treuil.</p>
          </details>

          <details className="faq-item">
            <summary>Ai-je besoin de l'option télécommande si ma grue n'est pas encore équipée&nbsp;?</summary>
            <p>Non, l'option n'est utile que si vous utilisez réellement ce mode de pilotage. Il est cependant possible de l'ajouter plus tard si votre équipement évolue.</p>
          </details>

          <details className="faq-item">
            <summary>Le CACES R490 suffit-il pour conduire mon véhicule porteur&nbsp;?</summary>
            <p>Non, le CACES R490 certifie uniquement l'usage de la grue. La conduite du véhicule porteur reste soumise à son propre permis de conduire, selon son poids total autorisé en charge.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité du CACES R490&nbsp;?</summary>
            <p>Le certificat est valable 10 ans. Un recyclage est recommandé avant son expiration pour actualiser vos connaissances et prolonger la validité.</p>
          </details>

          <details className="faq-item">
            <summary>Et si mon activité concerne une autre catégorie CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également aux CACES R482 (engins de chantier), R484 (ponts roulants), R485 (gerbeurs), R486-A (nacelles) et R489 (chariots de manutention)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R490</h2>
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
              <label htmlFor="option">Option nécessaire</label>
              <select id="option" name="option">
                <option value="base">Certification de base</option>
                <option value="telecommande">Option télécommande</option>
                <option value="treuil">Option treuil</option>
                <option value="deux">Télécommande + treuil</option>
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
            <p>Au-delà de la formation, SECURIFORM réalise également la VGP de vos grues auxiliaires, conformément à la réglementation en vigueur.</p>
            <Link className="btn btn-blanc" href="/vgp-grues-auxiliaires">VGP des grues auxiliaires</Link>
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
