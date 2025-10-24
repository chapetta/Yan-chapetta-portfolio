import { useEffect } from 'react'
import { Github, Globe, X } from 'lucide-react'
import type { Project } from '../types/content'

export type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 px-4 py-10 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.slug}-title`}
      onMouseDown={handleBackdropClick}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-surface-light p-6 text-surface-light-foreground shadow-2xl transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-700 transition-colors duration-200 hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-white"
          aria-label="Fechar detalhes do projeto"
        >
          <X size={18} />
        </button>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-surface-light-muted/70 bg-white/40 dark:border-white/10 dark:bg-white/5">
            <img
              src={project.imageUrl}
              alt={`Imagem ilustrativa do projeto ${project.title}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
              <span className="rounded-full border border-surface-light-muted/70 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5">
                {project.category}
              </span>
              <span className="rounded-full border border-surface-light-muted/70 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5">
                {project.role}
              </span>
            </div>
            <h2
              id={`project-${project.slug}-title`}
              className="font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-semibold"
            >
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 transition-colors dark:text-slate-300">
              {project.description}
            </p>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
                Tecnologias
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-600 transition-colors dark:text-slate-200">
                {project.technologies.map((tech) => (
                  <li
                    key={`${project.slug}-${tech}`}
                    className="rounded-full border border-surface-light-muted/70 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-3">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-gradient-to-r from-primary/30 to-accent/40 px-4 py-2 text-sm font-semibold text-surface-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-glow-primary dark:text-white"
                >
                  <Globe size={18} aria-hidden />
                  Ver projeto
                </a>
              ) : null}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <Github size={18} aria-hidden />
                Ver código
              </a>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="sr-only" onClick={onClose}>
        Fechar
      </button>
    </div>
  )
}
