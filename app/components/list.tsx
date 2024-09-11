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

  const cdx: number = Math.floor(Math.random() * colors.length)

  const listItems = data.map((li: Item, idx: number) => {
    return (
      <li
        key={idx}
        className={`list-none md:hover:list-disc my-4 rounded-lg ${colors[cdx][0]} lg:rounded-none lg:bg-transparent`}
      >
        {li.href && (
          <Link
            className="md:underline text-blue hover:bg-crust lg:hover:bg-transparent hover:no-underline visited:text-mauve block py-4 lg:py-0 rounded-lg"
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

  return (
    <div className="mb-10 lg:mb-px">
      <section className={`${colors[cdx][0]} text-base px-8 py-8 rounded-t-xl`}>
        <h4
          id={`${title.replace('/', '')}`}
          className={`${colors[cdx][1]} text-2xl md:text-xl font-mono lg:text-3xl lowercase text-center py-0`}
        >
          {title}
        </h4>
      </section>
      {data && (
        <section className={`text-center lg:text-left rounded-b-xl pt-1 bg-mantle border-${colors[cdx][0].replace('bg-', '')} border-b-2 border-l-2 border-r-2 border-t-transparent`}>
          <ul className="px-8 pb-6">{listItems}</ul>
        </section>
      )}
    </div>
  )
}
