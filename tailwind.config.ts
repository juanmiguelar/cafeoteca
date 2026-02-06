import type { Config } from 'tailwindcss'

export default <Config>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#D84B4B',
        secondary: '#E6C258',
        tertiary: '#96AD57',
        softpink: '#F4B6C2',
        accent: '#E2585E',
        leaf: '#5B9B8A',
        olive: '#9CA44E',
        purple: {
          brand: '#A38FBD',
          DEFAULT: '#9C82AA',
        },
        background: {
          light: '#FDFCF6',
          dark: '#1F1C18',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#2D2A26',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
}
