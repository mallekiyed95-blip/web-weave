import DotGrid from './DotGrid';
import Button from './Button';

const Hero = () => {
  const dynamicWords = ["DIGITAL", "VISION", "FIX", "DIGITAL", "VISION", "FIX"];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden bg-black">
      {/* Advanced Dot Grid Background */}
      <DotGrid 
        baseColor="#2a2a2a" 
        activeColor="#FFFFFF" 
        dotSize={8} 
        gap={48}
        className="opacity-60"
      />
      
      <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
        <div className="space-y-4 text-center items-center flex flex-col">
          <span className="text-xs uppercase tracking-[0.5em] text-gray-500 font-medium font-sans">Digital Design Bureau</span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-display leading-[1.2] text-white tracking-tight flex flex-col items-center justify-center">
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
          </h1>
        </div>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed tracking-wide font-sans">
          Building sophisticated digital experiences through architectural precision and monochromatic soul.
        </p>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button href="#work" variant="primary">
            Explore Projects
          </Button>
          <Button href="#contact" variant="outline">
            Establish Connection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
