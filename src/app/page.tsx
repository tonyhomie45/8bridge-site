import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionShell } from "@/components/SectionShell";

function GradientBand() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/8 to-transparent" />
  );
}

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-8bg">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-[0.22]" />
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />
          <div className="container relative py-20 md:py-28">
            <p className="font-display text-xs tracking-[0.22em] uppercase text-8muted">
              Ads payments + cashback + financing
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.02em] text-8text md:text-6xl">
              The only way to earn cashback with credit cards — and scale with bigger cash flow.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-8muted md:text-lg">
              8bridge helps performance teams run Meta, TikTok, and Google with credit cards to
              unlock cashback — plus optional financing so you can push spend without starving your
              runway.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-8border/60 bg-8card px-6 py-3 text-sm font-medium text-8text shadow-sm transition hover:border-8border hover:bg-white/5"
              >
                Join now
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-8muted transition hover:text-8text"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-12 grid gap-3 rounded-2xl border border-8border/60 bg-white/3 p-5 text-sm text-8muted md:grid-cols-3">
              <div>
                <div className="font-display text-xs tracking-[0.18em] uppercase text-8text">
                  Credit cards
                </div>
                <p className="mt-2 leading-6">
                  Use cards where others force bank wires — earn cashback on eligible spend.
                </p>
              </div>
              <div>
                <div className="font-display text-xs tracking-[0.18em] uppercase text-8text">
                  Financing
                </div>
                <p className="mt-2 leading-6">
                  Optional capital to increase cash flow and scale without waiting on payouts.
                </p>
              </div>
              <div>
                <div className="font-display text-xs tracking-[0.18em] uppercase text-8text">
                  Built for scale
                </div>
                <p className="mt-2 leading-6">
                  Designed for teams managing serious spend across channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SectionShell className="relative bg-8bg2">
          <GradientBand />
          <div className="grid items-start gap-10 md:grid-cols-12" id="how">
            <div className="md:col-span-5">
              <h2 className="font-display text-3xl leading-tight text-8text md:text-4xl">
                A cleaner way to run spend.
              </h2>
              <p className="mt-4 text-base leading-7 text-8muted">
                We’re not an agency. We’re the rails that help you pay, earn cashback, and unlock
                financing — so you can focus on performance.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-4">
                {["Pay with credit cards", "Earn cashback", "Scale with financing"].map(
                  (title, idx) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-8border/60 bg-white/3 p-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-8border/60 bg-white/2 font-display text-xs text-8text">
                          {idx + 1}
                        </div>
                        <div className="font-display text-sm tracking-[0.14em] uppercase text-8text">
                          {title}
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-8muted">
                        {idx === 0 &&
                          "Run ad spend across Meta, TikTok, and Google with card-friendly infrastructure."}
                        {idx === 1 &&
                          "Capture cashback (on eligible spend) instead of leaving money on the table."}
                        {idx === 2 &&
                          "When you need more runway, financing can increase cash flow so you can push spend."}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="relative">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="font-display text-3xl leading-tight text-8text md:text-4xl">
                Built for performance teams.
              </h2>
              <p className="mt-4 text-base leading-7 text-8muted">
                If you’re scaling spend, the bottleneck is rarely creative — it’s cash flow,
                payments, and limits.
              </p>
            </div>
            <div className="md:col-span-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Higher effective return",
                    d: "Cashback on eligible spend can materially change unit economics.",
                  },
                  {
                    t: "Faster scaling",
                    d: "Financing can increase available cash flow when you’re ready to push.",
                  },
                  {
                    t: "Channel coverage",
                    d: "One setup across Meta, TikTok, and Google — with dedicated pages and playbooks.",
                  },
                  {
                    t: "Simple onboarding",
                    d: "Clear requirements, fast setup, and support that understands paid media ops.",
                  },
                ].map((b) => (
                  <div
                    key={b.t}
                    className="rounded-2xl border border-8border/60 bg-white/3 p-6"
                  >
                    <div className="font-display text-sm tracking-[0.14em] uppercase text-8text">
                      {b.t}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-8muted">{b.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell className="relative bg-8bg2">
          <GradientBand />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-3xl leading-tight text-8text md:text-4xl">
                Ready to join?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-8muted">
                Start with Pricing, or jump into a channel page to see how 8bridge supports your
                stack.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/pricing"
                className="rounded-full border border-8border/60 bg-8card px-6 py-3 text-sm font-medium text-8text shadow-sm transition hover:border-8border hover:bg-white/5"
              >
                Join now
              </Link>
              <Link
                href="/meta-ads"
                className="rounded-full px-6 py-3 text-sm font-medium text-8muted transition hover:text-8text"
              >
                Explore Meta Ads
              </Link>
            </div>
          </div>
        </SectionShell>
      </main>

      <SiteFooter />
    </div>
  );
}
