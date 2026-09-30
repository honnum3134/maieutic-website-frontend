import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { AUTHOR, BLOG_BASE, SITE_URL, categories, readTime, sortedBlogs } from '@/data/blogs';
import BlogCard from '@/components/BlogCard';
import '@/styles/blog.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const BlogsInsightsPage = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('All');

  const [featured, ...rest] = sortedBlogs;
  const visible = category === 'All' ? rest : sortedBlogs.filter((b) => b.tag === category);
  const showFeatured = category === 'All';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Maieutic Edutech — Blogs',
    url: `${SITE_URL}${BLOG_BASE}`,
    publisher: { '@type': 'Organization', name: 'Maieutic Edutech Private Limited', url: SITE_URL },
    blogPost: sortedBlogs.map((b) => ({
      '@type': 'BlogPosting',
      headline: b.title,
      url: `${SITE_URL}${BLOG_BASE}/${b.slug}`,
      datePublished: b.dateISO,
      image: `${SITE_URL}${b.cover}`,
      author: { '@type': 'Organization', name: AUTHOR.name },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Blogs | Maieutic Edutech</title>
        <meta
          name="description"
          content="Practical, field-tested articles on online programme design, LMS deployment, corporate learning, video production, and education marketing from the Maieutic Edutech team."
        />
        <link rel="canonical" href={`${SITE_URL}${BLOG_BASE}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div style={{ paddingTop: '116px' }}>

        {/* ── Hero ── */}
        <section style={{
          background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
          padding: '72px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.07) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0} style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '600', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#FEF1DE', marginBottom: '16px',
            }}>
              Ideas from the Maieutic team
            </motion.p>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} style={{
              fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: '700',
              color: '#ffffff', lineHeight: 1.2, marginBottom: '24px',
            }}>
              Blogs
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, maxWidth: '700px',
            }}>
              Practical, field-tested writing on building online programmes, designing courses that hold attention, running learning platforms, and marketing education that people trust.
            </motion.p>
          </div>
        </section>

        {/* ── Articles ── */}
        <section style={{ padding: '64px 24px 72px', maxWidth: '1040px', margin: '0 auto' }}>

          {/* Category filter */}
          <div className="blog-filters" role="tablist" aria-label="Filter articles by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                className={`blog-filter${category === c ? ' blog-filter--active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured / latest */}
          {showFeatured && (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link to={`${BLOG_BASE}/${featured.slug}`} className="blog-featured">
                <div className="blog-featured__media">
                  <img src={featured.cover} alt={featured.coverAlt} fetchpriority="high" />
                </div>
                <div className="blog-featured__body">
                  <span className="blog-featured__label">Latest article</span>
                  <div className="blog-meta">
                    <span style={{ color: '#00615c', fontWeight: 700 }}>{featured.tag}</span>
                    <span className="blog-meta__dot">•</span>
                    <span><Calendar size={13} />{featured.date}</span>
                    <span className="blog-meta__dot">•</span>
                    <span><Clock size={13} />{readTime(featured)}</span>
                  </div>
                  <h2 className="blog-featured__title">{featured.title}</h2>
                  <p className="blog-featured__excerpt">{featured.excerpt}</p>
                  <span className="blog-readmore">Read More <ArrowRight size={15} /></span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Grid */}
          <div className="blog-grid">
            {visible.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#f8fafb', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
              Want to talk through any of these topics?
            </h2>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '32px' }}>
              Our team is happy to discuss your specific learning or content challenge.
            </p>
            <button
              onClick={() => navigate('/contact')}
              style={{
                fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: '600', color: '#fff',
                backgroundColor: '#00615c', border: 'none', borderRadius: '8px', padding: '14px 36px', cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#004d49')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00615c')}
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
