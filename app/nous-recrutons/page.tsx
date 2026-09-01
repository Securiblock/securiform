import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Nous recrutons",
      "description": "Page de recrutement de formateurs certifiés en sécurité au travail pour SECURIFORM, sur toute la France.",
      "url": "https://securiform.fr/nous-recrutons/"
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
          "name": "Nous recrutons",
          "item": "https://securiform.fr/nous-recrutons/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Nous recrutons — Devenez formateur SECURIFORM",
  description: "SECURIFORM recrute des formateurs certifiés en sécurité au travail sur toute la France : CACES, habilitation électrique, incendie, SST, travaux en hauteur, AIPR. Rejoignez notre équipe.",
  alternates: { canonical: "/nous-recrutons" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/nous-recrutons",
    title: "Nous recrutons — SECURIFORM",
    description: "Formateurs certifiés en sécurité au travail, rejoignez SECURIFORM sur toute la France.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nous recrutons — SECURIFORM",
    description: "SECURIFORM recrute des formateurs certifiés sur toute la France.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Nous recrutons">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Nous recrutons</span>
        </p>
        <h1>Nous recrutons</h1>
        <p>Afin de renforcer l'équipe SECURIFORM, nous recrutons des formateurs certifiés en sécurité au travail sur toute la France.</p>
        <a href="#candidature" className="btn btn-plein">Postuler</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Rejoindre une équipe en développement</h2>
        <hr className="trait" />
        <p>SECURIFORM accompagne les entreprises dans le domaine de la sécurité au travail sur tout le territoire français, avec pour valeurs la réactivité, le conseil et le service client. Pour répondre à une demande croissante, nous recherchons régulièrement des formateurs certifiés capables d'intervenir dans nos différents domaines d'expertise, partout en France.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-domaines">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Vos compétences</span>
          <h2 id="titre-domaines">Les domaines dans lesquels nous recrutons</h2>
          <hr className="trait" />
          <p>Nous recherchons des formateurs certifiés dans un ou plusieurs de ces domaines.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>CACES® et conduite en sécurité</h3>
            <p>R482, R484, R485, R486-A, R489, R490.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Habilitation électrique</h3>
            <p>Personnel électricien et non électricien, basse et haute tension.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Incendie et évacuation</h3>
            <p>Extincteurs, RIA, Équipier de Première Intervention, évacuation des locaux.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Secourisme (SST)</h3>
            <p>Formation initiale et recyclage MAC, centre habilité INRS.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Travaux en hauteur et échafaudages</h3>
            <p>Port du harnais, échafaudages fixes et roulants.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>AIPR</h3>
            <p>Opérateurs, encadrants et concepteurs, réglementation DT-DICT.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Gestes et postures</h3>
            <p>Prévention des troubles musculosquelettiques.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Formations spécifiques</h3>
            <p>Engins et matériels particuliers, sur mesure selon les besoins clients.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-profil">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que nous recherchons</span>
          <h2 id="titre-profil">Le profil d'un formateur SECURIFORM</h2>
          <p>Au-delà des certifications requises dans votre domaine, nous accordons une grande importance à l'expérience de terrain et à la pédagogie&nbsp;: nos formateurs doivent être capables de transmettre des savoir-faire concrets, adaptés aux réalités et aux risques propres à chaque entreprise cliente.</p>
          <p>Une bonne mobilité géographique est un atout précieux, nos interventions ayant lieu partout en France, directement dans les locaux ou sur les chantiers de nos clients.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Ce qui compte pour nous">
          <h3>Ce qui compte pour nous</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Certifications à jour dans votre domaine d'expertise</li>
            <li><span className="puce" aria-hidden="true">✓</span> Expérience de terrain solide</li>
            <li><span className="puce" aria-hidden="true">✓</span> Sens de la pédagogie et de l'adaptation</li>
            <li><span className="puce" aria-hidden="true">✓</span> Mobilité sur toute la France</li>
          </ul>
        </aside>
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
            <summary>Faut-il déjà être certifié dans un domaine précis pour postuler&nbsp;?</summary>
            <p>Oui, nous recherchons des formateurs disposant déjà des certifications nécessaires à l'enseignement de leur domaine (CACES®, habilitation électrique, SST, etc.), ainsi qu'une expérience de terrain significative.</p>
          </details>

          <details className="faq-item">
            <summary>Les interventions ont-elles lieu partout en France&nbsp;?</summary>
            <p>Oui, SECURIFORM intervient sur tout le territoire français&nbsp;: une bonne mobilité géographique est donc appréciée, même si certaines missions peuvent être proposées sur une zone plus restreinte selon les besoins.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je postuler si je maîtrise plusieurs domaines de formation&nbsp;?</summary>
            <p>Oui, tout à fait&nbsp;: précisez l'ensemble de vos domaines de compétence dans votre candidature, cela nous permet de vous proposer davantage de missions.</p>
          </details>

          <details className="faq-item">
            <summary>Comment se déroule le processus après ma candidature&nbsp;?</summary>
            <p>Notre équipe étudie votre profil et vous recontacte pour un échange, afin de mieux cerner vos compétences, vos disponibilités et vos zones d'intervention possibles.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="candidature" aria-labelledby="titre-candidature">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre candidature</span>
          <h2 id="titre-candidature">Rejoindre l'équipe SECURIFORM</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe étudie votre candidature et revient vers vous rapidement.</p>
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
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" required />
            </div>
            <div className="champ">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="champ champ-pleine-largeur">
              <label htmlFor="domaine">Domaine(s) de formation maîtrisé(s)</label>
              <input type="text" id="domaine" name="domaine" placeholder="Ex. : CACES R489, habilitation électrique..." />
            </div>
            <div className="champ champ-pleine-largeur">
              <label htmlFor="cv">CV (à joindre)</label>
              <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" />
            </div>
            <div className="champ champ-pleine-largeur">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Vos certifications, votre expérience, vos disponibilités..." />
            </div>
          </div>
          <button type="submit" className="btn btn-plein">Envoyer ma candidature</button>
        </form>
      </div>
    </section>


    

    
<section className="cta" aria-labelledby="titre-contact">
      <div className="container reveal">
        <h2 id="titre-contact">Une question avant de postuler&nbsp;?</h2>
        <p>Notre équipe vous répond rapidement pour toute question sur nos besoins en formateurs et nos zones d'intervention.</p>
        <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
        <div className="cta-actions">
          <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
          <Link className="btn btn-contour" href="/lentreprise" style={{ "borderColor": "#fff", "color": "#fff" }}>Découvrir l'entreprise</Link>
        </div>
      </div>
    </section>


  
    </>
  );
}
