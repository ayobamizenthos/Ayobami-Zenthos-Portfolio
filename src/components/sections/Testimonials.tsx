import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adebayo Ogunleye",
    role: "CEO",
    company: "Nigerian Tech Solutions",
    content: "Ayobami delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise helped us achieve a 40% increase in conversion rates. Highly recommended!",
    rating: 5,
    avatar: "AO"
  },
  {
    name: "Chioma Nwosu",
    role: "Product Manager",
    company: "Lagos Innovations",
    content: "Working with Ayobami was a game-changer for our product launch. His strategic thinking and development skills brought our vision to life perfectly. Outstanding professional.",
    rating: 5,
    avatar: "CN"
  },
  {
    name: "Kemi Adeyemi",
    role: "Marketing Director",
    company: "Supplements Haven",
    content: "Ayobami's branding and web design work transformed our online presence. The results exceeded our expectations, and our engagement metrics improved significantly.",
    rating: 5,
    avatar: "KA"
  },
  {
    name: "Tunde Bakare",
    role: "Operations Manager",
    company: "6:45 Fitness Gym",
    content: "The gym management system Ayobami built has streamlined our operations completely. Member registration, class bookings, and payment processing are now seamless. Excellent work!",
    rating: 5,
    avatar: "TB"
  },
  {
    name: "Pastor James Adeolu",
    role: "Senior Pastor",
    company: "Akoka Parish CCC",
    content: "Our church website now beautifully represents our community and helps connect with our congregation. Ayobami understood our vision perfectly and delivered beyond expectations.",
    rating: 5,
    avatar: "JA"
  },
  {
    name: "Ngozi Okoro",
    role: "Real Estate Agent",
    company: "Lagos Properties Ltd",
    content: "Ayobami created a stunning property listing website that showcases our real estate portfolio beautifully. The responsive design and fast loading times have impressed our clients immensely.",
    rating: 5,
    avatar: "NO"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Client Testimonials
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-tight">
            What clients say about working with me
          </p>
        </div>

        {/* Horizontal Marquee Testimonials */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-marquee">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4 bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 min-w-[400px] max-w-[500px]"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-bold text-primary shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-4 bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 min-w-[400px] max-w-[500px]"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-bold text-primary shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
