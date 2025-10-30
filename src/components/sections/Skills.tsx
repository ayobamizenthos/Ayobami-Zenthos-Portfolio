const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML5", icon: "🏗️" },
      { name: "CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "MySQL", icon: "🗄️" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔗" },
    ]
  },
  {
    category: "Tools & Platforms",
    technologies: [
      { name: "Git", icon: "📚" },
      { name: "VS Code", icon: "💻" },
      { name: "Figma", icon: "🎯" },
      { name: "Vite", icon: "⚡" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
    ]
  }
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
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${(categoryIndex * 200) + (techIndex * 50)}ms` }}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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