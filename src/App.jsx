import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Marketplace from './components/Marketplace';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Marketplace />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
