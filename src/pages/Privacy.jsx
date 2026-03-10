import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Privacy() {
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
              Your Privacy Matters
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
            Privacy{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>
              Policy
            </span>
          </h1>
          <p style={{
            fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7,
            maxWidth: '600px', margin: '0 auto 20px',
          }}>
            Your trust is our foundation. Learn how we protect your legal information.
          </p>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Last Updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Introduction Card */}
          <div style={{
            background: 'linear-gradient(135deg, #fff9f6, #f0fff4)',
            borderRadius: '24px',
            padding: '50px',
            marginBottom: '60px',
            border: '2px solid rgba(255,107,26,0.1)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            textAlign: 'center',
          }} className="commitment-card">
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '20px' }}>🔒</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#111827', marginBottom: '20px' }}>Our Commitment to You</h2>
            <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.8, margin: 0 }}>
              At <strong>JanNyay</strong>, we understand that legal matters are deeply personal and confidential. 
              As India's trusted legal services platform connecting citizens with expert lawyers and courts, 
              we are committed to protecting your privacy with the highest standards of data security and confidentiality.
            </p>
          </div>

          {/* Privacy Sections - 2 Column Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '32px',
            marginBottom: '60px',
          }} className="privacy-grid">
          {[
            {
              icon: '📋',
              title: '1. Information We Collect',
              content: [
                { heading: 'Personal Information', text: 'Name, phone number, email address, postal address, and identification documents (Aadhaar, PAN) when you register or consult with our lawyers.' },
                { heading: 'Legal Case Information', text: 'Details about your legal matters, case documents, court proceedings, and communication with advocates to provide effective legal representation.' },
                { heading: 'Payment Information', text: 'Billing details and transaction records for legal services rendered by our network of lawyers.' },
                { heading: 'Technical Data', text: 'IP address, browser type, device information, and usage patterns to improve our platform and ensure security.' },
              ]
            },
            {
              icon: '⚖️',
              title: '2. How We Use Your Information',
              content: [
                { heading: 'Legal Services Delivery', text: 'To connect you with qualified lawyers, facilitate consultations, and provide legal representation in courts across India.' },
                { heading: 'Case Management', text: 'To manage your legal cases, prepare documents, file petitions, and represent you in Supreme Court, High Courts, District Courts, and Tribunals.' },
                { heading: 'Communication', text: 'To send case updates, court hearing dates, legal notices, and important information related to your matters.' },
                { heading: 'Service Improvement', text: 'To analyze usage patterns and improve our legal services platform for better client experience.' },
              ]
            },
            {
              icon: '🛡️',
              title: '3. Attorney-Client Privilege',
              content: [
                { heading: 'Confidentiality Protection', text: 'All communications between you and our lawyers are protected under Section 126 of the Indian Evidence Act, 1872, ensuring attorney-client privilege.' },
                { heading: 'Professional Ethics', text: 'Our lawyers are bound by the Bar Council of India Rules and professional ethics to maintain strict confidentiality of client information.' },
                { heading: 'Court Proceedings', text: 'Information shared during legal consultations and case preparation remains confidential unless required to be disclosed in court proceedings.' },
              ]
            },
            {
              icon: '🔐',
              title: '4. Data Security Measures',
              content: [
                { heading: 'Encryption', text: 'All sensitive data is encrypted using industry-standard SSL/TLS protocols during transmission and AES-256 encryption at rest.' },
                { heading: 'Access Control', text: 'Only authorized lawyers and staff handling your case have access to your information on a need-to-know basis.' },
                { heading: 'Secure Storage', text: 'Legal documents and case files are stored in secure, ISO-certified data centers with regular security audits.' },
                { heading: 'Regular Monitoring', text: 'Continuous monitoring for unauthorized access attempts and security threats to protect your data.' },
              ]
            },
            {
              icon: '👥',
              title: '5. Information Sharing',
              content: [
                { heading: 'With Your Lawyer', text: 'Your information is shared with the assigned advocate(s) handling your case to provide effective legal representation.' },
                { heading: 'Court Submissions', text: 'Necessary information is submitted to courts, tribunals, and legal authorities as required for your case proceedings.' },
                { heading: 'Legal Compliance', text: 'We may disclose information when required by law, court orders, or government authorities under Indian legal framework.' },
                { heading: 'No Third-Party Marketing', text: 'We never sell, rent, or share your personal information with third parties for marketing purposes.' },
              ]
            },
            {
              icon: '📱',
              title: '6. Your Rights',
              content: [
                { heading: 'Access & Correction', text: 'You have the right to access, review, and correct your personal information stored in our system.' },
                { heading: 'Data Portability', text: 'Request a copy of your case documents and personal data in a structured, commonly used format.' },
                { heading: 'Deletion Request', text: 'Request deletion of your data after case closure, subject to legal record-keeping requirements.' },
                { heading: 'Opt-Out', text: 'Unsubscribe from promotional communications while continuing to receive essential case-related updates.' },
              ]
            },
            {
              icon: '⏱️',
              title: '7. Data Retention',
              content: [
                { heading: 'Active Cases', text: 'Information is retained throughout the duration of your legal case and representation.' },
                { heading: 'Closed Cases', text: 'Case files are maintained for 7 years after case closure as per Bar Council guidelines and legal requirements.' },
                { heading: 'Financial Records', text: 'Payment and billing information is retained as per Indian tax and accounting regulations.' },
              ]
            },
            {
              icon: '🍪',
              title: '8. Cookies & Tracking',
              content: [
                { heading: 'Essential Cookies', text: 'Used for platform functionality, user authentication, and security features.' },
                { heading: 'Analytics Cookies', text: 'Help us understand how users interact with our platform to improve services.' },
                { heading: 'Cookie Control', text: 'You can manage cookie preferences through your browser settings, though some features may be limited.' },
              ]
            },
          ].map((section, idx) => (
            <div key={idx} style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '36px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,107,26,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{section.icon}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', margin: 0, lineHeight: 1.3 }}>
                  {section.title}
                </h3>
              </div>
              {section.content.map((item, i) => (
                <div key={i} style={{ marginBottom: '20px', paddingLeft: '0' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', color: '#FF6B1A', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>•</span> {item.heading}
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: '#4b5563', lineHeight: 1.8, margin: 0, paddingLeft: '24px' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
          </div>

          {/* Legal Compliance Section */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
            borderRadius: '24px',
            padding: '50px',
            marginBottom: '60px',
            color: '#fff',
            boxShadow: '0 20px 60px rgba(15,23,42,0.3)',
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '32px', color: '#fff', textAlign: 'center' }}>
              🏛️ Legal Compliance Framework
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="compliance-grid">
              {[
                'Information Technology Act, 2000 and IT Rules, 2011',
                'Indian Evidence Act, 1872 (Section 126 - Attorney-Client Privilege)',
                'Bar Council of India Rules on Professional Ethics',
                'Personal Data Protection Bill (PDPB) compliance ready',
                'Supreme Court guidelines on data privacy and confidentiality',
              ].map((law, i) => (
                <div key={i} style={{ 
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  <span style={{ color: '#22c55e', fontSize: '1.4rem', flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#e2e8f0', fontSize: '0.98rem', lineHeight: 1.6, fontWeight: '500' }}>{law}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div style={{
            background: 'linear-gradient(135deg, #fff9f6, #f0fff4)',
            borderRadius: '24px',
            padding: '50px',
            border: '2px solid rgba(255,107,26,0.15)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '900', color: '#111827', marginBottom: '20px', textAlign: 'center' }}>
              📞 Privacy Questions? We're Here to Help
            </h3>
            <p style={{ fontSize: '1rem', color: '#374151', lineHeight: 1.7, marginBottom: '36px', textAlign: 'center' }}>
              If you have any questions about this Privacy Policy, how we handle your data, or wish to exercise your privacy rights, 
              please contact our Data Protection Officer:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '36px' }} className="contact-info-grid">
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '12px',
                background: '#fff',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '2.5rem' }}>📧</span>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '600', color: '#6b7280', fontSize: '0.85rem', marginBottom: '4px' }}>Email</div>
                  <div style={{ fontWeight: '700', color: '#111827', fontSize: '1.05rem' }}>privacy@jannyay.in</div>
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '12px',
                background: '#fff',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '2.5rem' }}>📞</span>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '600', color: '#6b7280', fontSize: '0.85rem', marginBottom: '4px' }}>Phone (Toll Free)</div>
                  <div style={{ fontWeight: '700', color: '#111827', fontSize: '1.05rem' }}>1800-000-0000</div>
                </div>
              </div>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '12px',
                background: '#fff',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '2.5rem' }}>📍</span>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '600', color: '#6b7280', fontSize: '0.85rem', marginBottom: '4px' }}>Address</div>
                  <div style={{ fontWeight: '700', color: '#111827', fontSize: '1.05rem' }}>New Delhi, India</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '12px', textDecoration: 'none',
                background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
                color: '#fff', fontWeight: '700', fontSize: '0.95rem',
                boxShadow: '0 4px 16px rgba(255,107,26,0.3)',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                💬 Contact Us
              </Link>
              <a href="tel:+911800000000" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '12px', textDecoration: 'none',
                background: '#fff', border: '2px solid #FF6B1A',
                color: '#FF6B1A', fontWeight: '700', fontSize: '0.95rem',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Policy Updates Notice */}
          <div style={{
            marginTop: '40px',
            padding: '24px',
            background: '#fef3c7',
            borderLeft: '4px solid #f59e0b',
            borderRadius: '8px',
          }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.5rem' }}>⚠️</span>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#92400e', marginBottom: '8px' }}>
                  Policy Updates
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#78350f', lineHeight: 1.6, margin: 0 }}>
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                  We will notify you of significant changes via email or prominent notice on our platform. 
                  Continued use of JanNyay services after updates constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ background: '#f9fafb', padding: '60px 24px' }}>
        <div style={{
          maxWidth: '800px', margin: '0 auto', textAlign: 'center',
          background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
          borderRadius: '24px', padding: '48px 32px',
          boxShadow: '0 20px 50px rgba(255,107,26,0.25)',
        }}>
          <span style={{ fontSize: '3rem', marginBottom: '16px', display: 'block' }}>⚖️</span>
          <h2 style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', marginBottom: '16px' }}>
            Your Privacy is Protected
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', marginBottom: '32px', lineHeight: 1.7 }}>
            Trust JanNyay with your legal matters. We safeguard your information with the same dedication 
            we bring to fighting for your justice in court.
          </p>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '16px 32px', borderRadius: '12px', textDecoration: 'none',
            background: '#fff', color: '#c0392b', fontWeight: '800', fontSize: '1rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            🏠 Back to Home
          </Link>
        </div>
      </section>

      <Footer />

      {/* Responsive CSS */}
      <style>{`
        .privacy-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .privacy-grid {
            grid-template-columns: 1fr !important;
            gap: 24px;
          }
          .compliance-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
          .privacy-grid > div {
            padding: 28px 20px !important;
          }
        }
        @media (max-width: 600px) {
          .commitment-card {
            padding: 32px 16px !important;
          }
          .privacy-grid > div {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
