import { Link } from 'react-router-dom';

export default function FoliumPage() {
  const stack = ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Prisma', 'PostgreSQL'];

  const features = [
    { icon: '📝', title: 'Ensaios em Markdown', desc: 'Escreva e publique ensaios com editor Markdown rico e pré-visualização em tempo real' },
    { icon: '🏛️', title: 'Tópicos / Comunidades', desc: 'Organize conteúdo em comunidades temáticas — Filosofia, Ciência, Tecnologia e mais' },
    { icon: '⚗️', title: 'Sistema de Frascos', desc: 'Avalie ensaios com "frascos" — uma forma mais criteriosa de curar qualidade' },
    { icon: '🔍', title: 'Busca Inteligente', desc: 'Busca por título e conteúdo dentro de tópicos específicos' },
    { icon: '🤖', title: 'Assistente de Escrita', desc: 'Claude API integrado para ajudar na estrutura e argumentação dos ensaios' },
    { icon: '📊', title: 'Feed Rankeado', desc: 'Algoritmo de relevância com filtros de tempo — sem engajamento vazio' },
  ];

  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', color: '#F2EFE7', fontFamily: "'Inter', system-ui, sans-serif" }}>
      <nav style={{ padding: '2rem 2.5rem', borderBottom: '1px solid rgba(242,239,231,0.08)' }}>
        <Link
          to="/"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#777', letterSpacing: '0.15em', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#F2EFE7')}
          onMouseLeave={e => (e.currentTarget.style.color = '#777')}
        >
          ← PORTFOLIO
        </Link>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.25em', marginBottom: '1.5rem', display: 'block' }}>
            PROJETO — REDE SOCIAL ACADÊMICA
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 1.5rem' }}>
            <em style={{ color: '#a78bfa' }}>Folium</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '480px', lineHeight: 1.7, margin: '0 auto 2rem' }}>
            Rede social de ensaios acadêmicos curados pela comunidade. Conteúdo de qualidade, sem algoritmo de engajamento vazio.
          </p>
        </div>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1rem' }}>O PROBLEMA</h2>
          <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: 1.8 }}>
            Redes sociais acadêmicas existentes são ou muito formais (ResearchGate, Academia.edu) ou completamente dominadas
            por ruído (Twitter/X). O Folium é uma plataforma focada em ensaios — textos longos, bem estruturados, avaliados
            por quem entende do assunto. O sistema de "frascos" substitui o like impulsivo por uma curadoria mais cuidadosa.
          </p>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '2rem' }}>FUNCIONALIDADES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#F2EFE7' }}>{f.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>STACK</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {stack.map(s => (
              <span key={s} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)', padding: '0.4rem 0.8rem', letterSpacing: '0.05em' }}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em' }}>
          [ EM DESENVOLVIMENTO — 15% COMPLETO ]
        </div>
      </main>
    </div>
  );
}
