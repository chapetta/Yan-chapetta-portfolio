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
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div variants={fadeIn('up', 0.1)} className="space-y-6 text-base text-slate-300">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="noise-overlay relative mt-8 rounded-3xl border border-white/5 bg-slate-900/60 p-6">
              <div className="absolute -top-8 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/40">
                <Sparkles className="text-white" size={22} />
              </div>
              <p className="max-w-xl text-lg font-semibold text-white">
                "Meu objetivo é transformar requisitos complexos em jornadas intuitivas, com microinterações que contam histórias e performance de primeira."
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.4em] text-slate-400">
                foco em produto e experiência
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn('left', 0.2)} className="space-y-6">
            <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-slate-400">
                <BrainCircuit size={20} className="text-accent" />
                soft skills
              </div>
              <ul className="mt-5 space-y-4">
                {softSkills.map((skill) => (
                  <li key={skill.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                    <p className="text-base font-semibold text-white">{skill.title}</p>
                    <p className="mt-2 text-sm text-slate-300">{skill.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">stack em destaque</p>
              <div className="mt-5 flex flex-wrap gap-4">
                {heroStack.map((stack) => (
                  <div
                    key={stack.name}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                      <img src={stack.iconUrl} alt={stack.name} className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-medium text-white">{stack.name}</span>
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
