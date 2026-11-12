// Faux serveur Resend pour les tests navigateur : le site y envoie ses emails
// (RESEND_BASE_URL, voir playwright.config.ts) au lieu de l'API réelle.
// Rien ne part pour de vrai ; les tests lisent les emails reçus ici.
//
//   POST   /emails    → appel du SDK Resend (resend.emails.send)
//   GET    /__emails  → emails reçus, pour les assertions
//   DELETE /__emails  → vide la boîte entre deux tests
//   GET    /health    → prêt (attendu par Playwright avant de lancer les tests)

import { createServer } from "node:http";

const PORT = Number(process.env.MOCK_RESEND_PORT || 4010);
let emails = [];

const json = (res, status, body) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(body));
};

createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (req.method === "GET" && url.pathname === "/health") return json(res, 200, { ok: true });
  if (req.method === "GET" && url.pathname === "/__emails") return json(res, 200, emails);
  if (req.method === "DELETE" && url.pathname === "/__emails") {
    emails = [];
    return json(res, 200, { ok: true });
  }

  if (req.method === "POST" && url.pathname === "/emails") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const email = JSON.parse(body || "{}");
      emails.push({ ...email, receivedAt: new Date().toISOString() });
      json(res, 200, { id: `test-${emails.length}` });
    });
    return;
  }

  json(res, 404, { error: "not found" });
}).listen(PORT, () => console.log(`Faux Resend à l'écoute sur ${PORT}`));
