import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation CACES R489 — Chariots de manutention",
      "description": "Formation à la conduite en sécurité des chariots de manutention à conducteur porté, couvrant les catégories 1 à 6 de la recommandation R489 : transpalettes, gerbeurs, chariots élévateurs en porte-à-faux et à mât rétractable. Certificat valable 5 ans.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/caces-r489/"
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
          "name": "CACES R489",
          "item": "https://securiform.fr/caces-r489/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation CACES® R489 — SECURIFORM",
  description: "Formation CACES R489 avec SECURIFORM : catégories 1 à 6, transpalettes, gerbeurs, chariots en porte-à-faux et à mât rétractable. 5 ans.",
  alternates: { canonical: "/caces-r489" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/caces-r489",
    title: "Formation CACES® R489 — Chariots de manutention — SECURIFORM",
    description: "Catégories 1 à 6 : transpalettes, gerbeurs, chariots élévateurs en porte-à-faux et à mât rétractable. Formation SECURIFORM, certificat valable 5 ans.",
    images: ["/image/caces-r489.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation CACES® R489 — SECURIFORM",
    description: "Conduite en sécurité des chariots de manutention à conducteur porté, avec SECURIFORM.",
    images: ["/image/caces-r489.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation CACES R489" style={{ backgroundImage: "url('/image/caces-r489.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/caces">Conduite en sécurité et CACES®</Link>
          <span aria-hidden="true">›</span>
          <span>CACES R489</span>
        </p>
        <h1>Formation CACES® R489 — Chariots de manutention</h1>
        <p>Formez-vous à la conduite en sécurité des chariots de manutention à conducteur porté&nbsp;: transpalettes, gerbeurs, chariots élévateurs en porte-à-faux et à mât rétractable.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Le CACES® le plus répandu en entrepôt et en logistique</h2>
        <hr className="trait" />
        <p>Le CACES R489 encadre la conduite des chariots de manutention à conducteur porté, c'est-à-dire ceux sur lesquels le cariste prend place à bord. Il se décline en six catégories, selon le type de chariot et sa capacité de charge. SECURIFORM adapte la formation à la catégorie réellement utilisée par vos équipes.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-categories">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-categories">Les six catégories du CACES R489</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Catégorie</th>
                <th scope="col">Type de chariot</th>
                <th scope="col">Exemples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Transpalettes et gerbeurs à conducteur porté, à petite levée</td>
                <td>Transpalettes électriques, gerbeurs légers</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Chariots tracteurs et à plateau porteur (≤ 6&nbsp;000 kg)</td>
                <td>Tracteurs de convois, chariots à plateau</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Chariots élévateurs en porte-à-faux (≤ 6&nbsp;000 kg)</td>
                <td>Chariots élévateurs standards d'entrepôt</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Chariots élévateurs en porte-à-faux (&gt; 6&nbsp;000 kg)</td>
                <td>Chariots élévateurs lourds, ports et industries</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Chariots élévateurs à mât rétractable</td>
                <td>Chariots pour allées étroites en entrepôt</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Conduite hors production</td>
                <td>Déplacement, transfert, chargement sur porteur, essais</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Vous ne savez pas quelle catégorie correspond à votre matériel&nbsp;? Contactez-nous, nous vous aidons à l'identifier.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-programme">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Ce que couvre la formation</span>
          <h2 id="titre-programme">Un programme théorique et pratique complet</h2>
          <p>La partie théorique aborde la réglementation applicable (recommandation R489 de la CNAM), la technologie du chariot (mât, fourches, batterie ou moteur thermique), les règles de circulation en entrepôt, les risques liés à la manutention et les vérifications d'usage avant chaque utilisation.</p>
          <p>La partie pratique se déroule sur un chariot réel&nbsp;: prise et dépose de charges, circulation en allées, gerbage à différentes hauteurs selon la catégorie, puis fin de poste et mise en charge de la batterie.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Répartition théorie/pratique">
          <h3>Répartition type</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Théorie&nbsp;: réglementation, technologie, circulation</li>
            <li><span className="puce" aria-hidden="true">✓</span> Pratique&nbsp;: manœuvres en conditions réelles d'entrepôt</li>
            <li><span className="puce" aria-hidden="true">✓</span> Évaluations progressives tout au long du stage</li>
            <li><span className="puce" aria-hidden="true">✓</span> Test final par un organisme testeur certifié INRS</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La bonne méthode</span>
          <h2 id="titre-etapes">Utiliser un chariot élévateur en 4 temps</h2>
          <hr className="trait" />
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Vérifier</h3>
            <p>Contrôler l'état des fourches, du mât, des pneumatiques et le niveau de charge avant démarrage.</p>
          </div>
          <div className="etape reveal">
            <h3>Prendre la charge</h3>
            <p>Engager les fourches bien centrées, en respectant la capacité indiquée sur la plaque de charge.</p>
          </div>
          <div className="etape reveal">
            <h3>Circuler</h3>
            <p>Adapter sa vitesse aux allées, aux piétons et à la visibilité, charge abaissée pendant les déplacements.</p>
          </div>
          <div className="etape reveal">
            <h3>Gerber</h3>
            <p>Positionner la charge en hauteur avec une visibilité dégagée et un mât parfaitement vertical.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce que la formation prévient</span>
          <h2 id="titre-risques">Les principaux risques du chariot de manutention</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Basculement</h3>
            <p>Lié à une charge trop élevée par rapport à la capacité du chariot ou à un virage trop rapide. Prévenu par le respect strict du diagramme de charge.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Écrasement de piéton</h3>
            <p>Favorisé par les angles morts du chariot chargé. Prévenu par une vitesse adaptée et l'usage systématique de l'avertisseur sonore.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Chute de charge</h3>
            <p>Causée par une charge mal palettisée ou un mât mal réglé. Prévenu par une prise de charge centrée et un mât vertical avant déplacement.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Collision</h3>
            <p>Avec un rayonnage, un autre engin ou une structure fixe. Prévenu par une circulation à vitesse réduite et une signalisation aux intersections.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-durees">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Combien de temps</span>
          <h2 id="titre-durees">Durée et validité</h2>
          <hr className="trait" />
          <p>À titre indicatif&nbsp;; la durée exacte dépend de votre expérience et de la ou des catégories visées.</p>
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
                <td>Formation initiale débutant — une catégorie</td>
                <td>2 à 3 jours</td>
              </tr>
              <tr>
                <td>Formation initiale débutant — plusieurs catégories</td>
                <td>3 à 5 jours</td>
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
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Le certificat CACES R489 est valable 5 ans à compter de son obtention.</p>
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
            <summary>Comment savoir quelle catégorie choisir pour mon chariot&nbsp;?</summary>
            <p>Cela dépend du type de chariot et de sa capacité de charge. Un transpalette ou un gerbeur léger relève de la catégorie 1, un chariot élévateur standard de la catégorie 3, par exemple. SECURIFORM vous aide à faire correspondre chaque chariot à sa catégorie exacte.</p>
          </details>

          <details className="faq-item">
            <summary>Puis-je former mes équipes sur plusieurs catégories en une seule session&nbsp;?</summary>
            <p>Oui, lorsque les catégories sont proches (3 et 5 par exemple), une formation combinée est possible et permet d'optimiser le temps de formation par rapport à des sessions séparées.</p>
          </details>

          <details className="faq-item">
            <summary>Qu'est-ce que la catégorie 6&nbsp;?</summary>
            <p>Elle concerne la conduite hors production&nbsp;: déplacement d'un chariot, chargement sur porteur, transfert entre sites, essais ou démonstrations, sans activité de manutention proprement dite.</p>
          </details>

          <details className="faq-item">
            <summary>Quelle est la durée de validité du CACES R489&nbsp;?</summary>
            <p>Le certificat est valable 5 ans. Un recyclage est recommandé avant son expiration pour actualiser vos connaissances et prolonger la validité.</p>
          </details>

          <details className="faq-item">
            <summary>Et si mon activité concerne une autre catégorie CACES®&nbsp;?</summary>
            <p>SECURIFORM prépare également aux CACES R482 (engins de chantier), R484 (ponts roulants), R485 (gerbeurs accompagnants), R486-A (nacelles) et R490 (grues auxiliaires)&nbsp;: retrouvez le détail sur notre page Conduite en sécurité et CACES®.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation CACES® R489</h2>
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
              <label htmlFor="categorie">Catégorie(s) concernée(s)</label>
              <select id="categorie" name="categorie">
                <option value="1">1 — Transpalettes, gerbeurs</option>
                <option value="2">2 — Tracteurs, plateau porteur</option>
                <option value="3">3 — Porte-à-faux ≤ 6 000 kg</option>
                <option value="4">4 — Porte-à-faux &gt; 6 000 kg</option>
                <option value="5">5 — Mât rétractable</option>
                <option value="6">6 — Conduite hors production</option>
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
            <p>Au-delà de la formation, SECURIFORM réalise également la VGP de vos chariots élévateurs, conformément à la réglementation en vigueur.</p>
            <Link className="btn btn-blanc" href="/vgp-chariots-elevateurs">VGP des chariots élévateurs</Link>
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
