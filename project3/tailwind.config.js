/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Space Grotesk",
      },
      backgroundImage: {
        mobile: "url('/assets/bg-main-mobile.png')",
        desktop: "url('/assets/bg-main-desktop.png')",
        cardFront: "url('/assets/bg-card-front.png')",
        cardBack: "url('/assets/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
