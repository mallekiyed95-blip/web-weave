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
      <div style={{ borderTop: `1px solid ${borderColor}`, padding: '100px 24px' }} className="md:px-12">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'space-between', alignItems: 'flex-start' }}>

          {/* Left */}
          <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: '36px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span className="font-sans" style={{ fontWeight: 600, fontSize: '10px', letterSpacing: '0.45em', textTransform: 'uppercase', color: fgMuted }}>
                Get in Touch
              </span>
              {/* Playfair Display italic for the big CTA headline */}
              <h2 className="font-display italic" style={{
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                textTransform: 'uppercase',
                color: fg,
                margin: 0,
                lineHeight: 0.95,
              }}>
                Let's Build<br />Together
              </h2>
            </div>

            <p className="font-sans" style={{ fontWeight: 400, fontSize: '15px', lineHeight: 1.7, color: fgMuted, margin: 0, maxWidth: '380px' }}>
              Have a project in mind? We'd love to hear about it. Drop us a line and let's create something extraordinary.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email link — Playfair Display for typographic weight */}
              <a
                href="mailto:hello@webweave.com"
                className="font-display"
                style={{ fontWeight: 400, fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', color: fg, textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#2A3B32'}
                onMouseLeave={e => e.currentTarget.style.color = fg}
              >
                hello@webweave.com
              </a>

              <div style={{ display: 'flex', gap: '12px' }}>
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
          <div style={{
            flex: '1 1 420px',
            backgroundColor: cardBg,
            border: `1px solid ${borderColor}`,
            borderRadius: '24px',
            padding: '48px',
            boxShadow: isDark ? 'none' : '0 4px 40px rgba(28,28,28,0.06)',
          }}>
            <span className="font-sans" style={{ fontWeight: 600, fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase', color: fgMuted, display: 'block', marginBottom: '36px' }}>
              Start a Project
            </span>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
              ].map(field => (
                <div key={field.label}>
                  <label style={labelStyle}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} style={inputStyle} />
                </div>
              ))}

              <div>
                <label style={labelStyle}>Project Details</label>
                <textarea placeholder="Tell us about your project..." rows={4} style={{ ...inputStyle, resize: 'none' }} />
              </div>

              <Button variant="primary" isDark={isDark} style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Giant wordmark — Playfair Display, no glitch */}
      <div style={{ borderTop: `1px solid ${borderColor}`, overflow: 'hidden', textAlign: 'center', padding: '64px 0' }}>
        <h3
          className="font-display"
          style={{
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: fg,
            margin: 0,
            lineHeight: 0.85,
            fontSize: 'clamp(4rem, 15vw, 18rem)',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Web Weave
        </h3>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: `1px solid ${borderColor}`, padding: '28px 24px' }} className="md:px-12">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p className="font-sans" style={{ fontWeight: 400, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: fgMuted, margin: 0 }}>
            © {new Date().getFullYear()} Web Weave. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
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
