import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-aurora px-5 text-center">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="relative">
        <p className="font-mono text-sm text-teal-400">404</p>
        <h1 className="mt-3 font-display text-4xl text-white md:text-5xl">This page couldn&apos;t be verified.</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg" withArrow>Back to home</Button>
          <Button href="/developers" variant="white" size="lg">Developer docs</Button>
        </div>
      </div>
    </section>
  );
}
