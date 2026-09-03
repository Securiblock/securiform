import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des accessoires de levage",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-accessoires-de-levages/",
      "description": "Vérification Générale Périodique des accessoires de levage (élingues, manilles, crochets, palonniers, anneaux de levage), tous les 6 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des accessoires de levage",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-accessoires-de-levages/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des accessoires de levage — SECURIFORM",
  description: "VGP des accessoires de levage avec SECURIFORM : élingues, manilles, crochets, palonniers. Fréquence de 6 mois, directive Machines.",
  alternates: { canonical: "/vgp-accessoires-levage" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-accessoires-levage",
    title: "VGP des accessoires de levage — SECURIFORM",
    description: "VGP des accessoires de levage avec SECURIFORM : élingues, manilles, crochets, palonniers. Fréquence de 6 mois, directive Machines.",
    images: ["/image/vgp-accessoires-levage.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des accessoires de levage — SECURIFORM",
    description: "Vérification Générale Périodique de vos accessoires de levage, avec SECURIFORM.",
    images: ["/image/vgp-accessoires-levage.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des accessoires de levage" style={{ backgroundImage: "url('/image/vgp-accessoires-levage.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Accessoires de levage</span>
        </p>
        <h1>Vérifications Générales Périodiques des accessoires de levage</h1>
        <p>Détecter usure, fissures et déformations pouvant compromettre la sûreté d'une opération de levage, tous les 6 mois.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Le maillon souvent oublié de la chaîne de levage</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des accessoires de levage détectent toute anomalie pouvant entraîner des risques pour la sécurité. Sans constituer une évaluation complète de la conformité, elles sont essentielles pour s'assurer que ces accessoires fonctionnent en toute sécurité, en identifiant l'usure des matériaux, les fissures ou les déformations susceptibles de compromettre la sûreté d'une opération de levage.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Ce qui relie la charge à la machine</h2>
          <hr className="trait" />
          <p>Élingues, manilles, crochets, palonniers et anneaux de levage&nbsp;: tous ces accessoires jouent un rôle crucial en reliant les charges aux machines de levage (grues, chariots élévateurs, ponts roulants). Tout défaut ou défaillance dans ces accessoires peut entraîner des accidents graves, d'où l'importance de contrôles réguliers.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Conformément à la réglementation, tous les résultats des VGP des accessoires de levage doivent être inscrits dans un registre de sécurité, incluant incidents, anomalies et interventions de maintenance effectuées. Ce document est conservé pour consultation par les autorités compétentes, telles que l'inspecteur du travail.</p>
          <p>Une maintenance régulière reste essentielle en complément des VGP&nbsp;: les opérations doivent être consignées dans un carnet de maintenance dédié, permettant de suivre l'état des équipements et de planifier réparations ou remplacements avant qu'un problème ne survienne.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Incidents et anomalies consignés dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre consultable par l'inspecteur du travail</li>
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
        <p>Les accessoires de levage doivent être inspectés au moins tous les 6 mois. Des conditions d'utilisation spécifiques&nbsp;— corrosion, usage intensif&nbsp;— peuvent justifier des contrôles plus fréquents. Chaque inspection doit être réalisée par une personne compétente, salarié formé ou prestataire externe spécialisé dans les équipements de levage.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>Le respect des normes de sécurité en matière de levage incombe aux utilisateurs, mais aussi aux fabricants et distributeurs. Les accessoires de levage doivent être conformes aux exigences de sécurité édictées par la directive européenne « Machines » 2006/42/CE. Mettre en service ou utiliser un équipement non conforme expose à des sanctions juridiques et financières en cas d'accident.</p>
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
            <summary>Une élingue textile se contrôle-t-elle comme une élingue chaîne&nbsp;?</summary>
            <p>Les principes généraux (usure, déformation, corrosion) s'appliquent à tous les types d'élingues, mais les points de vigilance diffèrent&nbsp;: coupures et UV pour le textile, allongement des maillons pour la chaîne, torons cassés pour le câble.</p>
          </details>

          <details className="faq-item">
            <summary>Qui peut réaliser cette vérification&nbsp;?</summary>
            <p>Une personne compétente, qu'il s'agisse d'un salarié formé en interne ou d'un prestataire externe spécialisé dans les équipements de levage.</p>
          </details>

          <details className="faq-item">
            <summary>Un accessoire de levage a-t-il une durée de vie limitée&nbsp;?</summary>
            <p>Oui, au-delà de l'usure visible, certains accessoires ont une durée de vie recommandée par le fabricant, indépendamment de leur état apparent&nbsp;: il convient de s'y référer en complément de la VGP.</p>
          </details>

          <details className="faq-item">
            <summary>Que faire si une déformation est constatée sur un crochet&nbsp;?</summary>
            <p>L'accessoire doit être immédiatement mis au rebut et remplacé&nbsp;: une déformation, même légère, indique une sollicitation ayant dépassé sa limite d'usage normale.</p>
          </details>

          <details className="faq-item">
            <summary>Ces accessoires sont-ils couverts par la VGP de la machine de levage elle-même&nbsp;?</summary>
            <p>Non, les accessoires de levage font l'objet d'une VGP distincte de celle de la grue, du pont roulant ou du chariot élévateur auquel ils sont associés, avec leur propre fréquence de contrôle.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP d'accessoires de levage</h2>
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
              <label htmlFor="nombre">Nombre d'accessoires à vérifier</label>
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
            <h2 id="titre-autres-vgp">Toutes nos VGP en un coup d'œil</h2>
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
            <Link href="/vgp-bras-de-levage">Bras de levage</Link>
            <Link href="/vgp-tombereaux">Tombereaux</Link>
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
          </nav>
        </div>
      </div>
    </section>


  
    </>
  );
}
