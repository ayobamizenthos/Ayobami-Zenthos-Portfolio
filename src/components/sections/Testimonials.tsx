import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center px-6 py-20 bg-muted/30">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Client Testimonials
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        {/* Animated Testimonial Carousel */}
        <div className="relative h-96 overflow-hidden">
          {/* Current Testimonial */}
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isAnimating ? 'opacity-0 transform translate-x-[-100px]' : 'opacity-100 transform translate-x-0'
            }`}
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-center">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full -translate-y-16 translate-x-16 animate-float"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary rounded-full translate-y-12 -translate-x-12 animate-float" style={{ animationDelay: '2s' }}></div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 animate-pulse">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-bounce"
                    style={{ animationDelay: `${i * 200}ms`, animationDuration: '2s' }}
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-medium flex-grow flex items-center">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center font-bold text-primary text-lg shadow-lg animate-pulse">
                  {currentTestimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">{currentTestimonial.name}</div>
                  <div className="text-muted-foreground font-medium">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Testimonial (Preview) */}
          <div className="absolute inset-0 opacity-20 transform translate-x-full transition-all duration-500">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card h-full flex flex-col justify-center">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {nextTestimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{nextTestimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {nextTestimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-primary rounded-full shadow-lg'
                    : 'w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30"></div>
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
            className="w-10 h-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-card flex items-center justify-center"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-6">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-100 ease-linear"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                animation: 'progress 6s linear infinite'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
