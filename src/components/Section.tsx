import type { ReactNode } from "react";

type Props = { id: string; title: string; subtitle: string; children: ReactNode };

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="py-16 sm:py-28">
      <div className="column">
        <header className="mb-10 text-center sm:mb-14">
          <h2 id={`${id}-title`} className="text-[clamp(30px,9.5vw,60px)] font-extrabold uppercase leading-none tracking-[-0.02em]">
            {title}
          </h2>
          {/* left padding balances the trailing letter-spacing so the text stays centred */}
          <p className="mt-4 pl-[0.4em] text-[13px] font-bold uppercase tracking-[0.4em] text-accent">{subtitle}</p>
          <span className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-accent/70 to-transparent" aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  );
}
