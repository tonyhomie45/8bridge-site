import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionShell } from "@/components/SectionShell";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-8bg">
      <SiteHeader />
      <main>
        <SectionShell>
          <h1 className="font-display text-4xl text-8text">Privacy Policy</h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-8muted">
            Draft placeholder. Replace with your legal text.
          </p>
        </SectionShell>
      </main>
      <SiteFooter />
    </div>
  );
}
