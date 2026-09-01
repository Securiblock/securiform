// One-off patch: wire every static `<form action="#" method="post">` in
// app/**/page.tsx to the shared submitForm Server Action.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.resolve(__dirname, "..", "app");

const IMPORT_LINE = 'import { submitForm } from "@/app/actions";';

function patchFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  if (!src.includes('action="#"')) return false;

  const before = src;

  // Standard `.form-devis` pattern (46 quote-request forms + recruitment form).
  src = src.replaceAll(
    '<form className="form-devis reveal" action="#" method="post">',
    '<form className="form-devis reveal" action={submitForm}>'
  );

  // Bespoke nous-contacter form (different attribute order/content).
  src = src.replace(
    /<form action="#" method="post"(\s+style=)/,
    "<form action={submitForm}$1"
  );

  if (src === before) return false;

  if (!src.includes(IMPORT_LINE)) {
    const lines = src.split("\n");
    let lastImportIdx = -1;
    lines.forEach((line, i) => {
      if (line.startsWith("import ")) lastImportIdx = i;
    });
    lines.splice(lastImportIdx + 1, 0, IMPORT_LINE);
    src = lines.join("\n");
  }

  fs.writeFileSync(filePath, src, "utf8");
  return true;
}

function main() {
  const dirs = fs.readdirSync(APP_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());
  let patched = 0;
  for (const dir of dirs) {
    const pagePath = path.join(APP_DIR, dir.name, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;
    if (patchFile(pagePath)) {
      patched++;
      console.log(`patched: app/${dir.name}/page.tsx`);
    }
  }
  console.log(`\nDone. Patched ${patched} files.`);
}

main();
