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

const ProjectGrid = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-cream" id="work">
      <div className="mb-12 md:mb-20">
        <h2 className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-gray-600">Selected Works / 01-03</h2>
      </div>
      
      <div className="flex flex-col gap-24 md:gap-[15vh]">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[16/9] bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-charcoal/5 border border-charcoal/5">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out" 
                />
              </a>
            </div>
            
            <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-4xl md:text-7xl font-display italic text-charcoal leading-tight">{project.title}</h3>
                <p className="text-gray-600 uppercase tracking-widest text-[10px] md:text-xs font-bold">{project.category}</p>
              </div>
              
              <div className="w-full md:w-auto">
                <Button 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full md:w-auto"
                >
                  LIVE PREVIEW
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;

