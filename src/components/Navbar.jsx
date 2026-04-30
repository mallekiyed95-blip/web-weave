import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSegment, setActiveSegment] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      setScrollProgress((currentScrollY / totalHeight) * 100);
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSegment(entry.target.id);
        }
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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Stack', href: '#tech', id: 'tech' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const linkVariants = {
    closed: { y: 80, opacity: 0 },
    open: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    })
  };

  return (
    <>
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 w-full z-[60] py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isHidden && !isOpen ? '-translate-y-full' : 'translate-y-0'} ${isScrolled || isOpen ? 'glass-nav py-4' : 'bg-transparent'}`}
      >
        <div className="font-display relative z-10">
          <a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-3">
            <span className="text-lg md:text-xl font-display font-medium tracking-tight text-charcoal italic">Web Weave</span>
          </a>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-xs uppercase tracking-wider font-sans font-medium text-charcoal">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className={`transition-all duration-300 relative group ${activeSegment === link.id ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-charcoal transition-all duration-300 ${activeSegment === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </div>

        {/* Right Side - CTA & Mobile Toggle */}
        <div className="flex items-center gap-6 relative z-10">
          {/* Desktop CTA */}
          <a 
            href="#contact" 
            className="hidden md:flex items-center justify-center px-6 py-2.5 bg-forest border border-forest/20 rounded-full text-xs font-sans font-medium text-cream hover:bg-forest/90 transition-all duration-300 uppercase tracking-wide"
          >
            LET'S TALK
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu" 
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
              className="w-6 h-px bg-charcoal"
            ></motion.div>
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-6 h-px bg-charcoal"
            ></motion.div>
            <motion.div 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
              className="w-6 h-px bg-charcoal"
            ></motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-cream z-[55] flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.a
                  custom={i}
                  variants={linkVariants}
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-display italic text-charcoal hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="absolute bottom-12 left-8 right-8 flex justify-between items-end border-t border-charcoal/10 pt-8">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Socials</p>
                <div className="flex gap-4 text-xs uppercase tracking-widest">
                  <a href="#" className="text-charcoal hover:opacity-50">TW</a>
                  <a href="#" className="text-charcoal hover:opacity-50">IG</a>
                  <a href="#" className="text-charcoal hover:opacity-50">BE</a>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">©2024 Web Weave</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

