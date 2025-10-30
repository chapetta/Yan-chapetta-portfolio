import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { navItems } from '../utils/content'

const SCROLL_RATIO_VISIBLE = 0.55

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? 'hero')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const headerHeight = document.getElementById('site-header')?.offsetHeight ?? 0
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sectionElements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= SCROLL_RATIO_VISIBLE) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: [0.35, SCROLL_RATIO_VISIBLE, 0.85],
        rootMargin: `-${headerHeight + 8}px 0px -55% 0px`
      }
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (id: string) => (event?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event?.preventDefault()

    if (typeof window === 'undefined') {
      return
    }

    const target = document.getElementById(id)
    if (!target) return

    setActiveSection(id)

    const headerHeight = document.getElementById('site-header')?.offsetHeight ?? 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }

  return (
    <>
      <header
        id="site-header"
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
      >
        <div className="mx-auto hidden w-full max-w-6xl items-center justify-between px-6 py-3 lg:px-10 md:flex">
          <button
            type="button"
            onClick={handleNavigate('hero')}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-primary/50 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Voltar ao início"
          >
            <span className="sr-only">Voltar ao início</span>
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-primary via-sky-500 to-accent" />
          </button>

          <nav
            aria-label="Navegação principal desktop"
            className="flex items-center gap-2"
          >
            {navItems.map((item) => {
              const isActive = item.id === activeSection
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={handleNavigate(item.id)}
                  className={clsx(
                    'group relative cursor-pointer rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] transition-colors',
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative whitespace-nowrap">{item.label}</span>
                  <span
                    className={clsx(
                      'pointer-events-none absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-primary/80 opacity-0 transition-opacity group-hover:opacity-60',
                      isActive && 'opacity-100'
                    )}
                  />
                </button>
              )
            })}
          </nav>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5">
            <span className="sr-only">Contato rápido</span>
            <span aria-hidden className="text-lg">✦</span>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-2.5 md:hidden">
          <button
            type="button"
            onClick={handleNavigate('hero')}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Voltar ao início"
          >
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-primary via-sky-500 to-accent" />
          </button>
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
            Yan Chapetta
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300">
            ☾
          </span>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center md:hidden">
        <nav
          aria-label="Navegação principal mobile"
          className="flex w-[92%] max-w-xl items-center justify-between gap-1 rounded-full border border-white/10 bg-slate-950/85 px-3 py-2 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl"
        >
          {navItems.map((item) => {
            const isActive = item.id === activeSection
            return (
              <button
                key={item.id}
                type="button"
                onClick={handleNavigate(item.id)}
                className={clsx(
                  'group relative flex flex-1 items-center justify-center gap-1 rounded-full px-3 py-1.5 text-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer',
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                )}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <span aria-hidden>{item.icon}</span>
                <span className="sr-only">{item.label}</span>
                <span
                  className={clsx(
                    'pointer-events-none absolute inset-x-4 -top-2 h-1 rounded-full bg-primary/70 opacity-0 transition-opacity duration-200',
                    isActive && 'opacity-100'
                  )}
                />
                <span
                  className="pointer-events-none absolute -top-9 rounded-full border border-white/10 bg-slate-900/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  role="presentation"
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
