import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

/* ─── Animated Counter ─── */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ─── */
const stats = [
  { value: 5000, suffix: '+', label: 'Cases Won', icon: '⚖️' },
  { value: 15, suffix: '+', label: 'Years Experience', icon: '📅' },
  { value: 200, suffix: '+', label: 'Expert Lawyers', icon: '👨‍⚖️' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
];

const services = [
  {
    icon: '⚖️',
    title: 'Criminal Defense',
    desc: 'Expert criminal defense lawyers protecting your rights in IPC cases, bail matters, and trial proceedings across all courts.',
    color: '#FF6B1A',
  },
  {
    icon: '🏛️',
    title: 'Civil Litigation',
    desc: 'Comprehensive civil case representation including property disputes, contract enforcement, and injunction matters.',
    color: '#138808',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Law',
    desc: 'Sensitive handling of divorce, child custody, alimony, matrimonial disputes and POCSO cases with compassion.',
    color: '#FF6B1A',
  },
  {
    icon: '🏢',
    title: 'Corporate Law',
    desc: 'Legal advisory for businesses — company registration, contracts, compliance, mergers & acquisitions.',
    color: '#138808',
  },
  {
    icon: '🏠',
    title: 'Property & Real Estate',
    desc: 'Property documentation, title verification, RERA disputes, landlord-tenant cases and encumbrance matters.',
    color: '#FF6B1A',
  },
  {
    icon: '📋',
    title: 'Consumer Court',
    desc: 'Fight for your consumer rights against defective goods, deficient services, and unfair trade practices.',
    color: '#138808',
  },
];

const practiceAreas = [
  { icon: '🏛️', name: 'Supreme Court' },
  { icon: '⚖️', name: 'High Court' },
  { icon: '📜', name: 'District Court' },
  { icon: '👨‍💼', name: 'Tribunals' },
  { icon: '🏢', name: 'Consumer Forum' },
  { icon: '👪', name: 'Family Court' },
  { icon: '🔨', name: 'Labour Court' },
  { icon: '🌿', name: 'Green Tribunal' },
];

const testimonials = [
  {
    name: 'Ramesh Kumar',
    location: 'New Delhi',
    rating: 5,
    text: 'JanNyay ke lawyers ne mera property dispute case sirf 6 mahine mein jeet liya. Bahut professional aur dedicated team hai. Highly recommended!',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Divorce case mein JanNyay ne mujhe bahut emotional aur legal support diya. Bachchon ki custody milna possible hua unki wajah se. Dil se shukriya!',
    avatar: 'PS',
  },
  {
    name: 'Anil Mehta',
    location: 'Bangalore',
    rating: 5,
    text: 'Meri company ke legal matters ke liye JanNyay best choice thi. Contract drafting se lekar court representation tak — sab top class.',
    avatar: 'AM',
  },
  {
    name: 'Sunita Verma',
    location: 'Pune',
    rating: 5,
    text: 'Consumer court case mein JanNyay ne meri puri madad ki. Defective product ke liye compensation milna asaan ho gaya. Thank you team!',
    avatar: 'SV',
  },
  {
    name: 'Rajesh Gupta',
    location: 'Jaipur',
    rating: 5,
    text: 'Criminal case mein bail milne mein JanNyay ne 24 ghante mein action liya. Fast response aur expert guidance ke liye grateful hoon.',
    avatar: 'RG',
  },
];

const whyUs = [
  { icon: '🛡️', title: 'Trusted & Transparent', desc: 'No hidden fees. Clear communication at every step of your legal journey.' },
  { icon: '⚡', title: 'Swift Action', desc: 'We act fast. Bail applications, urgent injunctions — we respond within hours.' },
  { icon: '🌐', title: 'Pan India Network', desc: 'Lawyers in 25+ cities across India. Your case, handled locally by experts.' },
  { icon: '💬', title: 'Free Consultation', desc: 'First consultation is FREE. Understand your legal standing before committing.' },
];

/* ─── Styles helper ─── */
const S = {
  section: {
    padding: '80px 24px',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  tag: {
    display: 'inline-block',
    padding: '6px 18px',
    borderRadius: '99px',
    fontSize: '0.78rem',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  heading: {
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    fontWeight: '800',
    lineHeight: 1.15,
    color: '#111827',
    marginBottom: '16px',
  },
  subtext: {
    fontSize: '1.05rem',
    color: '#6b7280',
    lineHeight: 1.7,
    maxWidth: '600px',
  },
};

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", overflowX: 'hidden' }}>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #14532d 100%)',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,26,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(19,136,8,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '120px 24px 80px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px',
          alignItems: 'center', width: '100%',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
        }} className="hero-grid">

          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,107,26,0.15)', border: '1px solid rgba(255,107,26,0.3)',
              borderRadius: '99px', padding: '6px 16px', marginBottom: '24px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B1A', display: 'inline-block' }} />
              <span style={{ color: '#FF6B1A', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1px' }}>
                INDIA'S TRUSTED LEGAL PLATFORM
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: '900',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '8px',
              fontFamily: "'Georgia', serif",
            }}>
              न्याय आपका{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B1A, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                अधिकार है
              </span>
            </h1>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
              fontWeight: '700',
              color: '#e2e8f0',
              marginBottom: '24px',
            }}>
              Justice is Your Right
            </h2>

            <p style={{
              fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8,
              marginBottom: '40px', maxWidth: '520px',
            }}>
              JanNyay connects you with India's best lawyers for criminal, civil, family, and corporate cases.
              Expert legal guidance — affordable, fast, and transparent.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
                ⚖️ Free Consultation
              </Link>
              <Link to="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '16px 32px', borderRadius: '14px', textDecoration: 'none',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff', fontWeight: '600', fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              >
                Know More →
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}>
              {['Bar Council Registered', 'Supreme Court Listed', 'ISO Certified'].map(badge => (
                <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#22c55e', fontSize: '1rem' }}>✓</span>
                  <span style={{ color: '#94a3b8', fontSize: '0.82rem', fontWeight: '500' }}>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-card-wrap">
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '24px',
              padding: '40px 32px',
              backdropFilter: 'blur(20px)',
              maxWidth: '400px',
              width: '100%',
            }}>
              <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                <span style={{ fontSize: '4rem' }}>⚖️</span>
                <h3 style={{ color: '#fff', fontWeight: '700', fontSize: '1.4rem', marginTop: '12px' }}>
                  Book a Consultation
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '6px' }}>
                  Talk to an expert lawyer today
                </p>
              </div>

              {[
                { label: 'Your Name', placeholder: 'Ramesh Kumar', icon: '👤' },
                { label: 'Phone Number', placeholder: '+91 98765 43210', icon: '📞' },
                { label: 'Legal Issue', placeholder: 'Criminal / Civil / Family...', icon: '⚖️' },
              ].map(field => (
                <div key={field.label} style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.82rem', marginBottom: '6px', fontWeight: '500' }}>
                    {field.icon} {field.label}
                  </label>
                  <input
                    placeholder={field.placeholder}
                    style={{
                      width: '100%', padding: '12px 16px',
                      borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.08)', color: '#fff',
                      fontSize: '0.9rem', outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              ))}

              <Link to="/contact" style={{
                display: 'block', textAlign: 'center', textDecoration: 'none',
                padding: '14px', borderRadius: '12px', marginTop: '8px',
                background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
                color: '#fff', fontWeight: '700', fontSize: '1rem',
                boxShadow: '0 4px 20px rgba(255,107,26,0.4)',
              }}>
                Get Free Legal Help →
              </Link>
              <p style={{ color: '#64748b', fontSize: '0.75rem', textAlign: 'center', marginTop: '12px' }}>
                🔒 Your information is 100% confidential
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — Modern Clean Design
      ══════════════════════════════════════════ */}
      <section style={{
        background: '#ffffff',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

          {/* Section label */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B1A, #138808)',
              padding: '8px 24px',
              borderRadius: '50px',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(255,107,26,0.25)',
            }}>
              <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                📊 Our Track Record
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '900', 
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-1px',
              fontFamily: "'Georgia', serif",
            }}>
              Numbers That Speak{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>
                For Themselves
              </span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Proven track record of delivering justice across India
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }} className="stats-cards-grid">
            {[
              {
                value: 5000, suffix: '+', label: 'Cases Won',
                sub: 'Across all Indian courts',
                icon: '⚖️',
                grad: 'linear-gradient(135deg, #FF6B1A, #f59e0b)',
                glow: 'rgba(255,107,26,0.25)',
                bg: 'rgba(255,107,26,0.06)',
              },
              {
                value: 15, suffix: '+', label: 'Years Experience',
                sub: 'Serving justice since 2010',
                icon: '📅',
                grad: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                glow: 'rgba(99,102,241,0.2)',
                bg: 'rgba(99,102,241,0.06)',
              },
              {
                value: 200, suffix: '+', label: 'Expert Lawyers',
                sub: 'Pan India network',
                icon: '👨‍⚖️',
                grad: 'linear-gradient(135deg, #138808, #22c55e)',
                glow: 'rgba(19,136,8,0.2)',
                bg: 'rgba(19,136,8,0.06)',
              },
              {
                value: 98, suffix: '%', label: 'Client Satisfaction',
                sub: 'Verified by 10,000+ clients',
                icon: '⭐',
                grad: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                glow: 'rgba(245,158,11,0.25)',
                bg: 'rgba(245,158,11,0.06)',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="stat-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '32px 24px',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${stat.glow}`;
                  e.currentTarget.style.borderColor = `${stat.accent}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                {/* Top gradient accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: stat.grad,
                }} />

                {/* Icon bubble */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: stat.bg,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '1.8rem',
                  marginBottom: '20px',
                  border: `2px solid ${stat.accent}30`,
                }}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <div style={{
                  fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                  fontWeight: '900',
                  background: stat.grad,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '12px',
                  letterSpacing: '-1px',
                }}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div style={{
                  fontWeight: '700', fontSize: '1rem',
                  color: '#111827', marginBottom: '8px',
                }}>
                  {stat.label}
                </div>

                {/* Sub text */}
                <div style={{
                  fontSize: '0.85rem', color: '#9ca3af', fontWeight: '500', lineHeight: 1.5,
                }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — Premium Redesign
      ══════════════════════════════════════════ */}
      <section style={{
        background: '#fff',
        padding: '70px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* BG decoration */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '50%', height: '100%',
          background: 'linear-gradient(135deg, #fff9f6 0%, #f0fff4 100%)',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B1A, #138808)',
              padding: '8px 24px',
              borderRadius: '50px',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(255,107,26,0.25)',
            }}>
              <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                ⚖️ Our Legal Services
              </span>
            </div>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              fontWeight: '900', 
              color: '#0f172a', 
              lineHeight: 1.15, 
              marginBottom: '16px',
              letterSpacing: '-1px',
              fontFamily: "'Georgia', serif",
            }}>
              Expert Help For Every{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>Legal Matter</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              From criminal defense to corporate law — our experienced advocates cover every area of Indian law
            </p>
          </div>

          {/* Services Grid — 3 col with numbered cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }} className="services-grid">
            {[
              {
                num: '01', icon: '⚖️', title: 'Criminal Defense',
                desc: 'Expert defense in IPC cases, bail applications, trial proceedings and appeals across all courts.',
                accent: '#FF6B1A', light: '#fff5f0',
              },
              {
                num: '02', icon: '🏛️', title: 'Civil Litigation',
                desc: 'Property disputes, contract enforcement, injunctions and declaratory suits handled with precision.',
                accent: '#6366f1', light: '#f5f5ff',
              },
              {
                num: '03', icon: '👨‍👩‍👧', title: 'Family Law',
                desc: 'Divorce, child custody, alimony, matrimonial disputes and DV Act cases with compassion.',
                accent: '#e11d48', light: '#fff1f5',
              },
              {
                num: '04', icon: '🏢', title: 'Corporate Law',
                desc: 'Business registration, contracts, compliance and M&A transactions for startups to enterprises.',
                accent: '#138808', light: '#f0fff4',
              },
              {
                num: '05', icon: '🏠', title: 'Property & Real Estate',
                desc: 'Title verification, RERA disputes, encumbrance matters and landlord-tenant case resolution.',
                accent: '#0891b2', light: '#ecfeff',
              },
              {
                num: '06', icon: '📋', title: 'Consumer Court',
                desc: 'Fight defective products, deficient services and unfair trade practices in consumer forums.',
                accent: '#d97706', light: '#fffbeb',
              },
            ].map((svc) => (
              <div
                key={svc.num}
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '0',
                  border: '1.5px solid #f1f5f9',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                  cursor: 'pointer',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                  e.currentTarget.style.boxShadow = `0 24px 60px ${svc.accent}22, 0 4px 16px rgba(0,0,0,0.06)`;
                  e.currentTarget.style.borderColor = `${svc.accent}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                {/* Colored top bar */}
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${svc.accent}, ${svc.accent}88)` }} />

                <div style={{ padding: '28px 28px 32px' }}>
                  {/* Number + Icon row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: '800', letterSpacing: '2px',
                      color: `${svc.accent}`, opacity: 0.5,
                    }}>
                      {svc.num}
                    </span>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '14px',
                      background: svc.light,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.7rem',
                      border: `1.5px solid ${svc.accent}20`,
                    }}>
                      {svc.icon}
                    </div>
                  </div>

                  <h3 style={{
                    fontWeight: '800', fontSize: '1.12rem',
                    color: '#111827', marginBottom: '10px', lineHeight: 1.3,
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '20px' }}>
                    {svc.desc}
                  </p>

                  {/* Bottom CTA */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    color: svc.accent, fontWeight: '700', fontSize: '0.85rem',
                    paddingBottom: '2px',
                    borderBottom: `2px solid ${svc.accent}40`,
                  }}>
                    Consult Now
                    <span style={{ fontSize: '1rem' }}>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div style={{
            marginTop: '56px',
            background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
            borderRadius: '24px',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }} className="services-cta-strip">
            <div>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
                Not sure which service you need?
              </p>
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', lineHeight: 1.3 }}>
                Talk to our experts — Free 30-min consultation 🎯
              </h3>
            </div>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 30px', borderRadius: '14px', textDecoration: 'none',
              background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
              color: '#fff', fontWeight: '700', fontSize: '0.95rem',
              boxShadow: '0 6px 24px rgba(255,107,26,0.4)',
              whiteSpace: 'nowrap', flexShrink: 0,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              ⚖️ Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRACTICE AREAS (COURT TYPES) — Modern Clean Design
      ══════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #14532d 100%)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,107,26,0.15)',
            padding: '8px 24px',
            borderRadius: '50px',
            marginBottom: '20px',
            border: '1px solid rgba(255,107,26,0.3)',
          }}>
            <span style={{ color: '#FF6B1A', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
              🏛️ Where We Practice
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: '900',
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '16px',
            letterSpacing: '-1px',
            fontFamily: "'Georgia', serif",
          }}>
            We Appear In Every{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>Court of India</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 48px' }}>
            Our advocates are listed in all major courts and tribunals across the country
          </p>

          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center',
          }}>
            {practiceAreas.map((area) => (
              <div key={area.name} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50px',
                padding: '12px 24px',
                color: '#e2e8f0',
                fontWeight: '600',
                fontSize: '0.95rem',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,107,26,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255,107,26,0.5)';
                  e.currentTarget.style.color = '#FF6B1A';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '1.3rem' }}>{area.icon}</span>
                {area.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE US — Premium Redesign
      ══════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '70px 24px', overflow: 'hidden', position: 'relative' }}>

        {/* subtle bg grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5, pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* ── TOP 2-col layout ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '56px',
            alignItems: 'center',
            marginBottom: '72px',
          }} className="why-grid">

            {/* LEFT — Dark card with brand statement */}
            <div style={{
              background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 50%, #14532d 100%)',
              borderRadius: '28px',
              padding: '52px 44px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(15,23,42,0.3)',
            }}>
              {/* Glow orb */}
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '200px', height: '200px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,107,26,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', bottom: '-40px', left: '-20px',
                width: '160px', height: '160px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(19,136,8,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Tag */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: 'rgba(255,107,26,0.15)',
                border: '1px solid rgba(255,107,26,0.3)',
                borderRadius: '99px', padding: '5px 16px', marginBottom: '28px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF6B1A', display: 'inline-block' }} />
                <span style={{ color: '#FF6B1A', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Why JanNyay?
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: '900', lineHeight: 1.15,
                color: '#fff', marginBottom: '20px',
                fontFamily: "'Georgia', serif",
              }}>
                Legal Help That Feels{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #FF6B1A, #f59e0b)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Human</span>{' & '}
                <span style={{
                  background: 'linear-gradient(135deg, #22c55e, #138808)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>Honest</span>
              </h2>

              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8, marginBottom: '36px' }}>
                We believe justice should be accessible to every Indian — not just those who can afford expensive legal fees.
                JanNyay is built on trust, transparency, and unwavering dedication.
              </p>

              {/* Mini stats row */}
              <div style={{ display: 'flex', gap: '32px', marginBottom: '40px', flexWrap: 'wrap' }}>
                {[
                  { num: '25+', label: 'Cities' },
                  { num: '₹0', label: 'First Consult' },
                  { num: '24h', label: 'Response Time' },
                ].map(s => (
                  <div key={s.label}>
                    <div style={{
                      fontSize: '1.7rem', fontWeight: '900',
                      background: 'linear-gradient(135deg, #FF6B1A, #f59e0b)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      lineHeight: 1,
                    }}>{s.num}</div>
                    <div style={{ color: '#64748b', fontSize: '0.78rem', fontWeight: '600', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '15px 30px', borderRadius: '14px', textDecoration: 'none',
                background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
                color: '#fff', fontWeight: '700', fontSize: '0.95rem',
                boxShadow: '0 8px 28px rgba(255,107,26,0.45)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(255,107,26,0.55)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,107,26,0.45)'; }}
              >
                ⚖️ Talk To a Lawyer — Free
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </Link>
            </div>

            {/* RIGHT — Feature cards 2x2 */}
            <div className="why-cards">
              {[
                {
                  icon: '🛡️',
                  title: 'Trusted & Transparent',
                  desc: 'No hidden fees. No jargon. Clear communication at every step of your legal journey.',
                  color: '#FF6B1A', bg: '#fff5f0', border: 'rgba(255,107,26,0.15)',
                },
                {
                  icon: '⚡',
                  title: 'Swift Legal Action',
                  desc: 'Bail applications, urgent injunctions — we respond within hours, not days.',
                  color: '#6366f1', bg: '#f5f5ff', border: 'rgba(99,102,241,0.15)',
                },
                {
                  icon: '🌐',
                  title: 'Pan India Network',
                  desc: 'Expert lawyers in 25+ cities. Your case handled locally by the best in your region.',
                  color: '#138808', bg: '#f0fff4', border: 'rgba(19,136,8,0.15)',
                },
                {
                  icon: '💬',
                  title: 'Free Consultation',
                  desc: 'First consultation is FREE. Know your rights before committing to anything.',
                  color: '#d97706', bg: '#fffbeb', border: 'rgba(217,119,6,0.15)',
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="why-card"
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '28px 24px',
                    border: `1.5px solid ${item.border}`,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
                    transition: 'all 0.35s cubic-bezier(0.23,1,0.32,1)',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 20px 48px ${item.color}22`;
                    e.currentTarget.style.borderColor = `${item.color}50`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = item.border;
                  }}
                >
                  {/* Corner accent */}
                  <div style={{
                    position: 'absolute', top: 0, right: 0,
                    width: '60px', height: '60px',
                    background: item.bg,
                    borderRadius: '0 20px 0 60px',
                  }} />

                  <div style={{
                    width: '52px', height: '52px', borderRadius: '16px',
                    background: item.bg, fontSize: '1.6rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '18px',
                    border: `1.5px solid ${item.color}20`,
                    position: 'relative', zIndex: 1,
                  }}>
                    {item.icon}
                  </div>

                  <h4 style={{
                    fontWeight: '800', color: '#111827',
                    fontSize: '1.02rem', marginBottom: '10px', lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>

                  {/* Bottom colored dash */}
                  <div style={{
                    marginTop: '18px', height: '3px', width: '32px',
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}55)`,
                    borderRadius: '99px',
                  }} />
                </div>
              ))}
            </div>
          </div>

          {/* ── PROCESS STEPS — premium full width ── */}
          <div style={{
            background: 'linear-gradient(to bottom right, #ffffff, #f8fafc)',
            borderRadius: '24px',
            padding: '50px 30px',
            border: '1px solid rgba(0,0,0,0.03)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
            position: 'relative',
            overflow: 'hidden',
          }} className="steps-container">

            <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #FF6B1A, #138808)',
                padding: '8px 24px',
                borderRadius: '50px',
                marginBottom: '20px',
                boxShadow: '0 4px 20px rgba(255,107,26,0.25)',
              }}>
                <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  🚀 How It Works
                </span>
              </div>
              <h3 style={{ 
                fontWeight: '900', 
                fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
                color: '#0f172a', 
                lineHeight: 1.15,
                letterSpacing: '-1px',
                fontFamily: "'Georgia', serif",
              }}>
                Get Justice in{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}>4 Simple Steps</span>
              </h3>
            </div>

            <div className="steps-grid" style={{ position: 'relative', zIndex: 1 }}>
              {/* Connector line (Desktop only - via CSS) */}
              <div className="steps-line" style={{
                position: 'absolute', top: '38px', left: '12%', right: '12%',
                height: '3px',
                background: 'linear-gradient(90deg, #FF6B1A, #6366f1, #138808, #f59e0b)',
                borderRadius: '4px',
                zIndex: 0,
                opacity: 0.5,
              }} />

              {[
                { step: '01', icon: '📞', title: 'Free Consult', desc: 'Call us or fill the form—completely free and zero obligations.', color: '#FF6B1A' },
                { step: '02', icon: '👨‍⚖️', title: 'Meet Lawyer', desc: 'Get matched with a specialist advocate for your specific case.', color: '#6366f1' },
                { step: '03', icon: '📋', title: 'Case Strategy', desc: 'Your lawyer builds a rock-solid, winning strategy tailored for you.', color: '#138808' },
                { step: '04', icon: '🏆', title: 'Win Justice', desc: 'We fight hard in court to get the victory you proudly deserve.', color: '#d97706' },
              ].map((s) => (
                <div key={s.step} className="step-col" style={{
                  position: 'relative', zIndex: 1,
                  background: '#fff', borderRadius: '20px', 
                  padding: '32px 24px',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}>
                  {/* Icon Circle */}
                  <div style={{ 
                    width: '72px', 
                    height: '72px', 
                    margin: '0 auto 20px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '2rem',
                    boxShadow: `0 8px 24px ${s.color}40`,
                    border: '3px solid #fff',
                    position: 'relative',
                  }}>
                    {s.icon}
                    {/* Step badge */}
                    <div style={{
                      position: 'absolute', 
                      top: '-8px', 
                      right: '-8px',
                      background: '#111827', 
                      color: '#fff',
                      fontSize: '0.65rem', 
                      fontWeight: '800',
                      padding: '4px 8px', 
                      borderRadius: '8px',
                      border: '2px solid #fff', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}>
                      {s.step}
                    </div>
                  </div>

                  <h4 style={{ 
                    fontWeight: '800', 
                    color: '#111827', 
                    fontSize: '1.1rem', 
                    marginBottom: '10px' 
                  }}>
                    {s.title}
                  </h4>
                  <p style={{ 
                    color: '#64748b', 
                    fontSize: '0.9rem', 
                    lineHeight: 1.6, 
                    maxWidth: '240px', 
                    margin: '0 auto' 
                  }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SUCCESS STORIES / CASE STUDIES
      ══════════════════════════════════════════ */}
      <section style={{
        background: '#fff',
        padding: '80px 24px',
        position: 'relative',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B1A, #138808)',
              padding: '8px 24px',
              borderRadius: '50px',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(255,107,26,0.25)',
            }}>
              <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                🏆 Success Stories
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-1px',
              fontFamily: "'Georgia', serif",
            }}>
              Cases We've{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>Won For You</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Real victories that changed lives — from bail to property disputes
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {[
              {
                icon: '⚖️',
                title: 'Bail in 24 Hours',
                case: 'IPC 420 Fraud Case',
                desc: 'Client falsely accused of fraud. We secured bail within 24 hours and case dismissed after 6 months.',
                result: 'Acquitted',
                color: '#FF6B1A',
                bg: '#fff5f0',
              },
              {
                icon: '🏠',
                title: '₹45L Property Dispute',
                case: 'Civil Suit - Delhi HC',
                desc: 'Family property dispute resolved. Client got rightful share worth ₹45 lakhs after 2-year battle.',
                result: 'Won',
                color: '#138808',
                bg: '#f0fff4',
              },
              {
                icon: '👨‍👩‍👧',
                title: 'Child Custody Won',
                case: 'Family Court - Mumbai',
                desc: 'Mother won full custody of 2 children in contested divorce case with alimony settlement.',
                result: 'Full Custody',
                color: '#e11d48',
                bg: '#fff1f5',
              },
              {
                icon: '📋',
                title: '₹8L Consumer Claim',
                case: 'Consumer Forum',
                desc: 'Defective car case. Client received ₹8 lakh compensation plus legal costs from manufacturer.',
                result: 'Compensation',
                color: '#d97706',
                bg: '#fffbeb',
              },
              {
                icon: '🏢',
                title: 'Corporate Contract Win',
                case: 'Arbitration - Bangalore',
                desc: 'Startup won ₹1.2 crore in breach of contract case against vendor through arbitration.',
                result: '₹1.2Cr Awarded',
                color: '#6366f1',
                bg: '#f5f5ff',
              },
              {
                icon: '🚨',
                title: 'False FIR Quashed',
                case: 'High Court - Jaipur',
                desc: 'FIR under IPC 498A quashed by High Court. Client\'s reputation fully restored.',
                result: 'FIR Quashed',
                color: '#0891b2',
                bg: '#ecfeff',
              },
            ].map((story) => (
              <div key={story.title} style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '32px',
                border: '1.5px solid #f1f5f9',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 48px ${story.color}22`;
                  e.currentTarget.style.borderColor = `${story.color}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = '#f1f5f9';
                }}
              >
                <div style={{ height: '4px', background: `linear-gradient(90deg, ${story.color}, ${story.color}88)`, position: 'absolute', top: 0, left: 0, right: 0 }} />
                
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: story.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  marginBottom: '20px',
                  border: `2px solid ${story.color}20`,
                }}>
                  {story.icon}
                </div>

                <div style={{
                  display: 'inline-block',
                  background: story.bg,
                  color: story.color,
                  padding: '4px 12px',
                  borderRadius: '8px',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                  border: `1px solid ${story.color}30`,
                }}>
                  {story.case}
                </div>

                <h3 style={{ fontWeight: '800', fontSize: '1.15rem', color: '#111827', marginBottom: '12px', lineHeight: 1.3 }}>
                  {story.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  {story.desc}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingTop: '16px',
                  borderTop: '2px solid #f3f4f6',
                }}>
                  <span style={{ fontSize: '1.2rem' }}>✓</span>
                  <span style={{ color: story.color, fontWeight: '800', fontSize: '0.95rem' }}>
                    {story.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLIENT STORIES — Modern Clean Design
      ══════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(180deg, #fafafa 0%, #ffffff 100%)',
        padding: '60px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FF6B1A, #138808)',
              padding: '8px 24px',
              borderRadius: '50px',
              marginBottom: '20px',
              boxShadow: '0 4px 20px rgba(255,107,26,0.25)',
            }}>
              <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
                ✨ Client Stories
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '900',
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-1px',
              fontFamily: "'Georgia', serif",
            }}>
              Real People.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}>Real Justice.</span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Hear from clients who trusted JanNyay to fight for their rights
            </p>
          </div>
        </div>

        {/* Testimonial Slider - Faster Speed */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }} className="marquee-wrapper">
            {[1, 2].map((set) => (
              <div key={set} style={{
                display: 'flex',
                gap: '24px',
                paddingRight: '24px',
                animation: 'marquee 20s linear infinite',
                width: 'max-content',
              }} className="marquee-content"
                onMouseEnter={e => document.querySelectorAll('.marquee-content').forEach(node => node.style.animationPlayState = 'paused')}
                onMouseLeave={e => document.querySelectorAll('.marquee-content').forEach(node => node.style.animationPlayState = 'running')}
              >
                {testimonials.map((t, i) => {
                  const accentColors = ['#FF6B1A', '#6366f1', '#138808'];
                  const accent = accentColors[i % accentColors.length];

                  return (
                    <div key={t.name} className="testimonial-card" style={{
                      width: '340px',
                      flexShrink: 0,
                      background: '#ffffff',
                      borderRadius: '20px',
                      padding: '32px',
                      border: 'none',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-12px)';
                        e.currentTarget.style.boxShadow = `0 20px 60px ${accent}30`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
                      }}
                    >
                      {/* Top Bar */}
                      <div style={{
                        height: '4px',
                        width: '60px',
                        background: `linear-gradient(90deg, ${accent}, ${accent}88)`,
                        borderRadius: '10px',
                        marginBottom: '20px',
                      }} />

                      {/* Rating Stars */}
                      <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
                        {[...Array(t.rating)].map((_, i) => (
                          <span key={i} style={{ color: '#fbbf24', fontSize: '1.2rem' }}>★</span>
                        ))}
                      </div>

                      {/* Review Text */}
                      <p style={{
                        color: '#374151',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        marginBottom: '24px',
                        flex: 1,
                      }}>
                        "{t.text}"
                      </p>

                      {/* User Info */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        paddingTop: '18px',
                        borderTop: '2px solid #f3f4f6',
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: '800',
                          fontSize: '1.1rem',
                          flexShrink: 0,
                          boxShadow: `0 4px 16px ${accent}40`,
                        }}>
                          {t.avatar}
                        </div>

                        <div>
                          <div style={{ fontWeight: '700', color: '#111827', fontSize: '1rem', marginBottom: '4px' }}>
                            {t.name}
                          </div>
                          <div style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: '500' }}>
                            📍 {t.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════
          CTA BANNER - Premium Redesign
      ══════════════════════════════════════════ */}
      <section style={{
        padding: '60px 24px 80px',
        position: 'relative',
        background: '#fff',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          background: 'linear-gradient(135deg, #FF6B1A 0%, #e55a0e 50%, #c0392b 100%)',
          borderRadius: '32px',
          padding: '70px 40px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(255,107,26,0.25)',
        }} className="cta-banner-container">

          {/* Abstract vector blobs */}
          <div style={{
            position: 'absolute', top: '-100px', left: '-50px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-100px', right: '-50px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Icon Badge */}
          <div style={{
            width: '72px', height: '72px', margin: '0 auto 24px',
            background: '#fff', borderRadius: '20px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            transform: 'rotate(-5deg)',
            position: 'relative', zIndex: 1,
          }}>
            🤔
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900',
              color: '#fff', marginBottom: '16px', lineHeight: 1.15,
              textShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}>
              Apna Koi Legal Sawaal Hai?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', marginBottom: '40px', lineHeight: 1.6 }}>
              Don't wait in uncertainty. Get expert legal advice from JanNyay's top advocates <strong style={{ color: '#fff' }}>within 24 hours</strong>.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }} className="cta-buttons">
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '18px 40px', borderRadius: '16px', textDecoration: 'none',
                background: '#fff', color: '#c0392b', fontWeight: '800', fontSize: '1.05rem',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
              >
                ⚖️ Book Free Consultation
              </Link>
              <a href="tel:+911800000000" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                padding: '18px 40px', borderRadius: '16px', textDecoration: 'none',
                background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.3)',
                color: '#fff', fontWeight: '700', fontSize: '1.05rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                📞 1800-000-0000 <span style={{ opacity: 0.8, fontSize: '0.9rem', fontWeight: '500' }}>(Toll Free)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── Responsive CSS ── */}
      <style>{`
        /* Base styles for Why section cards */
        .why-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .why-card { margin-top: 0; }
        .why-card:nth-child(even) { margin-top: 20px; }

        /* Steps section base styles */
        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .step-col { text-align: center; }
        .step-col:hover { transform: translateY(-8px); border-color: rgba(0,0,0,0.05) !important; box-shadow: 0 16px 32px rgba(0,0,0,0.03); }

        @media (max-width: 1024px) {
          .stats-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 16px; }
          .steps-line { display: none !important; }
          .testimonial-card { width: 300px !important; padding: 28px !important; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-card-wrap { display: none !important; }
          .stats-cards-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; gap: 16px !important; }
          .why-card:nth-child(even) { margin-top: 0 !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .services-cta-strip { flex-direction: column !important; text-align: center !important; padding: 32px !important; }
          .testimonial-card { width: 280px !important; padding: 24px !important; }
        }
        @media (max-width: 600px) {
          .stats-cards-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .stat-card { align-items: center !important; text-align: center !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .testimonial-card { width: 260px !important; padding: 20px !important; }
          .steps-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .steps-container { margin: 0 -24px !important; padding: 40px 20px !important; border-radius: 0 !important; border-left: none !important; border-right: none !important; box-shadow: none !important; }
          .cta-banner-container { padding: 40px 20px !important; border-radius: 20px !important; }
          .cta-buttons { flex-direction: column !important; gap: 12px !important; }
          .cta-buttons > * { width: 100% !important; padding: 16px !important; justify-content: center !important; }
          .services-cta-strip { padding: 24px !important; }
              }
        * { -webkit-font-smoothing: antialiased; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
