// ============================================================================
// FONTS — single place to change the site's typefaces.
// Swap the imports below to change every font across the app. The CSS variables
// are consumed in src/app/globals.css (§4) and exposed as Tailwind font-* tokens.
// ============================================================================
import { Manrope, JetBrains_Mono } from "next/font/google";

// Main UI + display font.
export const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Code / API font.
export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Convenience: spread onto <html> className.
export const fontVariables = `${fontSans.variable} ${fontMono.variable}`;
