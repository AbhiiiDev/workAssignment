/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {

        '500': '500px',
        '30': '30px',
        '350': '350px',
      },
    },
  },
  plugins: [],
}

