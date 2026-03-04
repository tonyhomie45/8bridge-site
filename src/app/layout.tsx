import type { Metadata } from "next";
import "./globals.css";
import { kurdis, nexa } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "8bridge",
    template: "%s · 8bridge",
  },
  description:
    "Scale infinitely. Earn cashback with credit cards. Access financing to grow with more cash flow.",
  metadataBase: new URL("https://8bridge.com"),
  openGraph: {
    title: "8bridge",
    description:
      "The only community where you can use credit cards to earn cashback — plus financing so you can scale with bigger cash flow.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nexa.variable} ${kurdis.variable}`}>
      <body className="min-h-dvh bg-8bg text-8text antialiased">
        {children}
      </body>
    </html>
  );
}
