/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind';
const { heroui } = require('@heroui/react');

export default {
  content: {
    files: [
      
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    extract, // Extrae los estilos dinámicos de fluid-tailwind
  },
  theme: {
    extend: {
      // No es necesario extender estas propiedades manualmente
      // fluid-tailwind se encarga de ello a través del plugin
    },
  },
  plugins: [
    heroui(), // Plugin de HeroUI
    fluid, // Plugin de fluid-tailwind
  ],
};


