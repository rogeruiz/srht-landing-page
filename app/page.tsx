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

import Image from 'next/image'
import List from './components/list'
import Fortune from './components/fortune'
import { getDailys, getSkills, getFortunes } from './lib/fetch-links'

const description = `Hi! My name's Roger Steve Ruiz, pronouns he/him, and I've
been a software engineer since 2011. I started working remotely back in 2013
too and really enjoy the freedom and responsibility of working asynchronously.
You've landed on my little page. I use this page as a personal homepage, but it
also includes a number of other details like programming langauges & frameworks
that I have experience in as well.`

interface Quote {
  author: string
  say: string
}

interface Fortunes extends Array<Quote> {}

interface Link {
  name: string
  href: string
  desc: string
}

interface Dailies {
  daily: Link[]
}
interface Skills {
  languages: Link[]
  frameworksLibraries: Link[]
  packageManagers: Link[]
  configurationLanguages: Link[]
}

interface Quote {
  say: string
  author: string
}

interface Fortunes {
  quotes: Quote[]
}

export default async function Home() {
  const linkData: Dailies = await getDailys()
  const skillData: Skills = await getSkills()
  const fortuneData: Fortunes = await getFortunes()

  return (
    <main className="bg-base text-text min-h-screen p-8 md:p-12 lg:p-24">
      <section className="flex flex-col items-center justify-between mb-10">
        <Fortune data={fortuneData.quotes} />
      </section>
      <section className="md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 mb-10">
        <List title="the dailies" data={linkData.daily} />
        <List title="programming languages" data={skillData.languages} />
        <List
          title="frameworks & libraries"
          data={skillData.frameworksLibraries}
        />
        <List title="package managers" data={skillData.packageManagers} />
        <List
          title="configuration languages"
          data={skillData.configurationLanguages}
        />
      </section>
      <section className="lg:grid lg:grid-cols-2 lg:gap-4">
        <hr className="mb-10 h-px bg-surface2 border-0 lg:mb-2 lg:col-start-2" />
        <Image
          className="float-left mr-6 mb-6 lg:mb-0 lg:col-start-2 rounded-full"
          width="120"
          height="120"
          src="images/headshot-2021.jpg"
          alt="Roger Steve Ruiz headshot"
        />
        <p className="lg:col-start-2">{description}</p>
      </section>
    </main>
  )
}
