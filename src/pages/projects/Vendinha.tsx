import { useState } from 'react';
import { Link } from 'react-router-dom';

const screenshots = [
  { file: 'TelaInicial-appNativo.png',   label: 'Tela de Login',           desc: 'Acesso com autenticação local — sem internet, sem servidor.' },
  { file: 'TelaDePedidos.png',           label: 'Gestão de Pedidos',       desc: 'Tabela completa com filtros por status, data e forma de pagamento.' },
  { file: 'TelaCadastroCliente.png',     label: 'Cadastro de Cliente',     desc: 'Novo cliente com nome, telefone e múltiplos endereços de entrega.' },
  { file: 'TelaEdicaoCliente.png',       label: 'Perfil do Cliente',       desc: 'Histórico completo de compras, endereços e dados do cliente.' },
  { file: 'TelaCadastroProduto.png',     label: 'Cadastro de Produto',     desc: 'Preço padrão e preços específicos por forma de pagamento.' },
  { file: 'TelaPromocao.png',            label: 'Promoções',               desc: 'Descontos por quantidade mínima e forma de pagamento.' },
  { file: 'TelaFrete.png',              label: 'Frete por Bairro',        desc: 'Tabela de preços de entrega configurável por região.' },
  { file: 'TelaRelatorio.png',          label: 'Relatórios',              desc: 'Métricas de vendas, gráficos e análise por período.' },
  { file: 'TelaConfiguracoesConta.png', label: 'Configurações',           desc: 'Foto de perfil, nome da loja e troca de credenciais.' },
];

const stack = ['Electron', 'React', 'TypeScript', 'SQLite', 'Tailwind CSS', 'Recharts', 'better-sqlite3', 'Vite'];

const features = [
  { title: 'PDV Completo',      desc: 'Pedidos com cliente, produto, frete e múltiplas formas de pagamento — dinheiro, pix, crédito e débito.' },
  { title: 'Preço por Forma',   desc: 'Cada produto pode ter um preço padrão e preços específicos para cada forma de pagamento.' },
  { title: 'Gestão de Clientes', desc: 'Cadastro completo com múltiplos endereços, histórico de compras e busca rápida.' },
  { title: 'Controle de Estoque', desc: 'Baixa automática na entrega, alertas de estoque mínimo e histórico de movimentações.' },
  { title: 'Promoções',          desc: 'Descontos por quantidade mínima e por forma de pagamento, aplicados automaticamente no caixa.' },
  { title: 'Relatórios',         desc: 'Receita por período, produtos mais vendidos, top clientes e breakdown por forma de pagamento.' },
];

export default function VendinhaPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrent(i => (i + 1) % screenshots.length);

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

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '4rem 2rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.25em', marginBottom: '1.5rem', display: 'block' }}>
            PROJETO — PDV · DESKTOP · GESTÃO DE LOJA
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1, margin: '0 0 0.75rem' }}>
            Ven<em style={{ color: '#5A8A2A' }}>dinha</em>
          </h1>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#5A8A2A', letterSpacing: '0.2em', marginBottom: '2rem', opacity: 0.85 }}>
            SISTEMA DE PDV DESKTOP — 100% OFFLINE
          </p>
          <p style={{ fontSize: '1.05rem', color: '#aaa', maxWidth: '520px', lineHeight: 1.75, margin: '0 auto 2rem' }}>
            Aplicação desktop para gestão de pedidos, estoque e clientes de pequenas lojas. Funciona completamente offline — instala uma vez e usa para sempre, sem mensalidade e sem internet.
          </p>
          <a
            href="https://vendinha-xi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '0.65rem 1.75rem', border: '1px solid rgba(242,239,231,0.2)', borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#F2EFE7', letterSpacing: '0.15em', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#5A8A2A'; (e.currentTarget as HTMLAnchorElement).style.color = '#5A8A2A'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(242,239,231,0.2)'; (e.currentTarget as HTMLAnchorElement).style.color = '#F2EFE7'; }}
          >
            VER SITE DO PROJETO →
          </a>
        </div>

        {/* Stack */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}>STACK</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {stack.map(s => (
              <span key={s} style={{ padding: '0.3rem 0.8rem', border: '1px solid rgba(242,239,231,0.1)', borderRadius: '3px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#777', letterSpacing: '0.05em' }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Screenshots carousel */}
        <div style={{ marginBottom: '5rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>CAPTURAS DE TELA</span>

          <div style={{ position: 'relative', background: '#111', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(242,239,231,0.08)' }}>
            <img
              src={`/projects/vendinha/${screenshots[current].file}`}
              alt={screenshots[current].label}
              style={{ width: '100%', display: 'block', maxHeight: '520px', objectFit: 'contain', background: '#111' }}
            />

            {/* Prev / Next */}
            <button
              onClick={prev}
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(13,13,13,0.7)', border: '1px solid rgba(242,239,231,0.15)', borderRadius: '4px', color: '#F2EFE7', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}
            >‹</button>
            <button
              onClick={next}
              style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(13,13,13,0.7)', border: '1px solid rgba(242,239,231,0.15)', borderRadius: '4px', color: '#F2EFE7', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>›</button>

            {/* Counter */}
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(13,13,13,0.7)', borderRadius: '3px', padding: '0.2rem 0.6rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#777', letterSpacing: '0.1em' }}>
              {current + 1}/{screenshots.length}
            </div>
          </div>

          {/* Caption */}
          <div style={{ padding: '1rem 0', borderBottom: '1px solid rgba(242,239,231,0.08)' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#F2EFE7', letterSpacing: '0.1em', margin: '0 0 0.25rem' }}>{screenshots[current].label}</p>
            <p style={{ fontSize: '0.85rem', color: '#777', margin: 0 }}>{screenshots[current].desc}</p>
          </div>

          {/* Dot nav */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', justifyContent: 'center' }}>
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{ width: i === current ? '24px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? '#5A8A2A' : 'rgba(242,239,231,0.2)', border: 'none', cursor: 'pointer', transition: 'width 0.2s, background 0.2s', padding: 0 }}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '4rem' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '1.5rem' }}>FUNCIONALIDADES</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1px', background: 'rgba(242,239,231,0.06)', borderRadius: '6px', overflow: 'hidden' }}>
            {features.map(f => (
              <div key={f.title} style={{ background: '#0D0D0D', padding: '1.5rem' }}>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#F2EFE7', letterSpacing: '0.08em', margin: '0 0 0.5rem' }}>{f.title}</p>
                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div style={{ borderTop: '1px solid rgba(242,239,231,0.08)', paddingTop: '2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>STATUS</span>
            <span style={{ fontSize: '0.9rem', color: '#D4A017' }}>Em Desenvolvimento</span>
          </div>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>PROGRESSO</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '120px', height: '4px', background: 'rgba(242,239,231,0.08)', borderRadius: '2px' }}>
                <div style={{ width: '70%', height: '100%', background: '#5A8A2A', borderRadius: '2px' }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#777' }}>70%</span>
            </div>
          </div>
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em', display: 'block', marginBottom: '0.4rem' }}>REPOSITÓRIO</span>
            <a
              href="https://github.com/HeitorRafael/Vendinha"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#777', textDecoration: 'none', letterSpacing: '0.05em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F2EFE7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#777')}
            >
              github.com/HeitorRafael/Vendinha →
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}
