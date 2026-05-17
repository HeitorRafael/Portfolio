import { Link } from 'react-router-dom';

export default function RespirArPage() {
  const stack = ['React 18', 'TypeScript', 'Vite', 'Leaflet.js', 'Supabase Realtime', 'OpenWeather API', 'Vite PWA Plugin', 'Vercel'];

  const features = [
    {
      icon: '👃',
      title: 'Nariz Seletor',
      desc: 'Interface com nariz gigante interativo — toque na narina esquerda, direita ou ambas pra reportar o entupimento com precisão cirúrgica',
    },
    {
      icon: '🗺️',
      title: 'Mapa de Infecção',
      desc: 'Heatmap em tempo real com Leaflet.js. Pontos somem automaticamente após 2–4h. 20+ reportes na mesma área ativa a ZONA INFECTADA com efeito de fumaça visual',
    },
    {
      icon: '🦠',
      title: 'Sistema de Vilões',
      desc: 'General Poeira, Dona Secura e Polu-Monstro aparecem como ícones nos epicentros. Seu avatar vira zumbi se você ficar 10min numa zona vermelha',
    },
    {
      icon: '🏆',
      title: 'Placar da Vergonha',
      desc: 'Ranking em tempo real dos bairros e cidades onde é mais difícil respirar. Atualizado com dados coletados pela própria comunidade',
    },
    {
      icon: '🌡️',
      title: 'Dados Reais',
      desc: 'OpenWeather API traz umidade relativa do ar e índice de poluição — valida se o nariz da galera tá entupido por causa do clima mesmo ou é frescura',
    },
    {
      icon: '📱',
      title: 'PWA Instalável',
      desc: 'Funciona como site no PC. No celular, instala na tela inicial sem App Store. Manda notificação: "Você entrou no domínio do General Poeira. Prepare o soro."',
    },
  ];

  const statusLevels = [
    { icon: '💚', name: 'Nariz de Veludo',    color: '#6EE7B7', range: '0 reportes',    desc: 'Área limpa. Respire fundo, esse momento é raro no Brasil.' },
    { icon: '🟡', name: 'Respirador de Boca', color: '#FBBF24', range: '1–5 reportes',  desc: 'Zona de alerta. Tá começando a ficar suspeito por aí. Mantém um lenço por perto.' },
    { icon: '🟠', name: 'Zona Crítica',       color: '#F97316', range: '5–20 reportes', desc: 'Área comprometida. O ícone do vilão aparece no mapa. Soro fisiológico liberado.' },
    { icon: '🔴', name: 'INFECTADO',          color: '#EF4444', range: '20+ reportes',  desc: 'Epicentro de rinite coletiva. Seu avatar virou Zumbi de Nariz Vermelho. Fuja ou clique em "Usei Soro Fisiológico".' },
  ];

  const howItWorks = [
    'Usuário toca no nariz seletor — narina esquerda, direita ou ambas',
    'Geolocalização do browser captura as coordenadas (com permissão)',
    'Reporte vai pro Supabase com lat, lng, side e timestamp',
    'OpenWeather API valida umidade e AQI do local no momento do reporte',
    'Ponto fica ativo no heatmap por 2–4 horas, depois some automaticamente',
    'Leaflet.heat gera o mapa: verde tênue → laranja → verde neon tóxico',
    'Supabase Realtime sincroniza o mapa pra todos os usuários instantaneamente',
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

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.25em', marginBottom: '1.5rem', display: 'block' }}>
            PROJETO — SAÚDE COLETIVA · GAMIFICAÇÃO · PWA
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 0.75rem' }}>
            Respir<em style={{ color: '#6EE7B7' }}>Ar</em>
          </h1>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6EE7B7', letterSpacing: '0.2em', marginBottom: '1.5rem', opacity: 0.75 }}>
            👃 O WAZE DO NARIZ ENTUPIDO
          </p>
          <p style={{ fontSize: '1.05rem', color: '#aaa', maxWidth: '540px', lineHeight: 1.75, margin: '0 auto 2rem' }}>
            Uma PWA gamificada onde a galera reporta em tempo real se o nariz tá entupido — e o mapa mostra quais áreas estão "infectadas".
            Porque nada une mais o brasileiro do que reclamar do tempo seco.
          </p>
          <a
            href="https://github.com/HeitorRafael/RespirAr"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6EE7B7', letterSpacing: '0.15em', textDecoration: 'none', border: '1px solid rgba(110,231,183,0.35)', padding: '0.6rem 1.2rem', borderRadius: '4px', display: 'inline-block' }}
          >
            VER NO GITHUB →
          </a>
        </div>

        {/* O Problema */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1rem' }}>O PROBLEMA</h2>
          <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: 1.8, marginBottom: '1rem' }}>
            O tempo está seco. O ônibus passou soltando fumaça. Alguém está queimando palha do outro lado da cidade.
            Você sente — nariz entupido de novo. Mas você está sozinho nisso?
          </p>
          <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: 1.8 }}>
            Dados de qualidade do ar existem, mas são frios, técnicos e sem contexto humano. O <strong style={{ color: '#F2EFE7' }}>RespirAr</strong> transforma
            a experiência coletiva em dado visual: um mapa que mostra exatamente onde a situação tá crítica —
            contada pela própria galera que tá lá sofrendo.
          </p>
        </section>

        {/* Os Vilões */}
        <section style={{ marginBottom: '3.5rem', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>OS VILÕES DO MAPA</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { emoji: '🦠', name: 'General Poeira',  color: '#F97316', desc: 'Aparece nos epicentros secos. Causado por baixa umidade + longa seca. Derrotado por chuva ou reportes de "nariz limpo" na área.' },
              { emoji: '🏭', name: 'Polu-Monstro',    color: '#EF4444', desc: 'Surge onde o índice de poluição da OpenWeather está crítico. Cresce nas horas de pico do trânsito. Terroriza os centros urbanos.' },
              { emoji: '🌵', name: 'Dona Secura',     color: '#FBBF24', desc: 'Aparece quando a umidade relativa cai abaixo de 30%. Visita São Paulo todo mês de agosto sem falta e sem ser convidada.' },
            ].map(v => (
              <div key={v.name} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{v.emoji}</span>
                <div>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: v.color, margin: '0 0 0.3rem', fontWeight: 700, letterSpacing: '0.08em' }}>{v.name}</p>
                  <p style={{ fontSize: '0.85rem', color: '#888', margin: 0, lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sistema de Status */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '2rem' }}>SISTEMA DE STATUS DO USUÁRIO</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {statusLevels.map(level => (
              <div
                key={level.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5rem 1fr',
                  gap: '1rem',
                  alignItems: 'start',
                  padding: '1.25rem 1.25rem 1.25rem 1rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderLeft: `3px solid ${level.color}`,
                  borderRadius: '0 10px 10px 0',
                }}
              >
                <span style={{ fontSize: '1.1rem', lineHeight: 1.2 }}>{level.icon}</span>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', color: level.color, margin: 0, fontWeight: 700, letterSpacing: '0.08em' }}>{level.name}</p>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.1em' }}>{level.range}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#888', margin: 0, lineHeight: 1.55 }}>{level.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Funcionalidades */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '2rem' }}>FUNCIONALIDADES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <p style={{ fontWeight: 700, margin: '0 0 0.5rem', color: '#F2EFE7' }}>{f.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Como o mapa funciona */}
        <section style={{ marginBottom: '3.5rem', background: 'rgba(110,231,183,0.04)', border: '1px solid rgba(110,231,183,0.1)', borderRadius: '16px', padding: '2rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>COMO O MAPA FUNCIONA</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {howItWorks.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#6EE7B7', letterSpacing: '0.1em', minWidth: '1.5rem', paddingTop: '0.1rem', opacity: 0.7 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ fontSize: '0.9rem', color: '#aaa', margin: 0, lineHeight: 1.6 }}>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Por que pode dar certo */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>POR QUE PODE DAR CERTO</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {[
              { icon: '🤝', title: 'Sentimento de comunidade',   desc: 'Nada une mais o brasileiro do que reclamar do tempo seco. O mapa vira motivo pra postar nos Stories.' },
              { icon: '😂', title: 'Humor como vetor viral',     desc: 'Design tosco de propósito — as pessoas vão printar o mapa e mandar no grupo da família: "Gente, o centro tá puro catarro!"' },
              { icon: '📊', title: 'Dados que ninguém tem',      desc: 'No longo prazo: o maior banco de dados de microclima urbano e saúde pública que o Brasil já teve. Nem o governo tem isso.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                <p style={{ fontWeight: 700, margin: '0 0 0.4rem', color: '#F2EFE7', fontSize: '0.95rem' }}>{icon} {title}</p>
                <p style={{ fontSize: '0.85rem', color: '#777', margin: 0, lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>STACK</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {stack.map(s => (
              <span key={s} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#6EE7B7', border: '1px solid rgba(110,231,183,0.25)', padding: '0.4rem 0.8rem', borderRadius: '4px', letterSpacing: '0.05em' }}>
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Footer status */}
        <div style={{ textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em' }}>
          [ EM DESENVOLVIMENTO — 5% COMPLETO ]
        </div>

      </main>
    </div>
  );
}
