import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Conduite en sécurité de tondeuses auto-portées",
      "description": "Formation à la conduite en sécurité des tondeuses auto-portées utilisées pour l'entretien de grands espaces verts, couvrant les risques de retournement, les vérifications avant utilisation et les règles de conduite sur pente.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/conduite-en-securite-de-balayeuses-routieres/"
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
          "name": "Formations spécifiques",
          "item": "https://securiform.fr/formations-specifiques/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tondeuses auto-portées",
          "item": "https://securiform.fr/conduite-en-securite-de-balayeuses-routieres/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Conduite de tondeuses auto-portées — SECURIFORM",
  description: "Formation SECURIFORM à la conduite des tondeuses auto-portées : risques de retournement, vérifications, règles de conduite.",
  alternates: { canonical: "/tondeuses-autoportees" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/tondeuses-autoportees",
    title: "Conduite en sécurité de tondeuses auto-portées — SECURIFORM",
    description: "Formation SECURIFORM aux bons réflexes de conduite des tondeuses auto-portées, pour les équipes espaces verts.",
    images: ["/image/formation-tondeuse.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conduite en sécurité de tondeuses auto-portées — SECURIFORM",
    description: "Formez vos équipes espaces verts à la conduite en sécurité des tondeuses auto-portées.",
    images: ["/image/formation-tondeuse.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Conduite en sécurité de tondeuses auto-portées" style={{ backgroundImage: "url('/image/formation-tondeuse.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/formations-specifiques">Formations spécifiques</Link>
          <span aria-hidden="true">›</span>
          <span>Tondeuses auto-portées</span>
        </p>
        <h1>Conduite en sécurité de tondeuses auto-portées</h1>
        <p>Pour les équipes espaces verts et collectivités&nbsp;: les bons réflexes pour conduire une tondeuse auto-portée en toute sécurité, notamment sur terrain en pente.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Un engin courant, des risques à ne pas sous-estimer</h2>
        <hr className="trait" />
        <p>La tondeuse auto-portée ne fait pas partie du champ des CACES®, mais son utilisation présente des risques réels&nbsp;: retournement sur pente, projection de débris, coupure par les lames. Une formation dédiée permet à vos équipes d'entretien d'espaces verts d'acquérir les bons réflexes, quel que soit le terrain rencontré.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient</span>
          <h2 id="titre-risques">Les principaux risques</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Retournement</h3>
            <p>Le risque principal sur les terrains en pente ou irréguliers, en particulier lors d'un virage mal maîtrisé.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Projection de débris</h3>
            <p>Pierres, branches ou objets projetés par les lames à grande vitesse, dangereux pour l'opérateur et les tiers.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Coupure</h3>
            <p>Lié aux lames rotatives, notamment lors d'une intervention de déblocage ou d'entretien sans précaution.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Écrasement en marche arrière</h3>
            <p>Angles morts fréquents à l'arrière de la machine, en particulier à proximité de piétons.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-verifications">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Avant de démarrer</span>
          <h2 id="titre-verifications">Les vérifications de routine</h2>
          <p>Avant chaque utilisation, un rapide contrôle permet d'éviter la plupart des incidents&nbsp;: niveau d'huile et de carburant, état et fixation des lames, fonctionnement des freins, pression des pneus, et présence des carters de protection.</p>
          <p>Ces vérifications, simples et rapides, font partie des automatismes que la formation cherche à installer durablement chez chaque conducteur.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À vérifier avant utilisation">
          <h3>À vérifier avant utilisation</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Niveaux d'huile et de carburant</li>
            <li><span className="puce" aria-hidden="true">✓</span> État et fixation des lames</li>
            <li><span className="puce" aria-hidden="true">✓</span> Fonctionnement des freins</li>
            <li><span className="puce" aria-hidden="true">✓</span> Carters et protections en place</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-pente">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le point le plus sensible</span>
          <h2 id="titre-pente">Bien conduire sur un terrain en pente</h2>
          <hr className="trait" />
          <p>La règle de base&nbsp;: tondre toujours dans le sens de la pente, en montant ou en descendant, jamais transversalement. Un déplacement en travers d'une pente augmente fortement le risque de basculement latéral. La vitesse doit être réduite dès que le terrain devient irrégulier ou incliné.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-epi">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">S'équiper correctement</span>
          <h2 id="titre-epi">Les équipements de protection</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Chaussures fermées antidérapantes</h3>
            <p>Protègent le pied et évitent les glissades lors de la montée ou descente de l'engin.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Protection auditive</h3>
            <p>Recommandée lors d'une utilisation prolongée, en raison du bruit continu du moteur.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Lunettes de protection</h3>
            <p>Se protègent des projections de débris, particulièrement sur terrain caillouteux.</p>
          </article>

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
            <summary>Un CACES® est-il nécessaire pour conduire une tondeuse auto-portée&nbsp;?</summary>
            <p>Non, la tondeuse auto-portée ne relève d'aucune recommandation CACES®. Une formation à la conduite en sécurité reste néanmoins fortement recommandée, notamment sur des terrains en pente.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on tondre en travers d'une pente pour aller plus vite&nbsp;?</summary>
            <p>Non, c'est justement la configuration la plus à risque de retournement. Il faut toujours tondre dans le sens de la pente, en montant ou en descendant.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire en cas de blocage des lames&nbsp;?</summary>
            <p>Toujours couper le moteur et attendre l'arrêt complet des lames avant toute intervention manuelle, même rapide.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation peut-elle se dérouler directement sur nos sites&nbsp;?</summary>
            <p>Oui, une formation sur site permet de s'entraîner directement sur le matériel et les terrains réellement utilisés par vos équipes.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation tondeuses auto-portées</h2>
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
