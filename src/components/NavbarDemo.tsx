"use client";

import { useState, useEffect } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // opsional: bisa diganti classnames biasa
import TextPressure from '@/components/TextPressure';

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used





const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Tentang", href: "#tentang" },
  { name: "Dokumentasi", href: "#portofolio" },
  { name: "Galeri", href: "#galeri" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled ? "backdrop-blur-md" : ""
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <img src="/img/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden flex-1 items-center justify-center space-x-6 lg:flex">
          {navLinks.map((link) => (
            <motion.a
              whileHover={{ scale: 1.05 }}
              key={link.name}
              href={link.href}
              className="text-sm text-white hover:text-pink-300 transition duration-200"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Title / Brand */}
        <div className="hidden lg:block font-semibold text-lg text-white dark:text-white font-mono tracking-wide">
  AIBR.
</div>



        {/* Mobile Toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="flex flex-col items-start bg-black/80 px-4 py-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="w-full py-2 text-white text-base border-b border-white/20"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
