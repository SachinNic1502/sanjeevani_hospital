import React, { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMenu, FiX } from 'react-icons/fi';
import logo from '../images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white shadow-md ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      {/* Top Header */}
      {!isScrolled && (
        <div className="bg-[#0e254e] text-white">
          <div className="container mx-auto py-4">
            <ul className="flex justify-end">
              <li className="mr-4 flex items-center">
                <FiMail className="mr-1" />
                <a href="mailto:sanjivanihospitaljmr@gmail.com" className="text-white">
                  sanjivanihospitaljmr@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-1" />
                <a href="tel:+917774073015" className="text-white">
                  +91-7774073015
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Bottom Header */}
      <div className={`container mx-auto py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : ''}`}>
        {/* Logo */}
        <a href="#" className="text-3.4rem font-bold text-oxford-blue-1">
          <img src={logo} alt="Sanjeevani Logo" className="h-[50px] mr-2" />
        </a>

        {/* Nav Links */}
        <nav className="hidden lg:flex lg:items-center lg:justify-center">
          <ul className="flex">
            <li className={`mr-6 ${activeMenu === 'home' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#home"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'home' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('home')}
              >
                Home
              </a>
            </li>
            <li className={`mr-6 ${activeMenu === 'service' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#service"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'service' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('service')}
              >
                Services
              </a>
            </li>
            <li className={`mr-6 ${activeMenu === 'about' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#about"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'about' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('about')}
              >
                About Us
              </a>
            </li>
            <li className={`mr-6 ${activeMenu === 'insurance' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#insurance"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'insurance' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('insurance')}
              >
                Insurance Facility
              </a>
            </li>
            <li className={`${activeMenu === 'contact' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#contact"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'contact' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-oxford-blue-1 hover:text-royal-blue-light focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="bg-white py-2">
          <ul className="flex flex-col items-center">
            <li className={`my-2 ${activeMenu === 'home' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#home"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'home' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('home')}
              >
                Home
              </a>
            </li>
            <li className={`my-2 ${activeMenu === 'service' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#service"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'service' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('service')}
              >
                Services
              </a>
            </li>
            <li className={`my-2 ${activeMenu === 'about' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#about"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'about' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('about')}
              >
                About Us
              </a>
            </li>
            <li className={`my-2 ${activeMenu === 'insurance' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#insurance"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'insurance' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('insurance')}
              >
                Insurance Facility
              </a>
            </li>
            <li className={`my-2 ${activeMenu === 'contact' ? 'text-royal-blue-light font-bold' : ''}`}>
              <a
                href="#contact"
                className={`text-oxford-blue-1 hover:text-royal-blue-light hover:border-b-2 border-[#143778] ${activeMenu === 'contact' ? 'border-b-2 border-[#143778]' : ''}`}
                onClick={() => handleMenuClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
