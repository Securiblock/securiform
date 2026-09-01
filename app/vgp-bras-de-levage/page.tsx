import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des bras de levage",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-bras-de-levages/",
      "description": "Vérification Générale Périodique des bras de levage, tous les 6 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des bras de levage",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-bras-de-levages/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des bras de levage — SECURIFORM",
  description: "Vérification Générale Périodique des bras de levage avec SECURIFORM : systèmes hydrauliques, câbles, composants mécaniques, fréquence de 6 mois. Conforme à la directive Machines 2006/42/CE.",
  alternates: { canonical: "/vgp-bras-de-levage" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-bras-de-levage",
    title: "VGP des bras de levage — SECURIFORM",
    description: "Assurez la sécurité de vos bras de levage avec les VGP SECURIFORM : inspections tous les 6 mois, détection d'anomalies, conformité réglementaire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des bras de levage — SECURIFORM",
    description: "Vérification Générale Périodique de vos bras de levage, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des bras de levage">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Bras de levage</span>
        </p>
        <h1>Vérifications Générales Périodiques des bras de levage</h1>
        <p>Identifier toute anomalie susceptible de causer un accident sur chantier, tous les 6 mois.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Prévenir l'usure et les défauts mécaniques</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des bras de levage visent à identifier toute anomalie susceptible de causer des accidents ou de nuire à la sécurité sur les chantiers. Elles garantissent que ces équipements, utilisés pour soulever et déplacer des charges lourdes, restent en état de fonctionnement optimal, en prévenant les risques liés à leur usure ou à des défauts mécaniques.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Un équipement exposé aux charges importantes</h2>
          <hr className="trait" />
          <p>Les bras de levage, fréquemment utilisés pour la manutention de bennes ou de matériaux sur les chantiers, sont exposés à des charges importantes. Leurs systèmes hydrauliques, câbles et autres composants mécaniques doivent être inspectés régulièrement pour prévenir les accidents.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Tous les résultats des VGP doivent être consignés dans un registre de sécurité, répertoriant les résultats des contrôles, les incidents et anomalies observés, ainsi que les interventions de maintenance réalisées. Ce registre est à la disposition de l'inspecteur du travail et des organismes concernés par la prévention des risques professionnels.</p>
          <p>En complément, la maintenance préventive régulière permet de prolonger la durée de vie de l'équipement et d'assurer sa conformité continue&nbsp;: le carnet de maintenance, où toutes les interventions sont enregistrées, est obligatoire et doit être tenu à jour.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Résultats, incidents et anomalies consignés</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre à disposition de l'inspecteur du travail</li>
            <li><span className="puce" aria-hidden="true">✓</span> Carnet de maintenance obligatoire et à jour</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-frequence">
      <div className="container section-head reveal">
        <span className="surtitre">À retenir</span>
        <h2 id="titre-frequence">Une VGP tous les 6 mois</h2>
        <hr className="trait" />
        <p>Les bras de levage sont soumis à une vérification périodique tous les 6 mois, garantissant la sécurité des utilisateurs et la fiabilité des équipements. En cas de modification significative&nbsp;— changement de site, réparation majeure&nbsp;— une nouvelle vérification de mise en service est également requise, indépendamment du calendrier habituel.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Le chef d'établissement est tenu de s'assurer que les bras de levage sont conformes aux normes en vigueur, notamment la directive « Machines » 2006/42/CE. Il est interdit de mettre en service un appareil non conforme&nbsp;; en cas d'accident, la responsabilité peut être recherchée tant du côté de l'utilisateur que du fabricant.</p>
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
            <summary>Un bras de levage réparé doit-il être revérifié immédiatement&nbsp;?</summary>
            <p>Oui, toute réparation majeure impose une nouvelle vérification de mise en service, indépendamment de la date de la prochaine VGP semestrielle prévue.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si je déplace mon bras de levage sur un nouveau site&nbsp;?</summary>
            <p>Un changement de site constitue une modification significative justifiant une nouvelle vérification de mise en service, avant toute reprise d'utilisation.</p>
          </details>

          <details className="faq-item">
            <summary>Le carnet de maintenance est-il vraiment obligatoire&nbsp;?</summary>
            <p>Oui, pour tout équipement de levage, y compris les bras de levage&nbsp;: il doit être tenu à jour et consigner l'ensemble des interventions réalisées.</p>
          </details>

          <details className="faq-item">
            <summary>Qui porte la responsabilité en cas d'accident&nbsp;?</summary>
            <p>Elle peut être recherchée tant du côté de l'utilisateur (défaut de vérification) que du fabricant (défaut de conception), selon l'origine du problème identifié.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il former les opérateurs qui utilisent ces bras de levage&nbsp;?</summary>
            <p>Selon le type d'équipement porteur, la conduite peut relever du CACES R482 ou R490&nbsp;: contactez-nous pour identifier la formation adaptée à votre matériel.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de bras de levage</h2>
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
              <label htmlFor="nombre">Nombre de bras de levage à vérifier</label>
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


    

    
<section className="section" aria-labelledby="titre-autres-vgp">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>VGP</span>
            <h2 id="titre-autres-vgp">D'autres équipements à vérifier&nbsp;?</h2>
            <p>SECURIFORM réalise les VGP de l'ensemble de vos équipements de levage et de manutention, dans les Hauts-de-France.</p>
            <Link className="btn btn-blanc" href="/vgp">Voir toutes les VGP</Link>
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
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
            <Link href="/vgp-tombereaux">Tombereaux</Link>
            <Link href="/vgp-accessoires-levage">Accessoires de levage</Link>
          </nav>
        </div>
      </div>
    </section>


  
    </>
  );
}
