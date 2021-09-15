module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        "card-layout": "180px auto",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
