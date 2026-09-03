import type { Metadata } from "next";
import Link from "next/link";
import { submitForm } from "@/app/actions";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Poids de test VGP",
      "description": "Comprendre l'épreuve de charge réalisée lors d'une VGP d'engin de levage, le rôle des blocs béton de masse certifiée, et le protocole suivi par les vérificateurs.",
      "publisher": {
        "@type": "EducationalOrganization",
        "name": "SECURIFORM",
        "url": "https://securiform.fr/"
      },
      "url": "https://securiform.fr/vgp/poids-de-test-vgp/"
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Poids de test VGP",
          "item": "https://securiform.fr/vgp/poids-de-test-vgp/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Poids de test VGP — SECURIFORM",
  description: "VGP obligatoire : utilisez des blocs béton de masse certifiée pour tester la capacité de charge de vos engins de levage.",
  alternates: { canonical: "/poids-de-test-vgp" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/poids-de-test-vgp",
    title: "Poids de test VGP — SECURIFORM",
    description: "Blocs béton de masse certifiée, épreuves de charge, protocole en 6 étapes : tout savoir sur les poids de test lors d'une VGP.",
    images: ["/image/vgp-accessoires-levage.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poids de test VGP — SECURIFORM",
    description: "Comprendre l'épreuve de charge lors d'une VGP et le rôle des blocs béton certifiés.",
    images: ["/image/vgp-accessoires-levage.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    

    
<section className="page-hero" aria-label="Poids de test VGP" style={{ backgroundImage: "url('/image/vgp-accessoires-levage.jpg')" }}>
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <Link href="/vgp">VGP</Link>
          <span aria-hidden="true">›</span>
          <span>Poids de test</span>
        </p>
        <h1>Poids de test VGP</h1>
        <p>Tester la capacité de charge réelle de vos engins de levage avec des blocs béton de masse certifiée, pour établir un rapport de VGP conforme.</p>
        <a href="#devis" className="btn btn-plein">Demander un devis</a>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-intro">
      <div className="container section-head reveal">
        <span className="surtitre">Vue d'ensemble</span>
        <h2 id="titre-intro">Au-delà du contrôle visuel, l'épreuve de charge</h2>
        <hr className="trait" />
        <p>La Vérification Générale Périodique est une obligation réglementaire issue du décret du 1er mars 2004, codifiée aux articles R.4323-22 et suivants du Code du travail. Elle s'impose à tout employeur mettant à disposition de ses salariés des équipements de levage soumis à des risques de détérioration. Réalisée par une personne qualifiée, interne ou externe, la VGP ne se limite pas à un contrôle visuel&nbsp;: elle comprend des épreuves de fonctionnement, qui impliquent de soumettre l'engin à une charge de test représentative de sa capacité nominale.</p>
        <p style={{ "marginTop": "1.5rem" }}><strong>Responsabilité de l'employeur&nbsp;:</strong> en cas d'accident impliquant un engin dont la VGP n'est pas à jour, ou dont les résultats ont été ignorés, la responsabilité pénale de l'employeur peut être directement engagée. Le registre de sécurité doit conserver toutes les attestations de VGP.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-types">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Bien s'y retrouver</span>
          <h2 id="titre-types">Les différents types de VGP selon les engins</h2>
          <hr className="trait" />
          <p>La fréquence et le contenu des vérifications varient selon la nature de l'engin, son environnement d'utilisation et les textes réglementaires applicables.</p>
        </div>
        <div className="grille-categories cols-3">

          <article className="categorie-card reveal">
            <span className="categorie-code">12 mois</span>
            <h3>VGP annuelle</h3>
            <p>Applicable à la majorité des engins de levage en usage standard&nbsp;: examen de l'état général, des organes de sécurité et épreuve de charge. Chariots élévateurs, télescopiques.</p>
          </article>

          <article className="categorie-card reveal">
            <span className="categorie-code">6 mois</span>
            <h3>VGP semestrielle</h3>
            <p>Imposée pour les engins soumis à des conditions d'utilisation plus sévères ou présentant des risques particuliers. Grues, ponts roulants, PEMP.</p>
          </article>

          <article className="categorie-card reveal">
            <span className="categorie-code">Mise en service</span>
            <h3>VGP initiale</h3>
            <p>Obligatoire avant toute première utilisation d'un engin neuf ou remis en service après modification, réparation importante ou changement d'implantation.</p>
          </article>

        </div>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-plaque">
      <div className="container presentation">
        <div className="presentation-txt reveal">
          <span className="surtitre">Le document de référence</span>
          <h2 id="titre-plaque">La plaque constructeur</h2>
          <p>Chaque engin de levage est équipé d'une plaque signalétique fixée par le constructeur, document de référence absolu pour déterminer sa capacité de charge nominale selon les conditions d'utilisation. Elle indique notamment la capacité nominale, le centre de charge et la hauteur de levée&nbsp;: la charge test correspond généralement à 110&nbsp;% de cette capacité nominale.</p>
        </div>
        <aside className="presentation-visuel reveal" aria-label="Ce que le vérificateur doit contrôler">
          <h3>Ce que le vérificateur contrôle</h3>
          <ul className="valeurs">
            <li><span className="puce" aria-hidden="true">✓</span> Lisibilité et conformité de la plaque constructeur</li>
            <li><span className="puce" aria-hidden="true">✓</span> Adéquation entre la charge manipulée et la capacité nominale</li>
            <li><span className="puce" aria-hidden="true">✓</span> Comportement sous charge&nbsp;: stabilité, freinage, descente</li>
            <li><span className="puce" aria-hidden="true">✓</span> Fonctionnement des dispositifs de sécurité sous charge</li>
            <li><span className="puce" aria-hidden="true">✓</span> Absence de déformation, fissure ou jeu anormal</li>
          </ul>
        </aside>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-beton">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Une masse fiable et documentée</span>
          <h2 id="titre-beton">Pourquoi des blocs béton&nbsp;?</h2>
          <hr className="trait" />
          <p>Réaliser une épreuve de charge suppose de disposer d'une masse parfaitement connue, stable et manipulable par l'engin à tester&nbsp;: c'est précisément ce que permettent les blocs béton conçus pour la manutention.</p>
        </div>
        <div className="grille-categories cols-2">

          <article className="categorie-card reveal">
            <h3>Avantages du béton</h3>
            <p>Masse constante et certifiée à la fabrication, tolérance documentée, dimensions standardisées pour prise en fourche, aucune déformation sous charge répétée, résistance aux conditions extérieures et au gel.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Ce qu'il faut éviter</h3>
            <p>Charges en vrac ou palettes lestées artisanalement (masse non certifiable), charges liquides (centre de gravité instable), charges métalliques non documentées, estimation visuelle&nbsp;: inadmissible pour un rapport de VGP.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>⚠️ Le rapport de VGP doit mentionner la charge utilisée lors de l'épreuve&nbsp;: une charge de masse indéterminée invalide le rapport et engage la responsabilité du vérificateur.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-protocole">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">La méthode</span>
          <h2 id="titre-protocole">Réaliser un test de levage en 6 étapes</h2>
          <hr className="trait" />
          <p>Le protocole d'épreuve de charge suit une logique précise, telle qu'appliquée par les organismes de vérification agréés.</p>
        </div>
        <div className="etapes cols-3">
          <div className="etape reveal">
            <h3>1. Vérifier la plaque</h3>
            <p>Consulter la plaque constructeur pour déterminer capacité nominale, centre de charge et hauteur maximale de levée.</p>
          </div>
          <div className="etape reveal">
            <h3>2. Sélectionner les blocs</h3>
            <p>Composer la charge de test avec des blocs béton dont la masse certifiée correspond à 100 à 110&nbsp;% de la capacité nominale.</p>
          </div>
          <div className="etape reveal">
            <h3>3. Épreuve statique</h3>
            <p>Soulever la charge à hauteur nominale et la maintenir en suspension, en observant la stabilité de l'engin.</p>
          </div>
          <div className="etape reveal">
            <h3>4. Épreuve dynamique</h3>
            <p>Déplacer, lever et abaisser la charge selon un parcours défini, en contrôlant freinage et précision de dépose.</p>
          </div>
          <div className="etape reveal">
            <h3>5. Contrôle après épreuve</h3>
            <p>Inspecter l'engin après remise au sol&nbsp;: déformation, fuite hydraulique, échauffement, jeu apparu.</p>
          </div>
          <div className="etape reveal">
            <h3>6. Rédiger le rapport</h3>
            <p>Consigner résultats, charge utilisée, observations et prescriptions, puis verser le rapport au registre de sécurité.</p>
          </div>
        </div>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-charges">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Des repères concrets</span>
          <h2 id="titre-charges">Charges de test recommandées par type d'engin</h2>
          <hr className="trait" />
          <p>Ordres de grandeur couramment utilisés, pour une épreuve à 110&nbsp;% de la charge nominale&nbsp;— la configuration la plus fréquente.</p>
        </div>
        <div className="table-scroll reveal">
          <table className="tableau-comparatif">
            <thead>
              <tr>
                <th scope="col">Type d'engin</th>
                <th scope="col">CACES associé</th>
                <th scope="col">Capacité nominale</th>
                <th scope="col">Charge test (110&nbsp;%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chariot contrebalancé</td>
                <td>R489 cat. 3</td>
                <td>2 500 kg</td>
                <td>2 750 kg</td>
              </tr>
              <tr>
                <td>Chariot à mât rétractable</td>
                <td>R489 cat. 4</td>
                <td>1 600 kg</td>
                <td>1 760 kg</td>
              </tr>
              <tr>
                <td>Chariot tout-terrain</td>
                <td>R489 cat. 3</td>
                <td>3 000 kg</td>
                <td>3 300 kg</td>
              </tr>
              <tr>
                <td>Télescopique chantier</td>
                <td>R489 cat. 8</td>
                <td>4 000 kg</td>
                <td>4 400 kg</td>
              </tr>
              <tr>
                <td>Télescopique rotatif</td>
                <td>R484</td>
                <td>3 500 kg</td>
                <td>3 850 kg</td>
              </tr>
              <tr>
                <td>Gerbeur électrique</td>
                <td>R489 cat. 2</td>
                <td>1 200 kg</td>
                <td>1 320 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}>Ces configurations sont indicatives&nbsp;: l'essentiel est que la masse totale soit documentée et tracée dans le rapport de VGP.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-mutualisation">
      <div className="container section-head reveal">
        <span className="surtitre">Une polyvalence utile</span>
        <h2 id="titre-mutualisation">VGP et formation CACES®&nbsp;: un même outil, deux usages</h2>
        <hr className="trait" />
        <p>Il est courant que les centres de formation CACES® et les services maintenance des entreprises utilisent les mêmes blocs béton pour deux finalités distinctes&nbsp;: les exercices pédagogiques d'une part, et les épreuves de charge lors des VGP d'autre part. Un parc de blocs béton bien dimensionné couvre ainsi les besoins du plateau technique de formation et les besoins de vérification périodique du parc d'engins, sans investissement supplémentaire. Pour les entreprises et centres de formation souhaitant disposer de charges certifiées utilisables dans les deux cas, des fabricants spécialisés comme <a href="https://www.securiblock.fr" style={{ "color": "var(--rouge)", "fontWeight": "700" }}>Securiblock</a> proposent des blocs de lest en plusieurs formats, conçus pour les fourches standard des engins couverts par les recommandations R489 et R484, avec la traçabilité nécessaire à l'établissement d'un rapport de VGP valide.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-risques">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Ce qui est en jeu</span>
          <h2 id="titre-risques">Ce que risque une entreprise sans VGP conforme</h2>
          <hr className="trait" />
          <p>L'absence de VGP, ou une VGP réalisée avec une charge de test non documentée, expose l'employeur à plusieurs risques cumulables.</p>
        </div>
        <div className="grille-categories cols-4">

          <article className="categorie-card reveal">
            <h3>Mise en demeure</h3>
            <p>L'inspection du travail peut imposer un délai d'immobilisation de l'engin non conforme.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Responsabilité pénale</h3>
            <p>Engagée en cas d'accident lié à un défaut non détecté faute de vérification.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Refus d'assurance</h3>
            <p>Possible en cas de sinistre sur un engin dont la VGP n'était pas à jour.</p>
          </article>

          <article className="categorie-card reveal">
            <h3>Invalidation du CACES®</h3>
            <p>Le CACES des opérateurs peut être invalidé si l'engin est déclaré non conforme a posteriori.</p>
          </article>

        </div>
        <p style={{ "textAlign": "center", "marginTop": "2rem", "color": "var(--gris)" }}><strong>Bonne pratique&nbsp;:</strong> planifiez vos VGP en anticipant d'au moins 4 semaines l'échéance réglementaire, pour commander les blocs de test si nécessaire et traiter les éventuelles prescriptions à temps.</p>
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
            <summary>Peut-on utiliser la charge habituelle de production pour l'épreuve de VGP&nbsp;?</summary>
            <p>Ce n'est pas recommandé&nbsp;: sa masse n'est généralement pas documentée avec précision, et son usage répété comme charge de test peut l'endommager. Les blocs béton certifiés restent la solution la plus fiable.</p>
          </details>

          <details className="faq-item">
            <summary>Pourquoi tester à 110&nbsp;% et non à 100&nbsp;% de la capacité nominale&nbsp;?</summary>
            <p>Cette marge permet de vérifier que l'engin conserve une capacité de sécurité au-delà de sa charge nominale annoncée, condition la plus fréquemment retenue par les organismes de vérification.</p>
          </details>

          <details className="faq-item">
            <summary>Que se passe-t-il si le rapport de VGP ne mentionne pas la charge utilisée&nbsp;?</summary>
            <p>Le rapport est invalidé et la responsabilité du vérificateur peut être engagée&nbsp;: la documentation précise de la charge de test est une exigence réglementaire, pas une simple formalité.</p>
          </details>

          <details className="faq-item">
            <summary>Un centre de formation CACES® peut-il utiliser les mêmes blocs pour ses VGP internes&nbsp;?</summary>
            <p>Oui, c'est une pratique courante et économiquement avantageuse&nbsp;: les mêmes blocs béton certifiés servent aux exercices pédagogiques et aux épreuves de charge lors des vérifications périodiques.</p>
          </details>

          <details className="faq-item">
            <summary>Combien de temps à l'avance dois-je planifier ma VGP&nbsp;?</summary>
            <p>Au moins 4 semaines avant l'échéance réglementaire, pour laisser le temps de commander les blocs de test si nécessaire et de programmer le vérificateur.</p>
          </details>

        </div>
      </div>
    </section>


    

    
<section className="section section-alt" id="devis" aria-labelledby="titre-devis">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Votre projet</span>
          <h2 id="titre-devis">Programmer une VGP avec épreuve de charge</h2>
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
              <label htmlFor="societe">Société</label>
              <input type="text" id="societe" name="societe" required />
            </div>
            <div className="champ">
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" required />
            </div>
            <div className="champ">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="champ champ-pleine-largeur">
              <label htmlFor="engin">Type d'engin concerné</label>
              <input type="text" id="engin" name="engin" placeholder="Ex. : chariot élévateur 2,5 T" />
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


    

    
<section className="section" aria-labelledby="titre-autres-vgp">
      <div className="container">
        <div className="vgp reveal">
          <div>
            <span className="surtitre" style={{ "color": "#FF8A8A" }}>VGP</span>
            <h2 id="titre-autres-vgp">Toutes nos VGP en un coup d'œil</h2>
            <p>SECURIFORM réalise les VGP de l'ensemble de vos équipements de levage et de manutention, dans les Hauts-de-France.</p>
            <Link className="btn btn-blanc" href="/vgp">Voir toutes les VGP</Link>
          </div>
          <nav className="vgp-liste" aria-label="Nos prestations VGP">
            <Link href="/vgp-chariots-elevateurs">Chariots élévateurs</Link>
            <Link href="/vgp-nacelles-elevatrices">Nacelles élévatrices</Link>
            <Link href="/vgp-grues-auxiliaires">Grues auxiliaires</Link>
            <Link href="/vgp-ponts-roulants">Ponts roulants</Link>
            <Link href="/vgp-chargeuses">Chargeuses</Link>
            <Link href="/vgp-chariots-telescopiques">Chariots télescopiques</Link>
            <Link href="/vgp-compacteurs">Compacteurs</Link>
            <Link href="/vgp-hayons-elevateurs">Hayons élévateurs</Link>
            <Link href="/vgp-bras-de-levage">Bras de levage</Link>
            <Link href="/vgp-tombereaux">Tombereaux</Link>
            <Link href="/vgp-pelleteuses">Pelleteuses</Link>
            <Link href="/vgp-accessoires-levage">Accessoires de levage</Link>
          </nav>
        </div>
      </div>
    </section>


  
    </>
  );
}
