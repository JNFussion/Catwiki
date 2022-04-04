// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-lg": "url('./assets/images/HeroImagelg.png')",
        "hero-md": "url('./assets/images/HeroImagemd.png')",
        "hero-sm": "url('./assets/images/HeroImagesm.png')",
      },
      colors: {
        hero: "#E3E1DC",
        "brown-text": "#291507",
        "brown-square": "#4D270C",
        "point-empty": "#E0E0E0",
        "point-filled": "#544439",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(256px, 1fr))",
      },
    },
  },
  plugins: [],
};
