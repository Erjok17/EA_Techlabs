import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  // Social media links
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/company/eatechlabs',
    instagram: 'https://www.instagram.com/ea_techlabs.1/',
    twitter: 'https://twitter.com/eatechlabs',
    email: 'mailto:eatechlabs@gmail.com',
    phone: 'tel:+256769463447',
  };

  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              EA <span className="text-electric-blue">TechLabs</span>
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
                  <Mail size={18} /> erjokagottechlabs@gmail.com
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
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition text-sm"
              >
                Instagram
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-electric-blue transition text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} EA TechLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;