import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Height of the fixed header — an anchored section scrolled flush to the top
// of the viewport would otherwise sit underneath it.
const HEADER_OFFSET = 116;

// Deep-linked sections can live inside a lazily-loaded route chunk, so the
// target often isn't in the DOM yet on a cold load. Retry for up to this long.
const ANCHOR_TIMEOUT_MS = 2000;

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    let frame;
    const deadline = Date.now() + ANCHOR_TIMEOUT_MS;

    const scrollToAnchor = () => {
      // getElementById rather than querySelector: an odd hash like "#123" is
      // an invalid CSS selector and would throw.
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (Date.now() < deadline) {
        frame = requestAnimationFrame(scrollToAnchor);
      }
    };

    frame = requestAnimationFrame(scrollToAnchor);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
