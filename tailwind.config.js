/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'level1': "url(/static/images/europa.jpg)",
      },
      animation: {
        'pipe-level1': 'pipe-animations 1.5s infinite linear',
        'cloud-level1': 'cloud 20s infinite linear',
      }
    },
  },
  plugins: [],
}
