/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './blog.html',
    './index.html',
  ],
  theme: {
    fontFamily: {
      'lexend': ['Lexend', 'sans-serif'],
    },
    plugins: [
      require('daisyui'),
    ],
 }
}
