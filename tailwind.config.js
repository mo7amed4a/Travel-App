const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f56960', 
        secondary: '#0791be',
      },
    },
  },
  plugins: [flowbite.plugin(),],
}