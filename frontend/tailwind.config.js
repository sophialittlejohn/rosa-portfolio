module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primaryA: "#EEEEEE",
        primaryB: "#3E3025",
      },
      textColor: {
        primaryA: "#EEEEEE",
        primaryB: "#3E3025",
      }
    },
    fontFamily: {
      body: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
