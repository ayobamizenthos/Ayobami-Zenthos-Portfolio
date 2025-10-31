import { User, Target, Lightbulb, Award, Heart, Code } from "lucide-react";

const aboutPoints = [
  {
    icon: User,
    title: "Passionate Creator",
    description: "With over 3 years of experience in digital design and development, I combine technical expertise with creative vision to deliver exceptional results."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every project I undertake is focused on achieving measurable business outcomes, from increased conversions to enhanced user engagement."
  },
  {
    icon: Lightbulb,
    title: "Innovative Thinker",
    description: "I stay ahead of industry trends and leverage cutting-edge technologies to create solutions that are both modern and future-proof."
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "Attention to detail and commitment to excellence are at the core of everything I do, ensuring pixel-perfect execution and optimal performance."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "I believe in building long-term partnerships, understanding your unique needs, and delivering solutions that truly serve your business goals."
  },
  {
    icon: Code,
    title: "Full-Stack Expertise",
    description: "From concept to deployment, I handle the complete development lifecycle, ensuring seamless integration and optimal user experiences."
  }
];

export function WhyChoose() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            About Me
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            Passionate about creating digital experiences that matter.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a full-stack developer and product designer with a passion for
            crafting innovative digital solutions that drive business growth and enhance user experiences.
          </p>
        </div>

        {/* About Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring your digital vision to life?
          </p>
          <a
            href="mailto:contact@ayobamizenthos.com"
            className="inline-block bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
