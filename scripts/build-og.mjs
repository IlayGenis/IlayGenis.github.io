// build-og.mjs — render the share image of every page.
//
// Runs as `postbuild` after build-cv: reads the cards from out/og/cards.json
// (app/og/cards.json/route.ts), screenshots each one in headless Chrome into
// out/og/, and fails loudly when text doesn't fit. To change the wording, edit
// lib/og.ts or data/resume.ts; the design is the template below.
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { launchChrome } from "./chrome.mjs";

const outDir = path.resolve("out");
const cardsFile = path.join(outDir, "og/cards.json");
const size = { width: 1200, height: 630 };
// Every card starts on the line the original, vertically centered image started on.
const padding = { top: 150, side: 80, bottom: 80 };
// The font next/og rendered the original share image in.
const geistFile = path.resolve("node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf");

function fail(message) {
  console.error(`build-og: ${message}`);
  process.exit(1);
}

if (!existsSync(cardsFile)) fail("out/og/cards.json not found; run `next build` first");
if (!existsSync(geistFile)) fail(`${geistFile} not found; did a Next.js upgrade move it?`);

// ---------- Fonts ----------
const dataUrl = (file, type) => `data:${type};base64,${readFileSync(file).toString("base64")}`;

const fontCss = `
  @font-face { font-family: Geist; src: url(${dataUrl(geistFile, "font/ttf")}); }`;

// ---------- Template ----------
const escapeHtml = (text) =>
  text.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

function cardHtml(card) {
  return `<!doctype html>
<html lang="en" dir="ltr">
<meta charset="utf-8">
<style>
  ${fontCss}
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${size.width}px; height: ${size.height}px; }
  body {
    background: #0a0e0a;
    display: flex;
    flex-direction: column;
    padding: ${padding.top}px ${padding.side}px ${padding.bottom}px;
    font-family: Geist, sans-serif;
    font-weight: 400;
    text-align: start;
    overflow: hidden;
  }
  .prompt { color: #5eead4; font-size: 28px; line-height: 36px; margin-block-end: 24px; }
  .headline { color: #e6edf3; text-wrap: balance; }
  .accent { color: #5eead4; }
  .detail { color: #8b949e; font-size: 28px; line-height: 36px; margin-block-start: 32px; }
  .name .headline { font-size: 96px; line-height: 125px; }
  .name .accent { font-size: 48px; line-height: 62px; margin-block-start: 16px; }
  .title .headline { font-size: 68px; line-height: 80px; }
  .title .accent { font-size: 32px; line-height: 42px; margin-block-start: 24px; text-wrap: pretty; }
  .title .detail { margin-block-start: 28px; }
</style>
<body class="${card.layout}">
  <div class="prompt"><bdi dir="ltr">${escapeHtml(card.prompt)}</bdi></div>
  <div class="headline">${escapeHtml(card.headline)}</div>
  <div class="accent">${escapeHtml(card.accent)}</div>
  <div class="detail">${escapeHtml(card.detail)}</div>
</body>
</html>`;
}

// Runs in the page: shrink a headline that takes too many lines, then report
// anything that still doesn't fit. Expects the template's px line heights.
function fitCard() {
  const lines = (el) => Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight));
  const headline = document.querySelector(".headline");
  const isName = document.body.classList.contains("name");
  const maxLines = isName ? 1 : 2;
  let px = parseFloat(getComputedStyle(headline).fontSize);
  const minPx = 52;
  while (lines(headline) > maxLines && px > minPx) {
    const ratio = parseFloat(getComputedStyle(headline).lineHeight) / px;
    px -= 2;
    headline.style.fontSize = `${px}px`;
    headline.style.lineHeight = `${Math.round(px * ratio)}px`;
  }
  const problems = [];
  if (lines(headline) > maxLines) problems.push(`headline takes ${lines(headline)} lines at ${px}px`);
  const accent = document.querySelector(".accent");
  if (lines(accent) > 2) problems.push(`accent takes ${lines(accent)} lines`);
  const detail = document.querySelector(".detail");
  if (lines(detail) > 1) problems.push(`detail takes ${lines(detail)} lines`);
  for (const el of document.body.children) {
    if (el.scrollWidth > el.clientWidth) problems.push(`.${el.className} overflows its width`);
  }
  const bottom = document.body.lastElementChild.getBoundingClientRect().bottom;
  const limit = innerHeight - parseFloat(getComputedStyle(document.body).paddingBlockEnd);
  if (bottom > limit) problems.push(`content ends at ${Math.round(bottom)}px, past ${limit}px`);
  return { problems, px };
}

// ---------- Render ----------
const cards = JSON.parse(readFileSync(cardsFile, "utf8"));
let chrome;
try {
  chrome = launchChrome();
} catch (error) {
  fail(error.message);
}

let exitCode = 0;
try {
  const cdp = await chrome.openTarget();
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    ...size,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await cdp.send("Page.enable");
  const { frameTree } = await cdp.send("Page.getFrameTree");

  const evaluate = async (expression) => {
    const { result, exceptionDetails } = await cdp.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (exceptionDetails) throw new Error(exceptionDetails.exception?.description ?? exceptionDetails.text);
    return result.value;
  };

  for (const card of cards) {
    await cdp.send("Page.setDocumentContent", {
      frameId: frameTree.frame.id,
      html: cardHtml(card),
    });
    // A missing font would silently fall back to a system face.
    const fonts = await evaluate(`document.fonts.load("28px Geist", "a").then((faces) => faces.length)`);
    if (fonts !== 1) throw new Error(`${card.file}: expected the Geist font, loaded ${fonts}`);

    const { problems, px } = await evaluate(`(${fitCard})()`);
    if (problems.length) {
      console.error(`build-og: ${card.file}: ${problems.join("; ")}`);
      exitCode = 1;
      continue;
    }

    const { data } = await cdp.send("Page.captureScreenshot", { format: "png" });
    const target = path.join(outDir, card.file);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, Buffer.from(data, "base64"));
    console.log(`build-og: out${card.file} (${Math.round(data.length * 0.75 / 1024)} KB, headline ${px}px)`);
  }
  cdp.ws.close();

  if (exitCode === 0) {
    // Previews shared before page-specific images may still point here.
    copyFileSync(path.join(outDir, "og/en/home.png"), path.join(outDir, "opengraph-image.png"));
    rmSync(cardsFile);
  }
} catch (error) {
  console.error(`build-og: ${error instanceof Error ? error.message : error}`);
  exitCode = 1;
}
await chrome.close();
process.exit(exitCode);
