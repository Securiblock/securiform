export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/lentreprise", label: "L'entreprise" },
  { href: "/#formations", label: "Formations" },
  { href: "/vgp", label: "VGP" },
  { href: "https://www.securistore.fr/", label: "Boutique", external: true },
  { href: "/statistiques", label: "Statistiques" },
  { href: "/nous-contacter", label: "Contact" },
] as const;

// Slugs (routes without the leading slash) that fall under the "Formations" nav item.
const formationSlugs = new Set([
  "caces",
  "caces-r482a",
  "caces-r484",
  "caces-r485",
  "caces-r486a",
  "caces-r489",
  "caces-r490",
  "habilitation-electrique",
  "habilitation-electricien",
  "habilitation-non-electricien",
  "incendie-evacuation",
  "evacuation",
  "manipulation-extincteurs",
  "equipier-premiere-intervention",
  "travaux-hauteur-echafaudages",
  "travaux-en-hauteur",
  "echafaudages-fixes",
  "echafaudages-roulants",
  "gestes-postures",
  "secourisme",
  "sst-initiale",
  "sst-mac",
  "aipr",
  "aipr-concepteurs",
  "aipr-encadrants",
  "aipr-operateurs",
  "formations-specifiques",
  "tondeuses-autoportees",
  "balayeuses-routieres",
  "tronconneuse-thermique",
  "gestes-qui-sauvent",
]);

const vgpSlugs = new Set([
  "vgp",
  "vgp-accessoires-levage",
  "vgp-bras-de-levage",
  "vgp-chargeuses",
  "vgp-chariots-elevateurs",
  "vgp-chariots-telescopiques",
  "vgp-compacteurs",
  "vgp-grues-auxiliaires",
  "vgp-hayons-elevateurs",
  "vgp-nacelles-elevatrices",
  "vgp-pelleteuses",
  "vgp-ponts-roulants",
  "vgp-tombereaux",
  "poids-de-test-vgp",
]);

export function isNavItemActive(itemHref: string, pathname: string): boolean {
  const slug = pathname === "/" ? "" : pathname.replace(/^\//, "");

  if (itemHref === "/") return pathname === "/";
  if (itemHref === "/#formations") return formationSlugs.has(slug);
  if (itemHref === "/vgp") return vgpSlugs.has(slug);

  return pathname === itemHref;
}
