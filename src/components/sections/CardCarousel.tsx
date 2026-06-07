"use client";

import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

// Reusable "coverflow" carousel: the centered card is full-size, neighbours are
// scaled down and faded. Spring movement, drag/swipe, arrows, dots, keyboard, and
// reduced-motion fallback. With `loop` (default) it scrolls infinitely — the list
// is rendered three times and the active index is kept in the middle copy, then
// silently re-based after every move, so the last card sits to the left of the
// first and you can scroll forever in either direction.
export function CardCarousel({
  children,
  className,
  itemClassName = "w-[82vw] sm:w-[430px]",
  ariaLabel = "Carousel",
  loop = true,
}: {
  children: ReactNode;
  className?: string;
  /** Slide width — geometry is measured from the DOM, so any responsive width works. */
  itemClassName?: string;
  ariaLabel?: string;
  loop?: boolean;
}) {
  const items = Children.toArray(children).filter(isValidElement);
  const realTotal = items.length;
  const looping = loop && realTotal > 1;
  // [last copy][real copy][next copy] — always a card on each side to wrap into.
  const display = looping ? [...items, ...items, ...items] : items;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const inited = useRef(false);
  const jump = useRef(false); // next position change should be instant (the re-base)

  const [active, setActive] = useState(looping ? realTotal : 0);
  const [metrics, setMetrics] = useState({ cw: 0, cardW: 0, step: 0 });
  const reduce = useReducedMotion();
  const x = useMotionValue(0);

  const spring = reduce
    ? ({ duration: 0 } as const)
    : ({ type: "spring", stiffness: 260, damping: 34, mass: 0.9 } as const);

  const targetX = useCallback(
    (idx: number) => (metrics.cw ? metrics.cw / 2 - (idx * metrics.step + metrics.cardW / 2) : 0),
    [metrics],
  );

  // Equivalent index inside the middle copy if `a` has drifted into a side copy.
  const rebased = useCallback(
    (a: number) => {
      if (!looping) return a;
      if (a < realTotal) return a + realTotal;
      if (a >= realTotal * 2) return a - realTotal;
      return a;
    },
    [looping, realTotal],
  );

  const stepBy = useCallback(
    (dir: number) =>
      setActive((a) => (looping ? a + dir : Math.max(0, Math.min(realTotal - 1, a + dir)))),
    [looping, realTotal],
  );

  const goToReal = useCallback(
    (realIdx: number) =>
      setActive((a) => {
        if (!looping) return Math.max(0, Math.min(realTotal - 1, realIdx));
        const cur = ((a % realTotal) + realTotal) % realTotal;
        return a + (realIdx - cur); // move minimally within the current copy
      }),
    [looping, realTotal],
  );

  // Measure viewport + slide geometry from the rendered DOM (robust to whatever
  // responsive width itemClassName produces). step = distance between slide starts.
  useEffect(() => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;
    const measure = () => {
      const slides = track.children;
      if (slides.length === 0) return;
      const first = slides[0] as HTMLElement;
      const step =
        slides.length > 1 ? (slides[1] as HTMLElement).offsetLeft - first.offsetLeft : first.offsetWidth;
      setMetrics({ cw: vp.clientWidth, cardW: first.offsetWidth, step });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(vp);
    return () => ro.disconnect();
  }, [display.length]);

  // Center the active card. Instant on first paint and on the re-base jump; spring
  // otherwise. When a real move settles, re-base back into the middle copy — the
  // jump lands on an identical card, so the viewport doesn't visibly change.
  useEffect(() => {
    const t = targetX(active);
    const settle = () => {
      const r = rebased(active);
      if (r !== active) {
        jump.current = true;
        setActive(r);
      }
    };
    if (!inited.current || reduce || jump.current) {
      const wasJump = jump.current;
      x.set(t);
      inited.current = true;
      jump.current = false;
      if (!wasJump) settle();
      return;
    }
    const controls = animate(x, t, { ...spring, onComplete: settle });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, targetX, reduce]);

  const realActive = ((active % realTotal) + realTotal) % realTotal;

  if (realTotal <= 1) {
    return <div className={cn("flex justify-center", className)}>{children}</div>;
  }

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={viewportRef}
        className="relative overflow-x-clip py-4"
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            stepBy(-1);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            stepBy(1);
          }
        }}
      >
        <motion.div
          ref={trackRef}
          className="flex items-center gap-6"
          style={{ x }}
          drag={reduce ? false : "x"}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60 || info.velocity.x < -500) stepBy(1);
            else if (info.offset.x > 60 || info.velocity.x > 500) stepBy(-1);
            else animate(x, targetX(active), spring); // snap back
          }}
        >
          {display.map((child, i) => {
            const isActive = i === active;
            return (
              <motion.div
                key={i}
                className={cn("flex-none", itemClassName)}
                animate={{ scale: isActive ? 1 : 0.84, opacity: isActive ? 1 : 0.5 }}
                transition={spring}
                onClick={() => !isActive && stepBy(i - active)}
                style={{ cursor: isActive ? "default" : "pointer" }}
              >
                {/* Side cards can't be clicked through to their inner links — clicking
                    them just brings the card to the center. */}
                <div className={cn(!isActive && "pointer-events-none select-none")}>{child}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Controls: prev · dots · next */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => stepBy(-1)}
          disabled={!looping && realActive === 0}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Icon name="arrow-right" className="h-5 w-5 rotate-180" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToReal(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === realActive}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === realActive ? "w-7 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => stepBy(1)}
          disabled={!looping && realActive === realTotal - 1}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-30"
        >
          <Icon name="arrow-right" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
