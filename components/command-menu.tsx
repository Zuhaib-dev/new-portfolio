"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Home,
  Briefcase,
  FileText,
  File,
  Settings,
  Book,
  Film,
  Mail,
  Moon,
  Sun,
  Github,
  Twitter,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle Command Palette on CMD+K or CTRL+K
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
        return;
      }

      // Handle custom single-key navigation when the command menu is CLOSED
      if (
        !open &&
        e.target instanceof HTMLElement &&
        e.target.tagName !== "INPUT" &&
        e.target.tagName !== "TEXTAREA"
      ) {
        const key = e.key.toLowerCase();

        switch (key) {
          case "h":
            router.push("/");
            break;
          case "w":
            router.push("/#experience");
            break;
          case "b":
            router.push("/blogs");
            break;
          case "r":
            window.open("/Zuhaib.pdf", "_blank");
            break;
          case "g":
            router.push("/gears");
            break;
          case "k":
            router.push("/books");
            break;
          case "m":
            router.push("/movies");
            break;
          case "c":
            router.push("/#contact");
            break;
          case "t":
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
            break;
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, router, resolvedTheme, setTheme]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      {/* 
        This is a hidden toggle button that we can click programmatically 
        from the Header component.
      */}
      <button
        id="command-menu-trigger"
        onClick={() => setOpen(true)}
        className="hidden"
        aria-hidden="true"
      />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/"));
              }}
            >
              <Home className="mr-2 h-4 w-4" />
              <span>Go to Home</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">H</span>
              </kbd>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/#experience"));
              }}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Go to Work</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">W</span>
              </kbd>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/blogs"));
              }}
            >
              <FileText className="mr-2 h-4 w-4" />
              <span>Go to Blog</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">B</span>
              </kbd>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => window.open("/Zuhaib.pdf", "_blank"));
              }}
            >
              <File className="mr-2 h-4 w-4" />
              <span>Check Resume</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">R</span>
              </kbd>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/gears"));
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Go to Gears</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">G</span>
              </kbd>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/books"));
              }}
            >
              <Book className="mr-2 h-4 w-4" />
              <span>Go to Books</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">K</span>
              </kbd>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/movies"));
              }}
            >
              <Film className="mr-2 h-4 w-4" />
              <span>Go to Movies</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">M</span>
              </kbd>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() => router.push("/#contact"));
              }}
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Go to Contact</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">C</span>
              </kbd>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                runCommand(() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark"),
                );
              }}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="mr-2 h-4 w-4" />
              ) : (
                <Moon className="mr-2 h-4 w-4" />
              )}
              <span>Toggle Theme</span>
              <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">T</span>
              </kbd>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />
          <CommandGroup heading="Socials">
            <CommandItem
              onSelect={() => {
                runCommand(() =>
                  window.open("https://github.com/zuhaib-dev", "_blank"),
                );
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Go to GitHub</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                runCommand(() =>
                  window.open("https://x.com/xuhaib_x9", "_blank"),
                );
              }}
            >
              <Twitter className="mr-2 h-4 w-4" />
              <span>Go to Twitter</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
