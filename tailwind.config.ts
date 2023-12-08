import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-righteous)'],
        sans: ['var(--font-hepta)'],
        mono: ['var(--font-mplus2m)'],
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: false,
      defaultFlavour: 'mocha',
    }),
  ],
}
export default config
