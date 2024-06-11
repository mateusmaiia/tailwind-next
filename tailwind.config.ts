import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: '320px 1fr',
      },
      colors: {
        maia: '#8257e6',
      },
    },
  },
  plugins: [],
}
export default config
