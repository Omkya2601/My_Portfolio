import { useEffect, useState } from "react";
import { contact, profile } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // fallback for browsers without the async clipboard API
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    const ok = document.execCommand("copy");
    el.remove();
    return ok;
  }
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const details = [
    { label: contact.labels.phone, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: contact.labels.github, value: profile.githubLabel, href: profile.github, external: true },
    { label: contact.labels.linkedin, value: profile.linkedinLabel, href: profile.linkedin, external: true },
    { label: contact.labels.resume, value: contact.resumeValue, href: profile.resume, external: true },
  ];

  return (
    <Section id="contact" title={contact.title} subtitle={contact.subtitle}>
      <Reveal className="card spot relative overflow-hidden px-4 py-10 text-center sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[60%] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-3xl" aria-hidden="true" />
        <p className="inline-flex items-center gap-2.5 rounded-full border border-line px-4 py-1.5 text-[14px] font-medium text-[#D6D6D6]">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          {contact.status}
        </p>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-relaxed text-muted sm:text-[18px]">{contact.text}</p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 block break-all text-[clamp(22px,5.5vw,40px)] font-extrabold tracking-[-0.02em] transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" className="pill" onClick={async () => setCopied(await copyText(profile.email))}>
            <span aria-live="polite">{copied ? contact.copied : contact.copy}</span>
          </button>
          <a href={`mailto:${profile.email}`} className="pill pill-solid">{contact.send}</a>
        </div>
      </Reveal>

      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {details.map((d, i) => (
          <Reveal as="li" key={d.label} delay={i * 40}>
            <a
              href={d.href}
              {...(d.external ? { target: "_blank", rel: "noopener" } : {})}
              className="card spot block h-full px-5 py-5 text-center"
            >
              <span className="caps block">{d.label}</span>
              <span className="mt-1.5 block break-words text-[16px] font-semibold">{d.value}</span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
