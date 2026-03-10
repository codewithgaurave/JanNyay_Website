import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(255, 255, 255, 0.97)'
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: scrolled
            ? '0 4px 30px rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.04)'
            : '0 1px 0 rgba(0,0,0,0.06)',
          borderBottom: scrolled ? '2px solid #FF6B1A22' : '1px solid #e5e7eb',
        }}
      >
        {/* Top accent bar - Indian tricolor stripe */}
        <div style={{
          height: '3px',
          background: 'linear-gradient(to right, #FF6B1A 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #138808 66.6%)',
          width: '100%',
        }} />

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}>

          {/* ── Logo ── */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(255,107,26,0.25)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              flexShrink: 0,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.07) rotate(-2deg)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,26,0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,107,26,0.25)';
              }}
            >
              <img
                src="/WhatsApp_Image_2026-03-09_at_22.59.49-removebg-preview.png"
                alt="JanNyay Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #FF6B1A 0%, #c0392b 50%, #138808 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.5px',
                fontFamily: "'Georgia', serif",
              }}>
                JanNyay
              </span>
              <span style={{
                fontSize: '0.62rem',
                fontWeight: '600',
                color: '#888',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}>
                Justice For All
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '8px 14px',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? '700' : '500',
                    color: isActive ? '#FF6B1A' : '#374151',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    background: isActive ? 'rgba(255,107,26,0.08)' : 'transparent',
                    transition: 'all 0.25s ease',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#FF6B1A';
                      e.currentTarget.style.background = 'rgba(255,107,26,0.07)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#374151';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '14px',
                      right: '14px',
                      height: '2px',
                      borderRadius: '9999px',
                      background: 'linear-gradient(to right, #FF6B1A, #138808)',
                    }} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── Hamburger (mobile) ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger-btn"
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              padding: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '10px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,107,26,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <span style={{
              display: 'block', width: '24px', height: '2.5px',
              background: '#374151', borderRadius: '9999px',
              transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
              transform: isOpen ? 'translateY(7.5px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2.5px',
              background: '#374151', borderRadius: '9999px',
              transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? 'scaleX(0)' : 'scaleX(1)',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2.5px',
              background: '#374151', borderRadius: '9999px',
              transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
              transform: isOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 998,
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />

      {/* ── Mobile Drawer ── */}
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0, bottom: 0,
          width: 'min(320px, 85vw)',
          zIndex: 9999,
          background: '#fff',
          boxShadow: '8px 0 40px rgba(0,0,0,0.15)',
          transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
          overflowY: 'auto',
        }}
        className="mobile-drawer"
      >
        {/* Drawer header */}
        <div style={{
          padding: '28px 24px 20px',
          borderBottom: '1px solid #f3f4f6',
          background: 'linear-gradient(135deg, #fff9f6, #f0fff4)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src="/WhatsApp_Image_2026-03-09_at_22.59.49-removebg-preview.png"
              alt="JanNyay"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <div>
              <div style={{
                fontWeight: '800', fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #FF6B1A, #138808)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontFamily: "'Georgia', serif",
              }}>JanNyay</div>
              <div style={{ fontSize: '0.58rem', color: '#999', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                Justice For All
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: '#f3f4f6', border: 'none', cursor: 'pointer',
              borderRadius: '10px', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.1rem', color: '#6b7280', transition: 'all 0.2s',
            }}
          >✕</button>
        </div>

        {/* Mobile nav links */}
        <nav style={{ padding: '16px 12px', flex: 1 }}>
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  margin: '2px 0',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: isActive ? '700' : '500',
                  fontSize: '0.95rem',
                  color: isActive ? '#FF6B1A' : '#374151',
                  background: isActive ? 'linear-gradient(135deg, rgba(255,107,26,0.1), rgba(19,136,8,0.06))' : 'transparent',
                  borderLeft: isActive ? '3px solid #FF6B1A' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: isActive
                    ? 'linear-gradient(135deg, #FF6B1A, #138808)'
                    : '#d1d5db',
                  flexShrink: 0,
                  transition: 'background 0.2s',
                }} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div style={{
          padding: '20px 24px',
          borderTop: '1px solid #f3f4f6',
          fontSize: '0.75rem',
          color: '#9ca3af',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} JanNyay. All rights reserved.
        </div>
      </div>

      {/* ── Responsive CSS ── */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .mobile-drawer { display: none !important; }
        }
      `}</style>
    </>
  );
}
