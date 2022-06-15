import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  useSystemColorMode: true
}

const colors = {
  base: {
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

const components = {
  Link: {
    baseStyle: props => ({
      textUnderlineOffset: 3,
      color: mode(colors.base[700], colors.base[200])(props),
      _hover: {
        color: mode(colors.base[400], colors.base[600])(props)
      }
    })
  },
  Heading: {
    baseStyle: () => ({
      paddingBottom: 3
    })
  }
}

const styles = {
  global: props => ({
    body: {
      bg: mode(colors.base[50], colors.base[800])(props)
    }
  })
}

const fonts = {
  heading: `'Fjalla One', sans-serif;`,
  body: `'Joan', serif`,
  mono: `'VT323', monospaced`
}

const theme = extendTheme({ components, styles, fonts, colors, config })

export default theme
