/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': ' linear-gradient(to right top, #0d2f61, #023680, #0d3c9e, #2a3fbb, #4b3ed6)',
      },
    },
  },
  plugins: [],
}

