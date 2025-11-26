import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Globe } from "lucide-react";
import { motion } from "framer-motion";

export const IdentityStrip = () => {
  const languages = ["English", "Hindi", "Bengali", "Assamese", "Khasi", "Jaintia", "Nepali"];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border bg-card/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Name & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="w-4 h-4" />
              <span className="text-sm">Identity</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Chimmon Ghosh Pakma</h2>
            <p className="text-sm text-muted-foreground">
              DevOps & Cloud Engineer · Managing Director & CEO, ONLYBEES PVT. LTD. · Full-stack Web Engineer
            </p>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Location</span>
            </div>
            <p className="text-xl font-semibold text-foreground">Shillong, Meghalaya</p>
            <p className="text-sm text-muted-foreground">India</p>
          </div>

          {/* Languages */}
          <div className="space-y-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Languages</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="outline"
                  className="border-border bg-background/50 text-foreground"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
