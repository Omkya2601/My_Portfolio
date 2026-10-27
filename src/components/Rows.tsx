import type { Row } from "../data/content";
import Reveal from "./Reveal";
import Tags from "./Tags";

/** Experience / Education list: rows separated by thin lines, title left, date right. */
export default function Rows({ items }: { items: Row[] }) {
  return (
    <ul className="border-t border-line">
      {items.map((item) => {
        const meta = [item.period, item.place].filter(Boolean).join(" · ");
        const current = item.period?.includes("Present");
        return (
          <Reveal
            as="li"
            key={`${item.org}-${item.role}`}
            className="group relative border-b border-line py-7 transition-colors sm:px-5 sm:py-9 sm:hover:bg-white/[0.015]"
          >
            <span
              className="absolute inset-y-0 left-0 hidden w-px origin-top scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100 sm:block"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-[20px] font-bold leading-snug tracking-tight sm:text-[23px]">
                {item.org} <span className="font-medium text-muted">/ {item.role}</span>
                {current && (
                  <span className="ml-3 inline-flex translate-y-[-2px] items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-2.5 py-0.5 align-middle text-[12.5px] font-semibold text-live">
                    <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
                    Current
                  </span>
                )}
              </h3>
              {meta && <p className="caps shrink-0">{meta}</p>}
            </div>
            <p className="mt-3 max-w-[860px] text-[16.5px] leading-relaxed text-muted">{item.description}</p>
            {item.tags && <Tags items={item.tags} className="mt-4" />}
          </Reveal>
        );
      })}
    </ul>
  );
}
