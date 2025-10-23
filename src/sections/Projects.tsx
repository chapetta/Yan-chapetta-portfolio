import { SectionHeader } from '../components/SectionHeader'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../utils/content'

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 opacity-70" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <SectionHeader
          eyebrow="projetos"
          title="Produtos digitais que refletem meu processo de ponta a ponta"
          description="Seleção de projetos open-source publicados por Yan Chapetta, categorizados entre desafios, iniciativas pessoais e práticas profissionais para demonstrar profundidade técnica."
        />

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
