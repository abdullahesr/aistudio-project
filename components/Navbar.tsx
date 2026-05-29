import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scissors, Menu, X, PawPrint, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookNow: () => void;
}

export default function Navbar({ onBookNow }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fef3c7]/90 backdrop-blur-md border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow-[0_8px_24px_rgba(217,119,6,0.25)] group-hover:shadow-[0_12px_32px_rgba(217,119,6,0.35)] transition-shadow duration-300">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-amber-900 tracking-tight">Pawfect</span>
              <span className="text-xl font-bold text-amber-600 tracking-tight">Groom</span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-amber-800/70 hover:text-amber-900 font-medium text-sm tracking-wide transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={onBookNow}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-2xl font-semibold text-sm shadow-[0_4px_16px_rgba(239,68,68,0.3)] hover:shadow-[0_8px_24px_rgba(239,68,68,0.4)] hover:bg-red-600 active:scale-[0.97] transition-all duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-amber-100 text-amber-700 active:scale-[0.95] transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-amber-200/50 bg-[#fef3c7] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 rounded-2xl bg-amber-100/50 text-amber-800 font-medium text-sm hover:bg-amber-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookNow();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-red-500 text-white rounded-2xl font-semibold text-sm shadow-[0_4px_16px_rgba(239,68,68,0.3)] active:scale-[0.97] transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
