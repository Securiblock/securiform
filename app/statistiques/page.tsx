import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Avis clients & Rapports d'activité — SECURIFORM",
      "url": "https://securiform.fr/avis-clients-2/"
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
          "name": "Statistiques",
          "item": "https://securiform.fr/avis-clients-2/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Avis clients & Rapports d'activité — SECURIFORM",
  description: "Consultez les avis clients et les rapports d'activité de SECURIFORM, organisme de formation certifié Qualiopi, année par année depuis 2019.",
  alternates: { canonical: "/statistiques" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/statistiques",
    title: "Avis clients & Rapports d'activité — SECURIFORM",
    description: "Retrouvez les avis clients et rapports d'activité de SECURIFORM, année par année.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avis clients & Rapports d'activité — SECURIFORM",
    description: "Les avis clients et rapports d'activité de SECURIFORM, année par année.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    
<section className="page-hero" aria-label="Avis clients et rapports d'activité">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Statistiques</span>
        </p>
        <h1>Avis clients &amp; rapports d'activité</h1>
        <p>Par souci de transparence, SECURIFORM met à disposition ses avis clients et rapports d'activité, année par année.</p>
      </div>
    </section>


    

    
<section className="section" id="avis-clients" aria-labelledby="titre-avis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qu'en pensent nos clients</span>
          <h2 id="titre-avis">Avis clients</h2>
          <hr className="trait" />
          <p>Un document par an, consolidant les retours de nos stagiaires et de leurs entreprises.</p>
        </div>
        <div className="formations-grid cols-3">

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2019</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2022/11/avis-client-2019.pdf" aria-label="Avis clients 2019 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2020</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2022/11/avis-client-2020.pdf" aria-label="Avis clients 2020 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2021</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2022/11/avis-client-2021.pdf" aria-label="Avis clients 2021 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2022</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2023/03/avis-client-2022.pdf" aria-label="Avis clients 2022 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2023</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2024/03/avis-client-2023-1.pdf" aria-label="Avis clients 2023 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2024</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2026/05/avis-client-2024.pdf" aria-label="Avis clients 2024 (PDF)" target="_blank" rel="noopener" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="rapports-activite" aria-labelledby="titre-rapports">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Notre activité en détail</span>
          <h2 id="titre-rapports">Rapports d'activité</h2>
          <hr className="trait" />
          <p>Le bilan annuel de nos actions de formation, publié chaque année.</p>
        </div>
        <div className="formations-grid cols-3">

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2020</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2024/02/Rapport-dactivite-2020.pdf" aria-label="Rapport d'activité 2020 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2021</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2024/02/Rapport-dactivite-2021.pdf" aria-label="Rapport d'activité 2021 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2022</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2024/02/Rapport-dactivite-2022.pdf" aria-label="Rapport d'activité 2022 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2023</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2024/02/Rapport-dactivite-2023.pdf" aria-label="Rapport d'activité 2023 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2024</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2026/05/Rapport-dactivite-2024.pdf" aria-label="Rapport d'activité 2024 (PDF)" target="_blank" rel="noopener" />
          </article>

          <article className="doc-card reveal">
            <div className="doc-icone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
            </div>
            <span className="doc-annee">2025</span>
            <span className="doc-label">Télécharger le PDF</span>
            <a className="card-cover" href="https://securiform.fr/wp-content/uploads/2026/05/Rapport-dactivite-2025.pdf" aria-label="Rapport d'activité 2025 (PDF)" target="_blank" rel="noopener" />
          </article>

        </div>
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
