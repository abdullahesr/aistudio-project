import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Bath, Sparkles, Heart, PawPrint, Star } from 'lucide-react';

interface ServicesProps {
  onBookNow: () => void;
}

const services = [
  {
    icon: Scissors,
    title: 'Full Grooming',
    subtitle: 'Complete makeover',
    price: '$65',
    duration: '90 min',
    description: 'Bath, haircut, nail trim, ear cleaning, and styling.',
    features: ['Premium shampoo', 'Breed-specific cut', 'Nail buffing', 'Fragrance spritz'],
    color: 'bg-amber-400',
    shadow: 'rgba(217,119,6,0.25)',
  },
  {
    icon: Bath,
    title: 'Spa Bath',
    subtitle: 'Relaxing wash',
    price: '$35',
    duration: '45 min',
    description: 'Luxurious bath with massage, blow-dry, and brush-out.',
    features: ['Aromatherapy', 'Deep conditioning', 'Hot towel wrap', 'Paw balm'],
    color: 'bg-rose-400',
    shadow: 'rgba(244,63,94,0.25)',
    popular: true,
  },
  {
    icon: Sparkles,
    title: 'Express Trim',
    subtitle: 'Quick tidy up',
    price: '$45',
    duration: '60 min',
    description: 'Face, feet, and sanitary trim for between full grooms.',
    features: ['Face trim', 'Paw pad shave', 'Sanitary trim', 'Quick brush'],
    color: 'bg-emerald-400',
    shadow: 'rgba(16,185,129,0.25)',
  },
  {
    icon: Heart,
    title: 'Puppy Package',
    subtitle: 'First grooming',
    price: '$55',
    duration: '75 min',
    description: 'Gentle introduction to grooming for puppies under 6 months.',
    features: ['Slow introduction', 'Treat rewards', 'Light trim', 'Training tips'],
    color: 'bg-violet-400',
    shadow: 'rgba(139,92,246,0.25)',
  },
];

export default function Services({ onBookNow }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-[#fef3c7]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-200/50 rounded-2xl border border-amber-300/30 mb-6">
            <Star className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-medium text-sm">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-tight mb-4">
            Premium Grooming Packages
          </h2>
          <p className="text-lg text-amber-800/60 max-w-2xl mx-auto">
            Every service includes love, care, and a happy tail wag guarantee
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Claymorphism Card */}
              <div className={`relative p-8 rounded-[28px] bg-white border border-amber-200/30 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300 ${service.popular ? 'ring-2 ring-amber-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-xs font-bold rounded-full shadow-[0_4px_12px_rgba(217,119,6,0.3)]">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-[20px] flex items-center justify-center mb-6 shadow-[0_8px_24px_var(--tw-shadow-color)]`}
                  style={{ boxShadow: `0 8px 24px ${service.shadow}` }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-amber-900 mb-1">{service.title}</h3>
                <p className="text-amber-600 font-medium text-sm mb-1">{service.subtitle}</p>
                <p className="text-amber-800/60 text-sm mb-4">{service.description}</p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-amber-900">{service.price}</span>
                  <span className="text-amber-600 text-sm">/{service.duration}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-amber-700/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={onBookNow}
                  className="w-full py-3 bg-amber-500 text-white rounded-2xl font-semibold text-sm shadow-[0_4px_16px_rgba(217,119,6,0.25)] hover:bg-amber-600 active:scale-[0.97] transition-all duration-200"
                >
                  Book This Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
