import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [lang, setLang] = useState('EN');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300">
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${isScrolled ? 'glass-dark shadow-ambient' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-primary rounded-lg"></div>
          <span className="font-display font-black text-primary text-xl tracking-tighter">KENYA<span className="text-secondary-container">SKILLS</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-primary">
          <a href="#marketplace" className="hover:text-on-surface-variant transition-colors">Marketplace</a>
          <a href="#how-it-works" className="hover:text-on-surface-variant transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-on-surface-variant transition-colors">Pricing</a>
          
          {/* Language Toggle */}
          <div className="flex items-center bg-surface-low p-1 rounded-full border border-outline/10">
            <button 
              onClick={() => setLang('EN')}
              className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'EN' ? 'bg-secondary-container text-primary font-bold shadow-sm' : 'text-primary/60'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('SW')}
              className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'SW' ? 'bg-secondary-container text-primary font-bold shadow-sm' : 'text-primary/60'}`}
            >
              SW
            </button>
          </div>

          <button className="gradient-primary text-white px-6 py-2 rounded-full shadow-ambient hover:scale-105 transition-transform flex items-center gap-2">
            Get Started <ChevronRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-6 right-6 glass p-8 rounded-3xl md:hidden shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#marketplace" className="text-lg font-bold text-primary">Marketplace</a>
          <a href="#how-it-works" className="text-lg font-bold text-primary">How it Works</a>
          <a href="#pricing" className="text-lg font-bold text-primary">Pricing</a>
          <button className="gradient-primary text-white py-4 rounded-full font-bold">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
