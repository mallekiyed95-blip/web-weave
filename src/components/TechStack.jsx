const tech = ["TAILWIND", "FRAMER", "TYPESCRIPT", "NEXT.JS", "FIGMA", "REACT"];

const TechStack = ({ isDark }) => {
  const bg = isDark ? '#111111' : '#F8F6F0';
  const fg = isDark ? '#FFFFFF' : '#1C1C1C';
  const fgMuted = isDark ? '#9CA3AF' : '#6B7280';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(28,28,28,0.07)';

  return (
    <section id="tech" style={{ backgroundColor: bg, padding: '80px 0', borderTop: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}` }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="font-sans" style={{ fontWeight: 600, fontSize: '10px', letterSpacing: '0.45em', textTransform: 'uppercase', color: fgMuted }}>
          Our Arsenal
        </span>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
          {[...tech, ...tech].map((item, index) => (
            <span
              key={index}
              /* Playfair Display italic for the marquee tech names */
              className="font-display italic"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                textTransform: 'uppercase',
                color: fg,
                opacity: 0.2,
                marginRight: 'clamp(40px, 8vw, 100px)',
                cursor: 'default',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.2'}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
