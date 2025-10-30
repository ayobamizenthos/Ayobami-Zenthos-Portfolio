import havenStayImage from "@/assets/havenstay-screenshot.png";
import gym645Image from "@/assets/gym645-screenshot.png";
import apertureImage from "@/assets/aperture-screenshot.png";
import akokaImage from "@/assets/akoka-screenshot.png";

const projects = [
  {
    title: "Haven Stay",
    category: "Shortlet Platform",
    description: "Modern accommodation booking platform with seamless user experience and advanced filtering.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: havenStayImage,
    url: "#",
    featured: true,
  },
  {
    title: "6:45 Fitness",
    category: "Gym & Fitness",
    description: "Comprehensive fitness platform with membership management and workout tracking features.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind"],
    image: gym645Image,
    url: "#",
    featured: true,
  },
  {
    title: "Aperture Architects",
    category: "Architecture Firm",
    description: "Elegant portfolio website showcasing architectural designs with immersive galleries.",
    technologies: ["React", "Framer Motion", "CSS3", "GSAP"],
    image: apertureImage,
    url: "#",
    featured: false,
  },
  {
    title: "Akoka Parish",
    category: "Church Website",
    description: "Spiritual community platform with event management and online giving features.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    image: akokaImage,
    url: "#",
    featured: false,
  },
];

export function Work() {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Selected Works
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Featured projects showcasing web platforms, brand systems, and digital product design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => window.open(project.url, '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full font-semibold py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
