import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation personnel électricien",
      "description": "Formation aux habilitations B1, B2, BR, BC, BE essai (basse tension), H1, H2, HC (haute tension) et B1L, B2L, BRL, BCL (véhicules électriques), destinée au personnel électricien.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/preparation-habilitation-electrique/formation-personnel-electricien/"
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
          "item": "https://securiform.fr/accueil/preparation-habilitation-electrique/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Formation personnel électricien",
          "item": "https://securiform.fr/accueil/preparation-habilitation-electrique/formation-personnel-electricien/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation personnel électricien — B1-B2-BR-BC, H1-H2-HC — SECURIFORM",
  description: "Formation SECURIFORM pour personnel électricien : B1-B2-BR-BC-BE essai en basse tension, H1-H2-HC en haute tension, B1L-B2L-BRL-BCL véhicules électriques. Consignation en 5 étapes, recyclage tous les 3 ans.",
  alternates: { canonical: "/habilitation-electricien" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/habilitation-electricien",
    title: "Formation personnel électricien — SECURIFORM",
    description: "B1-B2-BR-BC, H1-H2-HC : formation SECURIFORM pour le personnel électricien, en basse et haute tension.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation personnel électricien — SECURIFORM",
    description: "Formez vos électriciens à la consignation, aux travaux BT/HTA, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation personnel électricien">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/habilitation-electrique">Préparation à l'habilitation électrique</Link>
          <span aria-hidden="true">›</span>
          <span>Personnel électricien</span>
        </p>
        <h1>Formation personnel électricien</h1>
        <p>De l'exécutant au chargé de consignation, en basse comme en haute tension&nbsp;: une progression complète pour vos électriciens.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Une progression, du terrain à la consignation</h2>
        <hr className="trait" />
        <p>Le personnel électricien évolue selon un parcours structuré&nbsp;: exécutant sous supervision (B1), puis chargé de travaux (B2), intervention autonome (BR) ou consignation (BC) en basse tension. La haute tension (H1, H2, HC) suit la même logique, mais nécessite toujours une expérience préalable en basse tension. Un parcours spécifique existe aussi pour les véhicules électriques et hybrides (B1L, B2L, BRL, BCL), selon la norme NF C18-550.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-bt">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Basse tension</span>
          <h2 id="titre-bt">Les symboles B1 à BC</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Symbole</th>
                <th scope="col">Rôle</th>
                <th scope="col">Durée initiale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B1 / B1V</td>
                <td>Exécutant, travaille sous la direction d'un chargé de travaux B2</td>
                <td>3 jours</td>
              </tr>
              <tr>
                <td>B2 / B2V</td>
                <td>Chargé de travaux, dirige et encadre une équipe B1</td>
                <td>3 jours</td>
              </tr>
              <tr>
                <td>BR</td>
                <td>Intervention générale en autonomie complète (dépannage, maintenance)</td>
                <td>3 jours</td>
              </tr>
              <tr>
                <td>BC</td>
                <td>Chargé de consignation, responsable de la mise hors tension</td>
                <td>3 jours</td>
              </tr>
              <tr>
                <td>BE essai</td>
                <td>Réalisation d'essais, vérifications et mesurages spécialisés</td>
                <td>1 à 1,5 jour en complément</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>La lettre V (B1V, B2V) autorise le travail au voisinage de pièces nues sous tension.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-hta">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Haute tension</span>
          <h2 id="titre-hta">Les symboles H1 à HC</h2>
          <hr className="trait" />
          <p>Un prérequis s'applique systématiquement&nbsp;: une expérience en basse tension (B1 pour H1, B2 pour H2) est nécessaire avant d'accéder à la haute tension.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Symbole</th>
                <th scope="col">Rôle</th>
                <th scope="col">Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H1 / H1V</td>
                <td>Exécutant en haute tension, sous la direction d'un H2</td>
                <td>3 jours (ou 1 jour en complément si B1 déjà acquis)</td>
              </tr>
              <tr>
                <td>H2 / H2V</td>
                <td>Chargé de travaux en haute tension</td>
                <td>3 jours (ou 1 jour en complément si B2 déjà acquis)</td>
              </tr>
              <tr>
                <td>HC</td>
                <td>Chargé de consignation en haute tension, rôle le plus critique</td>
                <td>3 à 4 jours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>SECURIFORM prépare également aux symboles B1L, B2L, BRL et BCL pour les véhicules électriques et hybrides, selon la norme NF C18-550.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-consignation">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La compétence critique</span>
          <h2 id="titre-consignation">La consignation en 5 étapes</h2>
          <hr className="trait" />
          <p>C'est le cœur de la formation du chargé de consignation (BC ou HC)&nbsp;: chaque étape doit être respectée dans cet ordre, sans exception.</p>
        </div>
        <div className="etapes cols-5">
          <div className="etape reveal">
            <h3>1. Séparer</h3>
            <p>Ouvrir les dispositifs de coupure pour isoler la source de tension, sur tous les circuits concernés.</p>
          </div>
          <div className="etape reveal">
            <h3>2. Condamner</h3>
            <p>Verrouiller physiquement les dispositifs de séparation avec un cadenas, pour empêcher toute remise sous tension.</p>
          </div>
          <div className="etape reveal">
            <h3>3. Identifier</h3>
            <p>Vérifier que l'installation consignée correspond bien à celle sur laquelle l'intervention doit avoir lieu.</p>
          </div>
          <div className="etape reveal">
            <h3>4. Vérifier l'absence de tension</h3>
            <p>Tester chaque conducteur avec un détecteur normalisé, en trois temps&nbsp;: sur une source connue sous tension, sur l'installation consignée, puis à nouveau sur une source sous tension pour confirmer le bon fonctionnement du détecteur.</p>
          </div>
          <div className="etape reveal">
            <h3>5. Mettre à la terre</h3>
            <p>Relier les conducteurs à la terre et les mettre en court-circuit, pour éliminer tout risque de réalimentation accidentelle.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-evaluation">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Après la formation</span>
          <h2 id="titre-evaluation">Une évaluation d'autant plus stricte que le rôle est critique</h2>
          <p>Chaque symbole se termine par une évaluation théorique et une mise en situation pratique. Pour les habilitations les plus sensibles (BC, H1, H2, HC), les critères sont renforcés&nbsp;: expérience préalable exigée, et tolérance minimale aux erreurs lors de la mise en situation.</p>
          <p>SECURIFORM transmet ensuite un avis après formation à l'employeur, qui reste seul décisionnaire de la délivrance du titre d'habilitation. Celui-ci est valable 3 ans, avant un recyclage obligatoire.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Évaluation théorique et mise en situation pratique</li>
            <li><span className="puce" aria-hidden="true">✓</span> Critères renforcés pour BC, H1, H2 et HC</li>
            <li><span className="puce" aria-hidden="true">✓</span> Avis transmis à l'employeur, qui délivre l'habilitation</li>
            <li><span className="puce" aria-hidden="true">✓</span> Validité de 3 ans, recyclage avant expiration</li>
          </ul>
        </aside>
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
            <summary>Quelle est la différence entre B1, B2, BR et BC&nbsp;?</summary>
            <p>B1 exécute des travaux sous la direction d'un B2. B2 dirige une équipe et porte la responsabilité du chantier. BR intervient seul, en autonomie complète, pour du dépannage ou de la maintenance. BC est chargé de la consignation, l'étape la plus sensible avant toute intervention hors tension.</p>
          </details>

          <details className="faq-item">
            <summary>Peut-on accéder directement à la haute tension sans passer par la basse tension&nbsp;?</summary>
            <p>Non. La formation H1 nécessite une expérience préalable en B1, et la formation H2 une expérience en B2. C'est une progression obligatoire, pas une option.</p>
          </details>

          <details className="faq-item">
            <summary>Pourquoi la vérification d'absence de tension se fait-elle en trois temps&nbsp;?</summary>
            <p>Pour s'assurer que le détecteur fonctionne réellement&nbsp;: on le teste d'abord sur une source sous tension connue, puis sur l'installation consignée (qui doit indiquer zéro), puis à nouveau sur une source sous tension pour confirmer qu'il n'est pas tombé en panne entre-temps.</p>
          </details>

          <details className="faq-item">
            <summary>Qui peut devenir chargé de consignation (BC ou HC)&nbsp;?</summary>
            <p>Ce sont les habilitations les plus sélectives&nbsp;: elles demandent plusieurs années d'expérience électrique, une formation B2 ou H2 préalable, et une évaluation particulièrement exigeante, compte tenu de la responsabilité engagée.</p>
          </details>

          <details className="faq-item">
            <summary>Et pour le personnel non-électricien&nbsp;?</summary>
            <p>SECURIFORM propose une formation dédiée au personnel non-électricien (H0B0, BS, BE/HE Manœuvre, B0L)&nbsp;: retrouvez le détail sur notre page Formation personnel non-électricien.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation personnel électricien</h2>
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
              <label htmlFor="symbole">Symbole souhaité</label>
              <select id="symbole" name="symbole">
                <option value="b1">B1 / B1V — exécutant BT</option>
                <option value="b2">B2 / B2V — chargé de travaux BT</option>
                <option value="br">BR — intervention générale</option>
                <option value="bc">BC — chargé de consignation BT</option>
                <option value="h1">H1 / H1V — exécutant HTA</option>
                <option value="h2">H2 / H2V — chargé de travaux HTA</option>
                <option value="hc">HC — chargé de consignation HTA</option>
                <option value="vehicules">B1L / B2L / BRL / BCL — véhicules électriques</option>
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
