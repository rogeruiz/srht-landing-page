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

interface Link {
  name: string
  href: string
  desc: string
}

interface Links extends Array<Link> {}

export default function List({ title, data }: { title: string; data: Links }) {
  const listItems = data.map((li: Link, idx: number) => {
    return (
      <li key={idx} className="list-none md:hover:list-disc my-1">
        {li.href && (
          <a
            className="underline text-yellow hover:text-teal visited:text-lavender block"
            href={li.href}
            title={li.desc}
            target="_blank"
            rel="noopener noreferrer"
          >
            {li.name}
          </a>
        )}
        {!li.href && li.name}
      </li>
    )
  })

  return (
    <div className="bg-mantle p-8 rounded mb-10 lg:mb-0">
      <h4 className="text-overlay2 shadow-surface2 text-2xl md:text-lg lg:text-xl font-display uppercase mb-5">
        {title}
      </h4>
      <ul className="mb-12">{listItems}</ul>
    </div>
  )
}
