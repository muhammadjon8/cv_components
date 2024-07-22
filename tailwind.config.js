/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },
    },
  },
  plugins: [],
};
