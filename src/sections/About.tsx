import { motion } from 'framer-motion'
import { BrainCircuit, Sparkles } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { aboutParagraphs, heroStack, softSkills } from '../utils/content'
import { fadeIn, staggerContainer } from '../utils/motion'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 opacity-60 blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="sobre mim"
          title="Crio experiências digitais fluidas combinando tecnologia e design"
          description="Direto do Rio de Janeiro, Yan Chapetta é um desenvolvedor front-end que une motion design, arquitetura limpa e código tipado para produzir interfaces memoráveis."
        />

        <motion.div
          variants={staggerContainer(0.18, 0.1)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          className="grid grid-cols-12 gap-10"
        >
          <motion.div
            variants={fadeIn('up', 0.1)}
            className="col-span-12 space-y-6 text-base leading-relaxed text-slate-600 transition-colors dark:text-slate-300 lg:col-span-7"
          >
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="noise-overlay relative mt-8 rounded-3xl border border-surface-light-muted/70 bg-white/70 p-6 transition-colors dark:border-white/5 dark:bg-slate-900/60">
              <div className="absolute -top-8 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/40">
                <Sparkles className="text-white" size={22} />
              </div>
              <p className="max-w-xl text-lg font-semibold text-slate-900 transition-colors dark:text-white">
                "Meu objetivo é transformar requisitos complexos em jornadas intuitivas, com microinterações que contam histórias e performance de primeira."
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-slate-400">
                foco em produto e experiência
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.2)} className="col-span-12 space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-surface-light-muted/70 bg-white/70 p-6 transition-colors dark:border-white/5 dark:bg-slate-900/40">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-slate-400">
                <BrainCircuit size={20} className="text-primary" />
                soft skills
              </div>
              <ul className="mt-5 space-y-4">
                {softSkills.map((skill) => (
                  <li
                    key={skill.title}
                    className="rounded-2xl border border-surface-light-muted/70 bg-white/80 p-4 transition-colors dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-base font-semibold text-slate-900 transition-colors dark:text-white">
                      {skill.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 transition-colors dark:text-slate-300">
                      {skill.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-surface-light-muted/70 bg-gradient-to-br from-white/80 via-transparent to-white/60 p-6 transition-colors dark:border-white/5 dark:from-white/10 dark:to-white/5">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-slate-400">
                stack em destaque
              </p>
              <div className="mt-5 flex flex-wrap gap-4">
                {heroStack.map((stack) => (
                  <div
                    key={stack.name}
                    className="flex items-center gap-3 rounded-full border border-surface-light-muted/70 bg-white/80 px-4 py-2 transition-colors dark:border-white/10 dark:bg-slate-950/60"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                      <img src={stack.iconUrl} alt={stack.name} className="h-6 w-6" loading="lazy" />
                    </span>
                    <span className="text-sm font-medium text-slate-700 transition-colors dark:text-white">
                      {stack.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
