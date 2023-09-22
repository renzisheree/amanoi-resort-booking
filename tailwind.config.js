/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { body: ["DM Sans", "san-serif"] },
      colors: {
        primary: "#F3EEE7",
        secondary: "#9456E3",
      },
    },
  },
  plugins: [],
};
