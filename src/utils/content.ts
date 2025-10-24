import type {
  HardSkill,
  Metric,
  NavItem,
  Project,
  Skill,
  SoftSkill,
  StackItem,
  Testimonial,
} from "../types/content";

export const navItems: NavItem[] = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "skills", label: "Habilidades" },
  { id: "feedbacks", label: "Feedbacks" },
  { id: "contact", label: "Contato" },
];

export const heroMetrics: Metric[] = [
  {
    label: "Projetos publicados",
    value: "39",
    caption: "Repositórios públicos no GitHub",
  },
  {
    label: "Base",
    value: "Rio de Janeiro",
    caption: "Disponível para remoto e presencial",
  },
];

export const heroStack: StackItem[] = [
  {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
];

export const aboutParagraphs = [
  "Sou desenvolvedor Front-End no Rio de Janeiro focado em React, TypeScript e Tailwind CSS, criando produtos com performance e microinterações caprichadas. Busco atuação imediata em squads que valorizem design system e experiência de usuário.",
  "Estudo Desenvolvimento Web Full Stack na plataforma Dev em Dobro e tenho formação em Marketing pela Estácio. Também concluí a formação em Desenvolvimento Web FullStack da Trybe e a Imersão Dev do Futuri (DevQuest), trazendo repertório de frontend, backend e produto.",
  "No back-end atuo com Node.js, Express e PostgreSQL via Prisma, unindo validação, documentação (Swagger) e arquitetura limpa. Meus projetos pessoais como ChapsWallet e ChapettaStore reforçam domínio de formulários tipados, estado global e integrações com APIs.",
  "Trabalho com metodologias ágeis (Scrum/Kanban), organizo entregas em sprints e mantenho rotina diária de estudo, evolução contínua e colaboração transparente com designers e stakeholders.",
];

export const softSkills: SoftSkill[] = [
  {
    title: "Agilidade Estruturada",
    description:
      "Uso Scrum e Kanban para organizar backlog, cadenciar sprints e medir evolução.",
  },
  {
    title: "Comunicação Empática",
    description:
      "Colaboração clara com designers, product managers e stakeholders.",
  },
  {
    title: "Ownership",
    description:
      "Faço follow-up constante, documento decisões e puxo melhorias contínuas.",
  },
  {
    title: "Aprendizado Contínuo",
    description:
      "Rotina diária de estudo com foco em automações, testes e performance.",
  },
];

export const projects: Project[] = [
  {
    slug: "chapetta-store",
    title: "ChapettaStore",
    description:
      "E-commerce em desenvolvimento com arquitetura baseada em design system, filtros dinâmicos e carrinho inteligente. Utiliza React, Tailwind, Context API, React Hook Form e Zod para formulários e validações tipadas.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Context API",
      "Zod",
      "React Hook Form",
    ],
    repoUrl: "https://github.com/chapetta/chapetta-store",
    imageUrl:
      "https://raw.githubusercontent.com/chapetta/chapetta-store/main/public/images/chapetta-store-prev.gif",
    accent: "from-emerald-500/70 via-cyan-400/50 to-transparent",
    role: "Product Builder · Em evolução",
    category: "Pessoais",
  },
  {
    slug: "chapetta-wallet",
    title: "ChapsWallet",
    description:
      "Dashboard financeiro com conversão em tempo real, autenticação e experiência responsiva. Integra Zustand, Zod e Tailwind para oferecer fluxo fluido e acessível.",
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "TailwindCSS",
      "Zod",
      "Shadcn/UI",
    ],
    repoUrl: "https://github.com/chapetta/chapetta-wallet",
    liveUrl: "https://chaps-wallet.vercel.app/",
    imageUrl:
      "https://raw.githubusercontent.com/chapetta/chapetta-wallet/main/public/images/web_preview.gif",
    accent: "from-primary/80 via-primary/40 to-transparent",
    role: "Front-End & UX",
    category: "Pessoais",
  },
  {
    slug: "todo-app",
    title: "TodoApp",
    description:
      "Aplicação de produtividade com tema dinâmico, filtros avançados e testes com RTL. Usa Context API, hooks customizados e animações suaves para criar foco.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Context API", "RTL"],
    repoUrl: "https://github.com/chapetta/todoList-app",
    liveUrl: "https://todoappchapetta.netlify.app/",
    imageUrl:
      "https://raw.githubusercontent.com/chapetta/todoList-app/main/public/images/web_preview.gif",
    accent: "from-accent/70 via-accent/40 to-transparent",
    role: "Front-End Lead",
    category: "Desafios",
  },
  {
    slug: "code-beats",
    title: "Code Beats",
    description:
      "Experiência musical interativa: pesquisa artistas, explora álbuns e reproduz prévias. Arquitetura em camadas com React Router, hooks customizados e design system próprio.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Router",
      "API Integration",
    ],
    repoUrl: "https://github.com/chapetta/code-beats",
    imageUrl:
      "https://raw.githubusercontent.com/chapetta/code-beats/main/demo.gif",
    accent: "from-sky-500/70 via-purple-500/50 to-transparent",
    role: "Product Builder",
    category: "Pessoais",
  },
  {
    slug: "movieflix-api",
    title: "MovieFlix API",
    description:
      "API RESTful documentada com Swagger para gerenciar catálogo de filmes. Desenvolvida com Node, Express e Prisma, priorizando modelagem limpa e boas práticas.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Swagger",
      "TypeScript",
    ],
    repoUrl: "https://github.com/chapetta/movieflix-api",
    imageUrl:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
    accent: "from-stone-500/60 via-slate-700/40 to-transparent",
    role: "Back-End",
    category: "Profissionais",
  },
];

export const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    highlight: true,
    level: "Avançado",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    highlight: true,
    level: "Avançado",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    level: "Avançado",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/framermotion.svg",
    level: "Intermediário",
  },
  {
    name: "Node.js",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    highlight: true,
    level: "Intermediário",
  },
  {
    name: "Express",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: "Intermediário",
  },
  {
    name: "Prisma ORM",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    level: "Intermediário",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    level: "Intermediário",
  },
  {
    name: "Docker",
    category: "DevOps",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    level: "Intermediário",
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubactions.svg",
    level: "Intermediário",
  },
  {
    name: "Git",
    category: "Ferramentas",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    level: "Avançado",
  },
  {
    name: "Jest",
    category: "Ferramentas",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    level: "Intermediário",
  },
  {
    name: "Figma",
    category: "Ferramentas",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    level: "Intermediário",
  },
  {
    name: "Vercel",
    category: "Ferramentas",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    level: "Intermediário",
  },
];

export const whatsappLink =
  "https://wa.me/5521981510300?text=Ol%C3%A1%20Yan%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!";

export const hardSkills: HardSkill[] = [
  {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Avançado",
    description: "Componentização, hooks avançados, Context API e roteamento.",
  },
  {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    level: "Avançado",
    description: "Tipagem forte, generics, padrões de arquitetura e linting.",
  },
  {
    name: "Tailwind CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    level: "Avançado",
    description: "Design system utilitário e responsividade rápida.",
  },
  {
    name: "Node.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: "Intermediário",
    description: "APIs REST com Express, Prisma e PostgreSQL.",
  },
  {
    name: "Prisma ORM",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    level: "Intermediário",
    description: "Modelagem de dados tipada, migrações e validações.",
  },
  {
    name: "React Testing Library",
    iconUrl: "https://testing-library.com/img/octopus-128x128.png",
    level: "Intermediário",
    description: "Testes focados em comportamento e acessibilidade.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mentoria DevQuest",
    role: "Instrutor – Depoimento Placeholder",
    content:
      "“Yan demonstra curiosidade constante, atenção aos detalhes e forte senso de ownership nas entregas. Sempre traz ideias para elevar a experiência do usuário.”",
  },
  {
    name: "Comunidade Trybe",
    role: "Parceria de estudos",
    content:
      "“Parceria super colaborativa nos squads remotos: Yan se destaca em organizar backlog e propor soluções em React com animações elegantes.”",
  },
];

export const resumeUrl = "/Yan-chapetta-Full-Stack.pdf";
