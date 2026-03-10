import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Terms() {
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
              Legal Terms
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
            Terms &{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FF6B1A 0%, #f59e0b 50%, #138808 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}>
              Conditions
            </span>
          </h1>
          <p style={{
            fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7,
            maxWidth: '600px', margin: '0 auto',
          }}>
            Please read these terms carefully before using our legal services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ background: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Last Updated */}
          <div style={{ 
            background: '#f8fafc', 
            padding: '16px 24px', 
            borderRadius: '12px', 
            marginBottom: '40px',
            borderLeft: '4px solid #FF6B1A',
          }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>

          {/* Terms Content */}
          {[
            {
              title: '1. Acceptance of Terms',
              content: 'By accessing and using JanNyay legal services platform, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all users, including lawyers, clients, and visitors.'
            },
            {
              title: '2. Legal Services',
              content: 'JanNyay connects clients with qualified advocates registered with the Bar Council of India. We provide a platform for legal consultation and representation across all Indian courts including Supreme Court, High Courts, District Courts, and Tribunals. All legal services are subject to Indian laws and court procedures.'
            },
            {
              title: '3. Lawyer-Client Relationship',
              content: 'The lawyer-client relationship is established directly between you and the advocate you choose through our platform. JanNyay acts as a facilitator and is not a party to this relationship. All legal advice, representation, and professional conduct are the responsibility of the individual lawyer.'
            },
            {
              title: '4. Eligibility and Registration',
              content: 'You must be at least 18 years old to use our services. By registering, you warrant that all information provided is accurate and complete. You are responsible for maintaining the security of your account credentials. Any activity under your account is your responsibility.'
            },
            {
              title: '5. Fees and Payment',
              content: 'Legal consultation fees and service charges are clearly communicated before engagement. The first consultation is free as advertised. Subsequent legal services are charged as per the advocate\'s fee structure. All payments are processed securely. Refund policies are subject to the nature of services rendered and applicable laws.'
            },
            {
              title: '6. Confidentiality and Privacy',
              content: 'All communications between you and your lawyer are protected by attorney-client privilege as per Indian law. JanNyay maintains strict confidentiality of all case details, personal information, and legal documents shared on our platform. We do not disclose any information without your explicit consent except as required by law or court orders.'
            },
            {
              title: '7. Professional Conduct',
              content: 'All lawyers on our platform are bound by the Bar Council of India Rules and professional ethics. They must maintain confidentiality, avoid conflicts of interest, and provide competent legal representation. Any violation of professional conduct should be reported immediately to our support team.'
            },
            {
              title: '8. Case Documentation',
              content: 'All legal documents, case files, and evidence shared through our platform are stored securely. You retain ownership of all documents provided. JanNyay may retain copies for record-keeping and quality assurance purposes. Documents will be handled in compliance with Indian Evidence Act and court requirements.'
            },
            {
              title: '9. Court Representation',
              content: 'Lawyers engaged through JanNyay are authorized to represent clients in all courts and tribunals across India. Representation includes filing petitions, attending hearings, arguing cases, and all related legal proceedings. The scope of representation will be clearly defined in the engagement agreement.'
            },
            {
              title: '10. User Responsibilities',
              content: 'You agree to provide accurate and complete information for legal consultation. You must cooperate with your lawyer and provide all necessary documents promptly. You are responsible for attending court hearings as required. You must not misuse the platform for any illegal activities or provide false information that may affect legal proceedings.'
            },
            {
              title: '11. Limitation of Liability',
              content: 'JanNyay provides a platform to connect clients with lawyers but does not guarantee specific legal outcomes. We are not liable for any decisions made by courts or legal consequences of cases. The platform is provided "as is" and we make no warranties regarding case results or legal advice provided by individual lawyers. Our liability is limited to the service fees paid.'
            },
            {
              title: '12. Cancellation and Refunds',
              content: 'Cancellation policies vary based on the stage of legal proceedings. Consultations can be rescheduled with 24 hours notice. Refunds for legal services are subject to work already performed and applicable laws. Court fees and government charges are non-refundable. Detailed refund policy is available on request.'
            },
            {
              title: '13. Intellectual Property',
              content: 'All content on JanNyay platform including logos, designs, text, and software is protected by intellectual property laws. You may not copy, reproduce, or distribute any content without written permission. Legal documents prepared by lawyers remain their intellectual property subject to your license to use them for your case.'
            },
            {
              title: '14. Dispute Resolution',
              content: 'Any disputes arising from the use of our services shall be resolved through arbitration in accordance with Indian Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English language in New Delhi. The jurisdiction for legal matters shall be the courts of New Delhi, India.'
            },
            {
              title: '15. Termination',
              content: 'We reserve the right to suspend or terminate your account for violation of these terms, fraudulent activity, or misuse of services. Upon termination, you remain liable for all outstanding fees. Your lawyer-client relationship and ongoing cases will be handled as per professional ethics and court requirements.'
            },
            {
              title: '16. Force Majeure',
              content: 'JanNyay shall not be liable for any failure to perform due to circumstances beyond our control including natural disasters, strikes, court closures, government actions, or technical failures. We will make reasonable efforts to resume services as soon as possible.'
            },
            {
              title: '17. Modifications',
              content: 'JanNyay reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. We will notify registered users of significant changes via email. Continued use of our services after modifications constitutes acceptance of the updated terms.'
            },
            {
              title: '18. Governing Law',
              content: 'These Terms and Conditions are governed by the laws of India. All legal services provided through our platform comply with the Advocates Act, 1961, Bar Council of India Rules, Indian Penal Code, Code of Civil Procedure, Code of Criminal Procedure, and other applicable Indian laws and regulations. Any interpretation of these terms shall be in accordance with Indian legal principles.'
            },
            {
              title: '19. Contact Information',
              content: 'For any questions regarding these Terms and Conditions, please contact us at help@jannyay.in or call our toll-free number 1800-000-0000. Our legal team is available 24/7 to address your concerns and provide clarification on any terms.'
            },
          ].map((section, index) => (
            <div key={index} style={{ marginBottom: '40px' }}>
              <h2 style={{
                fontSize: '1.4rem',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '16px',
                fontFamily: "'Georgia', serif",
              }}>
                {section.title}
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#475569',
                lineHeight: 1.8,
                marginBottom: '0',
              }}>
                {section.content}
              </p>
            </div>
          ))}

          {/* Contact CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center',
            marginTop: '60px',
          }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>
              Have Questions About Our Terms?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '24px' }}>
              Our legal team is here to help clarify any concerns
            </p>
            <Link to="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #FF6B1A, #e55a0e)',
              color: '#fff',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 8px 24px rgba(255,107,26,0.4)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              ⚖️ Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
