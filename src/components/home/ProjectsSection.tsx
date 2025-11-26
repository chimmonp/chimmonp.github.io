import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import { useRef } from "react";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt(5);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden relative"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{project.name}</h3>
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-3">
                {project.role}
              </Badge>
              {project.link && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(project.link, "_blank")}
                  className="ml-2 text-primary hover:text-primary/80 hover:scale-110 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          {/* Metrics */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {project.metrics.map((metric: any, idx: number) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  className="bg-background/50 rounded-lg p-4 border border-border hover:border-primary/30 transition-all cursor-pointer group/metric"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-primary group-hover/metric:animate-pulse" />
                    <span className="text-xs text-muted-foreground">{metric.label}</span>
                  </div>
                  <p className="text-xl font-bold text-foreground">{metric.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* DevOps Notes */}
          <div className="bg-background/50 rounded-lg p-4 border border-border mb-4 hover:bg-background/70 transition-colors">
            <p className="text-xs text-muted-foreground mb-2">DevOps Perspective:</p>
            <p className="text-sm text-foreground">{project.devopsNotes}</p>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech: string, idx: number) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <Badge
                  variant="outline"
                  className="border-border bg-background/30 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      name: "Durand Cup Shillong 2024 & 2025 Ticketing System",
      role: "DevOps & Full-stack Engineer",
      description:
        "Built and deployed a complete ticketing platform: clickable SVG seat map, concurrency-safe booking logic, instant PDF ticket & QR generation, and secure PhonePe payments.",
      metrics: [
        { label: "Tickets Sold", value: "10,000+", icon: Users },
        { label: "Revenue Processed", value: "₹20+ lakhs", icon: TrendingUp },
        { label: "Uptime", value: "99.9%", icon: Zap },
      ],
      stack: ["Next.js", "Node.js", "MongoDB", "PhonePe", "GCP", "PDF Generation"],
      devopsNotes: "Deployed on cloud infrastructure with containerized app, monitored logs, and handled traffic spikes during peak booking periods.",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      name: "ONLYBEES PVT. LTD. Events Platform",
      role: "Managing Director & CEO",
      description:
        "Multi-city event booking platform for 30+ events across Kolkata, Guwahati & Shillong. Built organizer dashboards, OTP auth, Razorpay integration, and MongoDB-backed event data.",
      metrics: [
        { label: "Events", value: "30+", icon: Users },
        { label: "Cities", value: "3", icon: ExternalLink },
        { label: "Active Users", value: "5,000+", icon: TrendingUp },
      ],
      stack: ["Next.js", "React", "Node.js", "MongoDB", "Razorpay", "AWS"],
      devopsNotes: "Multi-tenant architecture for different organizers with secure payment integration, monitoring & admin dashboards.",
      gradient: "from-secondary/20 to-primary/20",
    },
    {
      name: "The Yeastern Civilization Table Reservation System",
      role: "DevOps & Full-stack Engineer",
      description:
        "Restaurant table reservation system for tycindia.com with live payments. Designed and deployed a Next.js + MongoDB system for multiple restaurants.",
      metrics: [
        { label: "Restaurants", value: "Multiple", icon: Users },
        { label: "Bookings", value: "1,000+", icon: TrendingUp },
        { label: "Response Time", value: "<200ms", icon: Zap },
      ],
      stack: ["Next.js", "MongoDB", "PhonePe", "Node.js"],
      devopsNotes: "Handled reservations, PhonePe payments, and restaurant onboarding with real-time availability updates.",
      gradient: "from-accent/20 to-secondary/20",
    },
    {
      name: "JKR Residency",
      role: "Full-stack Web Developer",
      description:
        "Created a website for a guesthouse to showcase rooms and features similar to a hotel. Implemented booking using WhatsApp API from Meta.",
      metrics: [
        { label: "Rooms Listed", value: "12+", icon: Users },
        { label: "Bookings", value: "500+", icon: TrendingUp },
        { label: "Response Time", value: "<150ms", icon: Zap },
      ],
      stack: ["Next.js", "WhatsApp API", "Meta Business"],
      devopsNotes: "Integrated WhatsApp API for seamless booking communication and automated responses.",
      gradient: "from-primary/20 to-secondary/20",
      link: "https://jkrresidency.in",
    },
    {
      name: "Nomads Adventure Shillong",
      role: "Full-stack Web Developer",
      description:
        "Developed a camp booking site for Nomads Shillong where people could reserve camps for cherry blossom festival. Implemented WhatsApp API for easy communication and flexible booking options.",
      metrics: [
        { label: "Camp Bookings", value: "300+", icon: Users },
        { label: "Festival Events", value: "5", icon: ExternalLink },
        { label: "Customer Satisfaction", value: "4.8/5", icon: TrendingUp },
      ],
      stack: ["Next.js", "WhatsApp API", "Node.js", "MongoDB"],
      devopsNotes: "Deployed with seasonal scaling for cherry blossom festival peak traffic and integrated WhatsApp for instant booking confirmations.",
      gradient: "from-accent/20 to-primary/20",
      link: "https://nomadsshillong.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Systems I've Built & Run
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            View more projects including chimmon.com, JKR Residency, and Nomads Adventure
          </p>
          <Button
            variant="outline"
            className="border-border hover:bg-card"
            onClick={() => window.open("https://chimmon.com", "_blank")}
          >
            <ExternalLink className="mr-2 w-4 h-4" />
            Visit chimmon.com
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
