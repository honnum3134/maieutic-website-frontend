import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' }
  }),
};

const educationClients = [
  // ── Priority row — Maieutic's primary university partners ──
  { name: 'REVA University Online',                    logo: '/images/clients/education/Reva.png'                             },
  { name: 'P P Savani University Online',              logo: '/images/clients/education/PPSU.png'                     },
  { name: 'BML Munjal University',              logo: '/images/clients/education/BML.png'                             },
  { name: 'Jaipur National University',         logo: '/images/clients/education/JNU.png'                             },
  { name: 'BIMTECH Birla Institute',            logo: '/images/clients/education/BIM Tech.jpg'                        },
  { name: 'DSU Online', logo: '/images/clients/education/DSU.jpg'                                     },
  // ── Popular brands ──
  { name: 'Alliance University',                logo: '/images/clients/education/Alliance.webp'                        },
  { name: 'Symbiosis',                          logo: '/images/clients/education/Symbiosis.png'                        },
  { name: 'Emeritus',                           logo: '/images/clients/education/Eme.webp'                             },
  { name: 'Manipal / Unext',                    logo: '/images/clients/education/Manipal.webp'                         },
  { name: 'Amity / Univo Edutech',              logo: '/images/clients/education/Amity.webp'                           },
  { name: 'AISECT',                             logo: '/images/clients/education/AISECT.webp'                          },
  { name: 'SimpliLearn',                       logo: '/images/clients/education/Simpli L.webp'                        },
  { name: 'upGrad',                             logo: '/images/clients/education/upgrad.webp'                          },
  { name: 'Wiley',                              logo: '/images/clients/education/Wiley.webp'                           },
  { name: 'Pearson India Pvt Ltd',              logo: '/images/clients/education/Pearson.jpg'                         },
  { name: 'IEEE India Pvt Ltd',                 logo: '/images/clients/education/IEEE.webp'                            },
  // ── Remaining ──
  { name: 'Mysore University',                  logo: '/images/clients/education/Mysore U.webp'                        },
  { name: 'Avinashilingam University',          logo: '/images/clients/education/Avinashilingam.webp'                  },
  { name: 'Wadhwani India Pvt. Ltd',            logo: '/images/clients/education/Wadhwani-Foundation-Logo.webp'        },
  { name: 'National Entrepreneurship Network',  logo: '/images/clients/education/NEN.webp'                             },
  { name: 'NIMI',                               logo: '/images/clients/education/NIMI.webp'                            },
  { name: 'Aster Health Academy',               logo: '/images/clients/education/Aster.webp'                           },
  { name: 'Empower School of Health',           logo: '/images/clients/education/Empower.webp'                         },
  { name: 'Analytics Vidhya',                   logo: '/images/clients/education/Analytics.jpg'                       },
];

const corporateClients = [
  // ── Priority row ──
  { name: 'HDFC',                  logo: '/images/clients/corporate/Hdfc.webp'          },
  { name: 'Jade Global',           logo: '/images/clients/corporate/Jade.webp'          },
  { name: 'Strides Ltd',           logo: '/images/clients/corporate/Strides.webp'       },
  { name: 'HealthsMind',           logo: '/images/clients/corporate/Health minds.webp'  },
  { name: 'TE Connectivity',       logo: '/images/clients/corporate/TE.webp'            },

  // ── Popular brands ──
  { name: 'Saint Gobain',          logo: '/images/clients/corporate/Saint.webp'         },
  { name: 'Narayana Health',       logo: '/images/clients/corporate/Narayana.webp'      },
  { name: 'Intas Pharma',          logo: '/images/clients/corporate/Intas.webp'         },
  { name: 'Mazars',                logo: '/images/clients/corporate/Mazars.webp'        },
  { name: 'Wurth Elektronik',      logo: '/images/clients/corporate/Wurth.webp'         },

  // ── Remaining ──
  { name: 'Quodec Pvt Ltd',        logo: '/images/clients/corporate/Quodec.webp'        },
  { name: 'First Source',          logo: '/images/clients/corporate/First.webp'         },
  { name: 'Far Eye',               logo: '/images/clients/corporate/Far eye.webp'       },
  { name: 'Numocity',              logo: '/images/clients/corporate/Numocity.webp'      },
  { name: 'ArcoLabs',              logo: '/images/clients/corporate/Arcolab.webp'       },
  { name: 'Terumo India Pvt Ltd',  logo: '/images/clients/corporate/Terumo.webp'        },
  { name: 'Terumo Singapore',      logo: '/images/clients/corporate/Terumo.webp'        },
  { name: 'Glen Mark Pharma',      logo: '/images/clients/corporate/glenmark.webp'      },
  { name: 'Next Wealth',           logo: '/images/clients/corporate/Next wealth.webp'   },
  { name: 'Kreate Global',         logo: '/images/clients/corporate/Kreate.webp'        },
];

const getInitials = (name) => {
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const cardColors = [
  '#004d49','#800d07','#005f5a','#6b0f0b','#003d3a',
  '#5a0905','#00615c','#700d07','#004540','#8a1a07',
];

// ── Logo Card — shows real logo if available, initials if not ─────────────────
const ClientCard = ({ client, index, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const color = cardColors[index % cardColors.length];
  const showLogo = client.logo && !imgError;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index % 8}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(index)}
      style={{
        borderRadius: '16px',
        padding: '16px 12px 14px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: '#ffffff',
        border: `1px solid ${hovered ? '#d1e8e6' : '#e5e7eb'}`,
        boxShadow: hovered
          ? '0 20px 48px rgba(0,97,92,0.18), 0 4px 16px rgba(0,0,0,0.08)'
          : '0 2px 8px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-8px) scale(1.04)' : 'translateY(0) scale(1)',
        height: '180px',
      }}
    >
      {/* Logo area — 75% of card */}
        <div style={{
          width: '100%',
          height: '110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '10px',
          flexShrink: 0,
          padding: '8px 12px',
        }}>
        {showLogo ? (
          <img
            src={client.logo}
            alt={client.name}
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              transition: 'transform 0.3s ease',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
            }}
          />
        ) : (
          <div style={{
            width: '72px', height: '72px',
            borderRadius: '50%',
            backgroundColor: `${color}15`,
            border: `2px solid ${color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.4rem', fontWeight: '700',
              color: color,
            }}>
              {getInitials(client.name)}
            </span>
          </div>
        )}
      </div>

      {/* Text area — 25% of card */}
      <div style={{
        width: '100%',
        minHeight: '44px',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.72rem',
          fontWeight: '600',
          color: '#111827',
          margin: 0,
          lineHeight: 1.35,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
        }}>
          {client.name}
        </p>
      </div>
    </motion.div>
  );
};

function ClientsPage() {
  const [activeTab, setActiveTab] = useState('Education');
  const [lightbox, setLightbox]    = useState(null);

  const allClients = useMemo(() => [
    ...educationClients.map(c => ({ ...c, type: 'Education' })),
    ...corporateClients.map(c => ({ ...c, type: 'Corporate' })),
  ].sort(() => Math.random() - 0.5), []);

  const currentClients =
    activeTab === 'All'       ? allClients :
    activeTab === 'Education' ? educationClients.map(c => ({ ...c, type: 'Education' })) :
                                corporateClients.map(c => ({ ...c, type: 'Corporate' }));

  const prev = () => setLightbox(i => (i - 1 + currentClients.length) % currentClients.length);
  const next = () => setLightbox(i => (i + 1) % currentClients.length);

  const handleKey = useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === 'Escape')     { setLightbox(null); return; }
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  }, [lightbox, currentClients.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  useEffect(() => { setLightbox(null); }, [activeTab]);

  const activeClient = lightbox !== null ? currentClients[lightbox] : null;
  const color = activeClient ? cardColors[lightbox % cardColors.length] : '#00615c';

  return (
    <>
      <Helmet>
        <title>Our Clients | Maieutic Edutech</title>
        <meta name="description" content="See the education institutions and businesses Maieutic Edutech has partnered with to deliver e-learning content, instructional design, and corporate training solutions." />
        <link rel="canonical" href="https://maieuticedutech.com/clients" />
      </Helmet>

      <div style={{ paddingTop: 'clamp(96px, 10vw, 116px)', background: '#f8fafb', minHeight: '100vh', fontFamily: "'Poppins', sans-serif" }}>

        {/* HERO */}
        <div style={{
          background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
          padding: 'clamp(48px, 6vw, 80px) clamp(20px, 6vw, 80px)',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', color: '#FEF1DE', textTransform: 'uppercase', marginBottom: '14px' }}>
            Trusted By
          </motion.p>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 700, color: '#ffffff', marginBottom: '16px', lineHeight: 1.15 }}>
            Our Clients
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.78)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            From leading universities and ed-tech platforms to global enterprises - organisations that trust Maieutic to deliver learning that works.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
            style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', marginTop: '48px' }}>
            {[
              { value: '24', label: 'Education Clients' },
              { value: '20', label: 'Corporate Clients' },
              { value: '44+', label: 'Total Partners'   },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: '700', color: '#ffffff' }}>{s.value}</div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* TAB SWITCHER */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', padding: '40px 20px 32px' }}>
          {['Education', 'Corporate', 'All'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 36px',
                background: activeTab === tab ? '#00615c' : '#ffffff',
                color: activeTab === tab ? '#ffffff' : '#00615c',
                border: `2px solid ${activeTab === tab ? '#00615c' : '#d0e0df'}`,
                borderRadius: '999px',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px', fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}>
              {tab}
            </button>
          ))}
        </div>

        {/* SECTION LABEL */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 60px) 16px' }}>
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00615c', marginBottom: '8px' }}>
              {activeTab === 'All' ? 'All Clients' : `${activeTab} Clients`}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '700', color: '#111827', marginBottom: '32px', lineHeight: 1.2 }}>
              {activeTab === 'All'
                ? 'All Education & Corporate Partners'
                : activeTab === 'Education'
                ? 'Universities, Platforms & Ed-Tech Partners'
                : 'Corporate & Enterprise Partners'}
            </h2>
          </motion.div>
        </div>

        {/* CLIENT GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: '16px',
          padding: '0 clamp(16px, 4vw, 60px) 80px',
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'stretch',
        }}>
          {currentClients.map((client, i) => (
            <ClientCard key={`${client.name}-${i}`} client={client} index={i} onClick={setLightbox} />
          ))}
        </div>

        {/* LIGHTBOX */}
        {lightbox !== null && activeClient && (
          <div
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              backgroundColor: 'rgba(0,0,0,0.88)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(8px)',
            }}>

            {/* LEFT */}
            <button onClick={e => { e.stopPropagation(); prev(); }}
              style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '26px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', zIndex: 1001 }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}>
              ‹
            </button>

            {/* CARD */}
            <div onClick={e => e.stopPropagation()}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 56px', backgroundColor: '#ffffff', borderRadius: '24px', boxShadow: '0 32px 80px rgba(0,0,0,0.4)', minWidth: '300px', maxWidth: '440px', textAlign: 'center', borderTop: `6px solid ${color}` }}>

              {/* Logo or initials */}
              <div style={{ width: '200px', height: '130px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', backgroundColor: '#f0f7f6', borderRadius: '14px', padding: '16px' }}>
                {activeClient.logo ? (
                  <img src={activeClient.logo} alt={activeClient.name}
                    loading="lazy" decoding="async"
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={e => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: '700', color }}>
                    {getInitials(activeClient.name)}
                  </span>
                )}
              </div>

              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: '700', color: '#111827', marginBottom: '10px', lineHeight: 1.2 }}>
                {activeClient.name}
              </h2>

              <span style={{ display: 'inline-block', padding: '4px 16px', backgroundColor: `${color}15`, borderRadius: '999px', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '600', color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '24px' }}>
                {activeClient.type} Partner
              </span>

              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#9ca3af', margin: 0 }}>
                {lightbox + 1} of {currentClients.length}
              </p>
            </div>

            {/* RIGHT */}
            <button onClick={e => { e.stopPropagation(); next(); }}
              style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '26px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', zIndex: 1001 }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}>
              ›
            </button>

            {/* CLOSE */}
            <button onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }}>
              ✕
            </button>
          </div>
        )}

      </div>
    </>
  );
}

export default ClientsPage;