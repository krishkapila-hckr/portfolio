import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (onClick) {
      onClick(); // For closing mobile menu
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 py-2"
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('home');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleLogoClick} className="text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
          Krish Kapila
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
          ))}
          <a
            href="/Krish_Kapila_Resume.pdf"
            download
            className="px-4 py-2 bg-cyan-500 text-slate-900 font-semibold rounded-md hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Download Resume
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm absolute top-full left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>{link.label}</NavLink>
            ))}
            <a
              href="/Krish_Kapila_Resume.pdf"
              download
              onClick={closeMenu}
              className="mt-4 px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-md hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;