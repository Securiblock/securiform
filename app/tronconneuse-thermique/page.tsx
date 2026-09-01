import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Utilisation en sécurité d'une tronçonneuse thermique à chaîne",
      "description": "Formation à l'utilisation en sécurité d'une tronçonneuse thermique à chaîne, couvrant le risque de rebond, les équipements de protection individuelle, les vérifications avant utilisation et la technique d'abattage.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/utilisation-en-securite-dune-tronconneuse-thermique-a-chaine/"
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
          "item": "https://securiform.fr/caces-copy/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tronçonneuse thermique",
          "item": "https://securiform.fr/utilisation-en-securite-dune-tronconneuse-thermique-a-chaine/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Utilisation en sécurité d'une tronçonneuse thermique à chaîne — SECURIFORM",
  description: "Formation SECURIFORM à l'utilisation en sécurité d'une tronçonneuse thermique : risque de rebond, équipements de protection, vérifications avant utilisation, technique d'abattage. Pour équipes espaces verts et élagage.",
  alternates: { canonical: "/tronconneuse-thermique" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/tronconneuse-thermique",
    title: "Utilisation en sécurité d'une tronçonneuse thermique à chaîne — SECURIFORM",
    description: "Formation SECURIFORM au risque de rebond, aux équipements de protection et à la technique de coupe en sécurité.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utilisation en sécurité d'une tronçonneuse thermique — SECURIFORM",
    description: "Formez vos équipes à l'utilisation en sécurité d'une tronçonneuse thermique, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Utilisation en sécurité d'une tronçonneuse thermique">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/formations-specifiques">Formations spécifiques</Link>
          <span aria-hidden="true">›</span>
          <span>Tronçonneuse thermique</span>
        </p>
        <h1>Utilisation en sécurité d'une tronçonneuse thermique à chaîne</h1>
        <p>Prise en main, entretien et bonnes pratiques de coupe&nbsp;: une formation centrée sur le risque le plus caractéristique de cet outil, le rebond.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-rebond">
      <div className="container section-head reveal">
        <span className="surtitre">Le risque à connaître avant tout</span>
        <h2 id="titre-rebond">Le rebond, principal danger de la tronçonneuse</h2>
        <hr className="trait" />
        <p>Le rebond (ou kickback) se produit lorsque la pointe du guide-chaîne touche un obstacle ou se retrouve coincée&nbsp;: la tronçonneuse est alors violemment projetée vers l'opérateur, en une fraction de seconde. C'est la cause la plus fréquente des blessures graves liées à cet outil, et le point sur lequel la formation insiste en priorité.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient aussi</span>
          <h2 id="titre-risques">Les autres risques de l'utilisation</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Coupure grave</h3>
            <p>Lors d'une prise en main incorrecte ou d'un déséquilibre pendant la coupe.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Vibrations</h3>
            <p>Une exposition prolongée peut affecter la circulation sanguine des mains à long terme.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chute d'arbre ou de branche</h3>
            <p>Risque majeur lors de l'abattage, si la trajectoire de chute n'a pas été correctement anticipée.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-epi">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">S'équiper correctement</span>
          <h2 id="titre-epi">Le kit de protection complet</h2>
          <hr className="trait" />
          <p>Contrairement à beaucoup d'outils, la tronçonneuse impose un équipement de protection individuelle complet, jamais partiel.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Pantalon anti-coupure</h3>
            <p>Contient des fibres qui bloquent la chaîne en cas de contact accidentel avec la jambe.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Casque avec visière</h3>
            <p>Protège des chutes de branches et des projections de copeaux, en plus d'une protection auditive intégrée.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Gants anti-vibration</h3>
            <p>Réduisent la transmission des vibrations et protègent les mains lors de la manipulation.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chaussures anti-coupure</h3>
            <p>Avec coque de protection, indispensables en complément du pantalon technique.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-verifications">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Avant de démarrer</span>
          <h2 id="titre-verifications">Les vérifications de routine</h2>
          <hr className="trait" />
          <p>Tension de la chaîne, affûtage, niveaux de carburant et d'huile de chaîne, et surtout fonctionnement du frein de chaîne&nbsp;: ce dernier point est le plus important, car c'est lui qui peut stopper la chaîne en une fraction de seconde en cas de rebond.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-abattage">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La méthode</span>
          <h2 id="titre-abattage">L'abattage d'un arbre en 4 temps</h2>
          <hr className="trait" />
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Évaluer</h3>
            <p>Observer l'inclinaison naturelle de l'arbre, le vent et les obstacles alentour pour définir la direction de chute.</p>
          </div>
          <div className="etape reveal">
            <h3>Entailler</h3>
            <p>Réaliser l'entaille directionnelle du côté où l'arbre doit tomber.</p>
          </div>
          <div className="etape reveal">
            <h3>Trait d'abattage</h3>
            <p>Effectuer le trait opposé, en conservant une charnière de bois qui guidera la chute.</p>
          </div>
          <div className="etape reveal">
            <h3>Se replier</h3>
            <p>Reculer immédiatement vers une zone de repli dégagée, jamais dans l'axe de chute.</p>
          </div>
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
            <summary>Comment éviter le rebond&nbsp;?</summary>
            <p>En évitant tout contact de la pointe du guide-chaîne avec un obstacle, en tenant fermement l'outil à deux mains, et en vérifiant que le frein de chaîne fonctionne correctement avant chaque utilisation.</p>
          </details>

          <details className="faq-item">
            <summary>Le pantalon anti-coupure est-il vraiment indispensable&nbsp;?</summary>
            <p>Oui, sans exception. C'est l'une des rares protections capables de bloquer la chaîne en cas de contact accidentel avec la jambe, et son absence expose à des blessures graves.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on couper au-dessus des épaules&nbsp;?</summary>
            <p>Non, cette position est déconseillée&nbsp;: elle réduit le contrôle de l'outil et augmente fortement le risque de rebond et de perte d'équilibre.</p>
          </details>

          <details className="faq-item">
            <summary>Cette formation couvre-t-elle l'abattage de gros arbres&nbsp;?</summary>
            <p>Elle couvre les techniques de base d'abattage. Pour des arbres de grande taille ou des situations complexes (proximité de bâtiments, lignes électriques), une expertise d'élagage professionnelle spécialisée est recommandée.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation tronçonneuse thermique</h2>
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
