// Anti-spam des formulaires du site (voir app/actions.ts).
//
// Les robots postent directement sur le serveur sans passer par la page :
// les contrôles du navigateur (required, type="email") ne les arrêtent pas.
// On rejoue donc côté serveur des règles qu'un vrai visiteur ne peut pas
// enfreindre en utilisant le formulaire normalement — pas de faux positif
// sur un client réel, c'est la priorité.

const URL_RE = /https?:\/\/|www\.|\[url|<a\s/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Champs courts où un lien n'a rien à faire (un nom, un téléphone...).
const SHORT_FIELDS = ["nom", "prenom", "societe", "telephone"] as const;

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

// Renvoie la raison si l'envoi ressemble à un robot, sinon null.
export function detectSpam(formData: FormData): string | null {
  for (const key of SHORT_FIELDS) {
    if (URL_RE.test(field(formData, key))) return `lien dans le champ « ${key} »`;
  }

  // Tous les formulaires du site ont un champ email obligatoire.
  const email = field(formData, "email");
  if (!EMAIL_RE.test(email)) return "email absent ou invalide";
  // Signature classique de robot : adresse Gmail truffée de points
  // (h.u.mm.er.to.l.ympia@gmail.com). Un vrai prénom.nom en a 1 ou 2.
  const localPart = email.split("@")[0];
  if ((localPart.match(/\./g) ?? []).length >= 4) return "email à points multiples";

  // Téléphone : facultatif sur un seul formulaire, mais s'il est rempli il
  // doit ressembler à un numéro (au moins 6 chiffres, pas un paragraphe).
  const telephone = field(formData, "telephone");
  if (telephone) {
    const digits = (telephone.match(/\d/g) ?? []).length;
    if (digits < 6 || telephone.length > 30) return "téléphone invalide";
  }

  // Pas de règle « message vide » : le message n'est obligatoire que sur
  // /nous-contacter, il est facultatif sur les 47 autres formulaires.
  return null;
}

// Limite par IP (en mémoire, par instance serveur : suffit contre un robot
// qui mitraille, pas une garantie globale — même principe que l'admin).
const MAX_SUBMISSIONS = 5;
const WINDOW_MS = 60 * 60 * 1000;
const submissions = new Map<string, number[]>();

export function isFormRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_SUBMISSIONS) {
    submissions.set(ip, recent);
    return true;
  }
  if (submissions.size > 5000) submissions.clear();
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}
