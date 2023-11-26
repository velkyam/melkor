import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'light': '0px 0px 20px 0px rgb(0, 114, 245)',
        'light2': '0px 0px 20px 0px rgb(0, 114, 245)',
        'light3': '0px 0px 20px 0px rgb(178, 73, 248)',
        'light4': '0px 0px 20px 0px rgb(178, 73, 248)',
      },
      dropShadow: {
        'lightShadow': '5px 5px 35px rgb(178, 73, 248)',
      },
      height: {
        '128': '32rem',
        '256': '64rem',
      },
      backgroundImage: {
        'hero-pattern': "url('../public/wave.svg')",
        'contact-pattern':"url('../public/wave7.svg')",
        'about-pattern':"url('../public/wave9.svg')",
        'melkor-pattern':"url('../public/melkor7.svg')",
        'melkor-pattern2':"url('../public/melkor12.svg')",
      },
      colors:{
        "cl1": "#1a1a1a",
        "cl2": "#2e3192",
        "cl3": "#4f52b0",
        "cl4": "#ffffff",
        "cl5": "#4f52b0",
        "cl6": "#2e3192",
        "cl7": "#2e2b28",
        "melkorPurple": "#2E3192",
        "violet": "from-[#FF1CF7] to-[#b249f8]",
      },
    },
  },
  
  darkMode: "class",
  plugins: [nextui({
      themes:{
        light:{
        },
        dark:{
        },
      },
    }
  )],
}
