/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      },

      colors: {
        clinicPrimary: "#0f9bd8",
        clinicAccent: "#0fb8b3"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out both"
      }
    }
  },
  plugins: []
};
