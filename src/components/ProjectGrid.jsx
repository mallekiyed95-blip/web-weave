import Button from './Button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "HIKO",
    category: "Hiking & Adventure • Experience • 2024",
    image: "/hiko.png",
    link: "https://hiiko.vercel.app/"
  },
  {
    title: "NOCTURNE INDUSTRIES",
    category: "Industrial Sci-Fi • Landing Page • 2024",
    image: "/nocturne.png",
    link: "https://techextract.vercel.app/"
  },
  {
    title: "VADE",
    category: "Creative Studio • Branding • 2024",
    image: "/vade.png",
    link: "https://vade-tau.vercel.app/"
  }
];

const ProjectGrid = ({ isDark }) => {
  const bg = isDark ? '#181818' : '#F8F6F0';
  const fg = isDark ? '#FFFFFF' : '#1C1C1C';
  const fgMuted = isDark ? '#9CA3AF' : '#6B7280';
  const cardBg = isDark ? '#242424' : '#FFFFFF';
  const borderColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(28,28,28,0.07)';

  return (
    <section id="work" style={{ backgroundColor: bg, padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }} className="md:px-12">
        <div style={{ marginBottom: '64px' }}>
          <p className="font-sans" style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: fgMuted,
          }}>
            Selected Works / 01–03
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Clean image card */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: cardBg,
                border: `1px solid ${borderColor}`,
                boxShadow: isDark ? 'none' : '0 4px 40px rgba(28,28,28,0.06)',
                aspectRatio: '16/9',
              }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                      transition: 'transform 0.8s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </a>
              </div>

              {/* Meta row */}
              <div style={{
                marginTop: '28px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '20px',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {/* Title uses Playfair Display */}
                  <h3 className="font-display" style={{
                    fontWeight: 700,
                    fontSize: 'clamp(2.2rem, 5vw, 5rem)',
                    color: fg,
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '0.01em',
                  }}>
                    {project.title}
                  </h3>
                  <p className="font-sans" style={{
                    fontWeight: 600,
                    fontSize: '10px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: fgMuted,
                    margin: 0,
                  }}>
                    {project.category}
                  </p>
                </div>

                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  isDark={isDark}
                >
                  Live Preview →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
