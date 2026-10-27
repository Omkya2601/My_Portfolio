import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Section from "./components/Section";
import Rows from "./components/Rows";
import Cards from "./components/Cards";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { education, experience, integrations, projects } from "./data/content";
import { useSpotlight } from "./hooks/useSpotlight";
import { useCleanHashLinks } from "./hooks/useCleanHashLinks";

export default function App() {
  useSpotlight();
  useCleanHashLinks();
  return (
    <div className="relative overflow-x-clip">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Section id="experience" title={experience.title} subtitle={experience.subtitle}>
          <Rows items={experience.items} />
        </Section>
        <Section id="education" title={education.title} subtitle={education.subtitle}>
          <Rows items={education.items} />
        </Section>
        <Section id="projects" title={projects.title} subtitle={projects.subtitle}>
          <Cards items={projects.items} />
        </Section>
        <Section id="integrations" title={integrations.title} subtitle={integrations.subtitle}>
          <Cards items={integrations.items} threeCols />
        </Section>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
