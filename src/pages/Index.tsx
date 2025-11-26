import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { IdentityStrip } from "@/components/home/IdentityStrip";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { LiquidBackground } from "@/components/interactive/LiquidBackground";
import { MouseFollower } from "@/components/interactive/MouseFollower";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <LiquidBackground />
      <MouseFollower />
      <div className="relative z-10">
        <Navbar />
        <Hero />
      <IdentityStrip />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
            <p>© 2025 Chimmon Ghosh Pakma.</p>
            <p className="mt-2">Designed to showcase production-ready systems & DevOps expertise.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
