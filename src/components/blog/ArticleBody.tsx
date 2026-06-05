import type { ReactNode } from "react";

// Renders the markdown-lite `body` from blog content: ## / ### headings, - lists,
// - **bold**: text definition items, | tables |, blank-line spacing, and **inline
// bold**. Themed with OPIX tokens. Pure render (server component).

// Split a line on **bold** spans into React nodes.
function inline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyPrefix}-b${i}`} className="font-semibold text-navy-900">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function ArticleBody({ body }: { body: string }) {
  const lines = body.split("\n");
  const out: ReactNode[] = [];
  let listBuffer: ReactNode[] = [];

  const flushList = () => {
    if (listBuffer.length === 0) return;
    out.push(
      <ul key={`ul-${out.length}`} className="my-5 space-y-2 pl-1">
        {listBuffer}
      </ul>,
    );
    listBuffer = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      flushList();
      out.push(
        <h2 key={i} className="mt-12 mb-4 font-display text-2xl leading-snug text-navy-900">
          {line.slice(3)}
        </h2>,
      );
    } else if (line.startsWith("### ")) {
      flushList();
      out.push(
        <h3 key={i} className="mt-8 mb-3 text-lg font-semibold text-navy-900">
          {line.slice(4)}
        </h3>,
      );
    } else if (line.startsWith("|") && line.includes("|")) {
      flushList();
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      i--; // step back; the for-loop will advance
      const [header, , ...rows] = tableLines;
      const headers = header.split("|").filter(Boolean).map((h) => h.trim());
      out.push(
        <div key={`table-${i}`} className="my-7 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                {headers.map((h, j) => (
                  <th
                    key={j}
                    className="border-b border-slate-200 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-navy-900"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                return (
                  <tr key={ri} className="border-b border-slate-100 last:border-0">
                    {cells.map((cell, ci) => (
                      <td key={ci} className={`px-5 py-3 text-slate-700 ${ci === 0 ? "font-medium" : ""}`}>
                        {inline(cell, `t${ri}-${ci}`)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>,
      );
    } else if (line.startsWith("- ")) {
      const boldMatch = line.match(/^- \*\*(.+?)\*\*:\s*(.+)$/);
      listBuffer.push(
        <li key={i} className="flex gap-2.5 leading-relaxed text-slate-700">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-teal-500" />
          <span>
            {boldMatch ? (
              <>
                <strong className="font-semibold text-navy-900">{boldMatch[1]}:</strong> {inline(boldMatch[2], `li${i}`)}
              </>
            ) : (
              inline(line.slice(2), `li${i}`)
            )}
          </span>
        </li>,
      );
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      out.push(
        <p key={i} className="my-4 text-[15px] leading-[1.85] text-slate-700">
          {inline(line, `p${i}`)}
        </p>,
      );
    }
  }
  flushList();

  return <div>{out}</div>;
}
