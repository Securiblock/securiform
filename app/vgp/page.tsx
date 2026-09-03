import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Vérifications Générales Périodiques (VGP)",
      "serviceType": "Vérification Générale Périodique d'équipements de levage et de manutention",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "areaServed": {
        "@type": "State",
        "name": "Hauts-de-France"
      },
      "url": "https://securiform.fr/vgp/",
      "description": "VGP des chariots élévateurs, nacelles élévatrices, grues auxiliaires, ponts roulants, chargeuses, chariots télescopiques, compacteurs, hayons élévateurs, bras de levage, tombereaux, pelleteuses et accessoires de levage."
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
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Vérifications Générales Périodiques (VGP) — SECURIFORM",
  description: "SECURIFORM réalise les Vérifications Générales Périodiques (VGP) de vos équipements de levage et manutention, dans les Hauts-de-France.",
  alternates: { canonical: "/vgp" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/vgp",
    title: "Vérifications Générales Périodiques (VGP) — SECURIFORM",
    description: "Chariots élévateurs, nacelles, grues auxiliaires, ponts roulants : SECURIFORM réalise vos VGP dans les Hauts-de-France.",
    images: ["/image/vgp-chariots-elevateurs.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vérifications Générales Périodiques (VGP) — SECURIFORM",
    description: "Faites vérifier vos équipements de levage et de manutention avec SECURIFORM, dans les Hauts-de-France.",
    images: ["/image/vgp-chariots-elevateurs.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Vérifications Générales Périodiques" style={{ backgroundImage: "url('/image/vgp-chariots-elevateurs.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>VGP</span>
        </p>
        <h1>Vérifications Générales Périodiques (VGP)</h1>
        <p>Nous effectuons les Vérifications Générales Périodiques de vos engins de levage et de manutention, principalement dans les Hauts-de-France.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Une obligation réglementaire</span>
        <h2 id="titre-intro">Qu'est-ce qu'une VGP&nbsp;?</h2>
        <hr className="trait" />
        <p>La Vérification Générale Périodique est un contrôle obligatoire des équipements de levage et de manutention, encadré par l'arrêté du 5 mars 1993 modifié par l'arrêté du 4 juin 1993 et par le décret n°2006-1033 du 22 août 2006. Elle vise à s'assurer que vos machines restent conformes aux exigences de sécurité tout au long de leur utilisation, en examinant leurs pièces critiques, leurs dispositifs de sécurité et leur état d'usure. Selon le type d'équipement, elle doit être renouvelée tous les 6 ou 12 mois.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="equipements" aria-labelledby="titre-equipements">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Notre périmètre</span>
          <h2 id="titre-equipements">Les équipements que nous vérifions</h2>
          <hr className="trait" />
          <p>Une VGP par type d'équipement, réalisée par nos vérificateurs sur votre site.</p>
        </div>
        <div className="formations-grid">

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-chariots-elevateurs.jpg" alt="VGP des chariots élévateurs" loading="lazy" />
            </div>
            <h3>Chariots élévateurs</h3>
            <p>Vérification des chariots de manutention utilisés en entrepôt, industrie et logistique.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-chariots-elevateurs" aria-label="VGP des chariots élévateurs" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-nacelles-elevatrices.jpg" alt="VGP des nacelles élévatrices" loading="lazy" />
            </div>
            <h3>Nacelles élévatrices</h3>
            <p>Vérification des plateformes élévatrices mobiles de personnes (PEMP).</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-nacelles-elevatrices" aria-label="VGP des nacelles élévatrices" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-grues-auxiliaires.jpg" alt="VGP des grues auxiliaires" loading="lazy" />
            </div>
            <h3>Grues auxiliaires</h3>
            <p>Vérification des grues de chargement montées sur véhicules porteurs.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-grues-auxiliaires" aria-label="VGP des grues auxiliaires" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">12 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-ponts-roulants.jpg" alt="VGP des ponts roulants" loading="lazy" />
            </div>
            <h3>Ponts roulants</h3>
            <p>Vérification des ponts roulants et portiques de levage en ateliers industriels.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-ponts-roulants" aria-label="VGP des ponts roulants" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-chargeuses.jpg" alt="VGP des chargeuses" loading="lazy" />
            </div>
            <h3>Chargeuses</h3>
            <p>Vérification des chargeuses utilisées en BTP, carrières et travaux publics.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-chargeuses" aria-label="VGP des chargeuses" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-chariots-telescopiques.jpg" alt="VGP des chariots télescopiques" loading="lazy" />
            </div>
            <h3>Chariots télescopiques</h3>
            <p>Vérification des chariots télescopiques utilisés pour la manutention en hauteur.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-chariots-telescopiques" aria-label="VGP des chariots télescopiques" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">12 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-compacteurs.jpg" alt="VGP des compacteurs" loading="lazy" />
            </div>
            <h3>Compacteurs</h3>
            <p>Vérification des compacteurs utilisés pour les travaux de terrassement et de voirie.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-compacteurs" aria-label="VGP des compacteurs" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-hayons-elevateurs.jpg" alt="VGP des hayons élévateurs" loading="lazy" />
            </div>
            <h3>Hayons élévateurs</h3>
            <p>Vérification des hayons élévateurs montés sur véhicules de livraison et de transport.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-hayons-elevateurs" aria-label="VGP des hayons élévateurs" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-bras-de-levage.jpg" alt="VGP des bras de levage" loading="lazy" />
            </div>
            <h3>Bras de levage</h3>
            <p>Vérification des bras de levage utilisés pour des opérations de manutention ciblées.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-bras-de-levage" aria-label="VGP des bras de levage" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">12 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-tombereaux.jpg" alt="VGP des tombereaux" loading="lazy" />
            </div>
            <h3>Tombereaux</h3>
            <p>Vérification des tombereaux utilisés pour le transport de matériaux sur chantier.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-tombereaux" aria-label="VGP des tombereaux" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">12 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-pelleteuses.jpg" alt="VGP des pelleteuses" loading="lazy" />
            </div>
            <h3>Pelleteuses</h3>
            <p>Vérification des pelleteuses équipées pour des opérations de levage.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-pelleteuses" aria-label="VGP des pelleteuses" />
          </article>

          <article className="formation-card reveal">
            <span className="categorie-badge">6 mois</span>
            <div className="formation-photo">
              <img src="/image/vgp-accessoires-levage.jpg" alt="VGP des accessoires de levage" loading="lazy" />
            </div>
            <h3>Accessoires de levage</h3>
            <p>Vérification des élingues, chaînes, palonniers et autres accessoires de levage.</p>
            <span className="lien">Découvrir</span>
            <Link className="card-cover" href="/vgp-accessoires-levage" aria-label="VGP des accessoires de levage" />
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'organiser</span>
          <h2 id="titre-tableau">Tous les 6 ou 12 mois, selon l'équipement</h2>
          <hr className="trait" />
          <p>À titre indicatif&nbsp;: la périodicité exacte dépend du type d'équipement et de son usage. SECURIFORM la confirme avec vous équipement par équipement.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Périodicité</th>
                <th scope="col">Équipements concernés</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tous les 6 mois</td>
                <td>Chariots élévateurs, chargeuses, chariots télescopiques, nacelles élévatrices (PEMP), grues auxiliaires de chargement, hayons élévateurs, bras de levage, accessoires de levage</td>
              </tr>
              <tr>
                <td>Tous les 12 mois</td>
                <td>Ponts roulants, compacteurs, tombereaux (transport standard&nbsp;; 6 mois si usage de levage), pelleteuses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-poids">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Une question fréquente</span>
          <h2 id="titre-poids">Les poids de test, à quoi servent-ils&nbsp;?</h2>
          <p>Lors de certaines VGP, le vérificateur utilise des masses d'essai calibrées, appelées poids de test, pour valider en conditions réelles la capacité de charge annoncée par le fabricant de l'équipement.</p>
          <p>Cette étape permet de s'assurer que les dispositifs de sécurité (limiteurs de charge, systèmes de freinage) réagissent correctement lorsque l'équipement est sollicité à sa charge nominale.</p>
          <Link className="btn btn-contour" href="/poids-de-test-vgp">En savoir plus sur les poids de test</Link>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Poids de test VGP">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Masses calibrées, adaptées à la charge nominale de l'équipement</li>
            <li><span className="puce" aria-hidden="true">✓</span> Utilisées pour tester les dispositifs de sécurité en charge</li>
            <li><span className="puce" aria-hidden="true">✓</span> Apportées par nos vérificateurs le jour de l'intervention</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Comment ça se passe</span>
          <h2 id="titre-etapes">Le déroulé d'une VGP avec SECURIFORM</h2>
          <hr className="trait" />
          <p>Une intervention organisée pour limiter au maximum l'impact sur votre activité.</p>
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Prise de contact</h3>
            <p>Nous recensons avec vous les équipements concernés et convenons d'une date d'intervention.</p>
          </div>
          <div className="etape reveal">
            <h3>Inspection sur site</h3>
            <p>Notre vérificateur contrôle l'équipement dans vos locaux&nbsp;: pièces critiques, sécurités, état d'usure.</p>
          </div>
          <div className="etape reveal">
            <h3>Rapport détaillé</h3>
            <p>Vous recevez un rapport de vérification écrit, mentionnant les observations et éventuelles réserves.</p>
          </div>
          <div className="etape reveal">
            <h3>Suivi</h3>
            <p>Nous vous accompagnons sur la levée des réserves et planifions la prochaine échéance.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-zone">
      <div className="container section-head reveal">
        <span className="surtitre">Notre zone d'intervention</span>
        <h2 id="titre-zone">Des VGP réalisées dans les Hauts-de-France</h2>
        <hr className="trait" />
        <p>Nos vérificateurs interviennent sur l'ensemble de la région Hauts-de-France&nbsp;: Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq, Douai, Valenciennes, Lens, Béthune, Arras, Cambrai, Dunkerque, Calais, Saint-Omer, Boulogne-sur-Mer et Amiens, ainsi que les communes environnantes. Pour vos formations, SECURIFORM reste par ailleurs à votre service sur l'ensemble du territoire français.</p>
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
            <summary>La VGP est-elle vraiment obligatoire&nbsp;?</summary>
            <p>Oui, dès lors que votre entreprise utilise des équipements de levage ou de manutention couverts par la réglementation. C'est une obligation de l'employeur au titre de la sécurité de ses salariés et des tiers.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si une non-conformité est détectée&nbsp;?</summary>
            <p>Le rapport de vérification mentionne une réserve. Selon sa gravité, l'équipement peut continuer à être utilisé le temps de la remise en conformité, ou son usage doit être suspendu jusqu'à correction. SECURIFORM vous accompagne dans cette démarche.</p>
          </details>

          <details className="faq-item">
            <summary>Qui peut réaliser une VGP&nbsp;?</summary>
            <p>La vérification doit être réalisée par une personne compétente, formée à cet effet, disposant des connaissances techniques et réglementaires nécessaires&nbsp;: c'est le rôle de nos vérificateurs.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la différence entre CACES® et VGP&nbsp;?</summary>
            <p>Le CACES® atteste de la compétence du conducteur à utiliser un engin en sécurité. La VGP, elle, contrôle l'état et la conformité de l'équipement lui-même. Les deux sont complémentaires et souvent nécessaires pour la même machine.</p>
          </details>

          <details className="faq-item">
            <summary>Intervenez-vous en dehors des Hauts-de-France&nbsp;?</summary>
            <p>Nos VGP sont principalement réalisées dans les Hauts-de-France. Pour vos besoins de formation (CACES®, habilitation électrique, secourisme…), SECURIFORM intervient en revanche sur toute la France&nbsp;: n'hésitez pas à nous consulter.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser l'intervention.</p>
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
              <label htmlFor="equipement">Équipement concerné</label>
              <select id="equipement" name="equipement">
                <option value="chariots">Chariots élévateurs</option>
                <option value="nacelles">Nacelles élévatrices</option>
                <option value="grues">Grues auxiliaires</option>
                <option value="ponts">Ponts roulants</option>
                <option value="chargeuses">Chargeuses</option>
                <option value="telescopiques">Chariots télescopiques</option>
                <option value="compacteurs">Compacteurs</option>
                <option value="hayons">Hayons élévateurs</option>
                <option value="bras">Bras de levage</option>
                <option value="tombereaux">Tombereaux</option>
                <option value="pelleteuses">Pelleteuses</option>
                <option value="accessoires">Accessoires de levage</option>
                <option value="autre">Autre équipement</option>
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
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>Formations</span>
            <h2 id="titre-formations">Besoin de former vos équipes&nbsp;?</h2>
            <p>Au-delà des VGP, SECURIFORM prépare vos équipes à la sécurité au travail sur tout le territoire français&nbsp;: conduite en sécurité, habilitation électrique, secourisme et bien plus.</p>
            <Link className="btn btn-blanc" href="/#formations">Découvrir nos formations</Link>
          </div>
          <nav className="vgp-liste" aria-label="Nos formations">
            <Link href="/caces">Conduite en sécurité et CACES®</Link>
            <Link href="/habilitation-electrique">Habilitation électrique</Link>
            <Link href="/secourisme">Secourisme (SST)</Link>
            <Link href="/incendie-evacuation">Incendie et évacuation</Link>
            <Link href="/travaux-hauteur-echafaudages">Travaux en hauteur et échafaudages</Link>
            <Link href="/gestes-postures">Gestes et postures</Link>
            <Link href="/aipr">AIPR</Link>
            <Link href="/formations-specifiques">Formations spécifiques</Link>
          </nav>
        </div>
      </div>
    </section>


  
    </>
  );
}
