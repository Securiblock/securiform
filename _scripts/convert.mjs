// One-off conversion script: SECURIFORM static HTML -> Next.js app/*/page.tsx
// Run with: node _scripts/convert.mjs
import * as cheerio from "cheerio";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "_source_html", "SECURIFORM");
const APP_DIR = path.join(ROOT, "app");

const ATTR_RENAME = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  autofocus: "autoFocus",
  novalidate: "noValidate",
  enctype: "encType",
  formaction: "formAction",
  crossorigin: "crossOrigin",
  referrerpolicy: "referrerPolicy",
  allowfullscreen: "allowFullScreen",
  frameborder: "frameBorder",
  marginwidth: "marginWidth",
  marginheight: "marginHeight",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-miterlimit": "strokeMiterlimit",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  colspan: "colSpan",
  rowspan: "rowSpan",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  srcset: "srcSet",
  autoplay: "autoPlay",
  playsinline: "playsInline",
  itemscope: "itemScope",
  itemprop: "itemProp",
  itemtype: "itemType",
};

const BOOLEAN_ATTRS = new Set([
  "required",
  "disabled",
  "checked",
  "multiple",
  "autoFocus",
  "noValidate",
  "allowFullScreen",
  "itemScope",
]);

const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const NUMERIC_ATTRS = new Set([
  "rows", "cols", "tabIndex", "maxLength", "minLength", "colSpan", "rowSpan", "size", "start",
]);

function toCamel(prop) {
  if (prop.startsWith("--")) return prop; // custom property, keep as-is (rare, unused here)
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function styleStringToObjectLiteral(styleStr) {
  const decls = styleStr
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean);
  const entries = decls.map((d) => {
    const idx = d.indexOf(":");
    const prop = d.slice(0, idx).trim();
    const value = d.slice(idx + 1).trim();
    return `${JSON.stringify(toCamel(prop))}: ${JSON.stringify(value)}`;
  });
  return `{{ ${entries.join(", ")} }}`;
}

// Internal .html href -> Next.js route, or null if it should stay a plain <a>.
function hrefTarget(href) {
  if (!href) return null;
  if (/^(https?:|tel:|mailto:)/i.test(href)) return null;
  if (href.startsWith("#")) return null;
  const m = href.match(/^([a-z0-9-]+)\.html(#.*)?$/i);
  if (!m) return null;
  const slug = m[1].toLowerCase();
  const hash = m[2] || "";
  if (slug === "index") return "/" + hash;
  return `/${slug}${hash}`;
}

function transformNode(node) {
  if (node.type === "text" || node.type === "comment") return;
  if (node.type !== "tag" && node.type !== "script" && node.type !== "style") return;

  const tagName = node.name;

  // Rewrite <a> tags that point internally into <Link>, others stay <a>.
  if (tagName === "a") {
    const href = node.attribs.href;
    const target = hrefTarget(href);
    if (target !== null) {
      node.name = "Link";
      node.attribs.href = target;
    }
  }

  // Rewrite local image sources.
  if (tagName === "img") {
    const src = node.attribs.src;
    if (src && src.startsWith("image/")) {
      node.attribs.src = "/" + src;
    }
  }

  // Stash the parsed style object literal on the node itself; the custom
  // serializer below emits it as `style={{...}}` instead of a string attr.
  if (node.attribs && node.attribs.style) {
    node.__jsxStyle = styleStringToObjectLiteral(node.attribs.style);
    delete node.attribs.style;
  }

  // Rename attributes to their JSX equivalents.
  if (node.attribs) {
    const renamed = {};
    for (const [name, value] of Object.entries(node.attribs)) {
      const newName = ATTR_RENAME[name] || name;
      renamed[newName] = value;
    }
    node.attribs = renamed;
  }

  if (node.children) {
    node.children = node.children.filter((c) => c.type !== "comment");
    for (const child of node.children) transformNode(child);
  }
}

function escapeText(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttrValue(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

// Custom serializer (DOM -> JSX source text). We avoid cheerio/dom-serializer's
// own `.html()` here: in xmlMode it aggressively encodes every non-ASCII
// character as a numeric entity (e.g. "e-acute" -> "&#xe9;"), which is valid
// but makes the generated source unreadable. This keeps literal UTF-8 text
// intact and only escapes what JSX actually requires.
function renderNode(node) {
  if (node.type === "text") return escapeText(node.data);
  if (node.type === "comment") return "";
  if (node.type !== "tag" && node.type !== "script" && node.type !== "style") return "";

  const parts = [`<${node.name}`];
  for (const [name, value] of Object.entries(node.attribs || {})) {
    if (BOOLEAN_ATTRS.has(name) && (value === "" || value === name)) {
      parts.push(` ${name}`);
    } else if (NUMERIC_ATTRS.has(name) && /^\d+$/.test(value)) {
      parts.push(` ${name}={${value}}`);
    } else {
      parts.push(` ${name}="${escapeAttrValue(value)}"`);
    }
  }
  if (node.__jsxStyle) parts.push(` style=${node.__jsxStyle}`);

  const children = node.children || [];
  if (children.length === 0) {
    parts.push(" />");
    return parts.join("");
  }
  parts.push(">");
  for (const child of children) parts.push(renderNode(child));
  parts.push(`</${node.name}>`);
  return parts.join("");
}

const VOID_TAG_RE = new RegExp(
  `<(${[...VOID_ELEMENTS].join("|")})(\\s[^>]*?)?\\s*/?>`,
  "gi"
);

// htmlparser2's xmlMode has no notion of HTML void elements: an unclosed
// `<hr class="trait">` is parsed as an opening tag that swallows every
// following sibling as a "child" until some later closing tag is hit. Force
// self-closing syntax on void elements before parsing so xmlMode treats them
// as empty.
function selfCloseVoidElements(html) {
  return html.replace(VOID_TAG_RE, (_match, tag, attrs = "") => `<${tag}${attrs} />`);
}

// Named HTML entities that aren't legal in bare XML (only &amp; &lt; &gt;
// &quot; &apos; are). htmlparser2's xmlMode leaves anything else untouched
// (including the leading "&"), which then gets re-escaped to "&amp;nbsp;" on
// serialization. Pre-decode the handful actually used in this content to
// their literal characters so that never happens.
const NAMED_ENTITIES = {
  "&nbsp;": " ",
  "&eacute;": "é",
  "&egrave;": "è",
  "&ecirc;": "ê",
  "&agrave;": "à",
  "&ccedil;": "ç",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&hellip;": "…",
  "&copy;": "©",
  "&reg;": "®",
};

function predecodeNamedEntities(html) {
  return html.replace(/&[a-z]+;/gi, (m) => NAMED_ENTITIES[m.toLowerCase()] ?? m);
}

function convertMainHtml(mainHtml) {
  const prepared = predecodeNamedEntities(selfCloseVoidElements(mainHtml));
  const $ = cheerio.load(prepared, { xmlMode: true, decodeEntities: true }, false);
  const root = $.root()[0];
  root.children = root.children.filter((c) => c.type !== "comment");
  for (const child of root.children) transformNode(child);

  let out = root.children.map(renderNode).join("\n");
  // Restore the non-breaking space as a readable, JSX-safe named entity.
  out = out.replaceAll(" ", "&nbsp;");
  return out;
}

// Pull the raw <main id="main">...</main> substring straight out of the
// source file (rather than round-tripping it through a first cheerio parse
// and re-serialization), so entity handling only ever happens once, in
// convertMainHtml.
function extractMainHtml(raw) {
  const m = raw.match(/<main id="main">([\s\S]*?)<\/main>/);
  return m ? m[1] : null;
}

function extractPage(htmlPath) {
  const raw = fs.readFileSync(htmlPath, "utf8");
  const $ = cheerio.load(raw);

  const title = $("title").text().trim();
  const description = $('meta[name="description"]').attr("content") || "";
  const ogType = $('meta[property="og:type"]').attr("content") || "website";
  const ogTitle = $('meta[property="og:title"]').attr("content") || title;
  const ogDescription = $('meta[property="og:description"]').attr("content") || description;
  const twitterTitle = $('meta[name="twitter:title"]').attr("content") || ogTitle;
  const twitterDescription = $('meta[name="twitter:description"]').attr("content") || ogDescription;

  let jsonLd = null;
  const ldScript = $('script[type="application/ld+json"]').first().html();
  if (ldScript) {
    try {
      jsonLd = JSON.parse(ldScript);
    } catch {
      jsonLd = null;
    }
  }

  const mainHtml = extractMainHtml(raw);
  if (mainHtml === null) {
    throw new Error(`No <main id="main"> found in ${htmlPath}`);
  }

  return {
    title,
    description,
    ogType,
    ogTitle,
    ogDescription,
    twitterTitle,
    twitterDescription,
    jsonLd,
    mainHtml,
  };
}

function generatePageTsx(slug, data, jsx) {
  const canonical = `/${slug}`;
  const usesLink = jsx.includes("<Link");
  const importLines = [`import type { Metadata } from "next";`];
  if (usesLink) importLines.push(`import Link from "next/link";`);

  const metadataObj = `export const metadata: Metadata = {
  title: ${JSON.stringify(data.title)},
  description: ${JSON.stringify(data.description)},
  alternates: { canonical: ${JSON.stringify(canonical)} },
  openGraph: {
    type: ${JSON.stringify(data.ogType)},
    siteName: "SECURIFORM",
    locale: "fr_FR",
    url: ${JSON.stringify(canonical)},
    title: ${JSON.stringify(data.ogTitle)},
    description: ${JSON.stringify(data.ogDescription)},
  },
  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(data.twitterTitle)},
    description: ${JSON.stringify(data.twitterDescription)},
  },
};`;

  const jsonLdBlock = data.jsonLd
    ? `const jsonLd = ${JSON.stringify(data.jsonLd, null, 2)};\n\n`
    : "";

  const jsonLdScript = data.jsonLd
    ? `      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}\n      />\n`
    : "";

  return `${importLines.join("\n")}

${jsonLdBlock}${metadataObj}

export default function Page() {
  return (
    <>
${jsonLdScript}${jsx}
    </>
  );
}
`;
}

function main() {
  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => f.endsWith(".html") && f !== "index.html");

  const results = [];

  for (const file of files) {
    const slug = file.replace(/\.html$/, "");
    const htmlPath = path.join(SRC_DIR, file);
    try {
      const data = extractPage(htmlPath);
      const jsx = convertMainHtml(data.mainHtml);
      const tsx = generatePageTsx(slug, data, jsx);

      const outDir = path.join(APP_DIR, slug);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "page.tsx"), tsx, "utf8");
      results.push({ slug, ok: true });
    } catch (err) {
      results.push({ slug, ok: false, error: err.message });
    }
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`Converted ${results.length - failed.length}/${results.length} pages.`);
  if (failed.length) {
    console.log("Failed:");
    for (const f of failed) console.log(`  - ${f.slug}: ${f.error}`);
  }
}

main();
