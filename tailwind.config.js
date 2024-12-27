/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small breakpoint
        '3xl': '1600px', // Very large screens
      },
    },
  },
  plugins: [],
}
