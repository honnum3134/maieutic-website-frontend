import React from 'react';
import { Helmet } from 'react-helmet';

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `These Terms of Use ("Terms") govern your access to and use of www.maieuticedutech.com (the "Website"), operated by Maieutic Edutech Private Limited ("Maieutic Edutech", "we", "us", or "our"). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.`,
  },
  {
    title: '2. Use of the Website',
    body: `The Website provides information about our digital learning, online programme support, and e-learning content services, and allows you to submit enquiries and applications. You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of the Website by, any third party.`,
  },
  {
    title: '3. Intellectual Property',
    body: `All content on the Website — including text, graphics, logos, images, videos, page designs, and software — is the property of Maieutic Edutech Private Limited or its licensors and is protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.`,
  },
  {
    title: '4. Accuracy of Information',
    body: `We make reasonable efforts to keep the information on the Website accurate and up to date, including details of programmes, services, and partner institutions. However, the content is provided for general information only and may change without notice. Programme details, eligibility, fees, and admission requirements are governed by the respective partner university's official communications and policies.`,
  },
  {
    title: '5. Enquiries & Applications',
    body: `Submitting an enquiry or application through the Website does not by itself constitute admission to any programme or the formation of any service contract. All admissions are subject to the applicable university's admission processes, and all service engagements are subject to separate written agreements.`,
  },
  {
    title: '6. Disclaimer of Warranties',
    body: `The Website is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, regarding the Website, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.`,
  },
  {
    title: '7. Limitation of Liability',
    body: `To the fullest extent permitted by law, Maieutic Edutech Private Limited shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of, or inability to use, the Website or its content.`,
  },
  {
    title: '8. Third-Party Links',
    body: `The Website may contain links to third-party websites, including partner universities and social media platforms. These links are provided for convenience only; we do not endorse and are not responsible for the content, policies, or practices of any third-party website.`,
  },
  {
    title: '9. Privacy',
    body: `Your use of the Website is also governed by our Privacy Policy, which describes how we collect and use your personal information. Please review it at maieuticedutech.com/privacy-policy.`,
  },
  {
    title: '10. Governing Law & Jurisdiction',
    body: `These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of the courts at Bengaluru, Karnataka.`,
  },
  {
    title: '11. Changes to These Terms',
    body: `We may revise these Terms at any time by updating this page. Continued use of the Website after changes are posted constitutes acceptance of the revised Terms.`,
  },
  {
    title: '12. Contact Us',
    body: `For questions about these Terms, contact: Maieutic Edutech Private Limited, 248/1, 3rd Floor, Kenchena Halli Road, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098, India. Email: info@maieuticedutech.com. Phone: +91 96637 27955.`,
  },
];

const TermsOfUsePage = () => (
  <>
    <Helmet>
      <title>Terms of Use | Maieutic Edutech Private Limited</title>
      <meta name="description" content="The terms and conditions governing your use of the Maieutic Edutech Private Limited website and services." />
      <link rel="canonical" href="https://maieuticedutech.com/terms-of-use" />
    </Helmet>

    <div style={{ paddingTop: '116px' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
        padding: '56px 24px 60px',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '700', color: '#ffffff', marginBottom: '10px' }}>
            Terms of Use
          </h1>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            Effective date: 29 July 2026
          </p>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: '56px 24px 72px', maxWidth: '860px', margin: '0 auto' }}>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: '700', color: '#00615c', marginBottom: '10px' }}>
              {s.title}
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#374151', lineHeight: 1.85, margin: 0 }}>
              {s.body}
            </p>
          </div>
        ))}
      </section>
    </div>
  </>
);

export default TermsOfUsePage;
