// chrome.mjs — headless Chrome over the DevTools protocol, no npm dependencies.
//
// Shared by the postbuild scripts. Chrome binary: CHROME_PATH, then the macOS
// app, then google-chrome / chromium on PATH (ubuntu-latest in CI ships Chrome).
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

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
  return candidates.find((c) => c && existsSync(c));
}

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

export function launchChrome() {
  const binary = findChrome();
  if (!binary) throw new Error("no Chrome binary found; set CHROME_PATH");

  const profile = mkdtempSync(path.join(os.tmpdir(), "postbuild-chrome-"));
  const chrome = spawn(
    binary,
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
    { stdio: ["ignore", "ignore", "pipe"] },
  );
  // Keep the tail of Chrome's stderr, so a launch failure in CI says why.
  let chromeLog = "";
  let chromeExit = null;
  chrome.stderr.setEncoding("utf8");
  chrome.stderr.on("data", (chunk) => {
    chromeLog = (chromeLog + chunk).slice(-4000);
  });
  chrome.on("error", (error) => {
    chromeExit = error.message;
  });
  chrome.on("exit", (code, signal) => {
    chromeExit ??= `exited with ${signal ?? `code ${code}`}`;
  });
  function chromeReport() {
    const log = chromeLog.trim();
    return log ? `\nChrome stderr (tail):\n${log}` : "\nChrome wrote nothing to stderr";
  }
  function removeProfile() {
    // Chrome may still be flushing its profile; retry, and never fail the
    // build over a temp directory.
    try {
      rmSync(profile, { recursive: true, force: true, maxRetries: 10, retryDelay: 200 });
    } catch {
      // leave it to the OS temp cleanup
    }
  }
  process.on("exit", () => {
    chrome.kill();
    removeProfile();
  });

  async function devtoolsPort() {
    // With --remote-debugging-port=0 Chrome writes the chosen port here.
    const marker = path.join(profile, "DevToolsActivePort");
    for (let i = 0; i < 80; i++) {
      if (chromeExit) {
        throw new Error(`Chrome ${chromeExit} before devtools came up${chromeReport()}`);
      }
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
    throw new Error(`devtools endpoint did not come up${chromeReport()}`);
  }

  return {
    async openTarget() {
      const port = await devtoolsPort();
      const r = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" });
      const t = await r.json();
      const ws = new WebSocket(t.webSocketDebuggerUrl);
      await new Promise((res, rej) => {
        ws.addEventListener("open", res);
        ws.addEventListener("error", rej);
      });
      return new CDP(ws);
    },
    // Let Chrome exit before its profile is removed.
    async close() {
      if (chrome.exitCode === null) {
        const gone = new Promise((r) => chrome.once("exit", r));
        chrome.kill();
        await Promise.race([gone, sleep(3000)]);
      }
    },
  };
}
