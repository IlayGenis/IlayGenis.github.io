// build-cv.mjs — print the CV routes of the static export to one-page PDFs.
//
// Runs as `postbuild` after `next build`: serves out/ on a local port, drives
// headless Chrome over the DevTools protocol (no npm dependencies), prints
// /cv/ and /he/cv/ with Page.printToPDF into out/cv/, and fails loudly when a
// PDF is not exactly one page.
//
// Optional: CV_SHOTS_DIR=<dir> also saves a print-media screenshot per locale.
import {
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import http from "node:http";
import path from "node:path";
import { launchChrome, sleep } from "./chrome.mjs";

const outDir = path.resolve("out");
const targets = [
  { locale: "en", route: "/cv/", file: "cv/ilay-genis-cv-en.pdf" },
  { locale: "he", route: "/he/cv/", file: "cv/ilay-genis-cv-he.pdf" },
];
const A4 = { widthIn: 8.27, heightIn: 11.69, widthPx: 794, heightPx: 1123 };

function fail(message) {
  console.error(`build-cv: ${message}`);
  process.exit(1);
}

if (!existsSync(path.join(outDir, "index.html"))) {
  fail("out/index.html not found; run `next build` first");
}
for (const t of targets) {
  if (!existsSync(path.join(outDir, t.route, "index.html"))) {
    fail(`out${t.route}index.html not found in the export`);
  }
}

// ---------- Static server for out/ ----------
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".pdf": "application/pdf",
};
function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  let file = path.join(outDir, clean);
  if (!file.startsWith(outDir)) return null;
  if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, "index.html");
  else if (!existsSync(file) && existsSync(`${file}.html`)) file = `${file}.html`;
  return existsSync(file) ? file : null;
}
const server = http.createServer((req, res) => {
  const file = resolveFile(req.url ?? "/");
  if (!file) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  res.writeHead(200, { "content-type": types[path.extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const base = `http://127.0.0.1:${server.address().port}`;

let chrome;
try {
  chrome = launchChrome();
} catch (error) {
  fail(error.message);
}
let exitCode = 0;
process.on("exit", () => server.close());

function countPages(pdf) {
  // Chrome's PDF writer emits page objects uncompressed, so `/Type /Page`
  // (not `/Pages`) appears once per page; the page tree's `/Count` must agree.
  const text = pdf.toString("latin1");
  const pages = (text.match(/\/Type\s*\/Page(?![s\w])/g) ?? []).length;
  const counts = [...text.matchAll(/\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
  if (!counts.includes(pages)) {
    throw new Error(`page count mismatch: ${pages} page objects, /Count ${counts.join(",")}`);
  }
  return pages;
}

try {
  for (const t of targets) {
    const cdp = await chrome.openTarget();
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: A4.widthPx,
      height: A4.heightPx,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await cdp.send("Page.enable");
    const loaded = cdp.waitFor("Page.loadEventFired");
    await cdp.send("Page.navigate", { url: base + t.route });
    await loaded;
    await cdp.send("Runtime.evaluate", {
      expression: "document.fonts.ready.then(() => true)",
      awaitPromise: true,
    });
    await sleep(300);

    // Measure the sheet under print media: how much of the page it fills.
    await cdp.send("Emulation.setEmulatedMedia", { media: "print" });
    await sleep(200);
    const height = (
      await cdp.send("Runtime.evaluate", {
        expression: "document.querySelector('.cv-sheet').getBoundingClientRect().height",
        returnByValue: true,
      })
    ).result.value;
    if (process.env.CV_SHOTS_DIR) {
      // A viewport as tall as the sheet, not captureBeyondViewport, which
      // shifts RTL pages horizontally.
      mkdirSync(process.env.CV_SHOTS_DIR, { recursive: true });
      await cdp.send("Emulation.setDeviceMetricsOverride", {
        width: A4.widthPx,
        height: Math.max(A4.heightPx, Math.ceil(height)),
        deviceScaleFactor: 1,
        mobile: false,
      });
      await sleep(200);
      const { data } = await cdp.send("Page.captureScreenshot", { format: "png" });
      const shot = path.join(process.env.CV_SHOTS_DIR, `cv-${t.locale}-print.png`);
      writeFileSync(shot, Buffer.from(data, "base64"));
      console.log(`build-cv: saved ${shot}`);
    }

    const { data } = await cdp.send("Page.printToPDF", {
      printBackground: true,
      preferCSSPageSize: true,
      paperWidth: A4.widthIn,
      paperHeight: A4.heightIn,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      displayHeaderFooter: false,
    });
    cdp.ws.close();

    const pdf = Buffer.from(data, "base64");
    const pages = countPages(pdf);
    const fill = Math.round((height / A4.heightPx) * 100);
    const target = path.join(outDir, t.file);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, pdf);
    console.log(
      `build-cv: ${t.route} → out/${t.file} (${Math.round(pdf.length / 1024)} KB, ${pages} page${pages === 1 ? "" : "s"}, sheet ${Math.round(height)}px = ${fill}% of A4)`,
    );
    if (pages !== 1) {
      console.error(`build-cv: ${t.route} printed to ${pages} pages, expected exactly 1`);
      exitCode = 1;
    }
  }
} catch (error) {
  console.error(`build-cv: ${error instanceof Error ? error.message : error}`);
  exitCode = 1;
}
await chrome.close();
process.exit(exitCode);
