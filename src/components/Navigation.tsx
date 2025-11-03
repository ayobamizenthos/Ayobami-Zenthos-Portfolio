import { useState, useEffect } from "react";
import { Home, Briefcase, FolderOpen, FileText, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { trackNavigationClick } from "@/lib/analytics";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "work", label: "Works", icon: FolderOpen },
  { id: "blog", label: "Blog", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeId = activeSection;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });

        if (activeId !== activeSection) {
          setActiveSection(activeId);
          console.log('Active section changed to:', activeId, 'ratio:', maxRatio);
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
        rootMargin: "-5% 0px -45% 0px"
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        console.log('Observing element:', id);
      }
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    if (id === 'blog') {
      trackNavigationClick('blog_external');
      window.open('https://zenthosinsights.hashnode.dev', '_blank');
    } else {
      trackNavigationClick(id);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Vertical */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:block" role="navigation" aria-label="Main navigation">
        <div className="bg-card/90 backdrop-blur-sm shadow-card rounded-full p-2 flex flex-col gap-1">
          <TooltipProvider>
            {navItems.map(({ id, label, icon: Icon }) => (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`relative p-3 rounded-full transition-all duration-[180ms] ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                      activeSection === id
                        ? "bg-primary text-primary-foreground shadow-glow scale-110"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                    }`}
                    aria-label={`Navigate to ${label} section`}
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

      {/* Mobile Navigation - Horizontal Bottom */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden" role="navigation" aria-label="Main navigation">
        <div className="bg-card/90 backdrop-blur-sm shadow-card rounded-full p-2 flex flex-row gap-1">
          <TooltipProvider>
            {navItems.map(({ id, label, icon: Icon }) => (
              <Tooltip key={id}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`relative p-4 rounded-full transition-all duration-[180ms] ease-out min-h-[48px] min-w-[48px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                      activeSection === id
                        ? "bg-primary text-primary-foreground shadow-glow scale-110"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground hover:scale-105"
                    }`}
                    aria-label={`Navigate to ${label} section`}
                    aria-current={activeSection === id ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </nav>
    </>
  );
}
