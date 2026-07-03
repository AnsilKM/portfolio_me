import Navbar from "../components/ui/Navbar";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import SpotlightBackground from "../components/ui/SpotlightBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-bg-primary text-text-primary selection:bg-accent/20 selection:text-text-primary overflow-hidden">
      <SpotlightBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
