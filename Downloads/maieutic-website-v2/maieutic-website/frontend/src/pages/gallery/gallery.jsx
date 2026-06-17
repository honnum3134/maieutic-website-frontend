import React from 'react';

const categories = ['All', 'Clients', 'Events', 'Fests'];

const galleryItems = [
  { src: '/images/gallery1.jpg',  category: 'Clients', caption: 'MOU Signing — PPSU' },
  { src: '/images/gallery2.jpg',  category: 'Clients', caption: 'JNU Session' },
  { src: '/images/gallery3.jpg',  category: 'Clients', caption: 'The Northcap University' },
  { src: '/images/gallery4.jpg',  category: 'Clients', caption: 'Session at Jaipur National University' },
  { src: '/images/gallery5.jpg',  category: 'Clients', caption: 'Reva University Client Meet' },
  { src: '/images/gallery6.jpg',  category: 'Events',  caption: 'Cricket Tournament' },
  { src: '/images/gallery7.jpg',  category: 'Fests',   caption: 'Inauguration' },
  { src: '/images/gallery8.jpg',  category: 'Fests',   caption: 'Annual Day — Trophy Ceremony' },
  { src: '/images/gallery9.jpg',  category: 'Clients', caption: 'PPSU' },
  { src: '/images/gallery10.jpg', category: 'Clients', caption: 'Client Visit' },
];

function Gallery() {
  const [active, setActive] = React.useState('All');

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.category === active);

  return (
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
        <p style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '4px',
          color: '#FEF1DE', textTransform: 'uppercase', marginBottom: '14px',
        }}>
          OUR MOMENTS
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(28px, 5vw, 56px)',
          fontWeight: 700, color: '#ffffff',
          marginBottom: '16px', lineHeight: 1.15,
        }}>
          Behind the Learning
        </h1>
        <p style={{
          fontSize: 'clamp(14px, 1.5vw, 18px)',
          color: 'rgba(255,255,255,0.78)',
          maxWidth: '600px', margin: '0 auto',
          lineHeight: 1.7, fontWeight: 300,
        }}>
          A peek into our culture, celebrations, and the people who make it all happen.
        </p>
      </div>

      {/* FILTER TABS */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        flexWrap: 'wrap', gap: '10px',
        padding: '40px 20px 32px',
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '10px 22px',
              background: active === cat ? '#00615c' : '#ffffff',
              color: active === cat ? '#ffffff' : '#00615c',
              border: `2px solid ${active === cat ? '#00615c' : '#d0e0df'}`,
              borderRadius: '999px',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '13px', fontWeight: 600,
              cursor: 'pointer', transition: 'all 0.2s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MASONRY GRID */}
      <div style={{
        columns: '3 280px',
        columnGap: '14px',
        padding: '0 clamp(16px, 4vw, 60px) 80px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {filtered.map((item) => (
          <div
            key={item.src}
            style={{
              breakInside: 'avoid',
              marginBottom: '14px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '14px',
              cursor: 'default',
              boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
            }}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.caption}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300/00615c/ffffff?text=Maieutic';
              }}
            />

            {/* Hover shade overlay */}
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0)',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.20)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0)'}
            />

            {/* Caption — always visible at bottom */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,60,55,0.80) 0%, transparent 100%)',
              padding: '32px 16px 14px',
              pointerEvents: 'none',
            }}>
              <span style={{
                display: 'inline-block', padding: '3px 10px',
                background: 'rgba(255,255,255,0.15)', borderRadius: '999px',
                fontSize: '10px', fontWeight: 600, color: '#FEF1DE',
                letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '5px',
              }}>
                {item.category}
              </span>
              <p style={{
                fontSize: '13px', fontWeight: 600,
                color: '#ffffff', margin: 0, lineHeight: 1.3,
              }}>
                {item.caption}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;
