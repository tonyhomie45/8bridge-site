const faqs = [
  {
    q: "What makes 8bridge different?",
    a: "8bridge is built around credit-card-friendly infrastructure so you can earn cashback (on eligible spend). We can also offer financing so you can scale with bigger cash flow.",
  },
  {
    q: "Which channels do you support?",
    a: "Meta Ads, TikTok Ads, and Google Ads — with a unified setup and channel-specific best practices.",
  },
  {
    q: "Do you take a % of spend?",
    a: "Pricing depends on your setup and volume. We’ll keep it clear on the Pricing page and during onboarding.",
  },
  {
    q: "Is financing required?",
    a: "No. Financing is optional. Many teams start with payments + cashback and add financing when scaling.",
  },
];

export function Faq() {
  return (
    <div id="faq" className="rounded-2xl border border-8border/60 bg-white/3">
      <div className="px-6 py-6">
        <h2 className="font-display text-2xl text-8text">FAQ</h2>
        <p className="mt-2 text-sm text-8muted">
          Quick answers. If you want to move fast, hit “Join now”.
        </p>
      </div>
      <div className="divide-y divide-8border/60">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6 py-5">
            <summary className="cursor-pointer list-none font-medium text-8text">
              <span className="inline-flex items-center justify-between gap-4">
                {f.q}
                <span className="text-8muted transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-8muted">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
