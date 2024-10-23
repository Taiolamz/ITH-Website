/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "0 4px 20px rgba(0, 40, 135, 0.5)", 
        "custom-white": "0 4px 20px rgba(255, 255, 255, 0.5)",
      },
    },
    
    fontFamily: {
      inter: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
};
