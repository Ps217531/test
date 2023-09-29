/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
      
            fontWeight: {
              thin: '100',
              hairline: '100',
              extralight: '200',
              light: '300',
              normal: '400',
              medium: '500',
              semibold: '600',
              bold: '700',
              extrabold: '800',
              'extra-bold': '800',
              black: '900',
            },
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
            gray: {
                50: '#F5F5F5',
                100: '#EFEFEF',
            },
            red: {
                50: '#fdf2f2',
                100: '#fde8e8',
            },
            yellow: {
                50: '#fef8e7',
                100: '#fef1d7',
            },
            green: {
                50: '#f0fdf4',
                100: '#dcfce7',
            },
            escapeBlack: '#03001E',
            escapeBlue:{
                50: '#7B9CFD',
                100: '#4169E1',
                900: '#00204F'
            } ,
            escapeYellow: {
                50: '#F1DC39',
                100: '#FF8F4A'
            },
            escapeGreen:{
                50: '#3DD875',
                100: '#0EB3A0'
            },
            escapePurple: '#970491',
            escapeFooter: '#646F7C',

        },
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            exo: ['Exo', 'sans-serif'],
            exo2: ['Exo 2', 'sans-serif'],

        }
    },

  plugins: [
    require('tailwindcss-animated')
  ],
}
