import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
const fontStyle = { fontFamily: "'Poppins', sans-serif" };

  const footerSections = [
    {
      title: 'Education',
      links: [
        { label: 'Online Program Management', to: '/education' },
        { label: 'Content Development',       to: '/education' },
        { label: 'LMS Deployment',            to: '/education' },
        { label: 'Academic Delivery',         to: '/education' },
        { label: 'Marketing & Outreach',      to: '/education' },
      ]
    },
    {
      title: 'Enterprise',
      links: [
        { label: 'Interactive Modules',      to: '/enterprise' },
        { label: 'Explainer Videos',         to: '/enterprise' },
        { label: 'Product / Process Videos', to: '/enterprise' },
        { label: 'Scenario-Based Videos',    to: '/enterprise' },
        { label: 'Training & Psychometric',  to: '/enterprise' },
      ]
    },
    {
      title: 'Careers',
      links: [
        { label: 'Life at Maieutic', to: '/careers' },
        { label: 'Why Join Us',      to: '/careers' },
        { label: 'Open Roles',       to: '/careers' },
        { label: 'Apply Now',        to: '/careers' },
      ]
    },
    {
      title: 'About Us',
      links: [
        { label: 'Who We Are',  to: '/whoweare' },
        { label: 'Our Vision',  to: '/whoweare' },
        { label: 'Our Mission', to: '/whoweare' },
        { label: 'Our Team',    to: '/team' },
      ]
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Send Us a Message', to: '/contact' },
        { label: 'Email Us',          to: '/contact' },
        { label: 'Call Us',           to: '/contact' },
        { label: 'Our Location',      to: '/contact' },
      ]
    },
  ];

  const headingStyle = {
    fontFamily: 'Arial Black, sans-serif',
    fontWeight: 700,
    fontSize: '14px',
    letterSpacing: '0.06em',
    color: '#ffffff',
    marginBottom: '18px',
    textTransform: 'uppercase',
  };

  const linkStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.78)',
    lineHeight: '1.6',
    display: 'block',
    textDecoration: 'none',
    transition: 'color 0.2s',
  };

  return (
    <footer className="bg-[#00615c] text-white" style={fontStyle}>

      {/* ── MAIN FOOTER ── */}
      <div className="container mx-auto px-6 pt-14 pb-10">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Col 1: Logo + tagline + address */}
         <div className="col-span-2 md:col-span-3 lg:col-span-1">
  <Link to="/">
    <img
      alt="Maieutic Edutech Logo"
                style={{ height: '56px', width: 'auto', objectFit: 'contain', marginBottom: '16px', display: 'block' }}
                src="https://horizons-cdn.hostinger.com/aa5507df-b813-420f-b8e9-f20766fbbb05/b651c69db8b092eacefc2d21626e8d12.png"
              />
            </Link>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.80)', lineHeight: '1.7', marginBottom: '20px', maxWidth: '200px', ...fontStyle }}>
              Empowering education through innovation and technology.
            </p>

            {/* Address below description */}
            <h3 style={{ ...headingStyle, marginBottom: '10px' }}>Address</h3>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.78)', lineHeight: '1.8', marginBottom: '16px', ...fontStyle }}>
              248/1, 3rd floor, Above 154 Breakfast Restaurant<br />
              Kenchena Halli Road, 2nd Main Rd,<br />
              Halagevadera Halli,<br />
              Rajarajeshwari Nagar,<br />
              Bengaluru, Karnataka 560098
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
               <a href="mailto:info@maieuticedutech.com"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.78)', textDecoration: 'none', ...fontStyle }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'}
              >
                <Mail size={15} style={{ flexShrink: 0 }} />
                info@maieuticedutech.com
              </a>
              
               <a href="tel:+919663727955"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.78)', textDecoration: 'none', ...fontStyle }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.78)'}
              >
                <Phone size={15} style={{ flexShrink: 0 }} />
                +91 96637 27955
              </a>
            </div>
          </div>

          {/* Cols 2–6: Nav sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 style={headingStyle}>{section.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      style={linkStyle}
                      onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.textDecoration = 'underline'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.78)'; e.currentTarget.style.textDecoration = 'none'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{
          marginTop: '40px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255,255,255,0.10)',
          textAlign: 'center',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.55)',
          ...fontStyle,
        }}>
          © 2025 Maieutic Edutech Pvt Ltd — All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;