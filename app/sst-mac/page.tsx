import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";
import Turnstile from "@/components/turnstile";
import CalculateurRecyclage from "@/components/calculateur-recyclage";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "MAC SST : Maintien et Actualisation des Compétences",
      "description": "Recyclage obligatoire de 7 heures pour les Sauveteurs Secouristes du Travail, à réaliser tous les 24 mois avant l'expiration du certificat initial, couvrant la révision des acquis, l'actualisation des compétences et l'évaluation du maintien des acquis.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/sst-mac"
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
          "name": "Secourisme (SST)",
          "item": "https://securiform.fr/secourisme"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "MAC SST",
          "item": "https://securiform.fr/sst-mac"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Recyclage MAC SST - SECURIFORM",
  description: "Recyclage MAC SST avec SECURIFORM : 7h pour maintenir vos compétences, tous les 24 mois avant expiration du certificat.",
  alternates: { canonical: "/sst-mac" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/sst-mac",
    title: "MAC SST - Recyclage Sauveteur Secouriste du Travail - SECURIFORM",
    description: "7 heures pour maintenir vos compétences SST à jour, avant l'expiration de votre certificat. Avec SECURIFORM, centre habilité INRS.",
    images: ["/image/formation-sst-mac.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAC SST - SECURIFORM",
    description: "Renouvelez votre certificat SST avec le recyclage MAC, avec SECURIFORM.",
    images: ["/image/formation-sst-mac.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="MAC SST : recyclage" style={{ backgroundImage: "url('/image/formation-sst-mac.webp')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/secourisme">Secourisme (SST)</Link>
          <span aria-hidden="true">›</span>
          <span>MAC SST</span>
        </p>
        <h1>MAC SST : Recyclage Sauveteur Secouriste du Travail</h1>
        <p>7 heures pour maintenir vos compétences à jour et renouveler votre certificat SST.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-pourquoi">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-pourquoi">Pourquoi un recyclage est nécessaire</h2>
        <hr className="trait" />
        <p>Sans pratique régulière, les gestes s'oublient et la confiance en situation réelle diminue. Le MAC (Maintien et Actualisation des Compétences) répond à cette problématique en une seule session de 7 heures.</p>
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
            <summary>Combien de temps dure le MAC SST&nbsp;?</summary>
            <p>7 heures minimum, généralement réalisées en une seule journée.</p>
          </details>

          <details className="faq-item">
            <summary>Le contenu du MAC est-il toujours le même d'une session à l'autre&nbsp;?</summary>
            <p>Non, il s'adapte aux évolutions récentes des protocoles et des équipements, ainsi qu'aux retours d'expérience des stagiaires depuis leur dernière formation.</p>
          </details>

          <details className="faq-item">
            <summary>Et si je n'ai jamais suivi la formation initiale&nbsp;?</summary>
            <p>Le MAC ne s'adresse qu'aux titulaires d'un certificat SST existant. Sans formation initiale préalable, c'est notre formation initiale SST de 14 heures qu'il faut suivre en premier lieu.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<CalculateurRecyclage formation="sst-mac" />

    

<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer un recyclage MAC SST</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe vous recontacte dans l'heure pour organiser votre session.</p>
        </div>

        
        <form className="form-devis reveal" action={submitForm}>
          <input type="text" name="site_web" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />
          <div className="form-devis-grid">
            <div className="champ">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" required />
            </div>
            <div className="champ">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" required />
            </div>
            <div className="champ">
              <label htmlFor="societe">Société</label>
              <input type="text" id="societe" name="societe" />
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
              <label htmlFor="echeance">Date d'expiration du certificat (si connue)</label>
              <input type="date" id="echeance" name="echeance" />
            </div>
            <div className="champ champ-pleine-largeur">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} />
            </div>
          </div>
          <Turnstile />
          <button type="submit" className="btn btn-plein">Envoyer ma demande</button>
        </form>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-recrute">
      <div className="container recrute reveal">
        <div>
          <span className="surtitre">Rejoignez-nous</span>
          <h2 id="titre-recrute">Nous recrutons</h2>
          <p>Afin de renforcer l'équipe <strong>SECURIFORM</strong>, nous recrutons des formateurs sur toute la moitié nord de la France.</p>
        </div>
        <Link className="btn btn-plein" href="/nous-recrutons">En savoir +</Link>
      </div>
    </section>


    

    
<section className="cta" aria-labelledby="titre-contact">
      <div className="container reveal">
        <h2 id="titre-contact">Vous avez une question&nbsp;?</h2>
        <p>Notre équipe vous répond dans l'heure et s'assure de l'adéquation de nos formations aux risques de votre entreprise.</p>
        <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
        <div className="cta-actions">
          <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
          <Link className="btn btn-contour" href="/statistiques" style={{ "borderColor": "#fff", "color": "#fff" }}>Statistiques</Link>
        </div>
      </div>
    </section>


    

    
<section className="section" id="vgp" aria-labelledby="titre-vgp">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>VGP</span>
            <h2 id="titre-vgp">Vérifications Générales Périodiques</h2>
            <p>Au-delà de la formation, SECURIFORM réalise les Vérifications Générales Périodiques de vos équipements de travail et de levage, conformément à la réglementation en vigueur.</p>
            <div className="vgp-boutons">
              <Link className="btn btn-blanc" href="/vgp">Découvrir les VGP</Link>
              <Link className="btn btn-contour" href="/vgp#checklist">Ma checklist VGP</Link>
            </div>
          </div>
          <nav className="vgp-liste" aria-label="Nos prestations VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
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
