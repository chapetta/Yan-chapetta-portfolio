import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { Skill } from '../types/content'
import { fadeIn } from '../utils/motion'

const levelWidth: Record<Skill['level'], string> = {
  Avançado: 'w-[92%]',
  'Intermediário': 'w-[72%]',
  Iniciante: 'w-[48%]'
}

export type SkillCardProps = {
  skill: Skill
  index: number
}

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.08, 0.65)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      className={clsx(
        'group flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10',
        skill.highlight && 'border-primary/60 bg-primary/10 shadow-glow-primary'
      )}
      aria-label={`Habilidade ${skill.name} nível ${skill.level}`}
    >
      <div className="flex items-center gap-3">
        <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-slate-900/80">
          <img
            src={skill.iconUrl}
            alt={skill.name}
            className="h-8 w-8 object-contain transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </span>
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-400">{skill.category}</p>
          <p className="text-lg font-semibold text-white">{skill.name}</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
          <span>Nível</span>
          <span>{skill.level}</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-white/10" aria-hidden>
          <div
            className={clsx(
              'h-full rounded-full bg-gradient-to-r from-primary via-sky-500 to-accent transition-all duration-500',
              levelWidth[skill.level]
            )}
          />
        </div>
      </div>
    </motion.div>
  )
}
