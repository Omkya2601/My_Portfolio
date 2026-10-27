import { hero, profile } from "../data/content";
import Avatar from "./Avatar";

export default function Hero() {
  const { tagline } = hero;
  return (
    <section id="top" aria-label="Introduction" className="relative pb-14 pt-12 sm:pb-20 sm:pt-20">
      <div className="column text-center">
        <div className="relative mx-auto h-[150px] w-[150px]">
          <div className="absolute -inset-10 rounded-full bg-accent/[0.08] blur-3xl" aria-hidden="true" />
          <div className="photo-ring" aria-hidden="true" />
          <Avatar
            size={150}
            alt={profile.photoAlt}
            className="relative ring-1 ring-line shadow-[0_30px_70px_-10px_rgba(0,0,0,0.95),0_10px_25px_rgba(0,0,0,0.7)]"
          />
        </div>

        <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-card/80 px-4 py-1.5 text-[14px] font-medium text-[#D6D6D6] backdrop-blur">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          {hero.status}
        </p>

        <h1 className="mt-6 bg-gradient-to-b from-white via-fg to-[#A8A8A8] bg-clip-text pb-2 text-[clamp(38px,11.5vw,104px)] font-extrabold leading-[0.95] tracking-[-0.045em] text-transparent">
          {hero.name}
        </h1>

        <p className="mt-4 text-[clamp(22px,5vw,34px)] font-semibold leading-tight tracking-tight">
          {tagline.before}
          <span className="relative whitespace-nowrap text-accent">
            {tagline.highlight}
            <svg className="absolute -bottom-2 left-0 h-2.5 w-full" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 7 Q 50 1 98 6" fill="none" stroke="#FF8A3D" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>
          {tagline.after}
        </p>

        <p className="mx-auto mt-7 max-w-[640px] text-[16px] leading-relaxed text-muted sm:text-[17.5px]">{hero.intro}</p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="pill pill-solid">{hero.buttons.contact}</a>
          <a href="#projects" className="pill">{hero.buttons.work}</a>
          <a href={profile.resume} target="_blank" rel="noopener" className="pill">{hero.buttons.resume}</a>
        </div>

        <ul className="mt-8 flex items-center justify-center gap-5 text-[15px] font-medium text-[#D0D0D0]">
          <li><a href={profile.github} target="_blank" rel="noopener" className="transition-colors hover:text-fg">{hero.links.github}</a></li>
          <li className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
          <li><a href={profile.linkedin} target="_blank" rel="noopener" className="transition-colors hover:text-fg">{hero.links.linkedin}</a></li>
          <li className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
          <li><a href={`mailto:${profile.email}`} className="transition-colors hover:text-fg">{hero.links.email}</a></li>
        </ul>

        <p className="mt-6 text-[14.5px] text-muted">{hero.current}</p>

        <a href="#about" className="mx-auto mt-12 hidden w-fit flex-col items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.3em] text-muted transition-colors hover:text-fg sm:flex">
          <span className="pl-[0.3em]">{hero.scroll}</span>
          <span className="relative h-10 w-px overflow-hidden bg-line" aria-hidden="true">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-accent [animation:scroll-cue_1.8s_ease-in-out_infinite]" />
          </span>
        </a>
      </div>

      <div className="column mt-14 sm:mt-16">
        <div className="marquee border-y border-line/70 py-4" aria-label="Tech I work with">
          <ul className="marquee-track">
            {[...hero.stack, ...hero.stack].map((s, i) => (
              <li
                key={i}
                aria-hidden={i >= hero.stack.length ? "true" : undefined}
                className="flex items-center gap-8 pr-8 text-[16px] font-semibold tracking-tight text-muted"
              >
                {s}
                <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
