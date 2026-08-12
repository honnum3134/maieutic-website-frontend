import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' }
  }),
};

const faqCategories = [
  {
    id: 'general',
    label: 'General',
    items: [
      {
        q: 'What is Maieutic Edutech?',
        a: 'Maieutic Edutech is an EdTech company focused on transforming learning through technology, digital learning solutions, and innovative learning approaches. We create engaging, accessible, and learner-centric educational experiences.',
      },
      {
        q: 'What does Maieutic Edutech offer?',
        a: 'We provide technology-driven education solutions designed to support students, educational institutions, and organizations. Our approach combines technology, creativity, and innovative learning methodologies to improve learning experiences.',
      },
      {
        q: 'What makes Maieutic Edutech different?',
        a: 'Maieutic Edutech takes a learner-centric approach to education, bringing together technology, creativity, and effective learning methodologies to create meaningful and engaging experiences.',
      },
      {
        q: 'How does Maieutic Edutech improve the learning experience?',
        a: 'We use digital learning technologies and innovative educational approaches to make learning interactive, engaging, flexible, and accessible while encouraging better learner participation and continuous learning.',
      },
    ],
  },
  {
    id: 'students',
    label: 'Students & Learners',
    items: [
      {
        q: "Who can benefit from Maieutic Edutech's solutions?",
        a: 'Our EdTech solutions are designed to support students and learners with different backgrounds, learning levels, and educational goals.',
      },
      {
        q: "Are Maieutic Edutech's solutions suitable for different age groups?",
        a: 'Yes. Our digital education solutions can be adapted to different learner profiles, academic levels, and learning environments to provide a more personalized learning experience.',
      },
      {
        q: 'How can Maieutic Edutech improve student engagement?',
        a: 'We focus on interactive learning, digital education, and learner-centric experiences that encourage students to participate actively, understand concepts better, and develop a stronger interest in learning.',
      },
      {
        q: 'Does Maieutic Edutech support online and digital learning?',
        a: 'Yes. We leverage digital learning technology and online learning approaches to create flexible, interactive, and accessible learning experiences.',
      },
    ],
  },
  {
    id: 'educators',
    label: 'Educators & Teaching',
    items: [
      {
        q: "Can educators use Maieutic Edutech's solutions?",
        a: 'Yes. Our EdTech solutions for educators are designed to complement teaching through innovative digital tools, resources, and learning approaches.',
      },
      {
        q: 'How can Maieutic Edutech support educators?',
        a: 'We help educators explore technology-enabled teaching solutions that can improve classroom engagement, support effective teaching practices, and enhance the overall learning experience.',
      },
      {
        q: 'Can Maieutic Edutech help improve teaching and learning outcomes?',
        a: 'Yes. By combining educational technology, learner-centric methodologies, and digital learning solutions, we aim to support better teaching practices and more meaningful learning outcomes.',
      },
    ],
  },
  {
    id: 'institutions',
    label: 'Educational Institutions',
    items: [
      {
        q: 'Does Maieutic Edutech provide solutions for educational institutions?',
        a: 'Yes. We work with schools, colleges, universities, and educational institutions to explore technology-driven solutions that enhance teaching, learning, student engagement, and academic experiences.',
      },
      {
        q: 'Can Maieutic Edutech provide customized EdTech solutions?',
        a: "Yes. We can develop customized education technology solutions based on an institution's specific requirements, learning objectives, audience, and operational needs.",
      },
      {
        q: 'Can Maieutic Edutech support digital transformation in education?',
        a: 'Yes. Our digital transformation solutions for education help institutions explore innovative ways to integrate technology into learning and teaching environments.',
      },
    ],
  },
  {
    id: 'organizations',
    label: 'Organizations & Partnerships',
    items: [
      {
        q: 'Does Maieutic Edutech work with organizations and businesses?',
        a: 'Yes. Our learning and technology solutions can support organizations looking to strengthen employee learning, professional development, training, and knowledge-building initiatives.',
      },
      {
        q: 'Can educational institutions and organizations partner with Maieutic Edutech?',
        a: 'Yes. We welcome opportunities to collaborate with educational institutions, educators, organizations, and strategic partners to develop innovative learning and technology solutions.',
      },
      {
        q: 'How can I partner with Maieutic Edutech?',
        a: "You can contact our team through the Contact Us section and share your requirements. We'll be happy to discuss potential EdTech partnerships, educational collaborations, and customized learning solutions.",
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact & Support',
    items: [
      {
        q: "How can I learn more about Maieutic Edutech's solutions?",
        a: 'You can connect with our team through the Contact Us section to learn more about our EdTech solutions, digital learning services, and educational technology offerings.',
      },
      {
        q: 'How can I get in touch with Maieutic Edutech?',
        a: 'You can reach out to us through our website for questions, solution enquiries, collaboration opportunities, or partnership discussions. Our team will be happy to assist you.',
      },
      {
        q: 'How can I stay updated with Maieutic Edutech?',
        a: 'Follow Maieutic Edutech through our website and social media channels for the latest updates, educational insights, learning initiatives, technology solutions, and announcements.',
      },
    ],
  },
];

const totalQuestions = faqCategories.reduce((sum, c) => sum + c.items.length, 0);

// ── schema.org FAQPage — enables rich results in Google search ────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap(cat =>
    cat.items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
};

const accentFor  = (i) => (i % 2 === 0 ? '#00615c' : '#800d07');
const tintFor    = (i) => (i % 2 === 0 ? '#f0faf9' : '#fff5f5');
const tintEdgeFor = (i) => (i % 2 === 0 ? '#d1ede9' : '#f5cac8');

// ── Single question — expand / collapse ───────────────────────────────────────
const AccordionItem = ({ item, isOpen, onToggle, accent, tint, tintEdge }) => (
  <div style={{
    backgroundColor: '#ffffff',
    border: `1px solid ${isOpen ? tintEdge : '#e5e7eb'}`,
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: isOpen ? '0 12px 32px rgba(0,97,92,0.10)' : '0 2px 8px rgba(0,0,0,0.04)',
    transition: 'border-color 0.25s, box-shadow 0.25s',
  }}>
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
        width: '100%', textAlign: 'left', padding: '20px 24px',
        background: 'transparent', border: 'none', cursor: 'pointer',
      }}
    >
      <span style={{
        fontFamily: 'Poppins, sans-serif', fontSize: '0.95rem', fontWeight: '500',
        color: isOpen ? accent : '#111827', lineHeight: 1.6, transition: 'color 0.2s',
      }}>
        {item.q}
      </span>
      <span style={{
        flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: isOpen ? accent : tint,
        color: isOpen ? '#ffffff' : accent,
        border: `1px solid ${isOpen ? accent : tintEdge}`,
        transition: 'all 0.25s',
      }}>
        {isOpen ? <Minus size={15} strokeWidth={2.4} /> : <Plus size={15} strokeWidth={2.4} />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.26, ease: 'easeOut' }}
          style={{ overflow: 'hidden' }}
        >
          <p style={{
            fontFamily: 'Poppins, sans-serif', fontSize: '0.88rem', color: '#4b5563',
            lineHeight: 1.85, margin: 0, padding: '0 24px 24px',
            borderTop: '1px solid #f3f4f6', paddingTop: '18px',
          }}>
            {item.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQPage = () => {
  const navigate = useNavigate();

  const [isMobile,        setIsMobile]        = useState(window.innerWidth < 992);
  const [activeCategory,  setActiveCategory]  = useState(faqCategories[0].id);
  const [openKeys,        setOpenKeys]        = useState([]);

  const sectionRefs = useRef({});
  const listTopRef  = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop scrollspy — highlights the category currently in view
  useEffect(() => {
    if (isMobile) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.dataset.category);
        });
      },
      { rootMargin: '-150px 0px -65% 0px', threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  const toggle = (key) =>
    setOpenKeys(keys => keys.includes(key) ? keys.filter(k => k !== key) : [...keys, key]);

  const scrollTo = (el) => {
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 150, behavior: 'smooth' });
  };

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    if (isMobile) {
      setOpenKeys([]);
      scrollTo(listTopRef.current);
    } else {
      scrollTo(sectionRefs.current[id]);
    }
  };

  const visibleCategories = isMobile
    ? faqCategories.filter(c => c.id === activeCategory)
    : faqCategories;

  return (
    <>
      <Helmet>
        <title>FAQs | Maieutic Edutech</title>
        <meta name="description" content="Explore Maieutic Edutech’s FAQs to learn about our EdTech solutions, digital learning services, educational technology, learner-centric approaches, and solutions for students, educators, and institutions." />
        <link rel="canonical" href="https://maieuticedutech.com/faqs" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* ── HERO ── */}
        <section style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
          padding: '72px 24px 80px',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '16px' }}>
              Help Centre
            </motion.p>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: '700', color: '#ffffff', lineHeight: 1.2, marginBottom: '24px' }}>
              Frequently Asked Questions
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px' }}>
              Answers to the questions we hear most often — about who we are, what we build, and how we work with learners, educators, institutions and organizations.
            </motion.p>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.62)', marginTop: '28px', letterSpacing: '0.04em' }}>
              {totalQuestions} questions · {faqCategories.length} categories
            </motion.p>
          </div>
        </section>

        {/* ── FAQ BODY ── */}
        <section style={{ padding: '72px 24px', backgroundColor: '#ffffff' }}>
          <div style={{
            maxWidth: '1180px', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '250px 1fr',
            gap: isMobile ? '28px' : '56px',
            alignItems: 'start',
          }}>

            {/* Category nav — sticky rail on desktop, filter chips on mobile */}
            {isMobile ? (
              <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px', WebkitOverflowScrolling: 'touch' }}>
                {faqCategories.map((cat, i) => {
                  const active = activeCategory === cat.id;
                  return (
                    <button key={cat.id} onClick={() => handleCategoryClick(cat.id)}
                      style={{
                        flexShrink: 0, cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: active ? '600' : '500',
                        padding: '9px 18px', borderRadius: '20px',
                        color: active ? '#ffffff' : '#374151',
                        backgroundColor: active ? accentFor(i) : tintFor(i),
                        border: `1px solid ${active ? accentFor(i) : tintEdgeFor(i)}`,
                        transition: 'all 0.2s', whiteSpace: 'nowrap',
                      }}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            ) : (
              <nav style={{ position: 'sticky', top: '150px' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00615c', marginBottom: '18px' }}>
                  Browse by Topic
                </p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {faqCategories.map((cat, i) => {
                    const active = activeCategory === cat.id;
                    return (
                      <button key={cat.id} onClick={() => handleCategoryClick(cat.id)}
                        style={{
                          textAlign: 'left', cursor: 'pointer',
                          fontFamily: 'Poppins, sans-serif', fontSize: '13px',
                          fontWeight: active ? '600' : '400',
                          color: active ? accentFor(i) : '#6b7280',
                          backgroundColor: active ? tintFor(i) : 'transparent',
                          border: 'none',
                          borderLeft: `3px solid ${active ? accentFor(i) : '#e5e7eb'}`,
                          padding: '12px 16px',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { if (!active) e.currentTarget.style.color = '#111827'; }}
                        onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#6b7280'; }}>
                        {cat.label}
                        <span style={{ float: 'right', fontSize: '11px', color: '#9ca3af', fontWeight: '400' }}>
                          {cat.items.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </nav>
            )}

            {/* Questions */}
            <div ref={listTopRef} style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {visibleCategories.map((cat) => {
                const i = faqCategories.findIndex(c => c.id === cat.id);
                return (
                  <div key={cat.id}
                    ref={el => { sectionRefs.current[cat.id] = el; }}
                    data-category={cat.id}
                    style={{ scrollMarginTop: '150px' }}>

                    <motion.h2
                      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                      style={{
                        fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.25rem, 2.6vw, 1.6rem)',
                        fontWeight: '700', color: '#111827', marginBottom: '20px',
                        paddingBottom: '12px', borderBottom: `2px solid ${tintEdgeFor(i)}`,
                      }}>
                      {cat.label}
                    </motion.h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {cat.items.map((item, idx) => {
                        const key = `${cat.id}-${idx}`;
                        return (
                          <motion.div key={key}
                            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}>
                            <AccordionItem
                              item={item}
                              isOpen={openKeys.includes(key)}
                              onToggle={() => toggle(key)}
                              accent={accentFor(i)}
                              tint={tintFor(i)}
                              tintEdge={tintEdgeFor(i)}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Still have a question?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Tell us what you are looking for — our team will get back to you.
            </p>
            <button onClick={() => navigate('/contact')}
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600', color: '#fff', backgroundColor: '#00615c', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#004d49'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00615c'}>
              Get in Touch
            </button>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default FAQPage;
