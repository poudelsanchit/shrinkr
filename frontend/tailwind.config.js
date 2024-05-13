/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      s: "320px", //small mobile
      m: "375px", //small mobile
      l: "425px", //large mobile
      sm: "640px", //small Tablet
      md: "768px	", // tablet
      "2md": "894px",
      lg: "1024px", //laptop
      xl: "1280px	", //large laptop
      "2xl": "1536px	", //large screens
    },

    extend: {
      colors: {
        primarybackground: "#0F0F0F",
        secondaybackground: "#191919",
        border: "#3D3D4E",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Roboto: ["Roboto Mono", "monospace"],
      OpenSans: ["Open Sans", "sans-serif"],
      RockSalt:[ "Rock Salt", 'cursive']
    },
  },
  plugins: [    require('tailwindcss-dotted-background')
],
  
};
