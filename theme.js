import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  colors: {
    brand: {
      50: '#fae7ff',
      100: '#e5bdf5',
      200: '#d293ec',
      300: '#c069e3',
      400: '#ad3fda',
      500: '#9425c0',
      600: '#741c96',
      700: '#53136c',
      800: '#330b42',
      900: '#14021a'
    }
  }
}

const theme = extendTheme({ config })

export default theme
