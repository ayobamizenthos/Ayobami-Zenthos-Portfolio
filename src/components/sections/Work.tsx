import havenStayImage from "@/assets/havenstay-screenshot.png";
import gym645Image from "@/assets/gym645-screenshot.png";
import apertureImage from "@/assets/aperture-screenshot.png";
import akokaImage from "@/assets/akoka-screenshot.png";
import { Skeleton } from "@/components/ui/skeleton";

const projects = [
  {
    title: "Haven Stay",
    category: "Shortlet Platform",
    description: "A modern accommodation booking platform that connects property owners with travelers seeking short-term rentals. Features advanced search filtering, secure payment processing, and real-time availability updates.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: havenStayImage,
    url: "https://havenstay-demo.vercel.app",
    featured: true,
    metrics: "Booking Platform"
  },
  {
    title: "6:45 Fitness",
    category: "Gym & Fitness",
    description: "A comprehensive fitness management system for gyms and personal trainers. Includes membership tracking, class scheduling, workout planning, and progress monitoring for fitness enthusiasts.",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind"],
    image: gym645Image,
    url: "https://645fitness-demo.vercel.app",
    featured: true,
    metrics: "Fitness Management"
  },
  {
    title: "Aperture Architects",
    category: "Architecture Firm",
    description: "A stunning portfolio website for an architecture firm showcasing residential and commercial projects. Features interactive 3D visualizations, project galleries, and client testimonials.",
    technologies: ["React", "Framer Motion", "CSS3", "GSAP"],
    image: apertureImage,
    url: "https://aperture-architects-demo.vercel.app",
    featured: false,
    metrics: "Architecture Portfolio"
  },
  {
    title: "Akoka Parish",
    category: "Church Website",
    description: "A comprehensive church management platform with event scheduling, online donations, live streaming services, and community engagement features for spiritual organizations.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    image: akokaImage,
    url: "https://akoka-parish-demo.vercel.app",
    featured: false,
    metrics: "Church Management"
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
            Showcasing innovative digital solutions and impactful web platforms that drive results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8" role="grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border/50"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards',
                opacity: 0
              }}
              role="gridcell"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Metrics Badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1 rounded-full border border-white/20 shadow-lg">
                  {project.metrics}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>


                {/* View Project Button */}
                <div className="flex justify-end pt-2">
                  <button
                    className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 inline-flex items-center justify-center border border-primary/20"
                    aria-label={`View ${project.title} project`}
                  >
                    <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
