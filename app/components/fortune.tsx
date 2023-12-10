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

interface Quote {
  say: string
  author: string
}

export default function Fortune({ data }: { data: Quote[] }) {
  type Fortune = {
    say: string
    author: string
  }

  let idx: number = Math.floor(Math.random() * data.length)

  let quote: Fortune = data[idx]

  return (
    <div className="bg-rosewater border-overlay0 border rounded-xl p-8 lg:mb-0 max-w-3xl">
      <blockquote className="text-mantle shadow-surface2 text-xl md:text-lg lg:text-xl font-sans uppercase">
        {quote.say}
      </blockquote>
      {quote.author && (
        <h5 className="text-mantle font-display text-lg mt-5">
          — {quote.author}
        </h5>
      )}
    </div>
  )
}
