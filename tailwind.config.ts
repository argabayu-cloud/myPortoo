import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563EB",
          secondary: "#1E293B",
          accent: "#38BDF8",
          dark: "#0F172A",
          muted: "#64748B",
          surface: "#F8FAFC"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.10)",
        glow: "0 24px 80px rgba(37, 99, 235, 0.22)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;