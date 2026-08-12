import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const solutions = [
    { label: 'All Solutions',                   to: '/solutions'                                   },
    { label: 'Content Design & Development',    to: '/solutions/content-design-development'        },
    { label: 'Marketing, Digital Products & Network', to: '/solutions/marketing-digital-products'  },
    { label: 'Academic Delivery',               to: '/solutions/academic-delivery-student-success' },
    { label: 'LMS Deployment & Management',     to: '/solutions/lms-deployment-management'         },
    { label: 'Interactive Models & Articulate', to: '/solutions/interactive-models-articulate'     },
    { label: 'Video Based Learning',            to: '/solutions/video-based-learning'              },
    { label: '2D / 3D / Motion Graphics',       to: '/solutions/2d-3d-motion-graphics'             },
  ];

  const company = [
    { label: 'Who We Are',  to: '/about-us' },
    { label: 'Our Vision',  to: '/about-us' },
    { label: 'Our Mission', to: '/about-us' },
    { label: 'Our Impact',  to: '/about-us' },
    { label: 'Our Clients', to: '/clients'  },
    { label: 'Careers',     to: '/careers'  },
    { label: 'Gallery',     to: '/gallery'  },
  ];

  const resources = [
    { label: 'Blogs & Insights', to: '/resources/blogs-insights' },
    { label: 'Case Studies',     to: '/resources/case-studies'   },
    { label: 'FAQs',             to: '/faqs'                     },
  ];

  const contact = [
    { label: 'Send Us a Message', to: '/contact' },
    { label: 'Email Us',          to: '/contact' },
    { label: 'Call Us',           to: '/contact' },
    { label: 'Our Location',      to: '/contact' },
  ];

  const socials = [
    { href: 'https://in.linkedin.com/company/maieuticedutech',   icon: <Linkedin size={17} />,  label: 'LinkedIn'  },
    { href: 'https://www.youtube.com/@maieuticedutech2018',       icon: <Youtube size={17} />,   label: 'YouTube'   },
    { href: 'https://www.instagram.com/maieutic2018',             icon: <Instagram size={17} />, label: 'Instagram' },
    { href: 'https://www.facebook.com/maieuticedutech',           icon: <Facebook size={17} />,  label: 'Facebook'  },
  ];

  const NavLink = ({ to, label }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <li>
        <Link to={to}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '13px',
            color: hovered ? '#ffffff' : 'rgba(255,255,255,0.65)',
            textDecoration: 'none', display: 'block',
            transition: 'color 0.2s',
          }}>
          {label}
        </Link>
      </li>
    );
  };

  const ColHeading = ({ children }) => (
    <h3 style={{
      fontFamily: 'Poppins, sans-serif', fontWeight: '700',
      fontSize: '11px', letterSpacing: '0.14em',
      color: '#FEF1DE', marginBottom: '20px',
      textTransform: 'uppercase',
    }}>
      {children}
    </h3>
  );

  return (
    <footer style={{ backgroundColor: '#001a18', fontFamily: 'Poppins, sans-serif' }}>

      {/* ── MAIN FOOTER BODY ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px 48px' }}>

        {/* Fix 1 — grid collapses gracefully on tablet and mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}>

          {/* Col 1 — Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/">
              <img
                alt="Maieutic Edutech Logo"
                loading="lazy"
                decoding="async"
                src="https://horizons-cdn.hostinger.com/aa5507df-b813-420f-b8e9-f20766fbbb05/b651c69db8b092eacefc2d21626e8d12.png"
                style={{ height: '52px', width: 'auto', objectFit: 'contain', marginBottom: '20px', display: 'block' }}
              />
            </Link>

            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '24px' }}>
              Empowering education through innovation and technology — from content to campus, online.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'all 0.2s', flexShrink: 0 }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#00615c'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#00615c'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'; }}>
                  {icon}
                </a>
              ))}
            </div>

            {/* Address */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '10px' }}>
                Address
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: '1.9', marginBottom: '16px' }}>
                248/1, 3rd floor, Above 154 Breakfast Restaurant<br />
                Kenchena Halli Road, 2nd Main Rd,<br />
                Halagevadera Halli, Rajarajeshwari Nagar,<br />
                Bengaluru, Karnataka 560098
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="mailto:careers@maieuticedutech.com"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                  <Mail size={13} style={{ flexShrink: 0, color: '#00615c' }} />
                  careers@maieuticedutech.com
                </a>
                <a href="tel:+919663727955"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                  <Phone size={13} style={{ flexShrink: 0, color: '#00615c' }} />
                  +91 96637 27955
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 — Solutions */}
          <div style={{ minWidth: '140px' }}>
            <ColHeading>Solutions</ColHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {solutions.map(l => <NavLink key={l.label} {...l} />)}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div style={{ minWidth: '140px' }}>
            <ColHeading>Company</ColHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {company.map(l => <NavLink key={l.label} {...l} />)}
            </ul>
          </div>

          {/* Col 4 — Resources + Contact */}
          <div style={{ minWidth: '140px' }}>
            <ColHeading>Resources</ColHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {resources.map(l => <NavLink key={l.label} {...l} />)}
            </ul>

            <ColHeading>Contact Us</ColHeading>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contact.map(l => <NavLink key={l.label} {...l} />)}
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR — Fix 2: flexWrap so it stacks on mobile ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © 2026 Maieutic Edutech Pvt Ltd — All Rights Reserved
          </p>
          {/* Privacy Policy / Terms of Use links removed 2026-07 — the drafted
              pages (src/pages/legal/) are unpublished until the text gets a
              legal review. Restore the links + routes together when ready. */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;