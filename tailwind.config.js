const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan script"],
    },

    extend: {
      height: (theme) => ({
        screen40: "40vh",
        screen75: "75vh",
        screen80: "80vh",
        screen90: "90vh",
        screen95: "95vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        screen20: "20vw",
        screen50: "50vw",
        screen75: "75vw",
        screen80: "80vw",
        screen91: "91vw",
        screen95: "95vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
      }),
      zIndex: {
        "-10": "-10",
      },
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
          fg2t: "rgba(171,102,255,0.5)",
          fg1t: "rgba(116,182,247,0.7)",
          bg1: "#8EC5FC",
          bg2: "#E0C3FC",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#2e2e20",
          200: "#282C35",
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
  plugins: [require("tailwind-scrollbar-hide")],
};
