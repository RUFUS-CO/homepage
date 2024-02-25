const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
    },
    extend: {
      colors: {
        'dark-purple': '#150f1c',
      },
      fontFamily: {
        custom: ['Lato', 'sans-serif'], // Replace 'YourFontName' with the name of your font
      },
    },
  },
  plugins: [],
};
