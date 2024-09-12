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
    ['border-mauve/10', 'bg-mauve/10', 'text-mauve'],
    ['border-yellow/10', 'bg-yellow/10', 'text-yellow'],
    ['border-lavender/10', 'bg-lavender/10', 'text-lavender'],
    ['border-teal/10', 'bg-teal/10', 'text-teal'],
    ['border-sky/10', 'bg-sky/10', 'text-sky'],
    ['border-flamingo/10', 'bg-flamingo/10', 'text-flamingo'],
    ['border-rosewater/10', 'bg-rosewater/10', 'text-rosewater'],
    ['border-sapphire/10', 'bg-sapphire/10', 'text-sapphire'],
    ['border-maroon/10', 'bg-maroon/10', 'text-maroon']
  ]

  const cdx: number = Math.floor(Math.random() * colors.length)

  const listItems = data.map((li: Item, idx: number) => {

    const listItemClassNames = [
      'list-none',
      'md:hover:list-disc',
      'my-4',
      'rounded-lg',
      `${colors[cdx][1]}`,
      'lg:rounded-none',
      'lg:bg-transparent',
    ].join(' ')
    const linkComponentClassNames = [
      'md:underline',
      'text-blue',
      'hover:bg-crust',
      'lg:hover:bg-transparent',
      'hover:no-underline',
      'visited:text-mauve',
      'block',
      'py-4',
      'lg:py-0',
      'rounded-lg',
    ].join(' ')

    return (
      <li
        key={idx}
        className={listItemClassNames}
      >
        {li.href && (
          <Link
            className={linkComponentClassNames}
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

  const headingSectionClassNames = [
    `${colors[cdx][1]}`,
    'text-base',
    'px-8',
    'py-8',
    'rounded-t-xl',
  ].join(' ')

  const headingClassNames = [
    `${colors[cdx][2]}`,
    'text-2xl',
    'md:text-xl',
    'font-mono',
    'lg:text-3xl',
    'lowercase',
    'text-center',
    'py-0',
  ].join(' ')

  const dataSectionClassNames = [
    'text-center',
    'lg:text-left',
    'rounded-b-xl',
    'pt-1',
    'bg-mantle',
    `${colors[cdx][0]}`,
    'border-b-2',
    'border-l-2',
    'border-r-2',
    'border-t-transparent',
    'h-fit',
    'grid-row',
  ].join(' ')

  return (
    <div className="mb-10 lg:mb-px">
      <section className={headingSectionClassNames}>
        <h4
          id={`${title.replace('/', '')}`}
          className={headingClassNames}
        >
          {title}
        </h4>
      </section>
      {data && (
        <section className={dataSectionClassNames}>
          <ul className="px-8 pb-6">{listItems}</ul>
        </section>
      )}
    </div>
  )
}
