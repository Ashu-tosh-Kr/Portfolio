module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan script"],
    },

    extend: {
      boxShadow: {
        "custom-light":
          "0 10px 15px -3px rgba(0, 0, 0, 0.125), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
        "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px 10px #14161c",
      },
      colors: {
        light: {
          DEFAULT: "#cc2b5e",
          fg1: "#cc2b5e",
          fg2: "#753a88",
          fg1t: "rgba(218, 34, 255, 0.67)",
          fg2t: "rgba(151, 51, 238, 0.67)",
          bg1: "#DA22FF",
          bg2: "#9733EE",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#2e2e20",
          200: "#282C35",
          300: "#19443c",
          500: "#202100",
          700: "#0f1115",
        },
        glass: {
          DEFAULT: "#ffffff",
          30: "rgba(255,255,255,0.3)",
          50: "rgba(255,255,255,0.5)",
          70: "rgba(255,255,255,0.7)",
          90: "rgba(255,255,255,0.9)",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};