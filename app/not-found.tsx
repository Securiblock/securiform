import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable — SECURIFORM",
  description: "Cette page n'existe pas ou plus.",
};

const raccourcis = [
  { label: "Conduite en sécurité et CACES®", href: "/caces" },
  { label: "Habilitation électrique", href: "/habilitation-electrique" },
  { label: "Secourisme (SST)", href: "/secourisme" },
  { label: "Incendie et évacuation", href: "/incendie-evacuation" },
  { label: "Travaux en hauteur et échafaudages", href: "/travaux-hauteur-echafaudages" },
  { label: "Vérifications Générales Périodiques (VGP)", href: "/vgp" },
];

export default function NotFound() {
  return (
    <>
      <section className="page-hero" aria-label="Page introuvable">
        <div className="container page-hero-inner">
          <p className="fil-ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">›</span>
            <span>Page introuvable</span>
          </p>
          <h1>404 — Page introuvable</h1>
          <p>
            Le lien est peut-être obsolète ou l&apos;adresse mal orthographiée.
            Retrouvez nos formations ci-dessous ou contactez-nous directement.
          </p>
          <Link href="/" className="btn btn-plein">
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-raccourcis">
        <div className="container">
          <div className="section-head">
            <span className="surtitre">Vous cherchiez peut-être</span>
            <h2 id="titre-raccourcis">Nos principales formations</h2>
            <hr className="trait" />
          </div>
          <nav className="vgp-liste cols-3" aria-label="Raccourcis vers les formations">
            {raccourcis.map((item) => (
              <Link key={item.href} href={item.href} style={{ color: "var(--noir)" }}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="cta" aria-labelledby="titre-contact-404">
        <div className="container">
          <h2 id="titre-contact-404">Toujours pas trouvé&nbsp;?</h2>
          <p>Notre équipe vous aide à identifier la bonne formation, partout en France.</p>
          <a className="cta-tel" href="tel:+33320673490">03 20 67 34 90</a>
          <div className="cta-actions">
            <Link className="btn btn-blanc" href="/nous-contacter">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
