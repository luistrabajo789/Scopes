/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0198BD",
        },
        secondary: {
          100: "#A4CB2B",
        },
      },
    },
  },
  plugins: [],
};
