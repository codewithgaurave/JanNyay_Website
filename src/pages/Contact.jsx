import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '50vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #14532d 100%)',
        paddingTop: '100px',
      }}>
        <div style={{
          position: 'absolute', top: '10%', right: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,26,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '80px 24px',
          width: '100%', textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,107,26,0.15)', border: '1px solid rgba(255,107,26,0.3)',
            borderRadius: '99px', padding: '8px 20px', marginBottom: '24px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF6B1A', display: 'inline-block' }} />
            <span style={{ color: '#FF6B1A', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Contact Us
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
            Get in Touch for{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>
              Legal Help
            </span>
          </h1>
          <p style={{
            fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7,
            maxWidth: '600px', margin: '0 auto 30px',
          }}>
            Our expert legal team is ready to assist you 24/7
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+911800000000" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '14px', textDecoration: 'none',
              background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
              color: '#fff', fontWeight: '700', fontSize: '1rem',
              boxShadow: '0 8px 30px rgba(255,107,26,0.4)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
            >
              📞 8400984678
            </a>
            <a href="mailto:jannyay.office@gmail.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 28px', borderRadius: '14px', textDecoration: 'none',
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', fontWeight: '600', fontSize: '1rem',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Why Contact Us Section */}
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc, #fff)',
            padding: '60px 40px',
            borderRadius: '20px',
            marginBottom: '60px',
            border: '1px solid #e2e8f0',
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#0f172a', marginBottom: '24px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              Why Choose JanNyay?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="why-contact-grid">
              {[
                {
                  icon: '⚖️',
                  title: 'Expert Legal Team',
                  desc: 'Our advocates are registered with Bar Council of India and have extensive experience in Supreme Court, High Courts, and District Courts across India.',
                },
                {
                  icon: '🔒',
                  title: 'Confidential & Secure',
                  desc: 'All communications are protected by attorney-client privilege. Your case details and personal information remain completely confidential.',
                },
                {
                  icon: '⏱️',
                  title: '24/7 Availability',
                  desc: 'Legal emergencies don\'t wait. Our team is available round the clock for urgent matters including bail applications and injunctions.',
                },
                {
                  icon: '💰',
                  title: 'Transparent Pricing',
                  desc: 'No hidden fees. First consultation is absolutely free. Clear fee structure discussed upfront before any legal engagement.',
                },
                {
                  icon: '🏛️',
                  title: 'All Courts Coverage',
                  desc: 'We represent clients in all Indian courts including Supreme Court, High Courts, District Courts, Tribunals, and Consumer Forums.',
                },
                {
                  icon: '🌟',
                  title: '98% Success Rate',
                  desc: 'With over 5000+ cases won and 15+ years of experience, we have established a proven track record of delivering justice.',
                },
              ].map((item, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services We Offer */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#0f172a', marginBottom: '24px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              Legal Services We Provide
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="services-list-grid">
              {[
                'Criminal Defense - IPC Cases, Bail Applications, Trial Proceedings',
                'Civil Litigation - Property Disputes, Contract Enforcement, Injunctions',
                'Family Law - Divorce, Child Custody, Alimony, Matrimonial Disputes',
                'Corporate Law - Company Registration, Contracts, Compliance, M&A',
                'Property & Real Estate - Title Verification, RERA Disputes, Documentation',
                'Consumer Court - Defective Products, Deficient Services, Compensation',
                'Labour & Employment - Wrongful Termination, Workplace Disputes',
                'Intellectual Property - Trademark, Copyright, Patent Registration',
              ].map((service, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '16px',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                }}>
                  <span style={{ color: '#FF6B1A', fontSize: '1.2rem', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '0.95rem', color: '#475569', fontWeight: '600' }}>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #e11d48, #be123c)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '60px',
            textAlign: 'center',
            boxShadow: '0 12px 40px rgba(225,29,72,0.3)',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚨</div>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: '900', marginBottom: '12px' }}>Legal Emergency?</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '24px' }}>
              For urgent bail applications, injunctions, or immediate legal assistance
            </p>
            <a href="tel:+911800000000" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              borderRadius: '14px',
              textDecoration: 'none',
              background: '#fff',
              color: '#e11d48',
              fontWeight: '800',
              fontSize: '1.15rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              📞 Call Now - 8400984678
            </a>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', marginTop: '16px' }}>
              Available 24/7 • Response within 2 hours
            </p>
          </div>

          {/* Testimonials */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#0f172a', marginBottom: '24px', textAlign: 'center', fontFamily: "'Georgia', serif" }}>
              What Our Clients Say
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="testimonials-grid">
              {[
                {
                  name: 'Ramesh Kumar',
                  location: 'New Delhi',
                  text: 'JanNyay helped me win my property dispute case in just 6 months. Professional and dedicated team!',
                  rating: 5,
                },
                {
                  name: 'Priya Sharma',
                  location: 'Mumbai',
                  text: 'Got full custody of my children with their expert family law guidance. Forever grateful!',
                  rating: 5,
                },
                {
                  name: 'Anil Mehta',
                  location: 'Bangalore',
                  text: 'Best legal service for corporate matters. They handled our M&A transaction perfectly.',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '28px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#fbbf24', fontSize: '1.1rem' }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '2px solid #e2e8f0' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: '800',
                      fontSize: '1rem',
                    }}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', color: '#0f172a', fontSize: '0.95rem' }}>{testimonial.name}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem' }}>📍 {testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '60px' }} className="contact-grid">

            {/* Contact Info Cards */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#0f172a', marginBottom: '16px', fontFamily: "'Georgia', serif" }}>
                Reach Out to Us
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7, marginBottom: '32px' }}>
                JanNyay is India's premier legal services platform connecting you with experienced advocates across all courts. Whether you need consultation for criminal cases, civil disputes, family matters, or corporate legal issues, our expert lawyers are here to guide you through the Indian legal system. We provide transparent, affordable, and professional legal representation with a commitment to justice for all.
              </p>

              {[
                { icon: '📞', title: 'Phone', value: '8400984678 ', link: 'tel:+911800000000' },
                { icon: '📧', title: 'Email', value: 'jannyay.office@gmail.com', link: 'mailto:jannyay.office@gmail.com' },
                { icon: '📍', title: 'Address', value: 'Connaught Place, New Delhi, India - 110001', link: null },
                { icon: '⏰', title: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 8:00 PM', link: null },
              ].map((item, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '20px',
                  borderRadius: '16px',
                  marginBottom: '16px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#FF6B1A'; e.currentTarget.style.background = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#f8fafc'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '1.5rem' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600', marginBottom: '4px' }}>{item.title}</div>
                      {item.link ? (
                        <a href={item.link} style={{ fontSize: '1rem', color: '#0f172a', fontWeight: '700', textDecoration: 'none' }}>
                          {item.value}
                        </a>
                      ) : (
                        <div style={{ fontSize: '1rem', color: '#0f172a', fontWeight: '700' }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Media */}
              <div style={{ marginTop: '32px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '16px' }}>Follow Us</h3>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[
                    { name: 'Facebook', icon: 'f', color: '#1877f2', link: '#' },
                    { name: 'Twitter', icon: '𝕏', color: '#1da1f2', link: '#' },
                    { name: 'LinkedIn', icon: 'in', color: '#0a66c2', link: '#' },
                    { name: 'Instagram', icon: '📷', color: '#e4405f', link: '#' },
                    { name: 'WhatsApp', icon: '💬', color: '#25d366', link: '#' },
                  ].map((social) => (
                    <a key={social.name} href={social.link} style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: `${social.color}15`,
                      border: `2px solid ${social.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: '800',
                      color: social.color,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = social.color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${social.color}15`; e.currentTarget.style.color = social.color; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc, #fff)',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '24px' }}>Send Us a Message</h3>
              <form>
                {[
                  { label: 'Your Name', type: 'text', placeholder: 'Ramesh Kumar' },
                  { label: 'Email Address', type: 'email', placeholder: 'ramesh@example.com' },
                  { label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
                  { label: 'Legal Issue Type', type: 'select', options: ['Criminal', 'Civil', 'Family', 'Corporate', 'Property', 'Consumer'] },
                ].map((field, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border 0.2s',
                      }}>
                        <option>Select an option</option>
                        {field.options.map(opt => <option key={opt}>{opt}</option>)}
                      </select>
                    ) : (
                      <input type={field.type} placeholder={field.placeholder} style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border 0.2s',
                        boxSizing: 'border-box',
                      }} />
                    )}
                  </div>
                ))}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>
                    Your Message
                  </label>
                  <textarea placeholder="Describe your legal issue..." rows="4" style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }} />
                </div>
                <button type="submit" style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(255,107,26,0.4)',
                  transition: 'transform 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  ⚖️ Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9746146598793!2d77.21787931508076!3d28.631447982422894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d9e0d7b%3A0x7e2f8c5c8c8c8c8c!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 480px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-contact-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .services-list-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .locations-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-contact-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .services-list-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .locations-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-contact-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .services-list-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .locations-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .why-contact-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .locations-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
