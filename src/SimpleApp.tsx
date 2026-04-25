import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  heitorPhoto,
  imageMetadata,
  fungiFreshImageMetadata,
} from './assets/images';

// ── Design Tokens ──────────────────────────────────────────────────────────────
const C = {
  ink:          '#0D0D0D',
  paper:        '#F2EFE7',
  cream:        '#EDE0CC',
  red:          '#C0392B',
  muted:        '#777777',
  dimmed:       '#3A3A3A',
  border:       'rgba(242,239,231,0.08)',
  borderMid:    'rgba(242,239,231,0.16)',
  borderStrong: 'rgba(242,239,231,0.28)',
} as const;

const F = {
  serif: "'Playfair Display', Georgia, 'Times New Roman', serif",
  sans:  "'Inter', system-ui, -apple-system, sans-serif",
  mono:  "'JetBrains Mono', 'Courier New', monospace",
} as const;

const WA_URL = 'https://wa.me/5513994902633?text=Oi%20Heitor%2C%20vi%20seu%20portf%C3%B3lio!';

const STAGE_ORDER = ['conceito', 'prototipo', 'dev', 'beta', 'live'] as const;
type ProjectStage = typeof STAGE_ORDER[number];
const STAGE_LABELS: Record<ProjectStage, string> = {
  conceito: 'IDEIA', prototipo: 'PROTO', dev: 'DEV', beta: 'BETA', live: 'LIVE',
};
const STAGE_COLORS: Record<ProjectStage, string> = {
  conceito: 'rgba(242,239,231,0.2)', prototipo: '#888',
  dev: '#C0392B', beta: '#D4A017', live: '#F2EFE7',
};

// ── Window Size ────────────────────────────────────────────────────────────────
function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return width;
}

// ── Grain Overlay ──────────────────────────────────────────────────────────────
function GrainOverlay() {
  return (
    <div aria-hidden="true" style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', overflow: 'hidden' }}>
      <div className="grain-texture" />
    </div>
  );
}

// ── Reveal on scroll ──────────────────────────────────────────────────────────
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Section tag ────────────────────────────────────────────────────────────────
function SectionTag({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
      <span style={{ fontFamily: F.mono, fontSize: '0.7rem', color: C.dimmed, letterSpacing: '0.2em' }}>[{number}]</span>
      <div style={{ height: '1px', width: '2rem', background: C.red }} />
      <span style={{ fontFamily: F.mono, fontSize: '0.7rem', color: C.red, letterSpacing: '0.25em', textTransform: 'uppercase' as const }}>{label}</span>
    </div>
  );
}

// ── Image Modal ────────────────────────────────────────────────────────────────
interface ImgItem { src: string; alt: string; title: string; }

function ImageModal({ images, initialIndex, onClose }: { images: ImgItem[]; initialIndex: number; onClose: () => void }) {
  const [idx, setIdx] = useState(initialIndex);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [images.length, onClose]);

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 10001, background: 'rgba(13,13,13,0.97)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', cursor: 'zoom-out' }}>
      <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: `1px solid ${C.borderMid}`, color: C.paper, width: '2.5rem', height: '2.5rem', fontFamily: F.mono, fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
      <div onClick={e => e.stopPropagation()} style={{ maxWidth: '900px', width: '100%' }}>
        <img src={images[idx].src} alt={images[idx].alt} style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', display: 'block' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem' }}>
          <span style={{ fontFamily: F.mono, fontSize: '0.68rem', color: C.muted, letterSpacing: '0.15em' }}>{images[idx].title} — {idx + 1} / {images.length}</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => setIdx(i => (i - 1 + images.length) % images.length)} style={{ background: 'transparent', border: `1px solid ${C.borderMid}`, color: C.paper, padding: '0.4rem 1rem', fontFamily: F.mono, fontSize: '0.75rem', cursor: 'pointer' }}>← Ant</button>
            <button onClick={() => setIdx(i => (i + 1) % images.length)} style={{ background: C.paper, border: 'none', color: C.ink, padding: '0.4rem 1rem', fontFamily: F.mono, fontSize: '0.75rem', cursor: 'pointer' }}>Próx →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const fn = () => setMenuOpen(false);
    window.addEventListener('scroll', fn, { once: true });
    return () => window.removeEventListener('scroll', fn);
  }, [menuOpen]);

  const navItems = [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Status',   href: '#status' },
    { label: 'Sobre',    href: '#sobre' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Contato',  href: '#contato' },
  ];

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: isMobile ? '1rem 1.25rem' : '1.1rem 2.5rem',
        background: scrolled || menuOpen ? 'rgba(13,13,13,0.97)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
        borderBottom: scrolled || menuOpen ? `1px solid ${C.border}` : 'none',
        transition: 'all 0.4s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span style={{ fontFamily: F.serif, fontSize: '1.2rem', fontWeight: 700, color: C.paper, fontStyle: 'italic' }}>HD</span>
          <span style={{ fontFamily: F.mono, fontSize: '0.6rem', color: C.red, letterSpacing: '0.15em', marginTop: '2px' }}>.DEV</span>
        </a>

        {!isMobile && (
          <nav style={{ display: 'flex', gap: '2.5rem' }}>
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} style={{ fontFamily: F.mono, fontSize: '0.7rem', color: C.muted, letterSpacing: '0.15em', textDecoration: 'none', textTransform: 'uppercase' as const, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = C.paper)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >{label}</a>
            ))}
          </nav>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={WA_URL} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: F.mono, fontSize: '0.7rem', color: C.ink, background: C.paper, padding: isMobile ? '0.5rem 1rem' : '0.55rem 1.2rem', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase' as const, transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            onMouseEnter={e => { e.currentTarget.style.background = C.red; e.currentTarget.style.color = C.paper; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.paper; e.currentTarget.style.color = C.ink; }}
          >
            {isMobile ? '💬' : '💬 Fale comigo'}
          </a>
          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              style={{ background: 'transparent', border: `1px solid ${C.borderMid}`, color: C.paper, width: '2.4rem', height: '2.4rem', fontFamily: F.mono, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {menuOpen ? '×' : '≡'}
            </button>
          )}
        </div>
      </header>

      {/* Mobile full-screen nav */}
      {isMobile && menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(13,13,13,0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem' }}>
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: F.serif, fontSize: '2.8rem', fontWeight: 700, color: C.paper, textDecoration: 'none', fontStyle: 'italic', letterSpacing: '-0.02em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={e => (e.currentTarget.style.color = C.paper)}
            >{label}</a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
            style={{ fontFamily: F.mono, fontSize: '0.72rem', color: C.ink, background: C.paper, padding: '0.9rem 2rem', textDecoration: 'none', letterSpacing: '0.15em', marginTop: '1rem' }}
          >💬 WHATSAPP</a>
        </div>
      )}
    </>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  return (
    <section id="inicio" style={{ background: C.ink, minHeight: '100vh', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', position: 'relative' }}>
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: isMobile ? '7rem 1.25rem 2.5rem' : isTablet ? '8rem 2rem 4rem' : '9rem 3rem 4rem 2.5rem', position: 'relative' }}>
        {!isMobile && (
          <div style={{ position: 'absolute', top: '6.5rem', left: '2.5rem', display: 'flex', gap: '2rem', fontFamily: F.mono, fontSize: '0.65rem', color: C.dimmed, letterSpacing: '0.2em' }}>
            <span>PRAIA GRANDE · SP</span>
            <span>© 2026</span>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: F.mono, fontSize: '0.72rem', letterSpacing: '0.18em', color: C.muted, marginBottom: '1.5rem' }}>
          <span>🍺</span><span style={{ color: C.dimmed }}>·</span>
          <span>🍚</span><span style={{ color: C.dimmed }}>·</span>
          <span>🍔</span>
          <span style={{ margin: '0 0.4rem', color: C.red }}>→</span>
          <span style={{ color: C.paper }}>{'<DEV />'}</span>
        </div>

        <h1 style={{ fontFamily: F.serif, fontWeight: 900, fontSize: isMobile ? 'clamp(3.5rem, 19vw, 5.5rem)' : 'clamp(3.5rem, 6.5vw, 7.5rem)', lineHeight: 0.88, color: C.paper, letterSpacing: '-0.025em', marginBottom: '1.5rem' }}>
          HEITOR<br /><em style={{ fontStyle: 'italic', color: C.cream }}>DELFINO</em>
        </h1>

        <div style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' as const, fontFamily: F.mono, fontSize: isMobile ? '0.62rem' : '0.7rem', letterSpacing: '0.1em', border: `1px solid ${C.borderMid}`, padding: '0.45rem 0.9rem', alignSelf: 'flex-start', marginBottom: '2rem' }}>
          <span style={{ color: C.muted }}>CHEF</span>
          <span style={{ color: C.red }}>→</span>
          <span style={{ color: C.paper }}>DESENVOLVEDOR</span>
          <span style={{ color: C.red }}>→</span>
          <span style={{ color: C.paper }}>SUPORTE TEC.</span>
        </div>

        <p style={{ fontFamily: F.sans, fontSize: isMobile ? '1rem' : '1.05rem', color: C.muted, lineHeight: 1.75, maxWidth: '440px', marginBottom: '2.5rem' }}>
          10 anos criando experiências na cozinha. Agora crio soluções em código —
          com o mesmo cuidado de quem faz mise en place. Automações com IA,
          desenvolvimento web e suporte técnico.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' as const }}>
          <a href="#projetos" style={{ fontFamily: F.mono, fontSize: '0.72rem', color: C.ink, background: C.paper, padding: '0.9rem 1.8rem', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase' as const, transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background = C.red; e.currentTarget.style.color = C.paper; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.paper; e.currentTarget.style.color = C.ink; }}
          >Ver Projetos</a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: F.mono, fontSize: '0.72rem', color: C.paper, border: `1px solid ${C.borderStrong}`, padding: '0.9rem 1.8rem', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase' as const, transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.paper; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.borderStrong; }}
          >💬 WhatsApp</a>
        </div>

        {!isMobile && (
          <>
            <div style={{ position: 'absolute', left: 0, top: '6rem', bottom: '2rem', width: '1px', background: C.border }} />
            <div style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', fontFamily: F.mono, fontSize: '0.6rem', color: C.dimmed, letterSpacing: '0.2em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '20px', height: '1px', background: C.dimmed }} />SCROLL ↓
            </div>
          </>
        )}
      </div>

      {/* Photo — side on desktop, framed portrait on mobile */}
      {!isMobile ? (
        <div style={{ position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
          <img src={heitorPhoto} alt="Heitor Rafael Bezerra Delfino" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(12%) contrast(1.08)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.1) 40%, transparent 65%)' }} />
          <div style={{ position: 'absolute', bottom: '1.75rem', right: '1.75rem', fontFamily: F.mono, fontSize: '0.62rem', color: C.muted, letterSpacing: '0.15em', background: 'rgba(13,13,13,0.75)', border: `1px solid ${C.borderMid}`, padding: '0.5rem 0.8rem' }}>
            FIG. 01 — H.R.B. DELFINO, 30
          </div>
          <div style={{ position: 'absolute', top: '8rem', right: '1.5rem', fontFamily: F.mono, fontSize: '0.56rem', color: C.dimmed, letterSpacing: '0.2em', writingMode: 'vertical-rl' as const }}>
            DEV · AUTOMAÇÃO · SUPORTE
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: C.border }} />
        </div>
      ) : (
        <div style={{ position: 'relative', height: '70vw', maxHeight: '360px', overflow: 'hidden', margin: '0 1.25rem 3rem', border: `1px solid ${C.borderMid}` }}>
          <img src={heitorPhoto} alt="Heitor Rafael Bezerra Delfino" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(12%) contrast(1.08)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 55%, rgba(13,13,13,0.75))' }} />
          <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.9rem', fontFamily: F.mono, fontSize: '0.58rem', color: C.muted, letterSpacing: '0.12em' }}>
            FIG. 01 — H.R.B. DELFINO, 30
          </div>
        </div>
      )}
    </section>
  );
}

// ── Project Card ───────────────────────────────────────────────────────────────
interface ProjectProps {
  number: string;
  name: string;
  description: string;
  stack: string[];
  images?: ImgItem[];
  status?: string;
  progress?: number;
  stage?: ProjectStage;
  lastUpdate?: string;
  wide?: boolean;
  noImage?: boolean;
  projectPath?: string;
  liveUrl?: string;
}

function ProjectCard({ number, name, description, stack, images, status = 'Concluído', progress, stage, wide = false, noImage = false, projectPath, liveUrl }: ProjectProps) {
  const [modal, setModal] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);
  const { ref: progressRef, visible: progressVisible } = useReveal(0.15);
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;
  const isWide = wide && !isMobile;

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const t = setInterval(() => setImgIdx(i => (i + 1) % images.length), 3200);
    return () => clearInterval(t);
  }, [images]);

  const statusColor = stage ? STAGE_COLORS[stage] : (status === 'Concluído' ? C.paper : status === 'Protótipo' ? '#888' : C.red);

  return (
    <>
      {modal !== null && images && <ImageModal images={images} initialIndex={modal} onClose={() => setModal(null)} />}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ gridColumn: isWide ? 'span 2' : 'span 1', border: `1px solid ${hovered ? C.borderMid : C.border}`, background: hovered ? 'rgba(242,239,231,0.02)' : 'transparent', transition: 'all 0.35s ease', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      >
        {images && !noImage ? (
          <div onClick={() => setModal(imgIdx)} style={{ aspectRatio: isWide ? '21/9' : '16/9', position: 'relative', overflow: 'hidden', background: '#111', cursor: 'zoom-in' }}>
            <img src={images[imgIdx].src} alt={images[imgIdx].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `grayscale(${hovered ? 0 : 22}%) contrast(1.06)`, transform: hovered ? 'scale(1.03)' : 'scale(1)', transition: 'all 0.7s ease' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 55%, rgba(13,13,13,0.85))', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', fontFamily: F.mono, fontSize: '0.62rem', color: C.muted, letterSpacing: '0.12em' }}>
              {imgIdx + 1}/{images.length} — clique para ampliar
            </div>
            {images.length > 1 && (
              <div style={{ position: 'absolute', bottom: '0.65rem', right: '0.85rem', display: 'flex', gap: '4px' }}>
                {images.map((_, i) => (
                  <div key={i} style={{ height: '2px', width: i === imgIdx ? '18px' : '4px', background: i === imgIdx ? C.paper : C.dimmed, transition: 'width 0.4s ease' }} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div style={{ aspectRatio: '16/9', background: 'rgba(242,239,231,0.025)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', borderBottom: `1px solid ${C.border}` }}>
            <div style={{ fontFamily: F.mono, fontSize: '2.5rem', color: C.dimmed }}>◈</div>
            <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.dimmed, letterSpacing: '0.2em' }}>APLICAÇÃO DESKTOP / WEB</div>
          </div>
        )}

        <div style={{ padding: '1.5rem 1.75rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.dimmed, letterSpacing: '0.2em' }}>{number}</span>
            <span style={{ fontFamily: F.mono, fontSize: '0.62rem', color: statusColor, border: `1px solid ${statusColor}`, padding: '2px 8px', letterSpacing: '0.12em' }}>{status}</span>
          </div>
          <h3 style={{ fontFamily: F.serif, fontSize: '1.6rem', fontWeight: 700, color: C.paper, marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>{name}</h3>
          <p style={{ fontFamily: F.sans, fontSize: '0.95rem', color: C.muted, lineHeight: 1.7, marginBottom: '1.25rem' }}>{description}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {stack.map(tag => (
              <span key={tag} style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.dimmed, border: `1px solid ${C.border}`, padding: '3px 9px', letterSpacing: '0.1em' }}>{tag}</span>
            ))}
          </div>

          {(projectPath || liveUrl) && (
            <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: `1px solid ${C.border}`, display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              {projectPath && (
                <Link to={projectPath}
                  style={{ fontFamily: F.mono, fontSize: '0.68rem', color: C.muted, letterSpacing: '0.15em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.paper)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
                >VER PÁGINA DO PROJETO →</Link>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: F.mono, fontSize: '0.68rem', color: C.muted, letterSpacing: '0.15em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.paper)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
                >ACESSAR SITE ↗</a>
              )}
            </div>
          )}

          {stage && (
            <div ref={progressRef} style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: `1px solid ${C.border}` }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.65rem' }}>
                {STAGE_ORDER.map((s, i) => {
                  const stageIdx = STAGE_ORDER.indexOf(stage);
                  const isPast = i < stageIdx;
                  const isCurrent = i === stageIdx;
                  return (
                    <div key={s} style={{ display: 'flex', alignItems: 'flex-start', flex: i < STAGE_ORDER.length - 1 ? 1 : 0 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                        <div style={{ width: isCurrent ? '7px' : '5px', height: isCurrent ? '7px' : '5px', borderRadius: '50%', flexShrink: 0, background: isCurrent ? STAGE_COLORS[s] : isPast ? C.dimmed : 'transparent', border: `1px solid ${isCurrent ? STAGE_COLORS[s] : isPast ? C.dimmed : C.border}`, transition: 'all 0.2s' }} />
                        <span style={{ fontFamily: F.mono, fontSize: '0.42rem', letterSpacing: '0.05em', textAlign: 'center' as const, color: isCurrent ? STAGE_COLORS[s] : isPast ? C.dimmed : 'rgba(242,239,231,0.1)' }}>{STAGE_LABELS[s]}</span>
                      </div>
                      {i < STAGE_ORDER.length - 1 && <div style={{ flex: 1, height: '1px', background: isPast ? C.dimmed : C.border, margin: '2px 3px 0' }} />}
                    </div>
                  );
                })}
              </div>
              {progress !== undefined && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ flex: 1, height: '1px', background: C.border, position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: '0 auto 0 0', width: progressVisible ? `${progress}%` : '0%', background: STAGE_COLORS[stage], transition: 'width 1.2s ease 0.3s' }} />
                  </div>
                  <span style={{ fontFamily: F.mono, fontSize: '0.62rem', color: STAGE_COLORS[stage] }}>{progress}%</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ── Projects ───────────────────────────────────────────────────────────────────
function Projects() {
  const { ref, visible } = useReveal();
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  const projects: ProjectProps[] = [
    {
      number: '01', wide: true,
      name: 'Sistema de Gestão de Tempo',
      description: 'Plataforma web completa para gestão de tempo e produtividade. Dashboard com métricas em tempo real, controle de tarefas, relatórios gerenciais e painel administrativo multi-usuário.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Express', 'REST API'],
      images: imageMetadata, status: 'Live', stage: 'live', progress: 100, lastUpdate: '2026-02-10',
      projectPath: '/projetos/sistema-gestao-tempo',
    },
    {
      number: '02',
      name: 'FungiFresh',
      description: 'Protótipo de e-commerce para cogumelos artesanais. Design system, fluxo de compra completo e identidade visual desenvolvidos inteiramente no Figma.',
      stack: ['Figma', 'UX/UI', 'Design System', 'Prototipagem'],
      images: fungiFreshImageMetadata, status: 'Protótipo', stage: 'prototipo', progress: 100, lastUpdate: '2026-03-15',
      projectPath: '/projetos/fungifresh',
    },
    {
      number: '03', noImage: true,
      name: 'Vendinha — PDV Desktop',
      description: 'App de ponto de venda para Windows. Controle de estoque, registro de vendas e relatórios — desenvolvido em Electron para uso offline em comércio local.',
      stack: ['Electron', 'React', 'TypeScript', 'SQLite', 'Node.js'],
      status: 'Beta', stage: 'beta', progress: 45, lastUpdate: '2026-04-24',
      projectPath: '/projetos/vendinha',
      liveUrl: 'https://vendinha-xi.vercel.app/#funcionalidades',
    },
    {
      number: '04', noImage: true,
      name: 'AtaFácil',
      description: 'Sistema full-stack de gestão de tarefas com autenticação, upload de PDFs e API REST. Backend Node.js com banco relacional e painel de controle.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Multer', 'JWT'],
      status: 'Em dev', stage: 'dev', progress: 35, lastUpdate: '2026-04-24',
      projectPath: '/projetos/atafacil',
    },
  ];

  return (
    <section id="projetos" style={{ background: C.ink, padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
          <SectionTag number="02" label="Projetos" />
          <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: C.paper, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '0.75rem' }}>Projetos</h2>
          <p style={{ fontFamily: F.sans, fontSize: '1rem', color: C.muted, maxWidth: '480px', lineHeight: 1.65, marginBottom: '3.5rem' }}>
            Trabalhos que combinam design, código e resolução de problemas reais.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1px', background: C.border }}>
            {projects.map(p => <ProjectCard key={p.number} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Build Status ───────────────────────────────────────────────────────────────
function BuildStatus() {
  const { ref, visible } = useReveal();
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  const entries = [
    { name: 'Sistema de Gestão de Tempo', stage: 'live'      as ProjectStage, progress: 100, lastUpdate: '2026-02-10', desc: 'Plataforma web de produtividade' },
    { name: 'Vendinha — PDV Desktop',     stage: 'beta'      as ProjectStage, progress: 45,  lastUpdate: '2026-04-24', desc: 'App Electron para comércio local' },
    { name: 'FungiFresh',                 stage: 'prototipo' as ProjectStage, progress: 100, lastUpdate: '2026-03-15', desc: 'Protótipo Figma de e-commerce' },
    { name: 'AtaFácil',                   stage: 'dev'       as ProjectStage, progress: 35,  lastUpdate: '2026-04-24', desc: 'Sistema full-stack de tarefas' },
  ].sort((a, b) => {
    const wa = STAGE_ORDER.indexOf(a.stage);
    const wb = STAGE_ORDER.indexOf(b.stage);
    return wa !== wb ? wb - wa : b.progress - a.progress;
  });

  return (
    <section id="status" style={{ background: '#080808', padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
        <SectionTag number="03" label="Build Status" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
          <div>
            <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: C.paper, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '0.75rem' }}>Build Status</h2>
            <p style={{ fontFamily: F.sans, fontSize: '1rem', color: C.muted, lineHeight: 1.65 }}>
              {isMobile ? 'Evolução dos projetos em tempo real.' : 'Ranking dos projetos — do conceito ao ar. Acompanhe a evolução em tempo real.'}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: C.red, animation: 'statusPulse 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: F.mono, fontSize: '0.6rem', color: C.muted, letterSpacing: '0.15em' }}>LIVE · APR 2026</span>
          </div>
        </div>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '2.5rem', gap: 0 }}>
            {STAGE_ORDER.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: STAGE_COLORS[s] }} />
                  <span style={{ fontFamily: F.mono, fontSize: '0.46rem', color: STAGE_COLORS[s], letterSpacing: '0.08em' }}>{STAGE_LABELS[s]}</span>
                </div>
                {i < STAGE_ORDER.length - 1 && <div style={{ width: '48px', height: '1px', background: C.border, margin: '0 4px', marginBottom: '10px' }} />}
              </div>
            ))}
          </div>
        )}
        {isMobile && <div style={{ marginBottom: '1.5rem' }} />}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: C.border }}>
          {entries.map(({ name, stage, progress, lastUpdate, desc }, i) => {
            const stageColor = STAGE_COLORS[stage];
            const isActive = stage === 'dev' || stage === 'beta';
            const isTop = i === 0;
            return (
              <div key={name}
                style={{ background: '#080808', padding: isMobile ? '1.1rem 1rem' : '1.4rem 1.75rem', display: isMobile ? 'flex' : 'grid', gridTemplateColumns: isMobile ? undefined : '3.5rem 1fr 200px 86px', flexDirection: isMobile ? 'column' : undefined, gap: isMobile ? '0.75rem' : '1.5rem', alignItems: 'center', transition: 'background 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(242,239,231,0.025)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#080808'; }}
              >
                {isMobile ? (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span style={{ fontFamily: F.mono, fontSize: '1.2rem', fontWeight: 900, color: isTop ? C.paper : C.dimmed, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                        <div>
                          <div style={{ fontFamily: F.sans, fontSize: '0.95rem', color: C.paper, fontWeight: 600 }}>{name}</div>
                          <div style={{ fontFamily: F.mono, fontSize: '0.56rem', color: C.dimmed, letterSpacing: '0.1em' }}>{desc}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: F.mono, fontSize: '0.56rem', letterSpacing: '0.1em', color: stageColor, border: `1px solid ${stageColor}`, padding: '3px 7px', flexShrink: 0 }}>
                        {isActive && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: stageColor, animation: 'statusPulse 1.8s ease-in-out infinite' }} />}
                        {STAGE_LABELS[stage]}
                      </div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontFamily: F.mono, fontSize: '0.52rem', color: C.dimmed, letterSpacing: '0.08em' }}>upd. {lastUpdate}</span>
                        <span style={{ fontFamily: F.mono, fontSize: '0.58rem', color: stageColor, fontWeight: 600 }}>{progress}%</span>
                      </div>
                      <div style={{ height: '2px', background: C.border, position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: '0 auto 0 0', width: visible ? `${progress}%` : '0%', background: stageColor, transition: `width 1.4s ease ${i * 0.18}s` }} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ fontFamily: F.mono, fontSize: '1.6rem', fontWeight: 900, lineHeight: 1, textAlign: 'right' as const, color: isTop ? C.paper : C.dimmed }}>{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <div style={{ fontFamily: F.sans, fontSize: '1rem', color: C.paper, fontWeight: 600, marginBottom: '0.2rem' }}>{name}</div>
                      <div style={{ fontFamily: F.mono, fontSize: '0.58rem', color: C.dimmed, letterSpacing: '0.1em' }}>{desc}</div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontFamily: F.mono, fontSize: '0.54rem', color: C.dimmed, letterSpacing: '0.08em' }}>upd. {lastUpdate}</span>
                        <span style={{ fontFamily: F.mono, fontSize: '0.6rem', color: stageColor, fontWeight: 600 }}>{progress}%</span>
                      </div>
                      <div style={{ height: '2px', background: C.border, position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: '0 auto 0 0', width: visible ? `${progress}%` : '0%', background: stageColor, transition: `width 1.4s ease ${i * 0.18}s` }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontFamily: F.mono, fontSize: '0.58rem', letterSpacing: '0.15em', color: stageColor, border: `1px solid ${stageColor}`, padding: '4px 8px' }}>
                      {isActive && <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: stageColor, flexShrink: 0, animation: 'statusPulse 1.8s ease-in-out infinite' }} />}
                      {STAGE_LABELS[stage]}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-end' }}>
          <span style={{ fontFamily: F.mono, fontSize: '0.54rem', color: C.dimmed, letterSpacing: '0.1em' }}>progresso atualizado manualmente · versionamento semântico</span>
        </div>
      </div>
    </section>
  );
}

// ── About ──────────────────────────────────────────────────────────────────────
function About() {
  const { ref, visible } = useReveal();
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  return (
    <section id="sobre" style={{ background: C.paper, padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '5rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: '0.68rem', color: C.red, letterSpacing: '0.2em', marginBottom: '0.5rem' }}>[04] ── SOBRE MIM</div>
            <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: C.ink, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
              Da cozinha<br /><em>ao código</em>
            </h2>
            {[
              'Passei 10 anos como chef e professor de gastronomia. Aprendi que cozinhar bem não é sobre seguir receitas — é sobre entender sistemas, antecipar problemas e entregar experiências consistentes. Exatamente o que faço hoje com código.',
              'A transição para tecnologia não foi acidente. Sempre fui a pessoa que resolvia o problema dos outros — na brigada de cozinha, na sala de aula, no suporte técnico. Descobri na IA uma ferramenta que multiplica essa capacidade.',
              'Hoje trabalho com suporte técnico em ERP/PDV na GenPac, desenvolvo projetos próprios e exploro automações com IA. Cursando ADS na FATEC. Construindo — com consistência.',
            ].map((text, i) => (
              <p key={i} style={{ fontFamily: F.sans, fontSize: '1rem', color: '#3a3a3a', lineHeight: 1.8, marginBottom: '1rem' }}>{text}</p>
            ))}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(13,13,13,0.1)', marginTop: '2.5rem' }}>
              {[
                { l: 'Localização',     v: 'Praia Grande, SP' },
                { l: 'Disponibilidade', v: 'Freelance & CLT' },
                { l: 'Foco atual',      v: 'Dev Web & Automações IA' },
                { l: 'Background',      v: '10 anos Gastronomia' },
                { l: 'Idiomas',         v: 'PT · EN (passive)' },
                { l: 'Email',           v: 'heitorbdelfino@gmail.com' },
              ].map(({ l, v }) => (
                <div key={l} style={{ background: C.paper, padding: '0.9rem 1rem', borderTop: '1px solid rgba(13,13,13,0.07)' }}>
                  <div style={{ fontFamily: F.mono, fontSize: '0.6rem', color: '#aaa', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>{l}</div>
                  <div style={{ fontFamily: F.sans, fontSize: '0.875rem', color: C.ink, fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: '#aaa', letterSpacing: '0.2em', borderBottom: '1px solid rgba(13,13,13,0.1)', paddingBottom: '0.65rem', marginBottom: '1.75rem' }}>FORMAÇÃO ACADÊMICA</div>
              {[
                { year: '2025+', title: 'Análise e Desenvolvimento de Sistemas', place: 'FATEC — cursando' },
                { year: '2018',  title: 'Tecnólogo em Gastronomia', place: 'HOTEC' },
              ].map(({ year, title, place }) => (
                <div key={year} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontFamily: F.mono, fontSize: '0.7rem', color: C.red, minWidth: '3rem', paddingTop: '0.2rem' }}>{year}</div>
                  <div>
                    <div style={{ fontFamily: F.sans, fontWeight: 600, color: C.ink, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{title}</div>
                    <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: '#999', letterSpacing: '0.1em' }}>{place}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: '#aaa', letterSpacing: '0.2em', borderBottom: '1px solid rgba(13,13,13,0.1)', paddingBottom: '0.65rem', marginBottom: '1.75rem' }}>COMPETÊNCIAS TRANSFERÍVEIS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  ['🧩', 'Resolução de problemas complexos sob pressão'],
                  ['🎯', 'Liderança e gestão de equipes'],
                  ['📐', 'Atenção a detalhes e padronização de processos'],
                  ['🤖', 'Automações avançadas com IA (Claude, n8n)'],
                  ['🗣️', 'Didática e comunicação técnica acessível'],
                  ['🔄', 'Adaptabilidade e aprendizado acelerado'],
                ].map(([icon, text]) => (
                  <div key={text} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', fontFamily: F.sans, fontSize: '0.925rem', color: '#4a4a4a', lineHeight: 1.5 }}>
                    <span>{icon}</span>{text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Skills ─────────────────────────────────────────────────────────────────────
function Skills() {
  const { ref, visible } = useReveal();
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;

  const skills = [
    { name: 'HTML / CSS',        level: 85, icon: '🌐', cat: 'Frontend' },
    { name: 'JavaScript',        level: 75, icon: '⚡', cat: 'Frontend' },
    { name: 'React',             level: 72, icon: '⚛️', cat: 'Frontend' },
    { name: 'TypeScript',        level: 58, icon: '📘', cat: 'Frontend' },
    { name: 'Node.js',           level: 65, icon: '🟢', cat: 'Backend' },
    { name: 'PostgreSQL',        level: 60, icon: '🗃️', cat: 'Backend' },
    { name: 'Python',            level: 62, icon: '🐍', cat: 'Backend' },
    { name: 'REST API',          level: 70, icon: '🔌', cat: 'Backend' },
    { name: 'Git / GitHub',      level: 72, icon: '🌿', cat: 'Ferramentas' },
    { name: 'Figma',             level: 65, icon: '🎨', cat: 'Ferramentas' },
    { name: 'Electron',          level: 52, icon: '💻', cat: 'Ferramentas' },
    { name: 'Claude IA / n8n',   level: 90, icon: '🤖', cat: 'IA & Auto.' },
  ];

  const cols = isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';

  return (
    <section id="skills" style={{ background: C.ink, padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
        <SectionTag number="05" label="Skills" />
        <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, color: C.paper, letterSpacing: '-0.025em', lineHeight: 1, marginBottom: '0.75rem' }}>Skills</h2>
        <p style={{ fontFamily: F.sans, fontSize: '1rem', color: C.muted, maxWidth: '480px', lineHeight: 1.65, marginBottom: '3.5rem' }}>
          Ferramentas e tecnologias — com honestidade sobre o nível de cada uma.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '1px', background: C.border }}>
          {skills.map(({ name, level, icon, cat }, index) => (
            <div key={name} style={{ padding: '1.4rem 1.5rem', background: C.ink }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.7rem' }}>
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.05rem' }}>{icon}</span>
                  <span style={{ fontFamily: F.sans, fontSize: isMobile ? '0.85rem' : '0.925rem', color: C.paper, fontWeight: 500 }}>{name}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                  <span style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted }}>{level}%</span>
                  <span style={{ fontFamily: F.mono, fontSize: '0.54rem', color: C.dimmed, letterSpacing: '0.08em' }}>{cat}</span>
                </div>
              </div>
              <div style={{ height: '2px', background: C.border, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: visible ? `${level}%` : '0%', background: level >= 85 ? C.red : C.paper, transition: `width 1.3s ease ${index * 0.06}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Experience ─────────────────────────────────────────────────────────────────
function Experience() {
  const { ref, visible } = useReveal();
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  const entries = [
    { period: 'Mar/2026 — atual', role: 'Suporte Técnico', company: 'GenPac', type: 'tech' as const, desc: 'Suporte em sistemas ERP e PDV. Diagnóstico, atendimento e resolução de problemas técnicos em ambiente corporativo.' },
    { period: '2024 — 2026', role: 'Desenvolvedor (Projetos Próprios)', company: 'Freelance / Autônomo', type: 'tech' as const, desc: 'Desenvolvimento de aplicações web e desktop: portfolio, PDV Vendinha, sistemas de gestão de tempo, automações com IA.' },
    { period: '2022 — 2024', role: 'Professor de Gastronomia', company: 'Instituições de Ensino', type: 'gastro' as const, desc: 'Docência em cursos técnicos e superiores. Planejamento pedagógico, desenvolvimento de material didático e orientação de alunos.' },
    { period: '2014 — 2022', role: 'Chef / Cozinheiro Profissional', company: 'Restaurantes & Eventos', type: 'gastro' as const, desc: '10 anos criando experiências gastronômicas. Gestão de brigada, mise en place, controle de qualidade — base para tudo que faço hoje.' },
  ];

  return (
    <section style={{ background: C.paper, padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem', borderTop: '1px solid rgba(13,13,13,0.08)' }}>
      <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
        <div style={{ fontFamily: F.mono, fontSize: '0.68rem', color: C.red, letterSpacing: '0.2em', marginBottom: '0.5rem' }}>[06] ── TRAJETÓRIA</div>
        <h2 style={{ fontFamily: F.serif, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: C.ink, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '3.5rem' }}>Experiência</h2>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: isMobile ? '4.8rem' : '6.5rem', top: 0, bottom: 0, width: '1px', background: 'rgba(13,13,13,0.1)' }} />
          {entries.map(({ period, role, company, type, desc }) => (
            <div key={role} style={{ display: 'flex', gap: isMobile ? '1rem' : '1.75rem', marginBottom: '3rem', position: 'relative' }}>
              <div style={{ minWidth: isMobile ? '4.2rem' : '5.5rem', textAlign: 'right', fontFamily: F.mono, fontSize: isMobile ? '0.54rem' : '0.6rem', color: type === 'tech' ? C.red : '#aaa', letterSpacing: '0.06em', lineHeight: 1.5, paddingTop: '0.3rem' }}>{period}</div>
              <div style={{ width: '9px', height: '9px', borderRadius: '50%', flexShrink: 0, background: type === 'tech' ? C.red : '#ccc', border: `2px solid ${C.paper}`, marginTop: '0.4rem', position: 'relative', zIndex: 1 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem', flexWrap: 'wrap' as const }}>
                  <h3 style={{ fontFamily: F.sans, fontWeight: 600, fontSize: isMobile ? '0.95rem' : '1rem', color: C.ink }}>{role}</h3>
                  <span style={{ fontFamily: F.mono, fontSize: '0.54rem', color: type === 'tech' ? C.red : '#bbb', border: `1px solid ${type === 'tech' ? C.red : '#ddd'}`, padding: '1px 6px', letterSpacing: '0.1em' }}>{type === 'tech' ? 'TECH' : 'GASTRO 🍴'}</span>
                </div>
                <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: '#aaa', letterSpacing: '0.1em', marginBottom: '0.65rem' }}>{company}</div>
                <p style={{ fontFamily: F.sans, fontSize: '0.925rem', color: '#555', lineHeight: 1.7 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ────────────────────────────────────────────────────────────────────
function Contact() {
  const { ref, visible } = useReveal();
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  const socials = [
    { label: '@_raffinoh_',          sub: 'Instagram Tech & IA',   href: 'https://instagram.com/_raffinoh_',          icon: '⚙️' },
    { label: '@heitordelfino_',      sub: 'Instagram Pessoal',     href: 'https://instagram.com/heitordelfino_',      icon: '📸' },
    { label: '@chef_heitordelfino_', sub: 'Instagram Gastronomia', href: 'https://instagram.com/chef_heitordelfino_', icon: '🍴' },
    { label: 'LinkedIn',             sub: 'Perfil Profissional',   href: 'https://linkedin.com/in/heitordelfino',    icon: '💼' },
    { label: 'GitHub',               sub: 'Repositórios',         href: 'https://github.com/heitordelfino',         icon: '⌨️' },
  ];

  return (
    <section id="contato" style={{ background: C.ink, padding: isMobile ? '4rem 1.25rem' : '6rem 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto', opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: 'all 0.9s ease' }}>
        <div style={{ borderBottom: `1px solid ${C.border}`, paddingBottom: '3.5rem', marginBottom: '3.5rem' }}>
          <div style={{ fontFamily: F.mono, fontSize: '0.68rem', color: C.red, letterSpacing: '0.2em', marginBottom: '1rem' }}>[07] ── CONTATO</div>
          <h2 style={{ fontFamily: F.serif, fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: C.paper, lineHeight: 0.9, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Vamos<br /><em style={{ color: C.cream }}>conversar?</em>
          </h2>
          <p style={{ fontFamily: F.sans, fontSize: '1.05rem', color: C.muted, maxWidth: '500px', lineHeight: 1.75 }}>
            Aberto a projetos freelance, oportunidades CLT, consultorias e trocas de ideia. Respondo rápido.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '4rem' }}>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '1.25rem' }}>CONTATO DIRETO</div>
            <a href="mailto:heitorbdelfino@gmail.com"
              style={{ display: 'block', fontFamily: F.serif, fontSize: 'clamp(0.95rem, 1.8vw, 1.3rem)', color: C.paper, textDecoration: 'none', borderBottom: `1px solid ${C.border}`, paddingBottom: '1.25rem', marginBottom: '1.25rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.cream)}
              onMouseLeave={e => (e.currentTarget.style.color = C.paper)}
            >heitorbdelfino@gmail.com →</a>

            {/* WhatsApp — redesigned */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem 1.5rem', border: `1px solid ${C.borderMid}`, background: 'transparent', textDecoration: 'none', transition: 'all 0.3s ease', width: '100%', boxSizing: 'border-box' as const }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(37,211,102,0.06)'; el.style.borderColor = 'rgba(37,211,102,0.4)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.borderColor = C.borderMid; }}
            >
              <div style={{ width: '3rem', height: '3rem', flexShrink: 0, border: `1px solid ${C.borderMid}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>💬</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: F.mono, fontSize: '0.72rem', color: C.paper, letterSpacing: '0.18em', marginBottom: '0.2rem' }}>WHATSAPP</div>
                <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.1em' }}>(13) 99490-2633</div>
              </div>
              <span style={{ fontFamily: F.mono, fontSize: '1rem', color: C.dimmed }}>→</span>
            </a>
          </div>

          <div>
            <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.muted, letterSpacing: '0.2em', marginBottom: '1.25rem' }}>REDES SOCIAIS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: C.border }}>
              {socials.map(({ label, sub, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.95rem 1.1rem', background: C.ink, textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(242,239,231,0.04)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = C.ink; }}
                >
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.05rem' }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: F.sans, fontSize: '0.925rem', color: C.paper, fontWeight: 500 }}>{label}</div>
                      <div style={{ fontFamily: F.mono, fontSize: '0.6rem', color: C.muted, letterSpacing: '0.1em' }}>{sub}</div>
                    </div>
                  </div>
                  <span style={{ fontFamily: F.mono, fontSize: '0.75rem', color: C.dimmed }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 768;

  return (
    <footer style={{ background: '#080808', padding: isMobile ? '1.75rem 1.25rem' : '1.75rem 2.5rem', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '0.4rem' : '1rem' }}>
        <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.dimmed, letterSpacing: '0.15em' }}>© 2026 HEITOR DELFINO</div>
        <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.dimmed, letterSpacing: '0.12em' }}>🍺 🍚 🍔 → {'<dev />'} — feito com código e café</div>
        <div style={{ fontFamily: F.mono, fontSize: '0.65rem', color: C.dimmed, letterSpacing: '0.15em' }}>PRAIA GRANDE · SP</div>
      </div>
    </footer>
  );
}

// ── App ────────────────────────────────────────────────────────────────────────
export default function SimpleApp() {
  return (
    <div style={{ background: C.ink, minHeight: '100vh', color: C.paper }}>
      <GrainOverlay />
      <Header />
      <Hero />
      <Projects />
      <BuildStatus />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
