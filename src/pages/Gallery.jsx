import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: '⚖️' },
    { id: 'courts', name: 'Court Victories', icon: '🏛️' },
    { id: 'team', name: 'Our Lawyers', icon: '👨‍⚖️' },
    { id: 'events', name: 'Legal Events', icon: '📜' },
    { id: 'clients', name: 'Happy Client', icon: '🤝' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'courts',
      title: 'Supreme Court Landmark Victory',
      desc: 'Senior Advocate R.K. Sharma argued historic constitutional matter, setting new precedent for fundamental rights',
      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop',
      color: '#1e3a5f' // Navy Blue
    },
    {
      id: 2,
      category: 'team',
      title: 'Senior Advocate P.C. Verma',
      desc: '40+ years experience in Criminal Law, former Additional Solicitor General of India',
      img: 'download (4).jpg',
      color: '#b4945c' // Gold
    },
    {
      id: 3,
      category: 'courts',
      title: 'Delhi High Court Success',
      desc: 'Landmark judgment in property dispute - Client awarded possession after 15-year long battle',
      img: '/image.png',
      color: '#1e3a5f'
    },
    {
      id: 4,
      category: 'events',
      title: 'National Legal Awareness Camp',
      desc: 'Free legal aid camp organized in rural UP, 500+ villagers provided legal consultation',
      img: '/download (1).jpg',
      color: '#7c2d12' // Burgundy
    },
    {
      id: 5,
      category: 'clients',
      title: 'Client Success Story - Mrs. Priya Singh',
      desc: 'Domestic violence case won - Client awarded maintenance and child custody',
      img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop',
      color: '#b4945c'
    },
    {
      id: 6,
      category: 'team',
      title: 'Criminal Law Experts',
      desc: 'Specialized team for IPC, CrPC cases - 95% success rate in high court appeals',
      img: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&auto=format&fit=crop',
      color: '#1e3a5f'
    },
    {
      id: 7,
      category: 'courts',
      title: 'District Court Victory',
      desc: 'Civil suit for specific performance - Client got possession of prime property',
      img: 'download (2).jpg',
      color: '#7c2d12'
    },
    {
      id: 8,
      category: 'events',
      title: 'Bar Council of India Conference',
      desc: 'Ethics in Legal Practice - Seminar conducted by senior advocates',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
      color: '#b4945c'
    },
    {
      id: 9,
      category: 'clients',
      title: 'Family Law Success Story',
      desc: 'Divorce mediation success - Mutual consent settlement in just 3 months',
      img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop',
      color: '#1e3a5f'
    },
    {
      id: 10,
      category: 'team',
      title: 'Corporate Law Department',
      desc: 'Team of 15 lawyers specializing in M&A, IPR, and corporate litigation',
      img: 'https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&auto=format&fit=crop',
      color: '#7c2d12'
    },
    {
      id: 11,
      category: 'courts',
      title: 'Consumer Forum Victory',
      desc: 'Insurance claim of ₹50 Lakhs awarded with 9% interest',
      img: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?w=800&auto=format&fit=crop',
      color: '#b4945c'
    },
    {
      id: 12,
      category: 'events',
      title: 'Legal Aid Workshop for Women',
      desc: 'Free legal awareness session on women rights and legal remedies',
      img: 'download (3).jpg',
      color: '#1e3a5f'
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0b1a33 0%, #1e3a5f 40%, #2d4b2d 100%)', // Navy Blue to Forest Green
        paddingTop: '100px',
      }}>
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180,148,92,0.15) 0%, transparent 70%)', // Gold tint
          pointerEvents: 'none',
        }} />
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '80px 24px',
          width: '100%', textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(180,148,92,0.15)', border: '1px solid rgba(180,148,92,0.3)',
            borderRadius: '99px', padding: '8px 20px', marginBottom: '24px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#b4945c', display: 'inline-block' }} />
            <span style={{ color: '#b4945c', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Our Legacy of Justice
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: '20px',
            fontFamily: "'Georgia', serif",
            letterSpacing: '-1px',
          }}>
            Synonymous with Justice{' '}
            <span style={{
              background: 'linear-gradient(135deg, #b4945c 0%, #d4af37 50%, #2d4b2d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>
              Our Achievements
            </span>
          </h1>
          <p style={{
            fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.7,
            maxWidth: '700px', margin: '0 auto 32px',
          }}>
            From Supreme Court victories to client success stories — witness our journey of delivering justice across India
          </p>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { value: '5000+', label: 'Cases Won', icon: '⚖️' },
              { value: '200+', label: 'Expert Lawyers', icon: '👨‍⚖️' },
              { value: '150+', label: 'SC/HC Victories', icon: '🏛️' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '2rem', fontWeight: '900',
                  background: 'linear-gradient(135deg, #b4945c, #d4af37)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Gallery Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '28px',
          }} className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.6s ease ${idx * 0.1}s both`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${item.color}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                }}
              >
                {/* Real Image */}
                <div style={{
                  height: '240px',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: `${item.color}15`,
                    color: item.color,
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '12px',
                  }}>
                    {categories.find(c => c.id === item.category)?.name || 'Gallery'}
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#475569',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}>
                    {item.desc}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: item.color,
                    fontWeight: '700',
                    fontSize: '0.85rem',
                  }}>
                    Read Full Case Study
                    <span style={{ fontSize: '1rem' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#94a3b8',
            }}>
              <span style={{ fontSize: '4rem', display: 'block', marginBottom: '16px' }}>⚖️</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#334155', marginBottom: '8px' }}>
                No items found
              </h3>
              <p>Please select a different category</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{
          maxWidth: '900px', margin: '0 auto', textAlign: 'center',
          background: 'linear-gradient(135deg, #0b1a33, #1e3a5f)',
          borderRadius: '28px', padding: '60px 40px',
          boxShadow: '0 20px 60px rgba(15,23,42,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute', top: '-50px', right: '-50px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(180,148,92,0.2) 0%, transparent 70%)',
          }} />

          <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '20px' }}>⚖️</span>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: '900',
            color: '#fff',
            marginBottom: '16px',
            lineHeight: 1.2,
            fontFamily: "'Georgia', serif",
          }}>
            Need Legal Help?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            marginBottom: '36px',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 36px',
          }}>
            Join thousands of satisfied clients who trusted JanNyay for their legal matters.
            Your victory story could be our next success feature!
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '14px', textDecoration: 'none',
              background: 'linear-gradient(135deg, #b4945c, #9a7c4a)',
              color: '#fff', fontWeight: '800', fontSize: '1rem',
              boxShadow: '0 8px 28px rgba(180,148,92,0.4)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(180,148,92,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(180,148,92,0.4)';
              }}
            >
              ⚖️ Free Consultation
            </Link>
            <a href="tel:+911800000000" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '14px', textDecoration: 'none',
              background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)',
              color: '#fff', fontWeight: '700', fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              📞 Call Now: 1800-000-0000
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animations & Responsive CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 28px;
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            gap: 20px;
          }
          .category-filter {
            gap: 8px !important;
          }
          .category-filter button {
            padding: 10px 20px !important;
            font-size: 0.85rem !important;
          }
        }

        @media (max-width: 600px) {
          .category-filter button span:first-child {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}