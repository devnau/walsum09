import type { PropsWithChildren } from 'react';

export function SectionTitle({ children, cta }: PropsWithChildren<{ cta?: React.ReactNode }>) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      {cta}
    </div>
  );
}
