import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des nacelles élévatrices",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-nacelles-elevatrices/",
      "description": "Vérification Générale Périodique des nacelles élévatrices (PEMP), tous les 6 mois, conformément à l'arrêté du 1er mars 2004."
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
          "name": "VGP des nacelles élévatrices",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-nacelles-elevatrices/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des nacelles élévatrices — SECURIFORM",
  description: "VGP des nacelles élévatrices (PEMP) avec SECURIFORM : inspection visuelle et essais de fonctionnement. Fréquence de 6 mois.",
  alternates: { canonical: "/vgp-nacelles-elevatrices" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-nacelles-elevatrices",
    title: "VGP des nacelles élévatrices — SECURIFORM",
    description: "VGP des nacelles élévatrices (PEMP) avec SECURIFORM : inspection visuelle et essais de fonctionnement. Fréquence de 6 mois.",
    images: ["/image/vgp-nacelles-elevatrices.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des nacelles élévatrices — SECURIFORM",
    description: "Vérification Générale Périodique de vos nacelles élévatrices, avec SECURIFORM.",
    images: ["/image/vgp-nacelles-elevatrices.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des nacelles élévatrices" style={{ backgroundImage: "url('/image/vgp-nacelles-elevatrices.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Nacelles élévatrices</span>
        </p>
        <h1>Vérifications Générales Périodiques des nacelles élévatrices</h1>
        <p>Garantir la sécurité des opérateurs travaillant en hauteur, tous les 6 mois, conformément à l'arrêté du 1er mars 2004.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Prévenir les accidents en hauteur</h2>
        <hr className="trait" />
        <p>Les nacelles élévatrices, aussi appelées PEMP (Plateformes Élévatrices Mobiles de Personnel), font l'objet de vérifications générales périodiques visant à garantir la sécurité des opérateurs et à prévenir les accidents. Ces contrôles permettent d'identifier toute déformation, usure ou panne susceptible de compromettre la sécurité pendant les travaux en hauteur. La VGP ne constitue pas une certification de conformité complète, mais joue un rôle essentiel dans la prévention des risques.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Les équipements soumis à la VGP</h2>
          <hr className="trait" />
          <p>Nacelles automotrices, nacelles montées sur camion ou nacelles à mât vertical&nbsp;: toutes doivent être vérifiées selon une fréquence stricte de deux fois par an, conformément à l'arrêté du 1er mars 2004.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-controle">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui est contrôlé</span>
          <h2 id="titre-controle">Deux volets complémentaires</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-2">

          <article className="categorie-card reveal">
            <h3>Inspection visuelle</h3>
            <p>Recherche de déformations, de fissures, de corrosion ou d'usure anormale sur l'ensemble de la structure et des composants.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Essais de fonctionnement</h3>
            <p>Vérification du bon fonctionnement de tous les dispositifs de sécurité&nbsp;: limiteurs, stabilisateurs, commandes de secours.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Les résultats de chaque VGP doivent être consignés dans un registre de sécurité, incluant les anomalies détectées, les interventions de maintenance et les réparations effectuées. Ce registre est consultable par les autorités, notamment l'inspecteur du travail, pour vérifier la bonne gestion des risques sur vos chantiers.</p>
          <p>Au-delà de la VGP, un entretien régulier reste indispensable&nbsp;: graissages et remplacements de pièces d'usure doivent être enregistrés dans un carnet de maintenance dédié, pour assurer un suivi rigoureux dans la durée.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Anomalies et interventions consignées dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre consultable par l'inspecteur du travail</li>
            <li><span className="puce" aria-hidden="true">✓</span> Un carnet de maintenance complète la VGP</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-frequence">
      <div className="container section-head reveal">
        <span className="surtitre">À retenir</span>
        <h2 id="titre-frequence">Une VGP tous les 6 mois</h2>
        <hr className="trait" />
        <p>Les nacelles élévatrices doivent être contrôlées au moins tous les 6 mois. Cette périodicité peut être resserrée selon l'intensité d'utilisation ou des conditions particulières. Le contrôle doit toujours être réalisé par un professionnel qualifié, garantissant que l'équipement reste apte à fonctionner en toute sécurité.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Utilisateurs et fabricants sont conjointement responsables du respect des normes de sécurité. L'utilisation d'une nacelle non conforme peut entraîner des sanctions financières et juridiques, en particulier en cas d'accident. La conformité à la directive européenne « Machines » 2006/42/CE est obligatoire pour toute mise en service.</p>
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
            <summary>Toutes les nacelles sont-elles concernées de la même façon&nbsp;?</summary>
            <p>Oui, qu'elles soient automotrices, montées sur camion ou à mât vertical, toutes les nacelles élévatrices relèvent de la même obligation de vérification tous les 6 mois.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on espacer la VGP au-delà de 6 mois si la nacelle est peu utilisée&nbsp;?</summary>
            <p>Non, 6 mois est un maximum réglementaire. En revanche, une utilisation intensive ou des conditions particulières peuvent justifier un contrôle plus fréquent.</p>
          </details>

          <details className="faq-item">
            <summary>Le carnet de maintenance remplace-t-il le registre de sécurité&nbsp;?</summary>
            <p>Non, ce sont deux documents complémentaires&nbsp;: le registre de sécurité trace les VGP et leurs anomalies, le carnet de maintenance trace l'entretien courant (graissage, pièces d'usure).</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les opérateurs qui utilisent ces nacelles&nbsp;?</summary>
            <p>Oui, la conduite d'une nacelle élévatrice relève du CACES R486, complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence de l'opérateur.</p>
          </details>

          <details className="faq-item">
            <summary>Qui peut réaliser cette vérification&nbsp;?</summary>
            <p>Un professionnel qualifié, disposant des compétences techniques nécessaires pour juger de l'état réel de l'équipement et de la conformité de ses dispositifs de sécurité.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de nacelles élévatrices</h2>
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
              <label htmlFor="nombre">Nombre de nacelles à vérifier</label>
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
            <h2 id="titre-formations">Vos opérateurs sont-ils certifiés&nbsp;?</h2>
            <p>La VGP contrôle l'état de vos nacelles&nbsp;; le CACES R486 certifie la compétence de vos opérateurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r486a">Découvrir le CACES R486</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
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
