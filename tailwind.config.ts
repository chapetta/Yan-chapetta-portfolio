import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#f5f5f5',
        primary: {
          DEFAULT: '#5C6CFF',
          foreground: '#0f172a'
        },
        accent: {
          DEFAULT: '#14b8a6',
          foreground: '#022c22'
        },
        muted: '#0f172a',
        subtle: '#1e293b'
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow-primary': '0 0 35px rgba(92, 108, 255, 0.35)',
        'glow-accent': '0 0 25px rgba(20, 184, 166, 0.35)'
      },
      backgroundImage: {
        'noise-texture':
          'radial-gradient(circle at 20% 20%, rgba(92,108,255,0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(20,184,166,0.25), transparent 55%), radial-gradient(circle at 50% 80%, rgba(14,165,233,0.2), transparent 65%)'
      }
    }
  },
  plugins: []
}

export default config
