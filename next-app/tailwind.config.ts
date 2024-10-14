import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem"
      },
      screens: {
        xs: "425px", // Extra small devices (portrait phones)
        sm: "640px", // Small devices (landscape phones)
        md: "768px", // Tablets (portrait)
        lg: "1024px", // Tablets (landscape) and small desktops
        xl: "1280px", // Medium desktops
        "2xl": "1300px", // Large desktops
      },
    },
    screens: {
      xs: "425px", // Extra small devices (portrait phones)
      sm: "640px", // Small devices (landscape phones)
      md: "768px", // Tablets (portrait)
      lg: "1024px", // Tablets (landscape) and small desktops
      xl: "1280px", // Medium desktops
      "2xl": "1300px", // Large desktops
    },
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#000000",
        gradient: "var(--gradient-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "red-main": "var(--red-color)",
        "blue-main": "var(--blue-color)",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, var(--primary-color), var(--red-color))",
        "gradient-black": "linear-gradient(135deg, #212329, #22232A)",
      },
    }
  },
  darkMode: "class",
  plugins: [nextui()],

};
export default config;
