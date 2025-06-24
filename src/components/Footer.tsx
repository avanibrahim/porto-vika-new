
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="glass-card p-8">
          <div className="text-center">

            <div className="border-t border-white/20 pt-5">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/70 dark:text-gray-300">
                  © {currentYear} VD - All rights reserved | Powered by
                </p>
                
                <div className="flex space-x-6">
                  <a 
                    href="https://avanibrahim.vercel.app" 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    AIBR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
