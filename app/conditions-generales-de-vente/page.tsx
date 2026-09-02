import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Conditions générales de vente",
      "description": "Conditions générales de vente applicables à l'ensemble de l'offre de services SECURIFORM : formations en présentiel, conseil, facturation, annulation, responsabilité.",
      "url": "https://securiform.fr/conditions-generales-de-vente/"
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
          "name": "Conditions générales de vente",
          "item": "https://securiform.fr/conditions-generales-de-vente/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Conditions générales de vente — SECURIFORM",
  description: "Conditions générales de vente SECURIFORM : formations inter/intra-entreprise, facturation, annulation, responsabilité, protection des données.",
  alternates: { canonical: "/conditions-generales-de-vente" },
  openGraph: {
    type: "article",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/conditions-generales-de-vente",
    title: "Conditions générales de vente — SECURIFORM",
    description: "Conditions générales de vente applicables à l'ensemble de l'offre de services SECURIFORM.",
    images: ["/image/logo-securiform.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions générales de vente — SECURIFORM",
    description: "Conditions générales de vente SECURIFORM.",
    images: ["/image/logo-securiform.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    

    
<section className="page-hero" aria-label="Conditions générales de vente">
      <div className="container page-hero-inner">
        <p className="fil-ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">›</span>
          <span>Conditions générales de vente</span>
        </p>
        <h1>Conditions générales de vente</h1>
        <p>Applicables à l'ensemble de l'offre de services SECURIFORM&nbsp;: formations en présentiel, missions de conseil et prestations associées.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-presentation">
      <div className="container section-head reveal">
        <span className="surtitre">Article 1</span>
        <h2 id="titre-presentation">Présentation</h2>
        <hr className="trait" />
        <p>SECURIFORM est un organisme de formation professionnelle dont le siège social est sis 17 rue du Carillon à Villeneuve d'Ascq (59650). SECURIFORM développe, propose et dispense des formations en présentiel en inter et en intra-entreprise. SECURIFORM propose également des missions de conseil pour les entreprises et administrations (l'ensemble des prestations SECURIFORM étant ci-après dénommée « l'offre de services SECURIFORM » ou « l'offre de services »).</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-objet">
      <div className="container section-head reveal">
        <span className="surtitre">Article 2</span>
        <h2 id="titre-objet">Objet</h2>
        <hr className="trait" />
        <p>Les présentes conditions générales de vente (ci-après les « CGV ») s'appliquent à toutes les offres de services relatives à des commandes passées auprès de SECURIFORM par tout client (ci-après « le client »). Le fait de passer commande implique l'adhésion entière et sans réserve du client aux présentes CGV. Toute condition contraire et notamment toute condition générale ou particulière opposée par le client ne peut, sauf acceptation formelle et écrite de SECURIFORM, prévaloir sur les présentes CGV et ce, quel que soit le moment où elle aura pu être portée à sa connaissance.</p>
        <p style={{ "marginTop": "1rem" }}>Le fait que SECURIFORM ne se prévale pas à un moment donné de l'une quelconque des présentes CGV ne peut être interprété comme valant renonciation à s'en prévaloir ultérieurement. Le client se porte fort du respect des présentes CGV par l'ensemble de ses salariés, préposés et agents. Le client reconnaît également que, préalablement à toute commande, il a bénéficié des informations et conseils suffisants de la part de SECURIFORM, lui permettant de s'assurer de l'adéquation de l'offre de services à ses besoins.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-conseil">
      <div className="container section-head reveal">
        <span className="surtitre">Article 3</span>
        <h2 id="titre-conseil">Étude et conseil opérationnel</h2>
        <hr className="trait" />
        <p>Toute prestation d'étude et de conseil opérationnel fait l'objet d'une proposition commerciale et financière établie par SECURIFORM. En cas d'acceptation par le client, le coût total de la prestation sera versé par le client à 30 jours nets. Le prix de la prestation est révisable annuellement par application de la formule de révision visée à l'article 6.2.3.</p>
        <p style={{ "marginTop": "1rem" }}>Pour la réalisation des missions d'études et de conseil opérationnel, SECURIFORM facture le temps des consultants consacré à la mission, soit en fonction d'un prix par jour d'intervention, soit au forfait. Les frais techniques et logistiques liés à l'exécution de la mission sont à la charge du client et ne sont en aucun cas inclus dans les honoraires. Sauf indication contraire dans la proposition, ces frais sont facturés à leur prix coûtant.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-formations-presentiel">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Article 4</span>
          <h2 id="titre-formations-presentiel">Formations en présentiel</h2>
          <hr className="trait" />
        </div>

        <h3 style={{ "marginBottom": "0.5rem" }}>4.1 Formations en inter-entreprise</h3>
        <p><strong>4.1.1 Descriptif&nbsp;:</strong> les dispositions du présent article concernent les formations en inter-entreprise disponibles au catalogue SECURIFORM et réalisées dans les locaux SECURIFORM ou des locaux mis à disposition par SECURIFORM.</p>
        <p style={{ "marginTop": "0.75rem" }}><strong>4.1.2 Conditions financières&nbsp;:</strong> le règlement du prix de la formation est à effectuer à 30 jours nets, sans escompte à l'ordre de SECURIFORM. Tous les prix sont indiqués hors taxes et sont à majorer du taux de TVA en vigueur. Tout stage ou cycle commencé est dû en entier. Les repas ne sont pas compris dans le prix de la formation.</p>
        <p style={{ "marginTop": "0.75rem" }}><strong>4.1.3 Remplacement d'un participant&nbsp;:</strong> SECURIFORM offre la possibilité de remplacer un participant empêché par un autre participant ayant le même profil et les mêmes besoins en formation. Le remplacement d'un participant est possible sans indemnité.</p>
        <p style={{ "marginTop": "0.75rem" }}><strong>4.1.4 Insuffisance du nombre de participants à une session&nbsp;:</strong> dans le cas où le nombre de participants serait insuffisant pour assurer le bon déroulement de la session de formation, SECURIFORM se réserve la possibilité d'ajourner la formation au plus tard une semaine avant la date prévue et ce, sans indemnités.</p>

        <h3 style={{ "margin": "2rem 0 0.5rem" }}>4.2 Formations en intra-entreprise</h3>
        <p><strong>4.2.1 Descriptif&nbsp;:</strong> les dispositions du présent article concernent des formations en intra-entreprise exécutées dans les locaux de SECURIFORM, du client ou dans des locaux mis à disposition par le client.</p>
        <p style={{ "marginTop": "0.75rem" }}><strong>4.2.2 Conditions financières&nbsp;:</strong> toute formation en intra-entreprise fera préalablement l'objet d'une proposition commerciale et financière par SECURIFORM. Sauf disposition contraire dans la proposition SECURIFORM, le coût de la formation sera à régler à 30 jours nets. Le prix est révisable annuellement par application de la formule de révision visée à l'article 6.2.3.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-dispositions-communes">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Article 5</span>
          <h2 id="titre-dispositions-communes">Dispositions communes aux formations</h2>
          <hr className="trait" />
        </div>

        <p><strong>5.1 Documents contractuels&nbsp;:</strong> pour chaque action de formation, une convention établie selon les textes en vigueur est adressée par mail et est à retourner par le client revêtue du cachet de l'entreprise et de la signature d'un représentant habilité avant le début de la prestation. L'attestation de formation est adressée après la formation.</p>

        <p style={{ "marginTop": "1rem" }}><strong>5.2 Règlement par un OPCO&nbsp;:</strong> en cas de règlement par l'OPCO dont dépend le client, il appartient au client d'effectuer la demande de prise en charge avant le début de la formation auprès de l'OPCO. L'accord de financement doit être communiqué au moment de l'inscription et sur l'exemplaire de la convention que le client retourne signé à SECURIFORM. En cas de prise en charge partielle ou de refus définitif par l'OPCO, la différence sera directement facturée par SECURIFORM au client. Si l'accord de prise en charge de l'OPCO ne parvient pas à SECURIFORM au premier jour de la formation, SECURIFORM se réserve la possibilité de facturer la totalité des frais de formation au client.</p>

        <p style={{ "marginTop": "1rem" }}><strong>5.3 Annulation des formations en présentiel à l'initiative du client&nbsp;:</strong> les dates de formation en présentiel sont fixées d'un commun accord entre le client et SECURIFORM et sont bloquées de façon ferme. En cas d'annulation tardive par le client d'une session de formation planifiée en commun, des indemnités compensatrices sont dues à SECURIFORM dans les conditions suivantes&nbsp;:</p>
        <ul className="valeurs" style={{ "marginTop": "0.75rem" }}>
          <li><span className="puce" aria-hidden="true">•</span> Renoncement dans un délai de 10 jours ouvrables avant le démarrage de la formation&nbsp;: le client s'engage au versement de 30&nbsp;% du montant total de la prestation à titre de dédit.</li>
          <li><span className="puce" aria-hidden="true">•</span> Renoncement dans un délai de 3 jours ouvrables avant le démarrage de la formation&nbsp;: le client s'engage au versement de l'intégralité du montant total de la prestation à titre de dédit.</li>
        </ul>
        <p style={{ "marginTop": "0.75rem" }}>Ces sommes ne sont pas imputables sur l'obligation de participation au titre de la formation professionnelle continue du client et ne peuvent faire l'objet d'une demande de remboursement ou de prise en charge par l'OPCO.</p>
      </div>
    </section>


    

    
<section className="section section-alt" aria-labelledby="titre-dispositions-generales">
      <div className="container">
        <div className="section-head reveal">
          <span className="surtitre">Article 6</span>
          <h2 id="titre-dispositions-generales">Dispositions applicables à l'ensemble de l'offre de services SECURIFORM</h2>
          <hr className="trait" />
        </div>

        <p><strong>6.1 Modalités de passation des commandes&nbsp;:</strong> la proposition et les prix indiqués par SECURIFORM sont valables un mois à compter de l'envoi de la proposition commerciale. L'offre de services est réputée acceptée dès la réception par SECURIFORM d'un bon de commande signé par tout représentant dûment habilité du client, dans le délai de trois mois à compter de l'émission dudit bon de commande. La signature du bon de commande et/ou l'accord sur proposition implique la connaissance et l'acceptation irrévocable et sans réserve des présentes conditions.</p>

        <h3 style={{ "margin": "1.5rem 0 0.5rem" }}>6.2 Facturation – Règlement</h3>
        <p><strong>6.2.1 Prix&nbsp;:</strong> tous les prix sont exprimés en euros et hors taxes. Ils seront majorés de la TVA au taux en vigueur. Les éventuels taxes, droits de douane ou d'importation ainsi que les frais bancaires occasionnés par le mode de paiement utilisé seront à la charge du client. Les frais de déplacement du (ou des) consultant(s) ou du (ou des) formateur(s) ainsi que les frais de location de salle, de documentation et de location de matériel courant (vidéoprojecteur…) sont inclus.</p>
        <p style={{ "marginTop": "0.75rem" }}><strong>6.2.2 Paiement&nbsp;:</strong> sauf convention contraire, les règlements seront effectués aux conditions suivantes&nbsp;: le paiement doit être effectué par le client au plus tard dans un délai de 30 jours nets à compter de la date de la facture&nbsp;; aucun escompte ne sera appliqué en cas de règlement avant l'échéance, sauf mention différente indiquée sur la facture. En cas de retard de paiement, SECURIFORM pourra suspendre toutes les commandes en cours, sans préjudice de toute autre voie d'action.</p>
        <p style={{ "marginTop": "0.75rem" }}>Conformément à l'article L 441-6 du Code de commerce, des pénalités de retard d'un montant égal à trois fois le taux d'intérêt légal de la BCE et une indemnité forfaitaire de 40&nbsp;€ par facture sont dues à défaut de règlement le jour suivant la date d'échéance figurant sur la facture. Si les frais de recouvrement sont supérieurs à 40&nbsp;€, SECURIFORM pourra réclamer au débiteur, sur justifications, une indemnisation complémentaire. SECURIFORM aura la faculté de suspendre le service jusqu'au règlement complet.</p>
        <p style={{ "marginTop": "0.75rem" }}><strong>6.2.3 Révision de prix&nbsp;:</strong> le cas échéant, la proposition financière de SECURIFORM acceptée par le client pourra être révisée le 1er janvier de chaque année.</p>

        <p style={{ "marginTop": "1.5rem" }}><strong>6.3 Limitations de responsabilité de SECURIFORM&nbsp;:</strong> la responsabilité de SECURIFORM ne peut en aucun cas être engagée pour toute défaillance technique ou tout mauvais usage du matériel, par les utilisateurs ou toute cause étrangère à SECURIFORM. Quel que soit le type de prestations, la responsabilité de SECURIFORM est expressément limitée à l'indemnisation des dommages directs prouvés par le client. La responsabilité de SECURIFORM est plafonnée au montant du prix payé par le client au titre de la prestation concernée. En aucun cas, la responsabilité de SECURIFORM ne saurait être engagée au titre des dommages indirects tels que perte de données, de fichier(s), perte d'exploitation, préjudice commercial, manque à gagner, atteinte à l'image et à la réputation.</p>

        <p style={{ "marginTop": "1rem" }}><strong>6.4 Force majeure&nbsp;:</strong> SECURIFORM ne pourra être tenu responsable à l'égard du client en cas d'inexécution de ses obligations résultant d'un évènement de force majeure. Sont considérés comme cas de force majeure ou cas fortuit, outre ceux habituellement reconnus par la jurisprudence des Cours et Tribunaux français et sans que cette liste soit restrictive&nbsp;: la maladie ou l'accident d'un intervenant ou d'un animateur de formation, les grèves ou conflits sociaux internes ou externes à SECURIFORM, les désastres naturels, les incendies, la non-obtention de visas, des autorisations de travail ou d'autres permis, les lois ou règlements mis en place ultérieurement, l'interruption des télécommunications, l'interruption de l'approvisionnement en énergie, l'interruption des communications ou des transports de tout type, ou toute autre circonstance échappant au contrôle raisonnable de SECURIFORM.</p>

        <p style={{ "marginTop": "1rem" }}><strong>6.5 Propriété intellectuelle&nbsp;:</strong> SECURIFORM est seule titulaire des droits de propriété intellectuelle de l'ensemble des formations qu'elle propose à ses clients. L'ensemble des contenus et supports pédagogiques, quelle qu'en soit la forme (papier, électronique, numérique, orale…), utilisés par SECURIFORM pour assurer les formations, demeurent la propriété exclusive de SECURIFORM. Ils ne peuvent faire l'objet d'aucune utilisation, transformation, reproduction, exploitation non expressément autorisée au sein ou à l'extérieur du client sans accord exprès de SECURIFORM. En particulier, le client s'interdit d'utiliser le contenu des formations pour former d'autres personnes que son propre personnel et engage sa responsabilité sur le fondement des articles L122-4 et L335-2 et suivants du Code de la propriété intellectuelle en cas de cession ou de communication des contenus non autorisée.</p>
        <p style={{ "marginTop": "0.75rem" }}>Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle des contenus de formations, sont strictement interdites, et ce quels que soient le procédé et le support utilisés. En tout état de cause, SECURIFORM demeure propriétaire de ses outils, méthodes et savoir-faire développés antérieurement ou à l'occasion de l'exécution des prestations chez le client.</p>

        <p style={{ "marginTop": "1rem" }}><strong>6.6 Confidentialité&nbsp;:</strong> les parties s'engagent à garder confidentiels les informations et documents concernant l'autre partie de quelque nature qu'ils soient, économiques, techniques ou commerciaux, auxquels elles pourraient avoir accès au cours de l'exécution du contrat ou à l'occasion des échanges intervenus antérieurement à sa conclusion, notamment l'ensemble des informations figurant dans la proposition commerciale et financière transmise par SECURIFORM au client. SECURIFORM s'engage à ne pas communiquer à des tiers autres que ses sociétés affiliées, partenaires ou fournisseurs, les informations transmises par le client, y compris les informations concernant les utilisateurs.</p>

        <p style={{ "marginTop": "1rem" }}><strong>6.7 Communication&nbsp;:</strong> le client accepte d'être cité par SECURIFORM comme client de ses offres de services, aux frais de SECURIFORM. Sous réserve du respect des dispositions de l'article 6.6, SECURIFORM peut mentionner le nom du client ainsi qu'une description objective de la nature des prestations, objet du contrat, dans ses listes de références et propositions à l'attention de ses prospects et de sa clientèle, entretiens avec des tiers, communications à son personnel, documents internes de gestion prévisionnelle, rapport annuel aux actionnaires, ainsi qu'en cas de dispositions légales, réglementaires ou comptables l'exigeant.</p>

        <p style={{ "marginTop": "1rem" }}><strong>6.8 Protection des données à caractère personnel&nbsp;:</strong> la politique de protection des données personnelles de SECURIFORM est conforme aux attendus de la directive européenne relative au Règlement Général de Protection des Données (RGPD). SECURIFORM s'engage à préserver la confidentialité des informations éventuellement fournies en ligne par l'internaute. Toute information personnelle que l'internaute serait amené à transmettre à SECURIFORM pour l'utilisation de certains services est soumise aux dispositions de la loi n°&nbsp;78-17 Informatique et Libertés du 6 janvier 1978. À ce titre, l'internaute dispose d'un droit d'accès, de rectification et de suppression des informations personnelles le concernant, qu'il peut exercer à tout moment en adressant un courrier à l'adresse suivante&nbsp;: SECURIFORM – 17 rue du Carillon – 59650 Villeneuve d'Ascq.</p>
        <p style={{ "marginTop": "0.75rem" }}>SECURIFORM conservera, pour sa part, les données liées à l'évaluation des acquis par l'utilisateur, pour une période n'excédant pas la durée nécessaire à l'appréciation de la formation.</p>

        <p style={{ "marginTop": "1rem" }}><strong>6.9 Droit applicable – Attribution de compétence&nbsp;:</strong> les présentes conditions générales sont régies par le droit français. En cas de litige survenant entre le client et SECURIFORM à l'occasion de l'exécution du contrat, il sera recherché une solution à l'amiable et, à défaut, le règlement sera du ressort du Tribunal de Commerce dont dépend le siège social de SECURIFORM.</p>
      </div>
    </section>


    

    
<section className="section" aria-labelledby="titre-coordonnees">
      <div className="container section-head reveal">
        <span className="surtitre">Coordonnées</span>
        <h2 id="titre-coordonnees">SECURIFORM</h2>
        <hr className="trait" />
        <p>17 rue du Carillon – 59650 Villeneuve d'Ascq<br />
        Téléphone&nbsp;: 03 20 67 34 90<br />
        SAS SECURIFORM au capital de 4&nbsp;500&nbsp;€ – SIRET&nbsp;: 502 015 787 00034 – APE 7022Z – TVA n°&nbsp;FR 56 502 015 787</p>
      </div>
    </section>


    

    
<section className="cta" aria-labelledby="titre-contact">
      <div className="container reveal">
        <h2 id="titre-contact">Une question sur ces conditions&nbsp;?</h2>
        <p>Notre équipe reste à votre disposition pour tout complément d'information.</p>
        <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
        <div className="cta-actions">
          <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
          <Link className="btn btn-contour" href="/mentions-legales" style={{ "borderColor": "#fff", "color": "#fff" }}>Mentions légales</Link>
        </div>
      </div>
    </section>


  
    </>
  );
}
