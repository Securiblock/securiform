// Côté navigateur : préremplit le message du formulaire de devis de la page (#devis, champ #message)
// puis y amène le visiteur. Utilisé par le calculateur de recyclage et le questionnaire.
export function allerAuDevis(message: string) {
  const champ = document.getElementById("message");
  if (champ instanceof HTMLTextAreaElement) {
    champ.value = champ.value.trim() ? `${champ.value.trim()}\n\n${message}` : message;
  }
  document.getElementById("devis")?.scrollIntoView({ behavior: "smooth", block: "start" });
  document.getElementById("nom")?.focus({ preventScroll: true });
}
