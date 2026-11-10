// Le blog ne doit plus jamais parler du SST (Sauveteur Secouriste du Travail) :
// c'est un dispositif encadré par l'INRS, qui peut sanctionner un organisme
// pour un contenu inexact. Les pages formation du site (/secourisme,
// /sst-initiale, /sst-mac) ne sont pas concernées — uniquement le blog généré.
//
// Le prompt Gemini l'interdit déjà, mais un modèle ne respecte pas toujours
// ses consignes : ce filtre est le vrai garde-fou, appliqué à la génération,
// aux suggestions de sujets, à la file automatique et à la publication.
const FORBIDDEN_RE = /\bS\.?S\.?T\b|sauveteurs?[\s-]+secouristes?|secouris(me|tes?)\b/i;

export const FORBIDDEN_TOPIC_MESSAGE =
  "Le blog ne doit pas parler du SST (Sauveteur Secouriste du Travail) ni du secourisme. Retirez toute mention du SST avant de continuer.";

export function mentionsForbiddenTopic(...texts: (string | null | undefined)[]): boolean {
  return texts.some((t) => !!t && FORBIDDEN_RE.test(t));
}
