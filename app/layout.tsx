import type { Metadata } from "next";
import { Rajdhani, Quicksand } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ScrollEffects from "@/components/scroll-effects";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://securiform.fr"),
  title: {
    default:
      "SECURIFORM — Organisme de formation à la sécurité au travail | CACES®, habilitation électrique, SST, incendie",
    template: "%s",
  },
  description:
    "SECURIFORM, organisme de formation certifié Qualiopi, vous accompagne partout en France : préparation à l'habilitation électrique, conduite en sécurité et CACES® (R482 à R490), secourisme SST, incendie et évacuation, travaux en hauteur, AIPR et VGP.",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#CE2222",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${rajdhani.variable} ${quicksand.variable}`}
    >
      <body>
        <a className="skip-link" href="#main">
          Aller au contenu principal
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollEffects />
      </body>
    </html>
  );
}
