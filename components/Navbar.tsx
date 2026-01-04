
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CLIENT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Broker', path: '/about' },
    { name: 'Portfolio', path: '/listings' },
    { name: 'Regions', path: '/neighborhoods' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Inquire', path: '/contact' },
  ];

  const handleScrollToSection = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-1000 ${isScrolled ? 'bg-black/95 backdrop-blur-2xl py-5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] border-b border-white/5' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col group">
            <span className="text-3xl font-display font-medium tracking-[0.3em] text-white group-hover:text-gold transition-colors duration-700">
              EFREN ORTIZ
            </span>
            <span className="text-[9px] tracking-[0.9em] text-gold uppercase font-black mt-2">
              Infiniti Properties
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleScrollToSection(link.path)}
                className={`text-[10px] font-display font-bold tracking-[0.6em] transition-all duration-700 uppercase hover:text-gold ${
                  isScrolled ? 'text-slate-300' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-8 border-l border-white/10 pl-14">
              <a href={`tel:${CLIENT_INFO.phones[0]}`} className="text-white hover:text-gold transition-all duration-700">
                <Phone size={16} />
              </a>
              <div className="flex items-center text-[9px] font-black text-gold uppercase tracking-[0.4em] font-display">
                ES <span className="mx-3 opacity-30">|</span> EN
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black fixed inset-0 z-50 p-12 flex flex-col justify-center items-center animate-fade-in">
          <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white">
            <X size={32} />
          </button>
          <div className="flex flex-col space-y-12 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setIsOpen(false);
                  handleScrollToSection(link.path);
                }}
                className="text-4xl font-serif font-light text-white hover:text-gold uppercase tracking-[0.4em] transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-16 border-t border-white/10 flex flex-col items-center space-y-10">
               <a href={`tel:${CLIENT_INFO.phones[0]}`} className="text-gold font-serif italic text-4xl">
                 {CLIENT_INFO.phones[0]}
               </a>
               <p className="text-slate-500 text-[10px] uppercase tracking-[0.7em] font-bold font-display">Chicago Southland HQ</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
