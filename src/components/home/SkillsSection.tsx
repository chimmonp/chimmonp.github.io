import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cloud, Code, Database, Users } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";
import { useRef } from "react";

const SkillCard = ({ category, categoryIndex }: { category: any; categoryIndex: number }) => {
  const { ref, tilt, handleMouseMove, handleMouseLeave } = useTilt(8);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const Icon = category.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    >
      <Card
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group h-full relative overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ y }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className={`${category.color} group-hover:scale-110 transition-transform`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill: any, idx: number) => (
              <motion.div
                key={skill.name}
                className="group/skill cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <motion.span
                    className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill.level}
                  </motion.span>
                </div>
                <p className="text-sm text-muted-foreground opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200">
                  {skill.usage}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-primary",
      skills: [
        { name: "Google Cloud", level: "Advanced", usage: "Primary cloud platform for production systems" },
        { name: "AWS", level: "Advanced", usage: "Multi-cloud strategy and backup infrastructure" },
        { name: "Microsoft Azure", level: "Intermediate", usage: "Enterprise client deployments" },
        { name: "Linux Systems", level: "Advanced", usage: "Server management and automation" },
        { name: "Networking", level: "Advanced", usage: "VPC design, load balancing, CDN configuration" },
      ],
    },
    {
      title: "DevOps & Tooling",
      icon: Code,
      color: "text-accent",
      skills: [
        { name: "Git / GitHub", level: "Advanced", usage: "Version control and CI/CD workflows" },
        { name: "CI/CD Pipelines", level: "Advanced", usage: "Automated testing and deployment" },
        { name: "Server Management", level: "Advanced", usage: "Configuration, monitoring, scaling" },
        { name: "Docker", level: "Intermediate", usage: "Containerization and deployment" },
        { name: "Scripting", level: "Intermediate", usage: "Automation with JS and shell scripts" },
      ],
    },
    {
      title: "Web & Backend",
      icon: Database,
      color: "text-secondary",
      skills: [
        { name: "React.js", level: "Advanced", usage: "Modern frontend development" },
        { name: "Next.js", level: "Advanced", usage: "Full-stack web applications" },
        { name: "Node.js", level: "Advanced", usage: "Backend APIs and serverless functions" },
        { name: "MongoDB", level: "Advanced", usage: "Database design and management" },
        { name: "Express.js", level: "Intermediate", usage: "REST API development" },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-brand-yellow",
      skills: [
        { name: "Leadership", level: "Advanced", usage: "GDSC Lead, team management" },
        { name: "Project Management", level: "Advanced", usage: "Multi-project coordination" },
        { name: "Communication", level: "Advanced", usage: "Client relations, technical writing" },
        { name: "Critical Thinking", level: "Advanced", usage: "Problem-solving and decision-making" },
        { name: "Teamwork", level: "Advanced", usage: "Cross-functional collaboration" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            DevOps, Cloud & Full-stack Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard key={category.title} category={category} categoryIndex={categoryIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};
