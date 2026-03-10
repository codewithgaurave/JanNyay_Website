import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)',
      padding: '80px 24px 30px',
      color: '#94a3b8',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-50px', left: '-50px',
        width: '250px', height: '250px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(19,136,8,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Top Section - Brand + Newsletter */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '60px',
          marginBottom: '60px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }} className="footer-top">
          {/* Brand Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src="/WhatsApp_Image_2026-03-09_at_22.59.49-removebg-preview.png" alt="JanNyay"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              <span style={{
                fontSize: '1.8rem', fontWeight: '900', fontFamily: "'Georgia',serif",
                background: 'linear-gradient(135deg, #FF6B1A, #f59e0b)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>JanNyay</span>
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#cbd5e1', marginBottom: '24px', maxWidth: '500px' }}>
              India's most trusted legal services platform. Empowering citizens with accessible, affordable, and expert legal representation across all courts since 2010.
            </p>

            {/* Trust Badges */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              {[
                { icon: '✓', text: 'Bar Council Registered' },
                { icon: '✓', text: 'ISO Certified' },
                { icon: '✓', text: '5000+ Cases Won' },
              ].map((badge) => (
                <div key={badge.text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: 'rgba(255,107,26,0.1)',
                  border: '1px solid rgba(255,107,26,0.2)',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#FF6B1A',
                }}>
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h5 style={{ color: '#e2e8f0', fontWeight: '700', marginBottom: '12px', fontSize: '0.9rem' }}>Follow Us</h5>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { name: 'Facebook', icon: 'f', color: '#1877f2' },
                  { name: 'Twitter', icon: '𝕏', color: '#1da1f2' },
                  { name: 'LinkedIn', icon: 'in', color: '#0a66c2' },
                  { name: 'Instagram', icon: '📷', color: '#e4405f' },
                  { name: 'YouTube', icon: '▶', color: '#ff0000' },
                ].map((social) => (
                  <a key={social.name} href="#" style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: '800',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = social.color;
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = social.color;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.color = '#94a3b8';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div style={{
            background: 'rgba(255,107,26,0.05)',
            border: '1px solid rgba(255,107,26,0.2)',
            borderRadius: '20px',
            padding: '32px 28px',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>📧</div>
            <h4 style={{ color: '#e2e8f0', fontWeight: '800', marginBottom: '12px', fontSize: '1.3rem' }}>
              Legal Updates
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '20px', lineHeight: 1.6 }}>
              Subscribe to get latest legal news, case updates, and expert insights delivered to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
              <button style={{
                padding: '12px 24px',
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Subscribe
              </button>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '12px' }}>
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '50px',
        }} className="footer-links">
          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: '800', marginBottom: '20px', fontSize: '1.05rem' }}>Quick Links</h4>
            {['Home', 'About', 'Gallery', 'Contact'].map(pg => (
              <Link key={pg} to={`/${pg === 'Home' ? '' : pg.toLowerCase()}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#FF6B1A';
                  e.currentTarget.style.paddingLeft = '8px';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                <span style={{ fontSize: '0.7rem' }}>▶</span>
                {pg}
              </Link>
            ))}
          </div>

          {/* Legal Services */}
          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: '800', marginBottom: '20px', fontSize: '1.05rem' }}>Legal Services</h4>
            {['Criminal Defense', 'Civil Litigation', 'Family Law', 'Corporate Law'].map(service => (
              <Link key={service} to="/contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#FF6B1A';
                  e.currentTarget.style.paddingLeft = '8px';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                <span style={{ fontSize: '0.7rem' }}>▶</span>
                {service}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: '800', marginBottom: '20px', fontSize: '1.05rem' }}>Legal</h4>
            {[['Terms & Conditions', '/terms'], ['Privacy Policy', '/privacy']].map(([name, path]) => (
              <Link key={name} to={path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#FF6B1A';
                  e.currentTarget.style.paddingLeft = '8px';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                <span style={{ fontSize: '0.7rem' }}>▶</span>
                {name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#e2e8f0', fontWeight: '800', marginBottom: '20px', fontSize: '1.05rem' }}>Contact Us</h4>
            {[
              { icon: '📞', text: '8400984678', subtext: 'Toll Free' },
              { icon: '📧', text: 'jannyay.office@gmail.com', subtext: 'Email Support' },
              { icon: '📍', text: 'New Delhi', subtext: 'India' },
              { icon: '⏰', text: 'Mon - Sat', subtext: '9 AM - 8 PM' },
            ].map(item => (
              <div key={item.text} style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '16px',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: '0.95rem', color: '#e2e8f0', fontWeight: '700', marginBottom: '2px' }}>
                    {item.text}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: '500' }}>
                    {item.subtext}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }} className="footer-bottom">
          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            © {new Date().getFullYear()} JanNyay. All rights reserved. | न्याय सबका अधिकार है 🇮🇳
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {[
              { icon: '🔒', text: 'Secure & Confidential' },
              { icon: '⚖️', text: 'Bar Council Approved' },
              { icon: '🏆', text: '98% Success Rate' },
            ].map((badge) => (
              <div key={badge.text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                color: '#64748b',
              }}>
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-links { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-links { grid-template-columns: 1fr !important; gap: 32px !important; }
          .footer-bottom { flex-direction: column !important; text-align: center !important; }
        }
        @media (max-width: 600px) {
          footer { padding: 50px 16px 24px !important; }
          .footer-top { gap: 32px !important; padding-bottom: 40px !important; }
          .footer-top > div:first-child { display: flex !important; flex-direction: column !important; align-items: center !important; text-align: center !important; }
          .footer-top > div:first-child > p { text-align: center !important; }
          .footer-top > div:first-child > div { justify-content: center !important; }
          .footer-top > div:last-child { padding: 24px 20px !important; }
          .footer-links { gap: 28px !important; }
          .footer-bottom { gap: 16px !important; }
          .footer-bottom > div:last-child { flex-direction: column !important; gap: 12px !important; }
        }
        @media (max-width: 480px) {
          footer { padding: 40px 12px 20px !important; }
          .footer-top { gap: 28px !important; padding-bottom: 32px !important; }
          .footer-top > div:first-child img { width: 40px !important; height: 40px !important; }
          .footer-top > div:first-child > div:first-child span { font-size: 1.5rem !important; }
          .footer-top > div:first-child > p { font-size: 0.9rem !important; }
          .footer-top > div:first-child > div:nth-child(3) > div { padding: 5px 12px !important; font-size: 0.75rem !important; }
          .footer-top > div:last-child { padding: 20px 16px !important; }
          .footer-top > div:last-child h4 { font-size: 1.1rem !important; }
          .footer-top > div:last-child p { font-size: 0.85rem !important; }
          .footer-top > div:last-child > div { flex-direction: column !important; }
          .footer-top input { width: 100% !important; font-size: 0.85rem !important; padding: 10px 14px !important; }
          .footer-top button { width: 100% !important; padding: 10px 20px !important; font-size: 0.85rem !important; }
          .footer-links { gap: 24px !important; }
          .footer-links h4 { font-size: 1rem !important; margin-bottom: 16px !important; }
          .footer-links a, .footer-links > div > div { font-size: 0.85rem !important; margin-bottom: 10px !important; }
          .footer-bottom { font-size: 0.75rem !important; padding-top: 24px !important; }
          .footer-bottom > div:last-child div { font-size: 0.7rem !important; }
        }
      `}</style>
    </footer>
  );
}
