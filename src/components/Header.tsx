import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface MenuItem {
  label: string;
  action?: () => void;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  label: string;
  href: string;
  external: boolean;
}

const menuItems: MenuItem[] = [
  { label: "Services", action: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Works", action: () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }) },
  { label: "Blog", action: () => window.location.href = "/blog" },
  {
    label: "Technical Writing Portfolio",
    submenu: [
      { label: "Portfolio Blog", href: "/blog", external: false },
      { label: "Hashnode", href: "https://zenthosinsights.hashnode.dev", external: true },
      { label: "Medium", href: "https://medium.com/@ayobamizenthos", external: true },
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (item: MenuItem) => {
    if (item.action) {
      item.action();
      setMobileMenuOpen(false);
    } else if (item.submenu) {
      // Handle submenu items - this would need additional logic for dropdown
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Empty for cleaner look */}
        <div className="w-8"></div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1 justify-end flex-1">
          <TooltipProvider>
            {menuItems.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm font-medium hover:text-primary transition-colors"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.label}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex-1 flex justify-end">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background/95 backdrop-blur-xl border-border">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="justify-start text-base font-medium hover:text-primary hover:bg-primary/5 transition-all duration-300 py-6"
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
