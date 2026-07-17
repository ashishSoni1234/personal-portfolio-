"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold sm:inline-block">
            {personalInfo.name.split(" ")[0]}
          </span>
        </Link>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
          <Link href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block">Skills</Link>
          <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
          <Link href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:block">Experience</Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
