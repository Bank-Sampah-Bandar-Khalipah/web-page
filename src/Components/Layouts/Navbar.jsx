import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const location = useLocation()
    const activeLink = location.pathname

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location.pathname])

    const navItems = [
        {path: "/", label: "Home"},
        {path: "/about", label: "About"},
        {path: "/contact", label: "Contact"},
    ]

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
        <div className='container mx-auto flex justify-between items-center md:px-10 lg:px-20 h-15'>
            {/* Logo */}
            <div>
                <h1 className='text-2xl font-bold'>LOGO</h1>
            </div>

            {/* Dekstop */}
            <div className='hidden md:flex items-center gap-10'>
                {navItems.map((link, index) => (
                    <Link
                    key={index}
                    to={link.path}
                    className={`after:transition-all ${activeLink === link.path ? "active" : ""}`}
                    >
                    {link.label}
                    </Link> 
                ))}
            </div>
        </div>
    </nav>
  )
}

export default Navbar