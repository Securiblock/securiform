import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des hayons élévateurs",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-hayons-elevateurs/",
      "description": "Vérification Générale Périodique des hayons élévateurs, tous les 6 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des hayons élévateurs",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-hayons-elevateurs/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des hayons élévateurs — SECURIFORM",
  description: "Vérification Générale Périodique des hayons élévateurs avec SECURIFORM : fixation au châssis, bras de levage, vérins hydrauliques, fréquence de 6 mois. Conforme à la directive Machines 2006/42/CE.",
  alternates: { canonical: "/vgp-hayons-elevateurs" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-hayons-elevateurs",
    title: "VGP des hayons élévateurs — SECURIFORM",
    description: "Assurez la sécurité de vos hayons élévateurs avec les VGP SECURIFORM : inspections tous les 6 mois, détection d'anomalies, conformité réglementaire.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des hayons élévateurs — SECURIFORM",
    description: "Vérification Générale Périodique de vos hayons élévateurs, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des hayons élévateurs">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Hayons élévateurs</span>
        </p>
        <h1>Vérifications Générales Périodiques des hayons élévateurs</h1>
        <p>Détecter toute anomalie pouvant compromettre la sécurité des opérations de levage, tous les 6 mois.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Prévenir les dysfonctionnements hydrauliques</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des hayons élévateurs détectent toute anomalie pouvant compromettre la sécurité des opérations de levage&nbsp;: dysfonctionnements de l'hydraulique, défauts structurels. Ces contrôles réguliers ne remplacent pas une évaluation de conformité complète, mais jouent un rôle essentiel dans la prévention des risques.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Deux types, une même obligation</h2>
          <hr className="trait" />
          <p>Les hayons élévateurs se répartissent en deux types&nbsp;: ceux repliés sous la structure du véhicule, et ceux qui se referment verticalement. Tous, quel que soit leur type, doivent faire l'objet d'une VGP tous les 6 mois.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Fixation au châssis</h3>
            <p>Contrôle de l'ancrage du hayon sur le véhicule, point critique en cas de sollicitation répétée.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Bras de levage</h3>
            <p>Vérification de l'absence de déformation ou de fissure sur les bras porteurs.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Vérins hydrauliques</h3>
            <p>Contrôle de l'étanchéité et du bon fonctionnement du système de levage.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Dispositifs de sécurité</h3>
            <p>Test des systèmes empêchant tout mouvement inopiné du plateau pendant le chargement.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Les résultats des VGP doivent être consignés dans un registre de sécurité, incluant les rapports des vérifications précédentes ainsi que toute intervention de maintenance ou incident. Ce registre est accessible pour inspection par les autorités compétentes et doit être tenu à jour en permanence.</p>
          <p>La maintenance régulière reste cruciale en complément de la VGP&nbsp;: toutes les réparations et interventions doivent être inscrites dans un carnet dédié, permettant de planifier les entretiens préventifs et de réduire les risques de panne.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Rapports et incidents consignés dans un registre</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre accessible à l'inspection du travail</li>
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
        <p>La réglementation impose une VGP des hayons élévateurs tous les 6 mois. Des conditions d'utilisation intensives&nbsp;— livraison, transport de marchandises lourdes&nbsp;— peuvent justifier des contrôles plus fréquents. Chaque vérification doit être réalisée par une personne compétente, munie des documents nécessaires&nbsp;: manuel d'utilisation, certificat de conformité, carnet de maintenance.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>La responsabilité de la conformité des hayons élévateurs incombe à leurs utilisateurs, mais aussi aux fabricants et distributeurs. Les hayons doivent répondre aux exigences de sécurité de la directive européenne « Machines » 2006/42/CE. Tout manquement à ces obligations expose les entreprises à des sanctions en cas d'accident.</p>
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
            <summary>Un hayon vertical est-il vérifié de la même façon qu'un hayon replié sous la structure&nbsp;?</summary>
            <p>Oui, les deux types de hayons relèvent de la même obligation de VGP tous les 6 mois et des mêmes contrôles essentiels (fixation, bras, vérins, sécurités).</p>
          </details>

          <details className="faq-item">
            <summary>Quels documents dois-je présenter le jour de la vérification&nbsp;?</summary>
            <p>Le manuel d'utilisation du hayon, son certificat de conformité, et le carnet de maintenance retraçant les interventions déjà réalisées.</p>
          </details>

          <details className="faq-item">
            <summary>Une activité de livraison intensive justifie-t-elle un contrôle plus fréquent&nbsp;?</summary>
            <p>Oui, un usage intensif comme la livraison quotidienne ou le transport de charges lourdes peut justifier des vérifications plus rapprochées que les 6 mois réglementaires.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si un défaut est détecté sur la fixation au châssis&nbsp;?</summary>
            <p>Le véhicule ne doit pas utiliser le hayon tant que la réparation n'a pas été effectuée&nbsp;: un défaut de fixation représente un risque de chute grave.</p>
          </details>

          <details className="faq-item">
            <summary>Le chauffeur-livreur doit-il être formé à l'utilisation du hayon&nbsp;?</summary>
            <p>Une sensibilisation aux bonnes pratiques d'utilisation est recommandée, même si aucun CACES® spécifique n'est requis pour les hayons élévateurs, contrairement à d'autres équipements de levage.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de hayons élévateurs</h2>
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
              <label htmlFor="nombre">Nombre de hayons à vérifier</label>
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
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
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
