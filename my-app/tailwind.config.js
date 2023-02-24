/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    enabled: true,
    content: [
      './src/**/*.{js,jsx,ts,tsx}'
    ],
    options: {
      safelist: [/(bg|ring)-(.*)-(\d{1}0{1,2})/]
    }
  },
  theme: {
    extend: {
      colors: {
        'purple': '#21092f',
        'dgray': '#9e9c9e'
      },
      width: {
        '300': '300px',
        '447': '447px',
        'p483': '483px'
      },
      height: {
        '245': '15.3rem',
      },
      top: {
        '1/5': '20%'
      },
      right: {
        '1/5': '20%'
      }
    }
  },
  plugins: [],
}
