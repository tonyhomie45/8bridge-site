import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageHero } from "@/components/PageHero";
import { SectionShell } from "@/components/SectionShell";
import { Faq } from "@/components/Faq";

export const metadata = {
  title: "Google Ads",
};

export default function GoogleAdsPage() {
  return (
    <div className="min-h-dvh bg-8bg">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Google Ads"
          title="Run Google spend with credit cards — and keep scaling."
          subtitle="8bridge is designed for teams that want cashback (eligible spend) and the option to add financing for bigger cash flow while scaling Google Ads."
        />

        <SectionShell className="bg-8bg2">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Cashback mechanics",
                d: "Earn cashback with credit cards where alternatives force bank transfers.",
              },
              {
                t: "Cash flow support",
                d: "Financing can increase available cash flow so you can scale faster when ROI is proven.",
              },
              {
                t: "Clean reporting",
                d: "A simpler way to reconcile spend and keep your team moving.",
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
