import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des chargeuses",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-chargeuses/",
      "description": "Vérification Générale Périodique des chargeuses sur pneus ou chenilles, tous les 6 mois, conformément à l'arrêté du 1er mars 2004."
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
          "name": "VGP des chargeuses",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-chargeuses/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des chargeuses — SECURIFORM",
  description: "VGP des chargeuses avec SECURIFORM : équipements concernés, éléments contrôlés, registre de sécurité. Fréquence de 6 mois.",
  alternates: { canonical: "/vgp-chargeuses" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-chargeuses",
    title: "VGP des chargeuses — SECURIFORM",
    description: "VGP des chargeuses avec SECURIFORM : équipements concernés, éléments contrôlés, registre de sécurité. Fréquence de 6 mois.",
    images: ["/image/vgp-chargeuses.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des chargeuses — SECURIFORM",
    description: "Vérification Générale Périodique de vos chargeuses, avec SECURIFORM.",
    images: ["/image/vgp-chargeuses.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des chargeuses" style={{ backgroundImage: "url('/image/vgp-chargeuses.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Chargeuses</span>
        </p>
        <h1>Vérifications Générales Périodiques des chargeuses</h1>
        <p>Détecter toute défectuosité pouvant entraîner une situation dangereuse, tous les 6 mois, conformément à l'arrêté du 1er mars 2004.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Un contrôle ciblé sur la sécurité</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des chargeuses détectent toute défectuosité pouvant entraîner une situation dangereuse, sans pour autant vérifier la conformité totale de l'équipement à l'ensemble des réglementations techniques. Conformément à l'arrêté du 1er mars 2004, la VGP est obligatoire pour les machines de levage, y compris les chargeuses, qu'elles soient sur pneus ou sur chenilles.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-elements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui est contrôlé</span>
          <h2 id="titre-elements">Les éléments essentiels de sécurité</h2>
          <hr className="trait" />
          <p>Le processus de vérification comprend une inspection approfondie des éléments de sécurité, ainsi que des tests pratiques pour s'assurer de leur bon fonctionnement.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Freins</h3>
            <p>Contrôle de l'efficacité et de l'état général du système de freinage.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Pneumatiques</h3>
            <p>Vérification de l'usure, de la pression et de l'absence de dommages compromettant la stabilité.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Limiteur de charge</h3>
            <p>Contrôle du dispositif empêchant le levage d'une charge supérieure à la capacité autorisée.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chaînes</h3>
            <p>Vérification de l'absence d'usure excessive, de déformation ou de corrosion.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Le résultat de chaque VGP est consigné dans un registre de sécurité, où sont notés incidents, anomalies et remplacements de pièces. Ce document doit être accessible à l'inspecteur du travail et aux organismes de prévention des risques professionnels&nbsp;: il sert de référence en cas d'accident ou d'inspection.</p>
          <p>La VGP ne remplace pas les opérations de maintenance régulière prescrites par le fabricant&nbsp;: il est recommandé de tenir un carnet de maintenance dédié, pour prolonger la durée de vie de la machine et optimiser sa sécurité d'utilisation.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Incidents et anomalies consignés dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre accessible à l'inspecteur du travail</li>
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
        <p>Les chargeuses doivent être soumises à une VGP tous les 6 mois. Cette fréquence garantit que l'équipement reste apte à fonctionner en toute sécurité dans divers environnements de travail. En cas de non-conformité détectée, les réparations nécessaires doivent être effectuées avant de remettre l'engin en service.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Le respect des normes de sécurité en matière de levage incombe aux utilisateurs, mais aussi aux fabricants et distributeurs. Les chargeuses doivent être conformes aux exigences de la directive européenne « Machines » 2006/42/CE. Mettre en service ou utiliser un équipement non conforme expose à des sanctions juridiques et financières en cas d'accident.</p>
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
            <summary>Une chargeuse sur chenilles est-elle soumise à la même fréquence qu'une chargeuse sur pneus&nbsp;?</summary>
            <p>Oui, l'arrêté du 1er mars 2004 s'applique de la même façon aux chargeuses sur pneus et sur chenilles&nbsp;: une VGP tous les 6 mois dans les deux cas.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si une anomalie est détectée sur le limiteur de charge&nbsp;?</summary>
            <p>L'équipement ne peut pas être remis en service tant que la réparation n'a pas été effectuée&nbsp;: le limiteur de charge est un dispositif de sécurité critique.</p>
          </details>

          <details className="faq-item">
            <summary>Qui doit conserver le registre de sécurité&nbsp;?</summary>
            <p>L'entreprise utilisatrice de la chargeuse, qui doit pouvoir le présenter à l'inspecteur du travail ou à tout organisme de prévention qui en ferait la demande.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les conducteurs de chargeuses&nbsp;?</summary>
            <p>Oui, la conduite d'une chargeuse relève du CACES R482 (catégorie C1), complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence du conducteur.</p>
          </details>

          <details className="faq-item">
            <summary>La VGP couvre-t-elle aussi le godet de la chargeuse&nbsp;?</summary>
            <p>Oui, dans la mesure où il s'agit d'un équipement de travail intégré à la machine, susceptible d'affecter la sécurité de manutention des charges.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de chargeuses</h2>
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
              <label htmlFor="nombre">Nombre de chargeuses à vérifier</label>
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
            <p>La VGP contrôle l'état de vos chargeuses&nbsp;; le CACES R482 certifie la compétence de vos conducteurs. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r482a">Découvrir le CACES R482</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
            <Link href="/vgp-grues-auxiliaires">Grues auxiliaires</Link>
            <Link href="/vgp-ponts-roulants">Ponts roulants</Link>
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
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
