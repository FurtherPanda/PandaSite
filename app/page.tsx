import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { PROJECTS } from "@/data/projects";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/tech-stack";
import { Footer } from "@/components/sections/Footer";
import { About } from "@/components/sections/Abouts";

export default function HomePage() {
  return (
    <div className="pt-8">
      {/* ==========================================
          HERO SECTION
         ========================================== */}
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </div>
  );
}
