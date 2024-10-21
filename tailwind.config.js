/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%,85%,100%": { opacity: "1" },
          "40%,80%,82%": { opacity: "0.7" },
          "60%,81%,84%": { opacity: "0.9" },
          "85%,79%,83%": { opacity: "0.8" },
        },
      },
      animation: {
        flicker: "flicker 7s linear infinite",
      },
    },
  },
  plugins: [],
};
