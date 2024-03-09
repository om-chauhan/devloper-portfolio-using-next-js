import Hero from "@/components/hero";
import Divider from "@/components/divider";
import Project from "@/components/project";
import About from "@/components/about";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Project />
      <Divider />
      <Skills />
    </main>
  );
}
