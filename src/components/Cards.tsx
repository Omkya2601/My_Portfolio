import { Fragment } from "react";
import { statusLabels, type Card, type Status } from "../data/content";
import Reveal from "./Reveal";
import Tags from "./Tags";

const dot: Record<Status, string> = { live: "bg-live", building: "bg-accent", built: "bg-built" };

/** Projects / Integrations: card grid (2 columns, or 3 on large screens), `wide` cards span a full row. */
export default function Cards({ items, threeCols = false }: { items: Card[]; threeCols?: boolean }) {
  const wide = threeCols ? "sm:col-span-2 lg:col-span-3" : "sm:col-span-2";
  return (
    <ul className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${threeCols ? "lg:grid-cols-3" : ""}`}>
      {items.map((c, i) => (
        <Reveal as="li" key={c.title} delay={(i % 3) * 50} className={`card spot flex flex-col p-5 sm:p-7 ${c.wide ? wide : ""}`}>
          <div className="flex items-center justify-between gap-3">
            <p className="caps">{c.label}</p>
            {c.status && (
              <p className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[13px] font-medium leading-none text-[#D6D6D6]">
                <span className={`h-2 w-2 rounded-full ${dot[c.status]} ${c.status === "live" ? "shadow-[0_0_10px_#3DDC84]" : ""}`} aria-hidden="true" />
                {statusLabels[c.status]}
              </p>
            )}
          </div>

          <h3 className={`mt-4 font-bold tracking-tight ${c.wide ? "text-[30px] sm:text-[38px]" : "text-[22px]"}`}>{c.title}</h3>
          <p className={`mt-2.5 leading-relaxed text-muted ${c.wide ? "max-w-[820px] text-[16.5px] sm:text-[17px]" : "text-[16px]"}`}>{c.description}</p>

          {c.services && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services">
              {c.services.map((s) => (
                <li key={s} className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-[14px] font-semibold text-accent">{s}</li>
              ))}
            </ul>
          )}

          {c.flow && (
            <div className="mt-6 rounded-xl border border-line bg-bg/60 p-4">
              <p className="caps">{c.flow.title}</p>
              <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
                {c.flow.steps.map((s, j) => (
                  <Fragment key={s}>
                    {j > 0 && <li className="text-muted" aria-hidden="true">→</li>}
                    <li className={`rounded-full border px-3.5 py-1.5 text-[14px] font-medium ${s === c.title ? "border-accent/60 bg-accent/10 text-accent" : "border-line text-fg"}`}>
                      {s}
                    </li>
                  </Fragment>
                ))}
              </ol>
            </div>
          )}

          {c.bullets && (
            <ul className={`mt-5 grid gap-2.5 ${c.wide ? "sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3" : ""}`}>
              {c.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15.5px] leading-snug">
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          {c.tags && <Tags items={c.tags} className="mt-6" />}

          {c.link && (
            <div className="mt-auto pt-7">
              <a href={c.link.href} target="_blank" rel="noopener" className="pill pill-sm pill-solid">{c.link.label}</a>
            </div>
          )}
        </Reveal>
      ))}
    </ul>
  );
}
