import React from 'react';
import { motion } from 'framer-motion';
import { PawPrint, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Pawfect</span>
                <span className="text-xl font-bold text-amber-400">Groom</span>
              </div>
            </div>
            <p className="text-amber-300/70 text-sm leading-relaxed">
              Premium pet grooming with love and care. Every pet deserves to feel pampered and beautiful.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'Gallery', 'Testimonials', 'Book Now', 'About Us'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-amber-300/70 hover:text-amber-200 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300/70">hello@pawfectgroom.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300/70">123 Pet Street, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-amber-300/70">Mon-Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-amber-800/50 rounded-xl flex items-center justify-center hover:bg-amber-700 active:scale-[0.95] transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-amber-300" />
                </a>
              ))}
            </div>
            <p className="text-amber-300/70 text-sm mb-3">Get grooming tips & offers</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-amber-800/50 border border-amber-700/30 rounded-xl text-sm text-amber-200 placeholder:text-amber-500/50 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="px-4 py-2 bg-amber-500 text-white rounded-xl text-sm font-semibold hover:bg-amber-600 active:scale-[0.95] transition-all">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-amber-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-amber-400/60 text-sm">
              © 2024 PawfectGroom. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-amber-400/60 hover:text-amber-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-amber-400/60 hover:text-amber-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
