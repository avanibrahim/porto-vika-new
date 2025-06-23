import React from 'react';
import './Footer.css';  // sesuaikan path jika beda folder

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="liquid-glass-footer py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-300 text-sm select-none">
          © {currentYear} AIBR - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
