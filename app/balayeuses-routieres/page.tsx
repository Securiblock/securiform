import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Conduite en sécurité de balayeuses routières",
      "description": "Formation à la conduite en sécurité des balayeuses routières, couvrant la cohabitation avec la circulation, les angles morts, la signalisation du véhicule et les vérifications avant utilisation.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/conduite-en-securite-de-balayeuses-routieres-2/"
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
          "name": "Balayeuses routières",
          "item": "https://securiform.fr/conduite-en-securite-de-balayeuses-routieres-2/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Conduite de balayeuses routières — SECURIFORM",
  description: "Formation SECURIFORM à la conduite des balayeuses routières : angles morts, signalisation et vérifications avant utilisation, partout en France.",
  alternates: { canonical: "/balayeuses-routieres" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/balayeuses-routieres",
    title: "Conduite en sécurité de balayeuses routières — SECURIFORM",
    description: "Formation SECURIFORM aux bons réflexes de conduite des balayeuses routières, pour les équipes de nettoyage urbain.",
    images: ["/image/formation-balayeuse.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conduite en sécurité de balayeuses routières — SECURIFORM",
    description: "Formez vos équipes à la conduite en sécurité des balayeuses routières, au milieu de la circulation.",
    images: ["/image/formation-balayeuse.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Conduite en sécurité de balayeuses routières" style={{ backgroundImage: "url('/image/formation-balayeuse.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/formations-specifiques">Formations spécifiques</Link>
          <span aria-hidden="true">›</span>
          <span>Balayeuses routières</span>
        </p>
        <h1>Conduite en sécurité de balayeuses routières</h1>
        <p>Pour les collectivités et entreprises de nettoyage urbain&nbsp;: conduire une balayeuse en sécurité au milieu de la circulation et des piétons.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Un engin qui travaille au cœur de la circulation</h2>
        <hr className="trait" />
        <p>Contrairement à la plupart des engins de chantier, la balayeuse routière évolue en permanence à proximité de véhicules, cyclistes et piétons, souvent à faible vitesse sur voie ouverte à la circulation. Cette cohabitation constante avec les autres usagers est la spécificité centrale de cette formation.</p>
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
            <h3>Collision avec un usager</h3>
            <p>Piéton, cycliste ou véhicule léger, notamment aux intersections et lors des manœuvres de dépassement.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Angles morts</h3>
            <p>Un engin volumineux offre une visibilité réduite, en particulier à l'arrière et sur les côtés.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Projection de débris</h3>
            <p>Gravats, cailloux ou verre projetés par les brosses rotatives lors du balayage.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Entortillement</h3>
            <p>Risque lié aux brosses en rotation lors d'une intervention de nettoyage ou de déblocage.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-signalisation">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La compétence différenciante</span>
          <h2 id="titre-signalisation">Se signaler pour être vu de tous</h2>
          <p>Parce qu'elle circule au ralenti sur des voies ouvertes, la balayeuse doit se signaler clairement aux autres usagers&nbsp;: gyrophare orange actif en permanence, panneaux de signalisation "véhicule lent" si nécessaire, et utilisation systématique des feux de détresse lors d'un arrêt ponctuel sur chaussée.</p>
          <p>La formation insiste aussi sur l'anticipation&nbsp;: rester prévisible pour les autres usagers, éviter les arrêts brusques, et utiliser caméras de recul et rétroviseurs à chaque manœuvre.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Gyrophare actif dès le début de l'intervention</li>
            <li><span className="puce" aria-hidden="true">✓</span> Vitesse adaptée à la présence de piétons et cyclistes</li>
            <li><span className="puce" aria-hidden="true">✓</span> Vérification systématique des angles morts avant manœuvre</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-verifications">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Avant de démarrer</span>
          <h2 id="titre-verifications">Les vérifications de routine</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Brosses</h3>
            <p>Vérifier leur état d'usure et leur bon positionnement avant chaque prise de poste.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Freins et pneumatiques</h3>
            <p>Contrôle systématique, essentiel pour un engin évoluant en circulation.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Éclairage et gyrophare</h3>
            <p>S'assurer du bon fonctionnement de tous les feux et de la signalisation lumineuse.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Système d'aspersion</h3>
            <p>Vérifier le niveau d'eau utilisé pour limiter la projection de poussières pendant le balayage.</p>
          </article>

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
            <summary>Un permis spécifique est-il nécessaire pour conduire une balayeuse routière&nbsp;?</summary>
            <p>Cela dépend du gabarit et du poids du véhicule&nbsp;: certains modèles nécessitent un permis poids lourd. La formation SECURIFORM porte sur la conduite en sécurité de l'engin, en complément du permis de conduire requis.</p>
          </details>

          <details className="faq-item">
            <summary>Pourquoi le gyrophare doit-il rester actif en permanence&nbsp;?</summary>
            <p>Parce que la balayeuse circule à faible vitesse, souvent en dessous du rythme normal de la circulation&nbsp;: le gyrophare alerte les autres usagers de cette différence de vitesse et les incite à la prudence.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire en cas de blocage des brosses par un déchet volumineux&nbsp;?</summary>
            <p>Toujours arrêter le moteur et attendre l'arrêt complet des brosses avant toute intervention manuelle.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation peut-elle se dérouler directement sur nos itinéraires habituels&nbsp;?</summary>
            <p>Oui, une formation sur site permet de s'entraîner directement sur le matériel et les parcours réellement empruntés par vos équipes.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation balayeuses routières</h2>
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
