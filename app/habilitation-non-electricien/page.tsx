import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Formation personnel non-électricien",
      "description": "Formation aux habilitations H0B0 (exécutant et chargé de chantier), BS, BE Manœuvre, HE Manœuvre et B0L, destinée au personnel non-électricien travaillant en environnement électrique.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/accueil/preparation-habilitation-electrique/formation-personnel-non-electricien/"
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
          "name": "Formation personnel non-électricien",
          "item": "https://securiform.fr/accueil/preparation-habilitation-electrique/formation-personnel-non-electricien/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Formation personnel non-électricien — Habilitation H0B0, BS, BE/HE Manœuvre, B0L — SECURIFORM",
  description: "Formation SECURIFORM pour personnel non-électricien : H0B0 exécutant et chargé de chantier, BS, BE/HE Manœuvre, B0L véhicules électriques. Habilitation délivrée par l'employeur, recyclage tous les 3 ans.",
  alternates: { canonical: "/habilitation-non-electricien" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/habilitation-non-electricien",
    title: "Formation personnel non-électricien — SECURIFORM",
    description: "H0B0, BS, BE/HE Manœuvre, B0L : formation SECURIFORM pour tout personnel non-électricien travaillant en environnement électrique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation personnel non-électricien — SECURIFORM",
    description: "Formez votre personnel non-électricien aux bons réflexes en environnement électrique, avec SECURIFORM.",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Formation personnel non-électricien">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/habilitation-electrique">Préparation à l'habilitation électrique</Link>
          <span aria-hidden="true">›</span>
          <span>Personnel non-électricien</span>
        </p>
        <h1>Formation personnel non-électricien</h1>
        <p>Formez tout collaborateur amené à travailler ou circuler à proximité d'installations électriques, sans jamais y intervenir&nbsp;: H0B0, BS, BE/HE Manœuvre, B0L.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Six symboles pour six situations de travail</h2>
        <hr className="trait" />
        <p>Un personnel non-électricien n'intervient jamais sur une installation électrique&nbsp;: il travaille ou circule à proximité, ou réalise quelques opérations très encadrées (remplacement de fusible, réarmement). Chaque situation correspond à un symbole d'habilitation précis, avec ses propres opérations autorisées et interdites.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-symboles">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-symboles">Les symboles et leur objectif</h2>
          <hr className="trait" />
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Symbole</th>
                <th scope="col">Objectif</th>
                <th scope="col">Durée initiale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H0B0 (exécutant)</td>
                <td>Réaliser des travaux d'ordre non électrique en sécurité</td>
                <td>1 jour</td>
              </tr>
              <tr>
                <td>H0B0 (chargé de chantier)</td>
                <td>Organiser et réaliser ces travaux, en supervisant une équipe</td>
                <td>1,5 jour</td>
              </tr>
              <tr>
                <td>BS</td>
                <td>Remplacer à l'identique fusibles, prises, interrupteurs&nbsp;; réarmer une protection</td>
                <td>1 à 1,5 jour</td>
              </tr>
              <tr>
                <td>BE Manœuvre</td>
                <td>Effectuer des manœuvres d'exploitation en basse tension</td>
                <td>1 à 1,5 jour</td>
              </tr>
              <tr>
                <td>HE Manœuvre</td>
                <td>Effectuer des manœuvres d'exploitation en haute tension</td>
                <td>1 à 1,5 jour</td>
              </tr>
              <tr>
                <td>B0L</td>
                <td>Réaliser des opérations non électriques sur véhicules électriques ou hybrides</td>
                <td>1 jour</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Vous ne savez pas quel symbole correspond à votre activité&nbsp;? Contactez-nous, nous vous aidons à l'identifier.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-zones">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Un repère essentiel</span>
          <h2 id="titre-zones">Les zones d'environnement électrique</h2>
          <hr className="trait" />
          <p>Savoir reconnaître ces zones sur le terrain est la première compétence enseignée&nbsp;: elle conditionne tout le reste.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Zone</th>
                <th scope="col">Niveau de risque</th>
                <th scope="col">Ce qui est autorisé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zone 0</td>
                <td>Aucun risque électrique</td>
                <td>Travail normal, sans restriction</td>
              </tr>
              <tr>
                <td>Zone 1</td>
                <td>Voisinage simple</td>
                <td>Travail autorisé avec vigilance</td>
              </tr>
              <tr>
                <td>Zone 2</td>
                <td>Voisinage renforcé</td>
                <td>Travail autorisé avec protections renforcées</td>
              </tr>
              <tr>
                <td>Zone 3</td>
                <td>Travaux sous tension</td>
                <td>Strictement interdit au personnel non-électricien</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-effets">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Comprendre le danger</span>
          <h2 id="titre-effets">Les effets du courant sur le corps</h2>
          <hr className="trait" />
          <p>Ce n'est pas la tension qui définit le danger réel, mais l'intensité du courant qui traverse le corps.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Intensité</th>
                <th scope="col">Effet sur le corps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Environ 0,5 mA</td>
                <td>Seuil de perception (picotements)</td>
              </tr>
              <tr>
                <td>Environ 10 mA</td>
                <td>Tétanisation musculaire, impossible de se dégager seul</td>
              </tr>
              <tr>
                <td>Environ 30 mA</td>
                <td>Paralysie respiratoire</td>
              </tr>
              <tr>
                <td>75 mA et plus</td>
                <td>Fibrillation cardiaque, risque vital</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-epi">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">S'équiper correctement</span>
          <h2 id="titre-epi">Les équipements de protection individuelle</h2>
          <hr className="trait" />
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Chaussures isolantes</h3>
            <p>Première protection contre l'électrisation, en coupant le passage du courant vers le sol.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Gants isolants</h3>
            <p>Adaptés au niveau de risque, inspectés avant chaque usage pour détecter toute perforation.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Écran facial</h3>
            <p>Protège contre les projections et l'éblouissement en cas d'arc électrique.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Vêtements adaptés</h3>
            <p>Manches longues, matières non synthétiques, sans élément métallique apparent.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-etapes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">En cas d'accident</span>
          <h2 id="titre-etapes">Les bons réflexes face à une électrisation</h2>
          <hr className="trait" />
        </div>
        <div className="etapes">
          <div className="etape reveal">
            <h3>Ne jamais toucher</h3>
            <p>Ne jamais toucher directement une personne encore en contact avec une source électrique.</p>
          </div>
          <div className="etape reveal">
            <h3>Couper l'alimentation</h3>
            <p>Si possible et sans danger, couper le courant avant toute approche.</p>
          </div>
          <div className="etape reveal">
            <h3>Écarter si besoin</h3>
            <p>Si la coupure est impossible, écarter la victime uniquement avec un objet isolant (bois sec, plastique).</p>
          </div>
          <div className="etape reveal">
            <h3>Alerter les secours</h3>
            <p>Contacter le 15 ou le 18 et suivre leurs consignes en attendant leur arrivée.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-evaluation">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Après la formation</span>
          <h2 id="titre-evaluation">De l'évaluation à l'habilitation</h2>
          <p>La formation se termine par une évaluation théorique (questionnaire) et une évaluation pratique (mise en situation). SECURIFORM transmet ensuite un avis après formation à l'employeur&nbsp;: favorable ou défavorable, selon les résultats obtenus.</p>
          <p>C'est ensuite l'employeur, et lui seul, qui délivre le titre d'habilitation à son salarié, sur la base de cet avis. L'habilitation est valable 3 ans&nbsp;; un recyclage permet de la renouveler avant son expiration.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="À retenir">
          <h3>À retenir</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Évaluation théorique et pratique en fin de stage</li>
            <li><span className="puce" aria-hidden="true">✓</span> Avis après formation transmis à l'employeur</li>
            <li><span className="puce" aria-hidden="true">✓</span> Habilitation délivrée par l'employeur, pas par SECURIFORM</li>
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
            <summary>Quelle est la différence entre H0B0 exécutant et chargé de chantier&nbsp;?</summary>
            <p>L'exécutant réalise les travaux confiés. Le chargé de chantier, en plus de réaliser ces travaux, supervise une équipe, organise la zone de travail et veille au respect des consignes de sécurité par ses collègues.</p>
          </details>

          <details className="faq-item">
            <summary>Le BS permet-il de faire n'importe quelle réparation électrique&nbsp;?</summary>
            <p>Non, le BS se limite à des opérations très encadrées&nbsp;: remplacement à l'identique de fusibles, prises ou interrupteurs, raccordement simple sur circuit en attente, et réarmement de protections. Toute autre intervention nécessite une habilitation électricien.</p>
          </details>

          <details className="faq-item">
            <summary>Qu'est-ce que le B0L et qui est concerné&nbsp;?</summary>
            <p>Le B0L habilite à réaliser des opérations non électriques (carrosserie, nettoyage) sur des véhicules électriques ou hybrides, en tenant compte des circuits haute tension embarqués propres à ces véhicules, selon la norme NF C18-550.</p>
          </details>

          <details className="faq-item">
            <summary>Qui délivre l'habilitation à la fin de la formation&nbsp;?</summary>
            <p>SECURIFORM évalue le stagiaire et transmet un avis après formation. C'est ensuite l'employeur qui délivre l'habilitation proprement dite, en tenant compte de cet avis et de sa propre connaissance du poste concerné.</p>
          </details>

          <details className="faq-item">
            <summary>Et pour le personnel électricien&nbsp;?</summary>
            <p>SECURIFORM propose une formation dédiée au personnel électricien (B1, B2, BR, BC, BE essai, H1, H2, HC, HE essai)&nbsp;: retrouvez le détail sur notre page Préparation à l'habilitation électrique.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une formation personnel non-électricien</h2>
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
                <option value="h0b0-executant">H0B0 — exécutant</option>
                <option value="h0b0-chantier">H0B0 — chargé de chantier</option>
                <option value="bs">BS</option>
                <option value="be">BE Manœuvre</option>
                <option value="he">HE Manœuvre</option>
                <option value="b0l">B0L — véhicules électriques</option>
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
