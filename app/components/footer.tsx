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

export default function Footer() {
  return (
    <footer className="col-span-2 text-overlay2 text-center mt-14 py-5">
      <ul>
        <li>2011 – {new Date().getFullYear()} Roger Steve Ruiz</li>
        <li>
          Built with{' '}
          <Link
            className="underline hover:no-underline"
            href="https://bun.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bun
          </Link>
          ,{' '}
          <Link
            className="underline hover:no-underline"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </Link>
          ,{' '}
          <Link
            className="underline hover:no-underline"
            href="https://typescript.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </Link>
          , &{' '}
          <Link
            className="underline hover:no-underline"
            href="http://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </Link>
        </li>
        <li>
          Automatically deployed on{' '}
          <Link
            className="underline hover:no-underline"
            href="https://srht.site/"
            target="_blank"
            rel="noopener noreferrer"
            title="sourcehut pages is a tool which allows you to publish static websites."
          >
            sourcehut Pages
          </Link>
        </li>
      </ul>
    </footer>
  )
}
