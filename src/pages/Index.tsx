import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionDivider } from "@/components/SectionDivider";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Stacks } from "@/components/sections/Stacks";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <ThemeProvider>
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
          <Stacks />
          <SectionDivider />
          <Blog />
          <SectionDivider />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
