import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation CACES R486 Catégorie A — Nacelles élévatrices",
      "description": "Formation à la conduite en sécurité des plateformes élévatrices mobiles de personnes (PEMP) à élévation verticale, catégorie A de la recommandation R486. Certificat valable 10 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces-r486-a/"
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
          "name": "CACES R486-A",
          "item": "https://securiform.fr/caces-r486-a/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R486 Catégorie A — Nacelles élévatrices — SECURIFORM",
  description: "Formation CACES R486 Catégorie A avec SECURIFORM : plateformes élévatrices mobiles de personnes (PEMP) à élévation verticale, nacelles à ciseaux et plateformes sur mât. Certificat valable 10 ans, partout en France.",
  alternates: { canonical: "/caces-r486a" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-r486a",
    title: "Formation CACES® R486 Catégorie A — Nacelles élévatrices — SECURIFORM",
    description: "PEMP à élévation verticale, nacelles à ciseaux, plateformes sur mât. Formation SECURIFORM, certificat valable 10 ans.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R486 Catégorie A — SECURIFORM",
    description: "Conduite en sécurité des nacelles élévatrices à élévation verticale, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R486 Catégorie A">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R486-A</span>
        </p>
        <h1>Formation CACES® R486 Catégorie A — Nacelles élévatrices</h1>
        <p>Formez-vous à la conduite en sécurité des plateformes élévatrices mobiles de personnes (PEMP) à élévation verticale&nbsp;: nacelles à ciseaux et plateformes sur mât.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Qu'est-ce que la catégorie A du CACES R486&nbsp;?</h2>
        <hr className="trait" />
        <p>La recommandation CNAM R486 encadre la conduite des plateformes élévatrices mobiles de personnes (PEMP), plus couramment appelées nacelles. Elle distingue deux grandes catégories selon le mode d'élévation&nbsp;: la catégorie A regroupe les PEMP à élévation verticale, où la plateforme se déplace uniquement vers le haut ou le bas, sans mouvement horizontal complexe une fois en hauteur. C'est cette catégorie que prépare SECURIFORM.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-categories">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-categories">Catégorie A ou catégorie B&nbsp;?</h2>
          <hr className="trait" />
          <p>Un repère simple pour situer la catégorie A par rapport à l'autre grande famille de nacelles.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Catégorie</th>
                <th scope="col">Type d'élévation</th>
                <th scope="col">Exemples d'équipements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Élévation verticale, déplacement limité une fois en hauteur</td>
                <td>Nacelles à ciseaux, plateformes sur mât vertical</td>
              </tr>
              <tr>
                <td>B</td>
                <td>Élévation multidirectionnelle, déplacements combinés possibles en hauteur</td>
                <td>Nacelles à bras articulé ou télescopique</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>SECURIFORM est spécialisé sur la catégorie A. Pour un besoin en catégorie B, nous consulter.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que couvre la formation</span>
          <h2 id="titre-programme">Un programme théorique et pratique complet</h2>
          <p>La partie théorique aborde la réglementation applicable (recommandation R486 de la CNAM), la technologie de la nacelle (vérins, stabilisateurs, dispositifs anti-écrasement), le port du harnais et de la longe, les zones à risque et les vérifications d'usage avant chaque utilisation.</p>
          <p>La partie pratique se déroule sur une nacelle réelle&nbsp;: mise en station, élévation et utilisation en hauteur, gestion des situations d'urgence (procédure de secours en cas de blocage), puis redescente et rangement en sécurité.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Répartition théorie/pratique">
          <h3>Répartition type</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Théorie&nbsp;: réglementation, technologie, EPI antichute</li>
            <li><span className="puce" aria-hidden="true">✓</span> Pratique&nbsp;: mise en œuvre complète sur nacelle réelle</li>
            <li><span className="puce" aria-hidden="true">✓</span> Procédure de secours en cas de blocage en hauteur</li>
            <li><span className="puce" aria-hidden="true">✓</span> Test final par un organisme testeur certifié INRS</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La bonne méthode</span>
          <h2 id="titre-etapes">Utiliser une nacelle en 4 temps</h2>
          <hr className="trait" />
          <p>Un enchaînement systématique, quelle que soit la durée de l'intervention.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Vérifier</h3>
            <p>Contrôler l'état de la nacelle, des commandes et du sol avant toute mise en service.</p>
          </div>
          <div className="etape reveal">
            <h3>Mettre en station</h3>
            <p>Positionner et stabiliser la nacelle, harnais et longe attachés dès la montée sur la plateforme.</p>
          </div>
          <div className="etape reveal">
            <h3>Travailler en hauteur</h3>
            <p>Élever la plateforme progressivement, en respectant les zones dégagées et les distances de sécurité.</p>
          </div>
          <div className="etape reveal">
            <h3>Redescendre</h3>
            <p>Ramener la plateforme au sol, couper l'alimentation et ranger la nacelle en sécurité.</p>
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
          <h2 id="titre-durees">Durée et validité</h2>
          <hr className="trait" />
          <p>À titre indicatif&nbsp;; la durée exacte dépend de votre expérience et du type de nacelle utilisé.</p>
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
                <td>1 à 2 jours</td>
              </tr>
              <tr>
                <td>Expérimenté (pratique déjà acquise)</td>
                <td>1 jour</td>
              </tr>
              <tr>
                <td>Recyclage avant expiration</td>
                <td>1 jour</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Le certificat CACES R486 Catégorie A est valable 10 ans à compter de son obtention.</p>
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
            <summary>Quelle est la différence entre la catégorie A et la catégorie B&nbsp;?</summary>
            <p>La catégorie A concerne les nacelles à élévation verticale (ciseaux, mât), où le déplacement en hauteur est limité. La catégorie B couvre les nacelles à bras articulé ou télescopique, permettant des mouvements combinés une fois la plateforme élevée.</p>
          </details>

          <details className="faq-item">
            <summary>Le port du harnais est-il obligatoire sur une nacelle&nbsp;?</summary>
            <p>Oui, le port du harnais avec longe, attaché à un point d'ancrage dédié de la plateforme, fait partie des règles de sécurité de base enseignées dès le début de la formation.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire en cas de blocage de la nacelle en hauteur&nbsp;?</summary>
            <p>La formation intègre une sensibilisation aux procédures de secours&nbsp;: commandes de secours au sol, contact avec les personnes formées à leur utilisation, et consignes à respecter en attendant le dépannage.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité du CACES R486 Catégorie A&nbsp;?</summary>
            <p>Le certificat est valable 10 ans. Un recyclage est recommandé avant son expiration pour actualiser les connaissances et prolonger la validité.</p>
          </details>

          <details className="faq-item">
            <summary>Et si mon activité concerne une autre catégorie CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également aux CACES R482 (engins de chantier), R484 (ponts roulants), R485 (gerbeurs), R489 (chariots de manutention) et R490 (grues auxiliaires)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R486-A</h2>
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
              <label htmlFor="type">Type de nacelle</label>
              <select id="type" name="type">
                <option value="ciseaux">Nacelle à ciseaux</option>
                <option value="mat">Plateforme sur mât vertical</option>
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
            <p>Au-delà de la formation, SECURIFORM réalise également la VGP de vos nacelles élévatrices, tous les 6 mois conformément à la réglementation en vigueur.</p>
            <Link className="btn btn-blanc" href="/vgp-nacelles-elevatrices">VGP des nacelles élévatrices</Link>
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
