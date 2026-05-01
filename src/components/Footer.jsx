import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "./Button";

const Footer = ({ isDark }) => {
  const bg = isDark ? '#181818' : '#F8F6F0';
  const fg = isDark ? '#FFFFFF' : '#1C1C1C';
  const fgMuted = isDark ? '#9CA3AF' : '#6B7280';
  const cardBg = isDark ? '#1C1C1C' : '#FFFFFF';
  const borderColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(28,28,28,0.08)';
  const iconBorder = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(28,28,28,0.12)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(28,28,28,0.12)';

  const inputStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${inputBorder}`,
    outline: 'none',
    color: fg,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 400,
    fontSize: '14px',
    padding: '12px 0',
    transition: 'border-color 0.3s',
  };

  const labelStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 600,
    fontSize: '9px',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: fgMuted,
    display: 'block',
    marginBottom: '6px',
  };

  const socialLinkStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: `1px solid ${iconBorder}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: fgMuted,
    transition: 'all 0.3s',
    textDecoration: 'none',
  };

  return (
    <footer id="contact" style={{ backgroundColor: bg }}>
      {/* CTA section */}
      <div style={{ borderTop: `1px solid ${borderColor}` }} className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

          {/* Left */}
          <div className="flex-[1.2] flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <span className="font-sans" style={{ fontWeight: 600, fontSize: '10px', letterSpacing: '0.45em', textTransform: 'uppercase', color: fgMuted }}>
                Get in Touch
              </span>
              <h2 className="font-display italic text-5xl md:text-7xl lg:text-8xl" style={{
                fontWeight: 700,
                textTransform: 'uppercase',
                color: fg,
                margin: 0,
                lineHeight: 0.95,
              }}>
                Let's Build<br />Together
              </h2>
            </div>

            <p className="font-sans text-base md:text-lg opacity-70" style={{ fontWeight: 400, lineHeight: 1.7, color: fgMuted, margin: 0, maxWidth: '420px' }}>
              Have a project in mind? We'd love to hear about it. Drop us a line and let's create something extraordinary.
            </p>

            <div className="flex flex-col gap-8">
              <a
                href="mailto:hello@webweave.com"
                className="font-display text-xl md:text-3xl hover:text-[#2A3B32] transition-colors duration-300"
                style={{ fontWeight: 400, color: fg, textDecoration: 'none' }}
              >
                hello@webweave.com
              </a>

              <div className="flex gap-4">
                {[
                  { href: "https://www.instagram.com/webweave.ui/", icon: <FaInstagram size={18} />, label: "Instagram" },
                  { href: "https://x.com/Abdosebri1", icon: <FaXTwitter size={18} />, label: "X" },
                  { href: "https://www.linkedin.com/in/web-weave-93a879396/", icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
                ].map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={socialLinkStyle}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#2A3B32'; e.currentTarget.style.color = '#2A3B32'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = iconBorder; e.currentTarget.style.color = fgMuted; }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="w-full lg:flex-1" style={{
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '32px',
            padding: '40px md:64px',
            boxShadow: isDark ? 'none' : '0 10px 50px rgba(28,28,28,0.06)',
          }}>
             <div className="p-2 md:p-8">
                <span className="font-sans mb-10 block" style={{ fontWeight: 600, fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: fgMuted }}>
                  Start a Project
                </span>

                <form className="flex flex-col gap-8">
                  {[
                    { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                    { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  ].map(field => (
                    <div key={field.label} className="space-y-2">
                      <label style={labelStyle}>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder} style={inputStyle} className="focus:border-[#2A3B32]" />
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label style={labelStyle}>Project Details</label>
                    <textarea placeholder="Tell us about your project..." rows={4} style={{ ...inputStyle, resize: 'none' }} className="focus:border-[#2A3B32]" />
                  </div>

                  <Button variant="primary" isDark={isDark} className="w-full py-5">
                    Send Message
                  </Button>
                </form>
             </div>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div style={{ borderTop: `1px solid ${borderColor}`, overflow: 'hidden', textAlign: 'center' }} className="py-20 md:py-32">
        <h3
          className="font-display px-6 text-6xl md:text-[12vw] lg:text-[15vw]"
          style={{
            fontWeight: 700,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: fg,
            margin: 0,
            lineHeight: 0.9,
            userSelect: 'none',
            opacity: 0.8
          }}
        >
          Web Weave
        </h3>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid ${borderColor}` }} className="py-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <p className="font-sans text-center md:text-left" style={{ fontWeight: 400, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: fgMuted, margin: 0 }}>
            © {new Date().getFullYear()} Web Weave. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(link => (
              <a
                key={link}
                href="#"
                className="font-sans"
                style={{ fontWeight: 400, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: fgMuted, textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = fg}
                onMouseLeave={e => e.currentTarget.style.color = fgMuted}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
