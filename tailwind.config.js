/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '4px 5px 4px rgba(0, 0, 0, 0.2)', // 自訂的陰影效果
      },
      screens: {

        'md': '1126px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1560px',
        // => @media (min-width: 1024px) { ... }

      },
    },
  },
  plugins: [],
}

