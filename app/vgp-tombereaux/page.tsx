import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des tombereaux",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-tombereaux/",
      "description": "Vérification Générale Périodique des tombereaux, tous les 6 mois pour un usage de levage ou 12 mois pour un usage de transport standard, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des tombereaux",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-tombereaux/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des tombereaux — SECURIFORM",
  description: "VGP des tombereaux avec SECURIFORM : châssis, freinage, direction, mécanismes de déversement. Fréquence de 6 ou 12 mois.",
  alternates: { canonical: "/vgp-tombereaux" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-tombereaux",
    title: "VGP des tombereaux — SECURIFORM",
    description: "VGP des tombereaux avec SECURIFORM : châssis, freinage, direction, mécanismes de déversement. Fréquence de 6 ou 12 mois.",
    images: ["/image/vgp-tombereaux.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des tombereaux — SECURIFORM",
    description: "Vérification Générale Périodique de vos tombereaux, avec SECURIFORM.",
    images: ["/image/vgp-tombereaux.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des tombereaux" style={{ backgroundImage: "url('/image/vgp-tombereaux.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Tombereaux</span>
        </p>
        <h1>Vérifications Générales Périodiques des tombereaux</h1>
        <p>Détecter l'usure et les défaillances mécaniques, avec une périodicité qui dépend de l'usage de l'engin.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Garantir la sécurité sur chantier</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des tombereaux sont primordiales pour assurer la sécurité lors de leur utilisation sur les chantiers. Elles visent à détecter toute anomalie&nbsp;— usure, défaillance mécanique&nbsp;— pouvant engendrer des risques pour les opérateurs ou leur environnement. La VGP ne remplace pas la maintenance régulière, mais permet de garantir que l'équipement respecte les normes de sécurité en vigueur.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-elements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui est contrôlé</span>
          <h2 id="titre-elements">Les éléments essentiels de sécurité</h2>
          <hr className="trait" />
          <p>Les tombereaux, engins de chantier transportant de lourdes charges, font l'objet d'une inspection complète des composants essentiels, complétée par un contrôle visuel de l'état structurel (corrosion, fissures).</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Châssis</h3>
            <p>Recherche de corrosion, fissures ou déformations sur la structure porteuse.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Système de freinage</h3>
            <p>Contrôle de l'efficacité des freins, essentiel sur un engin transportant de lourdes charges.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Dispositifs de direction</h3>
            <p>Vérification du bon fonctionnement de la direction, notamment sur terrain accidenté.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Mécanismes de déversement</h3>
            <p>Test du système de basculement de la benne, point critique lors du déchargement.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Les résultats de chaque vérification doivent être inscrits dans un registre de sécurité, incluant les anomalies détectées et les réparations effectuées. Ce registre doit être mis à disposition des autorités compétentes, telles que l'inspection du travail, afin d'attester de la conformité de l'équipement.</p>
          <p>En complément, un entretien régulier reste essentiel&nbsp;: inspections approfondies des composants hydrauliques, des pneus et des éléments de contrôle, avec un suivi minutieux dans un carnet de maintenance dédié, pour anticiper les réparations avant qu'une panne critique ne survienne.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Anomalies et réparations consignées dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre à disposition de l'inspection du travail</li>
            <li><span className="puce" aria-hidden="true">✓</span> Un carnet de maintenance complète la VGP</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-frequence">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le point à ne pas manquer</span>
          <h2 id="titre-frequence">Une périodicité qui dépend de l'usage</h2>
          <hr className="trait" />
          <p>Contrairement à d'autres équipements, la fréquence de VGP d'un tombereau varie selon la façon dont il est utilisé.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Usage du tombereau</th>
                <th scope="col">Périodicité</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tâches de levage</td>
                <td>Tous les 6 mois</td>
              </tr>
              <tr>
                <td>Transport standard de matériaux</td>
                <td>Tous les 12 mois</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Des vérifications plus fréquentes peuvent être nécessaires en conditions difficiles&nbsp;: environnements très corrosifs ou charges excessives.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Le respect des obligations légales incombe à l'utilisateur, mais aussi aux propriétaires de l'équipement. La non-conformité aux directives de sécurité, notamment l'absence de VGP ou de maintenance régulière, peut exposer les entreprises à des sanctions financières et juridiques en cas d'accident.</p>
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
            <summary>Comment savoir si mon tombereau relève de la périodicité de 6 ou 12 mois&nbsp;?</summary>
            <p>Cela dépend de son usage réel&nbsp;: un tombereau utilisé pour des tâches de levage doit être vérifié tous les 6 mois, tandis qu'un usage de transport standard de matériaux relève d'une périodicité annuelle.</p>
          </details>

          <details className="faq-item">
            <summary>Mon tombereau change d'usage en cours d'année, que faire&nbsp;?</summary>
            <p>Il convient d'appliquer la périodicité la plus stricte dès lors que l'engin est utilisé, même occasionnellement, pour des tâches de levage.</p>
          </details>

          <details className="faq-item">
            <summary>Un environnement très corrosif justifie-t-il un contrôle plus fréquent&nbsp;?</summary>
            <p>Oui, les environnements très corrosifs ou l'usage avec des charges excessives peuvent justifier des vérifications plus rapprochées que la périodicité de base.</p>
          </details>

          <details className="faq-item">
            <summary>Qui doit conserver le registre de sécurité&nbsp;?</summary>
            <p>L'entreprise utilisatrice du tombereau, qui doit pouvoir le présenter à l'inspection du travail ou à tout organisme de contrôle qui en ferait la demande.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les conducteurs de tombereaux&nbsp;?</summary>
            <p>Oui, la conduite d'un tombereau relève du CACES R482 (catégorie E), complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence du conducteur.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de tombereaux</h2>
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
            <div className="champ">
              <label htmlFor="usage">Usage principal du tombereau</label>
              <select id="usage" name="usage">
                <option value="levage">Tâches de levage</option>
                <option value="transport">Transport standard</option>
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
            <h2 id="titre-formations">Vos conducteurs sont-ils certifiés&nbsp;?</h2>
            <p>La VGP contrôle l'état de vos tombereaux&nbsp;; le CACES R482 certifie la compétence de vos conducteurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
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
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
            <Link href="/vgp-accessoires-levage">Accessoires de levage</Link>
          </nav>
        </div>
      </div>
    </section>


  
    </>
  );
}
