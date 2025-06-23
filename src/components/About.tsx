import React from 'react';
import CardSwap, { Card } from '../components/CardSwap';
import GradientText from '../components/GradientText';

const About = () => {
  return (
<section id="tentang" className="bg-black text-white overflow-x-hidden py-24 px-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* 🔸 KIRI - TEKS (Selalu di kiri) */}
    <div className="text-left">
      <div className="space-y-6">
        <GradientText
          colors={["#000000", "#ffffff", "#ff69b4", "#ffffff", "#000000"]}
          animationSpeed={3}
          showBorder={false}
          className="text-left text-5xl md:text-6xl font-bold"
        >
          Hallo! Saya Vika
        </GradientText>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
        Saya adalah lulusan S1 Ilmu Keperawatan yang memiliki minat besar di bidang kesehatan dan pelayanan pasien. Dengan bekal pendidikan dan pengalaman yang saya miliki, saya siap berkontribusi secara profesional dalam dunia keperawatan.
        </p>
      </div>
    </div>

    {/* 🔹 KANAN - CardSwap (Tetap kanan) */}
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-visible">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
      >
        <Card>
          <img src="/img/c1.png" alt="Card 1" className="rounded-xl w-full h-full object-cover" />
        </Card>
        <Card>
          <img src="/img/c2.png" alt="Card 2" className="rounded-xl w-full h-full object-cover" />
        </Card>
        <Card>
          <img src="/img/c3.png" alt="Card 3" className="rounded-xl w-full h-full object-cover" />
        </Card>
      </CardSwap>
    </div>
  </div>
</section>

  );
};

export default About;
