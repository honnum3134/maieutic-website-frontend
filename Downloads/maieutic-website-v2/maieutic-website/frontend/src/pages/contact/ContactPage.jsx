import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Send } from 'lucide-react';

const GMAPS_LINK = "https://www.google.com/maps/place/Maieutic+Edutech+Pvt+Ltd,+E-learning+Content+Development,+Video+based+Content+Development,+Animation+Services/@12.9116024,77.5135233,17z";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('https://maieutic-backend-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSuccessMsg('✅ Message sent successfully! We will get back to you soon.');
        setTimeout(() => setSuccessMsg(''), 5000);
      }
  } catch (err) {
  console.error(err);
}
  };

  const contactInfo = [
    { icon: Mail,   title: 'Email Us',      value: 'info@maieuticedutech.com' },
    { icon: Phone,  title: 'Call Us',       value: '+91 96637 27955' },
    { icon: Clock,  title: 'Support Hours', value: 'Mon – Fri: 9:00 AM – 6:00 PM (IST)' },
    { icon: MapPin, title: 'Our Location',  value: '248/1, 3rd floor, Above 154 Breakfast Restaurant Kenchena Halli Road, 2nd Main Rd, Halagevadera Halli, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Maieutic Edutech</title>
        <meta name="description" content="Get in touch with Maieutic Edutech. We're here to assist you with your learning and education needs." />
      </Helmet>

      {/* ── SUCCESS NOTIFICATION BAR ── */}
      {successMsg && (
        <div
          onClick={() => setSuccessMsg('')}
          style={{
            position: 'fixed',
            top: '120px',
            left: 0,
            right: 0,
            margin: '0 auto',
            width: 'fit-content',
            zIndex: 9999,
            background: successMsg.startsWith('✅') ? '#2e7d32' : '#c62828',
            color: '#fff',
            padding: '14px 40px',
            borderRadius: '8px',
            fontFamily: 'Arial Black, sans-serif',
            fontSize: '15px',
            fontWeight: 800,
            boxShadow: '0 6px 24px rgba(0,0,0,0.25)',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          {successMsg}
        </div>
      )}

      <div style={{ paddingTop: 'clamp(96px, 10vw, 116px)', background: '#f8f8f6', minHeight: '100vh' }}>

        {/* ── HERO BANNER ── */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
  background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #003834 100%)',
  padding: 'clamp(32px, 5vw, 70px) clamp(16px, 5vw, 60px) clamp(32px, 5vw, 80px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '350px', height: '350px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '30%',
            width: '260px', height: '260px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)', pointerEvents: 'none',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}
          >
            <p style={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '13px', fontWeight: 600,
              letterSpacing: '3px', color: '#FEF1DE',
              textTransform: 'uppercase', marginBottom: '16px',
            }}>
              GET IN TOUCH
            </p>
            <h1 style={{
              fontFamily: 'Arial Black, sans-serif',
              fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 800,
color: '#ffffff', lineHeight: 1.15,
              marginBottom: '20px', letterSpacing: '-1px',
            }}>
              Contact Us
            </h1>
            <p style={{
             fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(13px, 1.5vw, 16px)',
color: 'rgba(255,255,255,0.85)', lineHeight: 1.7,
maxWidth: '560px', fontWeight: 300,
            }}>
              We're here to assist you. Get in touch with us
              and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </motion.section>

        {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: 'clamp(20px, 4vw, 60px) clamp(12px, 4vw, 40px) 60px' }}>
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 items-stretch">

            {/* ── LEFT: Let's Talk ── */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #00615c 0%, #004d49 100%)',
borderRadius: '16px',
padding: 'clamp(20px, 4vw, 44px) clamp(16px, 4vw, 40px)',
boxSizing: 'border-box',
flex: 1,
              }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700,
color: '#ffffff', marginBottom: '24px',
                }}>
                  Let's Talk
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                    >
                      <div style={{
                       width: '40px', height: '40px', borderRadius: '50%',
background: 'rgba(255,255,255,0.15)',
border: '1px solid rgba(255,255,255,0.20)',
display: 'flex', alignItems: 'center', justifyContent: 'center',
flexShrink: 0,
                      }}>
                        <item.icon size={20} color="#FEF1DE" />
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(11px, 1.2vw, 13px)',
fontWeight: 700, color: '#FEF1DE',
marginBottom: '4px', letterSpacing: '0.5px',
                        }}>
                          {item.title}
                        </div>
                        <div style={{
                          fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(12px, 1.2vw, 14px)',
color: 'rgba(255,255,255,0.82)', lineHeight: 1.6,
                        }}>
                          {item.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative line */}
                <div style={{
                  marginTop: '40px', height: '2px',
                  background: 'linear-gradient(90deg, rgba(254,241,222,0.5), transparent)',
                  borderRadius: '2px',
                }} />
                <p style={{
                  fontFamily: 'Arial, sans-serif', fontSize: '13px',
                  color: 'rgba(255,255,255,0.55)',
                  marginTop: '16px', marginBottom: '16px',
                }}>
                  ISO 9001:2015 Certified · Bengaluru, India
                </p>

                {/* Map */}
                <div style={{
                  borderRadius: '12px', overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.20)',
                  position: 'relative',
                }}>
                  <iframe
                    title="Maieutic Edutech Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.5110%2C12.9090%2C77.5160%2C12.9140&layer=mapnik&marker=12.9116%2C77.5135"
                    width="100%"
                    height="200"
                    style={{ border: 0, display: 'block' }}
                    loading="lazy"
                  />
                  
                   <a href={GMAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      background: 'rgba(0,77,73,0.92)',
                      padding: '7px 12px',
                      display: 'flex', alignItems: 'center', gap: '7px',
                      textDecoration: 'none', cursor: 'pointer',
                    }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#FEF1DE">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: '#FEF1DE', fontWeight: 600 }}>
                      Maieutic Edutech, Rajarajeshwari Nagar · Click to open in Google Maps ↗
                    </span>
                  </a>
                </div>

              </div>
            </motion.div>

            {/* ── RIGHT: Send Us a Message ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{
          background: '#ffffff', borderRadius: '16px',
padding: 'clamp(20px, 4vw, 44px) clamp(16px, 4vw, 40px)', boxSizing: 'border-box', flex: 1,
boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,97,92,0.08)',
              }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700,
color: '#00615c', marginBottom: '8px',
                }}>
                  Send Us a Message
                </h2>
                <p style={{
                  fontFamily: 'Arial, sans-serif', fontSize: '14px',
                  color: '#666', marginBottom: '32px', lineHeight: 1.6,
                }}>
                  Ready to transform your learning experience? Fill in the form and we'll be in touch shortly.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name',  label: 'Full Name',     type: 'text',  placeholder: 'Your full name',  required: true },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com',  required: true },
                    ].map((f) => (
                      <div key={f.name}>
                        <label style={{
                          display: 'block', fontFamily: 'Arial, sans-serif',
                          fontSize: '12px', fontWeight: 700, color: '#00615c',
                          marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px',
                        }}>
                          {f.label}{f.required && <span style={{ color: '#800d07' }}> *</span>}
                        </label>
                        <input
                          type={f.type} name={f.name}
                          value={formData[f.name]} onChange={handleChange}
                          placeholder={f.placeholder} required={f.required}
                          style={{
                            width: '100%', padding: '12px 14px',
                            border: '2px solid #e8e8e8', borderRadius: '8px',
                            fontFamily: 'Arial, sans-serif', fontSize: '14px',
                            color: '#333', outline: 'none', background: '#fafafa',
                            transition: 'border-color 0.2s, background 0.2s',
                          }}
                          onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                          onBlur={e => { e.target.style.borderColor = '#e8e8e8'; e.target.style.background = '#fafafa'; }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'Arial, sans-serif',
                      fontSize: '12px', fontWeight: 700, color: '#00615c',
                      marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px',
                    }}>
                      Subject
                    </label>
                    <input
                      type="text" name="subject"
                      value={formData.subject} onChange={handleChange}
                      placeholder="How can we help you?"
                      style={{
                        width: '100%', padding: '12px 14px',
                        border: '2px solid #e8e8e8', borderRadius: '8px',
                        fontFamily: 'Arial, sans-serif', fontSize: '14px',
                        color: '#333', outline: 'none', background: '#fafafa',
                        transition: 'border-color 0.2s, background 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                      onBlur={e => { e.target.style.borderColor = '#e8e8e8'; e.target.style.background = '#fafafa'; }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'Arial, sans-serif',
                      fontSize: '12px', fontWeight: 700, color: '#00615c',
                      marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px',
                    }}>
                      Message <span style={{ color: '#800d07' }}>*</span>
                    </label>
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or requirements..."
                      required rows={5}
                      style={{
                        width: '100%', padding: '12px 14px',
                        border: '2px solid #e8e8e8', borderRadius: '8px',
                        fontFamily: 'Arial, sans-serif', fontSize: '14px',
                        color: '#333', outline: 'none', resize: 'none',
                        background: '#fafafa',
                        transition: 'border-color 0.2s, background 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                      onBlur={e => { e.target.style.borderColor = '#e8e8e8'; e.target.style.background = '#fafafa'; }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', gap: '10px',
                      padding: '14px 28px', background: '#800d07',
                      color: '#ffffff', border: 'none', borderRadius: '8px',
                      fontFamily: 'Arial Black, sans-serif',
                      fontSize: '15px', fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'background 0.2s, transform 0.2s',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#a01109'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#800d07'; e.currentTarget.style.transform = 'none'; }}
                  >
                    Send Message
                    <Send size={17} />
                  </button>

                </form>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </>
  );
};

export default ContactPage;