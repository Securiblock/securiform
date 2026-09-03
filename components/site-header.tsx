"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PhoneIcon from "./phone-icon";
import { isNavItemActive, navItems } from "@/lib/nav";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
          <span className="zone">Interventions sur la France entière</span>
        </div>
      </div>

      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo" aria-label="SECURIFORM — Accueil">
            <Image
              src="/image/logo-securiform.png"
              alt="SECURIFORM"
              className="logo-img"
              width={180}
              height={52}
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
                "external" in item && item.external ? (
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
        </div>
      </header>
    </>
  );
}
