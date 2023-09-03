/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
     
    extend: {
      screens: {
        'sm': '480px',    // Custom breakpoint for small screens
        'md': '645px',   // Custom breakpoint for medium screens
        'lg': '1024px',   // Custom breakpoint for large screens
        'xl': '1280px',      // Custom breakpoint for extra-large screens
      },
       
    },
  },
  plugins: [],
}

