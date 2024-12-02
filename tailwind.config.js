/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'dotted-bg': "radial-gradient(circle, transparent 2px,  #18181b 1px)",
      },
      backgroundSize: {
        'dots': '4px 4px',
      },
    },
  },
  plugins: [],
}

