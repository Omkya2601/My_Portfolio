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
    <footer className="relative overflow-hidden border-t border-line">
      {/* soft orange glow behind the footer */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[70%] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <div className="column relative flex flex-col items-center py-14 text-center">
        <a href="#top" className="flex items-center gap-3">
          <Avatar size={44} className="ring-1 ring-line" />
          <span className="text-left leading-none">
            <span className="block text-[19px] font-bold tracking-tight">
              {profile.firstName} {profile.lastName}
            </span>
            <span className="mt-1.5 block text-[14px] text-muted">{footer.role}</span>
          </span>
        </a>

        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} {...(l.external ? { target: "_blank", rel: "noopener" } : {})} className="pill pill-sm text-[#D6D6D6] hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
