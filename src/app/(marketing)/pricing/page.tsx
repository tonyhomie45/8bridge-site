import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { Faq } from "@/components/Faq";

export const metadata = {
  title: "Pricing",
};

const tiers = [
  {
    name: "Starter",
    price: "Custom",
    desc: "For teams getting card-based rails and cashback set up.",
    bullets: [
      "Credit-card-friendly payments",
      "Cashback on eligible spend",
      "Core onboarding + support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "For teams actively scaling and optimizing cash flow.",
    bullets: [
      "Higher volume support",
      "Operational tooling & reporting",
      "Priority support",
    ],
  },
  {
    name: "Scale + Financing",
    price: "Custom",
    desc: "For teams that want optional financing to increase cash flow.",
    bullets: [
      "Everything in Scale",
      "Financing (optional, subject to approval)",
      "Faster scaling with bigger cash flow",
    ],
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

        <SectionShell className="bg-8bg2" >
          <div id="pricing" className="grid gap-5 md:grid-cols-3">
            {tiers.map((t, idx) => (
              <div
                key={t.name}
                className={`rounded-2xl border border-8border/60 bg-white/3 p-7 ${
                  idx === 1 ? "bg-white/5" : ""
                }`}
              >
                <div className="font-display text-xs tracking-[0.18em] uppercase text-8muted">
                  {t.name}
                </div>
                <div className="mt-3 font-display text-3xl text-8text">{t.price}</div>
                <p className="mt-2 text-sm leading-6 text-8muted">{t.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-8muted">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[2px]">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  disabled
                  className="mt-7 inline-flex w-full cursor-not-allowed items-center justify-center rounded-full border border-8border/60 bg-8card px-5 py-3 text-sm font-medium text-8text/80 opacity-80"
                >
                  Join now
                </button>
                <p className="mt-3 text-xs text-8muted">
                  We’ll confirm eligibility, cashback mechanics, and (if needed) financing details.
                </p>
              </div>
            ))}
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
