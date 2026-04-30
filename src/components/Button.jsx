import React from 'react';

const Button = ({ 
  children, 
  href, 
  className = "", 
  variant = "primary", // primary, outline, text
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-10 py-4 font-semibold uppercase tracking-widest text-xs transition-all duration-300 rounded-full border transform hover:opacity-90 active:scale-[0.98]";
  
  const variants = {
    primary: "bg-forest text-cream border-forest hover:bg-charcoal hover:border-charcoal",
    outline: "bg-transparent text-charcoal border-charcoal/40 hover:bg-charcoal hover:text-cream hover:border-charcoal",
    text: "bg-transparent text-charcoal p-0 py-2 border-0 border-b-2 border-charcoal/10 hover:border-charcoal"
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
