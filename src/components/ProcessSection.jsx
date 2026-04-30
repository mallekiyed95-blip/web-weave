import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "The Vision",
    description: "We start by listening. We dive deep into your goals to understand exactly what makes your brand stand out."
  },
  {
    number: "02",
    title: "The Design",
    description: "We map out the user journey and craft beautiful, easy-to-use interfaces that your customers will love."
  },
  {
    number: "03",
    title: "The Build",
    description: "We turn those designs into reality using modern, clean code, delivering a fast and flawless product."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream relative" id="process">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display italic text-charcoal uppercase tracking-tighter"
          >
            THE ARCHITECTURE
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 uppercase tracking-[0.2em] text-[10px] md:text-sm font-medium mt-4"
          >
            How we build the future
          </motion.p>
        </div>

        <div className="relative">
          {/* Central line - hidden on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-charcoal/10 hidden md:block"></div>
          
          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between`}
              >
                {/* Desktop layout: alternating sides */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:text-left md:pl-12'}`}>
                  <span className="text-5xl md:text-6xl font-display font-light opacity-20 text-charcoal italic leading-none">{step.number}</span>
                  <h4 className="text-xl md:text-2xl font-display font-bold mt-2 text-charcoal italic uppercase tracking-tighter">{step.title}</h4>
                  <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed font-light">{step.description}</p>
                </div>

                {/* Dot on central line - hidden on mobile */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-charcoal z-10 border-4 border-cream hidden md:block"></div>
                
                <div className="hidden md:block md:w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

