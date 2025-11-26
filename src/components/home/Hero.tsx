import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Calendar, Activity, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="bg-card border border-primary/30 text-foreground px-3 py-1">
              DevOps Engineer · Managing Director & CEO, ONLYBEES PVT. LTD.
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              I design, deploy & maintain{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                systems that can't afford to go down
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Chimmon Ghosh Pakma, a DevOps and Cloud engineer from Shillong, building scalable,
              production-ready systems for events, ticketing, and real businesses through ONLYBEES PVT. LTD. and
              independent projects.
            </p>

            <p className="text-muted-foreground">
              From 10,000+ tickets sold for Durand Cup Shillong 2024 and 2025 to multi-city event platforms,
              I care about uptime, performance, and real users.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                View DevOps Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("https://drive.google.com/file/d/1fIPdz0cFT4TllXHidL0zNnD-J2oz31b-/view?usp=drive_link", "_blank")}
                className="border-border hover:bg-card"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:admin@chimmon.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                <Calendar className="w-4 h-4" />
                Book a technical consult
              </a>
            </div>
          </motion.div>

          {/* Right: Dashboard Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">System Status</h3>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30">Live</Badge>
              </div>

              {/* Environment Status */}
              <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Dev</span>
                  </div>
                  <p className="text-xs font-medium text-foreground">Operational</p>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Staging</span>
                  </div>
                  <p className="text-xs font-medium text-foreground">Operational</p>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Prod</span>
                  </div>
                  <p className="text-xs font-medium text-foreground">Operational</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                <div>
                  <p className="text-2xl font-bold text-foreground">847/min</p>
                  <p className="text-xs text-muted-foreground">Requests</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">99.9%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-secondary">237</p>
                  <p className="text-xs text-muted-foreground">Servers Deployed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">38s</p>
                  <p className="text-xs text-muted-foreground">Deploy time</p>
                </div>
              </div>

              {/* Pipeline */}
              <div className="bg-background/50 rounded-lg p-4 border border-border relative z-10">
                <p className="text-xs text-muted-foreground mb-3">Latest Pipeline</p>
                <div className="flex items-center justify-between gap-2">
                  {["Commit", "Build", "Test", "Deploy", "Monitor"].map((stage, index) => (
                    <div key={stage} className="flex flex-col items-center gap-1 flex-1">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                        className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </motion.div>
                      <span className="text-xs text-muted-foreground hidden sm:inline">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fake Logs */}
              <div className="mt-4 bg-background/50 rounded-lg p-3 border border-border font-mono text-xs space-y-1 relative z-10">
                <p className="text-primary">[onlybees-prod] Deployment v2025.11.26 completed in 38s</p>
                <p className="text-secondary">[durand-ticketing] 10,428 tickets served · 0 failed payments</p>
                <p className="text-accent">[supabase] New contact: "Let's talk infra for my festival"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
