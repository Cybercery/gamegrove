const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['"Outfit"', "sans-serif"],
      },
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
});
