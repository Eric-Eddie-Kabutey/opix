import { highlightCode } from "@/lib/shiki";
import { type CodeTone } from "./CodeBlock";
import { CodeTabsClient } from "./CodeTabsClient";

type Tab = { lang: string; label: string; code: string };

// Async server component: pre-highlights every tab with Shiki at render time, then
// hands the tokenized HTML to the client tab-switcher. No highlighter ships to the
// browser. Tone matches the surrounding surface — light (default) or dark.
export async function CodeTabs({
  tabs,
  title,
  tone = "light",
}: {
  tabs: Tab[];
  title?: string;
  tone?: CodeTone;
}) {
  const highlighted = await Promise.all(
    tabs.map(async (t) => ({
      label: t.label,
      code: t.code,
      html: await highlightCode(t.code, t.lang, tone),
    })),
  );

  return <CodeTabsClient tabs={highlighted} title={title} tone={tone} />;
}
