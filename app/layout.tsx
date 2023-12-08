import type { Metadata } from 'next'
import './globals.css'
import Hepta from './fonts/hepta'
import Mplus2 from './fonts/mplus_2m'
import Righteuous from './fonts/righteous'

export const metadata: Metadata = {
  title: 'Roger Steve Ruiz has a landing page',
  description:
    'This is a simple little landing page which showcases my experience and skills but also I use to navigate around the web. It is literally a home page for me.'
}

const htmlFontCSSVariables = `${Hepta.variable} ${Mplus2.variable} ${Righteuous.variable}`

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={htmlFontCSSVariables}>
      <body className="mocha">{children}</body>
    </html>
  )
}
