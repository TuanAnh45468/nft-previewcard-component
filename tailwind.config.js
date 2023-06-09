/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "soft-blue": "hsl(215, 51%, 70%)",
      cyan: "hsl(178, 100%, 50%)",
      "dark-blue-main": "hsl(217, 54%, 11%)",
      "dark-blue-card": "hsl(216, 50%, 16%)",
      "dark-blue-line": "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },

    screens: {
      mobile: "375px",
      laptop: "1440px",
    },

    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        semiBold: 600,
      },
    },
  },
  plugins: [],
};
