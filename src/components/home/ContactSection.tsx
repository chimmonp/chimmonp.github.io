import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);
      
      if (error) throw error;
      
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/chimmon", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/chimmon", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com/chimmonpakma", label: "Twitter" },
    { icon: Mail, url: "mailto:admin@chimmon.com", label: "Email" },
    { icon: Globe, url: "https://chimmon.com", label: "Website" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Let's Talk Infra, Events & DevOps
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            If you're building something that can't go down — a festival, a live event, or a
            mission-critical product — I'd love to help design the infra.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-border"
              />
            </div>
            <Input
              placeholder="Company/Organization (Optional)"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-background/50 border-border"
            />
            <Textarea
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="bg-background/50 border-border resize-none"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Send Message
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(social.url, "_blank")}
                  className="border-border hover:bg-card hover:border-primary/50 transition-all group"
                >
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span className="ml-2">{social.label}</span>
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
