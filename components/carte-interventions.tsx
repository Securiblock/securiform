"use client";

import { useState, type PointerEvent } from "react";
import {
  FRANCE_DEPARTEMENTS,
  FRANCE_REGIONS_CONTOURS,
  FRANCE_VIEWBOX,
  VILLES_POSITIONS,
} from "@/data/france-carte";

type Zone = {
  id: string;
  nom: string;
  departements: string[];
  villes: string[];
  // Villes pointées sur la carte ; « gauche » place l'étiquette à gauche du point.
  points: { ville: string; gauche?: boolean }[];
};

// Départements couverts par SECURIFORM, regroupés par région.
const ZONES: Zone[] = [
  {
    id: "hdf",
    nom: "Hauts-de-France",
    departements: ["59", "62", "02", "60", "80"],
    villes: ["Lille", "Amiens", "Dunkerque", "Beauvais", "Saint-Quentin"],
    points: [{ ville: "Lille" }, { ville: "Amiens" }, { ville: "Dunkerque" }, { ville: "Beauvais" }],
  },
  {
    id: "grand-est",
    nom: "Grand Est",
    departements: ["51", "08", "10"],
    villes: ["Reims", "Troyes", "Charleville-Mézières", "Châlons-en-Champagne"],
    points: [{ ville: "Reims" }, { ville: "Troyes" }, { ville: "Charleville-Mézières" }, { ville: "Châlons-en-Champagne" }],
  },
  {
    id: "normandie",
    nom: "Normandie",
    departements: ["76", "27"],
    villes: ["Le Havre", "Rouen", "Évreux", "Dieppe"],
    points: [{ ville: "Le Havre", gauche: true }, { ville: "Rouen" }, { ville: "Évreux" }, { ville: "Dieppe" }],
  },
  {
    id: "idf",
    nom: "Île-de-France",
    departements: ["75", "77", "78", "91", "92", "93", "94", "95"],
    villes: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Argenteuil"],
    points: [{ ville: "Paris" }],
  },
];

const DEPARTEMENTS = new Map(FRANCE_DEPARTEMENTS.map((d) => [d.code, d]));
const ZONE_DU_DEPARTEMENT = new Map(ZONES.flatMap((z) => z.departements.map((code) => [code, z.id] as const)));

// Le survol ne concerne que la souris : au toucher, seul le clic compte,
// sinon un « survol » fantôme resterait actif après le tap.
const estSouris = (e: PointerEvent) => e.pointerType === "mouse";

export default function CarteInterventions() {
  const [survol, setSurvol] = useState<string | null>(null);
  const [selection, setSelection] = useState<string | null>(null);
  const actif = survol ?? selection;
  const zoneActive = ZONES.find((z) => z.id === actif);

  const choisir = (id: string) => setSelection((s) => (s === id ? null : id));

  return (
    <div className="carte-zone">
      <svg
        className="carte-svg"
        viewBox={FRANCE_VIEWBOX}
        role="group"
        aria-label="Carte des départements d'intervention de SECURIFORM"
      >
        {FRANCE_DEPARTEMENTS.filter((d) => !ZONE_DU_DEPARTEMENT.has(d.code)).map((d) => (
          <path key={d.code} d={d.d} className="carte-dep" />
        ))}

        {/* Une zone = un seul élément interactif (un arrêt au clavier) */}
        {ZONES.map((zone) => (
          <g
            key={zone.id}
            className={zone.id === actif ? "carte-zone-groupe is-socle" : "carte-zone-groupe"}
            tabIndex={0}
            role="button"
            aria-label={`${zone.nom} : ${zone.departements.map((c) => DEPARTEMENTS.get(c)?.nom).join(", ")}`}
            aria-pressed={selection === zone.id}
            onPointerEnter={(e) => estSouris(e) && setSurvol(zone.id)}
            onPointerLeave={(e) => estSouris(e) && setSurvol(null)}
            onFocus={(e) => e.currentTarget.matches(":focus-visible") && setSurvol(zone.id)}
            onBlur={() => setSurvol(null)}
            onClick={() => choisir(zone.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                choisir(zone.id);
              }
            }}
          >
            {zone.departements.map((code) => (
              <path key={code} d={DEPARTEMENTS.get(code)?.d} className="carte-dep is-couvert" />
            ))}
          </g>
        ))}

        <g className="carte-contours" aria-hidden="true">
          {FRANCE_REGIONS_CONTOURS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* Copies surélevées, toujours présentes : seule la classe change,
            ce qui permet une transition fluide à l'entrée comme à la sortie. */}
        {ZONES.map((zone) => (
          <g
            key={zone.id}
            className={zone.id === actif ? "carte-eleve is-active" : "carte-eleve"}
            aria-hidden="true"
          >
            {zone.departements.map((code) => (
              <path key={code} d={DEPARTEMENTS.get(code)?.d} className="carte-dep is-couvert" />
            ))}
            {zone.points.map(({ ville, gauche }) => {
              const pos = VILLES_POSITIONS[ville];
              if (!pos) return null;
              return (
                <g key={ville} className="carte-ville">
                  <circle cx={pos[0]} cy={pos[1]} r={4.5} />
                  <text x={pos[0] + (gauche ? -8 : 8)} y={pos[1] + 4.5} textAnchor={gauche ? "end" : "start"}>
                    {ville}
                  </text>
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
              key={z.id}
              type="button"
              className={z.id === actif ? "carte-puce is-active" : "carte-puce"}
              aria-pressed={selection === z.id}
              onPointerEnter={(e) => estSouris(e) && setSurvol(z.id)}
              onPointerLeave={(e) => estSouris(e) && setSurvol(null)}
              onClick={() => choisir(z.id)}
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
              <p>
                <strong>Départements&nbsp;:</strong>{" "}
                {zoneActive.departements.map((c) => `${DEPARTEMENTS.get(c)?.nom} (${c})`).join(", ")}
              </p>
              <p>
                <strong>Principales villes&nbsp;:</strong> {zoneActive.villes.join(", ")}
              </p>
            </>
          ) : (
            <p>Survolez ou touchez une zone en rouge pour afficher les départements et les principales villes couverts.</p>
          )}
        </div>
      </div>
    </div>
  );
}
