import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { Faq } from "@/components/Faq";

export const metadata = {
  title: "Pricing",
};

const core = {
  name: "Membership",
  price: "Custom",
  desc: "Card-based rails for ad spend, built for teams scaling volume.",
  bullets: [
    "Credit-card spend across channels",
    "Cashback up to 2.5% (available starting Apr 1)",
    "Onboarding + support",
  ],
};

const addons = [
  {
    name: "Credit line options",
    desc: "Increase cash flow so you can scale when performance is working.",
  },
  {
    name: "Higher-volume ops",
    desc: "For teams managing larger budgets and needing tighter reconciliation.",
  },
  {
    name: "Priority support",
    desc: "Faster response times and hands-on help for paid media ops.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-dvh bg-8bg">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Pricing"
          title="Pick a plan. Join now."
          subtitle="We keep pricing simple and aligned with your volume and setup. If you want credit-card-based cashback and the option for financing, 8bridge is built for you."
        />

        <SectionShell className="bg-8bg2">
          <div id="pricing" className="grid gap-6 md:grid-cols-12">
            <div className="rounded-3xl border border-8border/60 bg-white/5 p-8 md:col-span-7">
              <div className="font-display text-xs tracking-[0.18em] uppercase text-8muted">
                {core.name}
              </div>
              <div className="mt-3 font-display text-4xl text-8text">{core.price}</div>
              <p className="mt-2 max-w-xl text-sm leading-6 text-8muted">{core.desc}</p>

              <ul className="mt-6 grid gap-2 text-sm text-8muted sm:grid-cols-2">
                {core.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[2px]">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-8border/60 bg-8card px-6 py-3 text-sm font-medium text-8text/80 opacity-80"
                >
                  Join now
                </button>
                <p className="text-xs text-8muted">
                  Join is currently invite-only. We’ll confirm eligibility + cashback mechanics.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-8border/60 bg-white/3 p-8 md:col-span-5">
              <div className="font-display text-xs tracking-[0.18em] uppercase text-8muted">
                Add-ons
              </div>
              <h2 className="mt-3 font-display text-2xl text-8text">Scale when you’re ready.</h2>
              <p className="mt-3 text-sm leading-6 text-8muted">
                Add credit line options or higher-volume operations support as you grow.
              </p>
              <div className="mt-6 grid gap-3">
                {addons.map((a) => (
                  <div
                    key={a.name}
                    className="rounded-2xl border border-8border/60 bg-white/2 p-5"
                  >
                    <div className="font-display text-sm tracking-[0.14em] uppercase text-8text">
                      {a.name}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-8muted">{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell>
          <Faq />
        </SectionShell>
      </main>
      <SiteFooter />
    </div>
  );
}
