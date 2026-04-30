import { useEffect, useRef } from 'react';

const CurvedMarquee = () => {
  const textPathRef = useRef(null);

  useEffect(() => {
    let offset = 0;
    let animationFrame;

    const animate = () => {
      offset -= 0.1;
      if (offset <= -20) offset = 0;
      if (textPathRef.current) {
        textPathRef.current.setAttribute('startOffset', `${offset}%`);
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-cream py-16 border-y border-charcoal/5 z-20">
      <svg className="w-full h-auto" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,150 Q720,50 1540,150" fill="transparent" id="curvePath" />
        <text className="font-display font-bold uppercase text-4xl md:text-6xl lg:text-7xl fill-charcoal tracking-tighter">
          <textPath ref={textPathRef} href="#curvePath" startOffset="0%">
            IMAGINE • THINK • BUILD • INNOVATE • IMAGINE • THINK • BUILD • INNOVATE • IMAGINE • THINK • BUILD • INNOVATE • IMAGINE • THINK • BUILD • INNOVATE
          </textPath>
        </text>
      </svg>
    </section>
  );
};

export default CurvedMarquee;
