import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSegment, setActiveSegment] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Progress calculation
      setScrollProgress((currentScrollY / totalHeight) * 100);
      
      // Glass effect on scroll
      setIsScrolled(currentScrollY > 20);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Intersection Observer for sections
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

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Stack', href: '#tech', id: 'tech' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${isScrolled ? 'glass-nav py-4' : 'bg-transparent'}`}
    >
      <div className="font-display">
        <a href="#" className="hover:opacity-70 transition-opacity flex items-center gap-3">
          <span className="text-xl md:text-2xl font-display font-medium tracking-tight text-white italic">Web Weave</span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.3em] font-medium">
        {navLinks.map((link) => (
          <a 
            key={link.id}
            href={link.href} 
            className={`transition-all duration-300 relative group ${activeSegment === link.id ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button aria-label="Menu" className="md:hidden flex flex-col gap-1.5 p-2">
        <div className="w-6 h-px bg-white"></div>
        <div className="w-6 h-px bg-white"></div>
      </button>
    </nav>
  );
};

export default Navbar;
