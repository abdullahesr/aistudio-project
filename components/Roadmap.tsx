import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Calendar, 
  Scissors, 
  Heart, 
  Sparkles, 
  Star,
  PawPrint,
  ArrowRight 
} from 'lucide-react';

interface RoadmapProps {
  onBookNow: () => void;
}

const roadmapSteps = [
  {
    step: 1,
    icon: Phone,
    title: 'Book Your Appointment',
    description: 'Choose your preferred service, date, and time through our easy booking system. We offer flexible scheduling to fit your busy life.',
    details: ['Online booking available 24/7', 'Same-day appointments available', 'Free consultation before service'],
    color: 'bg-amber-400',
    shadow: 'rgba(217,119,6,0.25)',
  },
  {
    step: 2,
    icon: Heart,
    title: 'Warm Welcome & Assessment',
    description: 'Your pet receives a gentle greeting and thorough assessment. We discuss their needs, temperament, and any special requirements.',
    details: ['Meet your dedicated groomer', 'Temperament evaluation', 'Custom service plan created'],
    color: 'bg-rose-400',
    shadow: 'rgba(244,63,94,0.25)',
  },
  {
    step: 3,
    icon: Scissors,
    title: 'Premium Grooming Session',
    description: 'Expert grooming with premium products in a calm, spa-like environment. Every step is tailored to your pet\'s comfort and breed.',
    details: ['Professional breed-specific cuts', 'Aromatherapy & conditioning', 'Regular comfort breaks'],
    color: 'bg-emerald-400',
    shadow: 'rgba(16,185,129,0.25)',
  },
  {
    step: 4,
    icon: Sparkles,
    title: 'Quality Check & Finishing',
    description: 'Detailed quality inspection, final touches, and a spritz of our signature fragrance. Your pet leaves looking and feeling amazing.',
    details: ['Thorough quality inspection', 'Complimentary bow/bandana', 'Care tips for home maintenance'],
    color: 'bg-violet-400',
    shadow: 'rgba(139,92,246,0.25)',
  },
  {
    step: 5,
    icon: Star,
    title: 'Happy Pickup & Follow-up',
    description: 'Your pampered pet is ready to go home with a report card and aftercare instructions. We follow up to ensure their happiness.',
    details: ['Detailed grooming report', 'Aftercare instructions', 'Follow-up check within 48 hours'],
    color: 'bg-amber-400',
    shadow: 'rgba(217,119,6,0.25)',
  },
];

export default function Roadmap({ onBookNow }: RoadmapProps) {
  return (
    <section className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-30" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-2xl border border-amber-200/50 mb-6">
            <PawPrint className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-medium text-sm">Your Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-amber-900 tracking-tight mb-4">
            From Booking to Beautiful
          </h2>
          <p className="text-lg text-amber-800/60 max-w-2xl mx-auto">
            Every step of our process is designed with your pet's comfort and happiness in mind
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200 transform md:-translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {roadmapSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 transform -translate-x-1/2 z-10 hidden md:flex">
                    <div className={`w-full h-full ${step.color} rounded-2xl flex items-center justify-center shadow-[0_8px_24px_var(--tw-shadow-color)]`}
                      style={{ boxShadow: `0 8px 24px ${step.shadow}` }}
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className={`md:hidden w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-[0_8px_24px_var(--tw-shadow-color)] flex-shrink-0`}
                    style={{ boxShadow: `0 8px 24px ${step.shadow}` }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-24 md:ml-0`}>
                    <div className="bg-white rounded-[28px] p-8 border border-amber-100/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300">
                      {/* Step Number */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 rounded-xl mb-4 ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}>
                        <span className="text-amber-600 font-bold text-sm">Step {step.step}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-amber-900 mb-3">{step.title}</h3>
                      <p className="text-amber-800/60 mb-6 leading-relaxed">{step.description}</p>

                      {/* Details List */}
                      <div className="space-y-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className={`flex items-center gap-3 ${
                            isLeft ? 'md:justify-end' : ''
                          }`}>
                            <div className={`flex items-center gap-3 ${
                              isLeft ? 'md:flex-row-reverse' : ''
                            }`}>
                              <span className="text-amber-700/70 text-sm">{detail}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-[20px] shadow-[0_8px_32px_rgba(217,119,6,0.35)] hover:shadow-[0_12px_40px_rgba(217,119,6,0.45)] hover:bg-amber-600 active:scale-[0.97] transition-all duration-200 cursor-pointer"
            onClick={onBookNow}
          >
            <span className="font-semibold text-lg">Start Your Pet's Journey</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
