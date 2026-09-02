import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation CACES R484 — Ponts roulants et portiques",
      "description": "Formation à la conduite en sécurité des ponts roulants et portiques, catégorie 1 (commande au sol) et catégorie 2 (commande en cabine), avec techniques d'élingage. Certificat valable 5 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces/formation-a-la-conduite-en-securite-caces-r484/"
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
          "name": "Conduite en sécurité et CACES®",
          "item": "https://securiform.fr/caces/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CACES R484",
          "item": "https://securiform.fr/caces/formation-a-la-conduite-en-securite-caces-r484/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R484 — SECURIFORM",
  description: "Formation CACES R484 avec SECURIFORM : commande au sol ou en cabine, techniques d'élingage, calcul de charge. Certificat valable 5 ans.",
  alternates: { canonical: "/caces-r484" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-r484",
    title: "Formation CACES® R484 — Ponts roulants et portiques — SECURIFORM",
    description: "Commande au sol ou en cabine, techniques d'élingage : formation CACES R484 avec SECURIFORM, certificat valable 5 ans.",
    images: ["/image/caces-r484.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R484 — SECURIFORM",
    description: "Conduite en sécurité des ponts roulants et portiques, avec SECURIFORM.",
    images: ["/image/caces-r484.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R484">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R484</span>
        </p>
        <h1>Formation CACES® R484 — Ponts roulants et portiques</h1>
        <p>Formez-vous à la conduite en sécurité des ponts roulants et portiques, commande au sol ou en cabine, et aux techniques d'élingage indispensables au levage.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Deux catégories, selon le mode de commande</h2>
        <hr className="trait" />
        <p>Le CACES R484 couvre les ponts roulants et portiques utilisés dans les ateliers industriels pour le levage de charges. Il se décline en deux catégories selon que l'opérateur commande l'équipement depuis le sol ou depuis une cabine. Certains équipements en sont exclus&nbsp;: ponts à bras articulé non conformes à la norme EN 15011, chariots suspendus, palans seuls, et grues d'atelier qui relèvent d'une autre recommandation.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-categories">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-categories">Les deux catégories du CACES R484</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Catégorie</th>
                <th scope="col">Mode de commande</th>
                <th scope="col">Usage typique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Catégorie 1</td>
                <td>Commande au sol (boîtier filaire ou radiocommande)</td>
                <td>Ateliers de fabrication, magasins industriels, charges moyennes</td>
              </tr>
              <tr>
                <td>Catégorie 2</td>
                <td>Commande en cabine (suspendue ou fixe), avec option commande au sol</td>
                <td>Sidérurgie, fonderie, construction navale, charges très lourdes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Vous ne savez pas quelle catégorie correspond à votre installation&nbsp;? Contactez-nous, nous vous aidons à l'identifier.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-cmu">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Une notion clé</span>
          <h2 id="titre-cmu">La CMU et l'angle d'élingage</h2>
          <hr className="trait" />
          <p>La Charge Maximale d'Utilisation (CMU) est la charge maximale que l'équipement peut lever en toute sécurité&nbsp;; elle inclut le poids de la charge et celui des accessoires d'élingage. L'angle entre les brins de l'élingue modifie fortement la CMU réellement disponible.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Angle entre brins</th>
                <th scope="col">Effet sur la CMU</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0° à 45°</td>
                <td>CMU renforcée</td>
              </tr>
              <tr>
                <td>60° (angle optimal recommandé)</td>
                <td>CMU nominale de l'élingue</td>
              </tr>
              <tr>
                <td>90°</td>
                <td>CMU réduite d'environ 30&nbsp;%</td>
              </tr>
              <tr>
                <td>120°</td>
                <td>CMU réduite de moitié</td>
              </tr>
              <tr>
                <td>Plus de 120°</td>
                <td>Interdit&nbsp;: risque de rupture</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-elingage">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La compétence critique</span>
          <h2 id="titre-elingage">Les techniques d'élingage enseignées</h2>
          <hr className="trait" />
          <p>L'élingage est l'opération qui relie la charge à l'appareil de levage&nbsp;: un mauvais élingage transforme un simple levage en accident grave.</p>
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Élingues chaînes</h3>
            <p>Très résistantes et durables, idéales pour les charges lourdes ou les environnements agressifs, mais plus lourdes à manipuler.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Élingues câbles métalliques</h3>
            <p>Souples et polyvalentes, adaptées à un usage général, mais leur usure interne est plus difficile à contrôler visuellement.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Élingues textiles</h3>
            <p>Légères et protectrices pour les charges fragiles ou finies, mais sensibles aux coupures, à la chaleur et aux UV.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>La formation couvre aussi les accessoires (crochets à linguet, manilles, anneaux, palonniers) et les trois modes d'élingage&nbsp;: direct, en berceau et par nœud coulant.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La bonne méthode</span>
          <h2 id="titre-etapes">Utiliser un pont roulant en 4 temps</h2>
          <hr className="trait" />
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Vérifier</h3>
            <p>Contrôler l'état du pont, des câbles, du crochet et des dispositifs de sécurité avant toute utilisation.</p>
          </div>
          <div className="etape reveal">
            <h3>Élinguer</h3>
            <p>Choisir l'accessoire adapté et respecter l'angle optimal entre les brins pour préserver la CMU.</p>
          </div>
          <div className="etape reveal">
            <h3>Lever et déplacer</h3>
            <p>Soulever progressivement, stabiliser la charge, puis la déplacer à vitesse maîtrisée en évitant tout obstacle.</p>
          </div>
          <div className="etape reveal">
            <h3>Reposer</h3>
            <p>Déposer la charge en douceur, décrocher les accessoires, puis ranger le pont en position de repos.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient</span>
          <h2 id="titre-risques">Les principaux risques du pont roulant</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Chute de charge</h3>
            <p>Le risque le plus fréquent, lié à un élingage défaillant ou une surcharge. Prévenu par un élingage rigoureux et un essai de levage progressif.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Écrasement</h3>
            <p>Lorsqu'une personne se trouve entre la charge et un obstacle fixe. Prévenu par le balisage des zones et l'interdiction de passage sous charge.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Collision avec la structure</h3>
            <p>Liée à des limiteurs de fin de course défaillants ou une vitesse excessive. Prévenu par leur vérification quotidienne et une conduite adaptée.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Électrocution</h3>
            <p>Par proximité d'une ligne électrique ou un défaut d'isolation. Prévenu par le repérage des zones à risque et le respect des distances minimales.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Surcharge</h3>
            <p>Liée à une mauvaise estimation du poids ou à l'oubli du poids des accessoires. Prévenu par un pesage systématique et le respect strict de la CMU.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chute lors de la maintenance</h3>
            <p>Lors d'une intervention en hauteur sur le pont. Prévenu par le port du harnais et la consignation de l'équipement pendant les travaux.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-durees">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Combien de temps</span>
          <h2 id="titre-durees">Durée et validité</h2>
          <hr className="trait" />
          <p>À titre indicatif&nbsp;; la durée exacte dépend de votre expérience et de la catégorie visée.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Profil</th>
                <th scope="col">Durée indicative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Formation initiale débutant — catégorie 1</td>
                <td>2 à 3 jours</td>
              </tr>
              <tr>
                <td>Formation initiale débutant — catégorie 2</td>
                <td>3 à 4 jours</td>
              </tr>
              <tr>
                <td>Expérimenté (pratique déjà acquise)</td>
                <td>1 à 2 jours</td>
              </tr>
              <tr>
                <td>Recyclage avant expiration</td>
                <td>1 jour</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Le certificat CACES R484 est valable 5 ans à compter de son obtention.</p>
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
            <summary>Comment savoir si mon installation relève de la catégorie 1 ou 2&nbsp;?</summary>
            <p>Cela dépend du mode de commande&nbsp;: si vos opérateurs pilotent depuis le sol (boîtier ou radiocommande), c'est la catégorie 1. S'ils sont installés en cabine, suspendue ou fixe, c'est la catégorie 2, éventuellement complétée par l'option commande au sol.</p>
          </details>

          <details className="faq-item">
            <summary>Pourquoi l'angle d'élingage est-il si important&nbsp;?</summary>
            <p>Parce qu'il modifie directement la charge maximale que l'élingue peut supporter en toute sécurité. Au-delà de 120° entre les brins, le risque de rupture devient inacceptable&nbsp;: c'est pourquoi la formation insiste particulièrement sur ce point.</p>
          </details>

          <details className="faq-item">
            <summary>Mon pont roulant a un bras articulé, est-il couvert par le R484&nbsp;?</summary>
            <p>Non, les ponts à bras articulé non conformes à la norme EN 15011, les chariots suspendus, les palans seuls et les grues d'atelier ne relèvent pas du CACES R484. Contactez-nous pour identifier la formation adaptée à votre équipement.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité du CACES R484&nbsp;?</summary>
            <p>Le certificat est valable 5 ans. Un recyclage est recommandé avant son expiration pour actualiser les connaissances, notamment sur les techniques d'élingage.</p>
          </details>

          <details className="faq-item">
            <summary>Et si mon activité concerne une autre catégorie CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également aux CACES R482 (engins de chantier), R485 (gerbeurs), R486-A (nacelles), R489 (chariots de manutention) et R490 (grues auxiliaires)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R484</h2>
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
              <label htmlFor="categorie">Catégorie concernée</label>
              <select id="categorie" name="categorie">
                <option value="1">Catégorie 1 — commande au sol</option>
                <option value="2">Catégorie 2 — commande en cabine</option>
                <option value="2option">Catégorie 2 + option sol</option>
                <option value="autre">Je ne sais pas encore</option>
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
            <p>Au-delà de la formation, SECURIFORM réalise également la VGP de vos ponts roulants, conformément à la réglementation en vigueur.</p>
            <Link className="btn btn-blanc" href="/vgp-ponts-roulants">VGP des ponts roulants</Link>
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
