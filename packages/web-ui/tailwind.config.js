import * as defaultTheme from 'tailwindcss/defaultTheme'
import colors from '../web-foundation/color'

const spacing = {
  0.25: '0.0625rem',
  0.75: '0.1875rem',
  1.25: '0.3125rem',
  1.75: '0.4375rem',
  2.25: '0.5625rem',
  2.75: '0.6875rem',
  3.25: '0.8125rem',
  3.75: '0.9375rem'
}

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
        900: '#161e2e'
      },
      red: {
        50: '#fdf2f2',
        100: '#fde8e8',
        200: '#fbd5d5',
        300: '#f8b4b4',
        400: '#f98080',
        500: '#f05252',
        600: '#e02424',
        700: '#c81e1e',
        800: '#9b1c1c',
        900: '#771d1d'
      },
      orange: {
        50: '#fff8f1',
        100: '#feecdc',
        200: '#fcd9bd',
        300: '#fdba8c',
        400: '#ff8a4c',
        500: '#ff5a1f',
        600: '#d03801',
        700: '#b43403',
        800: '#8a2c0d',
        900: '#73230d'
      },
      yellow: {
        50: '#fdfdea',
        100: '#fdf6b2',
        200: '#fce96a',
        300: '#faca15',
        400: '#e3a008',
        500: '#c27803',
        600: '#9f580a',
        700: '#8e4b10',
        800: '#723b13',
        900: '#633112'
      },
      green: {
        50: '#f3faf7',
        100: '#def7ec',
        200: '#bcf0da',
        300: '#84e1bc',
        400: '#31c48d',
        500: '#0e9f6e',
        600: '#057a55',
        700: '#046c4e',
        800: '#03543f',
        900: '#014737'
      },
      teal: {
        50: '#edfafa',
        100: '#d5f5f6',
        200: '#afecef',
        300: '#7edce2',
        400: '#16bdca',
        500: '#0694a2',
        600: '#047481',
        700: '#036672',
        800: '#05505c',
        900: '#014451'
      },
      indigo: {
        50: '#f0f5ff',
        100: '#e5edff',
        200: '#cddbfe',
        300: '#b4c6fc',
        400: '#8da2fb',
        500: '#6875f5',
        600: '#5850ec',
        700: '#5145cd',
        800: '#42389d',
        900: '#362f78'
      },
      pink: {
        50: '#fdf2f8',
        100: '#fce8f3',
        200: '#fad1e8',
        300: '#f8b4d9',
        400: '#f17eb8',
        500: '#e74694',
        600: '#d61f69',
        700: '#bf125d',
        800: '#99154b',
        900: '#751a3d'
      }
    },
    minWidth: defaultTheme.width,
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif']
    },
    flex: {
      ...defaultTheme.flex,
      2: '2 2 0%',
      3: '3 3 0%'
    },
    letterSpacing: {
      ...defaultTheme.letterSpacing,
      1: '1px'
    },
    maxHeight: (theme) => ({
      'screen-20': '20vh',
      'screen-40': '40vh',
      'screen-60': '60vh',
      'screen-80': '80vh',
      screen: '100vh',
      inherit: 'inherit',
      ...theme('spacing')
    }),
    extend: {
      maxWidth: {
        'modal-medium': '51.25rem'
      },
      textColor: {
        placeholder: '#A0AFBF'
      },
      height: {
        'screen-20': '20vh',
        'screen-40': '40vh',
        'screen-60': '60vh',
        'screen-80': '80vh',
        5.5: '1.375rem',
        30: '7.5rem'
      },
      width: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        30: '7.5rem'
      },
      minHeight: (theme) => ({
        ...theme('spacing')
      }),
      padding: spacing,
      margin: {
        ...spacing,
        17: '4.25rem'
      },
      inset: {
        13: '3.25rem'
      },
      fontSize: {
        xxs: ['0.625rem', '0.625rem']
      },
      colors,
      boxShadow: {
        solid: '0 0 0 2px currentColor',
        outline: `0 0 0 3px rgba(156, 163, 175, .5)`,
        'outline-gray': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-blue': `0 0 0 3px rgba(191, 219, 254, .5)`,
        'outline-green': `0 0 0 3px rgba(167, 243, 208, .5)`,
        'outline-yellow': `0 0 0 3px rgba(253, 230, 138, .5)`,
        'outline-red': `0 0 0 3px rgba(254, 202, 202, .5)`,
        'outline-pink': `0 0 0 3px rgba(251, 207, 232, .5)`,
        'outline-purple': `0 0 0 3px rgba(221, 214, 254,, .5)`,
        'outline-indigo': `0 0 0 3px rgba(199, 210, 254, .5)`,
        'outline-brand': `0 0 0 2px ${colors.brand[200]}`
      },
      outline: {
        brand: [`1px solid ${colors.brand[500]}`, '-1px']
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'active'],
      boxShadow: ['active', 'focus-visible'],
      borderColor: ['last', 'hover'],
      padding: ['first', 'last'],
      margin: ['first'],
      inset: ['active'],
      ringWidth: ['focus-visible'],
      ringColor: ['focus-visible'],
      ringOpacity: ['focus-visible'],
      textColor: ['disabled'],
      translate: ['active']
    }
  },
  plugins: [import('@tailwindcss/line-clamp')]
}
