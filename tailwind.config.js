/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      slate: {
        100: "#fffdfa",
        200: "#c5c6ce",
        600: "#5d5f79",
        800: "#00001a",
      },
      red: {
        200: "#e9ab53",
        600: "#f15e50",
      },
    },
    fontSize: {
      56: ["56px", { lineHeight: "56px" }],
      40: ["40px", { lineHeight: "40px" }],
      32: ["32px", { lineHeight: "32px" }],
      20: ["20px", { lineHeight: "24px" }],
      18: ["18px", { lineHeight: "24px" }],
      15: ["15px", { lineHeight: "26px" }],
      "14-cta": ["14px", { lineHeight: "24px", letterSpacing: "4.375px" }],
    },
    fontWeight: {
      regular: "400",
      bold: "700",
      black: "800",
    },
    extend: {},
  },
  plugins: [],
};
