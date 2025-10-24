import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const STORAGE_KEY = 'yanchapetta-theme'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const html = document.documentElement
    if (isDark) {
      html.classList.add('dark')
      window.localStorage.setItem(STORAGE_KEY, 'dark')
    } else {
      html.classList.remove('dark')
      window.localStorage.setItem(STORAGE_KEY, 'light')
    }
  }, [isDark])

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/60 bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 transition-colors duration-300 hover:border-accent/40 hover:bg-accent/20 hover:text-surface-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {isDark ? <Moon size={16} aria-hidden /> : <Sun size={16} aria-hidden />}
      {isDark ? 'Dark' : 'Light'}
    </button>
  )
}
