import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:        '#0C0D12',
        surface:   '#111318',
        surface2:  '#161820',
        border:    '#1E2130',
        accent:    '#22D3EE',
        violet:    '#A78BFA',
        text: {
          DEFAULT: '#F4F4F5',
          2:       '#C4C7D4',
          muted:   '#8B8FA3',
          dim:     '#5A5E72',
        },
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
