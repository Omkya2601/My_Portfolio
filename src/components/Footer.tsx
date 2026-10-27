import { footer, hero, profile } from "../data/content";
import Avatar from "./Avatar";

export default function Footer() {
  const links = [
    { label: hero.links.github, href: profile.github, external: true },
    { label: hero.links.linkedin, href: profile.linkedin, external: true },
    { label: hero.links.email, href: `mailto:${profile.email}` },
    { label: "Resume", href: profile.resume, external: true },
  ];
  return (
    <footer className="relative border-t border-line">
      <div className="column flex flex-col items-center py-14 text-center">
        <a href="#top" className="flex items-center gap-3">
          <Avatar size={40} className="ring-1 ring-line" />
          <span className="text-left leading-none">
            <span className="block text-[18px] font-bold tracking-tight">
              {profile.firstName} {profile.lastName}
            </span>
            <span className="mt-1.5 block text-[13.5px] text-muted">{footer.role}</span>
          </span>
        </a>

        <ul className="mt-7 flex flex-wrap justify-center gap-2">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} {...(l.external ? { target: "_blank", rel: "noopener" } : {})} className="pill pill-sm text-muted hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex w-full flex-col items-center justify-between gap-3 border-t border-line/70 pt-6 text-[14px] text-muted sm:flex-row">
          <p>{footer.copyright}</p>
          <p>{footer.built}</p>
          <a href="#top" className="transition-colors hover:text-fg">{footer.top}</a>
        </div>
      </div>
    </footer>
  );
}
