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
    label: "Atividade no GitHub",
    value: "+39 repositórios",
    caption: "Entre projetos pessoais e estudos contínuos",
  },
  {
    label: "Base",
    value: "Rio de Janeiro",
    caption: "Disponível para remoto e presencial",
  },
  {
    label: "Idioma",
    value: "Inglês",
    caption:
      "Boa leitura e compreensão auditiva, em desenvolvimento escrita e conversação.",
  },
  {
    label: "Disponibilidade",
    value: "Imediata",
    caption: "Disponível para vagas de Front-End e Full Stack.",
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
    name: "PostgreSQL",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

export const aboutParagraphs = [
  "Sou desenvolvedor Front-End do Rio de Janeiro, especializado em React, TypeScript e Tailwind CSS. Tenho como foco criar interfaces funcionais, fluidas e com microinterações que elevam a experiência do usuário, sempre com atenção à performance e à clareza do código.",

  "Atuo com uma abordagem centrada em produto e experiência: entendo a importância de entregar valor real para o usuário final e de manter um código bem estruturado para facilitar a escalabilidade. Em todos os meus projetos, busco aplicar boas práticas como componentização, tipagem estática, arquitetura limpa e integração contínua.",

  "Me formei em Desenvolvimento Web Full Stack pela Trybe e aprofundei meus conhecimentos com bootcamps e imersões como o DevQuest. Essa formação me permitiu transitar com segurança entre front-end, back-end e lógica de produto. Também tenho background em Marketing, o que reforça minha visão voltada à comunicação clara e ao entendimento de negócio.",

  "Durante a formação e em projetos autorais, participei ativamente de squads ágeis (Scrum/Kanban), utilizando ferramentas como Jira, Notion e GitHub Projects para planejamento, acompanhamento de tarefas e colaboração contínua.",

  "Entre os projetos desenvolvidos, destaco:\n- ChapaWallet – uma carteira digital com autenticação segura, integração com APIs e foco em responsividade mobile-first.\n- ChapettaStore – um e-commerce funcional com listagem de produtos integrados à FakeStore API, filtros por categoria, página de detalhes do produto, checkout completo e finalização de compra. Desenvolvido com Context API, Tailwind CSS e UI moderna usando Shadcn.",

  "Este portfólio foi inteiramente desenvolvido com o auxílio da IA Codex, desde a estrutura inicial até ajustes de layout e refatoração de código. Utilizei a IA de forma estratégica para acelerar decisões técnicas e garantir consistência visual, o que reflete minha disposição em adotar ferramentas modernas no meu fluxo de trabalho.",

  "Atualmente, estou aprofundando meus conhecimentos em React avançado e estudando Inteligência Artificial aplicada ao desenvolvimento web, com foco em acompanhar as tendências do mercado e incorporar soluções modernas aos meus projetos.",
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
      "Loja virtual criada com foco em arquitetura front-end moderna: utiliza design system autoral, filtros dinâmicos por categoria, contexto global e checkout validado com formulários tipados. O projeto reforça boas práticas em organização de código e evolução incremental.",
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
    status: "Roadmap ativo · Em evolução",
    learned: [
      "Design system com tokens tipados e componentes reutilizáveis",
      "Filtros dinâmicos conectados ao Context API",
      "Checkout com validações Zod + React Hook Form",
    ],
    repoHighlights: [
      "Arquitetura por camadas (design-system, hooks e features)",
      "Testes de tipagem para DTOs e carrinho",
    ],
    desafios: [
      "Estratégia para sincronizar filtros, paginação e carrinho sem colisões",
      "Construção de tokens de design versionados",
    ],
    nextSteps: [
      "Integração com gateway de pagamento real",
      "Implementar busca full-text e wish list",
    ],
    gallery: [
      "/images/project/homepage.png",
      "/images/project/product-detail.png",
      "/images/project/cart.png",
      "/images/project/checkout.png",
    ],
  },
  {
    slug: "chapetta-wallet",
    title: "ChapsWallet",
    description:
      "Dashboard financeiro com autenticação, conversor de moedas em tempo real e governança de estado centralizada via Zustand para garantir previsibilidade.",
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
    status: "MVP publicado",
    learned: [
      "Estado global e sessão controlados com Zustand",
      "Formulários tipados com React Hook Form + Zod",
      "Design tokens unificados entre Tailwind e Shadcn/UI",
    ],
    repoHighlights: [
      "Feature flags para recursos experimentais",
      "Hooks de acessibilidade para navegação por teclado",
    ],
  },
  {
    slug: "todo-app",
    title: "TodoApp",
    description:
      "Aplicativo de tarefas com tema dinâmico, filtros avançados e suíte de testes em RTL para validar acessibilidade e fluxo completo.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Context API", "RTL"],
    repoUrl: "https://github.com/chapetta/todoList-app",
    liveUrl: "https://todoappchapetta.netlify.app/",
    imageUrl:
      "https://raw.githubusercontent.com/chapetta/todoList-app/main/public/images/web_preview.gif",
    accent: "from-accent/70 via-accent/40 to-transparent",
    role: "Front-End Lead",
    category: "Desafios",
    status: "Versão estável",
    learned: [
      "Context API + hooks customizados para sincronizar estados",
      "Testes com React Testing Library assegurando filtros e acessibilidade",
      "Feedback visual com animações suaves em Tailwind",
    ],
    repoHighlights: [
      "Pipelines de CI com coverage mínimo",
      "Storybook simples para componentes de entrada",
    ],
  },
  {
    slug: "code-beats",
    title: "Code Beats",
    description:
      "Experiência musical que integra múltiplas APIs para buscar artistas, listar álbuns e reproduzir prévias, consolidando arquitetura client-side modular com React Router.",
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
    status: "Concluído",
    learned: [
      "React Router para rotas aninhadas e data loaders",
      "Hooks customizados controlando cache e erros",
      "Design system autoral com animações responsivas",
    ],
    repoHighlights: [
      "Mocks de API e estratégias de retry",
      "Camada de serviços desacoplada do UI",
    ],
  },
  {
    slug: "movieflix-api",
    title: "MovieFlix API",
    description:
      "API REST para catálogo de filmes com modelagem relacional, documentação viva em Swagger e middlewares de autenticação escritos em TypeScript.",
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
    status: "API privada",
    learned: [
      "Modelagem relacional com Prisma + PostgreSQL",
      "Documentação interativa com Swagger e exemplos",
      "Middlewares de autenticação e validações em TypeScript",
    ],
    repoHighlights: [
      "Scripts de seed e reset do banco",
      "Testes de integração com Supertest",
    ],
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
