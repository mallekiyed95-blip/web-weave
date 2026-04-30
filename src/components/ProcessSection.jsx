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

const ProcessSection = ({ isDark }) => {
  const bg = isDark ? '#181818' : '#F8F6F0';
  const fg = isDark ? '#FFFFFF' : '#1C1C1C';
  const fgMuted = isDark ? '#9CA3AF' : '#6B7280';
  const lineColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(28,28,28,0.10)';
  const dotBg = isDark ? '#FFFFFF' : '#1C1C1C';
  const dotBorder = bg;

  return (
    <section id="process" style={{ backgroundColor: bg, padding: '100px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }} className="md:px-12">
        {/* Header — Playfair Display italic */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display"
            style={{ fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 4rem)', textTransform: 'uppercase', color: fg, margin: 0, letterSpacing: '0.02em' }}
          >
            The Architecture
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans"
            style={{ fontWeight: 500, fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: fgMuted, marginTop: '16px' }}
          >
            How we build the future
          </motion.p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: lineColor, transform: 'translateX(-50%)' }} className="hidden md:block" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:text-left md:pl-12'}`}>
                  {/* Large number — Playfair Display faded */}
                  <span className="font-display" style={{
                    fontWeight: 400,
                    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                    color: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(28,28,28,0.12)',
                    lineHeight: 1,
                    display: 'block',
                  }}>
                    {step.number}
                  </span>
                  {/* Step title — Playfair Display bold */}
                  <h4 className="font-display" style={{
                    fontWeight: 700,
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                    textTransform: 'uppercase',
                    color: fg,
                    margin: '8px 0 14px',
                    letterSpacing: '0.02em',
                  }}>
                    {step.title}
                  </h4>
                  <p className="font-sans" style={{
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.7,
                    color: fgMuted,
                    margin: 0,
                  }}>
                    {step.description}
                  </p>
                </div>

                <div className="hidden md:block" style={{
                  position: 'absolute', left: '50%', top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '14px', height: '14px', borderRadius: '50%',
                  backgroundColor: dotBg, border: `4px solid ${dotBorder}`, zIndex: 10,
                }} />

                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
