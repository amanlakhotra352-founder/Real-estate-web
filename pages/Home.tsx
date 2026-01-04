import React, { useEffect } from 'react';
import { ArrowRight, Star, Play, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_LISTINGS, MOCK_NEIGHBORHOODS, MOCK_TESTIMONIALS, CLIENT_INFO } from '../constants';
import ListingCard from '../components/ListingCard';

const Home: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col bg-[#050505] overflow-x-hidden">
      {/* Reimagined Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-start pt-32 pb-20 overflow-hidden">
        {/* Cinematic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
            alt="Elite Modern Mansion" 
            className="w-full h-full object-cover animate-[slowZoom_50s_infinite_alternate]"
          />
          {/* Layered Overlays for Depth & Legibility */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 mesh-gradient opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full">
          <div className="max-w-5xl">
            {/* Header Tag */}
            <div className="flex items-center space-x-4 mb-8 hero-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="h-[1px] w-20 bg-gold/60"></div>
              <span className="text-gold font-display uppercase tracking-[0.8em] text-[10px] font-bold">
                Elite Chicago Southland Brokerage
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif font-bold text-white mb-10 leading-[0.9] tracking-tight hero-reveal" style={{ animationDelay: '0.4s' }}>
              Exceptional <br/>
              <span className="italic font-normal text-gold inline-block">
                Property Portfolio
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-2xl text-slate-400 mb-14 leading-relaxed font-serif italic font-light max-w-2xl hero-reveal" style={{ animationDelay: '0.6s' }}>
              Where architectural vision meets unparalleled real estate expertise. Discover the finest residences in Homewood and the Southland.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 hero-reveal" style={{ animationDelay: '0.8s' }}>
              <Link to="/listings" className="group relative px-14 py-6 bg-gold text-black font-secondary font-black text-[10px] uppercase tracking-[0.4em] overflow-hidden transition-all duration-700 hover:shadow-[0_0_40px_rgba(197,160,89,0.3)]">
                <span className="relative z-10">Enter Collection</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              </Link>
              
              <button className="flex items-center space-x-6 group">
                 <div className="p-5 rounded-full border border-white/10 group-hover:border-gold transition-all duration-700 group-hover:scale-110 glass">
                    <Play className="text-white group-hover:text-gold fill-white group-hover:fill-gold transition-all duration-700" size={16} />
                 </div>
                 <span className="text-white text-[9px] font-bold uppercase tracking-[0.5em] group-hover:text-gold transition-colors font-display">
                    View Cinema
                 </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center space-y-6 hero-reveal" style={{ animationDelay: '1.4s' }}>
          <span className="[writing-mode:vertical-lr] text-[8px] uppercase font-bold tracking-[0.8em] text-white/30 font-display">Scroll To Reveal</span>
          <div className="w-[1px] h-20 bg-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gold/50 animate-[scrollLine_3.5s_infinite]"></div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to { transform: scale(1.18); }
        }
      `}</style>

      {/* Gallery Section - Featured Listings */}
      <section id="listings" className="py-48 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 grid-texture opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 relative reveal-left">
              <div className="sticky top-40">
                 <span className="text-gold font-bold text-[10px] uppercase tracking-[0.7em] mb-10 block font-display">Exclusive Assets</span>
                 <h2 className="text-6xl md:text-8xl font-secondary font-bold text-white mb-10 leading-[0.9]">
                    Timeless <br/> <span className="text-gold italic font-normal">Estates</span>
                 </h2>
                 <p className="text-slate-500 text-xl mb-16 font-secondary font-light leading-relaxed italic">
                    A limited collection of high-value residential and commercial properties curated for the discerning investor.
                 </p>
                 <div className="flex space-x-20">
                    <div className="reveal-fade" style={{ transitionDelay: '0.2s' }}>
                       <p className="text-5xl font-secondary font-bold text-white">08+</p>
                       <p className="text-[8px] uppercase tracking-[0.5em] text-slate-600 font-bold mt-4 font-display">Years Expertise</p>
                    </div>
                    <div className="w-[1px] h-20 bg-white/5"></div>
                    <div className="reveal-fade" style={{ transitionDelay: '0.4s' }}>
                       <p className="text-5xl font-secondary font-bold text-white">5★</p>
                       <p className="text-[8px] uppercase tracking-[0.5em] text-slate-600 font-bold mt-4 font-display">Client Reviews</p>
                    </div>
                 </div>
                 
                 <Link to="/listings" className="mt-16 inline-flex items-center space-x-4 text-gold group">
                    <span className="text-[10px] font-secondary font-black uppercase tracking-[0.5em]">Explore Collection</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-3" />
                 </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
               {MOCK_LISTINGS.map((listing, idx) => (
                 <div key={listing.id} className={`${idx % 2 !== 0 ? 'md:mt-32' : ''} reveal-up`} style={{ transitionDelay: `${idx * 0.15}s` }}>
                    <ListingCard listing={listing} />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Spotlight */}
      <section id="neighborhoods" className="py-48 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-32 reveal-fade">
           <div className="text-center">
              <span className="text-gold font-bold text-[10px] uppercase tracking-[0.8em] mb-8 block font-display">Regional Masterclass</span>
              <h2 className="text-7xl md:text-9xl font-secondary font-bold text-white">Distinctive <span className="italic font-normal text-gold">locales</span></h2>
           </div>
        </div>
        
        <div className="flex gap-10 px-10 overflow-x-auto pb-32 no-scrollbar snap-x reveal-up" style={{ transitionDelay: '0.2s' }}>
          {MOCK_NEIGHBORHOODS.map((nh) => (
            <div key={nh.id} className="min-w-[400px] md:min-w-[650px] aspect-[16/10] relative group snap-center overflow-hidden cursor-crosshair shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
              <img src={nh.imageUrl} alt={nh.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 brightness-75 group-hover:brightness-100" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-14 w-full">
                 <p className="text-gold font-bold text-[9px] uppercase tracking-[0.7em] mb-6 font-display">{nh.avgPrice}</p>
                 <h3 className="text-6xl font-secondary font-bold text-white mb-8 transition-transform duration-1000 group-hover:-translate-y-6">{nh.name}</h3>
                 <div className="h-[1px] w-full bg-white/10 mb-8 group-hover:bg-gold transition-all duration-1000"></div>
                 <p className="text-slate-300 text-lg italic font-secondary font-light opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-10 group-hover:translate-y-0 leading-relaxed">
                   {nh.description}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-48 bg-[#080f1a] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-48 opacity-5 pointer-events-none">
           <Quote size={600} className="text-gold" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center mb-32 reveal-up">
           <div className="flex justify-center space-x-3 mb-10">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-gold text-gold" />)}
           </div>
           <h2 className="text-6xl md:text-8xl font-serif font-bold text-white">Clients of <span className="italic font-normal text-gold">Distinction</span></h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-16">
           {MOCK_TESTIMONIALS.map((t, idx) => (
             <div key={t.id} className="relative group p-16 glass hover:border-gold/30 transition-all duration-1000 reveal-up" style={{ transitionDelay: `${idx * 0.25}s` }}>
                <p className="text-slate-200 text-2xl font-serif font-light italic leading-relaxed mb-16 relative z-10">
                   "{t.content}"
                </p>
                <div className="flex items-center space-x-8 mt-auto">
                   <div className="w-20 h-[1px] bg-gold/40"></div>
                   <div>
                      <p className="text-white font-bold uppercase tracking-[0.5em] text-[9px] font-display">{t.author}</p>
                      <p className="text-gold/60 uppercase tracking-[0.6em] text-[8px] font-black mt-2 font-display">{t.role}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="relative py-80 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 parallax-bg" 
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')`,
              opacity: 0.25 
            }}
          ></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-20">
          <div className="max-w-4xl reveal-left">
             <h2 className="text-7xl md:text-[10rem] font-serif font-bold text-white mb-20 leading-[0.85] tracking-tight">
                Your Legacy <br/> <span className="text-gold italic font-normal">Begins Today</span>
             </h2>
             <div className="flex flex-col sm:flex-row gap-20 items-center">
                <Link to="/contact" className="group bg-gold text-black font-secondary font-black px-16 py-7 rounded-none transition-all flex items-center justify-center uppercase tracking-[0.5em] text-[10px] shadow-[0_20px_50px_rgba(197,160,89,0.4)]">
                   Secure Consultation
                   <ArrowRight className="ml-6 transition-transform group-hover:translate-x-4" size={20} />
                </Link>
                <div className="flex flex-col space-y-8 reveal-right" style={{ transitionDelay: '0.2s' }}>
                   <a href={`tel:${CLIENT_INFO.phones[0]}`} className="text-white text-3xl font-serif font-light hover:text-gold transition-colors tracking-tighter italic">
                      {CLIENT_INFO.phones[0]}
                   </a>
                   <div className="flex items-center space-x-4 text-[9px] uppercase tracking-[0.7em] text-slate-500 font-black font-display">
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(197,160,89,1)]"></div>
                      <span>Broker Active</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;