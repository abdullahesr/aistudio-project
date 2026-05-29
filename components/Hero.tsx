import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Shield, Heart, Phone, PawPrint } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200/50 rounded-2xl border border-amber-300/30"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 font-medium text-sm">Premium Pet Grooming</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-amber-900 tracking-tight leading-[1.1]"
            >
              Where Every Pet
              <span className="text-amber-600 block mt-2">Gets VIP Treatment</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-amber-800/60 max-w-lg leading-relaxed"
            >
              From gentle baths to creative cuts, we make every visit a spa day for your furry friend. 
              Professional grooming with love and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={onBookNow}
                className="flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-2xl font-semibold text-lg shadow-[0_8px_32px_rgba(217,119,6,0.35)] hover:shadow-[0_12px_40px_rgba(217,119,6,0.45)] hover:bg-amber-600 active:scale-[0.97] transition-all duration-200"
              >
                <Scissors className="w-5 h-5" />
                Book a Grooming
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-white text-amber-700 rounded-2xl font-semibold text-lg shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] active:scale-[0.97] transition-all duration-200 border border-amber-200/50">
                <Phone className="w-5 h-5" />
                Call Us
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Shield, label: 'Certified Groomers' },
                { icon: Heart, label: 'Loving Care' },
                { icon: Sparkles, label: 'Premium Products' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-amber-700/60">
                  <badge.icon className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Claymorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main Clay Card */}
              <div className="absolute inset-0 bg-amber-400 rounded-[40px] shadow-[0_20px_60px_rgba(217,119,6,0.3),inset_0_-8px_24px_rgba(0,0,0,0.1)] transform rotate-3" />
              <div className="absolute inset-2 bg-[#fef3c7] rounded-[36px] shadow-[inset_0_8px_24px_rgba(0,0,0,0.06)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-amber-400 rounded-[28px] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_24px_rgba(217,119,6,0.25)]">
                    <PawPrint className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Happy Pets</h3>
                  <p className="text-amber-700/60 mb-6">Over 10,000 happy customers</p>
                  <div className="flex justify-center gap-3">
                    {['🐕', '🐈', '🐰', '🐩'].map((emoji, i) => (
                      <span key={i} className="text-3xl">{emoji}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-300 rounded-[20px] shadow-[0_8px_24px_rgba(217,119,6,0.2)] transform rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-200 rounded-[16px] shadow-[0_8px_24px_rgba(217,119,6,0.15)] transform -rotate-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
