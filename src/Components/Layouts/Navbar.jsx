import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "/logo1.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/about", label: "Tentang Kami" },
    { path: "/partner", label: "Kerjasama" },
    { path: "/edu", label: "Edukasi" },
    { path: "/kegiatan", label: "Blog" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-5 md:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-9 w-auto transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activePath === item.path
                    ? "bg-[#0A2050] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#E9EFFD] hover:text-[#0A2050]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-800" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white py-3 animate-fade-in shadow-md">
            <div className="max-w-7xl mx-auto px-5 flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full px-4 py-3 rounded-lg font-medium text-sm transition-all duration-150 ${
                    activePath === item.path
                      ? "bg-[#0A2050] text-white"
                      : "text-gray-700 hover:bg-[#E9EFFD] hover:text-[#0A2050]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent layout shift (height = navbar height) */}
      <div className="h-16 md:h-16"></div>
    </>
  );
};

export default Navbar;
