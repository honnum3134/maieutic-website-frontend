import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TeamPage = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  // Set your launch date here
  const LAUNCH_DATE = new Date('2025-08-01T00:00:00');

  useEffect(() => {
    const tick = () => {
      const now  = new Date();
      const diff = LAUNCH_DATE - now;
      if (diff <= 0) return;
      setTime({
        days:  Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins:  Math.floor((diff / (1000 * 60)) % 60),
        secs:  Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const box = (val, label) => (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: '16px',
      padding: 'clamp(16px, 3vw, 28px) clamp(20px, 4vw, 40px)',
      minWidth: 'clamp(70px, 16vw, 110px)',
      backdropFilter: 'blur(10px)',
    }}>
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(32px, 6vw, 64px)',
        fontWeight: 700, color: '#ffffff',
        lineHeight: 1,
      }}>
        {String(val).padStart(2, '0')}
      </span>
      <span style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: 'clamp(10px, 1.5vw, 13px)',
        fontWeight: 600, color: 'rgba(255,255,255,0.60)',
        letterSpacing: '2px', textTransform: 'uppercase',
        marginTop: '8px',
      }}>
        {label}
      </span>
    </div>
  );

  return (
    <>
      <Helmet><title>Our Team | Maieutic Edutech</title></Helmet>

      <div style={{
        minHeight: '100vh',
        paddingTop: 'clamp(96px, 10vw, 116px)',
        background: 'linear-gradient(135deg, #00615c 0%, #004d49 50%, #003834 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Poppins', sans-serif",
        position: 'relative', overflow: 'hidden',
      }}>

        {/* Background decorative circles */}
        <div style={{
          position: 'absolute', width: '600px', height: '600px',
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)',
          top: '-150px', right: '-150px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px',
          borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)',
          bottom: '-100px', left: '-100px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: '200px', height: '200px',
          borderRadius: '50%', background: 'rgba(254,241,222,0.04)',
          top: '30%', right: '10%', pointerEvents: 'none',
        }} />

        {/* Main content */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px)',
          maxWidth: '800px', width: '100%',
          position: 'relative', zIndex: 2,
        }}>

          {/* Tag line */}
          <p style={{
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '4px', color: '#FEF1DE',
            textTransform: 'uppercase', marginBottom: '20px',
          }}>
            MAIEUTIC EDUTECH
          </p>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 700, color: '#ffffff',
            lineHeight: 1.15, marginBottom: '24px',
          }}>
            Coming Soon
          </h1>

          {/* Divider */}
          <div style={{
            width: '60px', height: '3px',
            background: '#FEF1DE',
            borderRadius: '2px',
            margin: '0 auto 28px',
          }} />

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.8, fontWeight: 300,
            maxWidth: '560px', margin: '0 auto 48px',
          }}>
            We are working hard to introduce you to the brilliant minds behind Maieutic Edutech. Our team page will be live very soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
