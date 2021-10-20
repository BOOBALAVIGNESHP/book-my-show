module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         colors: {
           vignesh:
             
                  {
                    50: '#fff6da',
                    100: '#ffe4ad',
                    200: '#ffd27d',
                    300: '#ffc04b',
                    400: '#ffae1a',
                    500: '#e69400',
                    600: '#b37300',
                    700: '#815200',
                    800: '#4e3000',
                    900: '#1f0f00',
                  },
                  navCol:                  
                  {
                    50: '#f5effb',
                    100: '#dad5df',
                    200: '#2B3148',
                    300: '#a69fad',
                    400: '#8c8394',
                    500: '#736a7b',
                    600: '#595260',
                    700: '#403b46',
                    800: '#27222b',
                    900: '#100a15',
                  }
           
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }