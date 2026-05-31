import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { sectionTones, type SectionTone } from "@/lib/theme";

// Section background tones are centralized in src/lib/theme.ts (sectionTones).
export function Section({
  children,
  className = "",
  tone = "light",
  id,
  stack = false,
  shadow = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  id?: string;
  /** Sticky-stacking panel: pins to the top so the next section slides up and
   *  stacks over it on scroll. Relies on the opaque tone background to cover. */
  stack?: boolean;
  shadow?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        shadow ? "shadow-[0_-30px_60px_-32px_rgba(11,23,36,0.22)]" : "",
        sectionTones[tone],
        stack ? "sticky top-0 flex min-h-svh flex-col justify-center py-20 md:py-24" : "py-20 md:py-28",
        className,
      )}
    >
      <div className="container-page w-full">{children}</div>
    </section>
  );
}

// Reusable sticky-stacking section — equivalent to <Section stack …>. Use it to
// wrap section content, or just add `stack` to an existing <Section>.
export function StackSection(props: Omit<Parameters<typeof Section>[0], "stack">) {
  return <Section {...props} stack />;
}

export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${onDark ? "text-teal-400" : "text-teal-600"}`}>
      {/* <span className={`h-px w-6 ${onDark ? "bg-teal-400/50" : "bg-teal-500/50"}`} /> */}
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
