import type { ReactNode } from "react";

export function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative py-[72px] md:py-24 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
