
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Phone, MessageCircle } from 'lucide-react';
import { CLIENT_INFO } from './constants';

// ScrollToTop component to handle view resets
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AboutPlaceholder = () => (
  <div className="pt-32 pb-24 min-h-screen bg-stone-50 flex items-center justify-center">
    <div className="text-center max-w-2xl px-4">
      <h1 className="text-5xl font-serif font-bold mb-8">About Efren Ortiz</h1>
      <p className="text-lg text-slate-600 leading-relaxed mb-12">
        With over 8 years of dedicated service in the Chicago Southland area, Efren Ortiz has built a reputation for integrity, expertise, and results. Specialized in residential sales, investment analysis, and bilingual client representation.
      </p>
      <div className="grid grid-cols-2 gap-8 text-left mb-12">
        <div className="border-l-4 border-amber-500 pl-6">
          <h3 className="font-bold text-navy mb-2">Expert Investor</h3>
          <p className="text-sm text-slate-500">Deep knowledge in foreclosures and ROI-driven acquisitions.</p>
        </div>
        <div className="border-l-4 border-amber-500 pl-6">
          <h3 className="font-bold text-navy mb-2">Bilingual Specialist</h3>
          <p className="text-sm text-slate-500">Fluent in English and Spanish for clear communication.</p>
        </div>
      </div>
    </div>
  </div>
);

const ListingsPlaceholder = () => (
  <div className="pt-32 pb-24 min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-serif font-bold mb-12">Exclusive Portfolio</h1>
      <p className="text-slate-500 mb-12 uppercase tracking-[0.2em] text-xs">Showing 4 of 24 listings in Homewood and surrounding areas</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* We would render full listings here */}
        <div className="col-span-full py-20 bg-stone-50 border-2 border-dashed border-stone-200 rounded-2xl flex items-center justify-center">
           <p className="text-slate-400">Advanced property search interface loading...</p>
        </div>
      </div>
    </div>
  </div>
);

const ContactPlaceholder = () => (
  <div className="pt-32 pb-24 min-h-screen bg-navy text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
           <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 inline-block">Direct Contact</span>
           <h1 className="text-5xl font-serif font-bold mb-8">Let's Discuss Your Real Estate Goals</h1>
           <p className="text-slate-300 text-lg mb-12 leading-relaxed">
             Whether you are looking for your forever home, selling a premium property, or building an investment portfolio, Efren provides the expertise you need.
           </p>
           <div className="space-y-6">
             <div className="flex items-center space-x-4">
                <div className="bg-amber-500 p-3 text-slate-900 rounded-lg"><Phone size={24} /></div>
                <div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-amber-500">Call Directly</p>
                   <p className="text-xl font-bold">{CLIENT_INFO.phones[0]}</p>
                </div>
             </div>
           </div>
        </div>
        <div className="bg-white p-10 rounded-none shadow-2xl text-slate-900">
           <form className="space-y-6">
             <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest">Full Name</label>
                   <input type="text" className="border-b border-slate-200 py-2 focus:border-amber-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest">Email Address</label>
                   <input type="email" className="border-b border-slate-200 py-2 focus:border-amber-500 outline-none transition-all" placeholder="john@example.com" />
                </div>
             </div>
             <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Interest</label>
                <select className="border-b border-slate-200 py-2 focus:border-amber-500 outline-none transition-all">
                   <option>Buying a Home</option>
                   <option>Selling my Property</option>
                   <option>Investment Opportunities</option>
                   <option>Commercial Real Estate</option>
                </select>
             </div>
             <div className="flex flex-col space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Your Message</label>
                <textarea rows={4} className="border-b border-slate-200 py-2 focus:border-amber-500 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
             </div>
             <button type="button" className="w-full bg-navy text-white font-bold py-4 uppercase tracking-widest hover:bg-amber-500 transition-all">Send Message</button>
           </form>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-amber-200 selection:text-amber-900">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPlaceholder />} />
            <Route path="/listings" element={<ListingsPlaceholder />} />
            <Route path="/neighborhoods" element={<div className="pt-32 text-center">Neighborhoods Page Content</div>} />
            <Route path="/contact" element={<ContactPlaceholder />} />
          </Routes>
        </main>

        <Footer />

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-3">
          <a 
            href={`https://wa.me/17088661242`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          >
            <MessageCircle size={28} />
            <span className="absolute right-full mr-4 bg-navy text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">WhatsApp Chat</span>
          </a>
          <a 
            href={`tel:${CLIENT_INFO.phones[0]}`} 
            className="bg-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
          >
            <Phone size={28} />
            <span className="absolute right-full mr-4 bg-navy text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call Efren</span>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
