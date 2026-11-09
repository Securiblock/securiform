import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formations incendie et évacuation",
      "description": "Formation à la manipulation des extincteurs et RIA, formation à l'évacuation des locaux, formation Équipier de Première Intervention (EPI), conformes aux articles R4227-28 et suivants du Code du travail.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/incendie-evacuation"
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
          "name": "Formations incendie et évacuation",
          "item": "https://securiform.fr/incendie-evacuation"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formations incendie et évacuation - SECURIFORM",
  description: "SECURIFORM forme à la manipulation des extincteurs et RIA, à l'évacuation des locaux et aux Équipiers de Première Intervention.",
  alternates: { canonical: "/incendie-evacuation" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/incendie-evacuation",
    title: "Formations incendie et évacuation - SECURIFORM",
    description: "Manipulation d'extincteurs et de RIA, Équipiers de Première et Seconde Intervention, évacuation des locaux : SECURIFORM forme vos équipes sur toute la moitié nord de la France.",
    images: ["/image/formation-incendie.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations incendie et évacuation - SECURIFORM",
    description: "Extincteurs, RIA, EPI, évacuation : préparez vos équipes à la sécurité incendie avec SECURIFORM.",
    images: ["/image/formation-incendie.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formations incendie et évacuation" style={{ backgroundImage: "url('/image/formation-incendie.webp')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Formations incendie et évacuation</span>
        </p>
        <h1>Formations incendie et évacuation</h1>
        <p>Manipulation d'extincteurs et de RIA, Équipiers de Première et Seconde Intervention, évacuation des locaux&nbsp;: formez vos équipes à réagir efficacement face à un départ d'incendie.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">La formation au risque d&apos;incendie</span>
        <h2 id="titre-intro">Quelles obligations pour l&apos;employeur&nbsp;?</h2>
        <hr className="trait" />
        <p>Quelle que soit l&apos;activité de l&apos;entreprise, l&apos;ensemble du personnel doit être formé à&nbsp;:</p>
        <ul className="liste-texte">
          <li>donner l&apos;alerte&nbsp;;</li>
          <li>utiliser les moyens de premier secours afin de pouvoir faire face à un début d&apos;incendie, notamment la manipulation des extincteurs&nbsp;;</li>
          <li>exécuter les différentes manœuvres nécessaires&nbsp;: mise en sécurité du poste de travail, évacuation totale ou différée si nécessaire…</li>
        </ul>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-parcours">
      <div className="container">
        <h2 id="titre-parcours" className="sr-only" style={{ "position": "absolute", "left": "-9999px" }}>Nos formations incendie et évacuation</h2>
        <div className="formations-grid cols-3">

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-extincteurs.webp" alt="Formation à la manipulation des extincteurs" loading="lazy" />
            </div>
            <h3>Manipulation des extincteurs</h3>
            <p>Reconnaître un début d'incendie, choisir l'extincteur adapté et l'utiliser efficacement sur feu réel ou simulé.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/manipulation-extincteurs" aria-label="Formation à la manipulation des extincteurs" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-evacuation.webp" alt="Formation à l'évacuation des locaux" loading="lazy" />
            </div>
            <h3>Évacuation des locaux</h3>
            <p>Organiser et sécuriser l&apos;évacuation d&apos;un site&nbsp;: rôles, responsabilités et bonnes pratiques des guides et serre-files.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/evacuation" aria-label="Formation à l'évacuation" />
          </article>

          <article className="formation-card reveal">
            <div className="formation-photo">
              <img src="/image/formation-epi.webp" alt="Formation Équipier de Première Intervention" loading="lazy" />
            </div>
            <h3>Équipier de Première Intervention</h3>
            <p>Intervenir efficacement face à un début d&apos;incendie&nbsp;: identifier les risques, donner l&apos;alerte et utiliser les moyens de première intervention adaptés, dans le respect des consignes de sécurité.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/equipier-premiere-intervention" aria-label="Formation Équipier de Première Intervention" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-tableau">Quel extincteur pour quel feu&nbsp;?</h2>
          <hr className="trait" />
          <p>À chaque type de feu, un type d&apos;extincteur précis.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Classe de feu</th>
                <th scope="col">Matières concernées</th>
                <th scope="col">Extincteur adapté</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Bois, papier, carton, tissus, paille et autres matières solides formant des braises</td>
                <td>Eau pulvérisée, eau avec additif, mousse ou poudre ABC</td>
              </tr>
              <tr>
                <td>B</td>
                <td>Essence, gazole, solvants, peintures, alcools, huiles et autres liquides inflammables</td>
                <td>Mousse, poudre BC/ABC ou CO₂</td>
              </tr>
              <tr>
                <td>C</td>
                <td>Butane, propane, gaz naturel, méthane et autres gaz inflammables</td>
                <td>Poudre BC ou ABC&nbsp;; couper l&apos;alimentation si possible</td>
              </tr>
              <tr>
                <td>D</td>
                <td>Magnésium, sodium, aluminium en poudre et autres métaux combustibles</td>
                <td>Poudre spéciale classe D</td>
              </tr>
              <tr>
                <td>F</td>
                <td>Huiles et graisses alimentaires, notamment dans les friteuses</td>
                <td>Extincteur spécifique classe F ou agent adapté aux feux de cuisson</td>
              </tr>
              <tr>
                <td>Électrique</td>
                <td>Installations et appareils électriques sous tension</td>
                <td>CO₂ ou poudre, selon l&apos;équipement et les recommandations du fabricant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Le bon enchaînement</span>
          <h2 id="titre-etapes">Face à un début d'incendie</h2>
          <hr className="trait" />
          <p>Les formations SECURIFORM entraînent vos équipes à enchaîner ces actions sans hésitation.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Alerter</h3>
            <p>Déclencher l'alarme et prévenir les secours internes et externes, en donnant une localisation précise.</p>
          </div>
          <div className="etape reveal">
            <h3>Intervenir</h3>
            <p>Si le foyer est maîtrisable, l'Équipier de Première Intervention agit avec l'extincteur ou le RIA adapté.</p>
          </div>
          <div className="etape reveal">
            <h3>Évacuer</h3>
            <p>Guides-files et serre-files encadrent la sortie vers le point de rassemblement, en vérifiant les effectifs.</p>
          </div>
          <div className="etape reveal">
            <h3>Attendre les secours</h3>
            <p>À l'arrivée des secours, transmettre les informations utiles&nbsp;: localisation, effectifs, actions déjà menées.</p>
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
            <summary>À quelle fréquence organiser les exercices d&apos;évacuation et de manipulation des extincteurs&nbsp;?</summary>
            <p>L&apos;INRS recommande d&apos;effectuer des exercices d&apos;évacuation tous les 6 mois au minimum, et d&apos;adapter le renouvellement des essais de manipulation des extincteurs, de 6 mois à 3 ans, en fonction des risques incendie.</p>
          </details>

          <details className="faq-item">
            <summary>Quelles entreprises doivent établir une consigne de sécurité incendie&nbsp;?</summary>
            <p>Les établissements dans lesquels peuvent se trouver occupées ou réunies habituellement plus de 50 personnes, ainsi que ceux où sont manipulées et mises en œuvre des matières inflammables. Cette consigne, affichée de manière très apparente, indique notamment le matériel d&apos;extinction et de secours, les personnes chargées de le mettre en action, celles chargées de diriger l&apos;évacuation, et les moyens d&apos;alerte ainsi que les services de secours à prévenir.</p>
          </details>

          <details className="faq-item">
            <summary>Certains établissements sont-ils soumis à des règles plus strictes&nbsp;?</summary>
            <p>Oui. La plupart des lieux de travail relèvent des dispositions minimales du Code du travail, mais les établissements recevant du public (ERP), les immeubles de grande hauteur (IGH) et les installations classées pour la protection de l&apos;environnement (ICPE) doivent également respecter des règles spécifiques issues du Code de la construction et de l&apos;habitation ou du Code de l&apos;environnement.</p>
          </details>

        </div>
      </div>
    </section>


    

    

    

<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation incendie et évacuation</h2>
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
              <label htmlFor="formation">Formation souhaitée</label>
              <select id="formation" name="formation">
                <option value="extincteurs">Manipulation des extincteurs</option>
                <option value="evacuation">Évacuation des locaux</option>
                <option value="epi">Équipier de Première Intervention</option>
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
