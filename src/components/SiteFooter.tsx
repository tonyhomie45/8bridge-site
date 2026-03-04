import Link from "next/link";

const services = [
  { href: "/meta-ads", label: "Meta Ads" },
  { href: "/tiktok-ads", label: "TikTok Ads" },
  { href: "/google-ads", label: "Google Ads" },
];

const navigate = [
  { href: "/pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-8border/60 bg-8bg2">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Logo/horizontal-white.svg"
              alt="8bridge"
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-md text-sm leading-6 text-8muted">
              Scale infinitely. Earn cashback with credit cards. Unlock financing so you can
              grow with bigger cash flow.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-display text-xs tracking-[0.18em] uppercase text-8text">
              Services
            </div>
            <ul className="mt-4 space-y-2 text-sm text-8muted">
              {services.map((i) => (
                <li key={i.href}>
                  <Link className="hover:text-8text" href={i.href}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-display text-xs tracking-[0.18em] uppercase text-8text">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm text-8muted">
              {navigate.map((i) => (
                <li key={i.href}>
                  <Link className="hover:text-8text" href={i.href}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-8border/60 pt-6 text-xs text-8muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 8bridge. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-8text">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-8text">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
