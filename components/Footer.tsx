
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { CLIENT_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal text-slate-300 pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Footer Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 parallax-bg" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')`,
            opacity: 0.05,
            filter: 'grayscale(100%)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold tracking-widest text-white">
                EFREN ORTIZ
              </span>
              <span className="text-[10px] tracking-[0.3em] text-amber-500 uppercase font-medium">
                Luxury Real Estate Broker
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-light">
              Redefining premium real estate services for Homewood and the Chicago South Suburbs for nearly a decade.
            </p>
            <div className="flex space-x-4">
              <a href={CLIENT_INFO.socials.facebook} className="p-3 bg-white/5 hover:bg-amber-500 hover:text-navy transition-all rounded-md">
                <Facebook size={18} />
              </a>
              <a href={CLIENT_INFO.socials.instagram} className="p-3 bg-white/5 hover:bg-amber-500 hover:text-navy transition-all rounded-md">
                <Instagram size={18} />
              </a>
              <a href={CLIENT_INFO.socials.linkedin} className="p-3 bg-white/5 hover:bg-amber-500 hover:text-navy transition-all rounded-md">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] border-b border-white/10 pb-2">Navigation</h4>
            <ul className="flex flex-col space-y-4 text-[13px] font-medium tracking-wide">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Efren</Link></li>
              <li><Link to="/listings" className="hover:text-amber-500 transition-colors">Property Search</Link></li>
              <li><Link to="/neighborhoods" className="hover:text-amber-500 transition-colors">Neighborhoods</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] border-b border-white/10 pb-2">HQ Contact</h4>
            <ul className="flex flex-col space-y-5 text-[13px] font-light">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-500 shrink-0 mt-1" />
                <span>Homewood, IL | Chicago Southland</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-500 shrink-0" />
                <a href={`tel:${CLIENT_INFO.phones[0]}`} className="hover:text-amber-500 transition-colors tracking-widest">{CLIENT_INFO.phones[0]}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-500 shrink-0" />
                <a href={`mailto:${CLIENT_INFO.email}`} className="hover:text-amber-500 transition-colors truncate tracking-wide">{CLIENT_INFO.email}</a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-[9px] bg-amber-500/20 text-amber-500 px-2 py-0.5 font-bold rounded uppercase tracking-widest">Bilingual</div>
                <span className="text-[11px] uppercase tracking-widest opacity-60">English & Español</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-[0.4em] border-b border-white/10 pb-2">Schedule</h4>
            <div className="text-[12px] space-y-3 font-light">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 uppercase tracking-widest">Mon - Fri</span>
                <span className="text-white font-medium">9 AM - 7 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500 uppercase tracking-widest">Sat</span>
                <span className="text-white font-medium">10 AM - 4 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase tracking-widest">Sun</span>
                <span className="text-amber-500 italic">By Appointment</span>
              </div>
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-6 flex items-center text-[9px] font-black uppercase tracking-[0.5em] text-white hover:text-amber-500 transition-all group"
            >
              Elevate <ArrowUp size={14} className="ml-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-slate-600 font-bold">
          <p>© {new Date().getFullYear()} Efren Ortiz | Infiniti Properties Inc. Luxury Portfolio.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms</Link>
            <span className="text-amber-500/30">License # 475.123456</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
