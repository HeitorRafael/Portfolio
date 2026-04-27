import { Link } from 'react-router-dom';

const C = {
  ink:          '#0D0D0D',
  paper:        '#F2EFE7',
  red:          '#C0392B',
  muted:        '#777777',
  dimmed:       '#3A3A3A',
  border:       'rgba(242,239,231,0.08)',
  borderMid:    'rgba(242,239,231,0.16)',
} as const;

const F = {
  serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans:  "'Inter', system-ui, -apple-system, sans-serif",
  mono:  "'JetBrains Mono', 'Courier New', monospace",
} as const;

const LIME = '#C8F135';
const SKY  = '#38BDF8';
const BG   = '#0A0F1E';

const STACK = [
  'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma',
  'PostgreSQL', 'NextAuth v5', 'Stripe', 'Resend', 'Vercel',
];

const FEATURES = [
  { title: 'Perfil Acadêmico Vivo', desc: 'Estudantes montam um currículo completo com portfólio, habilidades e experiências — gratuito durante toda a faculdade.' },
  { title: 'Timer de Validade', desc: 'Conta gratuita vinculada à duração do curso. Ao se formar, o estudante migra para um plano Alumni.' },
  { title: 'Busca Inteligente', desc: 'Empresas filtram por curso, semestre, habilidades e cidade. Candidatos ordenados por senioridade acadêmica.' },
  { title: 'Transparência Total', desc: 'Campo obrigatório de bolsa, benefícios e possibilidade de efetivação em toda vaga publicada.' },
  { title: 'Verificação Institucional', desc: 'Alunos só se cadastram com e-mail do domínio da faculdade parceira — anti-fraude por design.' },
  { title: 'Modelo Freemium B2B2C', desc: 'Alunos gratuitos durante o curso. Empresas têm planos FREE, BASIC, PRO e ENTERPRISE.' },
];

const PHASES = [
  { num: '01', name: 'Fundação', status: 'done', desc: 'Setup Next.js, Prisma schema, NextAuth, middleware' },
  { num: '02', name: 'Onboarding Alunos', status: 'done', desc: 'Cadastro multi-step, validação de e-mail institucional' },
  { num: '03', name: 'Onboarding Empresas', status: 'done', desc: 'Cadastro multi-step, verificação de CNPJ' },
  { num: '04', name: 'Matching & Propostas', status: 'next', desc: 'Busca de candidatos, envio e gestão de propostas' },
  { num: '05', name: 'Painel Admin', status: 'pending', desc: 'KPIs, gestão de alunos, empresas e instituições' },
  { num: '06', name: 'Monetização', status: 'pending', desc: 'Stripe checkout, webhooks, cron de expiração' },
];

export default function StagiumPage() {
  return (
    <div style={{ background: BG, minHeight: '100vh', color: C.paper, fontFamily: F.sans }}>
      {/* Nav */}
      <nav style={{ padding: '2rem 2.5rem', borderBottom: `1px solid ${C.border}` }}>
        <Link
          to="/"
          style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.15em', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = C.paper)}
          onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
        >
          ← PORTFOLIO
        </Link>
      </nav>

      {/* Hero */}
      <header style={{ padding: '5rem 2.5rem 4rem', maxWidth: '960px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: `radial-gradient(circle, ${LIME}10 0%, transparent 70%)`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '350px', height: '350px', background: `radial-gradient(circle, ${SKY}08 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: `${LIME}18`, border: `1px solid ${LIME}40`, borderRadius: '999px', padding: '0.3rem 0.85rem', marginBottom: '1.75rem', fontSize: '0.72rem', color: LIME, fontWeight: 600, letterSpacing: '0.1em' }}>
          PROJETO 05 · EM DESENVOLVIMENTO
        </div>

        <h1 style={{ fontFamily: F.serif, fontWeight: 900, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
          Stagium
          <span style={{ color: LIME }}>.</span>
        </h1>

        <p style={{ fontFamily: F.mono, fontSize: '0.9rem', color: C.muted, letterSpacing: '0.05em', marginBottom: '2rem' }}>
          "Seu próximo passo começa aqui."
        </p>

        <p style={{ fontSize: '1.05rem', color: 'rgba(242,239,231,0.7)', maxWidth: '620px', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          Plataforma de conexão entre estudantes universitários e empresas que buscam estagiários —
          sofisticada como um portfólio, direta como um currículo, acessível como uma rede social moderna.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/HeitorRafael/Stagium" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: F.mono, fontSize: '0.72rem', color: C.ink, background: LIME, padding: '0.7rem 1.5rem', letterSpacing: '0.1em', textDecoration: 'none' }}>
            ⌨️ GITHUB
          </a>
          <span style={{ fontFamily: F.mono, fontSize: '0.72rem', color: LIME, border: `1px solid ${LIME}40`, padding: '0.7rem 1.5rem', letterSpacing: '0.1em' }}>
            🚧 EM CONSTRUÇÃO
          </span>
        </div>
      </header>

      {/* Stack */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: '3rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '1.5rem' }}>STACK TECNOLÓGICA</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {STACK.map((s) => (
            <span key={s} style={{ fontFamily: F.mono, fontSize: '0.72rem', color: LIME, border: `1px solid ${LIME}30`, padding: '0.3rem 0.85rem', letterSpacing: '0.05em' }}>{s}</span>
          ))}
        </div>
      </section>

      {/* O problema */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: '3rem 2.5rem', maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
        <div>
          <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '1rem' }}>O PROBLEMA</div>
          <h2 style={{ fontFamily: F.serif, fontWeight: 700, fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '1rem' }}>
            Estágio é o primeiro emprego.<br />Mas o mercado não foi feito pra quem está começando.
          </h2>
          <p style={{ color: 'rgba(242,239,231,0.6)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            LinkedIn foi feito para profissionais sêniores. Apps de emprego não valorizam o contexto acadêmico.
            O estudante não tem como mostrar que está próximo da formatura, que tem projetos relevantes,
            que está no período certo. O Stagium resolve isso.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '1rem' }}>A SOLUÇÃO</div>
          <h2 style={{ fontFamily: F.serif, fontWeight: 700, fontSize: '1.8rem', lineHeight: 1.2, marginBottom: '1rem' }}>
            Um currículo vivo,<br />verificado e atualizado.
          </h2>
          <p style={{ color: 'rgba(242,239,231,0.6)', lineHeight: 1.8, fontSize: '0.95rem' }}>
            A empresa pesquisa, filtra e contata. O estudante só precisa manter o perfil atualizado.
            Verificação por e-mail institucional elimina fraudes. Timer de validade cria senso de urgência
            e gera oportunidade de monetização pós-formatura.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: '3rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '2rem' }}>FUNCIONALIDADES PRINCIPAIS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: C.border }}>
          {FEATURES.map(({ title, desc }) => (
            <div key={title} style={{ background: BG, padding: '1.5rem', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,241,53,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = BG)}
            >
              <div style={{ color: LIME, fontSize: '0.65rem', fontFamily: F.mono, letterSpacing: '0.1em', marginBottom: '0.6rem' }}>✦</div>
              <h3 style={{ fontFamily: F.serif, fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.65rem' }}>{title}</h3>
              <p style={{ color: 'rgba(242,239,231,0.55)', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fases */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: '3rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '2rem' }}>FASES DE DESENVOLVIMENTO</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: C.border }}>
          {PHASES.map(({ num, name, status, desc }) => (
            <div key={num} style={{ background: BG, padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(242,239,231,0.025)')}
              onMouseLeave={e => (e.currentTarget.style.background = BG)}
            >
              <span style={{ fontFamily: F.mono, fontWeight: 900, fontSize: '1.4rem', color: status === 'done' ? LIME : C.dimmed, minWidth: '2.5rem' }}>{num}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: F.sans, fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{name}</div>
                <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.05em' }}>{desc}</div>
              </div>
              <span style={{ fontFamily: F.mono, fontSize: '0.65rem', letterSpacing: '0.12em', padding: '0.2rem 0.65rem', border: `1px solid ${status === 'done' ? LIME + '50' : status === 'next' ? SKY + '40' : C.borderMid}`, color: status === 'done' ? LIME : status === 'next' ? SKY : C.dimmed }}>
                {status === 'done' ? 'FEITO' : status === 'next' ? 'PRÓXIMO' : 'PENDENTE'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Design System */}
      <section style={{ borderTop: `1px solid ${C.border}`, padding: '3rem 2.5rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '1.75rem' }}>DESIGN SYSTEM "ACADEMIC DARK"</div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {[
            { name: 'Background', hex: '#0A0F1E' },
            { name: 'Lime', hex: '#C8F135' },
            { name: 'Sky', hex: '#38BDF8' },
            { name: 'Coral', hex: '#FF6B6B' },
            { name: 'Gold', hex: '#F5C518' },
          ].map(({ name, hex }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.5rem 1rem', border: `1px solid ${C.border}` }}>
              <div style={{ width: '1rem', height: '1rem', background: hex, borderRadius: '2px', border: name === 'Background' ? `1px solid ${C.border}` : 'none' }} />
              <div>
                <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.08em' }}>{name}</div>
                <div style={{ fontFamily: F.mono, fontSize: '0.7rem', color: C.paper }}>{hex}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ color: 'rgba(242,239,231,0.55)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Fontes: <strong style={{ color: C.paper }}>Syne</strong> (títulos, display) + <strong style={{ color: C.paper }}>DM Sans</strong> (corpo). Dark mode como padrão com glassmorphism sutil nos cards.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${C.border}`, padding: '2.5rem', textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/" style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.15em', textDecoration: 'none' }}
          onMouseEnter={e => (e.currentTarget.style.color = C.paper)}
          onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
        >
          ← VOLTAR AO PORTFOLIO
        </Link>
      </footer>
    </div>
  );
}
