import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des chariots élévateurs",
      "serviceType": "Vérification Générale Périodique",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "areaServed": {
        "@type": "State",
        "name": "Hauts-de-France"
      },
      "url": "https://securiform.fr/verifications-generales-periodiques-des-chariots-elevateurs/",
      "description": "Vérification Générale Périodique des chariots élévateurs, tous les 6 mois, conformément aux articles R4323-23 et R4323-24 du Code du travail."
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
          "name": "VGP",
          "item": "https://securiform.fr/vgp/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "VGP des chariots élévateurs",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-chariots-elevateurs/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des chariots élévateurs — SECURIFORM",
  description: "Vérification Générale Périodique des chariots élévateurs avec SECURIFORM : équipements concernés, éléments contrôlés, registre de sécurité, fréquence de 6 mois. Conforme aux articles R4323-23 et R4323-24 du Code du travail.",
  alternates: { canonical: "/vgp-chariots-elevateurs" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-chariots-elevateurs",
    title: "VGP des chariots élévateurs — SECURIFORM",
    description: "Assurez la sécurité de vos chariots élévateurs avec les VGP SECURIFORM : inspections tous les 6 mois, détection d'anomalies, conformité réglementaire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des chariots élévateurs — SECURIFORM",
    description: "Vérification Générale Périodique de vos chariots élévateurs, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des chariots élévateurs">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Chariots élévateurs</span>
        </p>
        <h1>Vérifications Générales Périodiques des chariots élévateurs</h1>
        <p>Détecter les défaillances susceptibles de créer des situations dangereuses, tous les 6 mois, conformément au Code du travail.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Un objectif précis&nbsp;: la sécurité, pas la conformité globale</h2>
        <hr className="trait" />
        <p>La VGP des chariots élévateurs vise à identifier les défaillances susceptibles de créer des situations dangereuses. Elle ne cherche pas à vérifier la conformité globale de l'équipement aux réglementations techniques, mais à s'assurer qu'il fonctionne en toute sécurité. En France, cette vérification est obligatoire, conformément aux articles R4323-23 et R4323-24 du Code du travail.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Les équipements soumis à la VGP</h2>
          <hr className="trait" />
          <p>Tout chariot élévateur dont la hauteur de levée des fourches dépasse 50 cm doit faire l'objet de vérifications générales périodiques. Les transpalettes électriques à conducteur porté sont également concernées par cette obligation.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-elements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui est contrôlé</span>
          <h2 id="titre-elements">Les éléments essentiels de sécurité</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Système de freinage</h3>
            <p>Contrôle de l'efficacité et de l'état général des freins de service et de stationnement.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chaînes de levage</h3>
            <p>Vérification de l'absence d'usure excessive, de déformation ou de corrosion.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Dispositifs de commande</h3>
            <p>Test du bon fonctionnement de l'ensemble des commandes de conduite et de manutention.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Limiteur de charge</h3>
            <p>Contrôle du dispositif empêchant le levage d'une charge supérieure à la capacité autorisée.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Les résultats de chaque vérification doivent être consignés dans un registre de sécurité, incluant toutes les anomalies constatées ainsi que les interventions de maintenance ou réparations effectuées. Ce registre doit être tenu à disposition des organismes de contrôle, notamment l'inspecteur du travail, et garantit une traçabilité rigoureuse de vos équipements.</p>
          <p>La VGP ne remplace pas la maintenance régulière recommandée par le fabricant&nbsp;: un plan de maintenance détaillé, incluant le remplacement de pièces et la révision des systèmes critiques, reste indispensable pour garantir une longue durée de vie à votre matériel.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Anomalies et interventions consignées dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre mis à disposition de l'inspecteur du travail</li>
            <li><span className="puce" aria-hidden="true">✓</span> La VGP ne dispense pas de la maintenance du fabricant</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-frequence">
      <div className="container section-head reveal">
        <span className="surtitre">À retenir</span>
        <h2 id="titre-frequence">Une VGP tous les 6 mois</h2>
        <hr className="trait" />
        <p>Les chariots élévateurs doivent subir une VGP tous les 6 mois, comme l'exige la législation. En cas de défaut identifié lors d'une vérification, l'équipement ne peut être remis en service qu'après correction complète des anomalies constatées.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Le respect des normes de sécurité en matière de levage incombe aux utilisateurs, mais aussi aux fabricants et distributeurs. Les chariots élévateurs doivent être conformes aux exigences de la directive européenne « Machines » 2006/42/CE. Mettre en service ou utiliser un équipement non conforme expose à des sanctions juridiques et financières en cas d'accident.</p>
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
            <summary>Un transpalette électrique est-il concerné par la VGP&nbsp;?</summary>
            <p>Oui, dès lors qu'il s'agit d'un transpalette électrique à conducteur porté, il est soumis à la même obligation de VGP que les chariots élévateurs classiques.</p>
          </details>

          <details className="faq-item">
            <summary>La VGP remplace-t-elle l'entretien du fabricant&nbsp;?</summary>
            <p>Non. La VGP vérifie l'absence de défaillance dangereuse à un instant donné, mais ne se substitue pas au plan de maintenance régulier recommandé par le fabricant de votre chariot.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si une anomalie est détectée&nbsp;?</summary>
            <p>L'équipement ne peut pas être remis en service tant que l'anomalie n'a pas été corrigée. Cette information est consignée dans le registre de sécurité.</p>
          </details>

          <details className="faq-item">
            <summary>Qui doit conserver le registre de sécurité&nbsp;?</summary>
            <p>L'entreprise utilisatrice de l'équipement, qui doit pouvoir le présenter à l'inspecteur du travail ou à tout organisme de contrôle qui en ferait la demande.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les caristes qui utilisent ces chariots&nbsp;?</summary>
            <p>Oui, la conduite d'un chariot élévateur relève du CACES R489, complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence du conducteur.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de chariots élévateurs</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser l'intervention.</p>
        </div>

        
        <form className="form-devis reveal" action="#" method="post">
          <div className="form-devis-grid">
            <div className="champ">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" required />
            </div>
            <div className="champ">
              <label htmlFor="societe">Société</label>
              <input type="text" id="societe" name="societe" required />
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
              <label htmlFor="nombre">Nombre de chariots à vérifier</label>
              <input type="number" id="nombre" name="nombre" min="1" />
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


    

    
<section className="section" aria-labelledby="titre-formations">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>Formation</span>
            <h2 id="titre-formations">Vos caristes sont-ils certifiés&nbsp;?</h2>
            <p>La VGP contrôle l'état de vos chariots élévateurs&nbsp;; le CACES R489 certifie la compétence de vos conducteurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r489">Découvrir le CACES R489</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
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
