/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '200': '38rem'
      },
      width: {
        '120': '28rem',
        '200': '60rem'
      }
    },
  },
  plugins: [],
}