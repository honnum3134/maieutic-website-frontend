import React from 'react';
import { Helmet } from 'react-helmet';

const sections = [
  {
    title: '1. Introduction',
    body: `Maieutic Edutech Private Limited ("Maieutic Edutech", "we", "us", or "our") is committed to protecting the privacy of visitors to www.maieuticedutech.com (the "Website"). This Privacy Policy explains what information we collect, how we use it, and the choices you have. It is published in accordance with the Information Technology Act, 2000, the rules made thereunder, and the Digital Personal Data Protection Act, 2023. By using the Website, you consent to the practices described in this policy.`,
  },
  {
    title: '2. Information We Collect',
    body: `We collect information you voluntarily provide when you fill in an enquiry, contact, application, or admission form — such as your name, email address, phone number, city, and the details of your enquiry. We also automatically collect limited technical information when you browse the Website, including your IP address, browser type, device information, pages visited, and time spent, through cookies and analytics tools.`,
  },
  {
    title: '3. How We Use Your Information',
    body: `We use the information we collect to respond to your enquiries and admission or service requests; to provide information about our programmes, services, and offerings; to improve the Website's content, performance, and user experience; to send you communications you have requested or consented to receive; and to comply with applicable legal obligations. We do not sell your personal information to third parties.`,
  },
  {
    title: '4. Cookies & Analytics',
    body: `The Website uses cookies and similar technologies, including Google Tag Manager and associated analytics services, to understand how visitors use the Website and to improve it. Cookies are small files stored on your device; they do not give us access to anything else on your device. You can control or delete cookies through your browser settings, though some features of the Website may not function fully without them.`,
  },
  {
    title: '5. Sharing of Information',
    body: `We may share your information with our university and institutional partners strictly for the purpose of processing the enquiry or application you submitted; with service providers who assist us in operating the Website and our services, under obligations of confidentiality; and with authorities where disclosure is required by law, regulation, or legal process.`,
  },
  {
    title: '6. Data Security',
    body: `We adopt reasonable security practices and procedures designed to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '7. Data Retention',
    body: `We retain personal information only for as long as it is needed for the purposes described in this policy, or as required by applicable law, after which it is deleted or anonymised.`,
  },
  {
    title: '8. Your Rights',
    body: `Subject to applicable law, you may request access to, correction of, or deletion of your personal information held by us, and you may withdraw consent for further processing. To exercise these rights, contact us using the details below. We will respond within a reasonable timeframe.`,
  },
  {
    title: '9. Third-Party Links',
    body: `The Website may contain links to third-party websites, including partner universities and social media platforms. We are not responsible for the privacy practices or content of those websites, and we encourage you to review their privacy policies.`,
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. The revised policy will be posted on this page with an updated effective date. Continued use of the Website after changes are posted constitutes acceptance of the revised policy.`,
  },
  {
    title: '11. Contact Us',
    body: `For questions, concerns, or grievances regarding this Privacy Policy or your personal information, contact: Maieutic Edutech Private Limited, 248/1, 3rd Floor, Kenchena Halli Road, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098, India. Email: info@maieuticedutech.com. Phone: +91 96637 27955.`,
  },
];

const PrivacyPolicyPage = () => (
  <>
    <Helmet>
      <title>Privacy Policy | Maieutic Edutech Private Limited</title>
      <meta name="description" content="How Maieutic Edutech Private Limited collects, uses, and protects your personal information when you use our website and services." />
      <link rel="canonical" href="https://maieuticedutech.com/privacy-policy" />
    </Helmet>

    <div style={{ paddingTop: '116px' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
        padding: '56px 24px 60px',
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '700', color: '#ffffff', marginBottom: '10px' }}>
            Privacy Policy
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

export default PrivacyPolicyPage;
