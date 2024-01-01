/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {
      textDecorationThickness: {
        3: "2.5px",
      },
    },
  },
  plugins: [],
};
