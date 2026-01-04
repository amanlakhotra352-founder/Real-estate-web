
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, BarChart3, TrendingUp } from 'lucide-react';
import { getMarketInsight } from '../services/geminiService';

const MarketInsightTool: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const insight = await getMarketInsight(query);
    setResult(insight);
    setLoading(false);
  };

  return (
    <div className="relative group overflow-hidden glass-dark rounded-[2.5rem] p-1 md:p-14 border-gold/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
      {/* Background Motion Graphics */}
      <div className="absolute inset-0 grid-texture opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-gold/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 p-10 md:p-0">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-3/5">
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-gold/10 p-3 rounded-none border border-gold/20">
                <Sparkles className="text-gold" size={24} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-gold font-display">Market Intelligence</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 text-white leading-[0.9] tracking-tight">
              Sophisticated <br/><span className="text-gold italic font-normal">Data Engine</span>
            </h2>
            
            <p className="text-slate-400 mb-14 leading-relaxed text-xl font-serif font-light italic max-w-xl">
              Access real-time investment analysis and neighborhood trends powered by our proprietary intelligence model.
            </p>

            <form onSubmit={handleSubmit} className="relative max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-6 p-3 bg-white/5 border border-white/10 rounded-none backdrop-blur-2xl group-focus-within:border-gold/40 transition-all duration-700">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Inquire about luxury trends in 60430..."
                  className="flex-grow bg-transparent px-6 py-5 text-white placeholder-slate-600 focus:outline-none font-serif text-lg"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gold hover:bg-white disabled:bg-slate-800 text-black font-black px-12 py-5 rounded-none flex items-center justify-center transition-all shadow-xl shadow-gold/20 active:scale-95 font-display text-[10px] tracking-[0.3em] uppercase"
                >
                  {loading ? <Loader2 className="animate-spin" size={24} /> : (
                    <div className="flex items-center">
                      <span className="mr-3">Analyze</span>
                      <TrendingUp size={18} />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Result Card */}
          <div className="w-full lg:w-2/5">
            <div className="relative h-full min-h-[350px] glass rounded-[2rem] border-white/5 p-10 flex flex-col justify-center transition-all duration-1000 shadow-inner">
              {!result && !loading && (
                <div className="text-center space-y-6 py-16 opacity-30">
                   <div className="inline-block p-6 bg-white/5 rounded-full mb-6">
                      <BarChart3 className="text-slate-500" size={50} />
                   </div>
                   <p className="text-slate-500 uppercase tracking-[0.5em] text-[10px] font-bold font-display">Awaiting Inquiry</p>
                </div>
              )}
              
              {loading && (
                <div className="text-center py-16">
                   <div className="relative inline-block">
                      <div className="w-32 h-32 border-2 border-gold/10 border-t-gold rounded-full animate-spin"></div>
                      <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold animate-pulse" size={28} />
                   </div>
                   <p className="mt-10 text-gold uppercase tracking-[0.6em] text-[10px] font-bold animate-pulse font-display">Parsing Global Data</p>
                </div>
              )}

              {result && !loading && (
                <div className="animate-reveal">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em] font-display">Intelligence Report</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed text-lg italic font-serif font-light mb-10">
                    "{result}"
                  </p>
                  <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[9px] text-slate-600 uppercase tracking-[0.4em] font-display">Broker Verified</span>
                    <TrendingUp className="text-gold/40" size={20} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsightTool;
