import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Linkedin, Twitter, MessageCircle, Link2, Check } from 'lucide-react';
import { AUTHOR, BLOG_BASE, SITE_URL, getBlog, readTime, slugify, sortedBlogs } from '@/data/blogs';
import BlogCard from '@/components/BlogCard';
import '@/styles/blog.css';

/* ─── Inline markup: **bold** only ─────────────────────────────────────── */
const rich = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );

/* ─── Block renderer ────────────────────────────────────────────────────── */
const renderBlock = (b, i) => {
  switch (b.type) {
    case 'lede':
      return <p key={i} className="blog-lede">{rich(b.text)}</p>;
    case 'p':
      return <p key={i}>{rich(b.text)}</p>;
    case 'h2':
      return (
        <h2 key={i} id={slugify(b.text)}>
          {b.kicker && <span className="blog-kicker">{b.kicker}</span>}
          {b.text}
        </h2>
      );
    case 'h3':
      return <h3 key={i}>{b.text}</h3>;
    case 'ul':
      return <ul key={i}>{b.items.map((t, j) => <li key={j}>{rich(t)}</li>)}</ul>;
    case 'ol':
      return <ol key={i}>{b.items.map((t, j) => <li key={j}>{rich(t)}</li>)}</ol>;
    case 'quote':
      return (
        <blockquote key={i}>
          “{b.text}”
          {b.cite && <cite>— {b.cite}</cite>}
        </blockquote>
      );
    case 'callout':
      return (
        <div key={i} className={`blog-callout${b.tone === 'warm' ? ' blog-callout--warm' : ''}`}>
          {b.title && <div className="blog-callout__title">{b.title}</div>}
          <p>{rich(b.text)}</p>
        </div>
      );
    case 'figure':
      return (
        <figure key={i}>
          <img src={b.src} alt={b.alt} loading="lazy" decoding="async" />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      );
    case 'table':
      return (
        <div key={i} className="blog-table-wrap">
          <table>
            <thead><tr>{b.head.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{rich(c)}</td>)}</tr>)}
            </tbody>
          </table>
        </div>
      );
    case 'stats':
      return (
        <div key={i} className="blog-stats">
          {b.items.map((s, j) => (
            <div key={j} className="blog-stat">
              <div className="blog-stat__value">{s.value}</div>
              <div className="blog-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      );
    case 'cards':
      return (
        <div key={i} className="blog-cards">
          {b.items.map((c, j) => (
            <div key={j} className="blog-cards__item">
              <h4>{c.title}</h4>
              <p>{rich(c.text)}</p>
            </div>
          ))}
        </div>
      );
    case 'faq':
      return (
        <div key={i} className="blog-faq">
          {b.items.map((f, j) => (
            <details key={j}>
              <summary>{f.q}</summary>
              <p>{rich(f.a)}</p>
            </details>
          ))}
        </div>
      );
    default:
      return null;
  }
};

/* ─── Reading progress bar ──────────────────────────────────────────────── */
const useReadingProgress = () => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? Math.min(100, (h.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pct;
};

/* ─── Active TOC heading ────────────────────────────────────────────────── */
const useActiveHeading = (ids) => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    if (!ids.length || typeof IntersectionObserver === 'undefined') return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-130px 0px -60% 0px', threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
};

/* ─── Share bar ─────────────────────────────────────────────────────────── */
const ShareBar = ({ url, title }) => {
  const [copied, setCopied] = useState(false);
  const enc = encodeURIComponent;
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* ignore */ }
  };
  return (
    <div className="blog-share">
      <span className="blog-share__label">Share</span>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><Linkedin size={17} /></a>
      <a href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X"><Twitter size={17} /></a>
      <a href={`https://wa.me/?text=${enc(title + ' ' + url)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"><MessageCircle size={17} /></a>
      <button type="button" onClick={copy} aria-label="Copy link">{copied ? <Check size={17} /> : <Link2 size={17} />}</button>
    </div>
  );
};

/* ─── Page ──────────────────────────────────────────────────────────────── */
const BlogPostPage = () => {
  const { slug } = useParams();
  const post = getBlog(slug);
  const progress = useReadingProgress();

  const headings = useMemo(
    () => (post ? post.body.filter((b) => b.type === 'h2').map((b) => ({ id: slugify(b.text), text: b.text })) : []),
    [post]
  );
  const headingIds = useMemo(() => headings.map((h) => h.id), [headings]);
  const active = useActiveHeading(headingIds);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);

  if (!post) return <Navigate to={BLOG_BASE} replace />;

  const url = `${SITE_URL}${BLOG_BASE}/${post.slug}`;
  const related = sortedBlogs.filter((b) => b.slug !== post.slug).slice(0, 3);
  const minutes = readTime(post);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { '@type': 'Organization', name: 'Maieutic Edutech Private Limited', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Maieutic Edutech Private Limited', logo: { '@type': 'ImageObject', url: `${SITE_URL}/MaieuticFav.png` } },
    mainEntityOfPage: url,
    keywords: post.keywords.join(', '),
    articleSection: post.tag,
  };

  return (
    <>
      <Helmet>
        <title>{`${post.seoTitle || post.title} | Maieutic Edutech`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`${SITE_URL}${post.cover}`} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="blog-progress" style={{ width: `${progress}%` }} aria-hidden="true" />

      <div style={{ paddingTop: '116px', backgroundColor: '#fff' }}>

        {/* ── Hero ── */}
        <section style={{
          background: 'linear-gradient(135deg, #00615c 0%, #004d49 60%, #800d07 100%)',
          padding: '56px 24px 120px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top right, rgba(255,255,255,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <nav className="blog-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link><span>›</span>
              <Link to={BLOG_BASE}>Blogs &amp; Insights</Link><span>›</span>
              <span>{post.tag}</span>
            </nav>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <span className="blog-hero__tag">{post.tag}</span>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.9rem, 4.2vw, 3rem)',
                fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '18px',
              }}>
                {post.title}
              </h1>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.05rem', color: 'rgba(255,255,255,0.86)', lineHeight: 1.7, maxWidth: '720px', fontWeight: 300 }}>
                {post.subtitle}
              </p>
              <div className="blog-hero__meta">
                <span><User size={14} />{AUTHOR.name}</span>
                <span><Calendar size={14} />{post.date}</span>
                <span><Clock size={14} />{minutes}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Cover image ── */}
        <motion.div className="blog-cover" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}>
          <img src={post.cover} alt={post.coverAlt} fetchpriority="high" />
          {post.coverCredit && <div className="blog-cover__credit">Photo: {post.coverCredit}</div>}
        </motion.div>

        {/* ── Body + TOC ── */}
        <div className="blog-layout">
          <article className="blog-article">
            {post.body.map(renderBlock)}

            <div className="blog-tags">
              {post.keywords.map((k) => <span key={k}>{k}</span>)}
            </div>

            <ShareBar url={url} title={post.title} />

            <div className="blog-author">
              <div className="blog-author__avatar">{AUTHOR.initials}</div>
              <div>
                <div className="blog-author__name">{AUTHOR.name}</div>
                <div className="blog-author__bio">{AUTHOR.bio}</div>
              </div>
            </div>

            <Link to={BLOG_BASE} className="blog-back"><ArrowLeft size={16} /> Back to all articles</Link>
          </article>

          {headings.length > 2 && (
            <aside className="blog-toc" aria-label="Table of contents">
              <div className="blog-toc__title">In this article</div>
              <ol>
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className={active === h.id ? 'active' : ''}>{h.text}</a>
                  </li>
                ))}
              </ol>
            </aside>
          )}
        </div>

        {/* ── Related ── */}
        <section className="blog-related">
          <div className="blog-related__inner">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
              <h2 className="blog-related__heading">Continue reading</h2>
              <Link to={BLOG_BASE} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 600, color: '#00615c', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                All articles <ArrowRight size={15} />
              </Link>
            </div>
            <div className="blog-grid">
              {related.map((b, i) => <BlogCard key={b.slug} post={b} index={i} />)}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: '#fff', padding: '64px 24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>
            Want to talk through this topic?
          </h2>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', color: '#6b7280', marginBottom: '28px' }}>
            Our team is happy to discuss your specific learning or content challenge.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block', fontFamily: 'Poppins, sans-serif', fontSize: '0.9rem', fontWeight: 600,
            color: '#fff', backgroundColor: '#00615c', borderRadius: '8px', padding: '14px 36px', textDecoration: 'none',
          }}>
            Get in Touch
          </Link>
        </section>
      </div>
    </>
  );
};

export default BlogPostPage;
