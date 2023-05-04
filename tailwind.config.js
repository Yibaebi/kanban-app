/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: ['12px', '15px'],
      base: ['15px', '19px'],
      lg: ['18px', '23px'],
      xl: ['24px', '30px'],
    },
    extend: {
      colors: {
        purple: {
          main: '#635FC7',
          100: '#635fc71a',
          250: '#635fc740',
        },
        'purple-light': '#A8A4FF',
        black: '#000112',
        dark: '#20212C',
        gunmetal: '#2B2C37',
        arsenic: '#3E3F4E',
        blue: '#E4EBFA',
        'blue-dark': '#828FA3',
        'blue-light': '#F4F7FD',
        'red-dark': '#EA5555',
        'red-light': '#FF9898',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
