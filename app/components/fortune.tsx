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
'use client'

import type { Quote } from '../index.d.ts'

const colors: string[][] = [
  ['text-mauve', 'bg-mauve'],
  ['text-yellow', 'bg-yellow'],
  ['text-lavender', 'bg-lavender'],
  ['text-teal', 'bg-teal'],
  ['text-flamingo', 'bg-flamingo'],
  ['text-sky', 'bg-sky'],
  ['text-rosewater', 'bg-rosewater'],
  ['text-sapphire', 'bg-sapphire'],
  ['text-maroon', 'bg-maroon'],
]

const jdx: number = Math.floor(Math.random() * colors.length)

const fortuneBaseStyles: string = [
  'bg-mantle',
  'border-crust',
  'border',
  'p-8',
  'lg:mb-0',
  'max-w-3xl',
  'transition-all',
  'duration-700',
  'ease-in-out',
].join(' ')

import React, { useEffect, useState } from 'react'

const Fortune = function Fortune({ data }: { data: Quote[] }): JSX.Element {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * data.length))
  const [charIdx, setCharIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>('typing')
  const charDelay = 64 // ms per character

  useEffect(() => {
    setCharIdx(0)
    setPhase('typing')
  }, [idx, data])

  useEffect(() => {
    let charInterval: NodeJS.Timeout | undefined
    let waitTimeout: NodeJS.Timeout | undefined
    const quote = data[idx]
    const len = quote.say.length
    if (paused) return
    if (phase === 'typing' && charIdx < len) {
      charInterval = setInterval(() => {
        setCharIdx(prev => {
          if (prev < len - 1) {
            return prev + 1
          } else {
            clearInterval(charInterval)
            setPhase('waiting')
            return prev + 1
          }
        })
      }, charDelay)
    } else if (phase === 'waiting') {
      waitTimeout = setTimeout(() => {
        setPhase('deleting')
      }, 2000)
    } else if (phase === 'deleting' && charIdx > 0) {
      charInterval = setInterval(() => {
        setCharIdx(prev => {
          if (prev > 1) {
            return prev - 1
          } else {
            clearInterval(charInterval)
            setIdx(i => (i + 1) % data.length)
            setPhase('typing')
            return 0
          }
        })
      }, charDelay / 2)
    }
    return () => {
      if (charInterval) clearInterval(charInterval)
      if (waitTimeout) clearTimeout(waitTimeout)
    }
  }, [charIdx, phase, paused, data, idx])

  const quote: Quote = data[idx]

  return (
    <div
      className={fortuneBaseStyles}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <blockquote className="text-subtext0 text-2xl md:text-3xl font-sans">
        {quote.say.slice(0, charIdx)}
        <span className="inline-block animate-pulse w-2">{phase === 'typing' && charIdx < quote.say.length ? '|' : ' '}</span>
      </blockquote>
      {(quote.response || quote.author) && (
        <h5
          className={`${colors[jdx][0]} font-display text-sm md:text-lg mt-5 uppercase`}
        >
          {quote.author && (
            <>
              <code className={colors[jdx][0]}> </code> {quote.author}
            </>
          )}
          {quote.response && quote.response}
        </h5>
      )}
    </div>
  )
}

const FortuneLoader = function(): JSX.Element {
  return <div className={`${fortuneBaseStyles} w-full lg:w-[800px]`}>
    <div className="animate-pulse rounded-md bg-crust h-[26px] lg:h-[36px] w-full"></div>
    <div className="animate-pulse rounded-md bg-crust mt-[10px] h-[26px] lg:h-[36px] w-3/4"></div>
    <div className={`animate-pulse rounded-md bg-crust mt-5 h-[14px] lg:h-[28px] w-1/4`}></div>
  </div>
}

export { FortuneLoader }
export default Fortune
