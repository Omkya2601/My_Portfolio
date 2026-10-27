import { skills } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title={skills.title} subtitle={skills.subtitle}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((g, i) => (
          <Reveal as="li" key={g.title} delay={(i % 3) * 50} className="card spot p-6 text-center sm:p-7">
            <h3 className="pl-[0.3em] text-[13px] font-bold uppercase tracking-[0.3em] text-accent">{g.title}</h3>
            <ul className="mt-5 flex flex-wrap justify-center gap-2">
              {g.items.map((s) => (
                <li key={s} className="tag bg-white/[0.02] px-4 py-2 text-[14.5px] text-fg transition-colors hover:border-accent/50">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
