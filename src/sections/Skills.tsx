import { motion } from 'framer-motion'
import { Cpu, Sparkles } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { SkillCard } from '../components/SkillCard'
import { hardSkills, skills, softSkills } from '../utils/content'
import { fadeIn } from '../utils/motion'

const categories = Array.from(new Set(skills.map((skill) => skill.category)))

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="habilidades técnicas"
          title="Bases sólidas para entregar produtos consistentes"
          description="Do design system ao deploy, Yan Chapetta domina a stack moderna necessária para construir experiências completas e confiáveis."
        />

        <div className="grid grid-cols-12 gap-8">
          <motion.div
            variants={fadeIn('up', 0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12 grid gap-5 md:grid-cols-2 lg:col-span-8"
          >
            {skills.map((skill, index) => (
              <SkillCard key={`${skill.category}-${skill.name}`} skill={skill} index={index} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="col-span-12 space-y-6 lg:col-span-4"
          >
            <div className="rounded-3xl border border-surface-light-muted/70 bg-white/70 p-6 transition-colors dark:border-white/5 dark:bg-slate-900/40">
              <div className="flex.items-center gap-3 text-sm uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-slate-400">
                <Cpu size={20} className="text-primary" />
                fluidez técnica
              </div>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 transition-colors dark:text-slate-300">
                {categories.map((category) => (
                  <li key={category} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
                    <span>
                      <strong className="block font-semibold text-slate-800 transition-colors dark:text-white">
                        {category}
                      </strong>
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => skill.name)
                        .join(' · ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-surface-light-muted/70 bg-white/70 p-6 transition-colors dark:border-white/5 dark:bg-slate-900/40">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-slate-400">
                foco atual de estudo
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 transition-colors dark:text-slate-300">
                {hardSkills.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                    <span>
                      <strong className="block font-semibold text-slate-800 transition-colors dark:text-white">
                        {skill.name}
                      </strong>
                      <span className="text-xs uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
                        {skill.level}
                      </span>
                      <span className="mt-1 block leading-snug text-slate-600 transition-colors dark:text-slate-300">
                        {skill.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shine-border relative rounded-3xl border border-white/5 bg-slate-900/60 p-6">
              <Sparkles size={20} className="mb-4 text-accent" />
              <p className="text-lg font-semibold text-white">
                Combino storytelling visual com performance, entregando interfaces que ganham vida em qualquer device.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Motion design, prototipação rápida e integrações com ferramentas de automação fazem parte do meu dia a dia.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12 mt-6"
          >
            <h3 className="text-sm uppercase tracking-[0.4em] text-slate-500 transition-colors dark:text-slate-400">
              soft skills
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {softSkills.map((skill) => (
                <div
                  key={`soft-${skill.title}`}
                  className="rounded-2xl border border-surface-light-muted/70 bg-white/70 p-4 text-sm text-slate-600 transition-transform duration-300 hover:-translate-y-1 transition-colors dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300"
                >
                  <p className="font-semibold text-slate-800 transition-colors dark:text-white">
                    {skill.title}
                  </p>
                  <p className="mt-2 leading-snug">{skill.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
