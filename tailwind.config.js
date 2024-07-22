/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      boxShadow: {
        custom: "0 0 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
