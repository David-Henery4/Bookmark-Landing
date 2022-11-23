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
      okGreen: "#18CF08",
      offWhite: "#F7F7F7",
      grey: "#5B6074",
    },
    extend: {
      screens: {
        smTab: "610px",
        smLap: "930px",
      },
      gridTemplateColumns: {
        bleed: "32px repeat(12, 1fr) 32px",
        tabBleed: "82.5px repeat(12, 1fr) 82.5px",
        deskBleed: "165px repeat(12, 1fr) 165px",
      },
      gridColumnEnd: {
        14: "14",
        15: "15",
      },
      gap: {
        17: "72px",
      },
      fontSize: {
        navLinks: "13px",
        basic: "15px",
        32: "32px",
      },
      height: {
        "7/9": "73.5%",
      },
      lineHeight: {
        11: "52px",
      },
      width: {
        41: "166px",
        98: "442px",
      },
      maxWidth: {
        card: "280px",
        ctaBtn: "151px",
        heroBtns: "343px",
        text: "540px",
        allContent: "1110px",
      },
      spacing: {
        92: "371px",
        26: "108px",
      },
      letterSpacing: {
        contactSpacing: "4.62px",
      },
    },
  },
  plugins: [],
};
