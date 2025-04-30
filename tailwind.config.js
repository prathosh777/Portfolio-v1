// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveUpDown: "moveUpDown 1.5s infinite ease-in-out",
      },
      keyframes: {
        moveUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      variants: {
        extend: {
          scale: ['group-hover'],
          rotate: ['group-hover'],
          blur: ['group-hover'],
          transform: ['group-hover']
        }
      }
    },
  },
  plugins: [],
}