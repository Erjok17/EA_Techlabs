import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

// X (Twitter) Icon Component
const XIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

// Facebook Icon Component
const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Footer = () => {
  // Social media links - UPDATED
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/company/eatechlabs',
    instagram: 'https://www.instagram.com/techlabs_africa.1/',
    twitter: 'https://x.com/techlabsAf_1',
    facebook: 'https://www.facebook.com/share/1AenXsQWyZ/',
    email: 'mailto:techlabsafrica1@gmail.com',
    phone: 'tel:+256769463447',
  };

  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Tech<span className="text-electric-blue">Labs Africa</span>
            </h3>
            <p className="text-gray-300">
              Software Solutions for Every Need
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-300 hover:text-electric-blue transition">Solutions</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-electric-blue transition">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-electric-blue transition">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-electric-blue transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href={socialLinks.email}
                  className="flex items-center gap-2 text-gray-300 hover:text-electric-blue transition"
                >
                  <Mail size={18} /> techlabsafrica1@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href={socialLinks.phone}
                  className="flex items-center gap-2 text-gray-300 hover:text-electric-blue transition"
                >
                  <Phone size={18} /> +256 769 463 447
                </a>
              </li>
              <li>
                <a 
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-electric-blue transition"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition"
                aria-label="X (Twitter)"
              >
                <XIcon size={24} />
              </a>
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <FacebookIcon size={24} />
              </a>
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition text-sm"
              >
                Instagram: @techlabs_africa.1
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition text-sm"
              >
                X: @techlabsAf_1
              </a>
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition text-sm"
              >
                Facebook: TechLabs Africa
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} TechLabs Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;