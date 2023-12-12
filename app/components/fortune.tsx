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
'use client'

import type { Quote } from '../index.d.ts'

export default function Fortune({ data }: { data: Quote[] }) {
  const idx: number = Math.floor(Math.random() * data.length)

  const quote: Quote = data[idx]

  const colors: string[] = [
    'text-mauve',
    'text-yellow',
    'text-lavender',
    'text-teal',
    'text-flamingo',
    'text-sky',
    'text-rosewater',
    'text-sapphire',
    'text-maroon'
  ]

  const jdx: number = Math.floor(Math.random() * colors.length)

  return (
    <div className="bg-surface0 border-overlay0 border rounded-xl p-8 lg:mb-0 max-w-3xl">
      <blockquote className="text-subtext1 shadow-surface2 text-lg md:text-3xl font-sans">
        {quote.say}
      </blockquote>
      {(quote.response || quote.author) && (
        <h5
          className={`${colors[jdx]} font-display text-sm md:text-lg mt-5 uppercase`}
        >
          {quote.author && (
            <>
              <code className={colors[jdx]}> </code> {quote.author}
            </>
          )}
          {quote.response && quote.response}
        </h5>
      )}
    </div>
  )
}
