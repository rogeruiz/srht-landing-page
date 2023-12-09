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

import List from './components/list'
import { getDaily, getSkills } from './lib/fetch-links'

export default async function Home() {
  const linkData = await getDaily()
  const skillData = await getSkills()

  return (
    <main className="bg-base text-text min-h-screen p-8 md:p-24">
      <section className="md:grid grid-cols-4 gap-4">
        <List title="daily links" data={linkData.daily} />
        <List title="programming languages" data={skillData.languages} />
        <List title="frameworks" data={skillData.frameworks} />
        <List title="package managers" data={skillData.package_managers} />
        <List title="configuration languages" data={skillData.configuration} />
      </section>
      <p className="mt-16">Roger Steve Ruiz is a software engineer</p>
    </main>
  )
}
