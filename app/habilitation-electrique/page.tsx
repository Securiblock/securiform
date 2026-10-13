import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";
import CalculateurRecyclage from "@/components/calculateur-recyclage";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Préparation à l'habilitation électrique",
      "description": "Préparation à l'habilitation électrique pour personnel électricien et non-électricien, en basse et haute tensions : H0B0, BS, BE/HE Manœuvre, B1-B2-BR-BC-BE essai, H1-H2-HC-HE essai, et véhicules électriques/hybrides selon la norme NF C18-550.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/habilitation-electrique/"
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
          "name": "Préparation à l'habilitation électrique",
          "item": "https://securiform.fr/habilitation-electrique/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Préparation à l'habilitation électrique - SECURIFORM",
  description: "SECURIFORM prépare à l'habilitation électrique le personnel électricien et non-électricien, basse et haute tension, sur toute la moitié nord de la France.",
  alternates: { canonical: "/habilitation-electrique" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/habilitation-electrique",
    title: "Préparation à l'habilitation électrique - SECURIFORM",
    description: "Personnel électricien et non-électricien, basse et haute tensions, véhicules électriques/hybrides : SECURIFORM prépare vos équipes à l'habilitation électrique sur toute la moitié nord de la France.",
    images: ["/image/formation-habilitation-electrique.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Préparation à l'habilitation électrique - SECURIFORM",
    description: "H0B0, BS, BE/HE Manœuvre, B1-B2-BR-BC, H1-H2-HC : préparez vos équipes à l'habilitation électrique avec SECURIFORM.",
    images: ["/image/formation-habilitation-electrique.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Préparation à l'habilitation électrique" style={{ backgroundImage: "url('/image/formation-habilitation-electrique.webp')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Préparation à l'habilitation électrique</span>
        </p>
        <h1>Préparation à l'habilitation électrique</h1>
        <p>Formez-vous avec des professionnels de la préparation à l'habilitation électrique, que vous soyez personnel électricien ou non-électricien, en basse ou haute tension.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Nos formations</span>
        <h2 id="titre-intro">2 parcours, adaptés à votre niveau d'exposition aux risques électriques</h2>
        <hr className="trait" />
        <p>L'habilitation électrique est une autorisation délivrée par votre employeur sur la base d'une formation et de la reconnaissance de votre aptitude médicale.</p>
          <p>SECURIFORM prépare les deux publics concernés (personnel non-électricien et personnel électricien) en basse et en haute tension.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-parcours">
      <div className="container">
        <h2 id="titre-parcours" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Les deux parcours de formation</h2>
        <div className="formations-grid cols-2">

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-habilitation-non-electricien.webp" alt="Formation habilitation électrique personnel non-électricien" loading="lazy" />
            </div>
            <h3>Personnel non-électricien</h3>
            <p>Au sens de la norme NF C 18-510/A1, le personnel non électricien regroupe les personnes réalisant des opérations d'ordre non électrique dans un environnement d'installations électriques, ou des opérations électriques simples (manœuvres, remplacements à l'identique) dans les limites de leur habilitation.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/habilitation-non-electricien" aria-label="Formation personnel non-électricien" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-habilitation-electricien.webp" alt="Formation habilitation électrique personnel électricien" loading="lazy" />
            </div>
            <h3>Personnel électricien</h3>
            <p>Au sens de la norme NF C 18-510/A1, le personnel électricien regroupe les personnes réalisant des opérations d'ordre électrique (travaux, interventions, consignations, essais, mesurages ou vérifications) sur des installations électriques basse ou haute tension, dans les limites de leur habilitation.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/habilitation-electricien" aria-label="Formation personnel électricien" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-tableau">Que signifie chaque symbole d'habilitation&nbsp;?</h2>
          <hr className="trait" />
          <p>Chaque lettre et chiffre correspond à un rôle et à un niveau de tension précis. Voici un premier repère&nbsp;; SECURIFORM vous aide ensuite à identifier l'habilitation exacte dont vos équipes ont besoin.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Symbole</th>
                <th scope="col">Public</th>
                <th scope="col">Domaine</th>
                <th scope="col">Rôle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H0 / B0</td>
                <td>Non-électricien</td>
                <td>BT et HT</td>
                <td>Exécutant d'opérations d'ordre non électrique à proximité d'installations électriques</td>
              </tr>
              <tr>
                <td>BE / HE Manœuvre</td>
                <td>Non-électricien</td>
                <td>BT et HT</td>
                <td>Chargé d'opérations spécifiques (manœuvres d'exploitation&nbsp;: changement de la configuration d'un réseau, d'une installation ou de l'alimentation électrique d'un équipement)</td>
              </tr>
              <tr>
                <td>BS</td>
                <td>Non-électricien</td>
                <td>BT</td>
                <td>Chargé d'interventions élémentaires (remplacement hors tension de fusibles à l'identique et de petits appareillages électriques…)</td>
              </tr>
              <tr>
                <td>B1</td>
                <td>Électricien</td>
                <td>BT</td>
                <td>Exécutant d'opérations d'ordre électrique (travaille seul et opère dans la zone de travail indiquée, selon les instructions reçues par le B2)</td>
              </tr>
              <tr>
                <td>B2</td>
                <td>Électricien</td>
                <td>BT</td>
                <td>Chargé de travaux (assure la direction effective des travaux et prend les mesures nécessaires pour assurer sa propre sécurité et celle du personnel placé sous ses ordres)</td>
              </tr>
              <tr>
                <td>BR</td>
                <td>Électricien</td>
                <td>BT</td>
                <td>Chargé d'intervention générale (réalise des interventions de dépannage, de raccordement, de mesurage ou d'essai, peut consigner pour son propre compte et assure sa propre sécurité)</td>
              </tr>
              <tr>
                <td>BC</td>
                <td>Électricien</td>
                <td>BT</td>
                <td>Chargé de consignation (réalise des opérations de consignation ou réalise la mise hors tension)</td>
              </tr>
              <tr>
                <td>H1</td>
                <td>Électricien</td>
                <td>HT</td>
                <td>Exécutant d'opérations d'ordre électrique (travaille seul et opère dans la zone de travail indiquée, selon les instructions reçues par le H2)</td>
              </tr>
              <tr>
                <td>H2</td>
                <td>Électricien</td>
                <td>HT</td>
                <td>Chargé de travaux (assure la direction effective des travaux et prend les mesures nécessaires pour assurer sa propre sécurité et celle du personnel placé sous ses ordres)</td>
              </tr>
              <tr>
                <td>HC</td>
                <td>Électricien</td>
                <td>HT</td>
                <td>Chargé de consignation (réalise des opérations de consignation ou réalise la mise hors tension)</td>
              </tr>
              <tr>
                <td>B1L / B2L / BRL / BCL</td>
                <td>Électricien</td>
                <td>Véhicules électriques/hybrides</td>
                <td>Équivalents BT appliqués aux véhicules, selon la norme NF C18-550</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Déroulé</span>
          <h2 id="titre-etapes">Votre parcours de formation</h2>
          <hr className="trait" />
          <p>De la formation à l'habilitation délivrée par votre employeur, un parcours en quatre temps.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Théorie</h3>
            <p>Grandeurs électriques, effets du courant, zones d'environnement et symboles d'habilitation, adaptés à votre niveau…</p>
          </div>
          <div className="etape reveal">
            <h3>Pratique</h3>
            <p>Reconnaissance des matériels, utilisation des équipements de protection, mises en situation réelles.</p>
          </div>
          <div className="etape reveal">
            <h3>Évaluation</h3>
            <p>Contrôle des connaissances théoriques et pratiques acquises pendant la formation.</p>
          </div>
          <div className="etape reveal">
            <h3>Habilitation</h3>
            <p>Sur la base de l'attestation de formation et de la reconnaissance de votre aptitude médicale, votre employeur délivre l'habilitation, propre à votre poste.</p>
          </div>
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
            <summary>Quelle est la différence entre une formation et une habilitation électrique&nbsp;?</summary>
            <p>La formation prépare le personnel et débouche sur une attestation de compétences. L'habilitation, elle, est délivrée par l'employeur&nbsp;: elle tient compte de la formation suivie, mais aussi de l'aptitude médicale du salarié.</p>
          </details>

          <details className="faq-item">
            <summary>Je ne suis pas électricien, ai-je vraiment besoin d'une habilitation&nbsp;?</summary>
            <p>Oui, dès lors que votre activité vous amène à travailler ou circuler à proximité d'installations électriques, même sans y toucher directement. L'habilitation H0B0 couvre ces situations.</p>
          </details>

          <details className="faq-item">
            <summary>Qu'est-ce que la norme NF C18-550 pour les véhicules électriques et hybrides&nbsp;?</summary>
            <p>C'est le référentiel qui encadre les habilitations spécifiques aux véhicules électriques et hybrides (B0L, B1L, B2L, BRL, BCL). Il reprend la logique des habilitations classiques, adaptée aux circuits de traction et aux procédures de consignation propres à ces véhicules.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité d'une habilitation électrique&nbsp;?</summary>
            <p>La norme NF C 18-510 recommande un recyclage tous les 3 ans.</p>
          </details>

          <details className="faq-item">
            <summary>À partir de quelle tension parle-t-on de haute tension&nbsp;?</summary>
            <p>On parle de haute tension au-delà de 1&nbsp;000&nbsp;V en courant alternatif et de 1&nbsp;500&nbsp;V en courant continu. Elle se divise en HTA (jusqu'à 50&nbsp;000&nbsp;V en alternatif et 75&nbsp;000&nbsp;V en continu) et HTB au-delà.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<CalculateurRecyclage formation="habilitation-electrique" />

    

<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une préparation à l'habilitation électrique</h2>
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
              <label htmlFor="formation">Public concerné</label>
              <select id="formation" name="formation">
                <option value="non-electricien">Personnel non-électricien</option>
                <option value="electricien">Personnel électricien</option>
                <option value="vehicules">Véhicules électriques / hybrides (NF C18-550)</option>
                <option value="autre">Autre / je ne sais pas encore</option>
              </select>
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
