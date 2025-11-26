import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline">Chimmon</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open("https://drive.google.com/file/d/1fIPdz0cFT4TllXHidL0zNnD-J2oz31b-/view?usp=drive_link", "_blank")}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
              >
                Contact
              </button>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                onClick={() => window.open("https://drive.google.com/file/d/1fIPdz0cFT4TllXHidL0zNnD-J2oz31b-/view?usp=drive_link", "_blank")}
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
