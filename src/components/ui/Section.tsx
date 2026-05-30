import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { sectionTones, type SectionTone } from "@/lib/theme";

// Section background tones are centralized in src/lib/theme.ts (sectionTones).
export function Section({
  children,
  className = "",
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", sectionTones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${onDark ? "text-teal-400" : "text-teal-600"}`}>
      <span className={`h-px w-6 ${onDark ? "bg-teal-400/50" : "bg-teal-500/50"}`} />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 font-display text-3xl leading-[1.1] md:text-[2.6rem] ${onDark ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${onDark ? "text-slate-300" : "text-slate-600"}`}>{intro}</p>
      )}
    </div>
  );
}
