
import React from 'react';
// FIX: The previous import method for react-router-dom was causing type issues. Switched to a standard named import to resolve untyped function call errors.
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-blue hover:bg-brand-navy shadow-md hover:shadow-lg",
    secondary: "border-transparent text-brand-navy bg-brand-gold hover:bg-yellow-600 hover:text-white shadow-md",
    outline: "border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white",
    white: "border-transparent text-brand-blue bg-white hover:bg-brand-gray shadow-md"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;