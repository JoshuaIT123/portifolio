"use client";

import { FaMoon, FaSun } from "react-icons/fa6";

/**
 * Fixed top-right theme toggle. Flips a `.light` class on <html>, which
 * remaps the design tokens in globals.css; choice persists in localStorage
 * (applied pre-paint by an inline script in layout.tsx). Icon swap is pure
 * CSS so there is no mounted/hydration state to manage.
 */
export function ThemeToggle() {
  const toggle = () => {
    const isLight = document.documentElement.classList.toggle("light");
    try {
      window.localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {
      /* storage unavailable — theme simply won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex size-10 items-center justify-center rounded-full text-primary transition-colors duration-200 hover:text-accent"
    >
      {/* Sun shows in dark mode, Moon in light mode */}
      <FaSun aria-hidden="true" className="size-5 [html.light_&]:hidden" />
      <FaMoon aria-hidden="true" className="hidden size-5 [html.light_&]:block" />
    </button>
  );
}
