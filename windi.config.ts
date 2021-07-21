// windi.config.ts
import {defineConfig} from 'windicss/helpers'

export default defineConfig({
  theme: {
    breakpoints: {
      xs: 321,
      sm: 480,
      md: 1025,
      lg: 1420,
      xl: 1840
    },
    extend: {
      colors: {
        ocean: '#155aae'
      },
      lineHeight: {
        '5': '5'
      }
    },
    fontSize: {
      '10': ['0.625rem', '1rem'],
      '12': ['0.75rem', '1.125rem'],
      '14': ['0.875rem', '1.3125rem'],
      '16': ['1rem', '1.5rem'],
      '18': ['1.125rem', '1.75rem'],
      '20': ['1.25rem', '1.875rem'],
      '22': ['1.375rem', '2rem'],
      '24': ['1.5rem', '2.25rem'],
      '28': ['1.75rem', '2.4rem'],
      '32': ['2rem', '2.8rem'],
      '36': ['2.25rem', '3rem'],
      '46': ['2.875rem', '4rem'],
      '54': ['3.375rem', '4rem'],
      '72': ['4.5rem', '5rem'],
      '80': ['5rem', '6rem'],
      '108': ['6.75rem', '7rem']
    }
  }
})
