import { describe, expect, it } from "vitest";
import {
  RECYCLAGES,
  ajouterMois,
  calculerEcheance,
  estFormationRecyclage,
  formaterDuree,
  lireDate,
  moisEntre,
  versIso,
} from "@/lib/recyclage";

const date = (iso: string) => {
  const d = lireDate(iso);
  if (!d) throw new Error(`date invalide : ${iso}`);
  return d;
};

describe("lireDate", () => {
  it("lit une date de champ <input type=date>", () => {
    expect(versIso(date("2024-03-15"))).toBe("2024-03-15");
  });

  it.each(["2024-02-31", "2024-13-01", "15/03/2024", "", "1969-12-31"])("refuse %j", (valeur) => {
    expect(lireDate(valeur)).toBeNull();
  });
});

describe("ajouterMois", () => {
  it("garde le jour du mois", () => {
    expect(versIso(ajouterMois(date("2024-03-15"), 60))).toBe("2029-03-15");
  });

  it("retombe sur le dernier jour d'un mois plus court", () => {
    expect(versIso(ajouterMois(date("2024-01-31"), 1))).toBe("2024-02-29");
    expect(versIso(ajouterMois(date("2023-01-31"), 1))).toBe("2023-02-28");
  });
});

describe("calculerEcheance", () => {
  it("CACES (5 ans) : rappel 3 mois avant l'échéance", () => {
    const option = RECYCLAGES["caces-R489A"][0];
    const { echeance, rappel } = calculerEcheance(option, date("2024-03-15"));
    expect(versIso(echeance)).toBe("2029-03-15");
    expect(versIso(rappel)).toBe("2028-12-15");
  });

  it("habilitation électrique (3 ans)", () => {
    const option = RECYCLAGES["habilitation-electricien"][0];
    const { echeance, rappel } = calculerEcheance(option, date("2025-06-10"));
    expect(versIso(echeance)).toBe("2028-06-10");
    expect(versIso(rappel)).toBe("2028-03-10");
  });

  it("CACES R482B (10 ans)", () => {
    const option = RECYCLAGES["caces-R482B"][0];
    expect(versIso(calculerEcheance(option, date("2020-01-01")).echeance)).toBe("2030-01-01");
  });
});

describe("catalogue des recyclages", () => {
  it("chaque formation a une validité, une page et un libellé", () => {
    for (const [cle, options] of Object.entries(RECYCLAGES)) {
      expect(options.length, cle).toBeGreaterThan(0);
      for (const option of options) {
        expect(option.mois, option.libelle).toBeGreaterThan(0);
        expect(option.page, option.libelle).toMatch(/^[a-z0-9-]+$/i);
        expect(option.libelle).not.toBe("");
      }
    }
  });

  it("estFormationRecyclage n'accepte que les clés connues", () => {
    expect(estFormationRecyclage("caces")).toBe(true);
    expect(estFormationRecyclage("toString")).toBe(false);
    expect(estFormationRecyclage("inconnue")).toBe(false);
  });
});

describe("affichage", () => {
  it("formaterDuree", () => {
    expect(formaterDuree(0)).toBe("moins d'un mois");
    expect(formaterDuree(14)).toBe("1 an et 2 mois");
    expect(formaterDuree(60)).toBe("5 ans");
  });

  it("moisEntre ne compte que les mois entiers", () => {
    expect(moisEntre(date("2024-01-15"), date("2024-03-14"))).toBe(1);
    expect(moisEntre(date("2024-01-15"), date("2024-03-15"))).toBe(2);
  });
});
