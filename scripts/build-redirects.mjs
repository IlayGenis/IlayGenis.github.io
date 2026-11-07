// build-redirects.mjs — keep the old Hebrew addresses pointing somewhere.
//
// The site used to have a Hebrew version under /he/. GitHub Pages serves static
// files only, with no server-side redirects, so this writes a small page at each
// old address that forwards to the English page with the same path: a meta
// refresh (works without JavaScript), location.replace to keep any #anchor, and
// a canonical link plus noindex so search engines settle on the English page.
// Runs as part of `postbuild`; reads the case study slugs from out/work/.
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
const origin = "https://ilaygenis.github.io";

function fail(message) {
  console.error(`build-redirects: ${message}`);
  process.exit(1);
}

const workDir = path.join(outDir, "work");
if (!existsSync(workDir)) fail("out/work not found; run `next build` first");

const targets = [
  "/",
  "/cv/",
  ...readdirSync(workDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `/work/${entry.name}/`),
];

const page = (target) => `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<title>Ilay Genis</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${origin}${target}">
<meta http-equiv="refresh" content="0; url=${target}">
<script>location.replace(${JSON.stringify(target)} + location.hash);</script>
<p>This page has moved: <a href="${target}">${origin}${target}</a></p>
</html>
`;

for (const target of targets) {
  const dir = path.join(outDir, "he", target);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "index.html"), page(target));
}
console.log(`build-redirects: ${targets.length} old /he/ addresses → English pages`);
