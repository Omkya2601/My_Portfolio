import { useEffect } from "react";

/**
 * In-page links (href="#projects" etc.) scroll smoothly to their section
 * without adding "#projects" to the address bar. A link opened with a hash
 * still scrolls to that section, then the hash is removed from the URL.
 */
export function useCleanHashLinks() {
  useEffect(() => {
    const smooth = () => (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");
    const cleanUrl = () => history.replaceState(history.state, "", window.location.pathname + window.location.search);

    const scrollToId = (id: string, behavior: ScrollBehavior) => {
      if (id === "top") {
        window.scrollTo({ top: 0, behavior });
        return true;
      }
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior, block: "start" }); // respects the navbar offset (scroll-margin-top)
      return true;
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!(e.target instanceof Element)) return;
      const link = e.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      if (!id || !scrollToId(id, smooth())) return;
      e.preventDefault();
      if (window.location.hash) cleanUrl();
    };

    // opened with a hash, e.g. a shared link to /#projects
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      requestAnimationFrame(() => {
        scrollToId(id, "auto");
        cleanUrl();
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
