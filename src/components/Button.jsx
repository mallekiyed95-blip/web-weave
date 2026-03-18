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
    primary: "bg-white text-black border-white hover:bg-black hover:text-white",
    outline: "bg-transparent text-white border-white/40 hover:bg-white hover:text-black",
    text: "bg-transparent text-white p-0 py-2 border-0 border-b-2 border-white/10 hover:border-white"
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
