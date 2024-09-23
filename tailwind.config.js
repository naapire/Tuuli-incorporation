/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'], // Added Kumbh Sans
      },
      colors: {
        customGray: '#F4F6F8',
        customBlueGray: '#9DAEC2',    // HSBA(214, 28%, 60%, 1)
        customLightBlue: '#9e7f66',   // HSBA(235, 60%, 88%, 1)
        customDarkBlue: '#3A5D81',    // HSBA(219, 44%, 18%, 1)
      },
    },
    screens: {
      xs: { max: "380px" }, // => @media (max-width: 380px) { ... }
      ssm: { max: "360px" },
      xxsm: { max: "340px" },

      ss: "390px", // => @media (min-width: 390px) { ... }
      ns: "420px", // => @media (min-width: 420px) { ... }
      sm: "460px", // => @media (min-width: 460px) { ... }
      md: "768px", // => @media (min-width: 960px) { ... }
      lg: "1024px", // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
};
