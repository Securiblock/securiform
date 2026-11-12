// Outils communs aux tests unitaires des formulaires.

export function formData(fields: Record<string, string>): FormData {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.append(key, value);
  return data;
}

// redirect() de Next interrompt l'action en levant une erreur : le mock fait
// pareil, avec l'URL de destination, pour que les tests puissent la lire.
export class RedirectSignal extends Error {
  constructor(public readonly url: string) {
    super(`redirect ${url}`);
  }
}

export async function redirectionDe(action: () => Promise<unknown>): Promise<string> {
  try {
    await action();
  } catch (err) {
    if (err instanceof RedirectSignal) return err.url;
    throw err;
  }
  throw new Error("L'action s'est terminée sans redirection.");
}

// Un vrai client, tel que les formulaires du site l'envoient.
export const CLIENT_VALIDE = {
  nom: "Dupont",
  prenom: "Jean",
  societe: "BTP Nord",
  email: "jean.dupont@btp-nord.fr",
  telephone: "06 12 34 56 78",
  formation: "CACES R489",
  message: "Bonjour, nous souhaitons un devis pour 4 salariés.",
};
