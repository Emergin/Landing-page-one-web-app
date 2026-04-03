import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 rounded-full mb-6 border border-secondary-container/10">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">The Digital Savannah</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-primary text-editorial mb-8">
            Empowering <span className="italic font-light">Kenyan</span> Talent.
          </h1>
          
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Welcome to the Verdant Nexus. A high-end editorial marketplace curating the finest skills in the Kenyan digital economy. Organic precision meets global reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="gradient-primary text-white text-lg font-bold px-10 py-5 rounded-xl shadow-ambient hover:scale-105 transition-transform flex items-center justify-center gap-3">
              Explore Skills <ArrowRight size={20} />
            </button>
            <button className="glass border border-outline/10 text-primary text-lg font-bold px-10 py-5 rounded-xl hover:bg-surface-low transition-colors flex items-center justify-center gap-3">
              <div className="p-2 bg-secondary-container rounded-full">
                <Play size={16} className="fill-primary text-primary" />
              </div>
              How it Works
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-surface bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-primary">Joining 5,000+ Professionals</p>
              <p className="text-on-surface-variant/60">Verified skills across East Africa</p>
            </div>
          </div>
        </div>

        {/* Asymmetric Imagery */}
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/20 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="/hero_bg.png" 
              alt="Kenyan Entrepreneur" 
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          
          {/* Overlay Glass Card */}
          <div className="absolute -bottom-10 -left-10 md:-left-20 z-20 glass p-8 rounded-3xl shadow-ambient max-w-xs animate-in zoom-in duration-1000 delay-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary font-black">KW</div>
              <div>
                <p className="font-bold text-primary">Kamau W.</p>
                <p className="text-xs text-on-surface-variant/60">Lead Architect • Nairobi</p>
              </div>
            </div>
            <p className="text-sm font-medium italic text-black/80">"The Verdant Nexus transformed how I connect with global clients while staying rooted in Kenya."</p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 -right-20 w-64 h-64 bg-secondary-container/20 blur-[120px] rounded-full -z-10"></div>
          <div className="absolute -top-20 right-0 w-32 h-32 bg-primary/10 blur-[80px] rounded-full -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
