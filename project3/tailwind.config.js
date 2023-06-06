/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Space Grotesk",
      },
      colors: {
        // buttonColor: hsl(278, 68%, 11%),
      },
    },
  },
  plugins: [],
};
