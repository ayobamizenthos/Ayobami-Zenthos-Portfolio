import heroPortrait from "@/assets/hero-portrait-cropped.png";
import { ArrowRight } from "lucide-react";

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
           <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start md:items-center min-h-[80vh]">
             {/* Left Content - Full size */}
             <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in md:pl-8 lg:pl-16 pt-4 sm:pt-6 md:pt-0 md:col-span-1 flex flex-col justify-center px-2 sm:px-0" data-scroll>
               {/* Availability Badge */}
               <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-card hover:shadow-card-hover transition-all duration-300 w-fit">
                 <div className="relative flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-[hsl(142,76%,36%)] animate-pulse"></div>
                   <div className="absolute w-2 h-2 rounded-full bg-[hsl(142,76%,36%)] animate-ping opacity-75"></div>
                 </div>
                 <span className="text-sm font-semibold tracking-wide">Available for Projects</span>
               </div>

               {/* Name with offset styling */}
               <div className="space-y-0 leading-none animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                 <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
                   <span className="block text-primary animate-slide-in-left" style={{ marginLeft: '-0.05em', animationDelay: '0.4s', animationFillMode: 'both' }}>AYOBAMI</span>
                   <span className="block text-muted-foreground animate-slide-in-right" style={{ marginLeft: '0.45em', animationDelay: '0.6s', animationFillMode: 'both' }}>ZENTHOS</span>
                 </h1>
               </div>

               {/* Tagline */}
               <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-xl font-medium animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                 Software Developer & Product Manager focused on building scalable, growth-driven digital solutions.
               </p>

               <a
                 href="#work"
                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden animate-fade-in-up w-fit"
                 style={{ animationDelay: '1s', animationFillMode: 'both' }}
               >
                 <span className="relative z-10">View My Work</span>
                 <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                 <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
               </a>
             </div>

             {/* Center and Right - Hero Image dominating */}
             <div className="relative animate-fade-in md:col-span-2 flex justify-center items-center -mx-6 md:mx-0 -mt-16 md:mt-0 z-10" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
               <div className="relative w-full max-w-none h-full flex items-center justify-center">
                 <img
                   src={heroPortrait}
                   alt="Ayobami Zenthos - Software Developer and Product Manager"
                   className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain scale-125 sm:scale-140 md:scale-125 animate-float transform hover:scale-135 transition-transform duration-500"
                   style={{ filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2)) brightness(1.05)', animationDelay: '1.2s', animationFillMode: 'both' }}
                   loading="eager"
                 />
               </div>
             </div>
           </div>
         </div>
      </section>
    </>
  );
}
