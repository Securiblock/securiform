import type { Metadata } from "next";
import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Politique de confidentialité",
      "description": "Politique de confidentialité du site SECURIFORM : données collectées, finalités, durées de conservation, droits RGPD.",
      "url": "https://securiform.fr/politique-de-confidentialite/"
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
          "name": "Politique de confidentialité",
          "item": "https://securiform.fr/politique-de-confidentialite/"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: "Politique de confidentialité - SECURIFORM",
  description: "Politique de confidentialité SECURIFORM : données collectées, finalités, durées de conservation, sous-traitants et droits RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/politique-de-confidentialite",
    title: "Politique de confidentialité - SECURIFORM",
    description: "Comment SECURIFORM collecte, utilise et protège vos données personnelles.",
    images: ["/image/logo-securiform.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de confidentialité - SECURIFORM",
    description: "Politique de confidentialité du site SECURIFORM.",
    images: ["/image/logo-securiform.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero" aria-label="Politique de confidentialité">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span>Politique de confidentialité</span>
          </p>
          <h1>Politique de confidentialité</h1>
          <p>Comment SECURIFORM collecte, utilise et protège vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-responsable">
        <div className="container section-head reveal">
          <span className="surtitre">1</span>
          <h2 id="titre-responsable">Responsable de traitement</h2>
          <hr className="trait" />
          <p>Le responsable du traitement des données collectées sur ce site est la société <strong>SECURIFORM</strong>, SAS au capital de 4&nbsp;500&nbsp;€, immatriculée sous le SIREN 502 015 787, dont le siège social est situé 17 rue du Carillon, 59650 Villeneuve-d&apos;Ascq. Pour toute question relative à cette politique, vous pouvez nous contacter via notre page&nbsp;<Link href="/nous-contacter" style={{ color: "var(--rouge)" }}>Nous contacter</Link>, par téléphone au <a href="tel:+33320673490" style={{ color: "var(--rouge)" }}>03 20 67 34 90</a>, ou par courrier à l&apos;adresse ci-dessus.</p>
          <p style={{ marginTop: "1rem" }}>Au vu de la nature et du volume des données traitées, SECURIFORM n&apos;a pas l&apos;obligation de désigner un délégué à la protection des données (DPO) au sens du RGPD ; les demandes relatives à vos données sont traitées via les coordonnées ci-dessus. <em>[À VALIDER : confirmer que SECURIFORM n&apos;entre dans aucun des cas rendant la désignation d&apos;un DPO obligatoire (autorité publique, suivi régulier et systématique à grande échelle, traitement à grande échelle de données sensibles) ; sinon, indiquer ici les coordonnées du DPO désigné.]</em></p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="titre-donnees">
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">2</span>
            <h2 id="titre-donnees">Données collectées et finalités</h2>
            <hr className="trait" />
          </div>

          <div className="table-scroll reveal">
            <table className="tableau-comparatif">
              <thead>
                <tr>
                  <th>Finalité</th>
                  <th>Données collectées</th>
                  <th>Base légale</th>
                  <th>Durée de conservation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Répondre à une demande de renseignement ou de devis (formulaire « Nous contacter »)</td>
                  <td>Nom, société, email, téléphone, message, pièce jointe éventuelle</td>
                  <td>Mesures précontractuelles / intérêt légitime à répondre à la demande</td>
                  <td><em>[À VALIDER : durée proposée à titre indicatif : 3 ans à compter du dernier contact, recommandation courante CNIL pour la prospection]</em></td>
                </tr>
                <tr>
                  <td>Traiter une candidature de formateur (formulaire « Nous recrutons »)</td>
                  <td>Nom, prénom, téléphone, email, domaines de compétence, CV, message</td>
                  <td>Mesures précontractuelles à la demande de la personne concernée</td>
                  <td><em>[À VALIDER : durée proposée à titre indicatif : 2 ans après le dernier contact en l&apos;absence de suite donnée]</em></td>
                </tr>
                <tr>
                  <td>Vous envoyer un rappel avant l&apos;échéance de votre formation (calculateur de recyclage des pages de formation)</td>
                  <td>Email, formation concernée, date de la dernière formation et date d&apos;échéance calculée</td>
                  <td>Consentement (case à cocher), retirable à tout moment via le lien d&apos;annulation présent dans chaque email</td>
                  <td>Jusqu&apos;à la date d&apos;échéance de la formation, puis suppression automatique&nbsp;; suppression immédiate en cas d&apos;annulation</td>
                </tr>
                <tr>
                  <td>Répondre à vos questions via l&apos;assistant de conversation du site</td>
                  <td>Contenu des messages échangés avec l&apos;assistant</td>
                  <td>Intérêt légitime (assistance aux visiteurs)</td>
                  <td>Le temps de la session de navigation côté SECURIFORM (aucune conservation par SECURIFORM au-delà) : voir la rubrique « Destinataires et sous-traitants » ci-dessous pour la conservation par Google</td>
                </tr>
                <tr>
                  <td>Sécurité, prévention de la fraude et du spam, mesures techniques</td>
                  <td>Adresse IP, journaux techniques de connexion</td>
                  <td>Intérêt légitime (sécurité du site)</td>
                  <td>Durée définie par la politique de notre hébergeur, voir <a href="https://vercel.com/legal/privacy-notice" style={{ color: "var(--rouge)" }}>vercel.com/legal/privacy-notice</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="reveal" style={{ marginTop: "1.5rem" }}>Le formulaire « Nous contacter » comporte un champ « Document joint » facultatif et le formulaire « Nous recrutons » un champ « CV » : ces pièces jointes ne sont utilisées que pour traiter votre demande ou candidature et ne sont jamais republiées.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-destinataires">
        <div className="container section-head reveal">
          <span className="surtitre">3</span>
          <h2 id="titre-destinataires">Destinataires et sous-traitants</h2>
          <hr className="trait" />
          <p>Vos données sont destinées exclusivement aux équipes habilitées de SECURIFORM. Certains sous-traitants techniques y ont accès pour les seuls besoins du fonctionnement du site&nbsp;:</p>
          <ul className="valeurs" style={{ marginTop: "0.75rem" }}>
            <li><span className="puce" aria-hidden="true">•</span> <strong>Resend</strong> (société américaine) : envoi des emails transactionnels générés par les formulaires de contact et de candidature, ainsi que des rappels de recyclage. Le transfert des données hors UE est encadré par les clauses contractuelles types de la Commission européenne, incluses dans le contrat de sous-traitance de Resend (voir <a href="https://resend.com/legal/dpa" style={{ color: "var(--rouge)" }}>resend.com/legal/dpa</a>).</li>
            <li><span className="puce" aria-hidden="true">•</span> <strong>Google (Gemini API)</strong> (société américaine) : génération des réponses de l&apos;assistant de conversation du site, à partir du contenu des messages que vous lui envoyez. Ce service est utilisé sur une offre non payante&nbsp;: conformément aux conditions de Google, le contenu de vos messages et des réponses générées peut être utilisé par Google pour fournir, améliorer et développer ses propres produits (voir <a href="https://ai.google.dev/gemini-api/terms" style={{ color: "var(--rouge)" }}>ai.google.dev/gemini-api/terms</a>). C&apos;est pourquoi l&apos;assistant vous invite à ne partager aucune donnée personnelle dans vos messages. <em>[À VALIDER : envisager de passer l&apos;API sur une offre payante pour bénéficier des garanties contractuelles standard (clauses contractuelles types, non-utilisation des messages pour l&apos;entraînement des modèles) plutôt que ces conditions par défaut.]</em></li>
            <li><span className="puce" aria-hidden="true">•</span> <strong>Neon</strong> : hébergement de la base de données où sont conservés les rappels de recyclage (voir <a href="https://neon.com/privacy-policy" style={{ color: "var(--rouge)" }}>neon.com/privacy-policy</a>). <em>[À VALIDER : vérifier la région d&apos;hébergement de la base dans la console Neon : une région européenne évite tout transfert hors UE.]</em></li>
            <li><span className="puce" aria-hidden="true">•</span> <strong>Vercel</strong> : hébergement du site (voir la rubrique « Hébergeur » de nos&nbsp;<Link href="/mentions-legales" style={{ color: "var(--rouge)" }}>mentions légales</Link>).</li>
          </ul>
          <p style={{ marginTop: "1rem" }}>Nous ne vendons ni ne louons vos données personnelles à des tiers.</p>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="titre-droits">
        <div className="container section-head reveal">
          <span className="surtitre">4</span>
          <h2 id="titre-droits">Vos droits</h2>
          <hr className="trait" />
          <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles&nbsp;: droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation du traitement et de portabilité.</p>
          <p style={{ marginTop: "1rem" }}>Pour exercer ces droits, contactez-nous via notre page&nbsp;<Link href="/nous-contacter" style={{ color: "var(--rouge)" }}>Nous contacter</Link> ou par courrier à SECURIFORM, 17 rue du Carillon, 59650 Villeneuve-d&apos;Ascq. Une réponse vous sera apportée dans un délai d&apos;un mois.</p>
          <p style={{ marginTop: "1rem" }}>Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--rouge)" }}>www.cnil.fr</a>.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-cookies-lien">
        <div className="container section-head reveal">
          <span className="surtitre">5</span>
          <h2 id="titre-cookies-lien">Cookies et traceurs</h2>
          <hr className="trait" />
          <p>Le détail des cookies et traceurs utilisés par ce site, ainsi que la gestion de votre consentement, font l&apos;objet d&apos;une page dédiée&nbsp;: notre&nbsp;<Link href="/politique-cookies" style={{ color: "var(--rouge)" }}>politique de cookies</Link>.</p>
        </div>
      </section>

      <section className="cta" aria-labelledby="titre-contact">
        <div className="container reveal">
          <h2 id="titre-contact">Une question sur vos données&nbsp;?</h2>
          <p>Notre équipe reste à votre disposition pour tout complément d&apos;information.</p>
          <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
          <div className="cta-actions">
            <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
            <Link className="btn btn-contour" href="/politique-cookies" style={{ borderColor: "#fff", color: "#fff" }}>Politique de cookies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
