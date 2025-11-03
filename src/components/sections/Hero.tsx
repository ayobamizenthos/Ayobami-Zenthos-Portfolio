import heroPortrait from "@/assets/hero-portrait-cropped.png";
import { ArrowRight } from "lucide-react";

export function Hero() {

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">

        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10">
           <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start md:items-center min-h-[80vh]">
             {/* Left Content - Full size */}
             <div className="space-y-6 sm:space-y-6 md:space-y-8 animate-fade-in md:pl-8 lg:pl-16 pt-4 sm:pt-6 md:pt-0 md:col-span-1 flex flex-col justify-center px-2 sm:px-0 max-w-2xl" data-scroll>
               {/* Availability Badge */}
               <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 shadow-card hover:shadow-card-hover transition-all duration-300 w-fit">
                 <div className="relative flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-[hsl(142,76%,36%)] animate-pulse"></div>
                   <div className="absolute w-2 h-2 rounded-full bg-[hsl(142,76%,36%)] animate-ping opacity-75"></div>
                 </div>
                 <span className="text-sm font-semibold tracking-wide">Available for New Projects</span>
               </div>

               {/* Name with offset styling */}
               <div className="space-y-0 leading-none animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                 <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight">
                   <span className="block text-primary animate-slide-in-left" style={{ marginLeft: '-0.05em', animationDelay: '0.4s', animationFillMode: 'both' }}>AYOBAMI</span>
                   <span className="block text-muted-foreground animate-slide-in-right" style={{ marginLeft: '0.45em', animationDelay: '0.6s', animationFillMode: 'both' }}>ZENTHOS</span>
                 </h1>
               </div>

               {/* Tagline */}
               <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-xl font-medium animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                 I transform ideas into digital products that drive real business growth. From concept to launch, I build solutions that scale.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                 <a
                   href="#work"
                   className="group relative inline-flex items-center justify-center gap-2 border-2 border-primary/30 text-primary hover:bg-primary/5 px-6 py-4 sm:px-8 sm:py-5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:border-primary/60 self-start sm:self-auto"
                 >
                   <span>View My Works</span>
                   <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                 </a>
               </div>
             </div>

             {/* Center and Right - Hero Image dominating */}
             <div className="relative animate-fade-in md:col-span-2 flex justify-center items-center -mx-6 md:mx-0 -mt-32 sm:-mt-28 md:mt-0 z-10" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
               <div className="relative w-full max-w-none h-full flex items-center justify-center">
                 <img
                   src={heroPortrait}
                   alt="Ayobami Zenthos - Software Developer and Product Manager"
                   className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain scale-110 sm:scale-120 md:scale-125 animate-float transform hover:scale-135 transition-transform duration-500"
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
