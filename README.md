# SECURIFORM

Site vitrine de SECURIFORM, organisme de formation à la sécurité au travail (CACES®, habilitation électrique, SST, incendie, travaux en hauteur, AIPR, VGP), avec un outil interne de génération d'articles de blog par IA.

Développé en Next.js (App Router) + TypeScript.

## Stack technique

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- CSS écrit à la main ([app/globals.css](app/globals.css)) pour tout le site public — **Tailwind CSS** est utilisé uniquement dans `/admin` (voir plus bas)
- **Resend** pour l'envoi d'emails (formulaires du site + notifications de l'outil blog)
- **Gemini API** (Google) pour la génération d'articles
- `gray-matter` + `marked` pour lire/rendre les articles Markdown

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

Il faut un fichier `.env.local` à la racine (non versionné) avec au minimum :

```
RESEND_API_KEY=...
GEMINI_API_KEY=...
ADMIN_PASSWORD=...
```

Voir la section [Variables d'environnement](#variables-denvironnement) pour le détail de chaque variable et où les récupérer.

### Scripts disponibles

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Lance le build de production |
| `npm run lint` | ESLint |
| `npm run type-check` | Vérification TypeScript (`tsc --noEmit`) |

Ces quatre dernières tournent aussi automatiquement en CI sur GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)) à chaque push/PR.

## Structure du projet

```
app/                    Pages du site (App Router) — une route = un dossier
  admin/blog/           Outil interne : gestion des sujets et articles de blog
  api/blog/             Routes API de l'outil blog
  api/cron/             Route de génération automatique (planifiée)
  blog/                 Pages publiques du blog
  actions.ts            Server Action partagée par tous les formulaires du site
  sitemap.ts, robots.ts Génération SEO
  not-found.tsx         Page 404 personnalisée

components/             Composants partagés (header, footer, slider d'accueil...)
lib/
  nav.ts                Liens et état actif du menu de navigation
  blog/                 Toute la logique de l'outil blog (voir plus bas)

data/                   Stockage du blog (fichiers JSON — voir Le blog & l'admin)
content/blog/           Articles publiés (Markdown + front matter)

public/image/           Images du site
```

## Le blog & l'admin

Un outil interne (`/admin/blog`, protégé par mot de passe) permet de :

1. Créer des sujets d'article (un par un, ou en liste rapide plusieurs à la fois)
2. Les générer via Gemini, les relire, les éditer (aperçu Markdown en direct)
3. Les valider puis les publier — rien n'est jamais publié automatiquement sans validation manuelle
4. Une file d'attente peut aussi se vider automatiquement tous les 2 jours (sujet le plus ancien "en attente" → génération auto → email de relecture), voir [lib/blog/auto-generate.ts](lib/blog/auto-generate.ts)

**Stockage** : pas de base de données — tout est en fichiers (`data/topics.json`, `data/articles/*.json`, `content/blog/*.mdx`). C'est ce dernier dossier que lit le blog public.

**Statuts d'un sujet** : En attente → Généré → Validé → Publié, plus une corbeille (suppression réversible) indépendante du statut.

**Tailwind CSS** n'est utilisé que dans `/admin` (import scopé dans [app/admin/admin.css](app/admin/admin.css), sans le reset "preflight" de Tailwind) — le site public garde son CSS écrit à la main dans `app/globals.css`, aucun risque de collision entre les deux.

> ⚠️ **Avant de déployer sur Vercel** : ce stockage par fichiers ne fonctionne **pas** sur Vercel (disque en lecture seule sur les fonctions serverless). Il faudra migrer vers un stockage persistant (Vercel Blob, une base de données...) avant que la création/génération/publication d'articles ne fonctionne en production — voir la note dans `lib/blog/`. Le reste du site (pages statiques) n'est pas concerné.

## Sécurité

- `/admin/**` et `/api/blog/**` sont protégés par mot de passe partagé (popup HTTP Basic Auth) via [proxy.ts](proxy.ts) — sans `ADMIN_PASSWORD` configuré, l'accès est bloqué pour tout le monde (échec fermé, pas ouvert).
- `/api/cron/generate-article` a sa propre protection par jeton secret (`CRON_SECRET`), indépendante du mot de passe admin — c'est celle que Vercel Cron utilisera.
- En-têtes de sécurité (CSP, `X-Frame-Options`, HSTS...) définis dans [next.config.ts](next.config.ts).
- Formulaires du site public protégés par un champ honeypot anti-spam ; pièces jointes limitées aux extensions `.pdf`, `.doc`, `.docx`.
- `/admin` est exclu du sitemap et marqué `noindex`.

## Déploiement

Le site n'est pas encore déployé (développement en local uniquement pour l'instant).

Avant un déploiement sur **Vercel** :

1. Régler le stockage du blog (voir l'avertissement ci-dessus) — sinon le dashboard s'affiche mais créer/générer/publier un article échouera.
2. Ajouter toutes les variables d'environnement du projet Vercel (voir tableau ci-dessous), y compris `SITE_URL` mis à jour vers le vrai domaine.
3. `vercel.json` contient déjà la configuration du cron (génération auto tous les 2 jours) — rien à faire de plus une fois `CRON_SECRET` renseigné côté Vercel.

## Variables d'environnement

Toutes dans `.env.local` en local (jamais commité — voir `.gitignore`), à reporter dans les réglages du projet une fois déployé.

| Variable | Obligatoire | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Oui | Clé API [Resend](https://resend.com/api-keys), pour l'envoi de tous les emails (formulaires du site + notifications blog) |
| `RESEND_FROM_EMAIL` | Non | Adresse d'envoi une fois un domaine vérifié dans Resend. Par défaut : `onboarding@resend.dev` |
| `GEMINI_API_KEY` | Oui (pour le blog) | Clé [Google AI Studio](https://aistudio.google.com/apikey), pour la génération d'articles |
| `GEMINI_MODEL` | Non | Modèle Gemini à utiliser. Par défaut : `gemini-3.1-flash-lite` |
| `ADMIN_PASSWORD` | Oui (pour l'admin) | Mot de passe qui protège `/admin` et `/api/blog/**` |
| `CRON_SECRET` | Oui (pour l'auto-génération) | Secret qui protège `/api/cron/generate-article` ; Vercel Cron l'envoie automatiquement une fois configuré côté projet |
| `SITE_URL` | Non | URL publique du site, utilisée dans le lien de l'email de relecture. `http://localhost:3000` en local, à changer vers le vrai domaine en prod |
| `BLOG_NOTIFY_EMAIL` | Non | Adresse qui reçoit l'email "nouvel article à relire". Par défaut : la même adresse que les formulaires du site |

Voir les commentaires dans `.env.local` pour le détail (comment générer chaque secret, etc.).
