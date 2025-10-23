import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDownRight,
  Download,
  Sparkles,
  Sparkles as SparklesIcon
} from 'lucide-react'
import { Typewriter } from '../components/Typewriter'
import { heroMetrics, heroStack, resumeUrl } from '../utils/content'
import { fadeIn, scaleIn, staggerContainer } from '../utils/motion'
import profileImage from '../assets/yan-chapetta.jpeg'

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  // Parallax effect keeps the background subtly moving on scroll without impacting content readability.
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -140])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-28 sm:px-10 lg:px-16"
      aria-label="Introdução do portfólio de Yan Chapetta"
    >
      <motion.div
        style={{ y: parallaxY }}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-16 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-primary/30 via-sky-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-180px] right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-bl from-emerald-500/25 via-cyan-500/20 to-transparent blur-3xl" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="hero-grid h-full w-full"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer(0.25, 0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row"
      >
        <div className="flex-1 space-y-8">
          <motion.span
            variants={fadeIn('down', 0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-300"
          >
            <Sparkles size={16} className="text-accent" />
            front-end focado em produto
          </motion.span>

          <div className="space-y-6">
            <motion.h1
              variants={fadeIn('up', 0.05)}
              className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.1]"
            >
              Olá, eu sou <span className="text-accent">Yan Chapetta 👋</span>
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.09)}
              className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-300"
            >
              Desenvolvedor Front-End
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.12)}
              className="flex flex-wrap items-center gap-3 text-base text-slate-200 sm:text-lg"
            >
              <Typewriter
                phrases={[
                  'React + TypeScript + Tailwind CSS',
                  'Node.js + Prisma no back-end',
                  'Projetos pessoais focados em performance',
                  'Disponível para remoto e presencial'
                ]}
                className="font-medium text-white"
                typingSpeed={70}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.18)}
              className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              Estudante de Desenvolvimento Web Full Stack (Dev em Dobro) com formações pela Trybe e
              DevQuest, unindo base de Marketing à criação de interfaces Vite + React. Minha rotina
              diária combina sprints enxutas, documentação clara e entrega de aplicações performáticas.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn('up', 0.25)}
            className="flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start"
          >
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-primary/60 bg-gradient-to-r from-primary/40 via-primary/30 to-accent/40 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-500 hover:shadow-glow-primary sm:w-auto"
            >
              Ver projetos
              <ArrowDownRight size={18} aria-hidden />
            </button>
            <a
              href={resumeUrl}
              download
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:border-accent/60 hover:bg-accent/20 sm:w-auto"
              aria-label="Baixar currículo em PDF"
            >
              <Download size={18} aria-hidden />
              Baixar CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.32)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
              >
                <p className="text-3xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-1 text-sm text-slate-300">{metric.caption}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('left', 0.2)}
          className="relative flex flex-1 items-center justify-center"
        >
          <motion.div
            variants={scaleIn}
            className="relative w-full max-w-[420px] rounded-[2.5rem] border border-white/10 bg-slate-900/50 p-8 text-left backdrop-blur-xl shadow-glow-primary"
          >
            <div className="absolute -top-14 right-0 h-36 w-36 rounded-full bg-primary/30 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem]">
                <img
                  src={profileImage}
                  alt="Retrato profissional de Yan Chapetta"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white">
                  <SparklesIcon size={16} className="text-accent" />
                  Yan Chapetta
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.4em] text-slate-400">Principais stacks</p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Aplicações front-end modernas para projetos reais
            </p>
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-6 grid grid-cols-3 gap-4"
            >
              {heroStack.map((stack, index) => (
                <motion.div
                  key={stack.name}
                  variants={fadeIn('up', index * 0.06)}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/60">
                    <img src={stack.iconUrl} alt={stack.name} className="h-7 w-7" />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">{stack.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
