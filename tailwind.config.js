/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#e6f3ff',
          300: '#99d6ff',
          500: '#0066cc',
          700: '#004499',
          900: '#002266',
        },
      },
    },
  },
  plugins: [],
}

