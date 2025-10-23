import { Github, Globe, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { Project } from '../types/content'
import { fadeIn } from '../utils/motion'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const delay = 0.15 * index

  return (
    <motion.article
      variants={fadeIn(index % 2 === 0 ? 'up' : 'left', delay)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 shadow-[0_18px_45px_rgba(5,5,5,0.45)] transition-transform duration-500 hover:-translate-y-2"
    >
      <div
        className={clsx(
          'absolute -top-48 right-0 h-72 w-72 rotate-12 bg-gradient-to-br opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-90',
          project.accent
        )}
      />
      <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0 round 24px)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0 round 24px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 sm:min-w-[260px] sm:max-w-[260px]"
        >
          <img
            src={project.imageUrl}
            alt={`Preview do projeto ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            loading="lazy"
          />
        </motion.div>
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-400">
            <Sparkles size={16} className="text-primary" />
            <span>{project.role}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {project.category}
            </span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-300 sm:max-w-xl">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:border-primary/60 hover:bg-primary/20"
              aria-label={`Abrir repositório de ${project.title} no GitHub`}
            >
              <Github size={18} />
              Repositório
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/30 to-accent/40 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-primary hover:shadow-glow-primary"
                aria-label={`Abrir versão ao vivo do projeto ${project.title}`}
              >
                <Globe size={18} />
                Projeto ao vivo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
