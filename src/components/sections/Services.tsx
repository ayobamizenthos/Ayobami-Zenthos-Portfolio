import { Button } from "@/components/ui/button";
import { Sparkles, Check, Code, BarChart3, Wrench, Palette, Target } from "lucide-react";
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
    title: "Full-Stack Development",
    icon: Code,
    description: "End-to-end web applications with modern technologies and scalable architecture.",
    bonuses: ["Frontend & Backend Development", "Database Design & Integration", "API Development & Testing", "Performance Optimization"],
  },
  {
    title: "UI/UX Design",
    icon: Sparkles,
    description: "User-centered interfaces that combine aesthetics with exceptional functionality.",
    bonuses: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems & Guidelines", "Accessibility Compliance"],
  },
  {
    title: "Social Media Management & Branding",
    icon: Palette,
    description: "Comprehensive brand identity and social media strategy that establishes market presence and engagement.",
    bonuses: ["Brand Strategy Development", "Visual Identity Design", "Social Media Management", "Content Strategy & Creation"],
  },
  {
    title: "SEO & Performance",
    icon: BarChart3,
    description: "Data-driven optimization for better visibility and faster user experiences.",
    bonuses: ["Technical SEO Implementation", "Performance Optimization", "Mobile Responsiveness", "Analytics & Reporting"],
  },
  {
    title: "Product Management",
    icon: Target,
    description: "Strategic planning and execution to drive successful product development.",
    bonuses: ["Product Strategy Planning", "Roadmap Development", "Feature Prioritization", "Stakeholder Management"],
  },
  {
    title: "Technical Support",
    icon: Wrench,
    description: "Ongoing maintenance and optimization to ensure peak performance.",
    bonuses: ["Regular Updates & Patches", "Bug Fixing & Monitoring", "Security Enhancements", "Performance Tuning"],
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
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Comprehensive solutions that drive business growth and enhance digital presence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden min-h-[500px] flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
  
                    <div className="space-y-3 flex-1">
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                        What's Included
                      </h4>
                      <div className="space-y-2">
                        {service.bonuses.map((bonus, bonusIndex) => (
                          <div
                            key={bonus}
                            className="flex items-center gap-3"
                            style={{ animationDelay: `${(index * 100) + (bonusIndex * 50)}ms` }}
                          >
                            <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-secondary" />
                            </div>
                            <span className="text-sm text-muted-foreground">{bonus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
  
                  <a
                    href="mailto:contact@ayobamizenthos.com?subject=Project Inquiry&body=Hi Ayobami,%0A%0AI'd like to discuss a project with you.%0A%0AProject Type: [Please specify]%0ABudget: [Please specify]%0ATimeline: [Please specify]%0A%0ADetails:%0A[Please provide project details]"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 mt-6 inline-flex items-center justify-center gap-2"
                  >
                    Discuss Project
                    <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
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
              href="mailto:contact@ayobamizenthos.com"
              className="group flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border-2 border-primary/20 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Mail className="w-16 h-16 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-base font-semibold text-foreground">Email Me</span>
              <span className="text-xs text-muted-foreground">contact@ayobamizenthos.com</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
