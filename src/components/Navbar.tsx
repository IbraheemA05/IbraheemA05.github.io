import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            <Shield className="h-8 w-8" />
            <span className="text-glow">Al-Hanif</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/about" isActive={location.pathname === "/about"}>About</NavLink>
            <NavLink to="/blog" isActive={location.pathname === "/blog"}>Blog</NavLink>
            <NavLink to="/contact" isActive={location.pathname === "/contact"}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-blue-400 hover:text-blue-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 animate-fadeIn">
            <div className="container mx-auto py-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink to="/" isActive={location.pathname === "/"} onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/about" isActive={location.pathname === "/about"} onClick={() => setIsMenuOpen(false)}>
                  About
                </MobileNavLink>
                <MobileNavLink to="/blog" isActive={location.pathname === "/blog"} onClick={() => setIsMenuOpen(false)}>
                  Blog
                </MobileNavLink>
                <MobileNavLink to="/contact" isActive={location.pathname === "/contact"} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </MobileNavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, children }) => {
  return (
    <Link
      to={to}
      className={`text-lg font-medium transition-all duration-300 ${
        isActive
          ? 'text-blue-400 text-glow'
          : 'text-gray-300 hover:text-blue-400'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, isActive, onClick, children }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-lg font-medium py-2 transition-all duration-300 ${
        isActive
          ? 'text-blue-400 text-glow'
          : 'text-gray-300 hover:text-blue-400'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;