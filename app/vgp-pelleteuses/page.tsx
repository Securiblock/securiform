import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des pelleteuses",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-pelleteuses/",
      "description": "Vérification Générale Périodique des pelleteuses, tous les 12 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des pelleteuses",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-pelleteuses/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des pelleteuses — SECURIFORM",
  description: "VGP des pelleteuses avec SECURIFORM : détection d'usure, fissures et déformations. Fréquence de 12 mois.",
  alternates: { canonical: "/vgp-pelleteuses" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-pelleteuses",
    title: "VGP des pelleteuses — SECURIFORM",
    description: "VGP des pelleteuses avec SECURIFORM : détection d'usure, fissures et déformations. Fréquence de 12 mois.",
    images: ["/image/vgp-pelleteuses.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des pelleteuses — SECURIFORM",
    description: "Vérification Générale Périodique de vos pelleteuses, avec SECURIFORM.",
    images: ["/image/vgp-pelleteuses.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des pelleteuses">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Pelleteuses</span>
        </p>
        <h1>Vérifications Générales Périodiques des pelleteuses</h1>
        <p>Détecter usure, fissures et déformations pouvant entraîner un accident sur chantier, tous les 12 mois.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Garantir un fonctionnement sûr</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des pelleteuses détectent toute anomalie pouvant entraîner des risques pour la sécurité des opérateurs ou des personnes aux alentours. Sans constituer une évaluation complète de la conformité, elles jouent un rôle primordial en identifiant l'usure des composants, les fissures ou les déformations susceptibles de provoquer un accident lors des travaux de chantier.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Un engin essentiel au déplacement de charges lourdes</h2>
          <hr className="trait" />
          <p>Les pelleteuses, comme tout appareil de levage ou engin de chantier, sont soumises à des inspections régulières. Ces machines sont essentielles au déplacement de charges lourdes sur les chantiers, ce qui signifie qu'une défaillance peut avoir des conséquences graves&nbsp;: il est donc crucial qu'elles soient régulièrement contrôlées pour garantir la sécurité des opérateurs.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Tous les résultats des VGP doivent être consignés dans un registre de sécurité, incluant incidents, réparations et interventions de maintenance effectuées. Il sert de preuve de conformité pour les autorités, comme l'inspection du travail, qui vérifient le respect des normes de sécurité.</p>
          <p>Un programme de maintenance préventive doit être mis en place en complément des VGP&nbsp;: les opérations doivent être soigneusement documentées dans un carnet d'entretien, pour suivre l'état des équipements et anticiper réparations ou remplacements avant qu'une défaillance grave n'apparaisse.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Incidents et réparations consignés dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre servant de preuve de conformité</li>
            <li><span className="puce" aria-hidden="true">✓</span> Un carnet d'entretien complète la VGP</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-frequence">
      <div className="container section-head reveal">
        <span className="surtitre">À retenir</span>
        <h2 id="titre-frequence">Une VGP tous les 12 mois</h2>
        <hr className="trait" />
        <p>Les pelleteuses doivent être inspectées au minimum tous les 12 mois. Selon les conditions spécifiques d'utilisation&nbsp;— fréquence d'usage, environnement corrosif&nbsp;— des contrôles plus fréquents peuvent être nécessaires pour assurer un niveau de sécurité optimal. Chaque inspection doit être réalisée par un inspecteur qualifié et compétent.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Le respect des normes de sécurité incombe non seulement aux utilisateurs des pelleteuses, mais aussi aux fabricants et distributeurs. Ces machines doivent répondre aux exigences de la directive européenne « Machines » 2006/42/CE. Le non-respect de ces normes peut entraîner des sanctions en cas d'accident.</p>
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
            <summary>Un environnement corrosif justifie-t-il un contrôle plus fréquent qu'annuel&nbsp;?</summary>
            <p>Oui, un environnement corrosif ou une utilisation très fréquente peuvent justifier des vérifications plus rapprochées que les 12 mois réglementaires.</p>
          </details>

          <details className="faq-item">
            <summary>Qui peut réaliser cette vérification&nbsp;?</summary>
            <p>Un inspecteur qualifié et compétent, disposant des connaissances techniques nécessaires pour juger de l'état réel de la pelleteuse et de ses dispositifs de sécurité.</p>
          </details>

          <details className="faq-item">
            <summary>La VGP couvre-t-elle aussi les équipements interchangeables (godet, pince, brise-roche)&nbsp;?</summary>
            <p>Oui, ces accessoires font partie des éléments contrôlés dès lors qu'ils sont susceptibles d'affecter la sécurité des opérations de manutention.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si une fissure est détectée sur le châssis&nbsp;?</summary>
            <p>L'équipement ne doit pas être remis en service tant que la réparation n'a pas été effectuée par un professionnel qualifié.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les conducteurs de pelleteuses&nbsp;?</summary>
            <p>Oui, la conduite d'une pelleteuse relève du CACES R482 (catégorie B1), complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence du conducteur.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de pelleteuses</h2>
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
              <label htmlFor="nombre">Nombre de pelleteuses à vérifier</label>
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
            <p>La VGP contrôle l'état de vos pelleteuses&nbsp;; le CACES R482 certifie la compétence de vos conducteurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r482a">Découvrir le CACES R482</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
            <Link href="/vgp-grues-auxiliaires">Grues auxiliaires</Link>
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
