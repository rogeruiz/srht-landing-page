import localFont from 'next/font/local'

const Hepta = localFont({
  src: [
    {
      path: './_src/HeptaSlab-VariableFont_wght.ttf',
      weight: 'variable'
    }
  ],
  display: 'swap',
  variable: '--font-hepta'
})

export default Hepta
