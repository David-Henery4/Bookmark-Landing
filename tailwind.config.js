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
      screens: {
        smTab: "610px",
        smLap: "930px",
      },
      gridTemplateColumns: {
        bleed: "32px repeat(12, 1fr) 32px",
        tabBleed: "82.5px repeat(12, 1fr) 82.5px",
      },
      gridColumnEnd: {
        14: "14",
        15: "15",
      },
      fontSize: {
        basic: "15px",
      },
      height: {
        "7/9": "73.5%",
      },
      lineHeight: {
        11: "52px",
      },
      maxWidth: {
        card: "280px",
        ctaBtn: "151px",
        heroBtns: "343px",
        faqs: "540px",
      },
      spacing: {
        92: "371px",
      },
      letterSpacing: {
        contactSpacing: "4.62px",
      },
    },
  },
  plugins: [],
};
