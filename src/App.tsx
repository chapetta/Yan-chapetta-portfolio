import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Testimonials } from './sections/Testimonials'
import { FloatingNav } from './components/FloatingNav'
import { ScrollProgress } from './components/ScrollProgress'
import { FloatingWhatsapp } from './components/FloatingWhatsapp'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface-light font-sans text-surface-light-foreground transition-colors duration-300 dark:bg-surface dark:text-surface-foreground">
      <ScrollProgress />
      <FloatingNav />
      <FloatingWhatsapp />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <footer className="px-6 pb-10 text-sm text-slate-600 transition-colors duration-300 sm:px-10 lg:px-16 dark:text-slate-400">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 border-t border-surface-light-muted pt-6 transition-colors dark:border-white/5 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Yan Chapetta. Projetado e desenvolvido com React, Tailwind CSS e Framer Motion.
          </p>
          <p className="text-slate-400">Construído para destacar animações, performance e storytelling.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
