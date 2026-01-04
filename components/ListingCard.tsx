import React from 'react';
import { Bed, Bath, Square, MapPin, ArrowUpRight } from 'lucide-react';
import { Listing } from '../types';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="group relative flex flex-col h-full overflow-hidden glass transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-white/10">
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={listing.imageUrl} 
          alt={listing.title} 
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
        
        <div className="absolute top-6 left-6 glass px-4 py-1.5 text-[9px] font-display font-black uppercase tracking-[0.4em] text-white border-gold/20">
          {listing.type}
        </div>
        
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-[10px] font-display font-bold text-gold uppercase tracking-[0.3em] mb-2">Price Upon Request</p>
          <p className="text-4xl font-secondary italic font-medium text-white tracking-tighter">${listing.price.toLocaleString()}</p>
        </div>

        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700">
           <div className="bg-gold p-3 text-black rounded-none shadow-xl">
              <ArrowUpRight size={20} />
           </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow bg-black/40 backdrop-blur-md">
        <div className="flex items-center text-gold/80 text-[10px] font-display uppercase tracking-[0.4em] mb-4 font-bold">
          <MapPin size={12} className="mr-2" />
          {listing.city}, Illinois
        </div>
        <h3 className="text-2xl font-secondary font-medium text-white mb-6 leading-snug group-hover:text-gold transition-colors">
          {listing.title}
        </h3>
        
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5 mt-auto">
          <div className="flex flex-col items-center">
            <span className="text-white font-serif font-bold text-lg">{listing.beds}</span>
            <span className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold font-display">Beds</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/5 px-2">
            <span className="text-white font-serif font-bold text-lg">{listing.baths}</span>
            <span className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold font-display">Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-serif font-bold text-lg">{listing.sqft.toLocaleString()}</span>
            <span className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold font-display">SqFt</span>
          </div>
        </div>

        <button className="mt-8 w-full py-5 bg-transparent border border-gold/30 text-gold text-[9px] font-secondary font-black uppercase tracking-[0.5em] hover:bg-gold hover:text-black transition-all duration-700">
          Inquire Privately
        </button>
      </div>
    </div>
  );
};

export default ListingCard;