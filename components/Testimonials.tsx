import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    pet: 'Max • Golden Retriever',
    avatar: '🐕',
    rating: 5,
    text: 'Absolutely amazing service! Max came out looking like a million bucks. The claymorphism style of their studio is so unique and welcoming. He was so relaxed during the whole process.',
    date: '2 weeks ago',
  },
  {
    name: 'Michael Chen',
    pet: 'Luna • Persian Cat',
    avatar: '🐈',
    rating: 5,
    text: 'I was nervous about taking Luna to a groomer, but they were so gentle and patient. The spa bath package is incredible - she smells amazing and her fur is so soft!',
    date: '1 month ago',
  },
  {
    name: 'Emily Rodriguez',
    pet: 'Charlie • Poodle',
    avatar: '🐩',
    rating: 5,
    text: 'Best groomers in town! Charlie always looks forward to his appointments. The booking system is so easy to use, and they always remember his favorite treats.',
    date: '3 weeks ago',
  },
  {
    name: 'David Kim',
    pet: 'Bella • Cavalier',
    avatar: '🐕',
    rating: 5,
    text: 'The puppy package was perfect for Bella\'s first grooming experience. They were so patient and made it fun for her. She came home happy and looking beautiful!',
    date: '1 week ago',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 bg-[#fef3c7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200/50 rounded-2xl border border-amber-300/30 mb-6">
            <MessageCircle className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-medium text-sm">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-tight mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-lg text-amber-800/60 max-w-2xl mx-auto">
            Real reviews from our happy customers
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute w-full"
              >
                {/* Claymorphism Testimonial Card */}
                <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-amber-200/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-amber-100 rounded-[20px] flex items-center justify-center text-3xl shadow-[0_4px_12px_rgba(217,119,6,0.15)]">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900">{testimonials[current].name}</h3>
                      <p className="text-amber-600 text-sm">{testimonials[current].pet}</p>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-amber-300 mb-4" />

                  <p className="text-lg text-amber-800/80 leading-relaxed mb-6">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-amber-500 text-sm">{testimonials[current].date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] active:scale-[0.95] transition-all duration-200 border border-amber-200/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-amber-700" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] active:scale-[0.95] transition-all duration-200 border border-amber-200/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-amber-700" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-amber-500 w-8 shadow-[0_2px_8px_rgba(217,119,6,0.3)]'
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
