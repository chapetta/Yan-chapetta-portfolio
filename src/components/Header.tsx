import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { navItems } from '../utils/content'

const INTERSECTION_THRESHOLD = 0.55
const HEADER_SHADOW_SCROLL = 32

export function Header() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? 'hero')
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sectionElements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= INTERSECTION_THRESHOLD) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: [0.45, INTERSECTION_THRESHOLD, 0.85] }
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleScroll = () => {
      setHasShadow(window.scrollY > HEADER_SHADOW_SCROLL)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigate = (id: string) => (event?: MouseEvent<HTMLElement>) => {
    event?.preventDefault()

    if (typeof window === 'undefined') {
      return
    }

    const target = document.getElementById(id)
    if (!target) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    })
  }

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl transition-shadow duration-300',
        hasShadow ? 'shadow-lg shadow-slate-950/40' : 'shadow-none'
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-5">
        <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
          <a
            href="#hero"
            onClick={handleNavigate('hero')}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Voltar ao início do portfólio"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/30 text-sm font-bold text-white">
              YC
            </span>
            Yan Chapetta
          </a>
          <a
            href="mailto:cha.petta@hotmail.com"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors hover:border-primary/60 hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:inline-flex"
          >
            Disponível para projetos
          </a>
        </div>
        <nav
          aria-label="Seções do site"
          className="relative -mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1 text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navItems.map((item) => {
            const isActive = item.id === activeSection
            return (
              <button
                key={item.id}
                type="button"
                onClick={handleNavigate(item.id)}
                className={clsx(
                  'relative flex-shrink-0 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                  isActive
                    ? 'bg-primary/30 text-white shadow-glow-primary'
                    : 'hover:bg-white/5 hover:text-white/90'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <span
                  className={clsx(
                    'absolute inset-x-4 -top-1 h-1 rounded-full bg-accent/80 opacity-0 transition-opacity',
                    isActive && 'opacity-100'
                  )}
                />
                <span className="relative whitespace-nowrap">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
