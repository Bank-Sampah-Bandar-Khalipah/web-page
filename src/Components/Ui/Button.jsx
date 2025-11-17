import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Button = ({
  children,
  to,
  onClick,
  className = "",
  type = "button",
  size = "md",
  bgColor = "#0B1D51",      // warna background default
  hoverColor = "#1E3A8A",   // warna hover default
  textColor = "white",      // warna teks default
  transitionMs = 20,       // durasi hover default 300ms
}) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  // Ukuran tombol
  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
  };

  const baseClasses = `
    inline-flex items-center justify-center rounded-lg cursor-pointer border-2 border-transparent
    transition-all ease-in-out duration-${transitionMs}
  `;

  const combinedClasses = `
    ${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${className}
  `;

  const style = {
    backgroundColor: bgColor,
    color: textColor,
    transition: `all ${transitionMs}ms ease-in-out`, // untuk inline style juga
  };

  const hoverStyle = {
    "--hover-color": hoverColor,
  };

  const content = (
    <>
      {children}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${combinedClasses} hover:bg-[var(--hover-color)]`}
        style={{ ...style, ...hoverStyle }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${combinedClasses} hover:bg-[var(--hover-color)] font-semibold`}
      style={{ ...style, ...hoverStyle }}
    >
      {content}
    </button>
  );
};

export default Button;
