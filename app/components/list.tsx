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

import Link from 'next/link'

import type { Item } from '../index.d.ts'

export default function List({ title, data }: { title: string; data: Item[] }) {
  const listItems = data.map((li: Item, idx: number) => {
    return (
      <li key={idx} className="list-none md:hover:list-disc my-4 md:my-2">
        {li.href && (
          <Link
            className="underline text-yellow hover:text-teal visited:text-lavender block"
            href={li.href}
            title={li.desc}
            target="_blank"
            rel="noopener noreferrer"
          >
            {li.name}
          </Link>
        )}
        {!li.href && li.name}
      </li>
    )
  })

  const colors: string[][] = [
    ['bg-mauve/10', 'text-mauve'],
    ['bg-yellow/10', 'text-yellow'],
    ['bg-lavender/10', 'text-lavender'],
    ['bg-teal/10', 'text-teal'],
    ['bg-sky/10', 'text-sky'],
    ['bg-flamingo/10', 'text-flamingo'],
    ['bg-rosewater/10', 'text-rosewater'],
    ['bg-sapphire/10', 'text-sapphire'],
    ['bg-maroon/10', 'text-maroon']
  ]

  const idx: number = Math.floor(Math.random() * colors.length)

  return (
    <div className="bg-mantle rounded mb-10 lg:mb-0">
      <section className={`${colors[idx][0]} text-base px-8 pt-8 pb-2 mb-5`}>
        <h4
          className={`${colors[idx][1]} text-2xl md:text-lg lg:text-xl font-display uppercase mb-5 lg:h-14`}
        >
          {title}
        </h4>
      </section>
      {data && (
        <ul className="px-8 pb-12 md:grid md:grid-cols-2">{listItems}</ul>
      )}
    </div>
  )
}
