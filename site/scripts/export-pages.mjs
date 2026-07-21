import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const clientDir = resolve(root, "dist/client");
const pagesDir = resolve(root, "dist/pages");
const workerUrl = pathToFileURL(resolve(root, "dist/server/index.js"));
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
// Render the app at the root of the configured GitHub Pages custom domain.
const requestUrl = "https://ais3-2026.sectools.tw/";
const response = await worker.fetch(
  new Request(requestUrl, { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Unable to export page: ${response.status}`);
}

// GitHub Pages only serves static files, so omit the RSC navigation runtime.
// Native same-page anchors remain fully functional without requesting `/_rsc`.
const html = (await response.text())
  .replace(
    /<link\b(?=[^>]*\brel=(?:"modulepreload"|'modulepreload'))[^>]*>/gi,
    "",
  )
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
await rm(pagesDir, { recursive: true, force: true });
await mkdir(pagesDir, { recursive: true });
await cp(clientDir, pagesDir, { recursive: true });
await writeFile(resolve(pagesDir, "index.html"), html);
await writeFile(resolve(pagesDir, "404.html"), html);
await writeFile(resolve(pagesDir, ".nojekyll"), "");

console.log(`Exported GitHub Pages site to ${pagesDir}`);
