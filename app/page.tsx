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

import type { Dailies, Skills, Fortunes } from './index.d.ts'

import dynamic from 'next/dynamic'

import { FortuneLoader } from './components/fortune'

const Fortune = dynamic(() => import('./components/fortune'), {
  loading: () => <FortuneLoader />,
  ssr: false,
})

import Image from 'next/image'
import List from './components/list'
import { getDailys, getSkills, getFortunes } from './lib/fetch-links'
import Footer from './components/footer'

const description = `Hi! My name's Roger Steve Ruiz, pronouns he/him, & I've
been a software engineer since 2011. I've been working remotely since 2013. I
use this page as a personal homepage. It's also an active list of the
technologies that I have experience working with.`

export default async function Home() {
  const linkData: Dailies = await getDailys()
  const skillData: Skills = await getSkills()
  const fortuneData: Fortunes = await getFortunes()

  const listContainerStyles = [
    'md:grid',
    'md:content-center',
    'md:grid-cols-2',
    'md:gap-2',
    'lg:auto-cols-min',
    'lg:auto-rows-min',
    'lg:grid-cols-3',
    'lg:grid-flow-dense',
    'lg:gap-3',
    'mb-10',
  ].join(' ')

  return (
    <main className="bg-base text-text min-h-screen p-8 md:p-12 lg:p-24">
      <section className="flex flex-col items-center justify-between mb-10">
        <Fortune data={fortuneData.quotes} />
      </section>
      <section className={listContainerStyles}>
        <List title="/href" data={linkData.daily} />
        <List title="/lang" data={skillData.languages} />
        <List title="/lib" data={skillData.frameworksLibraries} />
        <List title="/api" data={skillData.configurationApis} />
        <List title="/os" data={skillData.operatingSystems} />
        <List title="/cloud" data={skillData.devopsCloud} />
        <List title="/test" data={skillData.testing} />
        <List title="/vcs" data={skillData.versionControl} />
        <List title="/pkgs" data={skillData.packageManagers} />
      </section>
      <section className="lg:grid lg:grid-cols-2 lg:gap-4">
        <section className="lg:col-start-2 flex flex-col lg:flex-row">
          <hr className="lg:hidden mb-5 h-px bg-surface2 border-0" />
          <Image
            className="mb-6 self-center flex-none lg:self-start lg:mr-6 rounded-full"
            width="128"
            height="128"
            src="images/headshot-2025.png"
            alt="Roger Steve Ruiz headshot"
          />
          <p className="col-start-2">{description}</p>
          <hr className="lg:hidden mt-5 h-px bg-surface2 border-0" />
        </section>
        <Footer />
      </section>
    </main>
  )
}
