import { Link } from 'react-router-dom';

export default function AtaFacilPage() {
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

      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 80px)', textAlign: 'center', padding: '2rem' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: '#777', letterSpacing: '0.25em', marginBottom: '1.5rem', display: 'block' }}>
          PROJETO 04
        </span>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '1.5rem', margin: '0 0 1.5rem' }}>
          Ata<em style={{ color: '#EDE0CC' }}>Fácil</em>
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#777', maxWidth: '380px', lineHeight: 1.7, marginTop: '1.5rem' }}>
          Página do projeto em desenvolvimento. Volte em breve.
        </p>
        <div style={{ marginTop: '2.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', color: '#3A3A3A', letterSpacing: '0.2em' }}>
          [ PÁGINA EM CONSTRUÇÃO ]
        </div>
      </main>
    </div>
  );
}
