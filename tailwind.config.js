/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    screens: {
      sm: { min: "320px", max: "760px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "760px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1400px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
