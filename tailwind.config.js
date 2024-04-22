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
        'third': "url('../images/third-bg.jpeg')",
        'fourth': "url('../images/fourth-bg.jpeg')",
        'fifth': "url('../images/fifth-bg.jpeg')",
      },
      colors: {
        'main-pink': '#ce6f6f',
        'second-pink': '#e8b3af',
        'ham-pink': '#e8b3b0',


      },
      fontFamily: {
        'ubuntu': ["Ubuntu"],
      }
    },
  },
  plugins: [],
}
