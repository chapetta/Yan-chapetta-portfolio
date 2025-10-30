import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import type { Project } from '../types/content'
import { projects } from '../utils/content'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-40" aria-hidden />
      <div className="mx-auto w-full max-w-6xl space-y-12">
        <SectionHeader
          eyebrow="projetos"
          title="Projetos práticos que traduzem meu aprendizado, evolução e visão de produto"
          description="Seleção de aplicações e desafios desenvolvidos com foco em usabilidade, arquitetura moderna e aprendizado contínuo. Cada projeto reflete minha evolução prática como desenvolvedor front-end em formação."
          className="text-pretty"
        />

        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div key={project.slug}>
              <ProjectCard
                project={project}
                index={index}
                onOpenDetails={(proj) => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  )
}
