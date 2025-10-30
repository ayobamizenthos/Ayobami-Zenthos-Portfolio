import { Button } from "@/components/ui/button";
import { Palette, Check, RefreshCw, Search, Settings, PenTool } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";

const services = [
  {
    title: "Website Development",
    icon: RefreshCw,
    description: "High-performance websites built with modern technology, optimized for speed and conversions.",
    bonuses: ["Responsive design", "Fast load times", "SEO-ready structure", "Content management"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    description: "Intuitive, user-centered interfaces that look great and feel effortless.",
    bonuses: ["User research & testing", "Wireframing & prototyping", "Responsive design systems", "Accessibility standards"],
  },
  {
    title: "Branding & Identity",
    icon: Palette,
    description: "Comprehensive brand systems that establish market presence and foster authentic connections.",
    bonuses: ["Visual identity creation", "Brand strategy documentation", "Color system development", "Typographic standards"],
  },
  {
    title: "SEO & Optimization",
    icon: Search,
    description: "Get higher ranking and faster performance across all devices.",
    bonuses: ["On-page SEO implementation", "Speed optimization", "Mobile responsiveness", "Analytics integration"],
  },
  {
    title: "Maintenance & Support",
    icon: Settings,
    description: "Ongoing updates, bug fixes, and performance tuning to keep your site running smoothly.",
    bonuses: ["Regular updates", "Bug fixing & testing", "Performance monitoring", "Technical support"],
  },
];


export function Services() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Core Services
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Specialized design solutions that accelerate growth and elevate your market position.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold">{service.title}</h3>

                <p className="text-muted-foreground">{service.description}</p>

                <div className="space-y-2">
                  {service.bonuses.map((bonus) => (
                    <div key={bonus} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-secondary" />
                      <span className="text-sm">{bonus}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-foreground text-background rounded-full hover:shadow-glow"
                  onClick={() => setShowContactDialog(true)}
                >
                  Discuss Project
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-sm border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl">
          <DialogHeader className="space-y-2 pb-4">
            <DialogTitle className="text-2xl font-bold text-center">
              Get in Touch
            </DialogTitle>
            <p className="text-sm text-muted-foreground text-center">Send me an email</p>
          </DialogHeader>
          <div className="flex justify-center py-6">
            <a
              href="mailto:ayobamizenthos@gmail.com"
              className="group flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-2 border-primary/20 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Mail className="w-16 h-16 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-base font-semibold text-foreground">Email Me</span>
              <span className="text-xs text-muted-foreground">ayobamizenthos@gmail.com</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
