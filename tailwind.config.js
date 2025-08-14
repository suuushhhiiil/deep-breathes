/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      secondary: "var(--secondary)",
      accent: "var(--accent)",
      text: "var(--text)",
      background: "var(--background)",
      black: "#000000",
      white: "#ffffff",
      primary: {
        100: "#fff3ec",
        200: "#ffe7d9",
        300: "#ffdbc6",
        400: "#ffcfb3",
        500: "#ffc3a0",
        600: "#cc9c80",
        700: "#997560",
        800: "#664e40",
        900: "#332720",
      },
    },
    fontFamily: {
      display: ["Playfair Display", "sans-serif"],
      sans: ["DM Sans", "sans-serif"],
    },
    transitionPropery: {
      width: "width",
    },
    extend: {},
  },
  plugins: [],
};
