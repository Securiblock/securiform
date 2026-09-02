import type { MetadataRoute } from "next";

const BASE_URL = "https://securiform.fr";

const hubs: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/caces", priority: 0.9 },
  { path: "/habilitation-electrique", priority: 0.9 },
  { path: "/secourisme", priority: 0.9 },
  { path: "/incendie-evacuation", priority: 0.9 },
  { path: "/travaux-hauteur-echafaudages", priority: 0.9 },
  { path: "/aipr", priority: 0.9 },
  { path: "/vgp", priority: 0.9 },
  { path: "/formations-specifiques", priority: 0.8 },
  { path: "/gestes-postures", priority: 0.8 },
];

const pages: string[] = [
  "/caces-r482a",
  "/caces-r484",
  "/caces-r485",
  "/caces-r486a",
  "/caces-r489",
  "/caces-r490",
  "/habilitation-electricien",
  "/habilitation-non-electricien",
  "/sst-initiale",
  "/sst-mac",
  "/evacuation",
  "/manipulation-extincteurs",
  "/equipier-premiere-intervention",
  "/echafaudages-fixes",
  "/echafaudages-roulants",
  "/travaux-en-hauteur",
  "/aipr-concepteurs",
  "/aipr-encadrants",
  "/aipr-operateurs",
  "/vgp-accessoires-levage",
  "/vgp-bras-de-levage",
  "/vgp-chargeuses",
  "/vgp-chariots-elevateurs",
  "/vgp-chariots-telescopiques",
  "/vgp-compacteurs",
  "/vgp-grues-auxiliaires",
  "/vgp-hayons-elevateurs",
  "/vgp-nacelles-elevatrices",
  "/vgp-pelleteuses",
  "/vgp-ponts-roulants",
  "/vgp-tombereaux",
  "/tondeuses-autoportees",
  "/tronconneuse-thermique",
  "/balayeuses-routieres",
  "/gestes-qui-sauvent",
  "/poids-de-test-vgp",
  "/statistiques",
  "/lentreprise",
  "/nous-contacter",
  "/nous-recrutons",
];

const legal: string[] = ["/mentions-legales", "/conditions-generales-de-vente"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...hubs.map(({ path, priority }) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...pages.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...legal.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
