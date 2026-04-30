import DotGrid from './DotGrid';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = () => {
  const dynamicWords = ["DIGITAL", "VISION", "FIX", "DIGITAL", "VISION", "FIX"];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-20 relative overflow-hidden bg-cream">
      {/* Advanced Dot Grid Background */}
      <DotGrid 
        baseColor="#EAE7DE" 
        activeColor="#1C1C1C" 
        dotSize={8} 
        gap={48}
        className="opacity-60"
      />
      
      <div className="max-w-5xl w-full text-center space-y-8 md:space-y-12 relative z-10">
        <div className="space-y-4 text-center items-center flex flex-col">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gray-500 font-medium font-sans"
          >
            Digital Design Bureau
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-8xl lg:text-9xl font-display leading-[1.1] md:leading-[1.2] text-charcoal tracking-tight flex flex-col items-center justify-center"
          >
            <span className="block italic">WE ARCHITECT</span>
            <span className="dynamic-word-wrapper relative">
              <span className="flex flex-col animate-slide-vertical">
                {dynamicWords.map((word, i) => (
                  <span key={i} className="italic h-[1.2em] flex items-center justify-center">
                    {word}
                  </span>
                ))}
              </span>
            </span>
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-600 text-base md:text-xl max-w-xl mx-auto font-light leading-relaxed tracking-wide font-sans"
        >
          Building sophisticated digital experiences through architectural precision and monochromatic soul.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-4 md:pt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Button href="#work" variant="primary" className="w-full md:w-auto">
            Explore Projects
          </Button>
          <Button href="#contact" variant="outline" className="w-full md:w-auto">
            Establish Connection
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

