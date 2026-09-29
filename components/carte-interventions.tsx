"use client";

import { useState, type PointerEvent } from "react";
import { FRANCE_REGIONS, FRANCE_VIEWBOX, VILLES_POSITIONS } from "@/data/france-regions";

type Zone = { code: string; nom: string; villes: string[] };

// Régions couvertes par SECURIFORM, avec leurs principales villes
// (les villes absentes de VILLES_POSITIONS sont listées sans point sur la carte).
const ZONES: Zone[] = [
  { code: "32", nom: "Hauts-de-France", villes: ["Lille", "Amiens", "Dunkerque", "Saint-Quentin"] },
  { code: "44", nom: "Grand Est", villes: ["Strasbourg", "Reims", "Metz", "Mulhouse", "Nancy"] },
  { code: "28", nom: "Normandie", villes: ["Le Havre", "Rouen", "Caen", "Cherbourg"] },
  { code: "11", nom: "Île-de-France", villes: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Argenteuil"] },
];

const ZONES_TRACEES = ZONES.map((zone) => ({
  zone,
  d: FRANCE_REGIONS.find((r) => r.code === zone.code)?.d ?? "",
}));

// Le survol ne concerne que la souris : au toucher, seul le clic compte,
// sinon un « survol » fantôme resterait actif après le tap.
const estSouris = (e: PointerEvent) => e.pointerType === "mouse";

export default function CarteInterventions() {
  const [survol, setSurvol] = useState<string | null>(null);
  const [selection, setSelection] = useState<string | null>(null);
  const actif = survol ?? selection;
  const zoneActive = ZONES.find((z) => z.code === actif);

  const choisir = (code: string) => setSelection((s) => (s === code ? null : code));

  return (
    <div className="carte-zone">
      <svg
        className="carte-svg"
        viewBox={FRANCE_VIEWBOX}
        role="group"
        aria-label="Carte des régions d'intervention de SECURIFORM"
        onPointerLeave={(e) => estSouris(e) && setSurvol(null)}
      >
        {FRANCE_REGIONS.map((r) => {
          const zone = ZONES.find((z) => z.code === r.code);
          if (!zone) {
            return (
              <path
                key={r.code}
                d={r.d}
                className="carte-region"
                onPointerEnter={(e) => estSouris(e) && setSurvol(null)}
              />
            );
          }
          return (
            <path
              key={r.code}
              d={r.d}
              className={r.code === actif ? "carte-region is-couverte is-socle" : "carte-region is-couverte"}
              tabIndex={0}
              role="button"
              aria-label={`${zone.nom} : ${zone.villes.join(", ")}`}
              aria-pressed={selection === r.code}
              onPointerEnter={(e) => estSouris(e) && setSurvol(r.code)}
              onFocus={(e) => e.currentTarget.matches(":focus-visible") && setSurvol(r.code)}
              onBlur={() => setSurvol(null)}
              onClick={() => choisir(r.code)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  choisir(r.code);
                }
              }}
            />
          );
        })}

        {/* Copies surélevées, toujours présentes : seule la classe change,
            ce qui permet une transition fluide à l'entrée comme à la sortie. */}
        {ZONES_TRACEES.map(({ zone, d }) => (
          <g
            key={zone.code}
            className={zone.code === actif ? "carte-eleve is-active" : "carte-eleve"}
            aria-hidden="true"
          >
            <path d={d} className="carte-region is-couverte is-active" />
            {zone.villes.map((ville) => {
              const pos = VILLES_POSITIONS[ville];
              if (!pos) return null;
              return (
                <g key={ville} className="carte-ville">
                  <circle cx={pos[0]} cy={pos[1]} r={4.5} />
                  <text x={pos[0] + 8} y={pos[1] + 4.5}>{ville}</text>
                </g>
              );
            })}
          </g>
        ))}
      </svg>

      <div className="carte-info">
        <div className="carte-legende">
          {ZONES.map((z) => (
            <button
              key={z.code}
              type="button"
              className={z.code === actif ? "carte-puce is-active" : "carte-puce"}
              aria-pressed={selection === z.code}
              onPointerEnter={(e) => estSouris(e) && setSurvol(z.code)}
              onPointerLeave={(e) => estSouris(e) && setSurvol(null)}
              onClick={() => choisir(z.code)}
            >
              {z.nom}
            </button>
          ))}
        </div>
        {/* Hauteur réservée : le contenu change sans décaler les boutons ci-dessus. */}
        <div className="carte-detail" aria-live="polite">
          {zoneActive ? (
            <>
              <h4>{zoneActive.nom}</h4>
              <p>Principales villes&nbsp;:</p>
              <ul>
                {zoneActive.villes.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>Survolez ou touchez une région en rouge pour afficher ses principales villes.</p>
          )}
        </div>
      </div>
    </div>
  );
}
