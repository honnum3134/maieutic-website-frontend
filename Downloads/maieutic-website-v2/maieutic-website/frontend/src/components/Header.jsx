import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronDown, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NAV_BAR_COLOR = '#00615c'; // brand teal — change this one value to restyle the bar

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

const navItems = [
  { name: 'Home',        href: '/' },
  { name: 'Education',   href: '/education' },
  { name: 'Enterprise',  href: '/enterprise' },
  { name: 'Careers',     href: '/careers' },
  { name: 'Gallery',     href: '/gallery' },
];
  const aboutDropdownItems = [
    { name: 'Who We Are', href: '/whoweare' },
    { name: 'Our Team',   href: '/team' },
  ];

  const scrollToContact = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const isActive = (href) => location.pathname === href;
  const isAboutActive = aboutDropdownItems.some(i => location.pathname === i.href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 shadow-md"
    >

      {/* ── ROW 1: White — Logo left, ISO badge right ── */}
      <div className="bg-white px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-2">
        <Link to="/" aria-label="Go to Home">
          <img
            src="https://horizons-cdn.hostinger.com/aa5507df-b813-420f-b8e9-f20766fbbb05/91b58912bfc7b64b90d147e0034620d0.png"
            alt="Maieutic Edutech Pvt Ltd Logo"
          className="h-8 sm:h-10 lg:h-12 w-auto"
          />
        </Link>
        <img
          src="/iso.png"
          alt="ISO 9001:2015 Certified"
         className="h-10 sm:h-14 lg:h-16 w-auto"

        />
      </div>

      {/* ── ROW 2: Teal nav bar — links centered, socials right ── */}
      <nav style={{ backgroundColor: NAV_BAR_COLOR }}>
     <div className="px-3 sm:px-6 flex items-center justify-between h-11 min-h-[44px]">

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: isActive(item.href) ? '#FEF1DE' : 'rgba(255,255,255,0.90)',
                  textDecoration: isActive(item.href) ? 'underline' : 'none',
                  textUnderlineOffset: '4px',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={e => e.currentTarget.style.color = isActive(item.href) ? '#FEF1DE' : 'rgba(255,255,255,0.90)'}
              >
                {item.name}
              </Link>
            ))}

            {/* About Us dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: isAboutActive || isAboutDropdownOpen ? '#FEF1DE' : 'rgba(255,255,255,0.90)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                About Us
                <ChevronDown
                  size={15}
                  style={{
                    transition: 'transform 0.2s',
                    transform: isAboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsAboutDropdownOpen(false)}
                        className="block px-4 py-3 text-sm font-medium transition-colors duration-200"
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          color: isActive(item.href) ? '#800d07' : '#00615c',
                          backgroundColor: isActive(item.href) ? '#FEF1DE' : 'transparent',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = '#800d07';
                          e.currentTarget.style.backgroundColor = '#FEF1DE';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = isActive(item.href) ? '#800d07' : '#00615c';
                          e.currentTarget.style.backgroundColor = isActive(item.href) ? '#FEF1DE' : 'transparent';
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us — in the nav bar, same row */}
            <button
              onClick={scrollToContact}
              className="text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: 'rgba(255,255,255,0.90)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.90)'}
            >
              Contact Us
            </button>

          </div>

         {/* Social icons — right side, desktop only */}
          <div className="hidden lg:flex items-center gap-4 ml-6">
            <a href="https://www.linkedin.com/company/maieuticedutech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
               style={{ color: 'rgba(255,255,255,0.80)' }}
               onMouseEnter={e => e.currentTarget.style.color = '#fff'}
               onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}>
              <Linkedin size={17} />
            </a>
            <a href="https://www.youtube.com/@maieuticedutech" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
               style={{ color: 'rgba(255,255,255,0.80)' }}
               onMouseEnter={e => e.currentTarget.style.color = '#fff'}
               onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}>
              <Youtube size={17} />
            </a>
            <a href="https://www.instagram.com/maieuticedutech" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
               style={{ color: 'rgba(255,255,255,0.80)' }}
               onMouseEnter={e => e.currentTarget.style.color = '#fff'}
               onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}>
              <Instagram size={17} />
            </a>
            <a href="https://www.facebook.com/maieuticedutech" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
               style={{ color: 'rgba(255,255,255,0.80)' }}
               onMouseEnter={e => e.currentTarget.style.color = '#fff'}
               onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}>
              <Facebook size={17} />
            </a>
            <a href="https://x.com/maieuticedutech" target="_blank" rel="noopener noreferrer" aria-label="X"
               style={{ color: 'rgba(255,255,255,0.80)' }}
               onMouseEnter={e => e.currentTarget.style.color = '#fff'}
               onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.80)'}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-auto"
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.2)', overflow: 'hidden' }}
            >
              <div className="flex flex-col px-4 py-3 gap-1">

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium py-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: isActive(item.href) ? '#FEF1DE' : 'rgba(255,255,255,0.90)',
                    }}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* About Us mobile */}
                <div>
                  <button
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="flex items-center gap-1 w-full text-left text-sm font-medium py-2"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: isAboutActive ? '#FEF1DE' : 'rgba(255,255,255,0.90)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    About Us
                    <ChevronDown
                      size={15}
                      style={{
                        transition: 'transform 0.2s',
                        transform: isAboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {isAboutDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden', paddingLeft: '16px' }}
                      >
                        {aboutDropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block text-sm font-medium py-2"
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              color: isActive(item.href) ? '#FEF1DE' : 'rgba(255,255,255,0.80)',
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={scrollToContact}
                  className="text-sm font-medium py-2 text-left"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: 'rgba(255,255,255,0.90)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Contact Us
                </button>

                {/* Mobile socials */}
              <div className="flex items-center gap-3 flex-wrap py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '4px' }}>
                  <a href="https://www.facebook.com/maieuticedutech" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Facebook size={17} /></a>
                 <a href="https://x.com/maieuticedutech" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                 <a href="https://www.linkedin.com/company/maieuticedutech" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Linkedin size={17} /></a>
                  <a href="https://www.youtube.com/@maieuticedutech" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Youtube size={17} /></a>
                  <a href="https://www.instagram.com/maieuticedutech" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.80)' }}><Instagram size={17} /></a>
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
