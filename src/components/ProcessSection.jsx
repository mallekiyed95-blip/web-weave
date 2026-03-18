const steps = [
  {
    number: "01",
    title: "The Pulse",
    description: "Decoding the unique rhythm of your brand's identity and defining its core structural intent."
  },
  {
    number: "02",
    title: "The Blueprint",
    description: "Designing at the intersection of complex user flow and monochromatic architectural minimalism."
  },
  {
    number: "03",
    title: "The Synthesis",
    description: "Interweaving meticulous engineering with aesthetic elegance to craft a singular, flawless vision."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-32 bg-black relative" id="process">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-display italic text-white uppercase tracking-tighter">THE ARCHITECTURE</h2>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-sm font-medium mt-4">How we build the future</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-white/10"></div>
          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center justify-between mb-32 last:mb-0`}>
              <div className={`w-[45%] ${index % 2 === 0 ? 'text-right pr-8 md:pr-12' : 'order-last text-left pl-8 md:pl-12'}`}>
                <span className="text-6xl font-display font-light opacity-10 text-white italic leading-none">{step.number}</span>
                <h4 className="text-xl font-display font-bold mt-2 text-white italic uppercase tracking-tighter">{step.title}</h4>
                <p className="text-sm text-gray-500 mt-4 leading-relaxed font-light">{step.description}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white z-10 border-4 border-black"></div>
              <div className="w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
