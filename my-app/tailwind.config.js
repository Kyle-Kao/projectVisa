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
    
  },
  plugins: [],
}
