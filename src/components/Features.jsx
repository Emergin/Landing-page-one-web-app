import React from 'react';
import { Target, Zap, Shield, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Target className="text-secondary-container" size={32} />,
    title: "Organic Precision",
    description: "Our algorithms match skills with precision, mirroring the natural growth of the digital savannah."
  },
  {
    icon: <Zap className="text-secondary-container" size={32} />,
    title: "Verdant Growth",
    description: "Accelerate your career with premium opportunities in the Kenyan and global digital economies."
  },
  {
    icon: <Shield className="text-secondary-container" size={32} />,
    title: "Rigorous Reliability",
    description: "Each professional is vetted with rigorous standards to ensure the highest quality of work."
  },
  {
    icon: <Globe2 className="text-secondary-container" size={32} />,
    title: "Global Reach",
    description: "Connect with clients from Nairobi to New York, all while staying connected to your roots."
  }
];

const Features = () => {
  return (
    <section id="how-it-works" className="py-24 bg-surface-low transition-all">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary text-editorial mb-16">
          The Verdant Nexus <span className="italic font-light">Ecosystem</span>.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-surface-lowest p-10 rounded-3xl shadow-ambient hover:translate-y-[-10px] transition-all duration-500 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-secondary-container/10 transition-colors"></div>
              
              <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary transition-colors duration-500">
                <span className="group-hover:text-white transition-colors duration-500">
                   {React.cloneElement(f.icon, { className: "group-hover:text-secondary-container" })}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4">{f.title}</h3>
              <p className="text-on-surface-variant leading-relaxed opacity-80">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
