export interface Project {
  id: string;
  name: string;
  description: {
    pt: string;
    en: string;
  };
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'fungifresh',
    name: 'FungiFresh',
    description: {
      pt: 'Protótipo de uma loja de venda de cogumelos, chamada de FungiFresh onde eu fui responsavel pela ideia e pela implementação.',
      en: 'Prototype of a mushroom selling store, called FungiFresh where I was responsible for the idea and implementation.'
    },
    technologies: ['Figma'],
    images: [
      '/src/assets/images/fungifresh-1.jpg',
      '/src/assets/images/fungifresh-2.jpg',
      '/src/assets/images/fungifresh-3.jpg',
      '/src/assets/images/fungifresh-4.jpg',
      '/src/assets/images/fungifresh-5.jpg',
      '/src/assets/images/fungifresh-6.jpg',
      '/src/assets/images/fungifresh-7.jpg',
      '/src/assets/images/fungifresh-8.jpg',
      '/src/assets/images/fungifresh-9.jpg',
      '/src/assets/images/fungifresh-10.jpg',
    ],
    liveUrl: 'https://www.figma.com/proto/4VqbhDgVaAMEdCBGeqVY8L/Mushrooms-Project?node-id=109-46&starting-point-node-id=130%3A1073&t=aKlwvcwK2MfUBpmM-1',
  },
  {
    id: 'projeto1',
    name: 'Sistema de Gestão de Restaurante',
    description: {
      pt: 'Sistema completo para gestão de restaurantes com controle de estoque, pedidos e financeiro.',
      en: 'Complete restaurant management system with inventory, orders and financial control.'
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    images: [
      '/src/assets/projects/projeto1/screenshot1.jpg',
      '/src/assets/projects/projeto1/screenshot2.jpg',
      '/src/assets/projects/projeto1/screenshot3.jpg'
    ]
  },
  {
    id: 'projeto2',
    name: 'App de Receitas Culinárias',
    description: {
      pt: 'Aplicativo mobile para compartilhamento de receitas com sistema de avaliações.',
      en: 'Mobile app for sharing recipes with rating system.'
    },
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    images: [
      '/src/assets/projects/projeto2/screenshot1.jpg',
      '/src/assets/projects/projeto2/screenshot2.jpg'
    ]
  },
  {
    id: 'projeto3',
    name: 'E-commerce de Ingredientes',
    description: {
      pt: 'Plataforma de e-commerce especializada em ingredientes gourmet.',
      en: 'E-commerce platform specialized in gourmet ingredients.'
    },
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'TailwindCSS'],
    images: [
      '/src/assets/projects/projeto3/screenshot1.jpg',
      '/src/assets/projects/projeto3/screenshot2.jpg',
      '/src/assets/projects/projeto3/screenshot3.jpg'
    ]
  }
];

export const skills = [
  { name: 'Figma', icon: 'figma' },
  { name: 'Git', icon: 'git' },
  { name: 'CSS', icon: 'css' },
  { name: 'HTML', icon: 'html' },
  { name: 'Java', icon: 'java' },
  { name: 'VS Code', icon: 'vscode' },
  { name: 'IntelliJ', icon: 'intellij' }
];
