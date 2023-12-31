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

import path from 'path'
const read = require('fs-read-data').readFile

export async function getDailys() {
  const filePath = path.join(process.cwd(), 'app/data/links.toml')
  return await read(filePath)
}

export async function getSkills() {
  const filePath = path.join(process.cwd(), 'app/data/skills.toml')
  return await read(filePath)
}

export async function getFortunes() {
  const filePath = path.join(process.cwd(), 'app/data/fortunes.toml')
  return await read(filePath)
}
