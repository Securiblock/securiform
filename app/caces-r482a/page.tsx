import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation CACES R482A — Engins de chantier",
      "description": "Formation à la conduite en sécurité des engins de chantier, couvrant les catégories A, B1, B2, B3, C1, C2, C3, D, E, F et G de la recommandation CACES R482. Certificat valable 10 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/formations-a-la-conduite-en-securite-caces/formation-a-la-conduite-en-securite-caces-r482a/"
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
          "item": "https://securiform.fr/accueil/formations-a-la-conduite-en-securite-caces/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CACES R482A",
          "item": "https://securiform.fr/accueil/formations-a-la-conduite-en-securite-caces/formation-a-la-conduite-en-securite-caces-r482a/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R482A — Engins de chantier — SECURIFORM",
  description: "Formation CACES R482A avec SECURIFORM : catégories A, B1, B2, B3, C1, C2, C3, D, E, F, G. Pelles, chargeuses, bulldozers, compacteurs, tombereaux. Certificat valable 10 ans, partout en France.",
  alternates: { canonical: "/caces-r482a" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-r482a",
    title: "Formation CACES® R482A — Engins de chantier — SECURIFORM",
    description: "Toutes les catégories du CACES R482A (A à G) : pelles, chargeuses, bulldozers, compacteurs, tombereaux. Formation SECURIFORM, certificat valable 10 ans.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R482A — SECURIFORM",
    description: "Toutes les catégories d'engins de chantier du CACES R482A, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R482A">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R482A</span>
        </p>
        <h1>Formation CACES® R482A — Engins de chantier</h1>
        <p>Formez-vous à la conduite en sécurité des engins de chantier, quelle que soit la catégorie&nbsp;: pelles, chargeuses, bulldozers, compacteurs, tombereaux et plus encore.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Onze catégories, un seul objectif&nbsp;: conduire en sécurité</h2>
        <hr className="trait" />
        <p>Le CACES R482A couvre l'ensemble des engins de chantier utilisés en travaux publics, terrassement, construction et carrières. SECURIFORM adapte la formation à la catégorie réellement utilisée par vos équipes, pour une certification au plus près de vos équipements.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-categories">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-categories">Les catégories du CACES R482A</h2>
          <hr className="trait" />
          <p>Chaque catégorie correspond à une famille d'engins et à un mode de déplacement précis.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Catégorie</th>
                <th scope="col">Type d'engins</th>
                <th scope="col">Exemples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Engins compacts (≤ 6 t)</td>
                <td>Mini-pelles, mini-chargeuses, petits compacteurs</td>
              </tr>
              <tr>
                <td>B1</td>
                <td>Engins d'extraction à déplacement séquentiel</td>
                <td>Pelles hydrauliques ≥ 6 t, pelles multifonctions</td>
              </tr>
              <tr>
                <td>B2</td>
                <td>Engins de sondage et de forage</td>
                <td>Machines de forage géotechnique</td>
              </tr>
              <tr>
                <td>B3</td>
                <td>Engins rail-route</td>
                <td>Pelles hydrauliques circulant sur voie ferrée et route</td>
              </tr>
              <tr>
                <td>C1</td>
                <td>Engins de chargement à déplacement alterné</td>
                <td>Chargeuses sur pneus ≥ 6 t</td>
              </tr>
              <tr>
                <td>C2</td>
                <td>Engins de réglage à déplacement alterné</td>
                <td>Bulldozers, tracteurs à chenilles</td>
              </tr>
              <tr>
                <td>C3</td>
                <td>Engins de nivellement à déplacement alterné</td>
                <td>Niveleuses (motor-graders)</td>
              </tr>
              <tr>
                <td>D</td>
                <td>Engins de compactage</td>
                <td>Compacteurs à cylindres, compacteurs pneumatiques</td>
              </tr>
              <tr>
                <td>E</td>
                <td>Engins de transport</td>
                <td>Tombereaux, décapeuses</td>
              </tr>
              <tr>
                <td>F</td>
                <td>Chariots de manutention tout-terrain</td>
                <td>Chariots télescopiques, chariots à flèche</td>
              </tr>
              <tr>
                <td>G</td>
                <td>Conduite hors production (option)</td>
                <td>Transfert, chargement sur porte-engin, maintenance</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Vous ne savez pas quelle catégorie correspond à votre matériel&nbsp;? Contactez-nous, nous vous aidons à identifier la bonne formation.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que couvre la formation</span>
          <h2 id="titre-programme">Un programme théorique et pratique complet</h2>
          <p>La partie théorique aborde la réglementation applicable, la technologie des engins (moteur, hydraulique, transmission, dispositifs de sécurité ROPS/FOPS), les catégories CACES, les règles de circulation, les risques du métier et les vérifications d'usage.</p>
          <p>La partie pratique se déroule directement sur les engins&nbsp;: prise de poste, conduite et manœuvres spécifiques à chaque catégorie (fouille pour les pelles, levage pour les chargeuses, nivellement pour les bulldozers, tassement pour les compacteurs), puis fin de poste et maintenance quotidienne.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Répartition théorie/pratique">
          <h3>Répartition type</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> 30 à 50&nbsp;% de théorie en salle</li>
            <li><span className="puce" aria-hidden="true">✓</span> 50 à 70&nbsp;% de pratique sur engins réels</li>
            <li><span className="puce" aria-hidden="true">✓</span> Évaluations progressives tout au long du stage</li>
            <li><span className="puce" aria-hidden="true">✓</span> Test final théorique et pratique par un organisme testeur certifié INRS</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-durees">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Combien de temps</span>
          <h2 id="titre-durees">Une durée adaptée à votre profil</h2>
          <hr className="trait" />
          <p>À titre indicatif&nbsp;; la durée exacte dépend de la catégorie visée et de votre expérience.</p>
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
                <td>Débutant — catégories simples (A, G)</td>
                <td>2 à 3 jours</td>
              </tr>
              <tr>
                <td>Débutant — catégories complexes (B1, C1-C3, D, E)</td>
                <td>3 à 5 jours</td>
              </tr>
              <tr>
                <td>Débutant — catégories très spécialisées (B2, B3)</td>
                <td>4 à 5 jours</td>
              </tr>
              <tr>
                <td>Expérimenté (autre catégorie R482A déjà détenue)</td>
                <td>2 jours environ</td>
              </tr>
              <tr>
                <td>Recyclage avant expiration</td>
                <td>1 à 2 jours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-modalites">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Où se former</span>
          <h2 id="titre-modalites">Trois façons d'organiser la formation</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>En centre SECURIFORM</h3>
            <p>Un parc d'engins varié, des terrains adaptés, et des groupes de 6 à 8 stagiaires maximum pour une pédagogie de qualité.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Sur votre site</h3>
            <p>À partir de 4 à 6 personnes sur une même catégorie, vos équipes s'entraînent directement sur leurs propres engins.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Formation individuelle</h3>
            <p>Pour un besoin urgent ou une catégorie peu demandée, une session sur mesure peut être organisée pour un seul candidat.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient</span>
          <h2 id="titre-risques">Les principaux risques des engins de chantier</h2>
          <hr className="trait" />
          <p>Chacun de ces risques fait l'objet d'une sensibilisation dédiée pendant la formation, théorique puis pratique.</p>
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <h3>Retournement</h3>
            <p>Lié à un terrain instable, une vitesse excessive en virage ou une charge mal équilibrée. Prévenu par la connaissance de la stabilité de l'engin.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Électrocution</h3>
            <p>Par proximité d'une ligne électrique aérienne. Prévenu par le repérage systématique des lignes et le respect des distances de sécurité.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Écrasement de piéton</h3>
            <p>Favorisé par les angles morts des engins. Prévenu par l'inspection à 360° avant démarrage et l'usage systématique de l'avertisseur sonore.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Effondrement de tranchée</h3>
            <p>Lié à un terrain instable ou des parois trop hautes sans blindage. Prévenu par l'analyse du sol et le respect des distances de sécurité au bord.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chute de charge</h3>
            <p>Causée par un élingage mal réalisé ou une surcharge. Prévenu par la vérification systématique des accessoires de levage avant utilisation.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Fatigue de l'opérateur</h3>
            <p>La concentration baisse après plusieurs heures de conduite continue. Prévenu par des pauses régulières et l'auto-évaluation de sa propre vigilance.</p>
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
            <summary>Comment savoir quelle catégorie choisir pour mon engin&nbsp;?</summary>
            <p>Cela dépend du type d'engin, de sa masse et de son usage. Une pelle de moins de 6 tonnes relève de la catégorie A, une pelle plus lourde de la catégorie B1, par exemple. SECURIFORM vous aide à faire correspondre chaque engin à sa catégorie exacte.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je former mes équipes sur plusieurs catégories en une seule session&nbsp;?</summary>
            <p>Certaines catégories proches peuvent être regroupées (A et G par exemple), tandis que les catégories spécialisées (B1, B2, B3, C2, C3) nécessitent généralement des sessions dédiées.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité du CACES R482A&nbsp;?</summary>
            <p>Le certificat est valable 10 ans. Un recyclage est recommandé avant son expiration, idéalement dans les 5 ans précédant l'échéance.</p>
          </details>

          <details className="faq-item">
            <summary>Comment se déroule le test final de certification&nbsp;?</summary>
            <p>Il comprend un test théorique de type QCM (environ 30 à 45 minutes) et un test pratique sur engin (20 à 60 minutes selon la catégorie), réalisés par un organisme testeur certifié, référencé INRS.</p>
          </details>

          <details className="faq-item">
            <summary>Et si mon activité concerne une autre catégorie CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également aux CACES R484 (ponts roulants), R485 (gerbeurs), R486-A (nacelles), R489 (chariots de manutention) et R490 (grues auxiliaires)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R482A</h2>
          <hr className="trait" />
          <p>Complétez ce formulaire, notre équipe revient vers vous rapidement pour organiser votre session.</p>
        </div>

        
        <form className="form-devis reveal" action="#" method="post">
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
              <label htmlFor="categorie">Catégorie(s) concernée(s)</label>
              <select id="categorie" name="categorie">
                <option value="A">A — Engins compacts</option>
                <option value="B1">B1 — Extraction</option>
                <option value="B2">B2 — Sondage/forage</option>
                <option value="B3">B3 — Rail-route</option>
                <option value="C1">C1 — Chargement</option>
                <option value="C2">C2 — Réglage</option>
                <option value="C3">C3 — Nivellement</option>
                <option value="D">D — Compactage</option>
                <option value="E">E — Transport</option>
                <option value="F">F — Manutention tout-terrain</option>
                <option value="G">G — Conduite hors production</option>
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
