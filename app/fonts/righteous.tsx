import localFont from 'next/font/local'

const Righteuous = localFont({
  src: [
    {
      path: './_src/Righteous-Regular.ttf',
      weight: '400'
    }
  ],
  display: 'swap',
  variable: '--font-righteous'
})

export default Righteuous
