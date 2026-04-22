import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Code2, 
  Layers, 
  Palette, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    title: "Web Design",
    description: "Stunning visual experiences that capture your brand essence with editorial precision.",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    span: "md:col-span-2",
  },
  {
    title: "Development",
    description: "Clean, scalable code built with Next.js and architectural soul.",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    span: "md:col-span-1",
  },
  {
    title: "SaaS Products",
    description: "End-to-end digital solutions from concept to launch with robust systems.",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    span: "md:col-span-1",
  },
  {
    title: "Branding",
    description: "Cohesive identities that tell your story across all touchpoints.",
    icon: <Palette className="w-6 h-6 text-emerald-400" />,
    span: "md:col-span-1",
  },
  {
    title: "Performance",
    description: "Lightning-fast experiences optimized for speed and SEO mastery.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    span: "md:col-span-1",
  },
  {
    title: "Maintenance",
    description: "Ongoing support to keep your digital presence thriving and secure.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    span: "md:col-span-3",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-black" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-medium font-sans"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display italic text-white uppercase tracking-tight leading-[0.9]"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-sm ${service.span} hover:border-cyan-500/30 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.1)] transition-all duration-500`}
            >
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glow Blur Backdrop */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/20 blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                  <div className="absolute inset-0 bg-cyan-500/10 blur-xl" />
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-display italic text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 font-sans max-w-xs transition-colors group-hover:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-4 right-4 text-[8px] uppercase tracking-widest text-white/5 group-hover:text-cyan-500/20 transition-colors">
                Service // 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
