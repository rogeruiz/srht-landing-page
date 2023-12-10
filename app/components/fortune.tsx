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

import { useEffect, useState } from 'react'

interface Fortune {
  say: string
  author: string | undefined
}

function getRandomIdx(max: number) {
  return Math.floor(Math.random() * max)
}

export default function Fortune({ data }: { data: Fortune[] }) {
  let idx: number = getRandomIdx(data.length)

  const [quote, setQuote] = useState(data[idx])

  useEffect(() => {
    setQuote(data[idx])
  }, [setQuote])

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
