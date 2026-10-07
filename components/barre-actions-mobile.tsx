"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import PhoneIcon from "./phone-icon";

// Barre fixe en bas de l'écran sur téléphone (voir .barre-actions dans globals.css) :
// appeler en un geste, ou rejoindre le formulaire de devis sans remonter la page.
export default function BarreActionsMobile() {
  // « Devis » descend au formulaire de la page s'il existe ; sinon, page Contact.
  const allerAuDevis = (e: MouseEvent<HTMLAnchorElement>) => {
    const devis = document.getElementById("devis");
    if (!devis) return;
    e.preventDefault();
    devis.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("nom")?.focus({ preventScroll: true });
  };

  return (
    <nav className="barre-actions" aria-label="Contact rapide">
      <a className="barre-actions-appel" href="tel:+33320673490">
        <PhoneIcon className="barre-actions-icone" />
        Appeler
      </a>
      <Link className="barre-actions-devis" href="/nous-contacter" onClick={allerAuDevis}>
        Demander un devis
      </Link>
    </nav>
  );
}
