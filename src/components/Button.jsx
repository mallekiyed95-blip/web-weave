import React from 'react';

const Button = ({
  children,
  href,
  className = "",
  variant = "primary",
  isDark = false,
  ...props
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 36px',
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 600,
    fontSize: '11px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    borderRadius: '999px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  const getVariantStyle = () => {
    if (variant === 'primary') {
      return {
        backgroundColor: '#2A3B32',
        color: '#F8F6F0',
        border: '1.5px solid #2A3B32',
      };
    }
    if (variant === 'outline') {
      return {
        backgroundColor: 'transparent',
        color: isDark ? '#FFFFFF' : '#1C1C1C',
        border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(28,28,28,0.3)'}`,
      };
    }
    return {
      backgroundColor: 'transparent',
      color: isDark ? '#FFFFFF' : '#1C1C1C',
      border: 'none',
      borderBottom: `1.5px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(28,28,28,0.2)'}`,
      borderRadius: '0',
      padding: '4px 0',
    };
  };

  const style = { ...baseStyles, ...getVariantStyle() };

  if (href) {
    return (
      <a href={href} style={style} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button style={style} className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
