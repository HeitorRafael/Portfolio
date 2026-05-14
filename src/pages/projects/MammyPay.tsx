import { Link } from 'react-router-dom';

export default function MammyPayPage() {
  const stack = ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Supabase', 'Recharts', 'Vercel'];

  const features = [
    { icon: '📊', title: 'Painel Mensal', desc: 'Barra de progresso gamificada mostrando quantas contas foram pagas no mês' },
    { icon: '✅', title: 'Marcar como Pago', desc: 'Um toque para registrar o pagamento com data/hora — com opção de desfazer' },
    { icon: '📸', title: 'Foto do Boleto', desc: 'Anexe a foto do boleto diretamente na conta, armazenada com segurança' },
    { icon: '📈', title: 'Gráficos de Gastos', desc: 'Visualize gastos por categoria e tendência mensal com estimativas futuras' },
    { icon: '🔒', title: 'Login Seguro', desc: 'Autenticação com e-mail/senha ou Google — dados 100% privados' },
    { icon: '📱', title: 'Mobile First', desc: 'Design pensado para celular, com botões grandes e fonte legível para idosos' },
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
            PROJETO — GESTÃO FINANCEIRA
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 1.5rem' }}>
            Mammy<em style={{ color: '#34d399' }}>Pay</em>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '480px', lineHeight: 1.7, margin: '0 auto 2rem' }}>
            Gestor de contas mensais pensado para ser simples, intuitivo e acessível — especialmente para pessoas idosas.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/HeitorRafael/MammyPay"
              target="_blank"
              rel="noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#34d399', letterSpacing: '0.15em', textDecoration: 'none', border: '1px solid #34d399', padding: '0.6rem 1.2rem', borderRadius: '4px' }}
            >
              VER NO GITHUB →
            </a>
          </div>
        </div>

        {/* Problem */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1rem' }}>O PROBLEMA</h2>
          <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: 1.8 }}>
            Aplicativos de finanças são complexos, cheios de menus e dados desnecessários. Para uma mãe que quer apenas saber
            quais contas foram pagas e quais ainda faltam — sem complicação — não havia nada adequado. O MammyPay resolve isso
            com uma interface grande, clara e gamificada que transforma pagar contas em algo quase satisfatório.
          </p>
        </section>

        {/* Features */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '2rem' }}>FUNCIONALIDADES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
                <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: '#F2EFE7' }}>{f.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>STACK</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {stack.map(s => (
              <span
                key={s}
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)', padding: '0.4rem 0.8rem', borderRadius: '4px', letterSpacing: '0.05em' }}
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Status */}
        <div style={{ textAlign: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em' }}>
          [ EM DESENVOLVIMENTO — 65% COMPLETO ]
        </div>
      </main>
    </div>
  );
}
