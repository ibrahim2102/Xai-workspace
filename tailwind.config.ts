// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   content: [
//     "./app/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#0d46f2",
//         "background-light": "#f5f6f8",
//         "background-dark": "#050505",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00a8ff",
        "background-light": "#f5f6f8",
        "background-dark": "#050505",
        "surface-dark": "#1a1f33",
        "border-dark": "#2a3045",
      },
    },
  },
  plugins: [],
};

export default config;