/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Agrega estilos globales
      container: {
        padding: "0",
      },
    },
    plugins: [],
    corePlugins: {
      container: false, // Esto es para deshabilitar el contenedor de ancho fijo
      preflight: false, // Deshabilita los estilos predeterminados de Tailwind
    },
    purge: [],
  },
};
