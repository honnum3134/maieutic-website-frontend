import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';

const categories = ['All', 'Clients', 'Events', 'Fests'];

const galleryItems = [
  { src: '/images/gallery1.jpg',  category: 'Clients', caption: 'MOU Signing — PPSU' },
  { src: '/images/gallery2.jpg',  category: 'Clients', caption: 'JNU Session' },
  { src: '/images/gallery3.jpg',  category: 'Clients', caption: 'The Northcap University' },
  { src: '/images/gallery4.jpg',  category: 'Clients', caption: 'Session at Jaipur National University' },
  { src: '/images/gallery5.jpg',  category: 'Clients', caption: 'Reva University Client Meet' },
  { src: '/images/gallery11.jpeg',  category: 'Clients', caption: 'IEEE Client Meet' },  
  { src: '/images/gallery6.jpg',  category: 'Events',  caption: 'Cricket Tournament' },
  { src: '/images/gallery7.jpg',  category: 'Fests',   caption: 'Inauguration' },
  { src: '/images/gallery8.jpg',  category: 'Fests',   caption: 'Annual Day — Trophy Ceremony' },
  { src: '/images/gallery9.jpg',  category: 'Clients', caption: 'PPSU' },
  { src: '/images/gallery10.jpg', category: 'Clients', caption: 'Client Visit' },
];

function Gallery() {
  const [active, setActive]         = useState('All');
  const [lightbox, setLightbox]     = useState(null); // index into filtered array

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === active);

  // Close on Escape, navigate with arrow keys
  const handleKey = useCallback((e) => {
    if (lightbox === null) return;
    if (e.key === 'Escape')      { setLightbox(null); return; }
    if (e.key === 'ArrowLeft')   { setLightbox(i => (i - 1 + filtered.length) % filtered.length); }
    if (e.key === 'ArrowRight')  { setLightbox(i => (i + 1) % filtered.length); }
  }, [lightbox, filtered.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const prev = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox(i => (i + 1) % filtered.length);

  return (

        <>
      <Helmet>
        <title>Gallery | Maieutic Edutech</title>
        <meta name="description" content="A glimpse into Maieutic Edutech — client meets, university sessions, team events, and the moments behind our e-learning and instructional design work." />
        <link rel="canonical" href="https://maieuticedutech.com/gallery" />
      </Helmet>

    <div style={{
      paddingTop: 'clamp(96px, 10vw, 116px)',
      background: '#f4f5f7',
      minHeight: '100vh',
      fontFamily: "'Poppins', sans-serif",
    }}>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #003834 100%)',
        padding: 'clamp(48px, 6vw, 80px) clamp(20px, 6vw, 80px)',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '4px', color: '#FEF1DE', textTransform: 'uppercase', marginBottom: '14px' }}>
          OUR MOMENTS
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 56px)', fontWeight: 700, color: '#ffffff', marginBottom: '16px', lineHeight: 1.15 }}>
          Behind the Learning
        </h1>
        <p style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'rgba(255,255,255,0.78)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
          A peek into our culture, celebrations, and the people who make it all happen.
        </p>
      </div>

      {/* FILTER TABS */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', padding: '40px 20px 32px' }}>
        {categories.map((cat) => (
          <button key={cat} onClick={() => { setActive(cat); setLightbox(null); }}
            style={{
              padding: '10px 22px',
              background: active === cat ? '#00615c' : '#ffffff',
              color: active === cat ? '#ffffff' : '#00615c',
              border: `2px solid ${active === cat ? '#00615c' : '#d0e0df'}`,
              borderRadius: '999px',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '13px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* MASONRY GRID */}
      <div style={{
        columns: '3 280px', columnGap: '14px',
        padding: '0 clamp(16px, 4vw, 60px) 80px',
        maxWidth: '1400px', margin: '0 auto',
      }}>
        {filtered.map((item, idx) => (
          <div key={item.src}
            onClick={() => setLightbox(idx)}
            style={{
              breakInside: 'avoid', marginBottom: '14px',
              position: 'relative', overflow: 'hidden',
              borderRadius: '14px', cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
            }}>
            <img src={item.src} alt={item.caption}
              loading="lazy" decoding="async"
              style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              onError={e => { e.target.src = 'https://via.placeholder.com/400x300/00615c/ffffff?text=Maieutic'; }}
            />
            {/* Hover shade */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0)', transition: 'background 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.20)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0)'} />
            {/* Caption */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,60,55,0.80) 0%, transparent 100%)', padding: '32px 16px 14px', pointerEvents: 'none' }}>
              <span style={{ display: 'inline-block', padding: '3px 10px', background: 'rgba(255,255,255,0.15)', borderRadius: '999px', fontSize: '10px', fontWeight: 600, color: '#FEF1DE', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '5px' }}>
                {item.category}
              </span>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                {item.caption}
              </p>
            </div>
            {/* Zoom icon hint */}
            <div style={{ position: 'absolute', top: '12px', right: '12px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
              <span style={{ color: '#fff', fontSize: '14px' }}>⤢</span>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(6px)',
          }}>

          {/* LEFT ARROW */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
              width: '52px', height: '52px', borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', fontSize: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s', zIndex: 1001,
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}>
            ‹
          </button>

          {/* IMAGE + CAPTION */}
          <div onClick={e => e.stopPropagation()}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '88vw', maxHeight: '88vh' }}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              style={{ maxWidth: '100%', maxHeight: '78vh', borderRadius: '12px', objectFit: 'contain', boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}
              onError={e => { e.target.src = 'https://via.placeholder.com/800x600/00615c/ffffff?text=Maieutic'; }}
            />
            {/* Caption below image */}
            <div style={{ marginTop: '18px', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', padding: '3px 12px', background: 'rgba(255,255,255,0.12)', borderRadius: '999px', fontSize: '10px', fontWeight: 600, color: '#FEF1DE', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                {filtered[lightbox].category}
              </span>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#ffffff', margin: 0, fontWeight: 600 }}>
                {filtered[lightbox].caption}
              </p>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '6px' }}>
                {lightbox + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
              width: '52px', height: '52px', borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', fontSize: '22px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s', zIndex: 1001,
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'}>
            ›
          </button>

          {/* CLOSE */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              width: '40px', height: '40px', borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', fontSize: '18px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1001,
            }}>
            ✕
          </button>

        </div>
      )}

    </div>
  );
</>
  );
}

export default Gallery;