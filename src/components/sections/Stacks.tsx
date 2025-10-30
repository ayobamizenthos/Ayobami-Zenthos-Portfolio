const stacks = [
  {
    name: "HTML5",
    description: "Markup",
    icon: "html5",
    color: "#E34F26"
  },
  {
    name: "CSS3",
    description: "Styling",
    icon: "css3",
    color: "#1572B6"
  },
  {
    name: "JavaScript",
    description: "Programming",
    icon: "js",
    color: "#F7DF1E"
  },
  {
    name: "React",
    description: "Library",
    icon: "react",
    color: "#61DAFB"
  },
  {
    name: "Tailwind CSS",
    description: "Framework",
    icon: "tailwind",
    color: "#06B6D4"
  },
  {
    name: "Next.js",
    description: "Framework",
    icon: "nextjs",
    color: "#000000"
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    icon: "ts",
    color: "#3178C6"
  },
  {
    name: "Git",
    description: "Version Control",
    icon: "git",
    color: "#F05032"
  },
  {
    name: "GitHub",
    description: "Collaboration",
    icon: "github",
    color: "#181717"
  },
  {
    name: "Figma",
    description: "Design",
    icon: "figma",
    color: "#F24E1E"
  },
];

export function Stacks() {
  return (
    <section id="stacks" className="px-6 py-20 bg-muted/30">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Developer Stack</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Technologies and tools I use daily
          </p>
        </div>

        {/* Stacks Grid - smaller cards with animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {stacks.map((stack, index) => (
            <div
              key={stack.name}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 text-center space-y-3 animate-scale-in group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'backwards'
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl font-bold transition-transform duration-300 group-hover:scale-110" style={{ color: stack.color }}>
                  {stack.icon === 'html5' && '< >'}
                  {stack.icon === 'css3' && '{ }'}
                  {stack.icon === 'js' && 'JS'}
                  {stack.icon === 'react' && '⚛'}
                  {stack.icon === 'tailwind' && '🎨'}
                  {stack.icon === 'nextjs' && '▲'}
                  {stack.icon === 'ts' && 'TS'}
                  {stack.icon === 'git' && '⎇'}
                  {stack.icon === 'github' && '★'}
                  {stack.icon === 'figma' && '◘'}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-sm">{stack.name}</h3>
                <p className="text-xs text-muted-foreground">{stack.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
