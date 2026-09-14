-- Blog storage schema (topics, articles, published articles, categories).
-- Run once against DATABASE_URL to set up a fresh database — see
-- lib/blog/db.ts for the connection, and each lib/blog/*.ts file for the
-- queries that read/write these tables.
--
-- Dates are stored as ISO-8601 TEXT (not TIMESTAMPTZ) on purpose: the app
-- never does date arithmetic in SQL, only produces/consumes
-- `new Date().toISOString()` strings, so TEXT avoids any driver-specific
-- Date-object/timezone conversion surprises.

CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS topics (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  keywords TEXT[] NOT NULL DEFAULT '{}',
  tone TEXT NOT NULL,
  target_length INTEGER NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  generated_at TEXT,
  published_at TEXT,
  slug TEXT,
  deleted_at TEXT,
  category TEXT
);

-- Draft article, one row per topic (article.id === topic.id).
CREATE TABLE IF NOT EXISTS articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  meta_description TEXT NOT NULL,
  content TEXT NOT NULL,
  reading_time INTEGER NOT NULL,
  generated_at TEXT NOT NULL,
  status TEXT NOT NULL,
  image TEXT,
  category TEXT
);

-- Live, public-facing snapshot — replaces the old content/blog/*.mdx files.
-- A topic's draft can be edited freely without touching this; only
-- publishArticle() writes here, deliberately, on "Publier".
CREATE TABLE IF NOT EXISTS published_articles (
  slug TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  reading_time INTEGER NOT NULL,
  image TEXT,
  category TEXT,
  content TEXT NOT NULL,
  published BOOLEAN NOT NULL DEFAULT true
);
