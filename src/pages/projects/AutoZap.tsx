import { Link } from 'react-router-dom';

const ACCENT = '#0F4C81';
const ACCENT_MUTED = 'rgba(15,76,129,0.35)';

const stack = [
  'Docker', 'Evolution API', 'Typebot', 'n8n', 'Chatwoot',
  'PostgreSQL', 'Redis', 'Nginx Proxy Manager',
  'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'OpenAI GPT-4o-mini', 'Google Drive', 'Google Sheets',
  'bcryptjs', 'jose (JWT)',
];

const features = [
  {
    icon: '💬',
    title: 'WhatsApp 24h',
    desc: 'Bot responde a qualquer hora com IA contextual. Fora do horário comercial, coleta o lead e avisa o atendente.',
  },
  {
    icon: '🗂️',
    title: 'Fluxos por Nicho',
    desc: 'Templates prontos para imobiliária, restaurante, clínica/estética e MEI. Cada flow captura os dados certos do segmento.',
  },
  {
    icon: '🧠',
    title: 'RAG com Google Drive',
    desc: 'Base de conhecimento em arquivos .txt no Drive do cliente. A IA responde perguntas frequentes com contexto real da empresa.',
  },
  {
    icon: '📊',
    title: 'Painel Admin',
    desc: 'Dashboard com tabela de leads, filtros, ordenação, export CSV e gráficos de conversão. Auth JWT + bcrypt com rate limiting.',
  },
  {
    icon: '🔀',
    title: 'Handoff Humano',
    desc: 'Quando a IA não sabe responder, transfere a conversa para o Chatwoot. O atendente vê o contexto completo.',
  },
  {
    icon: '📈',
    title: 'Relatório Semanal',
    desc: 'Todo domingo o n8n calcula métricas da semana e envia um resumo direto no WhatsApp do responsável — sem entrar em nenhum painel.',
  },
  {
    icon: '🏗️',
    title: 'Infra Multi-Cliente',
    desc: 'Um VPS serve N clientes. Cada empresa tem instância Evolution, flow Typebot, workflow n8n, inbox Chatwoot e aba no Sheets próprios.',
  },
  {
    icon: '⚡',
    title: 'Deploy em 5 Dias',
    desc: 'Do formulário preenchido ao bot funcionando: infra em Docker, personalização do flow, teste completo e entrega em 5 dias úteis.',
  },
];

const architecture = [
  { layer: 'WhatsApp', service: 'Evolution API', desc: 'Bridge com a API não-oficial do WhatsApp Business' },
  { layer: 'Fluxos',   service: 'Typebot',        desc: 'Conversas estruturadas com coleta de variáveis' },
  { layer: 'Lógica',   service: 'n8n',            desc: 'Webhooks, IA, Sheets, notificações e relatórios' },
  { layer: 'Humano',   service: 'Chatwoot',        desc: 'Inbox de atendimento humano com contexto do bot' },
  { layer: 'IA',       service: 'GPT-4o-mini',    desc: 'Respostas com RAG — contexto da empresa em real-time' },
  { layer: 'CRM',      service: 'Google Sheets',  desc: 'Registro de leads acessível sem login em sistema' },
];

export default function AutoZapPage() {
  return (
    <div style={{ background: '#0D0D0D', minHeight: '100vh', color: '#F2EFE7', fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Nav */}
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

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem',
            color: '#777', letterSpacing: '0.25em', marginBottom: '1.5rem', display: 'block',
          }}>
            PROJETO — SAAS · WHATSAPP · IA · B2B
          </span>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900,
            letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 0.75rem',
          }}>
            Auto<em style={{ color: ACCENT }}>Atende</em>
          </h1>

          <p style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
            color: ACCENT, letterSpacing: '0.2em', marginBottom: '2rem', opacity: 0.9,
          }}>
            AUTOMAÇÃO DE WHATSAPP COM IA — BAIXADA SANTISTA
          </p>

          <p style={{ fontSize: '1.05rem', color: '#aaa', maxWidth: '540px', lineHeight: 1.75, margin: '0 auto 2rem' }}>
            Serviço B2B que transforma o WhatsApp de micro e pequenas empresas num atendente
            virtual 24h — com IA contextual, captura de leads automática e handoff para humano
            quando necessário. Setup único + mensalidade mensal.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://auto-3ftt9ytud-heitor-delfinos-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '0.65rem 1.75rem',
                border: `1px solid ${ACCENT}`, background: ACCENT,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem', color: '#0D0D0D', letterSpacing: '0.15em',
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
            >
              ACESSAR SITE AO VIVO ↗
            </a>
            <a
              href="https://github.com/HeitorRafael/Auto-Zap"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', padding: '0.65rem 1.75rem',
                border: `1px solid ${ACCENT_MUTED}`, fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem', color: '#F2EFE7', letterSpacing: '0.15em',
                textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = ACCENT; (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = ACCENT_MUTED; (e.currentTarget as HTMLAnchorElement).style.color = '#F2EFE7'; }}
            >
              VER REPOSITÓRIO →
            </a>
          </div>
        </div>

        {/* Modelo de negócio */}
        <div style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'rgba(242,239,231,0.06)' }}>
          {[
            { label: 'SETUP',        value: 'R$ 1.500 – 2.500',   sub: 'implantação única' },
            { label: 'MENSALIDADE',  value: 'R$ 500 – 800 / mês', sub: 'recorrente' },
            { label: 'META',         value: '8 clientes',          sub: 'R$ 4.000 / mês' },
            { label: 'SEGMENTOS',    value: '4 nichos',            sub: 'templates prontos' },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{ background: '#0D0D0D', padding: '1.5rem 1.25rem', textAlign: 'center' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.52rem', color: '#3A3A3A', letterSpacing: '0.2em', marginBottom: '0.6rem' }}>{label}</div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: '#F2EFE7', marginBottom: '0.25rem' }}>{value}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#555', letterSpacing: '0.1em' }}>{sub}</div>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}>STACK</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {stack.map(s => (
              <span key={s} style={{
                padding: '0.3rem 0.8rem', border: '1px solid rgba(242,239,231,0.1)',
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                color: '#777', letterSpacing: '0.05em',
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>FUNCIONALIDADES</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1px', background: 'rgba(242,239,231,0.06)' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: '#0D0D0D', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '0.6rem' }}>{f.icon}</div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#F2EFE7', letterSpacing: '0.08em', margin: '0 0 0.5rem' }}>{f.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arquitetura */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>ARQUITETURA</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(242,239,231,0.06)' }}>
            {architecture.map(({ layer, service, desc }) => (
              <div key={service} style={{ background: '#0D0D0D', padding: '1rem 1.25rem', display: 'grid', gridTemplateColumns: '80px 160px 1fr', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.15em' }}>{layer.toUpperCase()}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: ACCENT, letterSpacing: '0.1em' }}>{service}</span>
                <span style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Segmentos */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>SEGMENTOS ATENDIDOS</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', background: 'rgba(242,239,231,0.06)' }}>
            {[
              { icon: '🏠', label: 'Imobiliárias',     sub: 'Praia Grande' },
              { icon: '🍽️', label: 'Restaurantes',     sub: 'Santos / Gonzaga' },
              { icon: '✨', label: 'Clínicas / Estética', sub: 'Santos · São Vicente' },
              { icon: '🔧', label: 'MEI / Prestadores',  sub: 'São Vicente' },
            ].map(({ icon, label, sub }) => (
              <div key={label} style={{ background: '#0D0D0D', padding: '1.5rem 1.25rem' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{icon}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#F2EFE7', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>{label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#555', letterSpacing: '0.1em' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div style={{ borderTop: '1px solid rgba(242,239,231,0.08)', paddingTop: '2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>STATUS</span>
            <span style={{ fontSize: '0.9rem', color: ACCENT }}>Aguardando Deploy no VPS</span>
          </div>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>PROGRESSO</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '120px', height: '4px', background: 'rgba(242,239,231,0.08)', borderRadius: '2px' }}>
                <div style={{ width: '95%', height: '100%', background: ACCENT, borderRadius: '2px' }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#777' }}>95%</span>
            </div>
          </div>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>SITE AO VIVO</span>
            <a
              href="https://auto-3ftt9ytud-heitor-delfinos-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#777', textDecoration: 'none', letterSpacing: '0.05em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F2EFE7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#777')}
            >
              autoatende.vercel.app ↗
            </a>
          </div>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>REPOSITÓRIO</span>
            <a
              href="https://github.com/HeitorRafael/Auto-Zap"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#777', textDecoration: 'none', letterSpacing: '0.05em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F2EFE7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#777')}
            >
              github.com/HeitorRafael/Auto-Zap →
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
