import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Certificates } from './sections/Certificates'
import { FloatingNav } from './components/FloatingNav'
import { ScrollProgress } from './components/ScrollProgress'
import { FloatingWhatsapp } from './components/FloatingWhatsapp'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface font-sans text-surface-foreground antialiased">
      <ScrollProgress />
      <FloatingNav />
      <FloatingWhatsapp />
      <main className="relative pt-12 pb-28 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-36">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <footer className="px-5 pb-10 text-sm text-slate-400 sm:px-8 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-pretty">
            © {new Date().getFullYear()} Yan Chapetta. Projetado e desenvolvido com React, Tailwind CSS e Framer Motion.
          </p>
          <p className="text-slate-500">Construído para destacar animações, performance e storytelling.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
