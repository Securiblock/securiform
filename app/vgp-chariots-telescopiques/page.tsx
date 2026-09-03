import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des chariots télescopiques",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-chariots-telescopiques/",
      "description": "Vérification Générale Périodique des chariots télescopiques, tous les 6 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des chariots télescopiques",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-chariots-telescopiques/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des chariots télescopiques — SECURIFORM",
  description: "VGP des chariots télescopiques avec SECURIFORM : systèmes hydrauliques, structure, dispositifs de sécurité. Fréquence de 6 mois.",
  alternates: { canonical: "/vgp-chariots-telescopiques" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-chariots-telescopiques",
    title: "VGP des chariots télescopiques — SECURIFORM",
    description: "VGP des chariots télescopiques avec SECURIFORM : systèmes hydrauliques, structure, dispositifs de sécurité. Fréquence de 6 mois.",
    images: ["/image/vgp-chariots-telescopiques.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des chariots télescopiques — SECURIFORM",
    description: "Vérification Générale Périodique de vos chariots télescopiques, avec SECURIFORM.",
    images: ["/image/vgp-chariots-telescopiques.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des chariots télescopiques" style={{ backgroundImage: "url('/image/vgp-chariots-telescopiques.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Chariots télescopiques</span>
        </p>
        <h1>Vérifications Générales Périodiques des chariots télescopiques</h1>
        <p>Détecter les anomalies susceptibles de mettre en péril la sécurité des utilisateurs et des personnes à proximité, tous les 6 mois.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Un équipement polyvalent, une vigilance accrue</h2>
        <hr className="trait" />
        <p>Les chariots télescopiques transportent des charges à hauteur variable et peuvent recevoir différents accessoires&nbsp;: godets, fourches ou treuils. Cette polyvalence, combinée à leur capacité à supporter de lourdes charges à des hauteurs importantes, justifie l'importance d'inspections régulières. La VGP évalue les éléments critiques de l'équipement&nbsp;— systèmes hydrauliques, structure, dispositifs de sécurité&nbsp;— sans constituer une validation complète de la conformité.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-elements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui est contrôlé</span>
          <h2 id="titre-elements">Les éléments essentiels de sécurité</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Systèmes hydrauliques</h3>
            <p>Contrôle de l'étanchéité et du bon fonctionnement des vérins assurant le levage et la télescopie du bras.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Structure</h3>
            <p>Recherche de déformations, fissures ou signes de fatigue sur le bras télescopique et le châssis.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Dispositifs de sécurité</h3>
            <p>Vérification des limiteurs de charge et de moment, essentiels lors des opérations à grande hauteur.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>La réglementation impose la consignation des résultats de chaque VGP dans un registre de sécurité, retraçant les anomalies détectées, les interventions de maintenance et les actions correctives réalisées. Ce registre est consultable par les autorités compétentes, notamment l'inspection du travail.</p>
          <p>Un entretien régulier reste indispensable en complément de la VGP&nbsp;: contrôle des systèmes hydrauliques, des pneus et de la structure, avec réparation ou remplacement des pièces défectueuses, le tout documenté dans un carnet de maintenance.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Anomalies et actions correctives consignées</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre consultable par l'inspection du travail</li>
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
        <p>Les chariots télescopiques doivent être soumis à une VGP tous les 6 mois. Des conditions d'utilisation particulières&nbsp;— environnements agressifs (poussière, humidité), usage intensif&nbsp;— peuvent justifier des contrôles plus fréquents. Ces inspections doivent être réalisées par des professionnels compétents ou des organismes agréés.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Les utilisateurs de chariots télescopiques, ainsi que leurs employeurs, sont responsables de la conformité aux normes de sécurité, notamment celles définies par la directive européenne 2006/42/CE sur les machines. L'utilisation d'un équipement non conforme ou non inspecté expose à des sanctions en cas d'accident.</p>
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
            <summary>La VGP porte-t-elle aussi sur les accessoires (godet, fourches, treuil)&nbsp;?</summary>
            <p>Oui, ces accessoires interchangeables font partie des éléments contrôlés dès lors qu'ils sont susceptibles d'affecter la sécurité de manutention des charges.</p>
          </details>

          <details className="faq-item">
            <summary>Un usage en environnement poussiéreux justifie-t-il un contrôle plus fréquent&nbsp;?</summary>
            <p>Oui, les environnements agressifs (poussière, humidité) ou un usage intensif peuvent justifier des vérifications plus rapprochées que les 6 mois réglementaires.</p>
          </details>

          <details className="faq-item">
            <summary>Qui peut réaliser cette vérification&nbsp;?</summary>
            <p>Un professionnel compétent ou un organisme agréé spécialisé dans les équipements de levage et de manutention.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les conducteurs de chariots télescopiques&nbsp;?</summary>
            <p>Oui, leur conduite relève du CACES R482 selon la configuration de l'engin, complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence du conducteur.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il en cas d'anomalie sur le système hydraulique&nbsp;?</summary>
            <p>L'équipement ne peut pas être remis en service tant que la réparation n'a pas été effectuée, un défaut hydraulique pouvant entraîner une perte de contrôle du bras télescopique.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de chariots télescopiques</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser l'intervention.</p>
        </div>

        
        <form className="form-devis reveal" action={submitForm}>
          <input type="text" name="site_web" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
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
            <h2 id="titre-formations">Vos conducteurs sont-ils certifiés&nbsp;?</h2>
            <p>La VGP contrôle l'état de vos chariots télescopiques&nbsp;; le CACES R482 certifie la compétence de vos conducteurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r482a">Découvrir le CACES R482</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
            <Link href="/vgp-grues-auxiliaires">Grues auxiliaires</Link>
            <Link href="/vgp-ponts-roulants">Ponts roulants</Link>
            <Link href="/vgp-chargeuses">Chargeuses</Link>
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
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
