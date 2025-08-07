import React from 'react';
import { heitorPhoto, projectImages, imageMetadata } from './assets/images';

const SimpleApp: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [language, setLanguage] = React.useState<'pt' | 'en'>('pt');
  
  // Estados para carrossel e modal
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImageIndex, setModalImageIndex] = React.useState(0);

  // Auto-rotação do carrossel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % projectImages.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []); // Array vazio pois projectImages é importado e não muda

  // Navegação por teclado no modal
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (modalOpen) {
        if (e.key === 'Escape') {
          setModalOpen(false);
        } else if (e.key === 'ArrowLeft' && modalImageIndex > 0) {
          setModalImageIndex(prev => prev - 1);
        } else if (e.key === 'ArrowRight' && modalImageIndex < projectImages.length - 1) {
          setModalImageIndex(prev => prev + 1);
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [modalOpen, modalImageIndex]); // Removido projectImages.length

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const translations = {
    pt: {
      name: 'HEITOR RAFAEL BEZERRA DELFINO',
      title1: 'Analista e Desenvolvedor de Software',
      title2: 'Ex Chef de Cozinha',
      quote: 'O importante é a saúde',
      location: 'Praia Grande – SP',
      phone: '(13) 99790-2633',
      email: 'heitorbdelfino@gmail.com',
      nav: {
        home: 'Home',
        projects: 'Projetos',
        about: 'Sobre',
        skills: 'Skills',
        contact: 'Contato'
      },
      resume: {
        objective: {
          title: 'OBJETIVO',
          content: 'Estágio ou vaga júnior na área de Tecnologia (Segurança da Informação, Desenvolvimento, Infraestrutura, Banco de Dados, etc.). Profissional em transição de carreira com sólida experiência em liderança, resolução de problemas e trabalho sob pressão no setor gastronômico. Atualmente estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor iniciante com projetos em front-end e back-end. Busco oportunidade para iniciar minha trajetória profissional em TI e evoluir com consistência e dedicação.'
        },
        education: {
          title: 'FORMAÇÃO ACADÊMICA',
          items: [
            {
              course: 'Análise e Desenvolvimento de Sistemas',
              institution: 'FATEC – Praia Grande',
              period: '2023 – 2026'
            },
            {
              course: 'Tecnologia em Gastronomia',
              institution: 'Grupo Educacional HOTEC',
              period: 'Concluído em 2016'
            }
          ]
        },
        skills: {
          title: 'HABILIDADES TÉCNICAS',
          languages: 'HTML, CSS, JavaScript, Git, Java, Node.js, Banco de Dados SQL, CORS, VPN',
          ai: 'Inteligência Artificial: GPT-4 (OpenAI), Claude 3 (Anthropic), Gemini (Google), Prompt Engineering, API Integration',
          others: 'GitHub, Integração de APIs, Desenvolvimento Web Responsivo, Servidores, Pacote Office, Internet e Mídias Sociais (avançado)'
        },
        experience: {
          title: 'EXPERIÊNCIA PROFISSIONAL',
          items: [
            {
              position: 'DESENVOLVEDOR FULL STACK',
              company: 'MaxiMundi - Sistema de Gestão de Tempo',
              description: 'Desenvolvimento completo de SaaS para controle de tempo corporativo utilizando React.js, Node.js e PostgreSQL. Implementação de arquitetura moderna com autenticação JWT, gerenciamento de usuários multi-nível e dashboard administrativo responsivo. Criação de sistema de deploy automático, scripts de migração de banco e configuração de acesso remoto via VPN para trabalho home office. Aplicação de metodologias ágeis, versionamento Git e documentação técnica abrangente para facilitar manutenção e escalabilidade.',
              technologies: 'React 18, Material-UI, Node.js, Express, PostgreSQL, PM2, PowerShell, ZeroTier VPN',
              features: 'Sistema de autenticação e autorização, Dashboard com relatórios em tempo real, Gerenciamento completo de usuários e senhas, API RESTful com CORS configurado, Deploy automatizado e scripts de backup, Interface responsiva com tema claro/escuro.'
            },
            {
              position: 'DESENVOLVEDOR COM INTELIGÊNCIA ARTIFICIAL',
              company: 'Projetos Pessoais e Freelances',
              description: 'Desenvolvimento de soluções utilizando APIs de Inteligência Artificial como GPT (OpenAI), Claude (Anthropic) e Gemini (Google). Integração de modelos de linguagem em aplicações web, automação de processos com IA conversacional e criação de interfaces interativas para chatbots. Experiência em prompt engineering, otimização de respostas e implementação de sistemas de IA para resolução de problemas complexos.',
              technologies: 'OpenAI GPT-4, Claude 3, Google Gemini, API Integration, JavaScript, Python, React.js',
              features: 'Integração de APIs de IA, Prompt engineering otimizado, Chatbots conversacionais, Automação com IA, Processamento de linguagem natural.'
            },
            {
              position: 'CHEF DE COZINHA',
              company: 'Beach Lounge',
              period: '01/2021 – 10/2023',
              description: 'Liderança de equipe e organização de produção em alta demanda. Controle de estoque e fornecedores (habilidade aplicável à gestão de processos e dados). Desenvolvimento de resiliência e pensamento rápido, úteis para resolução de bugs e gestão de projetos ágeis.'
            },
            {
              position: 'COZINHEIRO LÍDER',
              company: 'Santa Eliza Eco Resort',
              period: '07/2019 – 10/2020',
              description: 'Organização de processos internos e logística de produção diária. Coordenação de equipe e adaptação de cardápios (com pensamento analítico e solução de problemas sob pressão).'
            },
            {
              position: 'MENOR APRENDIZ',
              company: 'Tribunal de Justiça – Fórum Santana',
              period: '01/2012 – 01/2013',
              description: 'Atendimento ao público, organização de arquivos e uso de sistema interno. Desenvolvimento de atenção aos detalhes e base administrativa relevante ao setor de TI.'
            }
          ]
        },
        competencies: {
          title: 'COMPETÊNCIAS TRANSFERÍVEIS',
          items: [
            'Liderança e gestão de equipes multidisciplinares',
            'Organização e disciplina operacional',
            'Habilidade com rotinas e execução de tarefas com prazos',
            'Comunicação interpessoal e empatia no trabalho em equipe',
            'Adaptabilidade para novos ambientes e tecnologias'
          ]
        },
        languages: {
          title: 'IDIOMAS',
          items: [
            { language: 'Português', level: 'Nativo' },
            { language: 'Inglês', level: 'Intermediário' },
            { language: 'Espanhol', level: 'Básico' }
          ]
        },
        courses: {
          title: 'CURSOS COMPLEMENTARES',
          items: [
            { name: 'Desenvolvimento Web', institution: 'DevMedia', year: '2023' },
            { name: 'A Importância do Atendimento', institution: 'H4T Consulting', year: '2019' },
            { name: 'Sommelier – 1º módulo', institution: 'ABS', year: '2016', note: '(habilidades de análise sensorial e foco em detalhes)' }
          ]
        }
      }
    },
    en: {
      name: 'HEITOR RAFAEL BEZERRA DELFINO',
      title1: 'Systems Analyst and Software Developer',
      title2: 'Former Kitchen Chef',
      quote: 'Health is what matters',
      location: 'Praia Grande – SP',
      phone: '(13) 99790-2633',
      email: 'heitorbdelfino@gmail.com',
      nav: {
        home: 'Home',
        projects: 'Projects',
        about: 'About',
        skills: 'Skills',
        contact: 'Contact'
      },
      resume: {
        objective: {
          title: 'OBJECTIVE',
          content: 'Internship or junior position in Technology (Information Security, Development, Infrastructure, Database, etc.). Professional in career transition with solid experience in leadership, problem solving and working under pressure in the gastronomic sector. Currently studying Systems Analysis and Development and beginner developer with front-end and back-end projects. I seek an opportunity to start my professional trajectory in IT and evolve with consistency and dedication.'
        },
        education: {
          title: 'ACADEMIC BACKGROUND',
          items: [
            {
              course: 'Systems Analysis and Development',
              institution: 'FATEC – Praia Grande',
              period: '2023 – 2026'
            },
            {
              course: 'Technology in Gastronomy',
              institution: 'HOTEC Educational Group',
              period: 'Completed in 2016'
            }
          ]
        },
        skills: {
          title: 'TECHNICAL SKILLS',
          languages: 'HTML, CSS, JavaScript, Git, Java, Node.js, SQL Database, CORS, VPN',
          ai: 'Artificial Intelligence: GPT-4 (OpenAI), Claude 3 (Anthropic), Gemini (Google), Prompt Engineering, API Integration',
          others: 'GitHub, API Integration, Responsive Web Development, Servers, Office Suite, Internet and Social Media (advanced)'
        },
        experience: {
          title: 'PROFESSIONAL EXPERIENCE',
          items: [
            {
              position: 'FULL STACK DEVELOPER',
              company: 'MaxiMundi - Time Management System',
              description: 'Complete development of SaaS for corporate time control using React.js, Node.js and PostgreSQL. Implementation of modern architecture with JWT authentication, multi-level user management and responsive administrative dashboard. Creation of automatic deployment system, database migration scripts and remote access configuration via VPN for home office work. Application of agile methodologies, Git versioning and comprehensive technical documentation to facilitate maintenance and scalability.',
              technologies: 'React 18, Material-UI, Node.js, Express, PostgreSQL, PM2, PowerShell, ZeroTier VPN',
              features: 'Authentication and authorization system, Dashboard with real-time reports, Complete user and password management, RESTful API with CORS configured, Automated deployment and backup scripts, Responsive interface with light/dark theme.'
            },
            {
              position: 'ARTIFICIAL INTELLIGENCE DEVELOPER',
              company: 'Personal Projects and Freelance',
              description: 'Development of solutions using Artificial Intelligence APIs such as GPT (OpenAI), Claude (Anthropic) and Gemini (Google). Integration of language models in web applications, process automation with conversational AI and creation of interactive interfaces for chatbots. Experience in prompt engineering, response optimization and implementation of AI systems for solving complex problems.',
              technologies: 'OpenAI GPT-4, Claude 3, Google Gemini, API Integration, JavaScript, Python, React.js',
              features: 'AI API integration, Optimized prompt engineering, Conversational chatbots, AI automation, Natural language processing.'
            },
            {
              position: 'KITCHEN CHEF',
              company: 'Beach Lounge',
              period: '01/2021 – 10/2023',
              description: 'Team leadership and production organization in high demand. Inventory and supplier control (applicable skill to process and data management). Development of resilience and quick thinking, useful for bug resolution and agile project management.'
            },
            {
              position: 'LEAD COOK',
              company: 'Santa Eliza Eco Resort',
              period: '07/2019 – 10/2020',
              description: 'Organization of internal processes and daily production logistics. Team coordination and menu adaptation (with analytical thinking and problem solving under pressure).'
            },
            {
              position: 'MINOR APPRENTICE',
              company: 'Court of Justice – Santana Forum',
              period: '01/2012 – 01/2013',
              description: 'Public service, file organization and internal system use. Development of attention to detail and administrative foundation relevant to the IT sector.'
            }
          ]
        },
        competencies: {
          title: 'TRANSFERABLE COMPETENCIES',
          items: [
            'Leadership and management of multidisciplinary teams',
            'Organization and operational discipline',
            'Skill with routines and task execution with deadlines',
            'Interpersonal communication and empathy in teamwork',
            'Adaptability to new environments and technologies'
          ]
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            { language: 'Portuguese', level: 'Native' },
            { language: 'English', level: 'Intermediate' },
            { language: 'Spanish', level: 'Basic' }
          ]
        },
        courses: {
          title: 'COMPLEMENTARY COURSES',
          items: [
            { name: 'Web Development', institution: 'DevMedia', year: '2023' },
            { name: 'The Importance of Customer Service', institution: 'H4T Consulting', year: '2019' },
            { name: 'Sommelier – 1st module', institution: 'ABS', year: '2016', note: '(sensory analysis skills and attention to detail)' }
          ]
        }
      }
    }
  };

  const t = translations[language];

  return (
    <div className={theme === 'dark' ? 'dark' : ''} style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        background: 'var(--header-bg)',
        borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#home" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600' }}>
              {t.nav.home}
            </a>
            <a href="#projects" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              {t.nav.projects}
            </a>
            <a href="#about" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              {t.nav.about}
            </a>
            <a href="#skills" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
              {t.nav.skills}
            </a>
          </nav>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              style={{
                background: theme === 'dark' ? 'rgba(45, 45, 58, 0.6)' : 'rgba(102, 126, 234, 0.15)',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme === 'dark' ? '#eee' : '#4338ca'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 59, 75, 0.8)' : 'rgba(102, 126, 234, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = theme === 'dark' ? 'rgba(45, 45, 58, 0.6)' : 'rgba(102, 126, 234, 0.15)';
              }}
            >
              {theme === 'light' ? '☕' : '🍺'}
            </button>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              style={{
                background: theme === 'dark' ? 'rgba(45, 45, 58, 0.6)' : 'rgba(102, 126, 234, 0.15)',
                border: theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(102, 126, 234, 0.3)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme === 'dark' ? '#eee' : '#4338ca'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 59, 75, 0.8)' : 'rgba(102, 126, 234, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = theme === 'dark' ? 'rgba(45, 45, 58, 0.6)' : 'rgba(102, 126, 234, 0.15)';
              }}
            >
              {language === 'pt' ? '🍚' : '🍔'}
            </button>

            <button className="btn-primary">
              💬 {t.nav.contact}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f0f23, #1a1a2e)' 
          : 'linear-gradient(135deg, #f0f9ff, #e0e7ff)',
        paddingTop: '80px'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            overflow: 'hidden',
            border: '4px solid var(--profile-border)',
            boxShadow: '0 10px 30px var(--profile-shadow)',
            transition: 'all 0.3s ease'
          }}>
            <img 
              src={heitorPhoto}
              alt="Heitor Rafael Bezerra Delfino"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onError={(e) => {
                // Fallback para emoji se a imagem não carregar
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: ' + (theme === 'dark' ? '#374151' : '#ddd') + ';">👨‍💻</div>';
                }
              }}
            />
          </div>
          
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            {t.name}
          </h1>
          
          <p className="text-gradient" style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>
            {t.title1}
          </p>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}>
            {t.title2}
          </p>
          
          <p style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            fontWeight: '500'
          }}>
            "{t.quote}"
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{
        padding: '5rem 0',
        background: theme === 'dark' ? '#1a1a2e' : '#f8fafc'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--text-primary)'
          }}>
            {language === 'pt' ? 'Meus Projetos' : 'My Projects'}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Projeto 1 - Sistema de Gestão de Tempo */}
            <div style={{
              background: theme === 'dark' ? '#2d2d3a' : 'white',
              borderRadius: '15px',
              padding: '1.5rem',
              boxShadow: theme === 'dark' 
                ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
                : '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              border: theme === 'dark' ? '1px solid #374151' : 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                height: '200px',
                borderRadius: '10px',
                marginBottom: '1rem',
                border: '2px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={() => {
                setModalImageIndex(currentImageIndex);
                setModalOpen(true);
              }}
              >
                <img 
                  src={projectImages[currentImageIndex]}
                  alt={imageMetadata[currentImageIndex]?.alt || `Sistema de Gestão de Tempo - Screenshot ${currentImageIndex + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                
                {/* Indicadores do carrossel */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '5px'
                }}>
                  {projectImages.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: currentImageIndex === index 
                          ? 'rgba(255, 255, 255, 0.9)' 
                          : 'rgba(255, 255, 255, 0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </div>

                {/* Botões de navegação */}
                <button
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '0.7',
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(prev => 
                      prev === 0 ? projectImages.length - 1 : prev - 1
                    );
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                >
                  ❮
                </button>

                <button
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: '0.7',
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(prev => 
                      (prev + 1) % projectImages.length
                    );
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                >
                  ❯
                </button>

                {/* Contador de imagens */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {currentImageIndex + 1}/{projectImages.length}
                </div>
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                {language === 'pt' ? '🕐 Sistema de Gestão de Tempo' : '🕐 Time Management System'}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                marginBottom: '1rem',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                {language === 'pt' 
                  ? 'Sistema completo para controle de tempo corporativo com cronômetro em tempo real, gestão de usuários, relatórios detalhados e dashboard administrativo. Interface moderna e responsiva.'
                  : 'Complete corporate time management system with real-time timer, user management, detailed reports and administrative dashboard. Modern and responsive interface.'
                }
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {['React', 'Node.js', 'PostgreSQL', 'Material-UI', 'JWT'].map(tech => (
                  <span key={tech} style={{
                    background: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                    color: theme === 'dark' ? '#93c5fd' : '#1d4ed8',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a href="https://github.com/HeitorRafael/GestorDeTarefas" target="_blank" rel="noopener noreferrer" style={{
                  background: theme === 'dark' ? '#1e3a8a' : '#3b82f6',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}>
                  📂 {language === 'pt' ? 'Repositório' : 'Repository'}
                </a>
              </div>
            </div>

            {/* Projetos 2 e 3 - Placeholders */}
            {[2, 3].map(i => (
              <div key={i} style={{
                background: theme === 'dark' ? '#2d2d3a' : 'white',
                borderRadius: '15px',
                padding: '1.5rem',
                boxShadow: theme === 'dark' 
                  ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                border: theme === 'dark' ? '1px solid #374151' : 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  height: '200px',
                  background: theme === 'dark' ? '#374151' : '#e5e7eb',
                  borderRadius: '10px',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  �
                </div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  {language === 'pt' ? `Projeto ${i} - Em Breve` : `Project ${i} - Coming Soon`}
                </h3>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  marginBottom: '1rem' 
                }}>
                  {language === 'pt' 
                    ? 'Novo projeto em desenvolvimento. Mais detalhes em breve!'
                    : 'New project in development. More details coming soon!'
                  }
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['React', 'TypeScript', 'CSS'].map(tech => (
                    <span key={tech} style={{
                      background: theme === 'dark' ? '#1e3a8a' : '#dbeafe',
                      color: theme === 'dark' ? '#93c5fd' : '#1d4ed8',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '5rem 0',
        background: theme === 'dark' ? '#0f0f23' : 'white'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--text-primary)'
          }}>
            {language === 'pt' ? 'Currículo' : 'Resume'}
          </h2>

          {/* Objetivo */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              borderBottom: '2px solid var(--text-primary)',
              paddingBottom: '0.5rem'
            }}>
              {t.resume.objective.title}
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: 'var(--text-secondary)'
            }}>
              {t.resume.objective.content}
            </p>
          </div>

          {/* Formação Acadêmica */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              borderBottom: '2px solid var(--text-primary)',
              paddingBottom: '0.5rem'
            }}>
              {t.resume.education.title}
            </h3>
            {t.resume.education.items.map((item, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 'bold', 
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>
                  {item.course}
                </h4>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem'
                }}>
                  {item.institution} | {item.period}
                </p>
              </div>
            ))}
          </div>

          {/* Habilidades Técnicas */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              borderBottom: '2px solid var(--text-primary)',
              paddingBottom: '0.5rem'
            }}>
              {t.resume.skills.title}
            </h3>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ 
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>
                  {language === 'pt' ? 'Linguagens e Ferramentas: ' : 'Languages and Tools: '}
                </strong>
                {t.resume.skills.languages}
              </p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ 
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>
                  {language === 'pt' ? 'Inteligência Artificial: ' : 'Artificial Intelligence: '}
                </strong>
                {t.resume.skills.ai}
              </p>
            </div>
            <div>
              <p style={{ 
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>
                  {language === 'pt' ? 'Outros: ' : 'Others: '}
                </strong>
                {t.resume.skills.others}
              </p>
            </div>
          </div>

          {/* Experiência Profissional */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              borderBottom: '2px solid var(--text-primary)',
              paddingBottom: '0.5rem'
            }}>
              {t.resume.experience.title}
            </h3>
            {t.resume.experience.items.map((item, index) => (
              <div key={index} style={{ 
                marginBottom: '2rem',
                padding: '1.5rem',
                background: theme === 'dark' ? '#1a1a2e' : '#f8fafc',
                borderRadius: '10px',
                border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb'
              }}>
                <h4 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold', 
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>
                  {item.position}
                </h4>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {item.company} {item.period && `| ${item.period}`}
                </p>
                <p style={{ 
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  marginBottom: item.technologies ? '1rem' : '0'
                }}>
                  {item.description}
                </p>
                {item.technologies && (
                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <strong style={{ color: 'var(--text-primary)' }}>
                        {language === 'pt' ? 'Tecnologias utilizadas: ' : 'Technologies used: '}
                      </strong>
                      {item.technologies}
                    </p>
                  </div>
                )}
                {item.features && (
                  <div>
                    <p style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem'
                    }}>
                      <strong style={{ color: 'var(--text-primary)' }}>
                        {language === 'pt' ? 'Funcionalidades implementadas: ' : 'Implemented features: '}
                      </strong>
                      {item.features}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Competências Transferíveis */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              borderBottom: '2px solid var(--text-primary)',
              paddingBottom: '0.5rem'
            }}>
              {t.resume.competencies.title}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {t.resume.competencies.items.map((item, index) => (
                <li key={index} style={{
                  fontSize: '1rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem',
                  paddingLeft: '1rem',
                  position: 'relative'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: 'var(--text-primary)'
                  }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Idiomas e Cursos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Idiomas */}
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                borderBottom: '2px solid var(--text-primary)',
                paddingBottom: '0.5rem'
              }}>
                {t.resume.languages.title}
              </h3>
              {t.resume.languages.items.map((item, index) => (
                <div key={index} style={{ marginBottom: '0.5rem' }}>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '1rem'
                  }}>
                    <strong style={{ color: 'var(--text-primary)' }}>
                      {item.language}:
                    </strong> {item.level}
                  </p>
                </div>
              ))}
            </div>

            {/* Cursos */}
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                borderBottom: '2px solid var(--text-primary)',
                paddingBottom: '0.5rem'
              }}>
                {t.resume.courses.title}
              </h3>
              {t.resume.courses.items.map((item, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: 'bold', 
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {item.name}
                  </h4>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}>
                    {item.institution} – {item.year} {item.note && item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{
        padding: '5rem 0',
        background: 'var(--skills-bg)'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'white'
          }}>
            {language === 'pt' ? 'Minhas Skills' : 'My Skills'}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { name: 'Figma', icon: '🎨' },
              { name: 'Git', icon: '📚' },
              { name: 'CSS', icon: '🎨' },
              { name: 'HTML', icon: '📄' },
              { name: 'Java', icon: '☕' },
              { name: 'VS Code', icon: '💻' },
              { name: 'IntelliJ', icon: '🧠' }
            ].map((skill) => (
              <div key={skill.name} style={{
                background: 'var(--skills-card-bg)',
                backdropFilter: 'blur(10px)',
                border: theme === 'dark' 
                  ? '1px solid rgba(255, 255, 255, 0.1)' 
                  : '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '15px',
                padding: '1.5rem',
                textAlign: 'center',
                color: 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: theme === 'dark' 
                  ? '0 4px 15px rgba(0, 0, 0, 0.3)' 
                  : '0 4px 15px rgba(102, 126, 234, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.background = 'var(--skills-card-hover)';
                e.currentTarget.style.boxShadow = theme === 'dark' 
                  ? '0 8px 25px rgba(0, 0, 0, 0.4)' 
                  : '0 8px 25px rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'var(--skills-card-bg)';
                e.currentTarget.style.boxShadow = theme === 'dark' 
                  ? '0 4px 15px rgba(0, 0, 0, 0.3)' 
                  : '0 4px 15px rgba(102, 126, 234, 0.2)';
              }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '0.5rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                }}>
                  {skill.icon}
                </div>
                <div style={{ 
                  fontWeight: 'bold',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}>
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div style={{
            background: theme === 'dark' 
              ? 'rgba(15, 15, 35, 0.8)' 
              : 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(15px)',
            border: theme === 'dark' 
              ? '1px solid rgba(255, 255, 255, 0.1)' 
              : '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            marginTop: '3rem',
            color: 'white',
            maxWidth: '600px',
            margin: '3rem auto 0',
            boxShadow: theme === 'dark' 
              ? '0 8px 32px rgba(0, 0, 0, 0.4)' 
              : '0 8px 32px rgba(102, 126, 234, 0.3)'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              📧 heitorbdelfino@gmail.com
            </h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <a href="https://www.linkedin.com/in/heitor-rafael-bezerra-delfino-129760187/" 
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{ 
                   color: 'white', 
                   textDecoration: 'none',
                   transition: 'all 0.3s ease',
                   padding: '0.5rem 1rem',
                   borderRadius: '10px',
                   textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.color = '#93c5fd';
                   e.currentTarget.style.background = 'rgba(147, 197, 253, 0.1)';
                   e.currentTarget.style.transform = 'translateY(-2px)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.color = 'white';
                   e.currentTarget.style.background = 'transparent';
                   e.currentTarget.style.transform = 'translateY(0)';
                 }}
              >
                📱 LinkedIn
              </a>
              <a href="#" 
                 style={{ 
                   color: 'white', 
                   textDecoration: 'none',
                   transition: 'all 0.3s ease',
                   padding: '0.5rem 1rem',
                   borderRadius: '10px',
                   textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.color = '#fbbf24';
                   e.currentTarget.style.background = 'rgba(251, 191, 36, 0.1)';
                   e.currentTarget.style.transform = 'translateY(-2px)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.color = 'white';
                   e.currentTarget.style.background = 'transparent';
                   e.currentTarget.style.transform = 'translateY(0)';
                 }}
              >
                📸 Instagram
              </a>
              <a href="https://github.com/HeitorRafael" 
                 target="_blank"
                 rel="noopener noreferrer"
                 style={{ 
                   color: 'white', 
                   textDecoration: 'none',
                   transition: 'all 0.3s ease',
                   padding: '0.5rem 1rem',
                   borderRadius: '10px',
                   textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.color = '#a78bfa';
                   e.currentTarget.style.background = 'rgba(167, 139, 250, 0.1)';
                   e.currentTarget.style.transform = 'translateY(-2px)';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.color = 'white';
                   e.currentTarget.style.background = 'transparent';
                   e.currentTarget.style.transform = 'translateY(0)';
                 }}
              >
                🐱 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para expandir imagens */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '2rem'
        }}
        onClick={() => setModalOpen(false)}
        >
          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            background: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10001,
                transition: 'all 0.3s ease'
              }}
              onClick={() => setModalOpen(false)}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)'}
            >
              ✕
            </button>

            {/* Imagem principal */}
            <img 
              src={projectImages[modalImageIndex]}
              alt={imageMetadata[modalImageIndex]?.alt || `Sistema de Gestão de Tempo - Screenshot ${modalImageIndex + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />

            {/* Navegação do modal */}
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
              padding: '2rem 1rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              {/* Botão anterior */}
              <button
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  opacity: modalImageIndex > 0 ? 1 : 0.3
                }}
                onClick={() => {
                  if (modalImageIndex > 0) {
                    setModalImageIndex(prev => prev - 1);
                  }
                }}
                disabled={modalImageIndex === 0}
                onMouseEnter={(e) => {
                  if (modalImageIndex > 0) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  }
                }}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              >
                ❮
              </button>

              {/* Indicadores e info */}
              <div style={{ textAlign: 'center', color: 'white' }}>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {projectImages.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: modalImageIndex === index 
                          ? 'white' 
                          : 'rgba(255, 255, 255, 0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => setModalImageIndex(index)}
                    />
                  ))}
                </div>
                <p style={{ 
                  margin: 0, 
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                }}>
                  {modalImageIndex + 1} / {projectImages.length}
                </p>
                <p style={{ 
                  margin: 0, 
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                }}>
                  {language === 'pt' ? 'Sistema de Gestão de Tempo' : 'Time Management System'}
                </p>
              </div>

              {/* Botão próximo */}
              <button
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  opacity: modalImageIndex < projectImages.length - 1 ? 1 : 0.3
                }}
                onClick={() => {
                  if (modalImageIndex < projectImages.length - 1) {
                    setModalImageIndex(prev => prev + 1);
                  }
                }}
                disabled={modalImageIndex === projectImages.length - 1}
                onMouseEnter={(e) => {
                  if (modalImageIndex < projectImages.length - 1) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  }
                }}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{
        background: theme === 'dark' ? '#0f0f23' : '#1f2937',
        color: 'white',
        textAlign: 'center',
        padding: '2rem 0',
        borderTop: theme === 'dark' ? '1px solid #374151' : 'none'
      }}>
        <p>
          © 2025 Heitor Rafael Bezerra Delfino. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
        </p>
      </footer>
    </div>
  );
};

export default SimpleApp;
