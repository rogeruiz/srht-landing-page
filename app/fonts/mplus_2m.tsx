import localFont from 'next/font/local'

const Mplus2 = localFont({
  src: [
    {
      path: './_src/mplus_2m.ttf',
      weight: '400'
    }
  ],
  display: 'swap',
  variable: '--font-mplus2m'
})

export default Mplus2
