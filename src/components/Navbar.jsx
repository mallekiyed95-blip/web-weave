import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSegment, setActiveSegment] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    const observerOptions = { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSegment(entry.target.id);
      });
    }, observerOptions);

    const sections = ['work', 'services', 'process', 'tech', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Stack', href: '#tech', id: 'tech' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: '-100%', transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
  };

  const linkVariants = {
    closed: { y: 80, opacity: 0 },
    open: (i) => ({
      y: 0, opacity: 1,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    })
  };

  /* ── Color tokens ── */
  const bg = isDark ? '#181818' : '#F8F6F0';
  const fg = isDark ? '#FFFFFF' : '#1C1C1C';
  const fgMuted = isDark ? '#9CA3AF' : '#6B7280';
  const borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(28,28,28,0.08)';
  const overlayBg = isDark ? '#181818' : '#F8F6F0';
  const navBg = isScrolled || isOpen
    ? (isDark ? 'rgba(24,24,24,0.85)' : 'rgba(248,246,240,0.85)')
    : 'transparent';

  return (
    <>
      <nav
        id="navbar"
        style={{
          backgroundColor: navBg,
          backdropFilter: isScrolled || isOpen ? 'blur(20px)' : 'none',
          borderBottom: isScrolled || isOpen ? `1px solid ${borderColor}` : 'none',
          transition: 'all 0.4s ease',
          transform: isHidden && !isOpen ? 'translateY(-100%)' : 'translateY(0)',
        }}
        className="fixed top-0 left-0 w-full z-[60] py-5 px-6 md:px-12 flex justify-between items-center"
      >
        {/* ── Logo + Theme Toggle (left) ── */}
        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          className="flex items-center gap-2.5 relative z-10 group"
          style={{
            backgroundColor: '#2A3B32',
            color: '#F8F6F0',
            borderRadius: '999px',
            padding: '8px 16px 8px 14px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '18px', letterSpacing: '0.02em' }}>
            Web Weave
          </span>
          {/* Moon / Sun icon */}
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px' }}>
            {isDark ? (
              /* Sun icon */
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </span>
        </button>

        {/* ── Centered nav links ── */}
        <div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="relative group transition-all duration-300"
              style={{ color: activeSegment === link.id ? fg : fgMuted }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300"
                style={{
                  backgroundColor: fg,
                  width: activeSegment === link.id ? '100%' : '0%',
                }}
              />
            </a>
          ))}
        </div>

        {/* ── Right: CTA + mobile hamburger ── */}
        <div className="flex items-center gap-5 relative z-10">
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-wide transition-all duration-300 hover:opacity-90"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              backgroundColor: '#2A3B32',
              color: '#F8F6F0',
              border: 'none',
              letterSpacing: '0.08em',
            }}
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }} className="w-6 h-px" style={{ backgroundColor: fg }} />
            <motion.div animate={{ opacity: isOpen ? 0 : 1 }} className="w-6 h-px" style={{ backgroundColor: fg }} />
            <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }} className="w-6 h-px" style={{ backgroundColor: fg }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] flex flex-col justify-center px-8 md:hidden"
            style={{ backgroundColor: overlayBg }}
          >
            <div className="flex flex-col gap-8">
              <p className="text-[10px] uppercase tracking-[0.5em] mb-4" style={{ color: fgMuted, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                Navigation
              </p>
              {navLinks.map((link, i) => (
                <motion.a
                  custom={i}
                  variants={linkVariants}
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold uppercase transition-colors"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                    color: fg,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div
              className="absolute bottom-12 left-8 right-8 flex justify-between items-end pt-8"
              style={{ borderTop: `1px solid ${borderColor}` }}
            >
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: fgMuted, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  Socials
                </p>
                <div className="flex gap-4 text-xs uppercase tracking-widest" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  <a href="#" style={{ color: fg }} className="hover:opacity-50 transition-opacity">TW</a>
                  <a href="#" style={{ color: fg }} className="hover:opacity-50 transition-opacity">IG</a>
                  <a href="#" style={{ color: fg }} className="hover:opacity-50 transition-opacity">BE</a>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: fgMuted, fontFamily: '"Plus Jakarta Sans", sans-serif' }}>©2024 Web Weave</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
