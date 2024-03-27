/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        //1280 1024 640

        'sm' : {'max' : '640px'},
         
        'md' : {'min': '640px', 'max': '1024px'},
         
        'lg' : {'min': '1024px', 'max': "1280px"},

        'xl' : {'min': '1280px', 'max': "1440px"}
         
      },
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
