import type { Metadata } from "next";
import Link from "next/link";
import CalculateurRecyclage from "@/components/calculateur-recyclage";
import FormulaireDevis from "@/components/formulaire-devis";

export const metadata: Metadata = {
  title: "Calculateur de recyclage - SECURIFORM",
  description:
    "Calculez la date d'échéance de vos formations sécurité (CACES®, SST, habilitation électrique, AIPR…) et recevez un rappel par email avant leur expiration.",
  alternates: { canonical: "/outils/calculateur-recyclage" },
  openGraph: {
    type: "website",
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: "/outils/calculateur-recyclage",
    title: "Calculateur de recyclage - SECURIFORM",
    description: "Date d'échéance de vos formations sécurité et rappel par email avant expiration.",
    images: ["/image/logo-securiform.webp"],
  },
};

export default function Page() {
  return (
    <>
      <section className="page-hero" aria-label="Calculateur de recyclage">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <Link href="/outils">Outils</Link>
            <span aria-hidden="true">›</span>
            <span>Calculateur de recyclage</span>
          </p>
          <h1>Calculateur de recyclage</h1>
          <p>CACES®, SST, habilitation électrique, AIPR, travaux en hauteur, incendie&nbsp;: connaissez en un instant l&apos;échéance de vos formations.</p>
        </div>
      </section>

      <CalculateurRecyclage formation="outils" />

      <FormulaireDevis
        titre="Programmer un recyclage"
        introduction="Complétez ce formulaire, notre équipe revient vers vous dans l'heure pour organiser votre session."
      />
    </>
  );
}
