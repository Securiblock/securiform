import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation gestes et postures",
      "description": "Formation essentiellement pratique aux gestes et postures de manutention, pour prévenir les troubles musculosquelettiques (TMS), conformément à l'article R4541-8 du Code du travail.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/gestes-postures/"
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
          "name": "Formation gestes et postures",
          "item": "https://securiform.fr/gestes-postures/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation gestes et postures — SECURIFORM",
  description: "SECURIFORM forme aux gestes et postures de manutention pour prévenir les TMS, conformément au Code du travail. Partout en France.",
  alternates: { canonical: "/gestes-postures" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/gestes-postures",
    title: "Formation gestes et postures — SECURIFORM",
    description: "Prévention des TMS, techniques de manutention, ergonomie des postes : SECURIFORM forme vos équipes partout en France.",
    images: ["/image/formation-gestes-postures.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation gestes et postures — SECURIFORM",
    description: "Prévenez les troubles musculosquelettiques avec une formation gestes et postures SECURIFORM.",
    images: ["/image/formation-gestes-postures.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation gestes et postures" style={{ backgroundImage: "url('/image/formation-gestes-postures.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Gestes et postures</span>
        </p>
        <h1>Formation gestes et postures</h1>
        <p>Prévenez les troubles musculosquelettiques et adoptez les bons réflexes de manutention, avec une formation essentiellement pratique.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Une obligation dès qu'il y a manutention</span>
        <h2 id="titre-intro">Les TMS, première cause de maladie professionnelle</h2>
        <hr className="trait" />
        <p>L'article R4541-8 du Code du travail impose à l'employeur d'informer et de former tout salarié dont l'activité comporte des manutentions manuelles&nbsp;: port, levage, poussée, traction ou déplacement de charges. Les troubles musculosquelettiques représentent aujourd'hui 85&nbsp;% des maladies professionnelles reconnues en France, la lombalgie à elle seule en concentrant 20&nbsp;%.</p>
      </div>
    </section>


    

    
<section className="section section-alt" id="parcours" aria-labelledby="titre-principes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Les fondamentaux</span>
          <h2 id="titre-principes">Six principes pour manutentionner en sécurité</h2>
          <hr className="trait" />
          <p>Ces principes constituent le cœur pratique de la formation&nbsp;: ils s'appliquent à chaque geste de manutention, quel que soit le métier.</p>
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <span className="categorie-code">1</span>
            <h3>Se rapprocher de la charge</h3>
            <p>Plus une charge est éloignée du corps, plus la contrainte sur la colonne vertébrale augmente. Il faut l'encadrer avec les pieds avant de la soulever.</p>
          </article>

          <article className="categorie-card reveal">
            <span className="categorie-code">2</span>
            <h3>Chercher l'équilibre</h3>
            <p>Écarter les pieds à la largeur du bassin et décaler légèrement un pied pour créer une base stable avant tout effort.</p>
          </article>

          <article className="categorie-card reveal">
            <span className="categorie-code">3</span>
            <h3>Fléchir les genoux</h3>
            <p>Utiliser la force des jambes, bien plus puissantes que celles du dos, en pliant les genoux plutôt qu'en se penchant en avant.</p>
          </article>

          <article className="categorie-card reveal">
            <span className="categorie-code">4</span>
            <h3>Garder le dos droit</h3>
            <p>Respecter les courbures naturelles de la colonne pendant tout le mouvement, du sol jusqu'à la position debout.</p>
          </article>

          <article className="categorie-card reveal">
            <span className="categorie-code">5</span>
            <h3>Assurer une prise ferme</h3>
            <p>Saisir la charge avec la paume des mains, jamais du bout des doigts, en privilégiant une prise symétrique à deux mains.</p>
          </article>

          <article className="categorie-card reveal">
            <span className="categorie-code">6</span>
            <h3>Pivoter avec les pieds</h3>
            <p>Ne jamais tourner le tronc en portant une charge&nbsp;: se repositionner en déplaçant tout le corps pour éviter les torsions.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-tableau">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Au-delà du geste</span>
          <h2 id="titre-tableau">Adapter le poste, pas seulement le geste</h2>
          <hr className="trait" />
          <p>La formation s'accompagne toujours d'un regard sur l'organisation du poste&nbsp;: un aménagement adapté réduit le risque bien plus durablement qu'un bon réflexe isolé.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Type de poste</th>
                <th scope="col">Risque principal</th>
                <th scope="col">Aménagement clé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manutention répétitive (entrepôt, logistique)</td>
                <td>Flexions répétées du dos</td>
                <td>Hauteur de prélèvement entre 60 cm et 1,20 m</td>
              </tr>
              <tr>
                <td>Poste assis prolongé (bureau)</td>
                <td>Tensions cervicales et lombaires</td>
                <td>Siège réglable, écran à hauteur des yeux</td>
              </tr>
              <tr>
                <td>Poste debout prolongé (production, vente)</td>
                <td>Fatigue des jambes et du dos</td>
                <td>Tapis anti-fatigue, appui fessier</td>
              </tr>
              <tr>
                <td>Aide à la personne (soin, EHPAD)</td>
                <td>Ports de charge humaine</td>
                <td>Lits réglables, lève-personnes, draps de glisse</td>
              </tr>
            </tbody>
          </table>
        </div>
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
            <summary>La formation gestes et postures est-elle obligatoire dans mon entreprise&nbsp;?</summary>
            <p>Elle l'est dès qu'un poste implique des manutentions manuelles&nbsp;: port, levage, poussée, traction ou déplacement de charges. Ce n'est pas réservé à l'industrie&nbsp;: bureaux, commerce, santé et collectivités sont tout autant concernés.</p>
          </details>

          <details className="faq-item">
            <summary>Quand faut-il organiser cette formation&nbsp;?</summary>
            <p>À l'embauche sur un poste à risque, lors d'un changement de poste impliquant des manutentions, après un arrêt de travail de 21 jours ou plus, ou sur recommandation du médecin du travail. Un recyclage tous les 2 à 3 ans est également recommandé.</p>
          </details>

          <details className="faq-item">
            <summary>Existe-t-il des limites de poids à respecter&nbsp;?</summary>
            <p>Les repères couramment retenus sont de 25&nbsp;kg pour un homme et 15&nbsp;kg pour une femme, mais ces seuils dépendent aussi de la fréquence des gestes, de la posture et des aides mécaniques disponibles au poste.</p>
          </details>

          <details className="faq-item">
            <summary>Une ceinture lombaire suffit-elle à protéger le dos&nbsp;?</summary>
            <p>Non. Une ceinture lombaire ne remplace jamais une formation aux bons gestes&nbsp;: utilisée en permanence, elle peut même affaiblir les muscles du dos. Elle reste un outil ponctuel, pas une solution de fond.</p>
          </details>

          <details className="faq-item">
            <summary>La formation s'adapte-t-elle à nos postes réels&nbsp;?</summary>
            <p>Oui&nbsp;: SECURIFORM termine systématiquement la session par une mise en pratique avec le matériel et les charges réellement manipulés dans votre entreprise, pour des corrections individualisées.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation gestes et postures</h2>
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
              <label htmlFor="secteur">Secteur d'activité</label>
              <select id="secteur" name="secteur">
                <option value="industrie">Industrie / logistique</option>
                <option value="sante">Santé / aide à la personne</option>
                <option value="tertiaire">Bureaux / tertiaire</option>
                <option value="commerce">Commerce / restauration</option>
                <option value="collectivite">Collectivité / service public</option>
                <option value="autre">Autre secteur</option>
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
