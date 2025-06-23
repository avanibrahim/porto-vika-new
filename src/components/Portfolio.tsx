
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ChromaGrid from '@/components/ChromaGrid';

const items = [
  {
    image: "/img/p1.png",
    title: "Praktek",
    subtitle: "Pencegahan Diabetes",
    handle: "@vikaadumaa",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
  },
  {
    image: "/img/p2.png",
    title: "Kesehatan",
    subtitle: "Pencegahan Stunting",
    handle: "@vikaadumaa",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
  },
  {
    image: "/img/p3.png",
    title: "Praktek",
    subtitle: "Penncegahan Diabetes",
    handle: "@vikaadumaa",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
  },
];

<div style={{ height: '600px', position: 'relative' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>

const Portfolio = () => {
  return (
    <section id="portofolio" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Dokumentasi
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Berikut adalah beberapa praktek yang telah saya laksanakan
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

        </div>
    </section>
  );
};

export default Portfolio;
