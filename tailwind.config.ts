import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "airbnb-gradient":
          "linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%)",
      },
      colors: {
        "airbnb-theme-color": "#FF385C",
        "airbnb-light-black": "#222222",
        "airbnb-light-gray": "#717171",
      },
    },
  },
  plugins: [],
};
export default config;
