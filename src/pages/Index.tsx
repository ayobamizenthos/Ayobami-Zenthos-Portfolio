import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionDivider } from "@/components/SectionDivider";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Ayobami Zenthos</title>
        <meta name="description" content="Full-Stack Developer & Product Manager crafting digital experiences through strategic web design, distinctive brand identity, and intuitive mobile applications. Specializing in React, Node.js, and African tech innovation." />
        <meta name="keywords" content="full-stack developer, product manager, React, Node.js, web development, mobile apps, UI/UX design, Lagos, Nigeria, African tech, software engineer, portfolio" />
        <link rel="canonical" href="https://ayobamizenthos.github.io/Ayobami-Zenthos-Portfolio/" />

        {/* Open Graph */}
        <meta property="og:title" content="Ayobami Zenthos - Full-Stack Developer & Product Manager" />
        <meta property="og:description" content="Full-Stack Developer & Product Manager crafting digital experiences through strategic web design, distinctive brand identity, and intuitive mobile applications. Specializing in React, Node.js, and African tech innovation." />
        <meta property="og:url" content="https://ayobamizenthos.github.io/Ayobami-Zenthos-Portfolio/" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ayobami Zenthos",
            "jobTitle": "Full-Stack Developer & Product Manager",
            "description": "Full-Stack Developer & Product Manager specializing in React, Node.js, and digital product strategy",
            "url": "https://ayobamizenthos.github.io/Ayobami-Zenthos-Portfolio/",
            "sameAs": [
              "https://linkedin.com/in/ayobamizenthos",
              "https://github.com/ayobamizenthos",
              "https://twitter.com/ayobamizenthos"
            ],
            "knowsAbout": [
              "React",
              "Node.js",
              "TypeScript",
              "Product Management",
              "Web Development",
              "Mobile Applications",
              "UI/UX Design",
              "African Tech Ecosystem",
              "Full-Stack Development",
              "Digital Strategy"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "Nigeria"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen w-full">
        <ScrollProgress />
        <Header />
        <Navigation />
        <SocialSidebar />
        
        <main className="pt-16">
          <Hero />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <Work />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <WhyChoose />
          <SectionDivider />
          <Blog />
          <SectionDivider />
          <Testimonials />
          <SectionDivider />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
