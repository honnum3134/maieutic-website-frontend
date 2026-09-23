import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: 'easeOut'
    }
  }),
};

const blogs = [
  {
    tag: 'Learning Science',
    title: 'The Science of Why Traditional Studying Fails',
    excerpt: 'Highlighting, re-reading, and cramming feel productive — but the evidence says otherwise. We break down what cognitive science actually tells us about effective learning and what that means for how we design content.',
    date: 'Jul 2026',
    pdfPath: '/blogs/The Science of Why Traditional Studying Fails.pdf',
    readMore: true,
    comingSoon: false,
  },
  {
    tag: 'Learning Science',
    title: '5 Study Techniques Backed by Cognitive Science That Actually Work',
    excerpt: 'Most students study the same way — reread, highlight, cram. Decades of research show these are among the least effective strategies. Here are five evidence-based techniques that actually improve retention and academic performance.',
    date: 'Jul 2026',
    pdfPath: '/blogs/5-Study-Techniques-Maieutic-Edutech-Beautified.pdf',
    readMore: true,
    comingSoon: false,
  },
  {
    tag: 'AI & Learning',
    title: 'How AI Is Personalizing Learning Paths in 2026',
    excerpt: 'The classroom is quietly splitting into millions of individual ones. Here is the mechanism behind AI-driven personalized learning — what it actually does, where the evidence stands, and what is still unresolved.',
    date: 'Aug 2026',
    pdfPath: '/blogs/How_AI_Is_Personalizing_Learning_Paths_in_2026.pdf',
    readMore: true,
    comingSoon: false,
  },
  {
    tag: 'Success Story',
    title: "Ananya's Journey: A Maieutic Learner Case Study",
    excerpt: "How one learner's path through a Maieutic-supported online programme illustrates what structured content, mentoring, and support can change — a real-world case study.",
    date: 'Aug 2026',
    pdfPath: '/blogs/Ananya_Case_Study_Maieutic.pdf',
    readMore: true,
    comingSoon: false,
  },
  {
    tag: 'EdTech Trends',
    title: 'The State of EdTech in 2026: What Every Student Needs to Know',
    excerpt: 'Five years ago, online learning meant pre-recorded lectures and a discussion forum nobody checked. In 2026, that description feels almost quaint. A look at the trends, technologies, and opportunities shaping education right now.',
    date: 'Aug 2026',
    pdfPath: '/blogs/State-of-EdTech-2026_Blog 1.pdf',
    readMore: true,
    comingSoon: false,
  },
  {
    tag: 'Teaching & Mentorship',
    title: 'Behind the Whiteboard: A Conversation with Our Top-Rated Mentor',
    excerpt: 'Go beyond the classroom and discover the passion, purpose, and philosophy that shape exceptional teaching. A look at the life and mindset of one of our most inspiring mentors — beyond the lesson plans and presentations.',
    date: 'Aug 2026',
    pdfPath: '/blogs/Behind the Whiteboard 1.pdf',
    readMore: true,
    comingSoon: false,
  },
  {
    tag: 'Platform News',
    title: 'New Cohort Launch: What\'s Different This Term?',
    excerpt: 'A new term means a new cohort — and this one comes with more changes than usual. Rebuilt AI tutor, three new career-aligned tracks, expanded live mentorship, and credentials that actually hold up when you are job-hunting.',
    date: 'Sep 2026',
    pdfPath: '/blogs/New-Cohort-Launch-Maieutic-Edutech.pdf',
    readMore: true,
    comingSoon: false,
  },
];

const BlogsInsightsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Blogs & Insights | Maieutic Edutech</title>
        <meta
          name="description"
          content="Perspectives on instructional design, LMS deployment, corporate learning, video production, and ed-tech marketing from the Maieutic Edutech team."
        />
        <link
          rel="canonical"
          href="https://maieuticedutech.com/resources/blogs-insights"
        />
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        <section
          style={{
            background:
              'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
            padding: '72px 24px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FEF1DE',
                marginBottom: '16px',
              }}
            >
              Resources
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: '700',
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              Blogs &amp; Insights
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.75,
                maxWidth: '700px',
              }}
            >
              Perspectives on instructional design, academic delivery,
              corporate learning, and ed-tech — written by the people doing
              the work.
            </motion.p>
          </div>
        </section>

        <section
          style={{
            padding: '72px 24px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {blogs.map((blog, i) => (
                              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '14px',
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s',
                  cursor: blog.readMore ? 'pointer' : 'default',
                }}
                onMouseEnter={e =>
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0,0,0,0.10)'
                }
                onMouseLeave={e =>
                  e.currentTarget.style.boxShadow = 'none'
                }
                onClick={() =>
                  blog.readMore &&
                  window.open(blog.pdfPath, '_blank')
                }
              >
                {/* Colour bar */}
                <div
                  style={{
                    height: '4px',
                    background:
                      i % 2 === 0 ? '#00615c' : '#800d07',
                  }}
                />

                <div
                  style={{
                    padding: '28px 28px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '10px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color:
                          i % 2 === 0
                            ? '#00615c'
                            : '#800d07',
                        backgroundColor:
                          i % 2 === 0
                            ? '#f0faf9'
                            : '#fff5f5',
                        padding: '3px 10px',
                        borderRadius: '4px',
                      }}
                    >
                      {blog.tag}
                    </span>

                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        color: '#9ca3af',
                      }}
                    >
                      {blog.date}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: '#111827',
                      lineHeight: 1.4,
                      marginBottom: '12px',
                      flex: 1,
                    }}
                  >
                    {blog.title}
                  </h2>

                  <p
                    style={{
                      fontFamily:
                        'Poppins, sans-serif',
                      fontSize: '0.85rem',
                      color: '#6b7280',
                      lineHeight: 1.7,
                      marginBottom: '20px',
                    }}
                  >
                    {blog.excerpt}
                  </p>

                  {/* Read More / Coming Soon */}
                  <div
                    onClick={e => {
                      e.stopPropagation();

                      if (blog.readMore) {
                        window.open(
                          blog.pdfPath,
                          '_blank'
                        );
                      }
                    }}
                    style={{
                      fontFamily:
                        'Poppins, sans-serif',
                      fontSize: '12px',
                      fontWeight: '600',
                      color:
                        i % 2 === 0
                          ? '#00615c'
                          : '#800d07',
                      cursor: blog.readMore
                        ? 'pointer'
                        : 'default',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                    onMouseEnter={e => {
                      if (blog.readMore) {
                        e.currentTarget.style.opacity =
                          '0.75';
                      }
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.opacity =
                        '1';
                    }}
                  >
                    {blog.comingSoon
                      ? 'Coming Soon'
                      : 'Read More →'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: '#f8fafb',
            padding: '64px 24px',
            textAlign: 'center',
            borderTop: '1px solid #e5e7eb',
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  'clamp(1.4rem, 3vw, 1.9rem)',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '12px',
              }}
            >
              Want to talk through any of these topics?
            </h2>

            <p
              style={{
                fontFamily:
                  'Poppins, sans-serif',
                fontSize: '0.9rem',
                color: '#6b7280',
                marginBottom: '32px',
              }}
            >
              Our team is happy to discuss your
              specific learning or content challenge.
            </p>

            <button
              onClick={() =>
                navigate('/contact')
              }
              style={{
                fontFamily:
                  'Poppins, sans-serif',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#fff',
                backgroundColor: '#00615c',
                border: 'none',
                borderRadius: '8px',
                padding: '14px 36px',
                cursor: 'pointer',
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.backgroundColor =
                  '#004d49')
              }
              onMouseLeave={e =>
                (e.currentTarget.style.backgroundColor =
                  '#00615c')
              }
            >
              Get in Touch
            </button>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default BlogsInsightsPage;