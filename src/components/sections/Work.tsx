import havenStayImage from "@/assets/havenstay-screenshot.png";
import gym645Image from "@/assets/gym645-screenshot.png";
import apertureImage from "@/assets/aperture-screenshot.png";
import akokaImage from "@/assets/akoka-screenshot.png";

const projects = [
  {
    title: "Haven Stay",
    category: "Shortlet Platform",
    image: havenStayImage,
    url: "https://havenstay.lovable.app",
  },
  {
    title: "6:45 Fitness",
    category: "Gym & Fitness",
    image: gym645Image,
    url: "https://gym645.lovable.app",
  },
  {
    title: "Aperture Architects",
    category: "Architecture Firm",
    image: apertureImage,
    url: "https://aperturearchitects.lovable.app",
  },
  {
    title: "Akoka Parish",
    category: "Church Website",
    image: akokaImage,
    url: "https://cccakokaparish.lovable.app",
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
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
