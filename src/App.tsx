import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Testimonials } from './sections/Testimonials'
import { Header } from './components/Header'
import { ScrollProgress } from './components/ScrollProgress'
import { FloatingWhatsapp } from './components/FloatingWhatsapp'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface font-sans text-surface-foreground antialiased">
      <ScrollProgress />
      <Header />
      <FloatingWhatsapp />
      <main className="relative pt-24 sm:pt-28 lg:pt-32">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
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
