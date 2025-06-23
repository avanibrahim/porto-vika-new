
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import TrueFocus from '@/components/TrueFocus';
import TiltedCard from '@/components/TiltedCard';
import SplitText from "@/components/SplitText";
import Threads from '@/components/Threads';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};



const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('tentang');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="text-white overflow-hidden relative">
      {/* Background Threads */}
      <div className="absolute inset-0 z-0">
        <Threads
          amplitude={0.7}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
  
      {/* Content di atas Threads */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
         <div className="text-center space-y-8">
          {/* Tilted Card */}
            <div className="flex justify-center">
              <TiltedCard
                imageSrc="img/profile.png"
                altText="Profile Picture"
                captionText="AIBR"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text text-center">
                    Hii, it's me!
                  </p>
                }
              />
            </div>

              {/* Judul Utama */}
              <SplitText
                text="Vika Duma S.Kep"
                className="text-5xl lg:text-6xl xl:text-7xl font-semibold text-center"
                delay={10}
                duration={2}
                ease="elastic.out(1, 0.3)"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              {/* Subjudul */}
              <TrueFocus
                sentence="Ilmu Keperawatan"
                manualMode={false}
                blurAmount={5}                 // Lebih rendah dari 4
                borderColor='pink'
                animationDuration={0.5}       // Lebih smooth (1.5s)
                pauseBetweenAnimations={1}  // Jeda antar fokus lebih natural
              />


              {/* Ikon Sosial Media */}
              <div className="flex justify-center items-center gap-6 mt-12">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/fb.png" alt="Facebook" className="w-10 h-10 hover:scale-110 transition" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/ig.png" alt="Instagram" className="w-10 h-10 hover:scale-110 transition" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <img src="/icons/in.png" alt="WhatsApp" className="w-10 h-10 hover:scale-110 transition" />
                </a>
              </div>

            </div>
          </div>
    </section>  
  );
};

export default Hero;
