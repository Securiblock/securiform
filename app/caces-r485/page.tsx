import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation CACES R485 — Gerbeurs à conducteur accompagnant",
      "description": "Formation à la conduite en sécurité des gerbeurs à conducteur accompagnant, catégories 1 (poste de conduite fixe) et 2 (poste de conduite élevable). Certificat valable 5 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces-r485/"
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
          "name": "CACES R485",
          "item": "https://securiform.fr/caces-r485/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R485 — SECURIFORM",
  description: "Formation CACES R485 avec SECURIFORM : conduite de gerbeurs à conducteur accompagnant, catégories 1 et 2. Certificat valable 5 ans, partout en France.",
  alternates: { canonical: "/caces-r485" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-r485",
    title: "Formation CACES® R485 — Gerbeurs à conducteur accompagnant — SECURIFORM",
    description: "Gerbeurs à conducteur accompagnant, catégories 1 et 2. Formation SECURIFORM, certificat valable 5 ans.",
    images: ["/image/caces-r485.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R485 — SECURIFORM",
    description: "Conduite en sécurité des gerbeurs à conducteur accompagnant, avec SECURIFORM.",
    images: ["/image/caces-r485.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R485">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R485</span>
        </p>
        <h1>Formation CACES® R485 — Gerbeurs à conducteur accompagnant</h1>
        <p>Formez-vous à la conduite en sécurité des gerbeurs à conducteur accompagnant, utilisés en entrepôt et en environnements de stockage à rayonnages étroits.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Qu'est-ce qu'un gerbeur à conducteur accompagnant&nbsp;?</h2>
        <hr className="trait" />
        <p>Contrairement aux chariots élévateurs du CACES R489, sur lesquels le cariste prend place à bord, le gerbeur à conducteur accompagnant se pilote en marchant à côté ou derrière l'engin, à l'aide d'un timon. Cette différence de conduite implique des risques spécifiques&nbsp;: c'est pourquoi la recommandation CNAM R485 lui consacre une certification à part entière.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-categories">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-categories">Les deux catégories du CACES R485</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Catégorie</th>
                <th scope="col">Type de poste de conduite</th>
                <th scope="col">Usage typique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Catégorie 1</td>
                <td>Poste de conduite fixe, non élevable</td>
                <td>Gerbage et dégerbage à faible hauteur</td>
              </tr>
              <tr>
                <td>Catégorie 2</td>
                <td>Poste de conduite élevable avec la charge</td>
                <td>Préparation de commandes et gerbage en hauteur</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Vous ne savez pas quelle catégorie correspond à votre matériel&nbsp;? Contactez-nous, nous vous aidons à l'identifier.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que couvre la formation</span>
          <h2 id="titre-programme">Un programme théorique et pratique complet</h2>
          <p>La partie théorique aborde la réglementation applicable (recommandation R485 de la CNAM), la technologie du gerbeur (timon, fourches, mât de levage, batterie), les risques propres à la conduite accompagnée et les vérifications d'usage avant chaque utilisation.</p>
          <p>La partie pratique se déroule sur un gerbeur réel&nbsp;: prise et dépose de charges, circulation en allées étroites, gerbage et dégerbage à différentes hauteurs, puis fin de poste et mise en charge de la batterie.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Répartition théorie/pratique">
          <h3>Répartition type</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Théorie&nbsp;: réglementation, technologie, risques spécifiques</li>
            <li><span className="puce" aria-hidden="true">✓</span> Pratique&nbsp;: manœuvres en conditions réelles d'entrepôt</li>
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
          <h2 id="titre-etapes">Utiliser un gerbeur en 4 temps</h2>
          <hr className="trait" />
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Vérifier</h3>
            <p>Contrôler l'état des fourches, du mât et le niveau de charge de la batterie avant utilisation.</p>
          </div>
          <div className="etape reveal">
            <h3>Prendre la charge</h3>
            <p>Engager les fourches avec précision, en gardant les pieds à l'écart de la zone de manœuvre.</p>
          </div>
          <div className="etape reveal">
            <h3>Se déplacer</h3>
            <p>Circuler à vitesse adaptée, en particulier dans les allées étroites entre les rayonnages.</p>
          </div>
          <div className="etape reveal">
            <h3>Gerber ou dégerber</h3>
            <p>Positionner ou retirer la charge du rayonnage avec une visibilité dégagée sur la zone de dépose.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient</span>
          <h2 id="titre-risques">Les principaux risques du gerbeur accompagnant</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Écrasement des pieds</h3>
            <p>Le conducteur marchant à côté de l'engin, ce risque est spécifique à ce mode de conduite. Prévenu par le port de chaussures de sécurité et une distance de sécurité constante.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Basculement de charge</h3>
            <p>Lié à une charge mal centrée ou trop élevée par rapport à la capacité du gerbeur. Prévenu par le respect strict de la charge maximale admissible.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Collision</h3>
            <p>Avec un piéton ou un autre engin, notamment dans les allées étroites. Prévenu par une vitesse adaptée et une signalisation aux intersections.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chute de charge en hauteur</h3>
            <p>Pour les modèles de catégorie 2, lors du gerbage en hauteur. Prévenu par un positionnement stable avant toute élévation.</p>
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
          <p>À titre indicatif&nbsp;; la durée exacte dépend de votre expérience et de la catégorie visée.</p>
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
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Le certificat CACES R485 est valable 5 ans à compter de son obtention.</p>
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
            <summary>Quelle est la différence entre le CACES R485 et le CACES R489&nbsp;?</summary>
            <p>Le R485 concerne les gerbeurs à conducteur accompagnant, pilotés en marchant à côté de l'engin. Le R489 couvre les chariots élévateurs où le cariste prend place à bord. Les risques et la conduite étant différents, les certifications le sont aussi.</p>
          </details>

          <details className="faq-item">
            <summary>Comment choisir entre la catégorie 1 et la catégorie 2&nbsp;?</summary>
            <p>Cela dépend de votre matériel&nbsp;: la catégorie 1 concerne les gerbeurs à poste de conduite fixe, la catégorie 2 les modèles où le conducteur peut être élevé avec la charge pour la préparation de commandes en hauteur.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité du CACES R485&nbsp;?</summary>
            <p>Le certificat est valable 5 ans, comme le CACES R489. Un recyclage est recommandé avant son expiration.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on former une équipe aux catégories 1 et 2 en même temps&nbsp;?</summary>
            <p>Oui, lorsque les stagiaires utilisent les deux types de gerbeurs, une session combinée est possible et permet d'optimiser le temps de formation.</p>
          </details>

          <details className="faq-item">
            <summary>Et si mon activité concerne une autre catégorie CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également aux CACES R482 (engins de chantier), R484 (ponts roulants), R486-A (nacelles), R489 (chariots de manutention) et R490 (grues auxiliaires)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R485</h2>
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
              <label htmlFor="categorie">Catégorie concernée</label>
              <select id="categorie" name="categorie">
                <option value="1">Catégorie 1 — poste fixe</option>
                <option value="2">Catégorie 2 — poste élevable</option>
                <option value="deux">Les deux catégories</option>
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
            <p>Au-delà de la formation, SECURIFORM réalise également la VGP de vos gerbeurs, au titre de la catégorie chariots élévateurs, conformément à la réglementation en vigueur.</p>
            <Link className="btn btn-blanc" href="/vgp-chariots-elevateurs">VGP des chariots élévateurs</Link>
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
