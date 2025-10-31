import havenStayImage from "@/assets/havenstay-screenshot.png";
import gym645Image from "@/assets/gym645-screenshot.png";
import apertureImage from "@/assets/aperture-screenshot.png";
import akokaImage from "@/assets/akoka-screenshot.png";
import { Skeleton } from "@/components/ui/skeleton";

const projects = [
  {
    title: "Haven Stay",
    category: "Shortlet Platform",
    description: "Modern accommodation booking platform with seamless user experience and advanced filtering. Increased booking conversions by 40% through intuitive design.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: havenStayImage,
    url: "https://havenstay-demo.vercel.app",
    featured: true,
    metrics: "40% conversion increase"
  },
  {
    title: "6:45 Fitness",
    category: "Gym & Fitness",
    description: "Comprehensive fitness platform with membership management and workout tracking. Streamlined operations for 200+ active members.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind"],
    image: gym645Image,
    url: "https://645fitness-demo.vercel.app",
    featured: true,
    metrics: "200+ active members"
  },
  {
    title: "Aperture Architects",
    category: "Architecture Firm",
    description: "Elegant portfolio website showcasing architectural designs with immersive galleries. Featured in 3 design publications.",
    technologies: ["React", "Framer Motion", "CSS3", "GSAP"],
    image: apertureImage,
    url: "https://aperture-architects-demo.vercel.app",
    featured: false,
    metrics: "3 design publications"
  },
  {
    title: "Akoka Parish",
    category: "Church Website",
    description: "Spiritual community platform with event management and online giving. Increased online donations by 60% and community engagement by 35%.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    image: akokaImage,
    url: "https://akoka-parish-demo.vercel.app",
    featured: false,
    metrics: "60% donation increase"
  },
];

export function Work() {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center px-6 py-20" aria-labelledby="work-heading">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 id="work-heading" className="text-sm font-bold tracking-widest text-primary uppercase">
            Selected Works
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Featured projects showcasing web platforms, brand systems, and digital product design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8" role="grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              role="gridcell"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full" aria-label="Featured project">
                  Featured
                </div>
              )}

              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
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

                {/* View Project Button */}
                <a
                  href={`mailto:contact@ayobamizenthos.com?subject=Project Inquiry: ${project.title}&body=Hi Ayobami,%0A%0AI'd like to discuss the ${project.title} project.%0A%0AProject Type: ${project.category}%0ATechnologies: ${project.technologies.join(', ')}%0A%0ADetails:%0A[Please provide your project requirements]`}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full font-semibold py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 inline-flex items-center justify-center gap-2"
                  aria-label={`Discuss ${project.title} project`}
                >
                  <span>Discuss Project</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
