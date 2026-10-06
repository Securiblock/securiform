import { EQUIPEMENTS_VGP, GROUPES_VGP } from "@/lib/vgp";

export const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/lentreprise", label: "L'entreprise" },
  { href: "/#formations", label: "Formations" },
  { href: "/outils", label: "Outils" },
  { href: "/vgp", label: "VGP" },
  { href: "/blog", label: "Blog" },
  { href: "https://www.securistore.fr/", label: "Boutique", external: true },
  { href: "/statistiques", label: "Statistiques" },
  { href: "/nous-contacter", label: "Contact" },
] as const;

// Slugs (routes without the leading slash) that fall under the "Formations" nav item.
const formationSlugs = new Set([
  "caces",
  "caces-R482B",
  "caces-R484A",
  "caces-R485A",
  "caces-R486B",
  "caces-R489A",
  "caces-R490A",
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
  if (itemHref === "/outils") return pathname === "/outils" || pathname.startsWith("/outils/");
  if (itemHref === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");

  return pathname === itemHref;
}

// --- Méga menus (components/mega-menu.tsx) ---
// Une colonne = un titre (lien facultatif), une description facultative et des liens.
type LienMenu = { label: string; href: string };
export type DomaineMenu = { titre: string; href?: string; description?: string; liens: LienMenu[] };
// Encadré à droite du panneau : quelques liens et un bouton d'action (+ le numéro de téléphone).
export type EncadreMenu = { titre: string; liens: LienMenu[]; bouton: LienMenu };
export type MegaMenu = { colonnes: DomaineMenu[]; encadre: EncadreMenu };

// Formations : chaque domaine renvoie vers sa page générale, puis vers ses formations détaillées.

export const menuFormations: DomaineMenu[] = [
  {
    titre: "Conduite en sécurité et CACES®",
    href: "/caces",
    liens: [
      { label: "R489A : Chariots de manutention", href: "/caces-R489A" },
      { label: "R485A : Gerbeurs à conducteur accompagnant", href: "/caces-R485A" },
      { label: "R486B : Nacelles élévatrices", href: "/caces-R486B" },
      { label: "R484A : Ponts roulants et portiques", href: "/caces-R484A" },
      { label: "R490A : Grues auxiliaires de chargement", href: "/caces-R490A" },
      { label: "R482B : Engins de chantier", href: "/caces-R482B" },
    ],
  },
  {
    titre: "Habilitation électrique",
    href: "/habilitation-electrique",
    liens: [
      { label: "Personnel non électricien", href: "/habilitation-non-electricien" },
      { label: "Personnel électricien", href: "/habilitation-electricien" },
    ],
  },
  {
    titre: "Secourisme (SST)",
    href: "/secourisme",
    liens: [
      { label: "Formation initiale SST", href: "/sst-initiale" },
      { label: "MAC SST (recyclage)", href: "/sst-mac" },
    ],
  },
  {
    titre: "Incendie et évacuation",
    href: "/incendie-evacuation",
    liens: [
      { label: "Manipulation des extincteurs", href: "/manipulation-extincteurs" },
      { label: "Équipier de Première Intervention", href: "/equipier-premiere-intervention" },
      { label: "Évacuation", href: "/evacuation" },
    ],
  },
  {
    titre: "Travaux en hauteur et échafaudages",
    href: "/travaux-hauteur-echafaudages",
    liens: [
      { label: "Travaux en hauteur (harnais)", href: "/travaux-en-hauteur" },
      { label: "Échafaudages fixes (R408)", href: "/echafaudages-fixes" },
      { label: "Échafaudages roulants (R457)", href: "/echafaudages-roulants" },
    ],
  },
  {
    titre: "AIPR",
    href: "/aipr",
    liens: [
      { label: "Opérateur", href: "/aipr-operateurs" },
      { label: "Encadrant", href: "/aipr-encadrants" },
      { label: "Concepteur", href: "/aipr-concepteurs" },
    ],
  },
  { titre: "Gestes et postures", href: "/gestes-postures", liens: [] },
  {
    titre: "Formations spécifiques",
    href: "/formations-specifiques",
    liens: [
      { label: "Tondeuses autoportées", href: "/tondeuses-autoportees" },
      { label: "Tronçonneuse thermique", href: "/tronconneuse-thermique" },
      { label: "Balayeuses routières", href: "/balayeuses-routieres" },
      { label: "Gestes qui sauvent", href: "/gestes-qui-sauvent" },
    ],
  },
];

// VGP : équipements regroupés comme dans la checklist (lib/vgp.ts), puis les épreuves de charge.
const menuVgp: DomaineMenu[] = [
  ...GROUPES_VGP.map((groupe) => ({
    titre: groupe,
    liens: EQUIPEMENTS_VGP.filter((e) => e.groupe === groupe).map((e) => ({ label: e.nom, href: `/${e.page}` })),
  })),
  {
    titre: "Épreuves de charge",
    href: "/poids-de-test-vgp",
    description: "Blocs béton de masse certifiée pour tester la capacité de charge de vos engins de levage.",
    liens: [{ label: "Poids de test VGP", href: "/poids-de-test-vgp" }],
  },
];

// Outils : mêmes intitulés que les cartes de la page /outils.
const menuOutils: DomaineMenu[] = [
  {
    titre: "Quelle formation me faut-il ?",
    href: "/outils/quelle-formation",
    description: "Quelques questions sur votre activité pour trouver la formation adaptée à vos salariés.",
    liens: [],
  },
  {
    titre: "Calculateur de recyclage",
    href: "/outils/calculateur-recyclage",
    description: "L'échéance de vos formations et un rappel par email avant qu'elles n'expirent.",
    liens: [],
  },
  {
    titre: "Comparateur de CACES®",
    href: "/caces#comparateur",
    description: "Les 6 CACES® côte à côte : engins, durée de formation, recyclage et validité.",
    liens: [],
  },
  {
    titre: "Checklist réglementaire VGP",
    href: "/vgp#checklist",
    description: "Vos vérifications obligatoires et leur fréquence, équipement par équipement.",
    liens: [],
  },
];

// Panneau de chaque onglet concerné, repéré par l'adresse de l'onglet dans navItems.
export const megaMenus: Record<string, MegaMenu> = {
  "/#formations": {
    colonnes: menuFormations,
    encadre: {
      titre: "Vous hésitez ?",
      liens: [
        { label: "Quelle formation me faut-il ?", href: "/outils/quelle-formation" },
        { label: "Comparateur de CACES®", href: "/caces#comparateur" },
        { label: "Calculateur de recyclage", href: "/outils/calculateur-recyclage" },
      ],
      bouton: { label: "Demander un devis", href: "/nous-contacter" },
    },
  },
  "/outils": {
    colonnes: menuOutils,
    encadre: {
      titre: "Gratuits et sans inscription",
      liens: [{ label: "Voir tous nos outils", href: "/outils" }],
      bouton: { label: "Demander un devis", href: "/nous-contacter" },
    },
  },
  "/vgp": {
    colonnes: menuVgp,
    encadre: {
      titre: "Votre parc d'équipements",
      liens: [
        { label: "Ma checklist VGP", href: "/vgp#checklist" },
        { label: "Tout savoir sur les VGP", href: "/vgp" },
      ],
      bouton: { label: "Programmer une VGP", href: "/vgp#devis" },
    },
  },
};
