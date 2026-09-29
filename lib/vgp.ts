// Données de la checklist VGP (components/checklist-vgp.tsx). Les périodicités reprennent
// celles annoncées sur chaque page VGP du site : à garder cohérentes avec ces pages.

export type EquipementVgp = {
  id: string;
  nom: string;
  page: string;
  photo: string;
  groupe: "Manutention" | "Levage" | "Engins de chantier";
  // Périodicité en mois ; `usages` quand elle dépend de l'utilisation de l'équipement.
  mois: number;
  usages?: { libelle: string; mois: number }[];
  // Valeur de la liste « Équipement concerné » du formulaire de devis de /vgp.
  valeurDevis: string;
  // Formation des conducteurs à proposer en lien avec l'équipement.
  formation?: { page: string; libelle: string };
};

const R482B = { page: "caces-R482B", libelle: "CACES® R482B : Engins de chantier" };

export const EQUIPEMENTS_VGP: EquipementVgp[] = [
  {
    id: "chariots-elevateurs",
    nom: "Chariots élévateurs",
    page: "vgp-chariots-elevateurs",
    photo: "/image/vgp-chariots-elevateurs.webp",
    groupe: "Manutention",
    mois: 6,
    valeurDevis: "chariots",
    formation: { page: "caces-R489A", libelle: "CACES® R489A : Chariots de manutention" },
  },
  {
    id: "chariots-telescopiques",
    nom: "Chariots télescopiques",
    page: "vgp-chariots-telescopiques",
    photo: "/image/vgp-chariots-telescopiques.webp",
    groupe: "Manutention",
    mois: 6,
    valeurDevis: "telescopiques",
    formation: R482B,
  },
  {
    id: "hayons-elevateurs",
    nom: "Hayons élévateurs",
    page: "vgp-hayons-elevateurs",
    photo: "/image/vgp-hayons-elevateurs.webp",
    groupe: "Manutention",
    mois: 6,
    valeurDevis: "hayons",
  },
  {
    id: "nacelles-elevatrices",
    nom: "Nacelles élévatrices (PEMP)",
    page: "vgp-nacelles-elevatrices",
    photo: "/image/vgp-nacelles-elevatrices.webp",
    groupe: "Levage",
    mois: 6,
    valeurDevis: "nacelles",
    formation: { page: "caces-R486B", libelle: "CACES® R486B : Nacelles élévatrices" },
  },
  {
    id: "grues-auxiliaires",
    nom: "Grues auxiliaires de chargement",
    page: "vgp-grues-auxiliaires",
    photo: "/image/vgp-grues-auxiliaires.webp",
    groupe: "Levage",
    mois: 6,
    valeurDevis: "grues",
    formation: { page: "caces-R490A", libelle: "CACES® R490A : Grues auxiliaires de chargement" },
  },
  {
    id: "ponts-roulants",
    nom: "Ponts roulants et portiques",
    page: "vgp-ponts-roulants",
    photo: "/image/vgp-ponts-roulants.webp",
    groupe: "Levage",
    mois: 12,
    valeurDevis: "ponts",
    formation: { page: "caces-R484A", libelle: "CACES® R484A : Ponts roulants et portiques" },
  },
  {
    id: "bras-de-levage",
    nom: "Bras de levage",
    page: "vgp-bras-de-levage",
    photo: "/image/vgp-bras-de-levage.webp",
    groupe: "Levage",
    mois: 6,
    valeurDevis: "bras",
  },
  {
    id: "accessoires-levage",
    nom: "Accessoires de levage",
    page: "vgp-accessoires-levage",
    photo: "/image/vgp-accessoires-levage.webp",
    groupe: "Levage",
    mois: 6,
    valeurDevis: "accessoires",
    // L'élingage fait partie du programme du CACES R484A (page caces-R484A).
    formation: { page: "caces-R484A", libelle: "CACES® R484A : techniques d'élingage" },
  },
  {
    id: "pelleteuses",
    nom: "Pelleteuses",
    page: "vgp-pelleteuses",
    photo: "/image/vgp-pelleteuses.webp",
    groupe: "Engins de chantier",
    mois: 12,
    valeurDevis: "pelleteuses",
    formation: R482B,
  },
  {
    id: "chargeuses",
    nom: "Chargeuses",
    page: "vgp-chargeuses",
    photo: "/image/vgp-chargeuses.webp",
    groupe: "Engins de chantier",
    mois: 6,
    valeurDevis: "chargeuses",
    formation: R482B,
  },
  {
    id: "compacteurs",
    nom: "Compacteurs",
    page: "vgp-compacteurs",
    photo: "/image/vgp-compacteurs.webp",
    groupe: "Engins de chantier",
    mois: 12,
    valeurDevis: "compacteurs",
    formation: R482B,
  },
  {
    id: "tombereaux",
    nom: "Tombereaux",
    page: "vgp-tombereaux",
    photo: "/image/vgp-tombereaux.webp",
    groupe: "Engins de chantier",
    mois: 12,
    usages: [
      { libelle: "Transport de matériaux", mois: 12 },
      { libelle: "Usage de levage", mois: 6 },
    ],
    valeurDevis: "tombereaux",
    formation: R482B,
  },
];

export const GROUPES_VGP = ["Manutention", "Levage", "Engins de chantier"] as const;
