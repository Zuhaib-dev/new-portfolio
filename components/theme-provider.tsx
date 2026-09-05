"use client"
import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme } from "next-themes"

function ThemeHotkey() {
  const { theme, setTheme } = useTheme()
  
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return
      }

      if (e.key === "d" || (e.key.toLowerCase() === "d" && (e.metaKey || e.ctrlKey) && e.shiftKey)) {
        e.preventDefault()
        setTheme(theme === "dark" ? "light" : "dark")
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [theme, setTheme])

  return null
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    <ThemeHotkey />
    {children}
  </NextThemesProvider>
}
