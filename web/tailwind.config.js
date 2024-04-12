/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundDark: "url('/backgroundark.jpg')"
      },
    },
  },
  plugins: [],
}

