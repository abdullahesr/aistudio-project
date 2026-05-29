import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, PawPrint } from 'lucide-react';

const pets = [
  { name: 'Max', breed: 'Golden Retriever', color: 'bg-amber-200', emoji: '🐕', tag: 'After' },
  { name: 'Luna', breed: 'Persian Cat', color: 'bg-rose-200', emoji: '🐈', tag: 'Spa Day' },
  { name: 'Charlie', breed: 'Poodle', color: 'bg-sky-200', emoji: '🐩', tag: 'New Cut' },
  { name: 'Bella', breed: 'Cavalier', color: 'bg-emerald-200', emoji: '🐕', tag: 'Makeover' },
  { name: 'Oliver', breed: 'Rabbit', color: 'bg-violet-200', emoji: '🐰', tag: 'Fluffy' },
  { name: 'Daisy', breed: 'Cocker Spaniel', color: 'bg-pink-200', emoji: '🐕', tag: 'Glam' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 px-6 bg-[#fef3c7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200/50 rounded-2xl border border-amber-300/30 mb-6">
            <Camera className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-medium text-sm">Pet Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-tight mb-4">
            Happy Customers
          </h2>
          <p className="text-lg text-amber-800/60 max-w-2xl mx-auto">
            See the transformations that make tails wag
          </p>
        </motion.div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2"
          >
            <div className="relative h-full min-h-[300px] md:min-h-[400px] bg-amber-400 rounded-[28px] p-8 flex flex-col justify-end shadow-[0_12px_40px_rgba(217,119,6,0.2)] overflow-hidden group cursor-pointer">
              <div className="absolute top-6 right-6">
                <div className="px-4 py-2 bg-white/90 rounded-2xl text-amber-700 font-bold text-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                  ⭐ Featured
                </div>
              </div>
              <div className="text-7xl mb-4">🐕</div>
              <h3 className="text-3xl font-bold text-white mb-1">Cooper</h3>
              <p className="text-white/80 text-lg">Golden Retriever • Full Makeover</p>
              <div className="flex items-center gap-2 mt-4">
                <Heart className="w-5 h-5 text-white/80" />
                <span className="text-white/80 text-sm">Best transformation of the month</span>
              </div>
            </div>
          </motion.div>

          {/* Regular Cards */}
          {pets.map((pet, i) => (
            <motion.div
              key={pet.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className={`${pet.color} rounded-[24px] p-6 h-full min-h-[200px] flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300`}>
                <div className="flex justify-between items-start">
                  <div className="px-3 py-1 bg-white/70 rounded-xl text-xs font-bold text-amber-800">
                    {pet.tag}
                  </div>
                  <Heart className="w-4 h-4 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <div className="text-4xl mb-3">{pet.emoji}</div>
                  <h3 className="font-bold text-amber-900">{pet.name}</h3>
                  <p className="text-amber-700/60 text-sm">{pet.breed}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
