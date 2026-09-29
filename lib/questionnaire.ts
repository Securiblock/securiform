// Questionnaire « Quelle formation me faut-il ? » (components/questionnaire-formation.tsx).
// Les titres et descriptions reprennent ceux des pages de formation : à garder cohérents.

export type Formation = {
  page: string;
  titre: string;
  description: string;
  caces?: boolean;
  // false pour les formations sans recyclage annoncé sur leur page.
  recyclage: boolean;
};

export const FORMATIONS = {
  "caces-R489A": {
    page: "caces-R489A",
    titre: "CACES® R489A : Chariots de manutention",
    description: "Catégories 1 à 6 : transpalettes, gerbeurs, chariots en porte-à-faux et à mât rétractable. Certificat valable 5 ans.",
    caces: true,
    recyclage: true,
  },
  "caces-R485A": {
    page: "caces-R485A",
    titre: "CACES® R485A : Gerbeurs à conducteur accompagnant",
    description: "Conduite de gerbeurs à conducteur accompagnant, catégories 1 et 2. Certificat valable 5 ans.",
    caces: true,
    recyclage: true,
  },
  "caces-R486B": {
    page: "caces-R486B",
    titre: "CACES® R486B Catégorie A : Nacelles élévatrices",
    description: "PEMP à élévation verticale : nacelles à ciseaux et plateformes sur mât. Certificat valable 5 ans.",
    caces: true,
    recyclage: true,
  },
  "caces-R490A": {
    page: "caces-R490A",
    titre: "CACES® R490A : Grues auxiliaires de chargement",
    description: "Grues auxiliaires de chargement, options télécommande et treuil. Certificat valable 5 ans.",
    caces: true,
    recyclage: true,
  },
  "caces-R484A": {
    page: "caces-R484A",
    titre: "CACES® R484A : Ponts roulants et portiques",
    description: "Commande au sol ou en cabine, techniques d'élingage, calcul de charge. Certificat valable 5 ans.",
    caces: true,
    recyclage: true,
  },
  "caces-R482B": {
    page: "caces-R482B",
    titre: "CACES® R482B : Engins de chantier",
    description: "Catégories A à G : pelles, chargeuses, bulldozers, compacteurs, tombereaux. Certificat valable 10 ans.",
    caces: true,
    recyclage: true,
  },
  "habilitation-non-electricien": {
    page: "habilitation-non-electricien",
    titre: "Habilitation électrique : personnel non électricien",
    description: "H0B0, BS, BE/HE Manœuvre, B0L véhicules électriques. Recyclage tous les 3 ans.",
    recyclage: true,
  },
  "habilitation-electricien": {
    page: "habilitation-electricien",
    titre: "Habilitation électrique : personnel électricien",
    description: "Basse et haute tension, véhicules électriques, consignation en 5 étapes. Recyclage tous les 3 ans.",
    recyclage: true,
  },
  "sst-initiale": {
    page: "sst-initiale",
    titre: "Formation initiale SST",
    description: "Cadre légal, programme en 10 modules, évaluation. 14 h sur 2 jours, certificat valable 24 mois.",
    recyclage: true,
  },
  "sst-mac": {
    page: "sst-mac",
    titre: "MAC SST : Recyclage Sauveteur Secouriste du Travail",
    description: "7 h pour maintenir les compétences, tous les 24 mois avant l'expiration du certificat.",
    recyclage: true,
  },
  "gestes-qui-sauvent": {
    page: "gestes-qui-sauvent",
    titre: "Sensibilisation aux gestes qui sauvent",
    description: "Accessible à tous, sans prérequis, en quelques heures : alerter les secours et gestes essentiels.",
    recyclage: false,
  },
  "manipulation-extincteurs": {
    page: "manipulation-extincteurs",
    titre: "Manipulation des extincteurs",
    description: "Triangle du feu, classes de feux A à F, pratique sur feu réel.",
    recyclage: true,
  },
  "equipier-premiere-intervention": {
    page: "equipier-premiere-intervention",
    titre: "Équipier de Première Intervention (EPI)",
    description: "Obligations légales, organisation, RIA, coupures d'énergie. Référentiel APSAD R6.",
    recyclage: true,
  },
  evacuation: {
    page: "evacuation",
    titre: "Évacuation",
    description: "Rôles de guide-file et serre-file, comportement en situation de danger, exercices tous les 6 mois.",
    recyclage: true,
  },
  "travaux-en-hauteur": {
    page: "travaux-en-hauteur",
    titre: "Travaux en hauteur",
    description: "Hiérarchie des protections, harnais, points d'ancrage, longes, lignes de vie.",
    recyclage: true,
  },
  "echafaudages-fixes": {
    page: "echafaudages-fixes",
    titre: "Échafaudages fixes (R408)",
    description: "Montage et démontage, règles de stabilité, classes de charge, vérifications réglementaires.",
    recyclage: true,
  },
  "echafaudages-roulants": {
    page: "echafaudages-roulants",
    titre: "Échafaudages roulants (R457)",
    description: "Blocage des roues, stabilisateurs, procédure de déplacement sécurisé.",
    recyclage: true,
  },
  "aipr-operateurs": {
    page: "aipr-operateurs",
    titre: "AIPR Opérateur",
    description: "Classes de précision DT-DICT, distances de sécurité, règle du mètre et règle des 4A.",
    recyclage: true,
  },
  "aipr-encadrants": {
    page: "aipr-encadrants",
    titre: "AIPR Encadrant",
    description: "Procédures DT-DICT, marquage-piquetage, arrêt de chantier, examen QCM. Attestation valable 5 ans.",
    recyclage: true,
  },
  "aipr-concepteurs": {
    page: "aipr-concepteurs",
    titre: "AIPR Concepteur",
    description: "Guichet Unique, investigations complémentaires, clauses DCE. Pour maîtres d'ouvrage et d'œuvre.",
    recyclage: true,
  },
  "gestes-postures": {
    page: "gestes-postures",
    titre: "Gestes et postures",
    description: "Gestes et postures de manutention pour prévenir les TMS, conformément au Code du travail.",
    recyclage: true,
  },
  "tondeuses-autoportees": {
    page: "tondeuses-autoportees",
    titre: "Conduite en sécurité de tondeuses autoportées",
    description: "Risques de retournement, vérifications, règles de conduite.",
    recyclage: false,
  },
  "tronconneuse-thermique": {
    page: "tronconneuse-thermique",
    titre: "Utilisation en sécurité d'une tronçonneuse thermique",
    description: "Risque de rebond, équipements de protection, vérifications.",
    recyclage: false,
  },
  "balayeuses-routieres": {
    page: "balayeuses-routieres",
    titre: "Conduite en sécurité de balayeuses routières",
    description: "Angles morts, signalisation et vérifications avant utilisation.",
    recyclage: false,
  },
  "formations-specifiques": {
    page: "formations-specifiques",
    titre: "Formation sur mesure",
    description: "Une formation conçue pour vos équipements ou les risques propres à votre activité.",
    recyclage: false,
  },
} satisfies Record<string, Formation>;

export type IdFormation = keyof typeof FORMATIONS;

export type Choix = { libelle: string; precision?: string };

export type Domaine = Choix & {
  id: string;
  // Formation directe (une seule possible) ou question complémentaire.
  formation?: IdFormation;
  question?: { intitule: string; choix: (Choix & { formation: IdFormation })[] };
};

export const DOMAINES: Domaine[] = [
  {
    id: "engins",
    libelle: "Conduite d'engins et matériel de levage",
    precision: "Chariots, nacelles, grues, ponts roulants, engins de chantier",
    question: {
      intitule: "Quel matériel vos salariés utilisent-ils ?",
      choix: [
        { libelle: "Chariot élévateur, transpalette ou gerbeur à conducteur porté", formation: "caces-R489A" },
        { libelle: "Gerbeur à conducteur accompagnant", precision: "Le conducteur marche à côté de l'engin", formation: "caces-R485A" },
        { libelle: "Nacelle élévatrice à élévation verticale", precision: "Nacelle à ciseaux, plateforme sur mât", formation: "caces-R486B" },
        { libelle: "Grue auxiliaire de chargement", precision: "Grue montée sur camion", formation: "caces-R490A" },
        { libelle: "Pont roulant ou portique", formation: "caces-R484A" },
        { libelle: "Engin de chantier", precision: "Pelle, chargeuse, bulldozer, compacteur, tombereau…", formation: "caces-R482B" },
      ],
    },
  },
  {
    id: "electricite",
    libelle: "Travail sur ou près d'installations électriques",
    precision: "Habilitation électrique",
    question: {
      intitule: "Quelles opérations vos salariés réalisent-ils ?",
      choix: [
        {
          libelle: "Des travaux non électriques ou des interventions simples",
          precision: "Peinture, nettoyage ou maçonnerie près d'installations, réarmement, remplacement de fusible…",
          formation: "habilitation-non-electricien",
        },
        {
          libelle: "Des opérations électriques",
          precision: "Installation, raccordement, dépannage, consignation",
          formation: "habilitation-electricien",
        },
      ],
    },
  },
  {
    id: "secours",
    libelle: "Premiers secours",
    precision: "SST, gestes qui sauvent",
    question: {
      intitule: "Quel est votre besoin ?",
      choix: [
        { libelle: "Former de nouveaux Sauveteurs Secouristes du Travail", formation: "sst-initiale" },
        { libelle: "Recycler des SST déjà certifiés", formation: "sst-mac" },
        { libelle: "Sensibiliser tout le personnel en quelques heures", formation: "gestes-qui-sauvent" },
      ],
    },
  },
  {
    id: "incendie",
    libelle: "Incendie et évacuation",
    precision: "Extincteurs, équipiers d'intervention, évacuation",
    question: {
      intitule: "Quel est votre objectif ?",
      choix: [
        { libelle: "Apprendre à tous les salariés à utiliser un extincteur", formation: "manipulation-extincteurs" },
        { libelle: "Constituer une équipe de première intervention", precision: "Extincteurs, RIA, coupures d'énergie", formation: "equipier-premiere-intervention" },
        { libelle: "Organiser l'évacuation du bâtiment", precision: "Guides-file, serre-files, exercices", formation: "evacuation" },
      ],
    },
  },
  {
    id: "hauteur",
    libelle: "Travail en hauteur et échafaudages",
    precision: "Harnais, échafaudages fixes et roulants",
    question: {
      intitule: "Comment vos salariés travaillent-ils en hauteur ?",
      choix: [
        { libelle: "Avec un harnais et des protections antichute", formation: "travaux-en-hauteur" },
        { libelle: "Sur un échafaudage fixe, qu'ils montent ou utilisent", formation: "echafaudages-fixes" },
        { libelle: "Sur un échafaudage roulant", formation: "echafaudages-roulants" },
      ],
    },
  },
  {
    id: "reseaux",
    libelle: "Travaux à proximité des réseaux",
    precision: "AIPR, DT-DICT",
    question: {
      intitule: "Quel est le rôle des personnes à former ?",
      choix: [
        { libelle: "Elles interviennent sur le chantier", precision: "Conducteurs d'engins, ouvriers", formation: "aipr-operateurs" },
        { libelle: "Elles encadrent le chantier", precision: "Chefs de chantier, conducteurs de travaux", formation: "aipr-encadrants" },
        { libelle: "Elles conçoivent le projet", precision: "Bureaux d'études, maîtres d'ouvrage et d'œuvre", formation: "aipr-concepteurs" },
      ],
    },
  },
  {
    id: "manutention",
    libelle: "Manutention manuelle",
    precision: "Prévention des troubles musculosquelettiques",
    formation: "gestes-postures",
  },
  {
    id: "autre",
    libelle: "Matériel spécifique ou autre besoin",
    precision: "Tondeuses, tronçonneuses, balayeuses, sur mesure",
    question: {
      intitule: "De quel matériel s'agit-il ?",
      choix: [
        { libelle: "Tondeuse autoportée", formation: "tondeuses-autoportees" },
        { libelle: "Tronçonneuse thermique", formation: "tronconneuse-thermique" },
        { libelle: "Balayeuse routière", formation: "balayeuses-routieres" },
        { libelle: "Un autre équipement ou un risque particulier", formation: "formations-specifiques" },
      ],
    },
  },
];

export const EFFECTIFS = [
  { id: "1-3", libelle: "1 à 3 personnes" },
  { id: "4-10", libelle: "4 à 10 personnes" },
  { id: "10+", libelle: "Plus de 10 personnes" },
] as const;

export type Effectif = (typeof EFFECTIFS)[number]["id"];

// Conseil de lieu repris de la FAQ de la page L'entreprise.
export function conseilLieu(formation: Formation, effectif: Effectif) {
  if (formation.caces || effectif === "1-3") {
    return {
      titre: "Formation en centre conseillée",
      texte: "La formation en centre est plus adaptée pour le CACES® ou lorsque vous avez peu de salariés à former.",
    };
  }
  return {
    titre: "Formation dans vos locaux conseillée",
    texte:
      "Une formation sur votre site est souvent plus économique et plus efficace : elle prend en compte les spécificités de vos installations.",
  };
}
