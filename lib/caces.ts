// Données du comparateur de CACES (components/comparateur-caces.tsx).
// Durées reprises des tableaux « Durée et validité » de chaque page CACES, descriptions
// des cartes de la page /caces : à garder cohérentes avec ces pages.

export type Caces = {
  code: string;
  page: string;
  titre: string;
  engins: string;
  photo: string;
  debutant: string;
  experimente: string;
  recyclage: string;
  validiteAns: number;
  // Durées maximales en jours (formation débutant, recyclage) : servent au tri.
  debutantMaxJours: number;
  recyclageMaxJours: number;
};

export const CACES: Caces[] = [
  {
    code: "R489A",
    page: "caces-R489A",
    titre: "Chariots de manutention",
    engins: "Transpalettes, gerbeurs et chariots élévateurs en porte-à-faux, pour l'entrepôt, la logistique et la distribution.",
    photo: "/image/caces-R489A.webp",
    debutant: "2 à 5 jours",
    experimente: "1 à 2 jours",
    recyclage: "1 jour",
    validiteAns: 5,
    debutantMaxJours: 5,
    recyclageMaxJours: 1,
  },
  {
    code: "R485A",
    page: "caces-R485A",
    titre: "Gerbeurs à conducteur accompagnant",
    engins: "Conduite de gerbeurs accompagnants pour la manutention en entrepôt et environnements spécialisés.",
    photo: "/image/caces-R485A.webp",
    debutant: "1 à 2 jours",
    experimente: "1 jour",
    recyclage: "1 jour",
    validiteAns: 5,
    debutantMaxJours: 2,
    recyclageMaxJours: 1,
  },
  {
    code: "R486B",
    page: "caces-R486B",
    titre: "Nacelles élévatrices (PEMP)",
    engins: "Plateformes élévatrices mobiles de personnes à élévation verticale, pour les interventions en hauteur ponctuelles.",
    photo: "/image/caces-R486B.webp",
    debutant: "1 à 2 jours",
    experimente: "1 jour",
    recyclage: "1 jour",
    validiteAns: 5,
    debutantMaxJours: 2,
    recyclageMaxJours: 1,
  },
  {
    code: "R484A",
    page: "caces-R484A",
    titre: "Ponts roulants et portiques",
    engins: "Conduite des ponts roulants et portiques de levage utilisés en ateliers et environnements industriels.",
    photo: "/image/caces-R484A.webp",
    debutant: "2 à 4 jours",
    experimente: "1 à 2 jours",
    recyclage: "1 jour",
    validiteAns: 5,
    debutantMaxJours: 4,
    recyclageMaxJours: 1,
  },
  {
    code: "R490A",
    page: "caces-R490A",
    titre: "Grues auxiliaires de chargement",
    engins: "Grues de chargement montées sur véhicules porteurs, pour le transport routier et l'approvisionnement de chantier.",
    photo: "/image/caces-R490A.webp",
    debutant: "2 à 3 jours",
    experimente: "1 à 2 jours",
    recyclage: "1 jour",
    validiteAns: 5,
    debutantMaxJours: 3,
    recyclageMaxJours: 1,
  },
  {
    code: "R482B",
    page: "caces-R482B",
    titre: "Engins de chantier",
    engins: "Pelles, chargeuses, engins de terrassement, compacteurs et chariots télescopiques utilisés en BTP, carrières et travaux publics.",
    photo: "/image/caces-R482B.webp",
    debutant: "2 à 5 jours",
    experimente: "2 jours environ",
    recyclage: "1 à 2 jours",
    validiteAns: 10,
    debutantMaxJours: 5,
    recyclageMaxJours: 2,
  },
];
