import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import '@/styles/global.css';

/* ================================================================
   APPLY NOW MODAL
================================================================ */
const ApplyModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '',
    role: '', experience: '', linkedin: '',
    coverLetter: '', resume: null,
  });
  const [resumeName, setResumeName] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, resume: file });
      setResumeName(file.name);
    }
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append('fullName',    form.fullName);
    formDataObj.append('email',       form.email);
    formDataObj.append('phone',       form.phone);
    formDataObj.append('role',        form.role);
    formDataObj.append('experience',  form.experience);
    formDataObj.append('linkedin',    form.linkedin);
    formDataObj.append('coverLetter', form.coverLetter);
    if (form.resume) formDataObj.append('resume', form.resume);

    try {
      const res = await fetch('https://maieutic-backend-production.up.railway.app/api/application', {
        method: 'POST',
        body: formDataObj,
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: '✅ Application Submitted Successfully!',
          description: 'Our HR team will review your application and contact you within 3–5 business days.',
        });
        setForm({ fullName: '', email: '', phone: '', role: '', experience: '', linkedin: '', coverLetter: '', resume: null });
        setResumeName('');
        onClose();
      } else {
        toast({ title: 'Error', description: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      toast({ title: 'Error', description: 'Could not connect to server. Please try again.' });
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
    background: '#fafafa',
    transition: 'border-color 0.2s, background 0.2s',
  };
  const labelStyle = {
    display: 'block',
    fontFamily: 'Arial, sans-serif',
    fontSize: '12px',
    fontWeight: 700,
    color: '#00615c',
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.60)',
              zIndex: 1000,
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              margin: 'auto',
              width: '90%',
              maxWidth: '680px',
              height: 'fit-content',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#ffffff',
              borderRadius: '20px',
              zIndex: 1001,
              boxShadow: '0 30px 80px rgba(0,0,0,0.28)',
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #00615c 0%, #004d49 100%)',
              padding: '32px 36px 28px',
              position: 'relative',
              borderRadius: '20px 20px 0 0',
            }}>
              <button
                onClick={onClose}
                style={{
                  position: 'absolute', top: '18px', right: '18px',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none', borderRadius: '50%',
                  width: '34px', height: '34px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#fff',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                <X size={17} />
              </button>

              <p style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '12px', fontWeight: 700,
                letterSpacing: '3px', color: '#FEF1DE',
                textTransform: 'uppercase', marginBottom: '10px',
              }}>
                JOIN OUR TEAM
              </p>
              <h2 style={{
                fontFamily: 'Arial Black, sans-serif',
                fontSize: '30px', fontWeight: 800,
                color: '#ffffff', marginBottom: '8px', lineHeight: 1.2,
              }}>
                Apply Now
              </h2>
              <p style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px', color: 'rgba(255,255,255,0.80)',
                lineHeight: 1.6, fontWeight: 300,
              }}>
                Be part of a team building meaningful, future-ready education solutions.
                We'll review your application and get back within 3–5 business days.
              </p>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 4vw, 36px) clamp(20px, 4vw, 36px)' }}>

              {/* Row 1: Full Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
  <div>
    <label style={labelStyle}>Full Name <span style={{ color: '#800d07' }}>*</span></label>
                  <input
                    type="text" name="fullName" value={form.fullName}
                    onChange={handleChange} placeholder="Your full name" required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email Address <span style={{ color: '#800d07' }}>*</span></label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="your@email.com" required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; }}
                  />
                </div>
              </div>

              {/* Row 2: Phone + Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
  <div>
    <label style={labelStyle}>Phone Number <span style={{ color: '#800d07' }}>*</span></label>
                  <input
                    type="tel" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="+91 XXXXX XXXXX" required
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Role Applying For <span style={{ color: '#800d07' }}>*</span></label>
                  <select
                    name="role" value={form.role}
                    onChange={handleChange} required
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; }}
                  >
                    <option value="">Select a role</option>
                    <option>Instructional Designer</option>
                    <option>Content Developer</option>
                    <option>Video Producer / Editor</option>
                    <option>Graphic Designer</option>
                    <option>LMS Administrator</option>
                    <option>Project Manager</option>
                    <option>Business Development</option>
                    <option>HR & Talent Acquisition</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Experience + LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
  <div>
    <label style={labelStyle}>Years of Experience</label>
                  <select
                    name="experience" value={form.experience} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; }}
                  >
                    <option value="">Select experience</option>
                    <option>Fresher (0 years)</option>
                    <option>1 – 2 years</option>
                    <option>3 – 5 years</option>
                    <option>6 – 9 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>LinkedIn Profile</label>
                  <input
                    type="url" name="linkedin" value={form.linkedin}
                    onChange={handleChange} placeholder="https://linkedin.com/in/..."
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; }}
                  />
                </div>
              </div>

              {/* Cover Letter */}
              <div style={{ marginBottom: '18px' }}>
                <label style={labelStyle}>Why do you want to join Maieutic? <span style={{ color: '#800d07' }}>*</span></label>
                <textarea
                  name="coverLetter" value={form.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us about yourself, your passion for education, and why you'd be a great fit..."
                  required rows={4}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#e0e0e0'; e.target.style.background = '#fafafa'; }}
                />
              </div>

              {/* Resume Upload */}
              <div style={{ marginBottom: '28px' }}>
                <label style={labelStyle}>Upload Resume / CV <span style={{ color: '#800d07' }}>*</span></label>
                <label
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '13px 16px',
                    border: '2px dashed #b2dfdb',
                    borderRadius: '8px',
                    background: resumeName ? '#e8f5e9' : '#f8f8f6',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#00615c'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#b2dfdb'}
                >
                  <Upload size={18} color="#00615c" />
                  <span style={{
                    fontFamily: 'Arial, sans-serif', fontSize: '14px',
                    color: resumeName ? '#00615c' : '#888',
                  }}>
                    {resumeName || 'Click to upload PDF, DOC, or DOCX (max 5MB)'}
                  </span>
                  <input
                    type="file" accept=".pdf,.doc,.docx" required
                    onChange={handleFile}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'linear-gradient(90deg, #00615c30, transparent)', marginBottom: '24px' }} />

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  type="button" onClick={onClose}
                  style={{
                    padding: '12px 24px',
                    background: 'transparent',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px', fontWeight: 600,
                    color: '#666', cursor: 'pointer',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#800d07'; e.currentTarget.style.color = '#800d07'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e0e0e0'; e.currentTarget.style.color = '#666'; }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '9px',
                    padding: '12px 28px',
                    background: '#800d07',
                    border: 'none', borderRadius: '8px',
                    fontFamily: 'Arial Black, sans-serif',
                    fontSize: '15px', fontWeight: 800,
                    color: '#ffffff', cursor: 'pointer',
                    transition: 'background 0.2s, transform 0.2s',
                    boxShadow: '0 4px 16px rgba(128,13,7,0.30)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#a01109'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#800d07'; e.currentTarget.style.transform = 'none'; }}
                >
                  Submit Application
                  <Send size={16} />
                </button>
              </div>

            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/* ================================================================
   CAREER HERO
================================================================ */
const CareerHero = () => (
  <section className="hero-section">
    <img src="/images/f.jpg" alt="Career Hero" className="hero-image" />
    <div className="hero-gradient"></div>
    <div className="hero-content">
      <h1>Build the Future of Learning With Us</h1>
      <p>
        At Maieutic, we don't just create content — we shape how the world learns.
        From universities to enterprises, we design impactful learning experiences
        that drive real-world outcomes. If you're passionate about education,
        innovation, and meaningful work, you will fit right in.
      </p>
    </div>
  </section>
);

/* ================================================================
   LIFE SECTION
================================================================ */
const LifeSection = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('active'); else el.classList.remove('active'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const items = [
    { icon: '✦', text: 'A culture that celebrates ideas and initiative' },
    { icon: '✦', text: 'Regular team engagements and knowledge sessions' },
    { icon: '✦', text: 'Recognition for performance and impact' },
    { icon: '✦', text: 'Opportunities to work on high-impact projects' },
  ];

  return (
    <section className="life-section" ref={ref}>
      <div className="life-left">
        <div className="life-heading-row">
          <h2>Life at Maieutic</h2>
          <div className="life-heading-line" />
        </div>
        <div className="life-line" />
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <span className="life-item-icon" aria-hidden="true">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="life-right">
        <img src="/images/Conf.png" alt="Life at Maieutic" />
        <div className="life-image-overlay" />
        <span className="life-image-badge">Our Team in Action</span>
      </div>
    </section>
  );
};

/* ================================================================
   WHY JOIN
================================================================ */
const WhyJoin = () => {
  const ref = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('active'); else el.classList.remove('active'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const topCards = [
    { id: 1, icon: '/images/growth.svg', title: 'Growth That Matters', description: 'We invest in your professional journey through:', items: ['Continuous learning opportunities', 'Cross-functional exposure', 'Leadership development pathways'] },
    { id: 2, icon: '/images/creative.svg', title: 'Creative Freedom', description: "Whether it's microlearning modules, long-format videos, or immersive content — you'll have the space to innovate.", items: [] },
  ];
  const bottomCards = [
    { id: 3, icon: '/images/collab.png', title: 'Collaborative Environment', description: 'Work with educators, designers, strategists, and technologists who are equally passionate.' },
    { id: 4, icon: '/images/ownership.png', title: 'Culture of Ownership', description: 'We believe in empowering people, not micromanaging them. You own your work.' },
    { id: 5, icon: '/images/purpose.png', title: 'Purpose-Driven Work', description: 'Every project contributes to transforming education — aligned with NEP standards.' },
  ];

  return (
    <section className="why-section" ref={ref}>
      <div className="why-wrapper">
        <div className="why-heading">
          <div className="why-heading-row">
            <h2>Why Join Us?</h2>
            <div className="why-line" />
          </div>
        </div>
        <div className="why-top-grid">
          {topCards.map((card) => (
            <div key={card.id} className={`why-card${activeCard === card.id ? ' clicked' : ''}`} onMouseEnter={() => setActiveCard(card.id)} onMouseLeave={() => setActiveCard(null)}>
              <img src={card.icon} alt="" className="why-top-icon" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.items.length > 0 && <ul>{card.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
            </div>
          ))}
        </div>
        <div className="why-divider" />
        <div className="why-bottom-grid">
          {bottomCards.map((card) => (
            <div key={card.id} className={`why-card${activeCard === card.id ? ' clicked' : ''}`} onMouseEnter={() => setActiveCard(card.id)} onMouseLeave={() => setActiveCard(null)}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <img src={card.icon} alt="" className="why-bottom-icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   LOOKING FOR
================================================================ */
const LookingFor = () => {
  const ref = useRef(null);
  const points = ['Believe in the power of education', 'Think creatively and solve problems', 'Take initiative and ownership', 'Thrive in a fast-paced environment', 'Are eager to learn and unlearn'];
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add('active'); else ref.current?.classList.remove('active'); },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section className="who-section" ref={ref}>
      <h2 className="who-title">Who We're Looking For</h2>
      <div className="who-line"></div>
      <p className="who-intro">We are always on the lookout for people who:</p>
      <div className="who-stack">
        {points.map((text, i) => (
          <div className="who-card" key={i}>
            <div className="icon">✓</div>
            <div className="text">{text}</div>
            {i !== points.length - 1 && <div className="arrow">↓</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ================================================================
   OPEN ROLES — 7 JD cards, each opens the JD PDF
================================================================ */
const roles = [
  {
    title: 'Content Developer',
    type: 'Full-Time · Onsite',
    tags: ['Writing', 'E-Learning', 'Research'],
    color: '#00615c',
    page: 1,
  },
  {
    title: 'E-Learning Developer',
    type: 'Full-Time · Onsite',
    tags: ['Articulate', 'Captivate', 'LMS'],
    color: '#004d49',
    page: 2,
  },
  {
    title: 'Instructional Designer',
    type: 'Full-Time · Onsite',
    tags: ['ID Principles', 'PowerPoint', 'Storyboarding'],
    color: '#800d07',
    page: 3,
  },
  {
    title: 'Motion Graphic Designer',
    type: 'Full-Time · Onsite',
    tags: ['After Effects', 'Animation', 'Visual Design'],
    color: '#6a000a',
    page: 4,
  },
  {
    title: 'Inside Sales Associate (B2B)',
    type: 'Full-Time · Onsite',
    tags: ['Sales', 'EdTech', 'CRM'],
    color: '#00615c',
    page: 5,
  },
  {
    title: 'Academic / Admission Counsellor',
    type: 'Full-Time · Onsite',
    tags: ['Counselling', 'Admissions', 'Communication'],
    color: '#004d49',
    page: 6,
  },
  {
    title: 'Quality Check (E-Learning Videos)',
    type: 'Full-Time · Onsite',
    tags: ['QA', 'Video Review', 'Attention to Detail'],
    color: '#800d07',
    page: 7,
  },
];

const OpenRoles = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('active'); else el.classList.remove('active'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const openJD = (pageNum) => {
    // Open the PDF — browser will display the full PDF; page anchors may vary by browser
    window.open(`/Updated_JD_01_June_2026.pdf#page=${pageNum}`, '_blank');
  };

  return (
    <section className="open-roles section" ref={ref}>
      <div className="open-roles-container">
        <div className="open-roles-left">
          <div className="open-header">
            <h2 className="open-title">Open Roles</h2>
          </div>

          <div style={{
            display: 'grid',
gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
gap: '24px',
marginTop: '32px',
width: '100%',
          }}>
            {roles.map((role, i) => (
              <div
                key={i}
                onClick={() => openJD(role.page)}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '28px 24px',
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.10)',
                  border: `2px solid transparent`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.18)';
                  e.currentTarget.style.border = `2px solid ${role.color}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.10)';
                  e.currentTarget.style.border = '2px solid transparent';
                }}
              >
                {/* top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '4px',
                  background: role.color,
                  borderRadius: '14px 14px 0 0',
                }} />

                {/* role icon initial */}
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: `${role.color}18`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontFamily: 'Arial Black, sans-serif',
                    fontSize: '20px', fontWeight: 800,
                    color: role.color,
                  }}>
                    {role.title[0]}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'Arial Black, sans-serif',
                  fontSize: '16px', fontWeight: 800,
                  color: '#1a1a1a', marginBottom: '6px', lineHeight: 1.3,
                }}>
                  {role.title}
                </h3>

                <p style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '12px', color: '#888',
                  marginBottom: '14px',
                }}>
                  {role.type}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                  {role.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '11px', fontWeight: 600,
                      color: role.color,
                      background: `${role.color}12`,
                      padding: '3px 9px', borderRadius: '99px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '13px', fontWeight: 700,
                  color: role.color,
                }}>
                  View JD
                  <span style={{ fontSize: '16px' }}>→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

/* ================================================================
   CTA — Apply Now triggers modal
================================================================ */
const CTA = ({ onApply }) => (
  <section className="cta-section">
    <h2>Join Us in Shaping the Future of Learning</h2>
    <p>Be part of a team that's building meaningful, scalable, and future-ready education solutions.</p>
    <button className="apply-btn" onClick={onApply}>Apply Now</button>
  </section>
);

/* ================================================================
   PAGE
================================================================ */
const CareersPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet><title>Careers | Maieutic Edutech</title></Helmet>
      <div style={{ paddingTop: '116px' }}>
        <main>
          <CareerHero />
          <LifeSection />
          <WhyJoin />
          <LookingFor />
          <OpenRoles />
          <CTA onApply={() => setModalOpen(true)} />
        </main>
      </div>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default CareersPage;
