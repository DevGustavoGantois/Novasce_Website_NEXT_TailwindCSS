import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Open Sans',
    },
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    extend: {
      colors: {
        light_minit_green: '#c9e5df',
        weter_green: '#65c0ba',
        turquoise_green: '#29a6a4',
        petroleum_green: '#00666c',
        dark_moss_green: '#003c4c',
        dark_navy_blue: '#092b3d',
        deep_blue: '#102032',
        very_light_gray: '#e7e7e6',
        medium_gray: '#898887',
        dark_gray: '#575756',
        graphite_gray: '#3c3c3b',
        lead_gray: '#262626',
        greenish_black: '#101415',
        green_gradient: 'bg-gradient-to-r from-black to-[#00666c]',
        dark_blue_gradient: 'bg-gradient-to-r from-black to-[#102032]',
        light_green_gradient: 'bg-gradient-to-r from-[#00666C] to-[#102032]',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1038px',
      },
      backgroundImage: {
        'website': "url('/website.png')" 
      }
    },
  },
  plugins: [],
};

export default config;
