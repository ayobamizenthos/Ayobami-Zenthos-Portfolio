const technologies = [
  "React", "TypeScript", "JavaScript", "Node.js", "Express.js", "PostgreSQL",
  "MongoDB", "Tailwind CSS", "Git", "Figma", "Docker", "AWS", "REST APIs",
  "HTML5", "CSS3", "MySQL", "VS Code", "Vite"
];


export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Technical Skills
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Animated Technologies Marquee */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-marquee">
            {/* First set of technologies */}
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-4 rounded-2xl bg-card shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-4 rounded-2xl bg-card shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design", "SEO Optimization", "Performance Optimization",
              "Version Control", "API Integration", "State Management",
              "Component Libraries", "Build Tools", "Deployment", "Testing"
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}