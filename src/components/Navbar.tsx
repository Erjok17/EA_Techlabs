import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine navbar background
  const getNavbarBg = () => {
    if (isScrolled) return 'bg-white shadow-lg';
    if (!isHomePage) return 'bg-white shadow-sm';
    return 'bg-transparent';
  };

  // Determine text color
  const getTextColor = () => {
    if (isScrolled || !isHomePage) return 'text-dark-blue';
    return 'text-white';
  };

  // Determine hamburger icon color - ALWAYS visible
  const getIconColor = () => {
    // When menu is open, always show dark icon on white background
    if (isOpen) return 'text-dark-blue';
    // When scrolled or not on home page, dark icon
    if (isScrolled || !isHomePage) return 'text-dark-blue';
    // On home page hero section, white icon
    return 'text-white';
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBg()}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link 
              to="/" 
              className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${getTextColor()}`}
            >
              EA <span className="text-electric-blue">TechLabs</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-300 hover:text-electric-blue ${
                    location.pathname === link.path 
                      ? 'text-electric-blue' 
                      : getTextColor()
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - With ARIA labels for accessibility */}
            <button
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={24} className={getIconColor()} />
              ) : (
                <Menu size={24} className={getIconColor()} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '60px' }}
      >
        {/* Dark overlay background */}
        <div className="absolute inset-0 bg-dark-blue" style={{ backgroundColor: '#0A192F' }} />
        
        {/* Menu content */}
        <div className="relative h-full overflow-y-auto">
          <div className="flex flex-col items-center py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-lg font-medium hover:text-electric-blue transition-colors duration-200 py-3 px-4 w-full text-center border-b border-gray-800 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Call to Action Button */}
            <Link
              to="/contact"
              className="mt-6 px-8 py-3 bg-electric-blue text-white rounded-full hover:bg-opacity-90 transition transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;