'use client';

import React from 'react';
import Masonry from '@/components/Masonry';

const items = [
    { id: '2', img: '/img/g2.jpg', height: 700 },
    { id: '1', img: '/img/g1.jpg', height: 600 },
    { id: '4', img: '/img/g4.jpg', height: 600 },
    { id: '5', img: '/img/g5.jpeg', height: 300 },
    { id: '3', img: '/img/g3.jpg', height: 700 },
    { id: '7', img: '/img/g8.png', height: 500 },
    { id: '6', img: '/img/g6.jpeg', height: 600 },
    { id: '8', img: '/img/g7.png', height: 600 },
];

const Gallery = () => {
  return (
    <section id="galeri" className="py-24 sm:py-24 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Galeri
          </h2>
        </div>
        <div className="relative w-full">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
