import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { Faq } from "@/components/Faq";

export const metadata = {
  title: "Meta Ads",
};

export default function MetaAdsPage() {
  return (
    <div className="min-h-dvh bg-8bg">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Meta Ads"
          title="Run Meta spend with credit cards — earn cashback, unlock financing."
          subtitle="8bridge helps Meta advertisers scale with better cash flow mechanics: card-based payments for cashback (eligible spend) and optional financing when you want to push volume."
        />

        <SectionShell className="bg-8bg2">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Cashback advantage",
                d: "Use credit cards where others don’t — and capture cashback to improve margins.",
              },
              {
                t: "Bigger cash flow",
                d: "Financing can increase runway so you can scale without waiting on payout cycles.",
              },
              {
                t: "Operational clarity",
                d: "Simple setup, predictable process, and support that understands paid media ops.",
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
        </SectionShell>

        <SectionShell>
          <Faq />
        </SectionShell>
      </main>
      <SiteFooter />
    </div>
  );
}
