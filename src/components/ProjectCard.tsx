import { Github, Globe, Monitor, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { Project } from '../types/content'
import { fadeIn } from '../utils/motion'

const techIconMap: Record<string, string> = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  TypeScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  TailwindCSS:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'Context API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  Zod: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/zod.svg',
  'React Hook Form':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/reacthookform.svg',
  Zustand: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/zustand.svg',
  'Shadcn/UI': 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/radixui.svg',
  'React Router':
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'API Integration':
    'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/json.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  Express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  PostgreSQL:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  Prisma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
  Swagger: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/swagger.svg',
  RTL: 'https://testing-library.com/img/octopus-128x128.png',
  'React Testing Library': 'https://testing-library.com/img/octopus-128x128.png'
}

export type ProjectCardProps = {
  project: Project
  index: number
  onOpenDetails: (project: Project) => void
}

export function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  const delay = 0.08 * index

  return (
    <motion.article
      variants={fadeIn(index % 2 === 0 ? 'up' : 'left', delay)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_18px_45px_rgba(8,15,40,0.45)] transition-transform duration-500 hover:-translate-y-2"
    >
      <div
        className={clsx(
          'pointer-events-none absolute -top-48 right-0 h-72 w-72 rotate-12 bg-gradient-to-br opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-90',
          project.accent
        )}
      />
      <div className="relative grid grid-cols-12 gap-6 p-5 sm:p-8">
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0 round 24px)' }}
          whileInView={{ clipPath: 'inset(0 0 0% 0 round 24px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="col-span-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-inner sm:col-span-5"
        >
          <img
            src={project.imageUrl}
            alt={`Preview do projeto ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            loading="lazy"
          />
        </motion.div>

        <div className="relative z-10 col-span-12 flex flex-col gap-4 sm:col-span-7">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <Sparkles size={16} className="text-primary" />
              {project.role}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-semibold tracking-[0.3em] text-slate-300">
              {project.category}
            </span>
          </div>
          <h3 className="font-display text-[clamp(1.8rem,3vw,2.3rem)] font-semibold text-white">
            {project.title}
          </h3>
          <p className="text-base leading-relaxed text-slate-300 text-pretty">
            {project.description}
          </p>
          <ul className="mt-1 flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200"
              >
                {techIconMap[tech] ? (
                  <img
                    src={techIconMap[tech]}
                    alt={`Ícone da tecnologia ${tech}`}
                    className="h-4 w-4 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                )}
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/25 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Monitor size={18} aria-hidden />
              Detalhes
            </button>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-gradient-to-r from-primary/30 to-accent/40 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-glow-primary"
                aria-label={`Abrir versão ao vivo do projeto ${project.title}`}
              >
                <Globe size={18} aria-hidden />
                Ver projeto
              </a>
            ) : null}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`Abrir repositório de ${project.title} no GitHub`}
            >
              <Github size={18} aria-hidden />
              Ver código
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
