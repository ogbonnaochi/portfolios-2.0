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
      colors: {
        black: '#000000' // Add black color
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
