import { useEffect, useRef } from 'react';

const CurvedMarquee = ({ isDark }) => {
  const textPathRef = useRef(null);

  useEffect(() => {
    let offset = 0;
    let animationFrame;
    const animate = () => {
      offset -= 0.08;
      if (offset <= -20) offset = 0;
      if (textPathRef.current) {
        textPathRef.current.setAttribute('startOffset', `${offset}%`);
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const bg = isDark ? '#111111' : '#F8F6F0';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(28,28,28,0.07)';
  const textFill = isDark ? '#FFFFFF' : '#1C1C1C';

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: bg,
      padding: '48px 0',
      borderTop: `1px solid ${borderColor}`,
      borderBottom: `1px solid ${borderColor}`,
      zIndex: 20,
    }}>
      <svg className="w-full h-auto" viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,130 Q720,40 1540,130" fill="transparent" id="curvePath" />
        {/* Playfair Display bold italic for the curved marquee */}
        <text style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontStyle: 'italic',
          fontSize: '72px',
          fill: textFill,
          textTransform: 'uppercase',
        }}>
          <textPath ref={textPathRef} href="#curvePath" startOffset="0%">
            IMAGINE • THINK • BUILD • INNOVATE • IMAGINE • THINK • BUILD • INNOVATE • IMAGINE • THINK • BUILD • INNOVATE •&nbsp;
          </textPath>
        </text>
      </svg>
    </section>
  );
};

export default CurvedMarquee;
