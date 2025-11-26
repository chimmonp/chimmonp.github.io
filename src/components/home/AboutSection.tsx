import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const AboutSection = () => {
  const timeline = [
    { year: "2018", event: "Chimmon.com founded" },
    { year: "2019", event: "Vortex Hosting / Evolution Hosting (Cloud & Server roles)" },
    { year: "2021", event: "B.Tech at Sister Nivedita University" },
    { year: "2022", event: "GDSC Campus Lead" },
    { year: "2023–Now", event: "Managing Director and CEO, ONLYBEES PVT. LTD." },
    { year: "2024", event: "Founded Tynrai.org · Durand Cup 2024 & 2025 ticketing systems" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            From School Servers to Production Ticketing Systems
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              Born in Shillong with an early fascination for technology, I started with Java and
              gradually evolved into managing servers and databases for hosting firms like Vortex
              Hosting and Evolution Hosting.
            </p>

            <p>
              Graduated from Sister Nivedita University with specialization in IoT, Cyber Security, and Blockchain,
              I've developed a strong foundation in Cloud computing,
              networking, Linux administration, and DevOps practices.
            </p>

            <p>
              As Managing Director and CEO of ONLYBEES PVT. LTD., I build and maintain event
              ticketing systems that handle real revenue, high concurrency, and require constant
              monitoring. From the Durand Cup 2024 and 2025 ticketing systems to multi-city event platforms, I
              ensure systems stay up when they matter most.
            </p>

            <p>
              Beyond my professional work, I'm actively involved in the tech community as Google
              Developer Student Clubs Lead, Meghalaya Dev Community core team member, and Head of IT for
              Meghalaya MUN – combining technical expertise with leadership and community building.
            </p>
          </motion.div>

          {/* DevOps Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">DevOps Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="font-semibold text-primary text-sm">{item.year}</p>
                      <p className="text-foreground text-sm mt-1">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
