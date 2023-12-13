// NextJS SSG Landing Page
// Copyright (C) 2023  Roger Steve Ruiz
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import type { Metadata } from 'next'
import { Viewport } from 'next'
import './globals.css'
import Hepta from './fonts/hepta'
import Mplus2 from './fonts/mplus_2m'
import Righteuous from './fonts/righteous'

export const metadata: Metadata = {
  title: 'Roger Steve Ruiz has a landing page',
  description:
    'This landing page contains links I go to regularly along with technologies that I am comfortable using.'
}

export const viewport: Viewport = {
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '--ctp-base' }]
}

const htmlFontCSSVariables = `${Hepta.variable} ${Mplus2.variable} ${Righteuous.variable}`

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={htmlFontCSSVariables}>
      <body className="mocha bg-base">{children}</body>
    </html>
  )
}
