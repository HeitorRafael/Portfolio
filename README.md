# 👨‍�💻 Portfólio - Heitor Rafael Bezerra Delfino

> **Portfolio profissional de um desenvolvedor em transição de carreira: da gastronomia para a tecnologia**

🌐 **Demo ao vivo**: [https://heitor-delfino-portfolio.vercel.app](https://heitor-delfino-portfolio.vercel.app) *(em breve)*

---

## 🎯 **Sobre o Projeto**

Portfolio pessoal desenvolvido para demonstrar minhas habilidades como **Desenvolvedor Full Stack** em transição de carreira. O site apresenta uma interface moderna e responsiva com elementos temáticos que refletem minha jornada profissional única.

---

## ✨ **Funcionalidades Principais**

### 🎨 **Interface & UX**
- ✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ✅ **Tema Dark/Light** - Toggle com ícones temáticos (cerveja 🍺 / café ☕)
- ✅ **Multilíngue** - Português/Inglês com ícones gastronômicos (🍚🍔)
- ✅ **Header Glassmorphism** - Efeito de vidro com backdrop-filter
- ✅ **Animações Suaves** - Microinterações e transições elegantes

### 📸 **Galeria de Projetos**
- ✅ **Carrossel Automático** - Rotação das imagens a cada 3 segundos
- ✅ **Modal Expandido** - Visualização em tela cheia das screenshots
- ✅ **Navegação por Teclado** - Suporte às setas e ESC
- ✅ **Indicadores Visuais** - Pontos de navegação e contador

### 📄 **Currículo Integrado**
- ✅ **CV Completo** - Todas as informações profissionais
- ✅ **Tradução Automática** - Conteúdo em PT/EN
- ✅ **Links Funcionais** - GitHub, LinkedIn diretos

---

## 🛠️ **Stack Tecnológica**

### **Frontend**
- **React 19** - Biblioteca JavaScript moderna
- **TypeScript** - Tipagem estática e melhor DX
- **CSS Variables** - Sistema de temas dinâmico
- **Vite 4.5** - Build tool otimizado

### **Deployment**
- **Vercel** - Hospedagem e CI/CD automático
- **GitHub** - Controle de versão

### **Arquitetura**
- **SPA (Single Page Application)** - Navegação fluida
- **Component-based** - Código modular e reutilizável
- **Mobile-first** - Design responsivo desde o início

---

## 🚀 **Como Executar**

### **Pré-requisitos**
- Node.js 16+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/HeitorRafael/Portifolio.git

# Entre no diretório
cd Portifolio

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### **Build para Produção**
```bash
# Gera build otimizado
npm run build

# Preview do build
npm run preview
```

---

## 📂 **Estrutura do Projeto**

```
src/
├── assets/
│   └── images/
│       ├── index.ts              # Exportações centralizadas
│       ├── heitor-photo.jpg      # Foto de perfil
│       └── time-management-*.jpeg # Screenshots do projeto
├── SimpleApp.tsx                 # Componente principal
├── index.css                     # Estilos globais e temas
└── main.tsx                     # Entry point da aplicação
```

---

## 🎨 **Design System**

### **Cores Principais**
- **Primary**: `#1e3a8a` (Azul profissional)
- **Secondary**: `#93c5fd` (Azul claro)
- **Dark**: `#0f0f23` (Fundo escuro)
- **Light**: `#f0f9ff` (Fundo claro)

### **Tipografia**
- **Fonte**: System fonts (Arial, sans-serif)
- **Escala**: clamp() para responsividade
- **Pesos**: 400, 500, 600, bold

---

## 📱 **Projetos em Destaque**

### 🕐 **Sistema de Gestão de Tempo (MaxiMundi)**
- **Tecnologias**: React, Node.js, PostgreSQL, Material-UI, JWT
- **Funcionalidades**: Cronômetro real-time, relatórios, dashboard admin
- **Repositório**: [GestorDeTarefas](https://github.com/HeitorRafael/GestorDeTarefas)

---

## 👤 **Sobre o Desenvolvedor**

**Heitor Rafael Bezerra Delfino**
- 📍 Praia Grande, SP
- 📧 heitorbdelfino@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/heitor-rafael-bezerra-delfino-129760187/)
- 🐱 [GitHub](https://github.com/HeitorRafael)

### **Trajetória Única**
Profissional em **transição de carreira** com background sólido em:
- ✅ **Liderança de equipes** (Ex-Chef de Cozinha)
- ✅ **Gestão sob pressão** (Setor gastronômico de alta demanda)
- ✅ **Resolução de problemas** (Adaptação rápida e criativa)
- ✅ **Desenvolvimento Full Stack** (Projetos reais em produção)

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 🤝 **Contato**

Interessado em conectar ou colaborar? Entre em contato:

- 📧 **Email**: heitorbdelfino@gmail.com
- 📱 **WhatsApp**: (13) 99790-2633
- 💼 **LinkedIn**: [heitor-rafael-bezerra-delfino](https://www.linkedin.com/in/heitor-rafael-bezerra-delfino-129760187/)
- 🐱 **GitHub**: [HeitorRafael](https://github.com/HeitorRafael)

---

<div align="center">

**"O importante é a saúde"** 🍺☕

*Desenvolvido com ❤️ para demonstrar a transição única da gastronomia para a tecnologia*

⭐ **Se gostou do projeto, deixe uma estrela!** ⭐

</div>
- **Slideshow de Projetos**: Carrossel automático de imagens
- **Animações Suaves**: Usando Framer Motion
- **Deploy Vercel**: Pronto para produção

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
