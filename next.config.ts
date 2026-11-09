import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// React needs eval() in dev mode for debugging (reconstructing call stacks);
// it never uses it in production, so 'unsafe-eval' is dev-only.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  frame-src https://www.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Anciennes adresses du site WordPress (pages et PDF) : redirection permanente vers
  // la page équivalente, pour conserver le référencement et les liens existants.
  async redirects() {
    return [
      { source: "/accueil", destination: "/", permanent: true },
      { source: "/liens-utiles-2", destination: "/outils/plan-du-site", permanent: true },
      { source: "/secourisme-gestes-et-postures", destination: "/secourisme", permanent: true },
      { source: "/caces-r486-a", destination: "/caces-R486B", permanent: true },
      { source: "/caces-r490", destination: "/caces-R490A", permanent: true },
      { source: "/caces-r485", destination: "/caces-R485A", permanent: true },
      { source: "/caces-r489", destination: "/caces-R489A", permanent: true },
      { source: "/caces-copy", destination: "/formations-specifiques", permanent: true },
      { source: "/politique-de-cookies-ue", destination: "/politique-cookies", permanent: true },
      { source: "/conduite-en-securite-de-balayeuses-routieres-2", destination: "/balayeuses-routieres", permanent: true },
      { source: "/conduite-en-securite-de-balayeuses-routieres", destination: "/tondeuses-autoportees", permanent: true },
      { source: "/sensibilisation-aux-gestes-qui-sauvent", destination: "/gestes-qui-sauvent", permanent: true },
      { source: "/utilisation-en-securite-dune-tronconneuse-thermique-a-chaine", destination: "/tronconneuse-thermique", permanent: true },
      { source: "/vgp/poids-de-test-vgp", destination: "/poids-de-test-vgp", permanent: true },
      { source: "/rapports-activite", destination: "/statistiques", permanent: true },
      { source: "/avis-clients-2", destination: "/statistiques", permanent: true },
      { source: "/accueil/formations-a-la-conduite-en-securite-caces", destination: "/caces", permanent: true },
      { source: "/accueil/formations-a-la-conduite-en-securite-caces/equipements-et-charges-utilises-en-formation-test-caces", destination: "/caces", permanent: true },
      { source: "/accueil/formations-a-la-conduite-en-securite-caces/formation-a-la-conduite-en-securite-caces-r482a", destination: "/caces-R482B", permanent: true },
      { source: "/accueil/formations-a-la-conduite-en-securite-caces/formation-a-la-conduite-en-securite-caces-r484", destination: "/caces-R484A", permanent: true },
      { source: "/accueil/formations-aipr", destination: "/aipr", permanent: true },
      { source: "/accueil/formations-aipr/formation-concepteurs-aipr", destination: "/aipr-concepteurs", permanent: true },
      { source: "/accueil/formations-aipr/formation-encadrants-aipr", destination: "/aipr-encadrants", permanent: true },
      { source: "/accueil/formations-aipr/formation-operateurs-aipr", destination: "/aipr-operateurs", permanent: true },
      { source: "/accueil/formation-gestes-et-postures", destination: "/gestes-postures", permanent: true },
      { source: "/accueil/formations-incendie-et-evacuation", destination: "/incendie-evacuation", permanent: true },
      { source: "/accueil/formations-incendie-et-evacuation/formation-equipier-de-premiere-intervention", destination: "/equipier-premiere-intervention", permanent: true },
      { source: "/accueil/formations-incendie-et-evacuation/formation-manipulation-extincteurs", destination: "/manipulation-extincteurs", permanent: true },
      { source: "/accueil/formations-incendie-et-evacuation/formation-evacuation", destination: "/evacuation", permanent: true },
      { source: "/accueil/formations-travaux-hauteur-echafaudages", destination: "/travaux-hauteur-echafaudages", permanent: true },
      { source: "/accueil/formations-travaux-hauteur-echafaudages/formation-travaux-en-hauteur", destination: "/travaux-en-hauteur", permanent: true },
      { source: "/accueil/formations-travaux-hauteur-echafaudages/formation-echafaudages-fixes", destination: "/echafaudages-fixes", permanent: true },
      { source: "/accueil/formations-travaux-hauteur-echafaudages/formation-echafaudages-roulants", destination: "/echafaudages-roulants", permanent: true },
      { source: "/accueil/formation-secourisme-sst", destination: "/secourisme", permanent: true },
      { source: "/accueil/preparation-habilitation-electrique", destination: "/habilitation-electrique", permanent: true },
      { source: "/accueil/preparation-habilitation-electrique/formation-personnel-non-electricien", destination: "/habilitation-non-electricien", permanent: true },
      { source: "/accueil/preparation-habilitation-electrique/formation-personnel-electricien", destination: "/habilitation-electricien", permanent: true },
      { source: "/aipr/formation-concepteurs-aipr", destination: "/aipr-concepteurs", permanent: true },
      { source: "/aipr/formation-encadrants-aipr", destination: "/aipr-encadrants", permanent: true },
      { source: "/aipr/formation-operateurs-aipr", destination: "/aipr-operateurs", permanent: true },
      { source: "/caces/formation-a-la-conduite-en-securite-caces-R482B", destination: "/caces-R482B", permanent: true },
      { source: "/caces/formation-a-la-conduite-en-securite-caces-R484A", destination: "/caces-R484A", permanent: true },
      { source: "/travaux-hauteur-echafaudages/formation-echafaudages-fixes", destination: "/echafaudages-fixes", permanent: true },
      { source: "/travaux-hauteur-echafaudages/formation-echafaudages-roulants", destination: "/echafaudages-roulants", permanent: true },
      { source: "/incendie-evacuation/formation-equipier-de-premiere-intervention", destination: "/equipier-premiere-intervention", permanent: true },
      { source: "/incendie-evacuation/formation-evacuation", destination: "/evacuation", permanent: true },
      { source: "/habilitation-electrique/formation-personnel-electricien", destination: "/habilitation-electricien", permanent: true },
      { source: "/habilitation-electrique/formation-personnel-non-electricien", destination: "/habilitation-non-electricien", permanent: true },
      { source: "/incendie-evacuation/formation-manipulation-extincteurs", destination: "/manipulation-extincteurs", permanent: true },
      { source: "/travaux-hauteur-echafaudages/formation-travaux-en-hauteur", destination: "/travaux-en-hauteur", permanent: true },
      { source: "/verifications-generales-periodiques-des-accessoires-de-levages", destination: "/vgp-accessoires-levage", permanent: true },
      { source: "/verifications-generales-periodiques-des-bras-de-levages", destination: "/vgp-bras-de-levage", permanent: true },
      { source: "/verifications-generales-periodiques-des-chargeuses", destination: "/vgp-chargeuses", permanent: true },
      { source: "/verifications-generales-periodiques-des-chariots-elevateurs", destination: "/vgp-chariots-elevateurs", permanent: true },
      { source: "/verifications-generales-periodiques-des-chariots-telescopiques", destination: "/vgp-chariots-telescopiques", permanent: true },
      { source: "/verifications-generales-periodiques-des-compacteurs", destination: "/vgp-compacteurs", permanent: true },
      { source: "/verifications-generales-periodiques-des-grues-auxiliaires", destination: "/vgp-grues-auxiliaires", permanent: true },
      { source: "/verifications-generales-periodiques-des-hayons-elevateurs", destination: "/vgp-hayons-elevateurs", permanent: true },
      { source: "/verifications-generales-periodiques-des-nacelles-elevatrices", destination: "/vgp-nacelles-elevatrices", permanent: true },
      { source: "/verifications-generales-periodiques-des-pelleteuses", destination: "/vgp-pelleteuses", permanent: true },
      { source: "/verifications-generales-periodiques-des-ponts-roulant", destination: "/vgp-ponts-roulants", permanent: true },
      { source: "/verifications-generales-periodiques-des-tombereaux", destination: "/vgp-tombereaux", permanent: true },
      { source: "/wp-content/uploads/2026/03/Certificat-Qualiopi-renouvellement.pdf", destination: "/pdf/Certificat-Qualiopi-renouvellement.pdf", permanent: true },
      { source: "/wp-content/uploads/2022/11/avis-client-2019.pdf", destination: "/pdf/avis-client-2019.pdf", permanent: true },
      { source: "/wp-content/uploads/2022/11/avis-client-2020.pdf", destination: "/pdf/avis-client-2020.pdf", permanent: true },
      { source: "/wp-content/uploads/2022/11/avis-client-2021.pdf", destination: "/pdf/avis-client-2021.pdf", permanent: true },
      { source: "/wp-content/uploads/2023/03/avis-client-2022.pdf", destination: "/pdf/avis-client-2022.pdf", permanent: true },
      { source: "/wp-content/uploads/2024/03/avis-client-2023-1.pdf", destination: "/pdf/avis-client-2023-1.pdf", permanent: true },
      { source: "/wp-content/uploads/2026/05/avis-client-2024.pdf", destination: "/pdf/avis-client-2024.pdf", permanent: true },
      { source: "/wp-content/uploads/2024/02/Rapport-dactivite-2020.pdf", destination: "/pdf/Rapport-dactivite-2020.pdf", permanent: true },
      { source: "/wp-content/uploads/2024/02/Rapport-dactivite-2021.pdf", destination: "/pdf/Rapport-dactivite-2021.pdf", permanent: true },
      { source: "/wp-content/uploads/2024/02/Rapport-dactivite-2022.pdf", destination: "/pdf/Rapport-dactivite-2022.pdf", permanent: true },
      { source: "/wp-content/uploads/2024/02/Rapport-dactivite-2023.pdf", destination: "/pdf/Rapport-dactivite-2023.pdf", permanent: true },
      { source: "/wp-content/uploads/2026/05/Rapport-dactivite-2024.pdf", destination: "/pdf/Rapport-dactivite-2024.pdf", permanent: true },
      { source: "/wp-content/uploads/2026/05/Rapport-dactivite-2025.pdf", destination: "/pdf/Rapport-dactivite-2025.pdf", permanent: true },
      { source: "/wp-content/uploads/2023/05/Accueil-des-personnes-en-situation-de-handicap.pdf", destination: "/pdf/Accueil-des-personnes-en-situation-de-handicap.pdf", permanent: true },
      { source: "/wp-content/uploads/2023/05/Accessibilite-de-letablissement.pdf", destination: "/pdf/Accessibilite-de-letablissement.pdf", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
