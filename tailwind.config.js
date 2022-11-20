/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./build/*.html"],
  theme: {
    fontFamily: {
      rubik: ["Rubik, sans-serif"],
    },
    colors: {
      softBlue: "#5267DF",
      softRed: "#FA5959",
      greyishBlue: "#242A45",
      veryDarkBlue: "#9194A2",
      white: "#ffffff",
    },
    extend: {
      gridTemplateColumns: {
        bleed: "32px repeat(12, 1fr) 32px",
      },
      gridColumnEnd: {
        14: "14",
        15: "15",
      },
      fontSize: {
        basic: "15px",
      },
      lineHeight: {
        11: "52px",
      },
      maxWidth: {
        card: "280px",
        ctaBtn: "151px"
      },
      spacing: {
        92: "371px",
      },
      letterSpacing: {
        contactSpacing: "4.62px"
      }
    },
  },
  plugins: [],
};
