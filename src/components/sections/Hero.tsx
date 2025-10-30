import heroPortrait from "@/assets/hero-portrait.png";

export function Hero() {

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Decorative background curves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-2 md:gap-16 items-start md:items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-fade-in md:pl-16 lg:pl-20 pt-8 md:pt-0">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-5 py-2.5 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[hsl(142,76%,36%)] animate-pulse"></div>
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[hsl(142,76%,36%)] animate-ping opacity-75"></div>
                </div>
                <span className="text-sm font-semibold tracking-wide">Available for Projects</span>
              </div>

              {/* Name with offset styling */}
              <div className="space-y-0 leading-none">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight">
                  <span className="block text-primary" style={{ marginLeft: '-0.05em' }}>AYOBAMI</span>
                  <span className="block text-muted-foreground" style={{ marginLeft: '0.45em' }}>ZENTHOS</span>
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Crafting digital experiences through strategic web design, distinctive brand identity, and intuitive mobile applications.
              </p>

              {/* CTA Button - Modern with gradient */}
              <a
                href="mailto:ayobamizenthos@gmail.com"
                className="group relative inline-block bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Right Image - Large borderless portrait pushed up more */}
            <div className="relative animate-fade-in flex justify-center md:justify-end -mx-6 md:mx-0 -mt-16 md:mt-0">
              <div className="relative w-full max-w-none md:max-w-xl">
                <img
                  src={heroPortrait}
                  alt="Ayobami Zenthos - Frontend Developer and Product Designer"
                  className="w-full h-auto object-contain scale-110 md:scale-100"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
