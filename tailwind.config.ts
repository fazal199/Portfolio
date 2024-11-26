/** @type {import('tailwindcss').Config} */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  
  content: [
    
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        primary: "black",
        secondary: "bg-black/90",
        tertiary: "#FF4136",
        quaternary: "white"
      }
      
    },
    
    screens: {
      laptop: { max: "1250px" },
      // => @media (max-width: 1279px) { ... }

      tablet: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "mobile-md": { max: "650px" },
      // => @media (max-width: 767px) { ... }

      "mobile-sm": { max: "500px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}