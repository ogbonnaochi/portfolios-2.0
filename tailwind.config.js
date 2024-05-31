// tailwind.config.js

module.exports = {
  content: [
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      fontSize:{
        '2xl': '1.5rem', // Adjust based on your design
        'lg': '1.125rem',
        spacing:{
          '24': '6rem', // Adjust based on your design

        },

        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',

        },

      },
      colors: {
        black: '#000000' // Add black color
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
