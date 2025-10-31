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
  {
    label: "Blog",
    submenu: [
      { label: "Portfolio Blog", href: "/blog", external: false },
      { label: "Hashnode Blog", href: "https://zenthosinsights.hashnode.dev", external: true },
    ]
  },
  {
    label: "Technical Writing Portfolio",
    submenu: [
      { label: "Portfolio Blog", href: "/blog", external: false },
      { label: "Hashnode", href: "https://zenthosinsights.hashnode.dev", external: true },
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
              item.submenu ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                      onMouseEnter={() => {}} // Trigger hover state
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56" side="bottom" sideOffset={8}>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.label}
                        onClick={() => {
                          if (subItem.external) {
                            window.open(subItem.href, '_blank');
                          } else {
                            window.location.href = subItem.href;
                          }
                        }}
                        className="cursor-pointer hover:bg-primary/10 hover:text-primary font-medium"
                      >
                        <span className="flex-1">{subItem.label}</span>
                        {subItem.external && <span className="ml-auto text-xs text-muted-foreground">↗</span>}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
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
              )
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
                  item.submenu ? (
                    <div key={item.label} className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground px-4 py-2">
                        {item.label}
                      </div>
                      {item.submenu.map((subItem) => (
                        <Button
                          key={subItem.label}
                          variant="ghost"
                          className="justify-start text-sm hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 ml-4 w-[calc(100%-2rem)]"
                          onClick={() => {
                            if (subItem.external) {
                              window.open(subItem.href, '_blank');
                            } else {
                              window.location.href = subItem.href;
                            }
                            setMobileMenuOpen(false);
                          }}
                        >
                          {subItem.label}
                          {subItem.external && <span className="ml-auto text-xs">↗</span>}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="justify-start text-base font-medium hover:text-primary hover:bg-primary/5 transition-all duration-300 py-6"
                      onClick={() => handleMenuClick(item)}
                    >
                      {item.label}
                    </Button>
                  )
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
