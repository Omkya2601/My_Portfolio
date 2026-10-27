import { useEffect, useRef, type ReactNode } from "react";

type Props = { children: ReactNode; as?: "div" | "li"; delay?: number; className?: string };

/** Fades and slides its content in the first time it scrolls into view. */
export default function Reveal({ children, as = "div", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("is-visible");
        io.disconnect();
        // the stagger delay is only for the entrance, not for later hover effects
        setTimeout(() => (el.style.transitionDelay = ""), 500 + delay);
      },
      { rootMargin: "0px 0px 15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as "div";
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
