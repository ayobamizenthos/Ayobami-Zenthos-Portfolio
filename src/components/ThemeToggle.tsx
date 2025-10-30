import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-2.5 transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-lg"
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4">
        <Moon className={`w-4 h-4 absolute inset-0 transition-all duration-500 ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`} />
        <Sun className={`w-4 h-4 absolute inset-0 transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
      </div>
    </button>
  );
}
