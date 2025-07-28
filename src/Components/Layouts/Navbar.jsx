import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const activeLink = location.pathname

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location.pathname])

    const navItems = [
        {path: "/", label: "Beranda"},
        {path: "/about", label: "Tentang Kami"},
        {path: "/edu", label: "Edukasi"},
        {path: "/kegiatan", label: "Blog"},
    ]

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
        <div className='container mx-auto flex justify-between items-center px-5 md:px-10 lg:px-20 h-15'>
            {/* Logo */}
            <div>
                <h1 className='text-2xl font-bold'>LOGO</h1>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                {
                    isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
                }
            </button>

            {/* Dekstop */}
            <div className='hidden md:flex items-center gap-10 font-bold'>
                {navItems.map((link, index) => (
                    <Link
                    key={index}
                    to={link.path}
                    className={`after:transition-all ${activeLink === link.path ? "active underline underline-offset-4" : ""}`}
                    >
                    {link.label}
                    </Link> 
                ))}
            </div>
        </div>

        {/* Mobile Menu */}
        {
            isMenuOpen && (
                <div 
                className='md:hidden bg-white border-t border-gray-100 py-4'>
                    <div className='container mx-auto px-4 space-y-3'>
                        {navItems.map((link, index) => (
                            <Link
                            key={index}
                            to={link.path}
                            onClick={() => {
                                setActiveLink(link.path);
                                setIsMenuOpen(false);
                            }} 
                            
                            className={`block text-sm font-medium py-2 
                            ${activeLink === link.path ? "text-[var(--primary)] underline underline-offset-4" : 
                            "text-gray-400 hover:text-gray-900"}`} 
                            href={link.href}>{link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar