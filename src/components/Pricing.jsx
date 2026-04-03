import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-surface-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary text-editorial mb-16">
          Invest in <span className="italic font-light text-secondary-container">Growth</span>.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Starter */}
          <div className="bg-surface-lowest p-10 rounded-[3rem] shadow-ambient text-left group hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-xl font-bold text-primary mb-2">Starter</h3>
            <p className="text-sm text-on-surface-variant/60 mb-8 font-medium italic">"The Savannah Seedling"</p>
            <div className="text-4xl font-black text-primary mb-8 flex items-baseline">
              Ksh 0 <span className="text-sm text-on-surface-variant/40 font-bold ml-2">/ month</span>
            </div>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-primary/80 font-medium">
                <div className="p-1 bg-primary/5 rounded-full"><Check size={14} /></div>
                Browse 1,000+ Profiles
              </li>
              <li className="flex items-center gap-3 text-primary/80 font-medium">
                <div className="p-1 bg-primary/5 rounded-full"><Check size={14} /></div>
                Standard Support
              </li>
              <li className="flex items-center gap-3 text-primary/80 font-medium">
                <div className="p-1 bg-primary/5 rounded-full"><Check size={14} /></div>
                Basic Project Dashboard
              </li>
            </ul>
            
            <button className="w-full py-4 rounded-2xl border-2 border-primary/10 text-primary font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Premium - Featured */}
          <div className="bg-primary p-12 rounded-[3rem] shadow-2xl text-left relative overflow-hidden group hover:scale-105 transition-transform duration-500 transform lg:scale-110 z-10 border-4 border-secondary-container/20">
            <div className="absolute top-0 right-0 bg-secondary-container text-primary font-black px-8 py-2 rounded-bl-3xl text-sm italic">
              MOST POPULAR
            </div>
            <div className="absolute top-20 right-[-50px] w-48 h-48 bg-secondary-container/10 blur-[80px] rounded-full"></div>
            
            <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
            <p className="text-sm text-white/50 mb-8 font-medium italic">"The Verdant Nexus"</p>
            <div className="text-4xl font-black text-white mb-8 flex items-baseline">
              Ksh 12,000 <span className="text-sm text-white/40 font-bold ml-2">/ month</span>
            </div>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-white font-medium">
                <div className="p-1 bg-secondary-container rounded-full text-primary shadow-sm"><Check size={14} /></div>
                Unlimited Premium Insights
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <div className="p-1 bg-secondary-container rounded-full text-primary shadow-sm"><Check size={14} /></div>
                Priority Direct Messaging
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <div className="p-1 bg-secondary-container rounded-full text-primary shadow-sm"><Check size={14} /></div>
                Rigorous Vet Report on Talents
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <div className="p-1 bg-secondary-container rounded-full text-primary shadow-sm"><Check size={14} /></div>
                Personal Concierge
              </li>
            </ul>
            
            <button className="w-full py-5 rounded-2xl bg-secondary-container text-primary font-black shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Level Up Now <ArrowRight size={20} />
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-surface-lowest p-10 rounded-[3rem] shadow-ambient text-left group hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-xl font-bold text-primary mb-2">Enterprise</h3>
            <p className="text-sm text-on-surface-variant/60 mb-8 font-medium italic">"The Digital Savannah Empire"</p>
            <div className="text-4xl font-black text-primary mb-8 flex items-baseline">
              Ksh 45k <span className="text-sm text-on-surface-variant/40 font-bold ml-2">/ yr</span>
            </div>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-primary/80 font-medium">
                <div className="p-1 bg-primary/5 rounded-full"><Check size={14} /></div>
                Full API White-label Access
              </li>
              <li className="flex items-center gap-3 text-primary/80 font-medium">
                <div className="p-1 bg-primary/5 rounded-full"><Check size={14} /></div>
                Custom Onboarding Workflow
              </li>
              <li className="flex items-center gap-3 text-primary/80 font-medium">
                <div className="p-1 bg-primary/5 rounded-full"><Check size={14} /></div>
                Dedicated Success Manager
              </li>
            </ul>
            
            <button className="w-full py-4 rounded-2xl border-2 border-primary/10 text-primary font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
