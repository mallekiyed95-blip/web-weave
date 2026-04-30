import DotGrid from './DotGrid';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = ({ isDark }) => {
  const dynamicWords = ["DIGITAL", "VISION", "FIX", "DIGITAL", "VISION", "FIX"];
  const bg = isDark ? '#181818' : '#F8F6F0';
  const fg = isDark ? '#FFFFFF' : '#1C1C1C';
  const fgMuted = isDark ? '#9CA3AF' : '#6B7280';
  const dotBase = isDark ? '#2a2a2a' : '#EAE7DE';
  const dotActive = isDark ? '#FFFFFF' : '#1C1C1C';

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-20 relative overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <DotGrid baseColor={dotBase} activeColor={dotActive} dotSize={8} gap={48} className="opacity-60" />

      <div className="max-w-5xl w-full text-center space-y-8 md:space-y-12 relative z-10">
        <div className="space-y-4 text-center items-center flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-medium font-sans"
            style={{ color: fgMuted }}
          >
            Digital Design Bureau
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display tracking-tight flex flex-col items-center justify-center"
            style={{
              fontSize: 'clamp(2.8rem, 10vw, 9rem)',
              color: fg,
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            <span className="block italic">WE ARCHITECT</span>
            <span className="dynamic-word-wrapper relative italic" style={{ color: isDark ? '#FFFFFF' : '#2A3B32' }}>
              <span className="flex flex-col animate-slide-vertical">
                {dynamicWords.map((word, i) => (
                  <span key={i} className="h-[1.2em] flex items-center justify-center">{word}</span>
                ))}
              </span>
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base md:text-xl max-w-xl mx-auto font-light leading-relaxed tracking-wide font-sans"
          style={{ color: fgMuted }}
        >
          Building sophisticated digital experiences through architectural precision and monochromatic soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-4 md:pt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Button href="#work" variant="primary" isDark={isDark} className="w-full md:w-auto">
            Explore Projects
          </Button>
          <Button href="#contact" variant="outline" isDark={isDark} className="w-full md:w-auto">
            Establish Connection
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
