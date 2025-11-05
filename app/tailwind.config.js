
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Inter' será la fuente por defecto (font-sans)
        sans: ['Inter', ...fontFamily.sans],
        // 'Lora' será la fuente para títulos (font-serif)
        serif: ['Lora', ...fontFamily.serif],
      },
      // ... tus otras extensiones
    },
  },
  plugins: [],
};