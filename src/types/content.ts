export type NavItem = {
  id: string
  label: string
}

export type Metric = {
  label: string
  value: string
  caption: string
}

export type StackItem = {
  name: string
  iconUrl: string
}

export type SkillLevel = 'Iniciante' | 'Intermediário' | 'Avançado'

export type Project = {
  slug: string
  title: string
  description: string
  technologies: string[]
  repoUrl: string
  liveUrl?: string
  imageUrl: string
  accent: string
  role: string
  category: 'Desafios' | 'Pessoais' | 'Profissionais'
  status?: string
  learned?: string[]
  repoHighlights?: string[]
  gallery?: string[]
  desafios?: string[]
  nextSteps?: string[]
}

export type Skill = {
  name: string
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Ferramentas'
  iconUrl: string
  highlight?: boolean
  level: SkillLevel
}

export type SoftSkill = {
  title: string
  description: string
}

export type HardSkill = {
  name: string
  iconUrl: string
  level: SkillLevel
  description: string
}

export type Testimonial = {
  name: string
  role: string
  content: string
  avatarUrl?: string
}
