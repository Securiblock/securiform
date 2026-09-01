import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des grues auxiliaires",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-grues-auxiliaires/",
      "description": "Vérification Générale Périodique des grues auxiliaires montées sur véhicules, tous les 6 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des grues auxiliaires",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-grues-auxiliaires/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des grues auxiliaires — SECURIFORM",
  description: "Vérification Générale Périodique des grues auxiliaires avec SECURIFORM : équipements concernés, registre de sécurité, fréquence de 6 mois. Conforme à la directive Machines 2006/42/CE.",
  alternates: { canonical: "/vgp-grues-auxiliaires" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-grues-auxiliaires",
    title: "VGP des grues auxiliaires — SECURIFORM",
    description: "Assurez la sécurité de vos grues auxiliaires avec les VGP SECURIFORM : inspections tous les 6 mois, détection d'anomalies, conformité réglementaire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des grues auxiliaires — SECURIFORM",
    description: "Vérification Générale Périodique de vos grues auxiliaires, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des grues auxiliaires">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Grues auxiliaires</span>
        </p>
        <h1>Vérifications Générales Périodiques des grues auxiliaires</h1>
        <p>Identifier toute anomalie susceptible de compromettre la sécurité des opérations de levage, tous les 6 mois.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Détecter l'usure avant l'incident</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des grues auxiliaires visent à identifier toute anomalie susceptible de compromettre la sécurité des opérations de levage&nbsp;: signes d'usure, fissures ou dysfonctionnements mécaniques. Elles ne constituent pas une évaluation de conformité complète, mais restent indispensables pour s'assurer que ces grues fonctionnent correctement.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Les équipements soumis à la VGP</h2>
          <hr className="trait" />
          <p>Les grues auxiliaires montées sur véhicules, utilisées pour le levage de charges lourdes, sont soumises à des vérifications régulières&nbsp;: grues hydrauliques montées sur camion et grues fixes de manutention lourde. Leur utilisation fréquente en environnement exigeant rend ces inspections particulièrement importantes.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Les résultats des vérifications doivent être consignés dans un registre de sécurité, incluant les interventions de maintenance, les incidents et les anomalies relevées. Ce document est mis à disposition des autorités compétentes, pour assurer un suivi rigoureux de la gestion des risques sur vos chantiers.</p>
          <p>Au-delà de la VGP, une maintenance régulière reste indispensable pour garantir la durabilité de vos grues&nbsp;: chaque intervention doit être documentée dans un carnet de maintenance dédié, permettant d'anticiper réparations et remplacements avant qu'une panne ne survienne.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Anomalies et interventions consignées dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre à disposition des autorités compétentes</li>
            <li><span className="puce" aria-hidden="true">✓</span> Un carnet de maintenance complète la VGP</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-frequence">
      <div className="container section-head reveal">
        <span className="surtitre">À retenir</span>
        <h2 id="titre-frequence">Une VGP tous les 6 mois</h2>
        <hr className="trait" />
        <p>Les grues auxiliaires doivent être inspectées au moins tous les 6 mois. Des conditions de travail spécifiques&nbsp;— exposition à la corrosion, usage intensif&nbsp;— peuvent justifier des contrôles plus fréquents. Chaque vérification doit être réalisée par une personne qualifiée, salarié formé ou prestataire externe spécialisé dans les équipements de levage.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Utilisateurs, fabricants et distributeurs sont tous responsables de la sécurité des grues auxiliaires. Ces équipements doivent respecter les exigences de la directive européenne « Machines » 2006/42/CE. Mettre en service ou utiliser une grue non conforme expose à des sanctions juridiques et financières, en particulier en cas d'accident.</p>
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
            <summary>Une grue auxiliaire exposée à la corrosion doit-elle être vérifiée plus souvent&nbsp;?</summary>
            <p>Oui, l'exposition à des conditions agressives (embruns, chantiers salissants) ou un usage intensif peuvent justifier un contrôle plus fréquent que les 6 mois réglementaires.</p>
          </details>

          <details className="faq-item">
            <summary>Qui peut réaliser cette vérification&nbsp;?</summary>
            <p>Une personne qualifiée, qu'il s'agisse d'un salarié formé en interne ou d'un prestataire externe spécialisé dans les équipements de levage.</p>
          </details>

          <details className="faq-item">
            <summary>La VGP couvre-t-elle aussi le véhicule porteur&nbsp;?</summary>
            <p>Non, la VGP porte sur la grue elle-même et ses dispositifs de sécurité. Le véhicule porteur relève de son propre contrôle technique réglementaire.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les opérateurs de ces grues&nbsp;?</summary>
            <p>Oui, la conduite d'une grue auxiliaire relève du CACES R490, complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence de l'opérateur.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire si une anomalie grave est détectée&nbsp;?</summary>
            <p>La grue doit être immobilisée jusqu'à correction complète de l'anomalie&nbsp;: la remettre en service en l'état exposerait l'entreprise à un risque d'accident et à des sanctions en cas de contrôle.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de grues auxiliaires</h2>
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
              <label htmlFor="nombre">Nombre de grues à vérifier</label>
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


    

    
<section className="section" aria-labelledby="titre-formations">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>Formation</span>
            <h2 id="titre-formations">Vos opérateurs sont-ils certifiés&nbsp;?</h2>
            <p>La VGP contrôle l'état de vos grues auxiliaires&nbsp;; le CACES R490 certifie la compétence de vos opérateurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r490">Découvrir le CACES R490</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
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
