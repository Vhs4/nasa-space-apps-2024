/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      'level1': "linear-gradient(#63c4eb, #E0F6FF)",
    },
    animation: {
      'pipe-level1': 'pipe-animations 1.5s infinite linear',
      'cloud-level1': 'cloud 20s infinite linear',
    }
  },
  plugins: [],
}