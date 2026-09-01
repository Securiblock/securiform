import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation échafaudages fixes R408",
      "description": "Formation au montage, à la vérification et à la supervision des échafaudages fixes, conformément à la recommandation R408 de la CNAMTS et à l'arrêté du 21 décembre 2004. Habilitation valable 5 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/formations-travaux-hauteur-echafaudages/formation-echafaudages-fixes/"
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
          "item": "https://securiform.fr/accueil/formations-travaux-hauteur-echafaudages/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation échafaudages fixes",
          "item": "https://securiform.fr/accueil/formations-travaux-hauteur-echafaudages/formation-echafaudages-fixes/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation échafaudages fixes R408 — Montage, vérification, supervision — SECURIFORM",
  description: "Formation SECURIFORM aux échafaudages fixes R408 : montage/démontage, règles de stabilité, classes de charge, vérifications réglementaires, supervision d'équipe. Habilitation valable 5 ans.",
  alternates: { canonical: "/echafaudages-fixes" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/echafaudages-fixes",
    title: "Formation échafaudages fixes R408 — SECURIFORM",
    description: "Montage, stabilité, vérifications réglementaires, supervision d'équipe : formation SECURIFORM aux échafaudages fixes R408.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation échafaudages fixes R408 — SECURIFORM",
    description: "Formez vos monteurs et superviseurs aux échafaudages fixes, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation échafaudages fixes">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/travaux-hauteur-echafaudages">Travaux en hauteur et échafaudages</Link>
          <span aria-hidden="true">›</span>
          <span>Échafaudages fixes</span>
        </p>
        <h1>Formation échafaudages fixes (R408)</h1>
        <p>Montage, vérification, maintenance et supervision d'équipe&nbsp;: une formation complète pour tous les intervenants sur échafaudages fixes.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Quatre objectifs, un seul mot d'ordre&nbsp;: la conformité</h2>
        <hr className="trait" />
        <p>L'article R4323-69 du Code du travail impose que le montage, le démontage ou toute modification substantielle d'un échafaudage soit réalisé sous la direction d'une personne compétente, par des travailleurs formés. La recommandation R408 de la CNAMTS structure cette formation autour de quatre compétences&nbsp;: monter et démonter, vérifier et entretenir, appliquer la notice du fabricant, et superviser une équipe de monteurs.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-durees">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Combien de temps</span>
          <h2 id="titre-durees">Une durée selon le niveau visé</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Niveau de formation</th>
                <th scope="col">Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Montage, démontage et utilisation</td>
                <td>3 jours (21 heures)</td>
              </tr>
              <tr>
                <td>Formation complète avec supervision d'équipe</td>
                <td>4 à 6 jours (28 à 42 heures)</td>
              </tr>
              <tr>
                <td>Réception et maintenance uniquement</td>
                <td>2 jours (14 heures)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>L'habilitation est valable 5 ans&nbsp;; un recyclage permet de la renouveler avant expiration.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-stabilite">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le principe fondamental</span>
          <h2 id="titre-stabilite">Trois règles de stabilité, non négociables</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Stabilité verticale</h3>
            <p>Base de niveau, sol capable de supporter la charge totale, plaques de répartition sur sols meubles.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Stabilité latérale</h3>
            <p>Ancrages à la façade tous les 4 à 8 mètres selon la hauteur, pour résister au vent et aux efforts de renversement.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Résistance des éléments</h3>
            <p>Montants, traverses, planchers et garde-corps adaptés à la classe de charge réellement utilisée.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Repère pratique&nbsp;: la hauteur d'un échafaudage ne doit généralement pas dépasser 3 à 4 fois la largeur de sa base.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-classes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-classes">Les classes de charge (NF EN 12811)</h2>
          <hr className="trait" />
          <p>Chaque échafaudage est conçu pour une classe de charge précise&nbsp;: la dépasser expose à un risque d'effondrement.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Classe</th>
                <th scope="col">Usage typique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Classe 1</td>
                <td>Accès uniquement, sans travaux</td>
              </tr>
              <tr>
                <td>Classe 2</td>
                <td>Travaux légers (peinture, finitions)</td>
              </tr>
              <tr>
                <td>Classe 3</td>
                <td>Travaux moyens</td>
              </tr>
              <tr>
                <td>Classe 4</td>
                <td>Travaux lourds (maçonnerie légère, briques)</td>
              </tr>
              <tr>
                <td>Classe 5</td>
                <td>Travaux très lourds</td>
              </tr>
              <tr>
                <td>Classe 6</td>
                <td>Maçonnerie complète</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-verifications">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Une obligation en 3 temps</span>
          <h2 id="titre-verifications">Les vérifications imposées par l'arrêté du 21 décembre 2004</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Vérification</th>
                <th scope="col">Qui</th>
                <th scope="col">Fréquence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Avant mise en service (réception)</td>
                <td>Personne compétente</td>
                <td>À chaque montage ou modification importante</td>
              </tr>
              <tr>
                <td>Journalière</td>
                <td>Tout utilisateur formé</td>
                <td>Chaque jour, avant utilisation</td>
              </tr>
              <tr>
                <td>Trimestrielle</td>
                <td>Personne compétente ou organisme agréé</td>
                <td>Tous les 3 mois</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Une revérification complète est aussi obligatoire après un accident, une interruption d'utilisation d'un mois ou plus, ou des conditions météorologiques exceptionnelles.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-supervision">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Pour les chefs d'équipe</span>
          <h2 id="titre-supervision">Superviser une équipe de monteurs</h2>
          <p>Au-delà du geste technique, la formation prépare aussi à la coordination d'une équipe&nbsp;: analyser les risques du chantier avant de commencer, choisir la configuration d'échafaudage adaptée, organiser le planning de montage, et vérifier au quotidien que les règles de sécurité sont bien respectées sur le terrain.</p>
          <p>Le superviseur documente aussi son intervention&nbsp;: fiches de réception, registre journalier, et gestion immédiate de toute anomalie constatée&nbsp;— avec arrêt des travaux si nécessaire.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Responsabilités du superviseur">
          <h3>Ses responsabilités clés</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Évaluer les risques avant le montage</li>
            <li><span className="puce" aria-hidden="true">✓</span> Choisir la configuration adaptée aux travaux</li>
            <li><span className="puce" aria-hidden="true">✓</span> Vérifier le respect des règles sur le terrain</li>
            <li><span className="puce" aria-hidden="true">✓</span> Documenter et réagir face aux anomalies</li>
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
            <summary>Qui peut réaliser la vérification avant mise en service&nbsp;?</summary>
            <p>Une personne compétente, formée spécifiquement à la réception d'échafaudages&nbsp;: un monteur expérimenté habilité, un chef d'équipe formé, ou un bureau de contrôle externe.</p>
          </details>

          <details className="faq-item">
            <summary>La vérification journalière demande-t-elle une qualification particulière&nbsp;?</summary>
            <p>Non, elle peut être réalisée par tout utilisateur formé&nbsp;: c'est un contrôle visuel rapide (5 à 15 minutes) portant sur les éléments les plus évidents&nbsp;: garde-corps, planchers, ancrages visibles, état du sol.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si je dépasse la classe de charge de mon échafaudage&nbsp;?</summary>
            <p>Le risque d'effondrement devient immédiat. C'est pourquoi la classe de charge doit être clairement identifiée et affichée sur site, et respectée par tous les intervenants.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il refaire une vérification complète après une tempête&nbsp;?</summary>
            <p>Oui, toute condition météorologique exceptionnelle ayant pu soumettre la structure à des efforts anormaux impose une revérification complète avant de reprendre l'utilisation.</p>
          </details>

          <details className="faq-item">
            <summary>Et pour les échafaudages roulants&nbsp;?</summary>
            <p>Ils font l'objet d'une formation dédiée (R457), aux règles différentes puisqu'ils sont mobiles&nbsp;: retrouvez le détail sur notre page Travaux en hauteur et échafaudages.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation échafaudages fixes</h2>
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
              <label htmlFor="niveau">Niveau souhaité</label>
              <select id="niveau" name="niveau">
                <option value="montage">Montage, démontage, utilisation</option>
                <option value="complet">Formation complète avec supervision</option>
                <option value="reception">Réception et maintenance uniquement</option>
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
