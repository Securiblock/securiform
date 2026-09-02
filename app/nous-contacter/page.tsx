import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Nous contacter — SECURIFORM",
      "url": "https://securiform.fr/nous-contacter/"
    },
    {
      "@type": "EducationalOrganization",
      "name": "SECURIFORM",
      "url": "https://securiform.fr/",
      "telephone": "+33320673490",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "17 rue du Carillon",
        "postalCode": "59650",
        "addressLocality": "Villeneuve-d'Ascq",
        "addressCountry": "FR"
      }
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
          "name": "Nous contacter",
          "item": "https://securiform.fr/nous-contacter/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Nous contacter — SECURIFORM",
  description: "Contactez SECURIFORM, organisme de formation à Villeneuve d'Ascq (59650) : devis, renseignements, service client. 03 20 67 34 90.",
  alternates: { canonical: "/nous-contacter" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/nous-contacter",
    title: "Nous contacter — SECURIFORM",
    description: "Devis, renseignements, service client : contactez SECURIFORM à Villeneuve d'Ascq ou par téléphone au 03 20 67 34 90.",
    images: ["/image/logo-securiform.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nous contacter — SECURIFORM",
    description: "Contactez SECURIFORM pour vos demandes de devis, renseignements ou service client.",
    images: ["/image/logo-securiform.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Nous contacter">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Nous contacter</span>
        </p>
        <h1>Nous contacter</h1>
        <p>Une question, un projet de formation ou de VGP&nbsp;? Notre équipe basée à Villeneuve d'Ascq vous répond rapidement.</p>
        <a href="tel:+33320673490" className="btn btn-plein">03 20 67 34 90</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-contact-form">
      <div className="container presentation">

        <div className="presentation-txt reveal">
          <span className="surtitre">Nos coordonnées</span>
          <h2 id="titre-contact-form">SECURIFORM</h2>
          <p>17 rue du Carillon<br />59650 Villeneuve d'Ascq</p>
          <p>Téléphone&nbsp;: <a href="tel:+33320673490" style={{ "color": "var(--rouge)", "fontWeight": "700" }}>03 20 67 34 90</a></p>
          <p>Nos formateurs et vérificateurs se déplacent sur toute la France pour les formations, et principalement dans les Hauts-de-France pour les VGP. Notre équipe administrative vous répond depuis nos locaux de Villeneuve d'Ascq.</p>

          <div className="table-scroll reveal" style={{ "marginTop": "2rem" }}>
            <iframe title="Localisation de SECURIFORM, 17 rue du Carillon, 59650 Villeneuve d'Ascq" src="https://www.google.com/maps?q=17+rue+du+Carillon,+59650+Villeneuve-d%27Ascq&amp;output=embed" width="100%" height="320" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ "border": "0", "borderRadius": "12px" }}>
            </iframe>
          </div>
        </div>

        <div className="presentation-visuel reveal" aria-label="Formulaire de contact" style={{ "background": "var(--gris-clair)", "padding": "2.5rem" }}>
          <h3 style={{ "color": "var(--noir)" }}>Demande de renseignements</h3>
          
          <form action={submitForm} style={{ "display": "flex", "flexDirection": "column", "gap": "1.1rem", "marginTop": "1.2rem" }}>
            <div className="champ">
              <label htmlFor="sujet" style={{ "color": "var(--noir)" }}>Sujet</label>
              <select id="sujet" name="sujet">
                <option value="devis">Demande de devis</option>
                <option value="renseignement">Renseignement</option>
                <option value="service-client">Service client</option>
              </select>
            </div>
            <div className="champ">
              <label htmlFor="nom" style={{ "color": "var(--noir)" }}>Nom</label>
              <input type="text" id="nom" name="nom" required />
            </div>
            <div className="champ">
              <label htmlFor="societe" style={{ "color": "var(--noir)" }}>Société</label>
              <input type="text" id="societe" name="societe" />
            </div>
            <div className="champ">
              <label htmlFor="email" style={{ "color": "var(--noir)" }}>E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="champ">
              <label htmlFor="telephone" style={{ "color": "var(--noir)" }}>Téléphone</label>
              <input type="tel" id="telephone" name="telephone" />
            </div>
            <div className="champ">
              <label htmlFor="document" style={{ "color": "var(--noir)" }}>Document joint (optionnel)</label>
              <input type="file" id="document" name="document" />
            </div>
            <div className="champ">
              <label htmlFor="message" style={{ "color": "var(--noir)" }}>Message</label>
              <textarea id="message" name="message" rows={4} required />
            </div>
            <button type="submit" className="btn btn-plein">Envoyer</button>
          </form>
        </div>

      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-raisons">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Selon votre besoin</span>
          <h2 id="titre-raisons">Trois bonnes raisons de nous écrire</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Demande de devis</h3>
            <p>Vous connaissez déjà la formation ou la VGP qu'il vous faut&nbsp;: décrivez votre besoin, nous revenons vers vous avec une proposition chiffrée.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Renseignement</h3>
            <p>Vous hésitez entre plusieurs formations ou souhaitez des précisions sur une obligation réglementaire&nbsp;: notre équipe vous oriente.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Service client</h3>
            <p>Vous êtes déjà accompagné par SECURIFORM et avez une question de suivi&nbsp;: attestations, planning, renouvellement d'habilitation.</p>
          </article>

        </div>
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
            <summary>Sous quel délai vais-je recevoir une réponse&nbsp;?</summary>
            <p>Notre délai moyen de traitement des demandes est de 24 heures. Pour une réponse immédiate, le téléphone reste le moyen le plus rapide de nous joindre.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je vous contacter pour une formation partout en France&nbsp;?</summary>
            <p>Oui, nos formateurs interviennent sur l'ensemble du territoire français. Nos vérificateurs VGP se déplacent quant à eux principalement dans les Hauts-de-France.</p>
          </details>

          <details className="faq-item">
            <summary>Comment obtenir un devis rapidement&nbsp;?</summary>
            <p>Choisissez "Demande de devis" dans le formulaire ci-dessus, en précisant le nombre de personnes à former, le type de formation ou d'équipement concerné, et vos contraintes de planning si vous en avez.</p>
          </details>

          <details className="faq-item">
            <summary>Je souhaite rejoindre l'équipe de formateurs, dois-je utiliser ce formulaire&nbsp;?</summary>
            <p>Vous pouvez nous écrire ici en précisant votre profil, ou consulter directement notre page dédiée au recrutement pour candidater.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-recrute">
      <div className="container recrute reveal">
        <div>
          <span className="surtitre">Rejoignez-nous</span>
          <h2 id="titre-recrute">Nous recrutons</h2>
          <p>Afin de renforcer l'équipe <strong>SECURIFORM</strong>, nous recrutons des formateurs sur toute la France.</p>
        </div>
        <Link className="btn btn-plein" href="/nous-recrutons">En savoir +</Link>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-offre">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>Notre offre</span>
            <h2 id="titre-offre">Découvrez nos formations et nos VGP</h2>
            <p>Huit domaines de formation à la sécurité au travail, et les Vérifications Générales Périodiques de vos équipements de levage.</p>
            <Link className="btn btn-blanc" href="/#formations">Voir nos formations</Link>
          </div>
          <nav className="vgp-liste" aria-label="Accès rapide">
            <Link href="/caces">Conduite en sécurité et CACES®</Link>
            <Link href="/habilitation-electrique">Habilitation électrique</Link>
            <Link href="/secourisme">Secourisme (SST)</Link>
            <Link href="/incendie-evacuation">Incendie et évacuation</Link>
            <Link href="/travaux-hauteur-echafaudages">Travaux en hauteur et échafaudages</Link>
            <Link href="/gestes-postures">Gestes et postures</Link>
            <Link href="/aipr">AIPR</Link>
            <Link href="/vgp">Vérifications Générales Périodiques</Link>
          </nav>
        </div>
      </div>
    </section>


  
    </>
  );
}
