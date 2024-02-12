import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#33312e",
        red: "#a73228",
        blue: "#2a3060",
        green: "#2b5549",
        orange: "#d36138",
        yellow: "#ecb365",
        gray: "#747673",
        white: "#ece5d3",
      },
    },
  },
  plugins: [],
};
export default config;
