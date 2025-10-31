import { Linkedin, Instagram, Twitter, Github, Mail } from "lucide-react";

const socials = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayobamirufai/" },
  { name: "GitHub", icon: Github, url: "https://github.com/ayobamizenthos" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/ayobamizenthos/" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/ayobamizenthos?t=z37l1PxtK6hyvLaM4u7jSg&s=09" },
  { name: "Gmail", icon: Mail, url: "mailto:contact@ayobamizenthos.com" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ayobami Zenthos. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Privacy Policy Link */}
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
