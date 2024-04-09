/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('../images/main-bg.jpg')",
        'second': "url('../images/second-bg.jpeg')",
      },
      colors: {
        'main-pink': '#ce6f6f',
      },
      fontFamily: {
        'ubuntu': ["Ubuntu"],
      }
    },
  },
  plugins: [],
}
