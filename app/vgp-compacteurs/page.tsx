import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des compacteurs",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-compacteurs/",
      "description": "Vérification Générale Périodique des compacteurs automoteurs ou statiques, tous les 12 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des compacteurs",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-compacteurs/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des compacteurs — SECURIFORM",
  description: "VGP des compacteurs avec SECURIFORM : système de compression, rouleaux, parties mécaniques. Fréquence de 12 mois.",
  alternates: { canonical: "/vgp-compacteurs" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-compacteurs",
    title: "VGP des compacteurs — SECURIFORM",
    description: "VGP des compacteurs avec SECURIFORM : système de compression, rouleaux, parties mécaniques. Fréquence de 12 mois.",
    images: ["/image/vgp-compacteurs.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des compacteurs — SECURIFORM",
    description: "Vérification Générale Périodique de vos compacteurs, avec SECURIFORM.",
    images: ["/image/vgp-compacteurs.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des compacteurs">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Compacteurs</span>
        </p>
        <h1>Vérifications Générales Périodiques des compacteurs</h1>
        <p>Identifier toute anomalie pouvant causer un accident, tous les 12 mois, quel que soit le type de compacteur.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Garantir la sécurité, sans viser la conformité globale</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des compacteurs identifient toute anomalie pouvant causer des accidents ou des dangers lors de leur utilisation. L'objectif principal est de garantir la sécurité des opérateurs et de prévenir les risques liés aux défauts techniques, sans se focaliser sur la conformité globale de l'équipement aux normes techniques.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Les composants soumis à la VGP</h2>
          <hr className="trait" />
          <p>Qu'ils soient automoteurs ou statiques, tous les compacteurs utilisés pour compresser le sol, l'asphalte ou d'autres matériaux de chantier sont soumis à des VGP régulières. Particulièrement exposés à l'usure, leur système de compression, leurs rouleaux et leurs parties mécaniques doivent être inspectés régulièrement pour garantir leur efficacité et leur sécurité.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Comme pour tous les équipements de chantier, les résultats des VGP doivent être consignés dans un registre de sécurité, répertoriant incidents, anomalies et interventions de maintenance. Ce registre doit être tenu à disposition des inspecteurs du travail et des organismes de prévention des risques.</p>
          <p>La maintenance inclut le remplacement des pièces d'usure, la vérification des circuits hydrauliques, des freins et des systèmes de commande. Depuis 2005, le carnet de maintenance est obligatoire pour tous les équipements de chantier, permettant de suivre et de planifier les opérations d'entretien nécessaires à la longévité des machines.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Incidents et anomalies consignés dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre à disposition de l'inspecteur du travail</li>
            <li><span className="puce" aria-hidden="true">✓</span> Carnet de maintenance obligatoire depuis 2005</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-frequence">
      <div className="container section-head reveal">
        <span className="surtitre">À retenir</span>
        <h2 id="titre-frequence">Une VGP tous les 12 mois</h2>
        <hr className="trait" />
        <p>Les compacteurs doivent être vérifiés tous les 12 mois. Selon l'utilisation et les conditions spécifiques du chantier&nbsp;— poussière, terrains difficiles&nbsp;— la fréquence des contrôles peut être augmentée. Ces vérifications permettent de s'assurer que les machines restent aptes à fonctionner en toute sécurité et de prévenir pannes ou accidents dus à une défaillance technique.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Le chef d'établissement est responsable de s'assurer que les compacteurs sont régulièrement inspectés conformément à la législation. En cas d'accident ou de défaut, la responsabilité peut être partagée entre l'utilisateur et le fabricant. Les machines doivent être conformes à la directive « Machines » 2006/42/CE&nbsp;: il est interdit de mettre en service ou d'utiliser un compacteur non conforme.</p>
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
            <summary>Un compacteur statique est-il soumis à la même obligation qu'un compacteur automoteur&nbsp;?</summary>
            <p>Oui, les deux types de compacteurs relèvent de la même obligation de VGP tous les 12 mois.</p>
          </details>

          <details className="faq-item">
            <summary>Depuis quand le carnet de maintenance est-il obligatoire&nbsp;?</summary>
            <p>Depuis 2005, tous les équipements de chantier, dont les compacteurs, doivent disposer d'un carnet de maintenance permettant de suivre les opérations d'entretien réalisées.</p>
          </details>

          <details className="faq-item">
            <summary>Un chantier poussiéreux justifie-t-il un contrôle plus fréquent&nbsp;?</summary>
            <p>Oui, la poussière et les terrains difficiles peuvent accélérer l'usure des composants et justifier une fréquence de vérification supérieure à 12 mois.</p>
          </details>

          <details className="faq-item">
            <summary>Qui est responsable en cas d'accident lié à un compacteur non vérifié&nbsp;?</summary>
            <p>Le chef d'établissement porte la responsabilité première de s'assurer que l'équipement est régulièrement inspecté&nbsp;; sa responsabilité peut être partagée avec le fabricant selon l'origine du défaut.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les conducteurs de compacteurs&nbsp;?</summary>
            <p>Oui, la conduite d'un compacteur relève du CACES R482 (catégorie D), complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence du conducteur.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de compacteurs</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser l'intervention.</p>
        </div>

        
        <form className="form-devis reveal" action={submitForm}>
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
              <label htmlFor="nombre">Nombre de compacteurs à vérifier</label>
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
            <h2 id="titre-formations">Vos conducteurs sont-ils certifiés&nbsp;?</h2>
            <p>La VGP contrôle l'état de vos compacteurs&nbsp;; le CACES R482 certifie la compétence de vos conducteurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r482a">Découvrir le CACES R482</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
            <Link href="/vgp-grues-auxiliaires">Grues auxiliaires</Link>
            <Link href="/vgp-ponts-roulants">Ponts roulants</Link>
            <Link href="/vgp-chargeuses">Chargeuses</Link>
            <Link href="/vgp-chariots-telescopiques">Chariots télescopiques</Link>
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
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
