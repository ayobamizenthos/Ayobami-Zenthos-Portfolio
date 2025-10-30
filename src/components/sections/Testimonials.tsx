import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ayobami transformed our digital presence completely. His strategic approach to web design resulted in a 110% increase in qualified leads within 60 days.",
    author: "Sarah Johnson",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    quote: "Remarkable execution and precision timing. Ayobami captured our brand essence and delivered a product that exceeded every expectation.",
    author: "Michael Chen",
    company: "GrowthLab",
    rating: 5,
  },
  {
    quote: "The brand identity system Ayobami developed has become our competitive advantage. Client feedback on the visual direction has been overwhelmingly positive.",
    author: "Emily Rodriguez",
    company: "Luxe Boutique",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-12 bg-muted/30 min-h-screen flex items-center">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase">
            Client Testimonials
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto">
            Authentic feedback from valued partnerships.
          </p>
        </div>

        {/* Testimonials Grid - Compact */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 space-y-3 max-h-[280px]"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote - Compact */}
              <p className="text-sm leading-relaxed line-clamp-4">{testimonial.quote}</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
