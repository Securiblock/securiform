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
      "name": "Formation CACES R486B : Nacelles élévatrices",
      "description": "Formation à la conduite en sécurité des plateformes élévatrices mobiles de personnel (PEMP), groupes A et B de la recommandation R486B. Certificat valable 5 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces-R486B/"
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
          "name": "CACES R486B",
          "item": "https://securiform.fr/caces-R486B/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R486B - SECURIFORM",
  description: "Formation CACES R486B avec SECURIFORM, groupes A et B : nacelles élévatrices ciseaux, plateformes sur mât, nacelles élévatrices à bras articulé ou télescopique. Certificat valable 5 ans.",
  alternates: { canonical: "/caces-R486B" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-R486B",
    title: "Formation CACES® R486B - Nacelles élévatrices - SECURIFORM",
    description: "PEMP groupes A et B : nacelles élévatrices ciseaux, plateformes sur mât, nacelles élévatrices à bras articulé ou télescopique. Formation SECURIFORM, certificat valable 5 ans.",
    images: ["/image/caces-R486B.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R486B - SECURIFORM",
    description: "Conduite en sécurité des nacelles élévatrices, groupes A et B, avec SECURIFORM.",
    images: ["/image/caces-R486B.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R486B" style={{ backgroundImage: "url('/image/caces-R486B.webp')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R486B</span>
        </p>
        <h1>Formation à la conduite en sécurité ou CACES® <span className="page-hero-engin">R486B Nacelles élévatrices</span></h1>
        <p>Formez-vous à la conduite en sécurité des plateformes élévatrices mobiles de personnel (PEMP)&nbsp;: nacelles élévatrices ciseaux, plateformes sur mât, nacelles élévatrices à bras articulé ou télescopique.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Qu'est-ce que la recommandation R486B&nbsp;?</h2>
        <hr className="trait" />
        <p>La recommandation R486B encadre la conduite des plateformes élévatrices mobiles de personnel (PEMP), plus couramment appelées nacelles élévatrices. Elle distingue deux grands groupes selon le mode d'élévation&nbsp;: le groupe A comprend les PEMP à élévation verticale (nacelles élévatrices ciseaux, plateformes sur mât vertical), où la plateforme se déplace uniquement vers le haut ou le bas, sans mouvement horizontal complexe une fois en hauteur&nbsp;; le groupe B comprend les PEMP à élévation multidirectionnelle (nacelles élévatrices à bras articulé ou télescopique), qui permettent des déplacements combinés une fois la plateforme élevée.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-categories">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-categories">Les différentes catégories de PEMP</h2>
          <hr className="trait" />
          <p>Chaque catégorie combine un groupe et un type&nbsp;: la lettre indique le mode d'élévation, le chiffre le mode de déplacement.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-pemp">
            <caption className="pemp-legende">Catégories de PEMP selon la recommandation R486</caption>
            <thead>
              <tr>
                <td className="pemp-coin"></td>
                <th scope="col">
                  Groupe A
                  <span>Élévation verticale</span>
                </th>
                <th scope="col">
                  Groupe B
                  <span>Élévation multidirectionnelle</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  Type 1
                  <span>Déplacement en position de transport, avec stabilisateurs</span>
                </th>
                <td>
                  <span className="pemp-code">1A</span>
                  <span className="pemp-texte">Élévation verticale avec stabilisateurs</span>
                  <span className="pemp-exemple">Ex.&nbsp;: plateforme sur mât vertical</span>
                </td>
                <td>
                  <span className="pemp-code">1B</span>
                  <span className="pemp-texte">Élévation multidirectionnelle avec stabilisateurs</span>
                  <span className="pemp-exemple">Ex.&nbsp;: nacelle élévatrice sur porteur</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Type 3
                  <span>Déplacement plateforme élevée, sans stabilisateurs</span>
                </th>
                <td>
                  <span className="pemp-code">3A</span>
                  <span className="pemp-texte">Élévation verticale sans stabilisateurs</span>
                  <span className="pemp-exemple">Ex.&nbsp;: nacelle élévatrice ciseaux automotrice</span>
                </td>
                <td>
                  <span className="pemp-code">3B</span>
                  <span className="pemp-texte">Élévation multidirectionnelle sans stabilisateurs</span>
                  <span className="pemp-exemple">Ex.&nbsp;: nacelle élévatrice à bras articulé ou télescopique automotrice</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>SECURIFORM forme aux différents types de nacelles élévatrices.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que couvre la formation</span>
          <h2 id="titre-programme">Un programme théorique et pratique complet</h2>
          <p>La partie théorique aborde la réglementation applicable (recommandation R486B de la CNAM), la technologie de la nacelle élévatrice (vérins, stabilisateurs, dispositifs anti-écrasement), les zones à risque et les vérifications d'usage avant chaque utilisation.</p>
          <p>La partie pratique se déroule sur une nacelle élévatrice réelle&nbsp;: mise en station, élévation et utilisation en hauteur, gestion des situations d'urgence (procédure de secours en cas de blocage), puis redescente et rangement en sécurité, fin de poste et maintenance.</p>
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
          <h2 id="titre-etapes">Utiliser une nacelle élévatrice en 4 temps</h2>
          <hr className="trait" />
          <p>Un enchaînement systématique, quelle que soit la durée de l'intervention.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Vérifier</h3>
            <p>Contrôler l'état de la nacelle élévatrice, des commandes et du sol avant toute mise en service.</p>
          </div>
          <div className="etape reveal">
            <h3>Mettre en station</h3>
            <p>Positionner et stabiliser la nacelle élévatrice, harnais et longe attachés dès la montée sur la plateforme.</p>
          </div>
          <div className="etape reveal">
            <h3>Travailler en hauteur</h3>
            <p>Élever la plateforme progressivement, en respectant les zones dégagées et les distances de sécurité.</p>
          </div>
          <div className="etape reveal">
            <h3>Redescendre</h3>
            <p>Ramener la plateforme au sol, couper l'alimentation et ranger la nacelle élévatrice en sécurité.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient</span>
          <h2 id="titre-risques">Les principaux risques de la nacelle élévatrice</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Basculement</h3>
            <p>Lié à un sol instable ou une surcharge de la plateforme. Prévenu par la vérification du terrain et le respect de la charge maximale autorisée.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chute de hauteur</h3>
            <p>En cas d'éjection de la plateforme. Prévenu par le port systématique du harnais et de la longe, attachés à un point d'ancrage dédié.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Écrasement</h3>
            <p>Entre la plateforme et une structure fixe (poutre, plafond). Prévenu par une vigilance constante lors des déplacements en hauteur.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Électrocution</h3>
            <p>Par proximité d'une ligne électrique aérienne. Prévenu par le repérage systématique avant toute élévation.</p>
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
          <p>À titre indicatif, la durée exacte dépend de votre expérience et du type de nacelle élévatrice utilisé.</p>
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
                <td>Formation initiale débutant : une catégorie</td>
                <td>2 à 3 jours</td>
              </tr>
              <tr>
                <td>Formation initiale débutant : plusieurs catégories</td>
                <td>3 à 5 jours</td>
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
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>La formation ou le CACES® R486B est valable 5 ans à compter de sa validation.</p>
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
          <ComparateurCaces actuel="R486B" />
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
            <summary>Quelle est la différence entre le groupe A et le groupe B&nbsp;?</summary>
            <p>Le groupe A concerne les nacelles élévatrices à élévation verticale (ciseaux, mât), où le déplacement en hauteur est limité. Le groupe B couvre les nacelles élévatrices à bras articulé ou télescopique, permettant des mouvements combinés une fois la plateforme élevée.</p>
          </details>

          <details className="faq-item">
            <summary>Le port du harnais est-il obligatoire sur une nacelle élévatrice&nbsp;?</summary>
            <p>Oui, le port du harnais avec longe, attaché à un point d'ancrage dédié de la plateforme, fait partie des règles de sécurité de base enseignées dès le début de la formation.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire en cas de blocage de la nacelle élévatrice en hauteur&nbsp;?</summary>
            <p>La formation intègre une sensibilisation aux procédures de secours&nbsp;: commandes de secours au sol, contact avec les personnes formées à leur utilisation, et consignes à respecter en attendant le dépannage.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité de la formation ou du CACES R486B&nbsp;?</summary>
            <p>La formation ou le CACES® est valable 5 ans.</p>
          </details>

          <details className="faq-item">
            <summary>Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R482B (engins de chantier), R484A (ponts roulants), R485A (gerbeurs à conducteur accompagnant), R489A (chariots) et R490A (grues de chargement)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<CalculateurRecyclage formation="caces-R486B" />

    

<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R486B</h2>
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
              <label htmlFor="type">Type de nacelle élévatrice</label>
              <select id="type" name="type">
                <option value="1A">1A : Élévation verticale avec stabilisateurs</option>
                <option value="1B">1B : Élévation multidirectionnelle avec stabilisateurs</option>
                <option value="3A">3A : Élévation verticale sans stabilisateurs</option>
                <option value="3B">3B : Élévation multidirectionnelle sans stabilisateurs</option>
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
            <p>Au-delà de la formation, SECURIFORM réalise également la VGP de vos nacelles élévatrices, tous les 6 mois conformément à la réglementation en vigueur.</p>
            <div className="vgp-boutons">
              <Link className="btn btn-blanc" href="/vgp-nacelles-elevatrices">VGP des nacelles élévatrices</Link>
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
