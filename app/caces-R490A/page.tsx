import type { Metadata } from "next";
import Link from "next/link";
import ComparateurCaces from "@/components/comparateur-caces";
import { submitForm } from "@/app/actions";
import CalculateurRecyclage from "@/components/calculateur-recyclage";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation CACES R490A : Grues auxiliaires de chargement",
      "description": "Formation à la conduite en sécurité des grues auxiliaires de chargement montées sur véhicules porteurs, avec option télécommande. Certificat valable 5 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces-R490A/"
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
          "item": "https://securiform.fr/caces/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CACES R490A",
          "item": "https://securiform.fr/caces-R490A/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R490A - SECURIFORM",
  description: "Formation CACES R490A avec SECURIFORM : grues auxiliaires de chargement, option télécommande. Certificat valable 5 ans.",
  alternates: { canonical: "/caces-R490A" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-R490A",
    title: "Formation CACES® R490A - Grues auxiliaires de chargement - SECURIFORM",
    description: "Conduite en sécurité des grues auxiliaires de chargement, option télécommande. Formation SECURIFORM, certificat valable 5 ans.",
    images: ["/image/caces-R490A.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R490A - SECURIFORM",
    description: "Conduite en sécurité des grues auxiliaires de chargement, avec SECURIFORM.",
    images: ["/image/caces-R490A.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R490A" style={{ backgroundImage: "url('/image/caces-R490A.webp')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R490A</span>
        </p>
        <h1>Formation à la conduite en sécurité ou CACES® <span className="page-hero-engin">R490A Grues de chargement</span></h1>
        <p>Formez-vous à la conduite en sécurité des grues de chargement montées sur véhicules porteurs, pour le transport routier et l'approvisionnement de chantier.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Une seule catégorie, une option possible</h2>
        <hr className="trait" />
        <p>La recommandation R490A encadre la conduite des grues auxiliaires de chargement, ces bras de levage montés à l'arrière ou sur le flanc d'un véhicule porteur, utilisés pour charger et décharger des matériaux sur les chantiers et lors du transport routier.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-options">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Selon votre matériel</span>
          <h2 id="titre-options">Montages et modes de conduite</h2>
          <hr className="trait" />
          <p>L'emplacement de la grue sur le porteur et la façon de la piloter changent les gestes de l'opérateur&nbsp;: la formation s'adapte à votre équipement.</p>
        </div>

        <h3 className="sous-titre-section reveal">Les 3 types de montage</h3>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Derrière la cabine</h3>
            <p>Le montage le plus courant&nbsp;: la grue est installée entre la cabine et le plateau. Elle dessert toute la longueur du plateau et le poids de la grue est reporté vers l'avant du véhicule.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>En porte-à-faux arrière</h3>
            <p>La grue est fixée à l'extrémité arrière du châssis, souvent repliable. Le plateau reste entièrement libre pour le chargement, mais la stabilité du porteur et la charge sur l'essieu arrière demandent une attention particulière.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>En position centrale</h3>
            <p>La grue est montée au milieu du plateau, entre deux zones de chargement. Elle dessert l'avant comme l'arrière du véhicule, une configuration fréquente sur les porteurs de grande longueur.</p>
          </article>

        </div>

        <h3 className="sous-titre-section reveal">Les 2 modes de conduite</h3>
        <div className="grille-categories cols-2">

          <article className="categorie-card reveal">
            <h3>Conduite par commande embarquée</h3>
            <p>L'opérateur pilote depuis les commandes installées sur la grue elle-même (leviers au pied de la colonne ou poste surélevé). Il doit se placer de façon à garder la charge et la zone d'évolution en vue.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Conduite par télécommande</h3>
            <p>L'opérateur pilote à distance avec une radiocommande ou une commande filaire. Il choisit librement sa position pour voir la charge, rester hors de la zone d'évolution et guider les manœuvres au plus près.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Vous ne savez pas quel montage ou quel mode de conduite correspond à votre grue&nbsp;? Contactez-nous, nous identifions cela avec vous.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que couvre la formation</span>
          <h2 id="titre-programme">Un programme théorique et pratique complet</h2>
          <p>La partie théorique aborde la réglementation applicable (recommandation R490A de la CNAM), la technologie de la grue (vérins, stabilisateurs, limiteur de charge), les règles de stabilité du véhicule porteur, les zones dangereuses et les vérifications d'usage avant chaque utilisation.</p>
          <p>La partie pratique se déroule sur une grue réelle&nbsp;: déploiement des stabilisateurs, prise et pose de charges à différentes hauteurs et portées, utilisation de la télécommande si votre matériel en est équipé, puis repliement et rangement en sécurité.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Déroulement type de la formation">
          <h3>Déroulement type</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> 30 à 50&nbsp;% de théorie en salle</li>
            <li><span className="puce" aria-hidden="true">✓</span> 50 à 70&nbsp;% de pratique sur engins</li>
            <li><span className="puce" aria-hidden="true">✓</span> Évaluations progressives tout au long du stage</li>
            <li><span className="puce" aria-hidden="true">✓</span> Test théorique et pratique</li>
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
          <h2 id="titre-durees">Une durée sur-mesure</h2>
          <hr className="trait" />
          <p>À titre indicatif, la durée exacte dépend de votre expérience et de l'option nécessaire.</p>
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
                <td>Formation initiale avec option télécommande</td>
                <td>3 jours</td>
              </tr>
              <tr>
                <td>Expérimenté</td>
                <td>1 à 2 jours</td>
              </tr>
              <tr>
                <td>Recyclage</td>
                <td>1 jour</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>La formation ou le CACES® R490A est valable 5 ans à compter de sa validation.</p>
      </div>
    </section>


<section className="section" aria-labelledby="titre-comparateur">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Comparer</span>
          <h2 id="titre-comparateur">Les autres CACES® en un coup d'œil</h2>
          <hr className="trait" />
          <p>Engins concernés, durée de formation et validité.</p>
        </div>
        <div className="reveal">
          <ComparateurCaces actuel="R490A" />
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
            <summary>Le CACES R490A comporte-t-il plusieurs catégories, comme le R482B&nbsp;?</summary>
            <p>Non. Contrairement au R482B et ses onze catégories, le R490A constitue une seule certification pour l'ensemble des grues auxiliaires de chargement, avec une option possible&nbsp;: télécommande.</p>
          </details>

          <details className="faq-item">
            <summary>Ai-je besoin de l'option télécommande si ma grue n'est pas encore équipée&nbsp;?</summary>
            <p>Non, l'option n'est utile que si vous utilisez réellement ce mode de pilotage. Il est cependant possible de l'ajouter plus tard si votre équipement évolue.</p>
          </details>

          <details className="faq-item">
            <summary>Le CACES R490A suffit-il pour conduire mon véhicule porteur&nbsp;?</summary>
            <p>Non, le CACES R490A certifie uniquement l'usage de la grue. La conduite du véhicule porteur reste soumise à son propre permis de conduire, selon son poids total autorisé en charge.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de la formation ou du CACES R490A&nbsp;?</summary>
            <p>La formation ou le CACES® est valable 5 ans.</p>
          </details>

          <details className="faq-item">
            <summary>Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R482B (engins de chantier), R484A (ponts roulants), R485A (gerbeurs à conducteur accompagnant), R486B (nacelles élévatrices) et R489A (chariots)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<CalculateurRecyclage formation="caces-R490A" />

    

<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R490A</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe vous recontacte dans l'heure pour organiser votre session.</p>
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
              <label htmlFor="option">Option nécessaire</label>
              <select id="option" name="option">
                <option value="base">Certification de base</option>
                <option value="telecommande">Option télécommande</option>
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
          <p>Afin de renforcer l'équipe <strong>SECURIFORM</strong>, nous recrutons des formateurs sur toute la moitié nord de la France.</p>
        </div>
        <Link className="btn btn-plein" href="/nous-recrutons">En savoir +</Link>
      </div>
    </section>


    

    
<section className="cta" aria-labelledby="titre-contact">
      <div className="container reveal">
        <h2 id="titre-contact">Vous avez une question&nbsp;?</h2>
        <p>Notre équipe vous répond dans l'heure et s'assure de l'adéquation de nos formations aux risques de votre entreprise.</p>
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
            <div className="vgp-boutons">
              <Link className="btn btn-blanc" href="/vgp-grues-auxiliaires">VGP des grues auxiliaires</Link>
              <Link className="btn btn-contour" href="/vgp#checklist">Ma checklist VGP</Link>
            </div>
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
