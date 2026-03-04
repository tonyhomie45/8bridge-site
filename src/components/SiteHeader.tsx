import Link from "next/link";

const nav = [
  { href: "/#how", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/meta-ads", label: "Meta Ads" },
  { href: "/tiktok-ads", label: "TikTok Ads" },
  { href: "/google-ads", label: "Google Ads" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-8border/60 bg-8bg/75 backdrop-blur supports-[backdrop-filter]:bg-8bg/55">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/Logo/symbol-white.svg"
            alt="8bridge"
            className="h-8 w-8"
          />
          <span className="font-display text-[14px] tracking-[0.12em] uppercase">
            8bridge
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-8muted md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="transition-colors hover:text-8text"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/pricing"
            className="rounded-full border border-8border/60 bg-8card px-4 py-2 text-sm text-8text shadow-sm transition hover:border-8border hover:bg-white/5"
          >
            Join now
          </Link>
        </div>
      </div>
    </header>
  );
}
