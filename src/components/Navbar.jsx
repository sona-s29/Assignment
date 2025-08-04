import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-300 font-semibold'
      : 'text-white hover:text-yellow-300'

  return (
    <nav className="bg-green-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">🌿 Basti Ki Pathshala</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/volunteer" className={navLinkClass}>Volunteer</NavLink>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden text-white">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-green-700 px-4 pb-4 flex flex-col space-y-3">
          <NavLink to="/" className={navLinkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/volunteer" className={navLinkClass} onClick={closeMenu}>Volunteer</NavLink>
        </div>
      )}
    </nav>
  )
}
