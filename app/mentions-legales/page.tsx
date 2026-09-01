import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Mentions légales",
      "description": "Mentions légales du site SECURIFORM : éditeur, hébergeur, propriété intellectuelle, données personnelles.",
      "url": "https://securiform.fr/mentions-legales/"
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
          "name": "Mentions légales",
          "item": "https://securiform.fr/mentions-legales/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Mentions légales — SECURIFORM",
  description: "Mentions légales du site SECURIFORM : éditeur, hébergeur, propriété intellectuelle, données personnelles et cookies, conformément à la loi pour la confiance en l'économie numérique.",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/mentions-legales",
    title: "Mentions légales — SECURIFORM",
    description: "Informations légales relatives à l'éditeur et à l'hébergement du site SECURIFORM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions légales — SECURIFORM",
    description: "Informations légales du site SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    
<section className="page-hero" aria-label="Mentions légales">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Mentions légales</span>
        </p>
        <h1>Mentions légales</h1>
        <p>Informations légales relatives à l'édition et à l'hébergement du site securiform.fr, conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance en l'économie numérique.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-editeur">
      <div className="container section-head reveal">
        <span className="surtitre">Article 1</span>
        <h2 id="titre-editeur">Éditeur du site</h2>
        <hr className="trait" />
        <p>Le site securiform.fr est édité par la société <strong>SECURIFORM</strong>, Société par Actions Simplifiée (SAS) au capital social de 4&nbsp;500&nbsp;€, immatriculée au Registre du Commerce et des Sociétés de Lille Métropole sous le numéro <strong>502 015 787</strong>.</p>
        <p style={{ "marginTop": "1rem" }}>
          Siège social&nbsp;: 17 rue du Carillon, 59650 Villeneuve-d'Ascq, France<br />
          SIREN&nbsp;: 502 015 787<br />
          SIRET (siège)&nbsp;: 502 015 787 00034<br />
          Numéro de TVA intracommunautaire&nbsp;: FR56502015787<br />
          Téléphone&nbsp;: <a href="tel:+33320673490" style={{ "color": "var(--rouge)" }}>03 20 67 34 90</a><br />
          Représentant légal&nbsp;: LOVIJEC, Président
        </p>
        <p style={{ "marginTop": "1rem" }}>SECURIFORM est un organisme de formation certifié Qualiopi.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-direction">
      <div className="container section-head reveal">
        <span className="surtitre">Article 2</span>
        <h2 id="titre-direction">Directeur de la publication</h2>
        <hr className="trait" />
        <p>Le directeur de la publication est le représentant légal de la société SECURIFORM (LOVIJEC, Président). <em>[Le nom de la personne physique assurant la direction de la publication doit être précisé ici par l'éditeur du site.]</em></p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-hebergeur">
      <div className="container section-head reveal">
        <span className="surtitre">Article 3</span>
        <h2 id="titre-hebergeur">Hébergeur du site</h2>
        <hr className="trait" />
        <p><em>[Coordonnées de l'hébergeur à compléter&nbsp;: raison sociale, adresse du siège social et numéro de téléphone de l'hébergeur du site.]</em></p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-propriete">
      <div className="container section-head reveal">
        <span className="surtitre">Article 4</span>
        <h2 id="titre-propriete">Propriété intellectuelle</h2>
        <hr className="trait" />
        <p>L'ensemble des éléments présents sur ce site (textes, images, logos, marques, chartes graphiques, code source) est protégé par le droit d'auteur et la législation applicable à la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de SECURIFORM.</p>
        <p style={{ "marginTop": "1rem" }}>La marque <strong>SECURISTORE</strong> (n°FR4557592), exploitée par SECURIFORM, est déposée à l'Institut National de la Propriété Industrielle (INPI).</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-donnees">
      <div className="container section-head reveal">
        <span className="surtitre">Article 5</span>
        <h2 id="titre-donnees">Données personnelles</h2>
        <hr className="trait" />
        <p>Les informations recueillies via les formulaires de ce site (demande de devis, candidature, contact) sont destinées exclusivement à SECURIFORM et sont nécessaires au traitement de votre demande. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression des données vous concernant. Pour exercer ce droit, vous pouvez nous contacter via notre page&nbsp;<Link href="/nous-contacter" style={{ "color": "var(--rouge)" }}>Nous contacter</Link>.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-cookies">
      <div className="container section-head reveal">
        <span className="surtitre">Article 6</span>
        <h2 id="titre-cookies">Cookies</h2>
        <hr className="trait" />
        <p>Ce site peut utiliser des cookies pour mesurer l'audience, améliorer l'expérience de navigation, ou stocker et accéder à certaines informations sur votre appareil. Vous pouvez à tout moment accepter, refuser ou paramétrer le dépôt de ces cookies via les réglages de votre navigateur.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-liens">
      <div className="container section-head reveal">
        <span className="surtitre">Article 7</span>
        <h2 id="titre-liens">Liens hypertextes</h2>
        <hr className="trait" />
        <p>Le site securiform.fr peut contenir des liens vers d'autres sites internet ou ressources. SECURIFORM ne dispose d'aucun moyen de contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-droit">
      <div className="container section-head reveal">
        <span className="surtitre">Article 8</span>
        <h2 id="titre-droit">Droit applicable et litiges</h2>
        <hr className="trait" />
        <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et après recherche d'une solution amiable, les tribunaux français seront seuls compétents.</p>
      </div>
    </section>


    

    
<section className="cta" aria-labelledby="titre-contact">
      <div className="container reveal">
        <h2 id="titre-contact">Une question sur ces mentions légales&nbsp;?</h2>
        <p>Notre équipe reste à votre disposition pour tout complément d'information.</p>
        <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
        <div className="cta-actions">
          <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
          <Link className="btn btn-contour" href="/conditions-generales-de-vente" style={{ "borderColor": "#fff", "color": "#fff" }}>Conditions générales de vente</Link>
        </div>
      </div>
    </section>


  
    </>
  );
}
