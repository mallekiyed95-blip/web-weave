import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-black" id="contact">
      {/* Top CTA Section */}
      <div className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-20">
          {/* Left: CTA + Contact Info */}
          <div className="space-y-10 max-w-lg flex-1">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-medium font-sans">Get in Touch</span>
              <h2 className="text-5xl md:text-7xl font-display italic text-white uppercase tracking-tight leading-[0.9]">
                Let's Build<br/>Together
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md font-sans">
              Have a project in mind? We'd love to hear about it. Drop us a line and let's create something extraordinary.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@webweave.com" className="text-2xl md:text-3xl font-display text-white hover:text-gray-300 transition-colors block">
                hello@webweave.com
              </a>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/webweave.ui/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="https://x.com/Abdosebri1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  aria-label="X"
                >
                  <FaXTwitter size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/web-weave-93a879396/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right: Contact Form */}
          <div className="w-full lg:w-[45%] bg-white/[0.02] border border-white/5 p-8 md:p-12 backdrop-blur-sm rounded-3xl">
            <h3 className="text-xs uppercase tracking-[0.4em] text-gray-500 font-medium mb-10">Start a Project</h3>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-white p-0 py-3 transition-colors outline-none text-white placeholder:text-zinc-700 text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-white p-0 py-3 transition-colors outline-none text-white placeholder:text-zinc-700 text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500">Project Details</label>
                <textarea 
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-white p-0 py-3 transition-colors outline-none h-28 text-white placeholder:text-zinc-700 resize-none text-sm"
                ></textarea>
              </div>
              <Button variant="primary" className="w-full py-5">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Centered Web Weave Branding */}
      <div className="w-full overflow-hidden border-t border-white/5">
        <div className="py-16 md:py-20 text-center">
          <h3 className="font-display italic text-white tracking-tight select-none whitespace-nowrap w-full" style={{ fontSize: 'clamp(6rem, 20vw, 30rem)' }}>Web Weave</h3>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
            © {new Date().getFullYear()} Web Weave. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] text-zinc-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
