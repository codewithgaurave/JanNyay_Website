import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '70vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #14532d 100%)',
        paddingTop: '100px',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,26,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(19,136,8,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '80px 24px',
          width: '100%', textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,107,26,0.15)', border: '1px solid rgba(255,107,26,0.3)',
            borderRadius: '99px', padding: '8px 20px', marginBottom: '24px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B1A', display: 'inline-block' }} />
            <span style={{ color: '#FF6B1A', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              About JanNyay
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: '24px',
            fontFamily: "'Georgia', serif",
            letterSpacing: '-1px',
          }}>
            Your Trusted Partner in{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>
              Legal Justice
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.8,
            marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px',
          }}>
            Empowering every Indian with accessible, affordable, and expert legal representation across all courts
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '14px', textDecoration: 'none',
              background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
              color: '#fff', fontWeight: '700', fontSize: '1rem',
              boxShadow: '0 8px 30px rgba(255,107,26,0.4)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,107,26,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,107,26,0.4)'; }}
            >
              ⚖️ Get Free Consultation
            </Link>
            <a href="tel:+911800000000" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '16px 32px', borderRadius: '14px', textDecoration: 'none',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontWeight: '600', fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            >
              📞 Call Now
            </a>
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'flex', gap: '48px', justifyContent: 'center', marginTop: '60px', flexWrap: 'wrap',
          }}>
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5000+', label: 'Cases Won' },
              { value: '200+', label: 'Expert Lawyers' },
              { value: '98%', label: 'Success Rate' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.5rem', fontWeight: '900',
                  background: 'linear-gradient(135deg, #FF6B1A, #f59e0b)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: '8px',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Our Story */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '24px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              Our Story
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 20px' }}>
              Founded in 2010, JanNyay emerged from a simple yet powerful vision: to make quality legal services accessible to every Indian citizen. We recognized that navigating the Indian legal system was often intimidating, expensive, and confusing for common people. Our founders, a group of senior advocates with decades of experience in Supreme Court and High Courts, decided to bridge this gap.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
              Today, JanNyay stands as India's most trusted legal services platform, having successfully represented over 10,000 clients across all courts in India. Our network of 200+ expert lawyers, combined with cutting-edge technology, ensures that justice is no longer a privilege but a right accessible to all.
            </p>
          </div>

          {/* Mission & Vision */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px' }} className="mission-vision-grid">
            <div style={{
              background: 'linear-gradient(135deg, #FF6B1A 0%, #e55a0e 100%)',
              padding: '50px 40px',
              borderRadius: '24px',
              color: '#fff',
              boxShadow: '0 20px 60px rgba(255,107,26,0.3)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
              <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px', fontFamily: "'Georgia', serif" }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.95 }}>
                To democratize access to justice by providing affordable, transparent, and professional legal services to every Indian citizen. We strive to empower individuals and businesses with expert legal representation across all courts, ensuring that quality legal help is just a call away.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #138808 0%, #0d5c05 100%)',
              padding: '50px 40px',
              borderRadius: '24px',
              color: '#fff',
              boxShadow: '0 20px 60px rgba(19,136,8,0.3)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔭</div>
              <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '20px', fontFamily: "'Georgia', serif" }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, opacity: 0.95 }}>
                To become India's leading legal services platform where every citizen can confidently navigate the legal system. We envision a future where legal justice is accessible, affordable, and efficient for all, regardless of their economic or social background.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '48px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              Our Core Values
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="values-grid">
              {[
                { icon: '⚖️', title: 'Justice for All', desc: 'We believe every person deserves equal access to quality legal representation, regardless of their background or financial status.' },
                { icon: '🔒', title: 'Integrity', desc: 'We maintain the highest ethical standards, ensuring complete confidentiality and honest communication with all our clients.' },
                { icon: '🌟', title: 'Excellence', desc: 'Our team of expert advocates delivers superior legal services with meticulous attention to detail and case preparation.' },
                { icon: '🤝', title: 'Client First', desc: 'Your legal needs are our priority. We provide personalized attention and dedicated support throughout your legal journey.' },
                { icon: '💡', title: 'Innovation', desc: 'We leverage technology to make legal services more accessible, efficient, and transparent for modern India.' },
                { icon: '💪', title: 'Commitment', desc: 'We fight relentlessly for your rights in every court, ensuring the best possible outcome for your case.' },
              ].map((value, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '32px 24px',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{value.icon}</div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0f172a', marginBottom: '12px' }}>{value.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div style={{ marginBottom: '80px', background: 'linear-gradient(135deg, #f8fafc, #fff)', padding: '60px 0', borderRadius: '24px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '24px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              What We Do
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '40px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px' }}>
              JanNyay provides comprehensive legal services across all areas of Indian law. Our platform connects you with specialized advocates who have proven expertise in their respective fields.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="services-about-grid">
              {[
                { icon: '⚖️', title: 'Criminal Defense', desc: 'Expert defense in IPC cases, bail applications, anticipatory bail, trial proceedings, and appeals in all criminal courts.' },
                { icon: '🏛️', title: 'Civil Litigation', desc: 'Property disputes, contract enforcement, injunctions, declaratory suits, and civil appeals across all civil courts.' },
                { icon: '👨👩👧', title: 'Family Law', desc: 'Divorce proceedings, child custody, alimony, matrimonial disputes, DV Act cases, and adoption matters.' },
                { icon: '🏢', title: 'Corporate Law', desc: 'Company registration, contract drafting, compliance, mergers & acquisitions, and corporate litigation.' },
                { icon: '🏠', title: 'Property & Real Estate', desc: 'Title verification, property documentation, RERA disputes, landlord-tenant cases, and encumbrance matters.' },
                { icon: '📋', title: 'Consumer Protection', desc: 'Consumer court cases for defective products, deficient services, and unfair trade practices.' },
                { icon: '💼', title: 'Labour & Employment', desc: 'Wrongful termination, workplace disputes, PF/ESI matters, and industrial tribunal cases.' },
                { icon: '💡', title: 'Intellectual Property', desc: 'Trademark registration, copyright protection, patent filing, and IP litigation.' },
              ].map((service, index) => (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  padding: '24px',
                  background: '#fff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2rem', flexShrink: 0 }}>{service.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>{service.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Presence */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '48px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              Our Presence Across India
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="presence-grid">
              {[
                { icon: '🏛️', title: 'Supreme Court', desc: 'New Delhi' },
                { icon: '⚖️', title: 'High Courts', desc: '25+ States' },
                { icon: '📜', title: 'District Courts', desc: '100+ Districts' },
                { icon: '👨⚖️', title: 'Tribunals', desc: 'All Major Cities' },
                { icon: '🏘️', title: 'Consumer Forums', desc: 'Pan India' },
                { icon: '👥', title: 'Family Courts', desc: '50+ Cities' },
                { icon: '🔨', title: 'Labour Courts', desc: 'Metro Cities' },
                { icon: '🌿', title: 'Green Tribunals', desc: 'Major Zones' },
              ].map((court, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(135deg, #f8fafc, #fff)',
                  padding: '28px 20px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{court.icon}</div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>{court.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{court.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '24px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              Meet Our Expert Legal Team
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '48px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
              Our team comprises senior advocates, legal consultants, and support staff dedicated to delivering justice
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="team-grid">
              {[
                { name: 'Adv. Rajesh Sharma', role: 'Senior Advocate - Supreme Court', exp: '25+ Years', cases: '1000+', img: '👨⚖️', color: '#FF6B1A' },
                { name: 'Adv. Priya Mehta', role: 'Family Law Specialist', exp: '18+ Years', cases: '800+', img: '👩⚖️', color: '#6366f1' },
                { name: 'Adv. Anil Kumar', role: 'Criminal Defense Expert', exp: '22+ Years', cases: '1200+', img: '👨⚖️', color: '#138808' },
                { name: 'Adv. Sunita Verma', role: 'Corporate Law Consultant', exp: '15+ Years', cases: '600+', img: '👩⚖️', color: '#e11d48' },
                { name: 'Adv. Vikram Singh', role: 'Property & Real Estate', exp: '20+ Years', cases: '900+', img: '👨⚖️', color: '#d97706' },
                { name: 'Adv. Neha Gupta', role: 'Consumer Rights Advocate', exp: '12+ Years', cases: '500+', img: '👩⚖️', color: '#0891b2' },
              ].map((member, index) => (
                <div key={index} style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 20px 40px ${member.color}22`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'; }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    boxShadow: `0 8px 24px ${member.color}40`,
                  }}>
                    {member.img}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>{member.name}</h4>
                  <p style={{ fontSize: '0.95rem', color: member.color, fontWeight: '700', marginBottom: '16px' }}>{member.role}</p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '16px', borderTop: '2px solid #f3f4f6' }}>
                    <div>
                      <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a' }}>{member.exp}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Experience</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#0f172a' }}>{member.cases}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cases Won</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div style={{ marginBottom: '80px', background: 'linear-gradient(135deg, #f8fafc, #fff)', padding: '60px 0', borderRadius: '24px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '48px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              Awards & Recognition
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '28px' }} className="awards-grid">
              {[
                { icon: '🏆', title: 'Best Legal Platform', year: '2023', org: 'Legal India Awards' },
                { icon: '⭐', title: 'Client Choice Award', year: '2022', org: 'Bar Council' },
                { icon: '🎖️', title: 'Excellence in Law', year: '2021', org: 'Supreme Court' },
                { icon: '🥇', title: 'Top Rated Service', year: '2023', org: 'Google Reviews' },
                { icon: '💎', title: 'Most Trusted Brand', year: '2022', org: 'India Today' },
                { icon: '🌟', title: 'Innovation Award', year: '2021', org: 'Legal Tech India' },
                { icon: '🏅', title: 'Customer Satisfaction', year: '2023', org: 'Consumer Forum' },
                { icon: '👑', title: 'Market Leader', year: '2022', org: 'Economic Times' },
              ].map((award, index) => (
                <div key={index} style={{
                  background: '#fff',
                  padding: '24px 20px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{award.icon}</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a', marginBottom: '6px', lineHeight: 1.3 }}>{award.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#FF6B1A', fontWeight: '700', marginBottom: '4px' }}>{award.year}</p>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{award.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
            borderRadius: '24px',
            padding: '60px 40px',
            textAlign: 'center',
          }}>
            <h3 style={{ color: '#fff', fontSize: '2rem', fontWeight: '900', marginBottom: '16px', fontFamily: "'Georgia', serif" }}>
              Ready to Get Legal Help?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              Join thousands of satisfied clients who trusted JanNyay for their legal needs
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 40px',
              borderRadius: '14px',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
              color: '#fff',
              fontWeight: '700',
              fontSize: '1.1rem',
              boxShadow: '0 8px 32px rgba(255,107,26,0.4)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              ⚖️ Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .presence-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .awards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .mission-vision-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .services-about-grid { grid-template-columns: 1fr !important; }
          .presence-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .presence-grid { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: 1fr !important; }
          .awards-grid { grid-template-columns: 1fr !important; }
          .services-about-grid { gap: 16px !important; }
          .services-about-grid > div { padding: 20px !important; }
          .services-about-grid h4 { font-size: 1rem !important; }
          .services-about-grid p { font-size: 0.85rem !important; }
        }
        @media (max-width: 480px) {
          .services-about-grid > div { padding: 16px !important; gap: 12px !important; }
          .services-about-grid > div > div:first-child { font-size: 1.5rem !important; }
          .services-about-grid h4 { font-size: 0.95rem !important; }
          .services-about-grid p { font-size: 0.8rem !important; line-height: 1.5 !important; }
        }
      `}</style>
    </div>
  );
}
