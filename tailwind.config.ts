import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49BD88",
        "custom-gray": "#666666",
        "custom-gray-2": "#999999",
        "custom-purple": "#6D5CBC",
      },
    },
  },
  plugins: [],
};
export default config;
