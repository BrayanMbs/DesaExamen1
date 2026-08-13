import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0f172a",
        panel: "#111827",
        accent: "#22d3ee",
        electric: "#3b82f6"
      },
      boxShadow: {
        glow: "0 20px 70px rgba(34, 211, 238, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
