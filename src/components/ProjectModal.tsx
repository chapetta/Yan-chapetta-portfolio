import { useEffect, useMemo, useState } from 'react'
import {
  BadgeCheck,
  Code,
  Github,
  Globe,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import type { Project } from '../types/content'

export type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const mediaGallery = useMemo(
    () => (project.gallery && project.gallery.length ? project.gallery : [project.imageUrl]),
    [project.gallery, project.imageUrl]
  )
  const [currentSlide, setCurrentSlide] = useState(0)
  const [zoomImageOpen, setZoomImageOpen] = useState(false)
  const isChapettaStore = project.slug === 'chapetta-store'
  const badges = useMemo(
    () => Array.from(new Set([project.category, project.role, project.status].filter(Boolean))),
    [project.category, project.role, project.status]
  )

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

  useEffect(() => {
    setCurrentSlide(0)
    setZoomImageOpen(false)
  }, [project.slug])

  useEffect(() => {
    document.body.style.overflow = zoomImageOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [zoomImageOpen])

  const goToSlide = (direction: 'prev' | 'next') => {
    setCurrentSlide((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? mediaGallery.length - 1 : prev - 1
      }
      return prev === mediaGallery.length - 1 ? 0 : prev + 1
    })
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const fallback = project.imageUrl
    if (event.currentTarget.src !== fallback) {
      event.currentTarget.onerror = null
      event.currentTarget.src = fallback
    }
  }

  const handleZoom = () => {
    setZoomImageOpen(true)
  }

  const renderBadgeRow = () =>
    badges.length ? (
      <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-500 transition-colors dark:text-slate-400">
        {badges.map((badge) => (
          <span
            key={`${project.slug}-${badge}`}
            className="rounded-full border border-surface-light-muted/70 bg-white/70 px-3 py-1 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {`[${badge}]`}
          </span>
        ))}
      </div>
    ) : null

  const renderGallery = (variant: 'default' | 'full') => (
    <div
      className={`relative rounded-2xl border border-surface-light-muted/70 bg-white/40 p-3 shadow-xl transition dark:border-white/10 dark:bg-white/5 ${
        variant === 'full' ? 'min-h-[260px]' : 'h-full'
      }`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={mediaGallery[currentSlide]}
          alt={`Imagem ilustrativa do projeto ${project.title}`}
          className="aspect-video h-auto w-full max-h-[500px] rounded-xl object-cover"
          loading="lazy"
          onError={handleImageError}
        />
        <button
          type="button"
          onClick={handleZoom}
          className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur transition hover:bg-white/80 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Abrir imagem atual em uma nova aba"
        >
          <Maximize2 size={14} />
          Zoom
        </button>
      </div>
      {mediaGallery.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goToSlide('prev')}
            className="absolute left-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/60 text-white backdrop-blur transition hover:bg-white/80 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goToSlide('next')}
            className="absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/60 text-white backdrop-blur transition hover:bg-white/80 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {mediaGallery.map((_, index) => (
              <button
                key={`${project.slug}-thumb-${index}`}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )

  const chapettaAboutText =
    'Aplicação de e-commerce com foco em front-end. Desenvolvido com React, TypeScript, Tailwind e Context API, o projeto implementa funcionalidades como catálogo com filtros por categoria e input, visualização do produto, controle de carrinho, checkout validado com formulário tipado e responsividade. A arquitetura prioriza organização, componentização e evolução incremental.'
  const chapettaLearnings = [
    'Integração com API externa (FakeStore)',
    'Gerenciamento de estado global com Context API',
    'Validação com Zod + React Hook Form',
    'Estilização com Tailwind + Shadcn/UI',
    'Criação de design system com tokens e componentes reutilizáveis',
  ]
  const chapettaChallenges = [
    'Integração total com estado global e persistência',
    'Separação de responsabilidades por camada (contextos, hooks, lógica)',
    'Sincronização entre filtros, paginação e carrinho',
    'Tipagem avançada com DTOs para formulário e carrinho',
  ]
  const chapettaRepoHighlights = [
    'Design system com tokens e arquitetura modular',
    'Tipagem de dados para DTOs e controle de estado',
    'Separação entre lógica de exibição e dados',
  ]
  const chapettaNextSteps = [
    'Integração com Stripe',
    'Página de admin',
    'Deploy público com mock da API',
    'Testes automatizados com React Testing Library',
  ]

  const renderDefaultLayout = () => (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="col-span-12 lg:col-span-7">{renderGallery('default')}</div>
      <div className="col-span-12 flex flex-col gap-8 lg:col-span-5">
        {renderBadgeRow()}
        <h2
          id={`project-${project.slug}-title`}
          className="font-display text-[clamp(1.8rem,3.2vw,2.4rem)] font-semibold"
        >
          {project.title}
        </h2>
        <div className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Sobre o projeto
          </h3>
          <p className="text-base leading-relaxed text-slate-600 transition-colors dark:text-slate-300">
            {project.description}
          </p>
        </div>
        {project.learned?.length ? (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
              Aprendizado aplicado
            </h3>
            <div className="mt-4 grid gap-3">
              {project.learned.map((item) => (
                <div
                  key={`${project.slug}-learned-${item}`}
                  className="flex items-start gap-3 rounded-2xl border border-surface-light-muted/70 bg-white/70 px-4 py-3 text-sm leading-snug text-slate-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <BadgeCheck size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {project.desafios?.length ? (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
              Desafios técnicos
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {project.desafios.map((challenge) => (
                <li key={`${project.slug}-challenge-${challenge}`}>{challenge}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Tecnologias
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600 transition-colors dark:text-slate-200">
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
        <hr className="my-4 border-white/10" />
        {project.repoHighlights?.length ? (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
              Repositório em destaque
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.repoHighlights.map((repoItem) => (
                <span
                  key={`${project.slug}-repo-${repoItem}`}
                  className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-4 py-2 text-sm text-slate-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <Code size={16} />
                  {repoItem}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {project.nextSteps?.length ? (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
              Próximos passos
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {project.nextSteps.map((step) => (
                <li key={`${project.slug}-next-${step}`}>{step}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <hr className="my-4 border-white/10" />
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-gradient-to-r from-primary/30 to-accent/40 px-4 py-2 text-sm font-semibold text-surface-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-glow-primary dark:text-white"
            >
              <Globe size={18} aria-hidden />
              Ver deploy
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-4 py-2 text-sm font-semibold italic text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              🔒 Sem deploy público no momento (API ou ambiente local)
            </span>
          )}
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
  )

  const renderChapettaLayout = () => (
    <div className="flex flex-col gap-8">
      {renderGallery('full')}
      <div className="mt-10 flex flex-col gap-8 pb-10">
        <div className="space-y-4">
          {renderBadgeRow()}
          <h2
            id={`project-${project.slug}-title`}
            className="font-display text-[clamp(2rem,3.6vw,2.8rem)] font-semibold leading-tight"
          >
            {project.title}
          </h2>
        </div>
        <hr className="my-6 border-white/10" />
        <section className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Sobre o projeto
          </h3>
          <p className="text-base leading-relaxed text-slate-600 transition-colors dark:text-slate-300">
            {chapettaAboutText}
          </p>
        </section>
        <hr className="my-6 border-white/10" />
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Aprendizado aplicado
          </h3>
          <ul className="mt-4 grid gap-3">
            {chapettaLearnings.map((item) => (
              <li
                key={`chapetta-learning-${item}`}
                className="flex items-start gap-3 rounded-2xl border border-surface-light-muted/70 bg-white/70 px-5 py-4 text-sm leading-snug text-slate-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <BadgeCheck size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <hr className="my-6 border-white/10" />
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Desafios técnicos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {chapettaChallenges.map((challenge) => (
              <li
                key={`chapetta-challenge-${challenge}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </section>
        <hr className="my-6 border-white/10" />
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Repositório em destaque
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {chapettaRepoHighlights.map((item) => (
              <span
                key={`chapetta-repo-${item}`}
                className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-5 py-2 text-sm text-slate-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <Code size={16} />
                {item}
              </span>
            ))}
          </div>
        </section>
        <hr className="my-6 border-white/10" />
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Próximos passos
          </h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            {chapettaNextSteps.map((step) => (
              <li key={`chapetta-next-${step}`}>{step}</li>
            ))}
          </ul>
        </section>
        <hr className="my-6 border-white/10" />
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-700 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <Github size={18} aria-hidden />
            Ver código
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 px-4 py-10 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.slug}-title`}
      onMouseDown={handleBackdropClick}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-surface-light p-10 text-surface-light-foreground shadow-2xl transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 sm:p-12"
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
        <div className="max-h-[75vh] overflow-y-auto pr-1">
          {isChapettaStore ? renderChapettaLayout() : renderDefaultLayout()}
        </div>
      </div>
      {zoomImageOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada do projeto ${project.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setZoomImageOpen(false)
            }
          }}
        >
          <button
            type="button"
            onClick={() => setZoomImageOpen(false)}
            className="absolute right-8 top-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Fechar imagem em tela cheia"
          >
            <X size={18} />
          </button>
          <img
            src={mediaGallery[currentSlide]}
            alt={`Imagem ampliada do projeto ${project.title}`}
            className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
            onClick={(event) => event.stopPropagation()}
            onError={handleImageError}
          />
        </div>
      )}
      <button type="button" className="sr-only" onClick={onClose}>
        Fechar
      </button>
    </div>
  )
}
