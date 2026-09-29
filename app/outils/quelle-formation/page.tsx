import type { Metadata } from "next";
import Link from "next/link";
import FormulaireDevis from "@/components/formulaire-devis";
import QuestionnaireFormation from "@/components/questionnaire-formation";

export const metadata: Metadata = {
  title: "Quelle formation me faut-il ? - SECURIFORM",
  description:
    "Répondez à quelques questions et découvrez la formation sécurité adaptée à vos salariés : CACES®, habilitation électrique, SST, incendie, travaux en hauteur, AIPR.",
  alternates: { canonical: "/outils/quelle-formation" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/outils/quelle-formation",
    title: "Quelle formation me faut-il ? - SECURIFORM",
    description: "Trouvez en quelques questions la formation sécurité adaptée à vos salariés.",
    images: ["/image/logo-securiform.webp"],
  },
};

export default function Page() {
  return (
    <>
      <section className="page-hero" aria-label="Quelle formation me faut-il ?">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/outils">Outils</Link>
            <span aria-hidden="true">›</span>
            <span>Quelle formation&nbsp;?</span>
          </p>
          <h1>Quelle formation me faut-il&nbsp;?</h1>
          <p>Quelques questions sur votre activité suffisent pour trouver la formation adaptée à vos salariés.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-questionnaire">
        <div className="container">
          <div className="section-head reveal">
            <span className="surtitre">Moins d&apos;une minute</span>
            <h2 id="titre-questionnaire">Trouvez votre formation</h2>
            <hr className="trait" />
          </div>
          <QuestionnaireFormation />
        </div>
      </section>

      <FormulaireDevis
        titre="Demander un devis"
        introduction="Complétez ce formulaire, notre équipe revient vers vous dans l'heure avec une proposition adaptée."
      />
    </>
  );
}
