import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, Facebook, Linkedin, Youtube, Instagram, Search } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NAV_BAR_COLOR = '#00615c';

const SEARCH_DATA = [
  { label: 'Home',                         desc: 'Main landing page',                          href: '/',                                            category: 'Page'      },
  { label: 'Who We Are',                   desc: 'Our story, mission, and what drives us',     href: '/about-us',                                    category: 'Page'      },
  { label: 'Our Team',                     desc: 'The people behind Maieutic Edutech',         href: '/about-us#ceo',                                category: 'Page'      },
  { label: 'Careers',                      desc: 'Job openings at Maieutic Edutech',            href: '/careers',                                     category: 'Page'      },
  { label: 'Gallery',                      desc: 'Photos and events',                           href: '/gallery',                                     category: 'Page'      },
  { label: 'Contact Us',                   desc: 'Get in touch with our team',                  href: '/contact',                                     category: 'Page'      },
  { label: 'All Solutions',                desc: 'Overview of all 7 digital learning & corporate solutions', href: '/solutions',                   category: 'Solution'  },
  { label: 'Content Design & Development', desc: 'Instructional design & e-learning content',  href: '/solutions/content-design-development',         category: 'Solution'  },
  { label: 'Marketing, Digital Products',  desc: 'Ed-tech marketing & LMS network management', href: '/solutions/marketing-digital-products',         category: 'Solution'  },
  { label: 'Academic Delivery',            desc: 'MOOC, SWAYAM & multi-modal lecture production',            href: '/solutions/academic-delivery-student-success',  category: 'Solution'  },
  { label: 'LMS Deployment & Management',  desc: 'UGC-DEB compliant LMS setup & management',   href: '/solutions/lms-deployment-management',          category: 'Solution'  },
  { label: 'Interactive Models',           desc: 'Branching scenarios, SCORM, gamification',   href: '/solutions/interactive-models-articulate',      category: 'Solution'  },
  { label: 'Video Based Learning',         desc: 'Explainer, process & scenario-based videos', href: '/solutions/video-based-learning',               category: 'Solution'  },
  { label: '2D / 3D / Motion Graphics',    desc: 'Animation, motion design & visual storytelling', href: '/solutions/2d-3d-motion-graphics',          category: 'Solution'  },
  { label: 'Blogs & Insights',             desc: 'Articles and perspectives from our team',    href: '/resources/blogs-insights',                     category: 'Resource'  },
  { label: 'Case Studies',                 desc: 'Real outcomes from our engagements',          href: '/resources/case-studies',                       category: 'Resource'  },
  { label: 'REVA University Online',       desc: 'BCA, MBA, MCA online programmes — REVA',    href: '/contact',                                     category: 'University'},
  { label: 'PP Savani University',         desc: 'PPSU online degree programmes',              href: '/contact',                                     category: 'University'},
  { label: 'Admission Enquiry',            desc: 'Apply now or enquire about programmes',      href: '/contact',                                      category: 'Topic'     },
  { label: 'Our Clients', desc: 'Universities, ed-tech platforms and corporate partners', href: '/clients', category: 'Page' },
  { label: 'FAQs',                         desc: 'Frequently asked questions about our solutions', href: '/faqs',                                  category: 'Page'      },
  { label: 'Frequently Asked Questions',   desc: 'Answers on services, partnerships and support',  href: '/faqs',                                  category: 'Topic'     },
];

const CATEGORY_COLORS = {
  Page:       { bg: '#E6F1FB', text: '#0C447C' },
  Solution:   { bg: '#E6F5F0', text: '#00615c' },
  Resource:   { bg: '#EEEDFE', text: '#3C3489' },
  University: { bg: '#FAEEDA', text: '#633806' },
  Topic:      { bg: '#E1F5EE', text: '#085041' },
};

const SOLUTIONS_MENU = [
  {
    id: 'digital',
    label: 'Digital Learning',
    items: [
      { label: 'Content Design & Development',          desc: 'Instructional design & curriculum architecture', href: '/solutions/content-design-development'        },
      { label: 'LMS Deployment & Management',           desc: 'LMS setup and management',    href: '/solutions/lms-deployment-management'         },
      { label: 'Marketing, Digital Products & Network', desc: 'Ed-tech marketing',    href: '/solutions/marketing-digital-products'        },
      { label: 'Academic Delivery',   desc: 'MOOC, SWAYAM & learner retention strategies',   href: '/solutions/academic-delivery-student-success' },
    ],
  },
  {
    id: 'corporate',
    label: 'Corporate Solutions',
    items: [
      { label: 'Interactive Models & Articulate 360',   desc: 'Branching scenarios, SCORM & gamification',     href: '/solutions/interactive-models-articulate'     },
      { label: 'Video Based Learning',                  desc: 'Explainer, process & scenario-based videos',    href: '/solutions/video-based-learning'              },
      { label: '2D / 3D / Motion Graphics',             desc: 'Animation and motion design',href: '/solutions/2d-3d-motion-graphics'             },
    ],
  },
];

const RESOURCES_MENU = [
  { label: 'Blogs & Insights', desc: 'Articles and perspectives from our team', href: '/resources/blogs-insights' },
];

const ABOUT_MENU = [
  { label: 'Who We Are', desc: 'Our story, mission, and what drives us',  href: '/about-us' },
  { label: 'Our Team',   desc: 'The people behind Maieutic Edutech',      href: '/about-us#ceo' },
];

const Header = () => {
  const [isMobileMenuOpen,    setIsMobileMenuOpen]   = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSolutionsOpen,     setIsSolutionsOpen]    = useState(false);
  const [isResourcesOpen,     setIsResourcesOpen]    = useState(false);
  const [activeSolutionTab,   setActiveSolutionTab]  = useState('digital');
  const [query,               setQuery]              = useState('');
  const [results,             setResults]            = useState([]);
  const [searchOpen,          setSearchOpen]         = useState(false);
  const [highlighted,         setHighlighted]        = useState(-1);

  const dropdownRef  = useRef(null);
  const solutionsRef = useRef(null);
  const resourcesRef = useRef(null);
  const searchRef    = useRef(null);
  const inputRef     = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current  && !dropdownRef.current.contains(e.target))  setIsAboutDropdownOpen(false);
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) setIsSolutionsOpen(false);
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) setIsResourcesOpen(false);
      if (searchRef.current    && !searchRef.current.contains(e.target))    { setSearchOpen(false); setQuery(''); setResults([]); }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) { setResults([]); setHighlighted(-1); return; }
    setResults(
      SEARCH_DATA.filter(i =>
        i.label.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
      ).slice(0, 8)
    );
    setHighlighted(-1);
  }, [query]);

  const goTo = (href) => {
    navigate(href);
    setSearchOpen(false); setQuery(''); setResults([]);
    setIsMobileMenuOpen(false); setIsSolutionsOpen(false);
    setIsResourcesOpen(false); setIsAboutDropdownOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!results.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted(h => Math.min(h + 1, results.length - 1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setHighlighted(h => Math.max(h - 1, 0)); }
    if (e.key === 'Enter' && highlighted >= 0) goTo(results[highlighted].href);
    if (e.key === 'Escape') { setSearchOpen(false); setQuery(''); setResults([]); }
  };

  const isActive      = (href) => location.pathname === href;
  const isAboutActive = ABOUT_MENU.some(i => location.pathname === i.href);
  const isSolActive   = location.pathname === '/solutions'
    || SOLUTIONS_MENU.flatMap(g => g.items).some(i => location.pathname === i.href);
  const isResActive   = RESOURCES_MENU.some(i => location.pathname === i.href);
  const linkColor     = (active) => active ? '#FEF1DE' : 'rgba(255,255,255,0.90)';

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 shadow-md">

      {/* ROW 1 */}
      <div className="bg-white px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2">

        <Link to="/" aria-label="Go to Home" style={{ textDecoration: 'none' }}>
          <img
            src="https://horizons-cdn.hostinger.com/aa5507df-b813-420f-b8e9-f20766fbbb05/91b58912bfc7b64b90d147e0034620d0.png"
            alt="Maieutic Edutech Pvt Ltd Logo"
            style={{ height: '48px', width: 'auto', maxHeight: '56px' }}
          />
        </Link>

        {/* Search */}
        <div ref={searchRef} style={{ position: 'relative', flex: 1, maxWidth: '360px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: `1.5px solid ${searchOpen ? '#00615c' : '#d1d5db'}`, borderRadius: '8px', padding: '6px 12px', backgroundColor: '#fff', transition: 'border-color 0.2s' }}>
            <Search size={16} color="#00615c" strokeWidth={2} />
            <input
              ref={inputRef} type="text" value={query}
              placeholder="Search courses, services, pages…"
              onChange={e => { setQuery(e.target.value); setSearchOpen(true); }}
              onFocus={() => setSearchOpen(true)}
              onKeyDown={handleKeyDown}
              style={{ border: 'none', outline: 'none', background: 'transparent', fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#1a1a1a', width: '100%' }}
            />
            {query && (
              <button onClick={() => { setQuery(''); setResults([]); inputRef.current?.focus(); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                <X size={14} color="#888" />
              </button>
            )}
          </div>
          {searchOpen && results.length > 0 && (
            <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 200, overflow: 'hidden' }}>
              {results.map((item, idx) => {
                const cat = CATEGORY_COLORS[item.category] || { bg: '#f3f4f6', text: '#374151' };
                return (
                  <button key={idx} onClick={() => goTo(item.href)} onMouseEnter={() => setHighlighted(idx)}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '10px 14px', border: 'none', cursor: 'pointer', backgroundColor: highlighted === idx ? '#f0faf9' : '#fff', borderBottom: idx < results.length - 1 ? '1px solid #f3f4f6' : 'none', textAlign: 'left', transition: 'background 0.15s' }}>
                    <Search size={13} color="#00615c" strokeWidth={2} style={{ flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '500', color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</div>
                      <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.desc}</div>
                    </div>
                    <span style={{ flexShrink: 0, fontSize: '10px', fontWeight: '500', padding: '2px 7px', borderRadius: '4px', backgroundColor: cat.bg, color: cat.text, fontFamily: 'Poppins, sans-serif' }}>{item.category}</span>
                  </button>
                );
              })}
            </div>
          )}
          {searchOpen && query.trim() && results.length === 0 && (
            <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px', textAlign: 'center', zIndex: 200, fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#6b7280' }}>
              No results for "<strong>{query}</strong>"
            </div>
          )}
        </div>

        {/* Call Us */}
        <a href="tel:+919663727955" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', padding: '6px 18px', borderRadius: '8px', border: '1.5px solid #00615c', backgroundColor: '#f0faf9' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00615c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: '500', color: '#00615c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Us</span>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', fontWeight: '700', color: '#00615c' }}>+91 9663727955</span>
          </div>
        </a>

        <img src="/iso.png" alt="ISO 9001:2015 Certified" style={{ height: '56px', width: 'auto', maxHeight: '64px' }} />
      </div>

      {/* ROW 2 — order: Home · About Us · Solutions · Careers · Our Clients · Resources · Gallery · FAQs · Contact Us */}
      <nav style={{ backgroundColor: NAV_BAR_COLOR }}>
        <div className="px-3 sm:px-6 flex items-center justify-between h-11 min-h-[44px]">

          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">

            {/* 1. Home */}
            <Link to="/" className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/')), textDecoration: isActive('/') ? 'underline' : 'none', textUnderlineOffset: '4px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = linkColor(isActive('/'))}>
              Home
            </Link>

            {/* 2. About Us */}
            <Link to="/about-us" className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/about-us')), textDecoration: isActive('/about-us') ? 'underline' : 'none', textUnderlineOffset: '4px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = linkColor(isActive('/about-us'))}>
              About Us
            </Link>

            {/* 3. Solutions */}
            <div className="relative" ref={solutionsRef}>
              {/* Hover opens the 7-item dropdown; CLICK navigates to the
                  /solutions overview page. This also removes the old
                  hover-opens-then-click-closes conflict on touch devices —
                  a tap now simply navigates. */}
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onClick={() => goTo('/solutions')}
                className="flex items-center gap-1 text-sm font-medium whitespace-nowrap"
                style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isSolActive || isSolutionsOpen), background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                Solutions
                <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: isSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    style={{ position: 'absolute', top: 'calc(100% + 8px)', left: '-20px', width: '620px', backgroundColor: '#fff', borderRadius: '14px', boxShadow: '0 12px 40px rgba(0,0,0,0.14)', border: '1px solid #e5e7eb', overflow: 'hidden', zIndex: 300, display: 'flex' }}>
                    <div style={{ width: '210px', backgroundColor: '#f8fafb', borderRight: '1px solid #e5e7eb', padding: '16px 0' }}>
                      {SOLUTIONS_MENU.map(group => (
                        <button key={group.id}
                          onMouseEnter={() => setActiveSolutionTab(group.id)}
                          onClick={() => setActiveSolutionTab(group.id)}
                          style={{ display: 'block', width: '100%', textAlign: 'left', padding: '13px 20px', border: 'none', cursor: 'pointer', backgroundColor: activeSolutionTab === group.id ? '#fff' : 'transparent', borderLeft: activeSolutionTab === group.id ? '3px solid #00615c' : '3px solid transparent', fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: activeSolutionTab === group.id ? '600' : '400', color: activeSolutionTab === group.id ? '#00615c' : '#374151', transition: 'all 0.15s' }}>
                          {group.label}
                          <ChevronDown size={13} style={{ float: 'right', marginTop: '2px', transform: 'rotate(-90deg)', color: activeSolutionTab === group.id ? '#00615c' : '#9ca3af' }} />
                        </button>
                      ))}
                    </div>
                    <div style={{ flex: 1, padding: '16px 0' }}>
                      {SOLUTIONS_MENU.find(g => g.id === activeSolutionTab)?.items.map((item, idx) => (
                        <button key={idx} onClick={() => goTo(item.href)}
                          style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 20px', border: 'none', cursor: 'pointer', backgroundColor: 'transparent', transition: 'background 0.15s' }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0faf9'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '500', color: '#111827', marginBottom: '3px' }}>{item.label}</div>
                          <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#6b7280', lineHeight: 1.5 }}>{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Careers */}
            <Link to="/careers" className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/careers')), textDecoration: isActive('/careers') ? 'underline' : 'none', textUnderlineOffset: '4px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = linkColor(isActive('/careers'))}>
              Careers
            </Link>

            {/* Our Clients */}
            <Link to="/clients" className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/clients')), textDecoration: isActive('/clients') ? 'underline' : 'none', textUnderlineOffset: '4px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = linkColor(isActive('/clients'))}>
              Our Clients
            </Link>

            {/* 5. Resources */}
            <div className="relative" ref={resourcesRef}>
              <button
                onMouseEnter={() => setIsResourcesOpen(true)}
                onClick={() => setIsResourcesOpen(o => !o)}
                className="flex items-center gap-1 text-sm font-medium whitespace-nowrap"
                style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isResActive || isResourcesOpen), background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                Resources
                <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: isResourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                    className="absolute top-full left-0 mt-1 w-60 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50">
                    {RESOURCES_MENU.map(item => (
                      <button key={item.label} onClick={() => goTo(item.href)}
                        style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', border: 'none', cursor: 'pointer', backgroundColor: 'transparent', transition: 'background 0.15s' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0faf9'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: '500', color: '#111827', marginBottom: '2px' }}>{item.label}</div>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#6b7280' }}>{item.desc}</div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 6. Gallery */}
            <Link to="/gallery" className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/gallery')), textDecoration: isActive('/gallery') ? 'underline' : 'none', textUnderlineOffset: '4px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = linkColor(isActive('/gallery'))}>
              Gallery
            </Link>

            {/* 7. FAQs */}
            <Link to="/faqs" className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/faqs')), textDecoration: isActive('/faqs') ? 'underline' : 'none', textUnderlineOffset: '4px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = linkColor(isActive('/faqs'))}>
              FAQs
            </Link>

            {/* 8. Contact Us */}
            <button onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
              className="text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.90)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.90)'}>
              Contact Us
            </button>

          </div>

          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-4 ml-6">
            {[
              { href: 'https://in.linkedin.com/company/maieuticedutech',   label: 'LinkedIn',  icon: <Linkedin size={20} />  },
              { href: 'https://www.youtube.com/@maieuticedutech2018',       label: 'YouTube',   icon: <Youtube size={20} />   },
              { href: 'https://www.instagram.com/maieutic2018',             label: 'Instagram', icon: <Instagram size={20} /> },
              { href: 'https://www.facebook.com/maieuticedutech',           label: 'Facebook',  icon: <Facebook size={20} />  },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ color: 'rgba(255,255,255,0.80)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}>
                {icon}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button onClick={() => setIsMobileMenuOpen(o => !o)} className="lg:hidden ml-auto"
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu — same order, Enterprise removed */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.2)', overflow: 'hidden' }}>
              <div className="flex flex-col px-4 py-3 gap-1">

                {/* Mobile search */}
                <div style={{ position: 'relative', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '8px', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.3)' }}>
                    <Search size={15} color="#fff" strokeWidth={2} />
                    <input type="text" value={query} placeholder="Search courses, services…"
                      onChange={e => { setQuery(e.target.value); setSearchOpen(true); }}
                      onKeyDown={handleKeyDown}
                      style={{ border: 'none', outline: 'none', background: 'transparent', fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#fff', width: '100%' }} />
                    {query && (
                      <button onClick={() => { setQuery(''); setResults([]); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                        <X size={13} color="rgba(255,255,255,0.7)" />
                      </button>
                    )}
                  </div>
                  {results.length > 0 && (
                    <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', zIndex: 300, overflow: 'hidden' }}>
                      {results.map((item, idx) => {
                        const cat = CATEGORY_COLORS[item.category] || { bg: '#f3f4f6', text: '#374151' };
                        return (
                          <button key={idx} onClick={() => goTo(item.href)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%', padding: '9px 12px', border: 'none', cursor: 'pointer', backgroundColor: highlighted === idx ? '#f0faf9' : '#fff', borderBottom: idx < results.length - 1 ? '1px solid #f3f4f6' : 'none', textAlign: 'left' }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: '500', color: '#111827' }}>{item.label}</div>
                            </div>
                            <span style={{ fontSize: '10px', fontWeight: '500', padding: '1px 6px', borderRadius: '4px', backgroundColor: cat.bg, color: cat.text }}>{item.category}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 1. Home */}
                <Link to="/" className="text-sm font-medium py-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/')) }}>Home</Link>

                {/* 2. About Us — direct link */}
                <Link to="/about-us" className="text-sm font-medium py-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/about-us')) }}>
                  About Us
                </Link>

                {/* 3. Solutions */}
                <div>
                  <button onClick={() => setIsSolutionsOpen(o => !o)}
                    className="flex items-center gap-1 w-full text-left text-sm font-medium py-2"
                    style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isSolActive), background: 'none', border: 'none', cursor: 'pointer' }}>
                    Solutions
                    <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: isSolutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <AnimatePresence>
                    {isSolutionsOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden', paddingLeft: '12px' }}>
                        {/* Mobile has no hover, so the overview page gets an
                            explicit first entry inside the accordion. */}
                        <button onClick={() => goTo('/solutions')}
                          className="block w-full text-left text-sm py-2 px-1"
                          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', color: '#FEF1DE', background: 'none', border: 'none', cursor: 'pointer' }}>
                          All Solutions — Overview
                        </button>
                        {SOLUTIONS_MENU.map(group => (
                          <div key={group.id}>
                            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: '600', color: '#FEF1DE', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '8px 4px 4px' }}>
                              {group.label}
                            </div>
                            {group.items.map(item => (
                              <button key={item.href} onClick={() => goTo(item.href)}
                                className="block w-full text-left text-sm py-2 px-1"
                                style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.80)', background: 'none', border: 'none', cursor: 'pointer' }}>
                                {item.label}
                              </button>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. Careers */}
                <Link to="/careers" className="text-sm font-medium py-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/careers')) }}>Careers</Link>

                <Link to="/clients" className="text-sm font-medium py-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/clients')) }}>
                  Our Clients
                </Link>

                {/* 5. Resources */}
                <div>
                  <button onClick={() => setIsResourcesOpen(o => !o)}
                    className="flex items-center gap-1 w-full text-left text-sm font-medium py-2"
                    style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isResActive), background: 'none', border: 'none', cursor: 'pointer' }}>
                    Resources
                    <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: isResourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <AnimatePresence>
                    {isResourcesOpen && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden', paddingLeft: '16px' }}>
                        {RESOURCES_MENU.map(item => (
                          <button key={item.href} onClick={() => goTo(item.href)}
                            className="block w-full text-left py-2"
                            style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.80)', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <div style={{ fontSize: '13px', fontWeight: '500' }}>{item.label}</div>
                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>{item.desc}</div>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 6. Gallery */}
                <Link to="/gallery" className="text-sm font-medium py-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/gallery')) }}>Gallery</Link>

                {/* 7. FAQs */}
                <Link to="/faqs" className="text-sm font-medium py-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: linkColor(isActive('/faqs')) }}>FAQs</Link>

                {/* 8. Contact Us */}
                <button onClick={() => { navigate('/contact'); setIsMobileMenuOpen(false); }}
                  className="text-sm font-medium py-2 text-left"
                  style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.90)', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Contact Us
                </button>

                {/* Socials */}
                <div className="flex items-center gap-3 flex-wrap py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '4px' }}>
                  <a href="https://www.facebook.com/maieuticedutech"         target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Facebook size={17} /></a>
                  <a href="https://in.linkedin.com/company/maieuticedutech"  target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Linkedin size={17} /></a>
                  <a href="https://www.youtube.com/@maieuticedutech2018"      target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Youtube size={17} /></a>
                  <a href="https://www.instagram.com/maieutic2018"            target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Instagram size={17} /></a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </motion.header>
  );
};

export default Header;