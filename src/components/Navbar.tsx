import { useEffect, useRef } from "react";
import { nav, navContact, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import Avatar from "./Avatar";

const ids = [...nav.map((n) => n.id), navContact.id];

export default function Navbar() {
  const active = useActiveSection(ids);
  const rowRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  // thin orange bar under the navbar showing how far down the page you are
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      barRef.current?.style.setProperty("transform", `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // mobile: keep the active pill centred in the sideways-scrolling row
  useEffect(() => {
    const row = rowRef.current;
    const pill = row?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!row || !pill || row.scrollWidth <= row.clientWidth) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    row.scrollTo({ left: pill.offsetLeft - (row.clientWidth - pill.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  const pillClass = (id: string) =>
    `pill pill-sm ${active === id ? "border-accent/60 bg-accent/10 text-fg" : "text-[#D6D6D6] hover:text-fg"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/75 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div className="column flex h-14 items-center justify-between gap-4 lg:h-16">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label={`${profile.firstName} ${profile.lastName}, back to top`}>
          <Avatar size={36} className="ring-1 ring-line" />
          <span className="leading-none">
            <span className="block text-[16px] font-bold tracking-tight lg:text-[17px]">{profile.firstName}</span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.32em] text-muted">{profile.lastName}</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1.5">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined} className={pillClass(item.id)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-1">
              <a href={`#${navContact.id}`} className="pill pill-sm pill-solid">{navContact.label}</a>
            </li>
          </ul>
        </nav>

        <a href={`#${navContact.id}`} className="pill pill-solid shrink-0 px-4 py-2 text-[14px] lg:hidden">{navContact.label}</a>
      </div>

      {/* mobile + tablet: pills in a second row that scrolls sideways, edge to edge */}
      <nav aria-label="Sections" className="border-t border-line/60 lg:hidden">
        <ul ref={rowRef} className="nav-row no-scrollbar relative flex snap-x gap-2 overflow-x-auto scroll-px-4 px-4 py-2 sm:justify-center sm:px-6">
          {nav.map((item) => (
            <li key={item.id} data-id={item.id} className="shrink-0 snap-start">
              <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined} className={`${pillClass(item.id)} px-4 py-2 text-[14px]`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        ref={barRef}
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-gradient-to-r from-accent/40 via-accent to-accent"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
