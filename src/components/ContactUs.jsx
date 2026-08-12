import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@maieuticedutech.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 96637 27955',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      value: 'Mon – Fri: 9:00 AM – 6:00 PM (IST)',
    },
    {
      icon: MapPin,
      title: 'Our Location',
      value: '3rd Floor, School Building, Kenchenhalli Road, Near YGR Mall, Rajarajeshwari Nagar, Bengaluru – 560098',
    },
  ];

  return (
    <section id="contact" style={{ background: '#1a237e', padding: '0' }}>

      {/* ── TOP BANNER ── */}
      <div style={{
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 60%, #1a237e 100%)',
        padding: '60px 40px 40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* decorative circles */}
        <div style={{
          position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)',
          display: 'flex', gap: '24px', alignItems: 'center', opacity: 0.18,
          pointerEvents: 'none',
        }}>
          <div style={{ width: 120, height: 120, borderRadius: '50%', border: '18px solid #90caf9' }} />
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#ffd54f' }} />
          <div style={{ width: 110, height: 110, borderRadius: '50%', border: '14px solid #42a5f5' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontFamily: 'Arial Black, sans-serif',
            fontSize: '42px',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '12px',
            lineHeight: 1.2,
          }}>
            Contact Us
          </h2>
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.80)',
            maxWidth: '440px',
            lineHeight: 1.7,
          }}>
            We're here to assist you. Get in touch with us
            and we'll get back to you as soon as possible.
          </p>
        </motion.div>
      </div>

      {/* ── MAIN CARD ── */}
      <div style={{ padding: '0 40px 60px', background: '#1a237e' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            background: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >

          {/* LEFT — Let's Talk */}
          <div style={{
            padding: '40px 36px',
            borderRight: '1px solid #e8eaf6',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}>
            <h3 style={{
              fontFamily: 'Arial Black, sans-serif',
              fontSize: '22px',
              fontWeight: 800,
              color: '#1a237e',
              marginBottom: '4px',
            }}>
              Let's Talk
            </h3>

            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}
              >
                <div style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: '#e8eaf6',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <item.icon size={18} color="#1a237e" />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#1a237e',
                    marginBottom: '2px',
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '13px',
                    color: '#5c6bc0',
                    lineHeight: 1.5,
                  }}>
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Send Us a Message */}
          <div style={{ padding: '40px 40px' }}>
            <h3 style={{
              fontFamily: 'Arial Black, sans-serif',
              fontSize: '22px',
              fontWeight: 800,
              color: '#1a237e',
              marginBottom: '24px',
            }}>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'name',    placeholder: 'Full Name',      type: 'text' },
                { name: 'email',   placeholder: 'Email Address',   type: 'email' },
                { name: 'subject', placeholder: 'Subject',         type: 'text' },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.name !== 'subject'}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    border: '1px solid #c5cae9',
                    borderRadius: '6px',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    color: '#333',
                    outline: 'none',
                    background: '#fafafa',
                  }}
                  onFocus={e => { e.target.style.borderColor = '#1a237e'; e.target.style.background = '#fff'; }}
                  onBlur={e => { e.target.style.borderColor = '#c5cae9'; e.target.style.background = '#fafafa'; }}
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                style={{
                  width: '100%',
                  padding: '11px 14px',
                  border: '1px solid #c5cae9',
                  borderRadius: '6px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '14px',
                  color: '#333',
                  outline: 'none',
                  resize: 'none',
                  background: '#fafafa',
                }}
                onFocus={e => { e.target.style.borderColor = '#1a237e'; e.target.style.background = '#fff'; }}
                onBlur={e => { e.target.style.borderColor = '#c5cae9'; e.target.style.background = '#fafafa'; }}
              />

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '13px',
                  background: '#f9a825',
                  color: '#1a237e',
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: 'Arial Black, sans-serif',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.target.style.background = '#fbc02d'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.target.style.background = '#f9a825'; e.target.style.transform = 'none'; }}
              >
                Submit Message
              </button>
            </form>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default ContactUs;