import { useState, useEffect } from "react";
import { Home, Briefcase, FileText, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "work", label: "Works", icon: Briefcase },
  { id: "blog", label: "Blog", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: "-20% 0px -50% 0px"
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:block" role="navigation" aria-label="Main navigation">
        <div className="bg-card/90 backdrop-blur-sm shadow-card rounded-full p-2 flex flex-col gap-1">
          <TooltipProvider>
            {navItems.map(({ id, label, icon: Icon }) => (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`relative p-3 rounded-full transition-all duration-[180ms] ease-out ${
                      activeSection === id
                        ? "bg-primary text-primary-foreground shadow-glow scale-110"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                    }`}
                    aria-label={label}
                    aria-current={activeSection === id ? "page" : undefined}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden" role="navigation" aria-label="Mobile navigation">
        <div className="bg-card/90 backdrop-blur-sm shadow-card rounded-full px-3 py-2 flex gap-1 items-center">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`p-3 rounded-full transition-all duration-[180ms] ease-out ${
                activeSection === id
                  ? "bg-primary text-primary-foreground shadow-glow scale-110"
                  : "hover:bg-muted text-muted-foreground"
              }`}
              aria-label={label}
              aria-current={activeSection === id ? "page" : undefined}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
