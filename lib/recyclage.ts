// Périodicités de recyclage utilisées par le calculateur (components/calculateur-recyclage.tsx)
// et par les rappels par email (lib/rappels*.ts). Elles reprennent les durées de validité
// annoncées sur chaque page de formation : toute modification ici doit rester cohérente
// avec le texte de ces pages.

export type OptionRecyclage = {
  libelle: string;
  mois: number;
  // Page de la formation (sans « / ») : lien « Programmer mon recyclage » des emails de rappel.
  page: string;
  // Catégorie, pour regrouper la liste du calculateur de la page Outils.
  groupe: string;
  // Précision affichée sous le résultat (périodicité recommandée plutôt qu'obligatoire, fourchette…).
  note?: string;
};

const CACES = {
  R482B: { libelle: "CACES® R482B : Engins de chantier", mois: 120, page: "caces-R482B", groupe: "CACES®" },
  R484A: { libelle: "CACES® R484A : Ponts roulants et portiques", mois: 60, page: "caces-R484A", groupe: "CACES®" },
  R485A: { libelle: "CACES® R485A : Gerbeurs à conducteur accompagnant", mois: 60, page: "caces-R485A", groupe: "CACES®" },
  R486B: { libelle: "CACES® R486B : Nacelles élévatrices", mois: 60, page: "caces-R486B", groupe: "CACES®" },
  R489A: { libelle: "CACES® R489A : Chariots de manutention", mois: 60, page: "caces-R489A", groupe: "CACES®" },
  R490A: { libelle: "CACES® R490A : Grues auxiliaires de chargement", mois: 60, page: "caces-R490A", groupe: "CACES®" },
} satisfies Record<string, OptionRecyclage>;

const HABILITATION = {
  nonElectricien: {
    libelle: "Habilitation électrique : personnel non électricien",
    mois: 36,
    page: "habilitation-non-electricien",
    groupe: "Habilitation électrique",
    note: "Recyclage tous les 3 ans, conformément à la norme NF C18-510.",
  },
  electricien: {
    libelle: "Habilitation électrique : personnel électricien",
    mois: 36,
    page: "habilitation-electricien",
    groupe: "Habilitation électrique",
    note: "Recyclage tous les 3 ans, conformément à la norme NF C18-510.",
  },
} satisfies Record<string, OptionRecyclage>;

const SST: OptionRecyclage = {
  libelle: "Certificat Sauveteur Secouriste du Travail (SST)",
  mois: 24,
  page: "sst-mac",
  groupe: "Secourisme",
  note: "Le recyclage se fait par un MAC de 7 heures, à réaliser avant l'expiration du certificat.",
};

const AIPR: OptionRecyclage = {
  libelle: "Attestation AIPR (Opérateur, Encadrant, Concepteur)",
  mois: 60,
  page: "aipr",
  groupe: "AIPR",
};

const ECHAFAUDAGES = {
  R408: { libelle: "Échafaudages fixes (R408)", mois: 60, page: "echafaudages-fixes", groupe: "Travaux en hauteur" },
  R457: { libelle: "Échafaudages roulants (R457)", mois: 60, page: "echafaudages-roulants", groupe: "Travaux en hauteur" },
} satisfies Record<string, OptionRecyclage>;

const HARNAIS: OptionRecyclage = {
  libelle: "Travaux en hauteur : port du harnais",
  mois: 36,
  page: "travaux-en-hauteur",
  groupe: "Travaux en hauteur",
  note: "Recyclage recommandé tous les 3 ans.",
};

const GESTES_POSTURES: OptionRecyclage = {
  libelle: "Gestes et postures",
  mois: 24,
  page: "gestes-postures",
  groupe: "Gestes et postures",
  note: "Recyclage recommandé tous les 2 à 3 ans : le calcul retient 2 ans.",
};

const EPI: OptionRecyclage = {
  libelle: "Équipier de Première Intervention (EPI)",
  mois: 12,
  page: "equipier-premiere-intervention",
  groupe: "Incendie et évacuation",
  note: "Recyclage recommandé tous les 1 à 2 ans : le calcul retient 1 an.",
};

const EXTINCTEURS: OptionRecyclage = {
  libelle: "Manipulation des extincteurs",
  mois: 12,
  page: "manipulation-extincteurs",
  groupe: "Incendie et évacuation",
  note: "Recyclage recommandé tous les 6 mois à 3 ans selon les risques de votre établissement : le calcul retient 1 an.",
};

const EVACUATION: OptionRecyclage = {
  libelle: "Exercice d'évacuation",
  mois: 6,
  page: "evacuation",
  groupe: "Incendie et évacuation",
  note: "Le Code du travail impose un exercice d'évacuation au moins tous les 6 mois.",
};

// Clé = page où le calculateur est affiché ; valeur = formations proposées dans sa liste.
export const RECYCLAGES = {
  // Page Outils : toutes les formations, regroupées par catégorie.
  outils: [
    ...Object.values(CACES),
    HABILITATION.nonElectricien,
    HABILITATION.electricien,
    SST,
    AIPR,
    ECHAFAUDAGES.R408,
    ECHAFAUDAGES.R457,
    HARNAIS,
    GESTES_POSTURES,
    EPI,
    EXTINCTEURS,
    EVACUATION,
  ],
  caces: Object.values(CACES),
  "caces-R482B": [CACES.R482B],
  "caces-R484A": [CACES.R484A],
  "caces-R485A": [CACES.R485A],
  "caces-R486B": [CACES.R486B],
  "caces-R489A": [CACES.R489A],
  "caces-R490A": [CACES.R490A],
  "habilitation-electrique": [HABILITATION.nonElectricien, HABILITATION.electricien],
  "habilitation-electricien": [HABILITATION.electricien],
  "habilitation-non-electricien": [HABILITATION.nonElectricien],
  secourisme: [SST],
  "sst-initiale": [SST],
  "sst-mac": [SST],
  aipr: [AIPR],
  "aipr-operateurs": [AIPR],
  "aipr-encadrants": [AIPR],
  "aipr-concepteurs": [AIPR],
  "travaux-hauteur-echafaudages": [ECHAFAUDAGES.R408, ECHAFAUDAGES.R457, HARNAIS],
  "echafaudages-fixes": [ECHAFAUDAGES.R408],
  "echafaudages-roulants": [ECHAFAUDAGES.R457],
  "travaux-en-hauteur": [HARNAIS],
  "gestes-postures": [GESTES_POSTURES],
  "incendie-evacuation": [EPI, EXTINCTEURS, EVACUATION],
  "equipier-premiere-intervention": [EPI],
  "manipulation-extincteurs": [EXTINCTEURS],
  evacuation: [EVACUATION],
} satisfies Record<string, OptionRecyclage[]>;

export type FormationRecyclage = keyof typeof RECYCLAGES;

export const estFormationRecyclage = (valeur: string): valeur is FormationRecyclage =>
  Object.prototype.hasOwnProperty.call(RECYCLAGES, valeur);

// --- Calcul des dates, partagé entre le calculateur (navigateur) et les rappels par email (serveur) ---

// "AAAA-MM-JJ" (valeur d'un <input type="date">) → date locale, sans décalage de fuseau.
export function lireDate(valeur: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valeur);
  if (!m) return null;
  const date = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  if (date.getMonth() !== Number(m[2]) - 1) return null; // 31/02 et autres dates impossibles
  return date.getFullYear() >= 1970 ? date : null;
}

export const versIso = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

// Ajoute des mois en restant sur le dernier jour du mois si besoin (31 janvier + 1 mois → 28/29 février).
export function ajouterMois(date: Date, mois: number): Date {
  const cible = new Date(date.getFullYear(), date.getMonth() + mois, 1);
  const dernierJour = new Date(cible.getFullYear(), cible.getMonth() + 1, 0).getDate();
  cible.setDate(Math.min(date.getDate(), dernierJour));
  return cible;
}

export function moisEntre(debut: Date, fin: Date): number {
  let mois = (fin.getFullYear() - debut.getFullYear()) * 12 + fin.getMonth() - debut.getMonth();
  if (fin.getDate() < debut.getDate()) mois -= 1;
  return mois;
}

export function formaterDuree(mois: number): string {
  if (mois < 1) return "moins d'un mois";
  const ans = Math.floor(mois / 12);
  const reste = mois % 12;
  const partAns = ans > 0 ? `${ans} an${ans > 1 ? "s" : ""}` : "";
  const partMois = reste > 0 ? `${reste} mois` : "";
  return [partAns, partMois].filter(Boolean).join(" et ");
}

export const formaterDate = (date: Date) =>
  date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

// Échéance de la formation et date à laquelle prévenir : 3 mois avant pour les validités longues, 1 mois sinon.
export function calculerEcheance(option: OptionRecyclage, dateFormation: Date) {
  const echeance = ajouterMois(dateFormation, option.mois);
  const rappel = ajouterMois(echeance, -(option.mois >= 24 ? 3 : 1));
  return { echeance, rappel };
}
