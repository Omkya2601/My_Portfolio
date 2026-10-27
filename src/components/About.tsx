import { about } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title={about.title} subtitle={about.subtitle}>
      <div className="mx-auto max-w-[760px] space-y-5 text-center text-[16.5px] leading-relaxed text-muted sm:text-[18px]">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <dl className="mt-12 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-4">
        {about.facts.map((f, i) => (
          <Reveal key={f.label} delay={i * 40} className="card spot px-4 py-5 text-center">
            <dt className="caps">{f.label}</dt>
            <dd className="mt-1.5 text-[16.5px] font-semibold leading-snug">{f.value}</dd>
          </Reveal>
        ))}
      </dl>

      <div className="mt-16 text-center">
        <h3 className="pl-[0.3em] text-[13px] font-bold uppercase tracking-[0.3em] text-muted">{about.pillarsTitle}</h3>
      </div>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {about.pillars.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i * 50} className="card spot p-6 text-left sm:p-7">
            <span className="text-[14px] font-bold tabular-nums text-accent">0{i + 1}</span>
            <h4 className="mt-3 text-[20px] font-bold tracking-tight">{p.title}</h4>
            <p className="mt-2 text-[16px] leading-relaxed text-muted">{p.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
