import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const socials = [
  { name: "X", icon: Twitter, url: "https://x.com/ayobamizenthos?t=z37l1PxtK6hyvLaM4u7jSg&s=09" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/ayobamirufai/" },
  { name: "GitHub", icon: Github, url: "https://github.com/ayobamizenthos" },
  { name: "Email", icon: Mail, url: "mailto:contact@ayobamizenthos.com" },
];

export function SocialSidebar() {
  return (
    <TooltipProvider>
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3" role="complementary" aria-label="Social media links">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <a
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm shadow-card hover:bg-primary hover:text-primary-foreground hover:shadow-glow hover:scale-110 transition-all duration-[180ms] ease-out flex items-center justify-center group"
                  aria-label={`Visit ${social.name}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
