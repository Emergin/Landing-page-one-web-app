import React from 'react';
import { Camera, Send, Globe, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-container/10 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 border-b border-white/5 pb-24">
        
        <div className="md:col-span-4 max-w-xs">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 gradient-primary rounded-lg border border-white/20"></div>
            <span className="font-display font-black text-white text-xl tracking-tighter">KENYA<span className="text-secondary-container">SKILLS</span></span>
          </div>
          <p className="text-white/60 leading-relaxed mb-10">Curating the finest digital talent in the East African savannah. Join the Verdant Nexus and grow your impact globally.</p>
          <div className="flex gap-4">
             <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-secondary-container hover:text-primary transition-all"><Camera size={20} /></a>
             <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-secondary-container hover:text-primary transition-all"><Send size={20} /></a>
             <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-secondary-container hover:text-primary transition-all"><Globe size={20} /></a>
             <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-secondary-container hover:text-primary transition-all"><Code2 size={20} /></a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold mb-8 text-secondary-container uppercase text-xs tracking-widest">Platform</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vetting Process</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Verification</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Career Growth</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold mb-8 text-secondary-container uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Our Vision</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Digital Savannah</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kenya Office</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold mb-8 text-secondary-container uppercase text-xs tracking-widest">Newsletter</h4>
          <p className="text-white/60 mb-6 font-medium text-sm">Stay ahead in the digital economy with curated insights delivered weekly.</p>
          <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 hover:border-white/20 focus-within:border-white/40 transition-all">
            <input 
              type="email" 
              placeholder="Your email address..." 
              className="bg-transparent border-none outline-none px-4 py-2 text-white placeholder:text-white/30 w-full font-medium"
            />
            <button className="bg-secondary-container text-primary px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
        <p>© 2026 Kenya Skill Marketplace. Created by the Verdant Nexus Design System.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
