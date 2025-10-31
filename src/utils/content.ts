import type {
  Certificate,
  Metric,
  NavItem,
  Project,
  Skill,
  StackItem,
} from "../types/content";

export const navItems: NavItem[] = [
  { id: "hero", label: "Início", icon: "home" },
  { id: "about", label: "Sobre", icon: "user" },
  { id: "projects", label: "Projetos", icon: "projects" },
  { id: "stacks", label: "Stacks", icon: "stacks" },
  { id: "certificates", label: "Certificados", icon: "certificates" },
  { id: "contact", label: "Contato", icon: "contact" },
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

export const softSkillHighlights: string[] = [
  "Abertura a feedbacks",
  "Adaptabilidade",
  "Curiosidade técnica",
  "Organização pessoal",
  "Comunicação assíncrona",
  "Proatividade",
  "Pensamento crítico",
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
    imageUrl: "/images/project/homepage.png",
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
    imageUrl: "/images/project/chapswallet-dashboard.gif",
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
    desafios: [
      "Persistência do estado da carteira usando zustand/persist sem duplicar pedidos de câmbio",
      "Sincronização do formulário de despesas com a tabela e o total convertido em BRL",
      "Fluxo de autenticação e rotas protegidas com feedback em tempo real",
    ],
    nextSteps: [
      "Adicionar gráficos e dashboards de insights por categoria",
      "Exportar despesas em CSV e integração com planilhas",
      "Suporte multilíngue e múltiplas moedas base",
    ],
    gallery: ["/images/project/chapswallet-dashboard.gif"],
  },
  {
    slug: "todo-app",
    title: "TodoApp",
    description:
      "Aplicativo de tarefas com tema dinâmico, filtros avançados e suíte de testes em RTL para validar acessibilidade e fluxo completo.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Context API", "RTL"],
    repoUrl: "https://github.com/chapetta/todoList-app",
    liveUrl: "https://todoappchapetta.netlify.app/",
    imageUrl: "/images/project/todoapp-web.gif",
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
      "Hook useTodo centralizando todas as operações CRUD",
      "Tema global controlado via Context API com tokens CSS",
      "Testes unitários e de interação com React Testing Library",
    ],
    desafios: [
      "Persistir tarefas no localStorage mantendo filtros ativos e consistentes",
      "Cobrir componentes críticos (form, lista e header) com testes automatizados",
      "Manter o tema dark/light sincronizado com o estado global e CSS custom properties",
    ],
    nextSteps: [
      "Sincronizar tarefas com uma API externa e autenticação por usuário",
      "Adicionar drag and drop para reordenar tarefas",
      "Gerar relatórios semanais e lembretes automáticos",
    ],
    gallery: [
      "/images/project/todoapp-web.gif",
      "/images/project/todoapp-mobile.gif",
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
    imageUrl: "/images/project/codebeats-preview.svg",
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
      "MusicContext gerenciando player, favoritos e loading",
      "Serviços desacoplados para buscas, perfis e playlists",
      "Testes de interação com React Testing Library nos fluxos críticos",
    ],
    desafios: [
      "Sincronizar player, favoritos e visualização de álbuns usando Context API",
      "Cachear resultados de busca para reduzir requisições",
      "Garantir responsividade e animações suaves entre rotas",
    ],
    nextSteps: [
      "Aplicar o design system em Tailwind com tokens definitivos",
      "Integrar com a API oficial do Spotify para prévias completas",
      "Adicionar modo offline com IndexedDB e sincronização posterior",
    ],
    gallery: ["/images/project/codebeats-preview.svg"],
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
    imageUrl: "/images/project/movieflix-diagram.svg",
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
    desafios: [
      "Orquestrar camadas de serviço e repositório com Prisma mantendo tipagem forte",
      "Garantir idempotência e validação dos endpoints com middlewares dedicados",
      "Manter documentação Swagger alinhada com as mudanças de schema",
    ],
    nextSteps: [
      "Adicionar autenticação JWT com perfis de acesso (admin e leitor)",
      "Implementar paginação, ordenação e filtros combinados",
      "Publicar deploy containerizado e pipelines de observabilidade",
    ],
    gallery: ["/images/project/movieflix-diagram.svg"],
  },
];

export const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Shadcn",
    category: "Frontend",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/radixui.svg",
  },
  {
    name: "Vitest",
    category: "Frontend",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vitest.svg",
  },
  {
    name: "React Testing Library",
    category: "Frontend",
    iconUrl: "https://testing-library.com/img/octopus-128x128.png",
  },
  {
    name: "Next.js",
    category: "Frontend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Python",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Sequelize",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  },
  {
    name: "Prisma ORM",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "Docker",
    category: "Backend",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "API RESTful",
    category: "Backend",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postman.svg",
  },
  {
    name: "Integração de APIs",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/graphql.svg",
  },
  {
    name: "RESTful APIs",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/swagger.svg",
  },
  {
    name: "Testes de Integração (RTL)",
    category: "Conceitos",
    iconUrl: "https://testing-library.com/img/octopus-128x128.png",
  },
  {
    name: "Programação Orientada a Objetos",
    category: "Conceitos",
    iconSymbol: "λ",
  },
  {
    name: "Estruturas de Dados",
    category: "Conceitos",
    iconSymbol: "Σ",
  },
  {
    name: "Engenharia de Software",
    category: "Conceitos",
    iconSymbol: "⚙",
  },
  {
    name: "Scrum",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/scrumalliance.svg",
  },
  {
    name: "Kanban",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trello.svg",
  },
  {
    name: "Metodologias Ágeis",
    category: "Conceitos",
    iconSymbol: "↻",
  },
  {
    name: "Inteligência Artificial",
    category: "Conceitos",
    iconUrl:
      "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg",
  },
  {
    name: "Versionamento de Código",
    category: "Conceitos",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const whatsappLink =
  "https://wa.me/5521981510300?text=Ol%C3%A1%20Yan%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!";

export const focusCurrent: string[] = [
  "React",
  "Tailwind",
  "TypeScript",
  "Node.js",
  "Banco de dados",
];

export const focusExploration: string[] = [
  "Next.js",
  "Inteligência Artificial",
  "Python",
  "Automação",
];

export const certificates: Certificate[] = [
  {
    title: "Formação em Desenvolvimento Web",
    issuer: "Trybe",
    imageUrl: "/images/certificates/formacao_Desenvolvimento_Web_trybe.png",
    url: "https://www.credential.net/591d2007-ed00-4875-b1d5-bc04ef82a35a#acc.wIsXpOJh",
  },
  {
    title: "Fundamentos do Desenvolvimento Web",
    issuer: "Trybe",
    imageUrl: "/images/certificates/fundamentos_do_desenvolvimento_web.png",
    url: "https://www.credential.net/f45f2310-d010-4200-88ac-0efc1146cbe2#acc.WceP9uYD",
  },
  {
    title: "Desenvolvimento Front-End",
    issuer: "Trybe",
    imageUrl: "/images/certificates/desenvolvimento_front_end.png",
    url: "https://www.credential.net/481a6285-ecb5-4844-8c57-a7d2c429ed5d#acc.f4g9rxPG",
  },
  {
    title: "Desenvolvimento Back-End",
    issuer: "Trybe",
    imageUrl: "/images/certificates/desenvolvimento_back_end.png",
    url: "https://www.credential.net/ccf79a87-3513-492b-b121-25097617fec2#acc.yY21BgxF",
  },
  {
    title: "Ciência da Computação",
    issuer: "Trybe",
    imageUrl: "/images/certificates/ciencia_da_computacao.png",
    url: "https://www.credential.net/771c613e-9a21-4943-829b-2b777db38ca7#acc.ZaB8Gs5r",
  },
  {
    title: "SQL Impressionador",
    issuer: "Hashtag Treinamentos",
    imageUrl: "/images/certificates/sql_impressionador.png",
    url: "https://portalhashtag.com/certificado-hashtag/1723059282002x994071378982338600",
  },
  {
    title: "Fundamentos de Next.js",
    issuer: "Linkedin Learning",
    imageUrl: "/images/certificates/fundamentos_nextjs.png",
    url: "https://www.linkedin.com/learning/certificates/dc9a5f23393364e7f8f874fc847461077995a8c7d08ae1cec8f2254ce53731ef",
  },
];

export const resumeUrl = "/Yan-Chapetta-CV-Full-Stack.pdf";
