import { Icon } from "@/components/ui/Icon";

type Testimonial = { quote: string; name: string; title: string; company: string; rating: number };

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7">
      <div className="flex flex-row">
      {Array.from({length: t.rating}).map((_, index) => (
        <Icon key={index} name="star" className="h-5 w-5 text-gold-500" />
      ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-900">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <span
          className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white"
          aria-hidden
        >
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <div>
          <p className="text-sm font-semibold text-navy-900">{t.name}</p>
          <p className="text-xs text-slate-500">
            {t.title} · {t.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
