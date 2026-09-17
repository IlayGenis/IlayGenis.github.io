// build-cv.mjs — print the CV routes of the static export to one-page PDFs.
//
// Runs as `postbuild` after `next build`: serves out/ on a local port, drives
// headless Chrome over the DevTools protocol (no npm dependencies), prints
// /cv/ and /he/cv/ with Page.printToPDF into out/cv/, and fails loudly when a
// PDF is not exactly one page. Chrome binary: CHROME_PATH, then the macOS app,
// then google-chrome / chromium on PATH (ubuntu-latest in CI ships Chrome).
//
// Optional: CV_SHOTS_DIR=<dir> also saves a print-media screenshot per locale.
import { spawn } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";

const outDir = path.resolve("out");
const targets = [
  { locale: "en", route: "/cv/", file: "cv/ilay-genis-cv-en.pdf" },
  { locale: "he", route: "/he/cv/", file: "cv/ilay-genis-cv-he.pdf" },
];
const A4 = { widthIn: 8.27, heightIn: 11.69, widthPx: 794, heightPx: 1123 };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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

// ---------- Chrome ----------
function findChrome() {
  const onPath = (name) =>
    (process.env.PATH ?? "")
      .split(path.delimiter)
      .map((dir) => path.join(dir, name))
      .find((candidate) => existsSync(candidate));
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    onPath("google-chrome"),
    onPath("google-chrome-stable"),
    onPath("chromium"),
    onPath("chromium-browser"),
  ];
  const found = candidates.find((c) => c && existsSync(c));
  if (!found) fail("no Chrome binary found; set CHROME_PATH");
  return found;
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

// ---------- DevTools client ----------
class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.listeners = [];
    ws.addEventListener("message", (ev) => {
      const m = JSON.parse(ev.data);
      if (m.id && this.pending.has(m.id)) {
        const { resolve, reject } = this.pending.get(m.id);
        this.pending.delete(m.id);
        if (m.error) reject(new Error(m.error.message));
        else resolve(m.result);
      } else if (m.method) {
        for (const l of this.listeners) l(m);
      }
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  waitFor(method) {
    return new Promise((resolve) => {
      const l = (m) => {
        if (m.method === method) {
          this.listeners = this.listeners.filter((x) => x !== l);
          resolve(m.params);
        }
      };
      this.listeners.push(l);
    });
  }
}

const profile = mkdtempSync(path.join(os.tmpdir(), "cv-chrome-"));
const chrome = spawn(
  findChrome(),
  [
    "--headless",
    "--remote-debugging-port=0",
    `--user-data-dir=${profile}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-gpu",
    "--hide-scrollbars",
    ...(process.env.CI ? ["--no-sandbox"] : []),
    "about:blank",
  ],
  { stdio: "ignore" },
);
let exitCode = 0;
function cleanup() {
  chrome.kill();
  server.close();
  rmSync(profile, { recursive: true, force: true });
}
process.on("exit", cleanup);

async function devtoolsPort() {
  // With --remote-debugging-port=0 Chrome writes the chosen port here.
  const marker = path.join(profile, "DevToolsActivePort");
  for (let i = 0; i < 80; i++) {
    if (existsSync(marker)) {
      const port = Number(readFileSync(marker, "utf8").split("\n")[0]);
      try {
        const r = await fetch(`http://127.0.0.1:${port}/json/version`);
        if (r.ok) return port;
      } catch {
        // not up yet
      }
    }
    await sleep(250);
  }
  throw new Error("devtools endpoint did not come up");
}

async function openTarget(port) {
  const r = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" });
  const t = await r.json();
  const ws = new WebSocket(t.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener("open", res);
    ws.addEventListener("error", rej);
  });
  return new CDP(ws);
}

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
  const port = await devtoolsPort();
  for (const t of targets) {
    const cdp = await openTarget(port);
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
process.exit(exitCode);
