import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "VGP des ponts roulants",
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
      "url": "https://securiform.fr/verifications-generales-periodiques-des-ponts-roulant/",
      "description": "Vérification Générale Périodique des ponts roulants, tous les 12 mois, conformément à la directive européenne Machines 2006/42/CE."
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
          "name": "VGP des ponts roulants",
          "item": "https://securiform.fr/verifications-generales-periodiques-des-ponts-roulant/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "VGP des ponts roulants — SECURIFORM",
  description: "VGP des ponts roulants avec SECURIFORM : équipements concernés, registre de sécurité. Fréquence de 12 mois.",
  alternates: { canonical: "/vgp-ponts-roulants" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp-ponts-roulants",
    title: "VGP des ponts roulants — SECURIFORM",
    description: "VGP des ponts roulants avec SECURIFORM : équipements concernés, registre de sécurité. Fréquence de 12 mois.",
    images: ["/image/vgp-ponts-roulants.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VGP des ponts roulants — SECURIFORM",
    description: "Vérification Générale Périodique de vos ponts roulants, avec SECURIFORM.",
    images: ["/image/vgp-ponts-roulants.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="VGP des ponts roulants">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Ponts roulants</span>
        </p>
        <h1>Vérifications Générales Périodiques des ponts roulants</h1>
        <p>Détecter usure, fissures et dysfonctionnements des mécanismes de levage, tous les 12 mois.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Prévenir les défaillances techniques</h2>
        <hr className="trait" />
        <p>Les Vérifications Générales Périodiques des ponts roulants garantissent la sécurité des utilisateurs et préviennent les accidents liés à des défaillances techniques. Sans remplacer une évaluation complète de la conformité, elles permettent de détecter l'usure des composants, des fissures, ou des dysfonctionnements dans les mécanismes de levage et de sécurité.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Qui est concerné</span>
          <h2 id="titre-equipements">Les composants soumis à la VGP</h2>
          <hr className="trait" />
          <p>Les ponts roulants, aussi appelés ponts-grues, utilisés pour soulever et déplacer des charges lourdes en environnement industriel, comprennent plusieurs éléments contrôlés lors de chaque vérification&nbsp;: poutres, chariot de levage, et mécanismes de sécurité tels que les freins. Un défaut sur l'un de ces composants peut entraîner un accident grave.</p>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-registre">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">La traçabilité exigée</span>
          <h2 id="titre-registre">Le registre de sécurité</h2>
          <p>Toutes les vérifications doivent être consignées dans un registre de sécurité, répertoriant également les incidents, réparations et interventions de maintenance effectuées. Ce document obligatoire doit être conservé à disposition des autorités compétentes.</p>
          <p>Au-delà de la VGP, une maintenance préventive régulière reste essentielle pour prolonger la durée de vie de l'équipement&nbsp;: chaque intervention doit être consignée dans un carnet de maintenance dédié, permettant d'anticiper les réparations avant qu'un incident ne survienne.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Vérifications, incidents et réparations consignés</li>
            <li><span className="puce" aria-hidden="true">✓</span> Registre disponible pour les autorités compétentes</li>
            <li><span className="puce" aria-hidden="true">✓</span> Un carnet de maintenance complète la VGP</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-frequence">
      <div className="container section-head reveal">
        <span className="surtitre">À retenir</span>
        <h2 id="titre-frequence">Une VGP tous les 12 mois</h2>
        <hr className="trait" />
        <p>Les ponts roulants doivent être inspectés au minimum tous les 12 mois. Certaines conditions d'utilisation&nbsp;— exposition à la corrosion, usage intensif&nbsp;— peuvent nécessiter des contrôles plus fréquents pour garantir la sécurité des opérations.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-responsabilites">
      <div className="container section-head reveal">
        <span className="surtitre">Qui est responsable</span>
        <h2 id="titre-responsabilites">Responsabilités et conformité</h2>
        <hr className="trait" />
        <p>La responsabilité de la sécurité des ponts roulants incombe à l'utilisateur final, mais aussi au fabricant et au distributeur. Le non-respect des normes de sécurité en matière de levage, notamment la directive européenne 2006/42/CE, expose à des sanctions graves en cas d'accident.</p>
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
            <summary>Pourquoi les ponts roulants ont-ils une périodicité de 12 mois et non 6&nbsp;?</summary>
            <p>Cette périodicité est fixée par la réglementation selon le type d'équipement&nbsp;: les ponts roulants relèvent des équipements de levage de charges classiques, contrairement aux nacelles ou grues auxiliaires qui impliquent des risques différents justifiant un contrôle semestriel.</p>
          </details>

          <details className="faq-item">
            <summary>Un usage intensif justifie-t-il un contrôle plus fréquent&nbsp;?</summary>
            <p>Oui, l'exposition à la corrosion ou un usage intensif peuvent justifier des vérifications plus rapprochées que les 12 mois réglementaires.</p>
          </details>

          <details className="faq-item">
            <summary>Le registre de sécurité doit-il être présenté sur simple demande&nbsp;?</summary>
            <p>Oui, il doit être tenu à disposition des autorités compétentes, notamment l'inspecteur du travail, à tout moment.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il aussi former les opérateurs de ponts roulants&nbsp;?</summary>
            <p>Oui, la conduite d'un pont roulant relève du CACES R484, complémentaire à la VGP&nbsp;: la VGP contrôle l'état de l'équipement, le CACES certifie la compétence de l'opérateur, notamment aux techniques d'élingage.</p>
          </details>

          <details className="faq-item">
            <summary>Que couvre exactement la vérification des mécanismes de sécurité&nbsp;?</summary>
            <p>Elle porte notamment sur les freins et les dispositifs limitant la charge ou la course du chariot de levage, essentiels pour prévenir tout accident lors des opérations.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP de ponts roulants</h2>
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
              <label htmlFor="nombre">Nombre de ponts roulants à vérifier</label>
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
            <p>La VGP contrôle l'état de vos ponts roulants&nbsp;; le CACES R484 certifie la compétence de vos opérateurs, notamment aux techniques d'élingage. Les deux sont complémentaires et souvent nécessaires ensemble.</p>
            <Link className="btn btn-blanc" href="/caces-r484">Découvrir le CACES R484</Link>
          </div>
          <nav className="vgp-liste" aria-label="Autres équipements VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
            <Link href="/vgp-grues-auxiliaires">Grues auxiliaires</Link>
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
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
