import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Sensibilisation aux gestes qui sauvent",
      "description": "Sensibilisation courte et accessible à tous aux gestes de premiers secours essentiels et à l'alerte des secours, sans prérequis, complémentaire à la formation Sauveteur Secouriste du Travail (SST).",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/sensibilisation-aux-gestes-qui-sauvent/"
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
          "name": "Formations spécifiques",
          "item": "https://securiform.fr/formations-specifiques/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Gestes qui sauvent",
          "item": "https://securiform.fr/sensibilisation-aux-gestes-qui-sauvent/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Sensibilisation aux gestes qui sauvent — SECURIFORM",
  description: "Sensibilisation SECURIFORM aux gestes qui sauvent : accessible à tous, sans prérequis, en quelques heures. Alerter les secours, gestes essentiels.",
  alternates: { canonical: "/gestes-qui-sauvent" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/gestes-qui-sauvent",
    title: "Sensibilisation aux gestes qui sauvent — SECURIFORM",
    description: "Une sensibilisation courte et accessible à tous, pour diffuser les gestes qui sauvent dans votre entreprise.",
    images: ["/image/formation-gestes-qui-sauvent.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensibilisation aux gestes qui sauvent — SECURIFORM",
    description: "Formez l'ensemble de vos collaborateurs aux gestes qui sauvent, sans prérequis, avec SECURIFORM.",
    images: ["/image/formation-gestes-qui-sauvent.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Sensibilisation aux gestes qui sauvent">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/formations-specifiques">Formations spécifiques</Link>
          <span aria-hidden="true">›</span>
          <span>Gestes qui sauvent</span>
        </p>
        <h1>Sensibilisation aux gestes qui sauvent</h1>
        <p>Accessible à tous, sans prérequis, en quelques heures&nbsp;: diffusez les bons réflexes de premiers secours à l'ensemble de vos collaborateurs.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-difference">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-difference">Une sensibilisation, pas une certification</h2>
        <hr className="trait" />
        <p>Contrairement à la formation Sauveteur Secouriste du Travail, cette sensibilisation ne confère aucun statut ni certificat officiel&nbsp;: elle vise simplement à diffuser largement, en quelques heures et sans prérequis, les réflexes de base qui peuvent faire la différence en cas d'urgence. C'est un excellent complément pour toucher l'ensemble d'une équipe, au-delà des seuls Sauveteurs Secouristes du Travail désignés.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-contenu">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qu'elle couvre</span>
          <h2 id="titre-contenu">Les réflexes essentiels</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Protéger et alerter</h3>
            <p>Écarter les dangers immédiats et prévenir les secours avant toute autre action.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Malaise et inconscience</h3>
            <p>Reconnaître les signes et adopter la bonne position d'attente en toute sécurité.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Étouffement</h3>
            <p>Les gestes de premier secours face à une personne qui s'étouffe.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Arrêt cardiaque</h3>
            <p>Reconnaître la situation et réagir en attendant les secours, y compris avec un défibrillateur si disponible.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Pour un apprentissage complet et un statut de Sauveteur Secouriste du Travail reconnu, retrouvez notre formation SST dédiée.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-alerte">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Le geste le plus simple, et le plus décisif</span>
          <h2 id="titre-alerte">Bien alerter les secours</h2>
          <p>Composer le 15 (SAMU), le 18 (pompiers) ou le 112 (numéro d'urgence européen) est un geste accessible à tous, sans aucune formation préalable&nbsp;: c'est souvent la première chose que cette sensibilisation cherche à ancrer solidement.</p>
          <p>Une alerte efficace précise la localisation exacte, la nature de la situation, le nombre de personnes concernées et leur état apparent&nbsp;— puis suit les instructions données par l'opérateur, qui peut guider les premiers gestes en attendant l'arrivée des secours.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Une alerte efficace">
          <h3>Une alerte efficace</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Localisation précise du lieu</li>
            <li><span className="puce" aria-hidden="true">✓</span> Nature de la situation observée</li>
            <li><span className="puce" aria-hidden="true">✓</span> Nombre de personnes concernées</li>
            <li><span className="puce" aria-hidden="true">✓</span> Suivre les instructions données au téléphone</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-legal">
      <div className="container section-head reveal">
        <span className="surtitre">Une question fréquente</span>
        <h2 id="titre-legal">Peut-on porter secours sans être Sauveteur Secouriste du Travail&nbsp;?</h2>
        <hr className="trait" />
        <p>Oui, et c'est même attendu&nbsp;: le Code pénal sanctionne la non-assistance à personne en danger, tandis qu'une personne portant secours de bonne foi, avec les moyens dont elle dispose, n'engage pas sa responsabilité en cas de résultat imparfait. Cette sensibilisation vise justement à donner à chacun la confiance nécessaire pour agir, plutôt que d'attendre l'arrivée d'un secouriste désigné.</p>
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
            <summary>Cette sensibilisation remplace-t-elle la formation SST&nbsp;?</summary>
            <p>Non. Elle donne des bases accessibles à tous, mais seule la formation SST complète confère le statut officiel de Sauveteur Secouriste du Travail reconnu par l'entreprise.</p>
          </details>

          <details className="faq-item">
            <summary>Faut-il des prérequis pour y participer&nbsp;?</summary>
            <p>Aucun. C'est justement l'intérêt de cette sensibilisation&nbsp;: elle s'adresse à tout collaborateur, quel que soit son poste ou son expérience.</p>
          </details>

          <details className="faq-item">
            <summary>Combien de temps dure cette sensibilisation&nbsp;?</summary>
            <p>Quelques heures seulement, bien moins que les 14 heures de la formation SST initiale, ce qui la rend facile à intégrer dans un plan de formation collectif.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je former tous mes collaborateurs, même ceux déjà SST&nbsp;?</summary>
            <p>Oui, cette sensibilisation vise justement à élargir la culture de la sécurité au-delà des seuls SST désignés, pour que les bons réflexes soient partagés par tous.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une sensibilisation gestes qui sauvent</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser votre session.</p>
        </div>

        
        <form className="form-devis reveal" action={submitForm}>
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
              <label htmlFor="effectif">Nombre de personnes à sensibiliser</label>
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


    

    
<section className="section" id="vgp" aria-labelledby="titre-vgp">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>VGP</span>
            <h2 id="titre-vgp">Vérifications Générales Périodiques</h2>
            <p>Au-delà de la formation, SECURIFORM réalise les Vérifications Générales Périodiques de vos équipements de travail et de levage, conformément à la réglementation en vigueur.</p>
            <Link className="btn btn-blanc" href="/vgp">Découvrir les VGP</Link>
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
