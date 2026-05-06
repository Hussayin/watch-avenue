/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // darkMode asosiy konfiguratsiya darajasida
  theme: {
    extend: {
      fontFamily: {
        // Custom font qo‘shdik
        cormorant: ['"Cormorant Garamond"', "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marqueeReverse: "marqueeReverse 30s linear infinite",
      },
    },
  },
  plugins: [],
};
