import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_BASE, readTime } from '@/data/blogs';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: Math.min(i, 6) * 0.08, ease: 'easeOut' },
  }),
};

/* One blog tile — used on the listing grid and the "Continue reading" row. */
const BlogCard = ({ post, index = 0 }) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} custom={index}>
    <Link to={`${BLOG_BASE}/${post.slug}`} className="blog-card" aria-label={post.title}>
      <div className="blog-card__media">
        <img src={post.cover} alt={post.coverAlt} loading="lazy" decoding="async" />
        <span className={`blog-card__tag${index % 2 === 1 ? ' blog-card__tag--alt' : ''}`}>{post.tag}</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-meta">
          <span><Calendar size={13} />{post.date}</span>
          <span className="blog-meta__dot">•</span>
          <span><Clock size={13} />{readTime(post)}</span>
        </div>
        <h2 className="blog-card__title">{post.title}</h2>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <span className="blog-readmore">Read More <ArrowRight size={15} /></span>
      </div>
    </Link>
  </motion.div>
);

export default BlogCard;
