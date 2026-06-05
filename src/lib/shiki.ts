import "server-only";
import { createHighlighter, type Highlighter } from "shiki";

// Server-only Shiki highlighter. Highlighting runs at render time (build for static
// pages), so the browser receives plain colored HTML — zero client-side highlighter
// JS, keeping the bundle lean (docs §20 perf). The highlighter is created once and
// reused across requests via a module-level promise.
const LANGS = ["bash", "java", "ts", "tsx", "js", "jsx", "json", "xml", "html"] as const;
const THEMES = { light: "github-light", dark: "github-dark-default" } as const;

type Tone = "light" | "dark";

// Map our content lang tags to Shiki language ids; anything unknown → plain text.
const langAlias: Record<string, string> = {
  bash: "bash",
  sh: "bash",
  shell: "bash",
  java: "java",
  ts: "ts",
  tsx: "tsx",
  js: "js",
  jsx: "jsx",
  json: "json",
  xml: "xml",
  html: "html",
};

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [THEMES.light, THEMES.dark],
      langs: [...LANGS],
    });
  }
  return highlighterPromise;
}

// Returns highlighted inner HTML (the <code> contents) for the given tone's theme.
// The surrounding <pre>/surface is owned by our components, so we strip Shiki's
// wrapper and keep just the tokens — our tones (bg-slate-50 / bg-navy-950) show
// through. Falls back to escaped plain text for unknown languages.
export async function highlightCode(code: string, lang: string, tone: Tone): Promise<string> {
  const resolved = langAlias[lang?.toLowerCase()] ?? null;
  if (!resolved) return `<span>${escapeHtml(code)}</span>`;

  const hl = await getHighlighter();
  const html = hl.codeToHtml(code, {
    lang: resolved,
    theme: THEMES[tone],
  });
  // Shiki emits <pre class="shiki" style="..."><code>…</code></pre>; keep only the
  // <code> inner so our <pre>/surface styling stays in control.
  const match = html.match(/<code[^>]*>([\s\S]*?)<\/code>/);
  return match ? match[1] : `<span>${escapeHtml(code)}</span>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
