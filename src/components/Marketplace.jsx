import React, { useState } from 'react';
import { Search, Filter, Star, MapPin } from 'lucide-react';

const categories = ["Design", "Development", "Marketing", "Architecture", "Fintech", "Visual Arts"];

const listings = [
  {
    name: "Architectural Visualizer",
    author: "Wambui K.",
    rating: 4.9,
    location: "Mombasa",
    price: "Ksh 4,500/hr",
    img: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Fintech Lead Dev",
    author: "Otieno O.",
    rating: 5.0,
    location: "Nairobi",
    price: "Ksh 8,000/hr",
    img: "https://images.unsplash.com/photo-1549692560-5e9573fa2931?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "UX Strategist",
    author: "Nanjala S.",
    rating: 4.8,
    location: "Eldoret",
    price: "Ksh 3,500/hr",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

const Marketplace = () => {
  const [activeCat, setActiveCat] = useState("Design");

  return (
    <section id="marketplace" className="py-24 bg-surface max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary text-editorial mb-6">
            Curated <span className="italic font-light">Digital</span> Excellence.
          </h2>
          <p className="text-on-surface-variant/70">The most influential professionals across Kenya, handpicked for your next high-impact project.</p>
        </div>
        
        <div className="flex bg-surface-low p-2 rounded-2xl border border-outline/10 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search expertise..." 
            className="bg-transparent border-none outline-none px-4 py-2 text-primary placeholder:text-primary/30 w-full"
          />
          <button className="bg-primary text-white p-3 rounded-xl">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Categories Chips */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((c) => (
          <button 
            key={c}
            onClick={() => setActiveCat(c)}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeCat === c ? 'bg-primary text-white shadow-ambient' : 'bg-surface-low text-primary hover:bg-primary/5'}`}
          >
            {c}
          </button>
        ))}
        <button className="px-6 py-3 rounded-full font-bold text-sm border border-outline/10 text-primary flex items-center gap-2">
          <Filter size={16} /> More Filters
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {listings.map((l, i) => (
          <div key={i} className="group bg-surface-lowest rounded-[2.5rem] overflow-hidden shadow-ambient hover:translate-y-[-8px] transition-all duration-500 border border-outline/5">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={l.img} alt={l.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-black text-primary flex items-center gap-1">
                <Star size={12} className="fill-secondary-container text-secondary-container" /> {l.rating}
              </div>
              <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-1">
                <MapPin size={12} /> {l.location}
              </div>
            </div>
            
            <div className="p-8 text-left">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{l.name}</h3>
                  <p className="text-sm text-on-surface-variant/80 font-medium">{l.author}</p>
                </div>
                <p className="text-primary font-black text-lg">{l.price}</p>
              </div>
              
              <div className="flex gap-2 mb-6">
                <span className="px-2 py-1 bg-primary/5 rounded text-[10px] font-bold text-primary uppercase">Fintech</span>
                <span className="px-2 py-1 bg-primary/5 rounded text-[10px] font-bold text-primary uppercase">Consulting</span>
              </div>
              
              <button className="w-full py-4 rounded-2xl border-2 border-primary/10 text-primary font-bold group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
