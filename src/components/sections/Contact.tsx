import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const socials = [
  { name: "X (Twitter)", icon: Twitter, url: "https://x.com/ayobamizenthos?t=z37l1PxtK6hyvLaM4u7jSg&s=09" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayobami-rufai-b31ba61a2/" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-muted/30 animate-fade-in"
      style={{ animationDelay: '0.2s' }}>
      <div className="max-w-2xl w-full mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Contact</h2>
          <p className="text-2xl md:text-4xl font-bold text-foreground">
            Let's build something great together.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card space-y-6">
          {/* Direct Contact Button */}
          <div className="flex justify-center">
            <a
              href="mailto:ayobamizenthos@gmail.com"
              className="w-full max-w-md bg-foreground text-background hover:shadow-glow transition-all duration-300 rounded-full h-12 font-semibold flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-4">Or connect with me on</p>
            <div className="flex justify-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
