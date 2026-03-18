const tech = ["TAILWIND", "FRAMER", "TYPESCRIPT", "NEXT.JS", "FIGMA"];

const TechStack = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5" id="tech">
      <div className="px-6 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.5em] text-gray-600 font-bold">Our Arsenal</span>
      </div>
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
          {/* First Set */}
          <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
            {tech.map((item, index) => (
              <span 
                key={`a-${index}`} 
                className="text-3xl md:text-5xl font-display italic font-bold opacity-30 hover:opacity-100 transition-opacity cursor-default text-white"
              >
                {item}
              </span>
            ))}
          </div>
          {/* Second Set (Duplicate) */}
          <div className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32">
            {tech.map((item, index) => (
              <span 
                key={`b-${index}`} 
                className="text-3xl md:text-5xl font-display italic font-bold opacity-30 hover:opacity-100 transition-opacity cursor-default text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
