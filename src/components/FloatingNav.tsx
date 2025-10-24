import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { navItems } from '../utils/content'
import { fadeIn } from '../utils/motion'
import { ThemeToggle } from './ThemeToggle'

const SCROLL_THRESHOLD = 0.55

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? 'hero')
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > SCROLL_THRESHOLD) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: [0.4, 0.6, 0.8]
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsPinned(window.scrollY > 48)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavigate = (id: string) => () => {
    const element = document.getElementById(id)
    if (!element) return

    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.nav
        variants={fadeIn('down', 0.1)}
        initial="initial"
        animate="animate"
        className={clsx(
          'fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 rounded-full border border-surface-light-muted/60 bg-white/70 px-5 py-2 text-slate-700 backdrop-blur-md transition-all duration-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 sm:flex',
          isPinned ? 'shadow-xl shadow-black/20 dark:shadow-black/40' : 'shadow-none'
        )}
      >
        <ul className="flex items-center gap-2 text-sm text-slate-700 transition-colors dark:text-slate-200">
          {navItems.map((item) => {
            const isActive = item.id === activeSection
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={handleNavigate(item.id)}
                  className={clsx(
                    'relative rounded-full px-3 py-1.5 transition-colors duration-300',
                    isActive
                      ? 'bg-primary/20 text-surface-foreground shadow-glow-primary dark:text-white'
                      : 'hover:bg-white/50 dark:hover:bg-white/10'
                  )}
                >
                  {item.label}
                </button>
              </li>
            )
          })}
          <li className="pl-3">
            <ThemeToggle />
          </li>
        </ul>
      </motion.nav>

      <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center sm:hidden">
        <div className="flex w-[92%] max-w-xl items-center justify-between rounded-full border border-surface-light-muted/60 bg-white/80 px-4 py-2.5 text-slate-700 shadow-2xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">
          {navItems.map((item) => {
            const isActive = item.id === activeSection
            return (
              <button
                key={item.id}
                type="button"
                onClick={handleNavigate(item.id)}
                className={clsx(
                  'relative flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-slate-600 transition-colors duration-300 dark:text-slate-300',
                  isActive && 'text-surface-foreground dark:text-white'
                )}
              >
                <span
                  className={clsx(
                    'absolute -top-2 h-1 w-8 rounded-full bg-primary/70 transition-opacity duration-300',
                    isActive ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
      <div className="fixed right-4 top-[4.5rem] z-50 sm:hidden">
        <ThemeToggle />
      </div>
    </>
  )
}
