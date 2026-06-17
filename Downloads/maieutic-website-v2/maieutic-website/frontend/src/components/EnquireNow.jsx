import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const EnquireNow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', course: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://maieutic-backend-production.up.railway.app/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:     formData.name,
          email:    formData.email,
          phone:    formData.phone,
          interest: formData.course,
          message:  formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: '✅ Enquiry Submitted Successfully!',
          description: 'Thank you! Our team will reach out to you within 24 hours.',
        });
        setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        setIsOpen(false);
      } else {
        toast({ title: 'Error', description: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      toast({ title: 'Error', description: 'Could not connect to server. Please try again.' });
    }
  };

  return (
    <>
      {/* ── STICKY VERTICAL BUTTON ── */}
      <div
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          right: 0,
          top: '180px',
          zIndex: 999,
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          background: '#800d07',
          color: '#ffffff',
          padding: '18px 10px',
         borderRadius: '0 8px 8px 0',
          fontFamily: 'Arial Black, sans-serif',
          fontSize: '13px',
          fontWeight: 800,
          letterSpacing: '0.08em',
          cursor: 'pointer',
          boxShadow: '-4px 0 16px rgba(128,13,7,0.35)',
          userSelect: 'none',
          transition: 'background 0.2s, padding 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#a01109'; e.currentTarget.style.paddingRight = '14px'; }}
        onMouseLeave={e => { e.currentTarget.style.background = '#800d07'; e.currentTarget.style.paddingRight = '10px'; }}
      >
        ENQUIRE NOW
      </div>

      {/* ── MODAL OVERLAY ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.55)',
                zIndex: 1000,
                backdropFilter: 'blur(3px)',
              }}
            />

            {/* form panel — slides in from right */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '420px',
                maxWidth: '100vw',
                background: '#ffffff',
                zIndex: 1001,
                overflowY: 'auto',
                boxShadow: '-8px 0 40px rgba(0,0,0,0.20)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* header */}
              <div style={{
                background: 'linear-gradient(135deg, #00615c 0%, #004d49 100%)',
                padding: '28px 28px 24px',
                position: 'relative',
              }}>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none', borderRadius: '50%',
                    width: '32px', height: '32px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', color: '#fff',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.30)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                >
                  <X size={16} />
                </button>
                <h2 style={{
                  fontFamily: 'Arial Black, sans-serif',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '6px',
                }}>
                  Enquire Now
                </h2>
                <p style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.80)',
                  lineHeight: 1.5,
                }}>
                  Fill in your details and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* form body */}
              <form
                onSubmit={handleSubmit}
                style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}
              >
                {[
                  { name: 'name',    label: 'Full Name',       type: 'text',  placeholder: 'Enter your name',         required: true  },
                  { name: 'email',   label: 'Email Address',   type: 'email', placeholder: 'Enter your email',        required: true  },
                  { name: 'phone',   label: 'Phone Number',    type: 'tel',   placeholder: 'Enter your phone number', required: true  },
                  { name: 'course',  label: 'Area of Interest', type: 'text', placeholder: 'e.g. OPM, Enterprise Learning', required: false },
                ].map((field) => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#00615c',
                      marginBottom: '6px',
                    }}>
                      {field.label}{field.required && <span style={{ color: '#800d07' }}> *</span>}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        border: '1.5px solid #d0d0d0',
                        borderRadius: '7px',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '14px',
                        color: '#333',
                        outline: 'none',
                        background: '#fafafa',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                      onBlur={e => { e.target.style.borderColor = '#d0d0d0'; e.target.style.background = '#fafafa'; }}
                    />
                  </div>
                ))}

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#00615c',
                    marginBottom: '6px',
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1.5px solid #d0d0d0',
                      borderRadius: '7px',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '14px',
                      color: '#333',
                      outline: 'none',
                      resize: 'none',
                      background: '#fafafa',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => { e.target.style.borderColor = '#00615c'; e.target.style.background = '#fff'; }}
                    onBlur={e => { e.target.style.borderColor = '#d0d0d0'; e.target.style.background = '#fafafa'; }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '13px',
                    background: '#800d07',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '7px',
                    fontFamily: 'Arial Black, sans-serif',
                    fontSize: '15px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'background 0.2s, transform 0.2s',
                    marginTop: '4px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#a01109'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#800d07'; e.currentTarget.style.transform = 'none'; }}
                >
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnquireNow;
