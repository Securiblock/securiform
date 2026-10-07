"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import BarreActionsMobile from "./barre-actions-mobile";
import MegaMenu from "./mega-menu";
import PhoneIcon from "./phone-icon";
import RechercheSite from "./recherche-site";
import { isNavItemActive, megaMenus, navItems } from "@/lib/nav";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  // Onglet dont le méga menu est ouvert (un seul à la fois).
  const [megaOuvert, setMegaOuvert] = useState<string | null>(null);
  const definirMega = (href: string, ouvert: boolean) =>
    setMegaOuvert((actuel) => (ouvert ? href : actuel === href ? null : actuel));
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <div className="topbar">
        <div className="container">
          <a
            href="tel:+33320673490"
            aria-label="Appeler SECURIFORM au 03 20 67 34 90"
            className="lien-tel"
          >
            <PhoneIcon className="icone-tel" />
            03 20 67 34 90
          </a>
          <span className="zone">Interventions sur toute la moitié nord de la France</span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="SECURIFORM : Accueil">
            <Image
              src="/image/logo-securiform.webp"
              alt="SECURIFORM"
              className="logo-img"
              width={1024}
              height={205}
              priority
            />
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="nav-principal"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav
            className={`nav${open ? " open" : ""}`}
            id="nav-principal"
            aria-label="Navigation principale"
          >
            <ul>
              {navItems.map((item) =>
                megaMenus[item.href] ? (
                  <MegaMenu
                    key={item.href}
                    libelle={item.label}
                    href={item.href}
                    contenu={megaMenus[item.href]}
                    actif={isNavItemActive(item.href, pathname)}
                    ouvert={megaOuvert === item.href}
                    definirOuvert={(ouvert) => definirMega(item.href, ouvert)}
                    onNaviguer={() => setOpen(false)}
                  />
                ) : "external" in item && item.external ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={item.href === "/nous-contacter" ? "nav-cta" : undefined}
                      aria-current={
                        isNavItemActive(item.href, pathname)
                          ? "page"
                          : undefined
                      }
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <RechercheSite />
        </div>
      </header>
      <BarreActionsMobile />
    </>
  );
}
