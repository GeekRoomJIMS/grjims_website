/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swingIn: {
          "0%": { transform: "rotateX(-100deg)", opacity: 0 },
          "100%": { transform: "rotateX(0deg)", opacity: 1 },
        },
      },
      animation: {
        swingIn: "swingIn 0.5s ease-in-out",
      },

      backgroundImage: {
        App: "url('/images/bg.jpeg')",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [require("daisyui")],
};
