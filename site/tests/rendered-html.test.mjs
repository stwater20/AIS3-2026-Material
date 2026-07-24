import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete AIS3 2026 landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /AIS3 2026｜AI 資安應用實作與模型安全/);
  assert.match(html, /AI 資安應用實作與模型安全/);
  assert.match(html, /模型為何開口/);
  assert.match(html, /當代理者/);
  assert.match(html, /在答案/);
  assert.match(html, /REFUSAL \/ BYPASS/);
  assert.match(html, /stwater20\/AIS3-2026-Material/);
  assert.match(html, /https:\/\/sectools\.tw\/archives\/1780/);
  assert.match(html, /Lab3_LLM_Eval_and_Security\.ipynb/);
  assert.match(html, /開啟 Lab 03/);
  assert.match(html, /https:\/\/ais3-2026\.sectools\.tw\/og\.png/);
  assert.doesNotMatch(
    html,
    /codex-preview|SkeletonPreview|react-loading-skeleton|\bVOICE\b|航線|躍遷|三幕|尚在設計中|預覽 Lab 03/,
  );
});

test("exports assets for the custom-domain root", async () => {
  const html = await readFile(new URL("../dist/pages/index.html", import.meta.url), "utf8");
  const assetPaths = [
    ...html.matchAll(/(?:href|src)="(\/assets\/[^\"]+)"/g),
  ].map((match) => match[1]);

  assert.ok(assetPaths.length > 0);
  assert.match(html, /href="#courses"/);
  assert.doesNotMatch(html, /\/AIS3-2026-Material\/assets\//);
  assert.doesNotMatch(html, /<script\b|modulepreload|__VINEXT|\/_rsc/i);

  await Promise.all(
    [...new Set(assetPaths)].map((assetPath) =>
      readFile(new URL(`../dist/pages${assetPath}`, import.meta.url)),
    ),
  );
});
