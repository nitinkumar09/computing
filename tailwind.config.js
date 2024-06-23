/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.hbs',
    './public/**/*.html',
    './public/**/*.js'
    // Add any other paths where Tailwind classes are used
  ],
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        'screen': '100vh',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

