import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { Faq } from "@/components/Faq";

export const metadata = {
  title: "TikTok Ads",
};

export default function TikTokAdsPage() {
  return (
    <div className="min-h-dvh bg-8bg">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="TikTok Ads"
          title="Scale TikTok with smarter cash flow."
          subtitle="Use credit cards to earn cashback (eligible spend) and optionally add financing so you can scale spend without slowing down growth."
        />

        <SectionShell className="bg-8bg2">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Card-based rails",
                d: "Keep your stack consistent and card-friendly while you scale." ,
              },
              {
                t: "Cashback",
                d: "Earn cashback on eligible spend instead of losing value to restrictive payment flows.",
              },
              {
                t: "Financing",
                d: "Increase cash flow to push spend when you have a winning creative + offer.",
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
