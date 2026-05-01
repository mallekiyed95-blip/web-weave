import { motion } from 'framer-motion';
import { Globe, Code2, Layers, Palette, Zap, ShieldCheck } from 'lucide-react';

const SERVICES = [
  { title: "Web Design", desc: "Stunning visual experiences that capture your brand essence with editorial precision.", icon: Globe, span: 2 },
  { title: "Development", desc: "Clean, scalable code built with Next.js and architectural soul.", icon: Code2, span: 1 },
  { title: "SaaS Products", desc: "End-to-end digital solutions from concept to launch with robust systems.", icon: Layers, span: 1 },
  { title: "Branding", desc: "Cohesive identities that tell your story across all touchpoints.", icon: Palette, span: 1 },
  { title: "Performance", desc: "Lightning-fast experiences optimized for speed and SEO mastery.", icon: Zap, span: 1 },
  { title: "Maintenance", desc: "Ongoing support to keep your digital presence thriving and secure.", icon: ShieldCheck, span: 3 },
];

const Services = ({ isDark }) => {
  const bg = isDark ? '#111111' : '#F8F6F0';
  const fg = isDark ? '#FFFFFF' : '#1C1C1C';
  const fgMuted = isDark ? '#9CA3AF' : '#6B7280';
  const cardBg = isDark ? '#1C1C1C' : '#FFFFFF';
  const borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(28,28,28,0.07)';
  const iconBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(42,59,50,0.07)';

  return (
    <section id="services" style={{ backgroundColor: bg, padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className="md:px-12">
        {/* Header */}
        <div style={{ marginBottom: '64px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans"
            style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.45em', textTransform: 'uppercase', color: fgMuted, margin: 0 }}
          >
            Capabilities
          </motion.p>
          {/* Display font (Playfair Display) for headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display"
            style={{ fontWeight: 700, fontSize: 'clamp(2.5rem, 6vw, 5rem)', textTransform: 'uppercase', color: fg, margin: 0, lineHeight: 0.95, letterSpacing: '0.02em' }}
          >
            Our Services
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`${service.span === 2 ? 'md:col-span-2' : service.span === 3 ? 'md:col-span-3' : ''}`}
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${borderColor}`,
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: isDark ? 'none' : '0 2px 20px rgba(28,28,28,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  minHeight: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    backgroundColor: iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={22} style={{ color: '#2A3B32' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {/* Card title: Playfair Display */}
                    <h3 className="font-display" style={{ fontWeight: 700, fontSize: '22px', color: fg, margin: 0, letterSpacing: '0.01em' }}>
                      {service.title}
                    </h3>
                    <p className="font-sans" style={{ fontWeight: 400, fontSize: '13.5px', lineHeight: 1.65, color: fgMuted, margin: 0, maxWidth: '100%' }}>
                      {service.desc}
                    </p>
                  </div>
                </div>

                <span className="font-sans" style={{ position: 'absolute', bottom: '16px', right: '20px', fontSize: '9px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(42,59,50,0.12)' }}>
                  0{i + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
