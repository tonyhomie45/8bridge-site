import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.22]" />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />
      <div className="container relative py-[72px] md:py-24">
        <p className="font-display text-xs tracking-[0.22em] uppercase text-8muted">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.02em] text-8text md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-8muted md:text-lg">
          {subtitle}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-8border/60 bg-8card px-6 py-3 text-sm font-medium text-8text shadow-sm transition hover:border-8border hover:bg-white/5"
          >
            Join now
          </Link>
          <Link
            href="#faq"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-8muted transition hover:text-8text"
          >
            See FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
