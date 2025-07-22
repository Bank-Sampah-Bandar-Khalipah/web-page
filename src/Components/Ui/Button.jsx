import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ children, to, onClick, className = "", type = "button", size = "md" }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  }

  // Size classes
  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
  };

  const baseClasses = `inline-flex items-center justify-center bg-[#0B1D51] text-white rounded-3xl hover:bg-white 
    cursor-pointer transition-all hover:text-black hover:border-2`;

  const combinedClasses = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={handleClick} className={combinedClasses}>
      {children}
    </button>
  );
};


export default Button