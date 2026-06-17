import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send } from 'lucide-react';

const ApplyNow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', role: '', experience: '', linkedin: '', coverLetter: '', resume: null });
  const [resumeName, setResumeName] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFile = (e) => { const f = e.target.files[0]; if (f) { setForm({ ...form, resume: f }); setResumeName(f.name); } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => { if (v) fd.append(k, v); });
    try {
      const res = await fetch('https://maieutic-backend-production.up.railway.app/api/application', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        setForm({ fullName: '', email: '', phone: '', role: '', experience: '', linkedin: '', coverLetter: '', resume: null });
        setResumeName(''); setIsOpen(false);
        setSuccessMsg('✅ Application submitted! HR will contact you in 3–5 days.');
        setTimeout(() => setSuccessMsg(''), 5000);
      }
    } catch { setSuccessMsg('❌ Could not connect. Please try again.'); setTimeout(() => setSuccessMsg(''), 5000); }
  };

  const inp = { width: '100%', padding: '11px 14px', border: '2px solid #e0e0e0', borderRadius: '8px', fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#333', outline: 'none', background: '#fafafa' };
  const lbl = { display: 'block', fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 700, color: '#00615c', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' };
  const fo = e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; };
  const bl = e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; };

  return (
    <>
      {successMsg && (
        <div onClick={() => setSuccessMsg('')} style={{ position: 'fixed', top: '120px', left: 0, right: 0, margin: '0 auto', width: 'fit-content', zIndex: 9999, background: successMsg.startsWith('✅') ? '#2e7d32' : '#c62828', color: '#fff', padding: '14px 40px', borderRadius: '8px', fontFamily: 'Arial Black, sans-serif', fontSize: '15px', fontWeight: 800, boxShadow: '0 6px 24px rgba(0,0,0,0.25)', whiteSpace: 'nowrap', cursor: 'pointer' }}>
          {successMsg}
        </div>
      )}

      {/* Sticky APPLY NOW — LEFT side */}
      <div onClick={() => setIsOpen(true)} style={{ position: 'fixed', right: 0, top: '380px', zIndex: 999, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', background: '#00615c', color: '#ffffff', padding: '18px 10px', borderRadius: '0 8px 8px 0', fontFamily: 'Arial Black, sans-serif', fontSize: '13px', fontWeight: 800, letterSpacing: '0.08em', cursor: 'pointer', boxShadow: '-4px 0 16px rgba(0,97,92,0.35)', userSelect: 'none' }}
        onMouseEnter={e => e.currentTarget.style.background = '#004d49'}
        onMouseLeave={e => e.currentTarget.style.background = '#00615c'}>
        APPLY NOW
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.60)', zIndex: 1000, backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: '90%', maxWidth: '680px', height: 'fit-content', maxHeight: '90vh', overflowY: 'auto', background: '#ffffff', borderRadius: '20px', zIndex: 1001, boxShadow: '0 30px 80px rgba(0,0,0,0.28)' }}>
              <div style={{ background: 'linear-gradient(135deg, #00615c 0%, #004d49 100%)', padding: '32px 36px 28px', position: 'relative', borderRadius: '20px 20px 0 0' }}>
                <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '18px', right: '18px', background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}><X size={17} /></button>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', color: '#FEF1DE', textTransform: 'uppercase', marginBottom: '10px' }}>JOIN OUR TEAM</p>
                <h2 style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '30px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>Apply Now</h2>
                <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.80)', lineHeight: 1.6, fontWeight: 300 }}>Be part of a team building meaningful, future-ready education solutions.</p>
              </div>
              <form onSubmit={handleSubmit} style={{ padding: '32px 36px 36px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                  <div><label style={lbl}>Full Name <span style={{ color: '#800d07' }}>*</span></label><input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your full name" required style={inp} onFocus={fo} onBlur={bl} /></div>
                  <div><label style={lbl}>Email <span style={{ color: '#800d07' }}>*</span></label><input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inp} onFocus={fo} onBlur={bl} /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                  <div><label style={lbl}>Phone <span style={{ color: '#800d07' }}>*</span></label><input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required style={inp} onFocus={fo} onBlur={bl} /></div>
                  <div><label style={lbl}>Role <span style={{ color: '#800d07' }}>*</span></label>
                    <select name="role" value={form.role} onChange={handleChange} required style={{ ...inp, cursor: 'pointer' }} onFocus={fo} onBlur={bl}>
                      <option value="">Select a role</option>
                      <option>Instructional Designer</option><option>Content Developer</option><option>E-Learning Developer</option>
                      <option>Motion Graphic Designer</option><option>Inside Sales Associate (B2B)</option>
                      <option>Academic / Admission Counsellor</option><option>Quality Check (E-Learning Videos)</option><option>Other</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                  <div><label style={lbl}>Experience</label>
                    <select name="experience" value={form.experience} onChange={handleChange} style={{ ...inp, cursor: 'pointer' }} onFocus={fo} onBlur={bl}>
                      <option value="">Select</option><option>Fresher (0 years)</option><option>1 – 2 years</option><option>3 – 5 years</option><option>6 – 9 years</option><option>10+ years</option>
                    </select>
                  </div>
                  <div><label style={lbl}>LinkedIn</label><input type="url" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/..." style={inp} onFocus={fo} onBlur={bl} /></div>
                </div>
                <div style={{ marginBottom: '18px' }}><label style={lbl}>Why Maieutic? <span style={{ color: '#800d07' }}>*</span></label><textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} placeholder="Tell us about yourself..." required rows={4} style={{ ...inp, resize: 'none' }} onFocus={fo} onBlur={bl} /></div>
                <div style={{ marginBottom: '28px' }}><label style={lbl}>Resume <span style={{ color: '#800d07' }}>*</span></label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '13px 16px', border: '2px dashed #b2dfdb', borderRadius: '8px', background: resumeName ? '#e8f5e9' : '#f8f8f6', cursor: 'pointer' }}>
                    <Upload size={18} color="#00615c" />
                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: resumeName ? '#00615c' : '#888' }}>{resumeName || 'PDF, DOC, DOCX (max 5MB)'}</span>
                    <input type="file" accept=".pdf,.doc,.docx" required onChange={handleFile} style={{ display: 'none' }} />
                  </label>
                </div>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={() => setIsOpen(false)} style={{ padding: '12px 24px', background: 'transparent', border: '2px solid #e0e0e0', borderRadius: '8px', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontWeight: 600, color: '#666', cursor: 'pointer' }}>Cancel</button>
                  <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '12px 28px', background: '#800d07', border: 'none', borderRadius: '8px', fontFamily: 'Arial Black, sans-serif', fontSize: '15px', fontWeight: 800, color: '#ffffff', cursor: 'pointer' }}>Submit <Send size={16} /></button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default ApplyNow;
