import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const SUBMITTED_KEY  = 'maieutic_lead_submitted';
const POPUP_INTERVAL = 10 * 60 * 1000;

// ── PASTE YOUR GOOGLE APPS SCRIPT URL HERE ──
const SHEET_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

const LeadPopup = () => {
  const [isOpen, setIsOpen]         = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errors, setErrors]         = useState({});
  const [form, setForm]             = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    const done = localStorage.getItem(SUBMITTED_KEY);
    if (done) return;
    const initial  = setTimeout(() => setIsOpen(true), 3000);
    const interval = setInterval(() => {
      if (!localStorage.getItem(SUBMITTED_KEY)) setIsOpen(true);
    }, POPUP_INTERVAL);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, []);

  const getDateTime = () =>
    new Date().toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      hour12: true, timeZone: 'Asia/Kolkata',
    });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) {
      e.name = 'Name is required.';
    } else if (!/^[a-zA-Z\s]+$/.test(form.name.trim())) {
      e.name = 'Name must contain only letters.';
    } else if (form.name.trim().length < 2) {
      e.name = 'Name must be at least 2 characters.';
    }
    if (!form.phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      e.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Enter a valid email address.';
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === 'name')  v = value.replace(/[^a-zA-Z\s]/g, '');
    if (name === 'phone') v = value.replace(/\D/g, '').slice(0, 10);
    setForm({ ...form, [name]: v });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    const payload = {
      name:        form.name.trim(),
      phone:       form.phone.trim(),
      email:       form.email.trim(),
      submittedAt: getDateTime(),
    };

  try {
      // Save locally always
      const existing = JSON.parse(localStorage.getItem('maieutic_leads') || '[]');
      existing.push(payload);
      localStorage.setItem('maieutic_leads', JSON.stringify(existing));

      // Try Google Sheets if URL is set
      if (!SHEET_URL.includes('YOUR_SCRIPT_ID')) {
        await fetch(SHEET_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload),
        });
      }

      localStorage.setItem(SUBMITTED_KEY, 'true');
      setSubmitted(true);
      setSuccessMsg('Thank you! We will get back to you shortly.');
      setTimeout(() => { setIsOpen(false); setSuccessMsg(''); }, 3000);
    } catch {
      // Even if Sheets fails, save locally and show success
      localStorage.setItem(SUBMITTED_KEY, 'true');
      setSubmitted(true);
      setSuccessMsg('Thank you! We will get back to you shortly.');
      setTimeout(() => { setIsOpen(false); setSuccessMsg(''); }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const inp = (hasErr) => ({
    width: '100%', padding: '11px 14px',
    border: `2px solid ${hasErr ? '#c62828' : '#e0e0e0'}`,
    borderRadius: '8px',
    fontFamily: "'Poppins', sans-serif", fontSize: '14px',
    color: '#333', outline: 'none', background: '#fafafa',
    boxSizing: 'border-box',
  });
  const lbl = {
    display: 'block', fontFamily: "'Poppins', sans-serif",
    fontSize: '12px', fontWeight: 700, color: '#00615c',
    marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px',
  };
  const errStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '11px', color: '#c62828',
    marginTop: '4px', fontWeight: 500,
  };
  const fo = (e) => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; };
  const bl = (e) => {
    e.target.style.borderColor = errors[e.target.name] ? '#c62828' : '#e0e0e0';
    e.target.style.background = '#fafafa';
  };

  return (
    <>
      {successMsg && (
        <div style={{
          position: 'fixed', top: '120px', left: 0, right: 0,
          margin: '0 auto', width: 'fit-content', zIndex: 9999,
          background: '#2e7d32', color: '#fff',
          padding: '14px 40px', borderRadius: '8px',
          fontFamily: "'Poppins', sans-serif", fontSize: '15px',
          fontWeight: 700, boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
          whiteSpace: 'nowrap',
        }}>
          {successMsg}
        </div>
      )}

      <AnimatePresence>
        {isOpen && !submitted && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.60)', zIndex: 1000, backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                margin: 'auto', width: '90%', maxWidth: '500px',
                height: 'fit-content', maxHeight: '90vh', overflowY: 'auto',
                background: '#ffffff', borderRadius: '20px',
                zIndex: 1001, boxShadow: '0 30px 80px rgba(0,0,0,0.28)',
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #800d07 0%, #5a0a05 100%)',
                padding: '32px 36px 28px', position: 'relative', borderRadius: '20px 20px 0 0',
              }}>
                <button onClick={() => setIsOpen(false)} style={{
                  position: 'absolute', top: '18px', right: '18px',
                  background: 'rgba(255,255,255,0.15)', border: 'none',
                  borderRadius: '50%', width: '34px', height: '34px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                }}>
                  <X size={17} />
                </button>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', fontWeight: 700, letterSpacing: '3px', color: '#FEF1DE', textTransform: 'uppercase', marginBottom: '10px' }}>GET IN TOUCH</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Let's Connect!</h2>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.6, fontWeight: 300 }}>Fill in your details and our team will reach out shortly.</p>
              </div>

              <form onSubmit={handleSubmit} style={{ padding: '32px 36px 36px' }} noValidate>
                <div style={{ marginBottom: '18px' }}>
                  <label style={lbl}>Full Name <span style={{ color: '#800d07' }}>*</span></label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Your full name" style={inp(!!errors.name)} onFocus={fo} onBlur={bl} />
                  {errors.name && <p style={errStyle}>{errors.name}</p>}
                </div>
                <div style={{ marginBottom: '18px' }}>
                  <label style={lbl}>Phone Number <span style={{ color: '#800d07' }}>*</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                    placeholder="10-digit mobile number" maxLength={10} inputMode="numeric"
                    style={inp(!!errors.phone)} onFocus={fo} onBlur={bl} />
                  {errors.phone && <p style={errStyle}>{errors.phone}</p>}
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={lbl}>Email ID <span style={{ color: '#800d07' }}>*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="your@email.com" style={inp(!!errors.email)} onFocus={fo} onBlur={bl} />
                  {errors.email && <p style={errStyle}>{errors.email}</p>}
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '11px', color: '#aaa', marginBottom: '20px', fontStyle: 'italic' }}>
                  Submitted at: {getDateTime()}
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={() => setIsOpen(false)} style={{
                    padding: '12px 24px', background: 'transparent',
                    border: '2px solid #e0e0e0', borderRadius: '8px',
                    fontFamily: "'Poppins', sans-serif", fontSize: '14px',
                    fontWeight: 600, color: '#666', cursor: 'pointer',
                  }}>Maybe Later</button>
                  <button type="submit" disabled={loading} style={{
                    display: 'flex', alignItems: 'center', gap: '9px',
                    padding: '12px 28px', background: loading ? '#aaa' : '#800d07',
                    border: 'none', borderRadius: '8px',
                    fontFamily: "'Poppins', sans-serif", fontSize: '15px',
                    fontWeight: 700, color: '#ffffff', cursor: loading ? 'not-allowed' : 'pointer',
                  }}>{loading ? 'Submitting...' : <> Submit <Send size={16} /> </>}</button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadPopup;
