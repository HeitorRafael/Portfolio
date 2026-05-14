import { Link } from 'react-router-dom';

export default function FluxoDiaPage() {
  const stack = ['Electron', 'React', 'Vite', 'Tailwind CSS', 'SQLite', 'Recharts', 'Node.js'];

  const features = [
    { icon: '🗓️', title: 'Calendário Inteligente', desc: 'Visualização diária, semanal e mensal com tarefas e compromissos integrados' },
    { icon: '🤖', title: 'Chat com IA', desc: 'Assistente integrado para criar tarefas, lembretes e sugestões de organização' },
    { icon: '🔁', title: 'Recorrência', desc: 'Tarefas recorrentes configuráveis — diária, semanal, mensal' },
    { icon: '🔔', title: 'Notificações', desc: 'Alertas nativos do sistema para compromissos e prazos importantes' },
    { icon: '📊', title: 'Stats de Produtividade', desc: 'Gráficos de tarefas concluídas, tempo por categoria e tendências semanais' },
    { icon: '💾', title: 'Offline First', desc: 'Funciona 100% offline com banco SQLite local — sem dependência de internet' },
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
            PROJETO — PRODUTIVIDADE DESKTOP
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 1.5rem' }}>
            Fluxo<em style={{ color: '#60a5fa' }}>Dia</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '480px', lineHeight: 1.7, margin: '0 auto 2rem' }}>
            Agenda pessoal inteligente para desktop. Calendário, chat com IA, tarefas recorrentes e stats de produtividade — tudo offline.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/HeitorRafael/FluxoDia"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#60a5fa', letterSpacing: '0.15em', textDecoration: 'none', border: '1px solid #60a5fa', padding: '0.6rem 1.2rem' }}
            >
              VER NO GITHUB →
            </a>
          </div>
        </div>

        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1rem' }}>O PROBLEMA</h2>
          <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: 1.8 }}>
            Apps de agenda na web dependem de internet e dispersam atenção. Apps de produtividade genéricos têm curva de aprendizado
            longa e recursos desnecessários. O FluxoDia é um app desktop leve, offline e focado: você abre, vê seu dia, organiza e
            fecha — com IA integrada pra quem quer ir além de uma lista de tarefas.
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
              <span key={s} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.3)', padding: '0.4rem 0.8rem', letterSpacing: '0.05em' }}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em' }}>
          [ EM DESENVOLVIMENTO — 60% COMPLETO ]
        </div>
      </main>
    </div>
  );
}
