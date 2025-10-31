import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "blog", label: "Blog" },
  { id: "testimonials", label: "Testimonials" },
  { id: "newsletter", label: "Newsletter" },
  { id: "contact", label: "Contact" },
];

export function SectionProgress() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

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

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-card/90 backdrop-blur-sm shadow-card rounded-full p-2 flex flex-col gap-1">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`relative group transition-all duration-300 ${
              activeSection === id
                ? "w-12 h-3 bg-primary rounded-full"
                : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full hover:w-6"
            }`}
            aria-label={`Scroll to ${label} section`}
            aria-current={activeSection === id ? "true" : "false"}
          >
            {activeSection === id && (
              <div className="absolute inset-0 bg-primary rounded-full animate-pulse opacity-50"></div>
            )}
            <div className="sr-only">{label}</div>
          </button>
        ))}
      </div>

      {/* Overall progress bar */}
      <div className="mt-4 w-1 h-32 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-t from-primary to-primary/60 rounded-full transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
}