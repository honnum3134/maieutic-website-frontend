import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' }
  }),
};

const NotFoundPage = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Home',       to: '/',         primary: true  },
    { label: 'About Us',   to: '/about-us', primary: false },
    { label: 'Contact Us', to: '/contact',  primary: false },
  ];

  return (
    <>
      <Helmet>
        <title>Page Not Found | Maieutic Edutech</title>
        {/* The SPA server answers every URL with HTTP 200, so noindex is what
            keeps broken URLs out of Google instead of a real 404 status. */}
        <meta name="robots" content="noindex" />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>
        <section style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '72px 24px',
          backgroundColor: '#ffffff',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(5rem, 15vw, 9rem)', fontWeight: '700', color: '#00615c', lineHeight: 1, marginBottom: '16px' }}>
              404
            </motion.p>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
              Oops! This page isn't available
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.8, marginBottom: '36px' }}>
              The page you are looking for may have been moved, renamed, or no longer exists.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
              style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
              {buttons.map((b, i) => (
                <button key={i} onClick={() => navigate(b.to)}
                  style={{
                    fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600',
                    color: b.primary ? '#ffffff' : '#00615c',
                    backgroundColor: b.primary ? '#00615c' : '#ffffff',
                    border: '2px solid #00615c', borderRadius: '999px',
                    padding: '12px 32px', cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = b.primary ? '#004d49' : '#f0faf9'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = b.primary ? '#00615c' : '#ffffff'; }}>
                  {b.label}
                </button>
              ))}
            </motion.div>

            {/* Need assistance box */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
              style={{ backgroundColor: '#f8fafb', borderRadius: '14px', padding: '32px 36px', border: '1px solid #e5e7eb', display: 'inline-block', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Need assistance?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#374151' }}>
                <a href="tel:+919663727955" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00615c', textDecoration: 'none' }}>
                  <Phone size={15} /> +91 96637 27955
                </a>
                <a href="mailto:info@maieuticedutech.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00615c', textDecoration: 'none' }}>
                  <Mail size={15} /> info@maieuticedutech.com
                </a>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280' }}>
                  <MapPin size={15} /> Rajarajeshwari Nagar, Bengaluru, Karnataka
                </span>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default NotFoundPage;
