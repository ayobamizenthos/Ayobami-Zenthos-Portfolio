import { TrendingUp, Crown, Zap, Smartphone, BarChart3, Rocket } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const features = [
  { icon: TrendingUp, title: "Conversion Optimization", description: "Strategic design that drives results" },
  { icon: Crown, title: "Premium Positioning", description: "Distinctive brand presence" },
  { icon: Zap, title: "Accelerated Delivery", description: "Efficient process, exceptional output" },
  { icon: Smartphone, title: "Mobile Excellence", description: "Responsive, user-first approach" },
  { icon: BarChart3, title: "Performance Metrics", description: "Data-informed design decisions" },
  { icon: Rocket, title: "Rapid Deployment", description: "Streamlined project execution" },
];

export function WhyChoose() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-muted/30">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            The Advantage
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            Strategic design capabilities that transform vision into measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img
                src={heroPortrait}
                alt="Ayobami Zenthos - Strategic Design Expert"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))' }}
              />
            </div>
          </div>

          {/* Features - Compact list on mobile, 2-col grid on desktop */}
          <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-card rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex lg:flex-col gap-3 lg:gap-3"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="flex-1 lg:flex-none">
                    <h3 className="font-bold text-sm lg:text-base leading-tight mb-1">{feature.title}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
