import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { SectionHeader } from '../components/SectionHeader'
import { focusCurrent, focusFuture, skills, softSkillChips } from '../utils/content'
import { fadeIn } from '../utils/motion'

const tabs = ['Frontend', 'Backend', 'Outros'] as const
type TabKey = (typeof tabs)[number]

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>('Frontend')

  const groupedTechnologies = useMemo(() => {
    return skills.reduce<Record<TabKey, { name: string; iconUrl: string }[]>>(
      (acc, skill) => {
        const group: TabKey =
          skill.category === 'Frontend'
            ? 'Frontend'
            : skill.category === 'Backend'
              ? 'Backend'
              : 'Outros'

        acc[group] = acc[group] ?? []
        acc[group].push({ name: skill.name, iconUrl: skill.iconUrl })
        return acc
      },
      {
        Frontend: [],
        Backend: [],
        Outros: []
      }
    )
  }, [])

  const technologies = groupedTechnologies[activeTab]

  return (
    <section
      id="stack"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-35" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="stack principal"
          title="Tecnologias que uso no dia a dia"
          description="Organizei a stack em frentes para facilitar a leitura: selecione uma categoria e veja rapidamente onde concentro experiência e estudos."
        />

        <div className="grid grid-cols-12 gap-y-10 gap-x-8">
          <motion.div
            variants={fadeIn('up', 0.05, 0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/30 sm:p-8">
              <div className="flex flex-wrap gap-3">
                {tabs.map((tab) => {
                  const isActive = tab === activeTab
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={clsx(
                        'cursor-pointer rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] transition-colors',
                        isActive
                          ? 'bg-primary/30 text-white shadow-glow-primary'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                      )}
                    >
                      {tab}
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((tech) => (
                  <div
                    key={`${activeTab}-${tech.name}`}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-950/70 p-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                      <img
                        src={tech.iconUrl}
                        alt={tech.name}
                        className="h-7 w-7 object-contain"
                        loading="lazy"
                      />
                    </span>
                    <span className="text-base font-medium text-slate-200">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.08, 0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Foco atual</h3>
              <p className="mt-2 text-base text-slate-300">
                Tenho priorizado aprofundar conceitos avançados e aplicação prática desta stack nos projetos mais recentes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {focusCurrent.map((item) => (
                  <span
                    key={`current-${item}`}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.11, 0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Foco futuro</h3>
              <p className="mt-2 text-base text-slate-300">
                Áreas que estão no meu radar para expandir a atuação e combinar com o que já domino hoje.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {focusFuture.map((item) => (
                  <span
                    key={`future-${item}`}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.14, 0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 sm:p-8">
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Soft skills</h3>
              <p className="mt-2 text-base text-slate-300">
                Competências comportamentais que sustentam o trabalho colaborativo e a entrega consistente em squads.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {softSkillChips.map((skill) => (
                  <span
                    key={`soft-${skill}`}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
