import Button from './Button';

const projects = [
  {
    title: "HIKO",
    category: "Hiking & Adventure • Experience • 2024",
    image: "/hiko.png",
    link: "https://v0-hiiko.vercel.app/"
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
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-black" id="work">
      <div className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.5em] text-gray-500">Selected Works / 01-03</h2>
      </div>
      <div className="space-y-[10vh]">
        {projects.map((project, index) => (
          <div key={index} className="sticky top-[15vh]">
            <div className="glass-card p-1 lg:p-2 group bg-black/20 overflow-hidden rounded-2xl">
              <div className="relative overflow-hidden aspect-[16/9] bg-black">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000 ease-out" 
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4 transform group-hover:-translate-y-2 transition-transform duration-700">
                      <h3 className="text-4xl md:text-7xl font-display italic text-white leading-tight">{project.title}</h3>
                      <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{project.category}</p>
                    </div>
                    <div className="transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-700">
                      <Button 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                      >
                        LIVE PREVIEW
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
