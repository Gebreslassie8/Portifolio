/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Add this line
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1E293B',
        accent: '#F59E0B',
        dark: '#0F172A',
        light: '#F8FAFC'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}










// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#3B82F6',
//         secondary: '#1E293B',
//         accent: '#F59E0B',
//         dark: '#0F172A',
//         light: '#F8FAFC'
//       },
//       fontFamily: {
//         'inter': ['Inter', 'sans-serif'],
//       },
//       animation: {
//         'float': 'float 6s ease-in-out infinite',
//       },
//       keyframes: {
//         float: {
//           '0%, 100%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-20px)' },
//         }
//       }
//     },
//   },
//   plugins: [],
// }