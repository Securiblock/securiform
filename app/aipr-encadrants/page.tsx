import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation encadrants AIPR",
      "description": "Formation à la réglementation DT-DICT, à la préparation et à l'organisation sécurisée d'un chantier à proximité des réseaux, pour les chefs de chantier et conducteurs de travaux.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/formations-aipr/formation-encadrants-aipr/"
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
          "item": "https://securiform.fr/accueil/formations-aipr/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation encadrants AIPR",
          "item": "https://securiform.fr/accueil/formations-aipr/formation-encadrants-aipr/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation encadrants AIPR — DT-DICT, préparation de chantier — SECURIFORM",
  description: "Formation SECURIFORM encadrants AIPR : procédures DT-DICT, documents à vérifier, marquage et piquetage, arrêt de chantier, examen QCM. Attestation valable 5 ans.",
  alternates: { canonical: "/aipr-encadrants" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/aipr-encadrants",
    title: "Formation encadrants AIPR — SECURIFORM",
    description: "Procédures DT-DICT, préparation de chantier, marquage : formation SECURIFORM encadrants AIPR.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation encadrants AIPR — SECURIFORM",
    description: "Formez vos chefs de chantier à organiser des interventions sécurisées près des réseaux, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation encadrants AIPR">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/aipr">Formations AIPR</Link>
          <span aria-hidden="true">›</span>
          <span>Encadrants</span>
        </p>
        <h1>Formation encadrants AIPR</h1>
        <p>Pour les chefs de chantier et conducteurs de travaux&nbsp;: maîtriser la réglementation DT-DICT et organiser un chantier sécurisé à proximité des réseaux.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-role">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-role">L'encadrant, pivot de la sécurité sur site</h2>
        <hr className="trait" />
        <p>Entre le concepteur qui prépare le projet et l'opérateur qui l'exécute, l'encadrant occupe une position centrale&nbsp;: vérifier les réponses aux DT-DICT, veiller au respect des prescriptions, superviser les opérateurs, appliquer la règle des 4A en cas d'anomalie, et documenter tout incident. C'est cette double compétence, réglementaire et opérationnelle, que la formation vise à installer.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-procedures">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-procedures">Les trois procédures DT-DICT</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Procédure</th>
                <th scope="col">Quand l'utiliser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DT puis DICT</td>
                <td>Cas standard&nbsp;: la déclaration de projet précède la déclaration de travaux, à des moments différents</td>
              </tr>
              <tr>
                <td>DT-DICT conjointe</td>
                <td>Régime simultané, lorsque le même acteur dépose les deux déclarations en même temps</td>
              </tr>
              <tr>
                <td>ATU — travaux urgents</td>
                <td>Interventions d'urgence sans délai pour la procédure complète&nbsp;: mesures de sécurité renforcées</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-preparation">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Avant le premier coup de pelle</span>
          <h2 id="titre-preparation">Ce qu'il faut vérifier avant de démarrer</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Réponses DICT</h3>
            <p>Position présumée des réseaux, classe de précision, recommandations spécifiques des exploitants.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Guide technique</h3>
            <p>Le document de référence applicable au type de travaux envisagé, à consulter systématiquement.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Marquage et piquetage</h3>
            <p>Vérifier leur conformité, leur visibilité, et documenter leur état par des photos avant travaux.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Plans de localisation</h3>
            <p>Savoir lire les symboles et convertir les positions théoriques en repères réels sur le terrain.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Aucun chantier ne doit démarrer tant que ces éléments ne sont pas rassemblés et vérifiés.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-arret">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Savoir dire stop</span>
          <h2 id="titre-arret">Quand et comment arrêter un chantier</h2>
          <p>Un encadrant doit savoir interrompre les travaux dès qu'un réseau n'est pas où il est annoncé, qu'une anomalie apparaît, ou que les conditions de sécurité ne peuvent plus être garanties. Cette décision doit ensuite être documentée et notifiée aux parties concernées.</p>
          <p>Pour les travaux urgents, où la procédure DT-DICT complète n'a pas pu être menée, la vigilance redouble&nbsp;: distances de sécurité augmentées, appel systématique aux exploitants, recours à la détection géophysique, supervision renforcée.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Mieux vaut un arrêt de chantier qu'un réseau endommagé</li>
            <li><span className="puce" aria-hidden="true">✓</span> Toute décision d'arrêt se documente et se notifie</li>
            <li><span className="puce" aria-hidden="true">✓</span> Les travaux urgents exigent une vigilance renforcée</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-examen">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La validation des compétences</span>
          <h2 id="titre-examen">L'examen encadrant, en bref</h2>
          <hr className="trait" />
          <p>Un QCM de 40 questions en 60 minutes, avec un seuil de réussite de 48 sur 80 points (60&nbsp;%). L'attestation obtenue est valable 5 ans&nbsp;; c'est ensuite votre entreprise qui délivre formellement l'AIPR sur cette base.</p>
        </div>
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
            <summary>Quelle est la différence entre concepteur et encadrant&nbsp;?</summary>
            <p>Le concepteur (maître d'ouvrage ou d'œuvre) prépare administrativement le projet et dépose les déclarations DT-DICT. L'encadrant, salarié de l'entreprise exécutant les travaux, vérifie ces déclarations sur le terrain et organise la sécurité du chantier au quotidien.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire si le marquage au sol semble avoir été endommagé&nbsp;?</summary>
            <p>Il faut le faire rétablir avant de poursuivre, et documenter la situation par des photos. Un marquage illisible ou absent ne doit jamais être ignoré.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je démarrer un chantier avec des réponses DICT incomplètes&nbsp;?</summary>
            <p>Non, sauf procédure de travaux urgents (ATU), qui impose alors des mesures de sécurité renforcées en compensation de l'absence de procédure complète.</p>
          </details>

          <details className="faq-item">
            <summary>Suis-je responsable si un opérateur commet une erreur&nbsp;?</summary>
            <p>En tant qu'encadrant, votre responsabilité porte sur la supervision&nbsp;: vérification des documents, respect des prescriptions et réaction appropriée en cas d'anomalie. Chaque acteur (concepteur, encadrant, opérateur) reste responsable de son propre périmètre.</p>
          </details>

          <details className="faq-item">
            <summary>Et pour le pilotage global d'un projet&nbsp;?</summary>
            <p>C'est le rôle du Concepteur AIPR, destiné aux bureaux d'études et maîtres d'ouvrage&nbsp;: retrouvez le détail sur notre page Formations AIPR.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation encadrants AIPR</h2>
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
              <label htmlFor="effectif">Nombre d'encadrants à former</label>
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
