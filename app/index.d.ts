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

export type Item = {
  name: string
  href: string
  desc: string
}

export type Dailies = {
  daily: Item[]
}

export type Skills = {
  languages: Item[]
  frameworksLibraries: Item[]
  packageManagers: Item[]
  configurationApis: Item[]
  testing: Item[]
  versionControl: Item[]
  operatingSystems: Item[]
  devopsCloud: Item[]
}

export type Quote = {
  say: string
  author: string
  response: string
}

export type Fortunes = {
  quotes: Quote[]
}
