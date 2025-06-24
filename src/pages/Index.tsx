
import React from 'react';

import Navbar from '../components/NavbarDemo'; // ✅ lowercase
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Index = () => {
  return (
   

    <div className="min-h-screen bg-black overflow-x-hidden">

      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />
    </div>
    
  );
};

export default Index;
