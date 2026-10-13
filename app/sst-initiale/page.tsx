import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";
import CalculateurRecyclage from "@/components/calculateur-recyclage";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation initiale SST",
      "description": "Formation initiale Sauveteur Secouriste du Travail, 14 heures sur 2 jours, couvrant le cadre légal, le programme en 10 modules du référentiel INRS, l'évaluation certificative et le rôle préventif du SST. Certificat valable 24 mois.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/sst-initiale/"
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
          "item": "https://securiform.fr/secourisme/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation initiale SST",
          "item": "https://securiform.fr/sst-initiale/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation initiale SST - SECURIFORM",
  description: "Formation initiale SST avec SECURIFORM : cadre légal, programme en 10 modules, évaluation. 14h sur 2 jours, certificat valable 24 mois.",
  alternates: { canonical: "/sst-initiale" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/sst-initiale",
    title: "Formation initiale SST - SECURIFORM",
    description: "Cadre légal, programme en 10 modules, rôle préventif du SST : formation initiale SST avec SECURIFORM, 14h, certificat valable 24 mois.",
    images: ["/image/formation-sst-initiale.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation initiale SST - SECURIFORM",
    description: "Devenez Sauveteur Secouriste du Travail avec SECURIFORM, centre habilité INRS.",
    images: ["/image/formation-sst-initiale.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation initiale SST" style={{ backgroundImage: "url('/image/formation-sst-initiale.webp')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/secourisme">Secourisme (SST)</Link>
          <span aria-hidden="true">›</span>
          <span>Formation initiale</span>
        </p>
        <h1>Formation initiale SST</h1>
        <p>Devenez Sauveteur Secouriste du Travail&nbsp;: cadre légal, programme complet en 10 modules et rôle préventif au sein de votre entreprise.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-cadre">
      <div className="container section-head reveal">
        <span className="surtitre">Le SST en entreprise</span>
        <h2 id="titre-cadre">Ce que dit le Code du travail</h2>
        <hr className="trait" />
        <p>L&apos;article R.&nbsp;4224-15 du Code du travail impose au minimum un salarié formé aux premiers secours dans&nbsp;:</p>
        <ul className="liste-texte">
          <li>chaque atelier où sont accomplis des travaux dangereux&nbsp;;</li>
          <li>chaque chantier du BTP employant au moins 20 travailleurs pendant plus de 15 jours, lorsque des travaux dangereux y sont réalisés.</li>
        </ul>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-prevention">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Au-delà du secours</span>
          <h2 id="titre-prevention">Le rôle préventif du SST</h2>
          <hr className="trait" />
          <p>Un SST n'est pas seulement formé à intervenir en urgence&nbsp;: sa formation en fait aussi un acteur de la prévention au quotidien, capable de repérer ce qui échappe souvent à l'œil non averti.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Observer</h3>
            <p>Repérer les équipements défaillants, les comportements à risque ou un environnement de travail dégradé.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Signaler</h3>
            <p>Transmettre l'information de façon factuelle et constructive à la hiérarchie ou au service prévention.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Contribuer au Document Unique</h3>
            <p>Apporter son vécu de terrain pour identifier de nouveaux risques ou actualiser l'évaluation existante.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Sensibiliser ses collègues</h3>
            <p>Partager les bonnes pratiques et encourager une culture du signalement au sein de son équipe.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Ce rôle a ses limites&nbsp;: le SST observe, informe et propose, mais ce sont l'encadrement et les préventeurs professionnels qui décident et mettent en œuvre les mesures de prévention.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-validite">
      <div className="container section-head reveal">
        <span className="surtitre">Et après</span>
        <h2 id="titre-validite">Validité du certificat et recyclage</h2>
        <hr className="trait" />
        <p>Le certificat SST est valable 24 mois.</p>
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
            <summary>Le SST peut-il imposer des mesures de sécurité à ses collègues&nbsp;?</summary>
            <p>Non, son rôle se limite à observer, informer et proposer. La décision et la mise en œuvre des mesures de prévention reviennent à l'encadrement et aux préventeurs professionnels de l'entreprise.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je organiser cette formation directement dans mon entreprise&nbsp;?</summary>
            <p>Oui, une session intra-entreprise est possible à partir de quelques stagiaires, avec des mises en situation adaptées aux risques réels de votre activité.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la différence avec la sensibilisation aux gestes qui sauvent&nbsp;?</summary>
            <p>La sensibilisation est courte, accessible à tous sans prérequis, mais ne confère aucun statut officiel. Seule la formation SST complète, avec ses évaluations certificatives, confère le statut reconnu de Sauveteur Secouriste du Travail.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<CalculateurRecyclage formation="sst-initiale" />

    

<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation initiale SST</h2>
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
              <label htmlFor="effectif">Nombre de personnes à former</label>
              <input type="number" id="effectif" name="effectif" min="1" />
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
