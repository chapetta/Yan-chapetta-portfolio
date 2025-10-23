import type { ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      className={clsx('max-w-3xl', className)}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-300">{description}</p>
      ) : null}
    </motion.div>
  )
}
