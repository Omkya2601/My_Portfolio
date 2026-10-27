import { useEffect } from "react";

/** Moves a soft orange light under the mouse on any element with the `spot` class. */
export function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!(e.target instanceof Element)) return;
      const el = e.target.closest<HTMLElement>(".spot");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}
