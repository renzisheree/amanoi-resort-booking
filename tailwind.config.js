/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: { body: ["DM Sans", "san-serif"] },
      colors: {
        primary: "#F3EEE7",
        secondary: "#9456E3",
        initial: "#54524F",
      },
    },
  },
  darkMode: "class",
  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
