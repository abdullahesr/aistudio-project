import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, Scissors, PawPrint, Check, ChevronDown } from 'lucide-react';

interface BookingModalProps {
  onClose: () => void;
}

const services = [
  { id: 'full', name: 'Full Grooming', price: '$65', duration: '90 min' },
  { id: 'spa', name: 'Spa Bath', price: '$35', duration: '45 min' },
  { id: 'express', name: 'Express Trim', price: '$45', duration: '60 min' },
  { id: 'puppy', name: 'Puppy Package', price: '$55', duration: '75 min' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
];

export default function BookingModal({ onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setPetName('');
    setOwnerName('');
    setPhone('');
    setIsSubmitted(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
        className="w-full max-w-lg bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 pb-0">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center">
                <PawPrint className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-amber-900">Book a Grooming</h2>
                <p className="text-amber-600 text-sm">Step {step} of 3</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-amber-100 text-amber-600 hover:bg-amber-200 active:scale-[0.95] transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  s <= step ? 'bg-amber-400' : 'bg-amber-100'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-0">
          {!isSubmitted ? (
            <>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-lg font-semibold text-amber-900 mb-4">Choose a Service</h3>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 ${
                          selectedService === service.id
                            ? 'border-amber-400 bg-amber-50 shadow-[0_4px_12px_rgba(217,119,6,0.1)]'
                            : 'border-amber-100 hover:border-amber-200 bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            selectedService === service.id ? 'bg-amber-400' : 'bg-amber-100'
                          }`}>
                            <Scissors className={`w-5 h-5 ${
                              selectedService === service.id ? 'text-white' : 'text-amber-600'
                            }`} />
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-amber-900">{service.name}</p>
                            <p className="text-amber-600 text-sm">{service.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-amber-900">{service.price}</span>
                          {selectedService === service.id && (
                            <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                    className="w-full mt-6 py-3 bg-amber-500 text-white rounded-2xl font-semibold shadow-[0_4px_16px_rgba(217,119,6,0.25)] hover:bg-amber-600 active:scale-[0.97] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-lg font-semibold text-amber-900 mb-4">Pick a Date & Time</h3>
                  
                  {/* Date Input */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-amber-800 mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-400" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-2xl text-amber-900 font-medium focus:border-amber-400 focus:outline-none transition-colors"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-amber-800 mb-2">Time</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-2xl border-2 text-sm font-medium transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-amber-400 bg-amber-50 text-amber-900 shadow-[0_2px_8px_rgba(217,119,6,0.1)]'
                              : 'border-amber-100 text-amber-700 hover:border-amber-200'
                          }`}
                        >
                          <Clock className="w-4 h-4 inline mr-2" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 bg-amber-100 text-amber-700 rounded-2xl font-semibold hover:bg-amber-200 active:scale-[0.97] transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="flex-1 py-3 bg-amber-500 text-white rounded-2xl font-semibold shadow-[0_4px_16px_rgba(217,119,6,0.25)] hover:bg-amber-600 active:scale-[0.97] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-lg font-semibold text-amber-900 mb-4">Your Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">Pet's Name</label>
                      <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="e.g., Max"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-2xl text-amber-900 font-medium placeholder:text-amber-300 focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">Your Name</label>
                      <input
                        type="text"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        placeholder="e.g., Sarah Johnson"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-2xl text-amber-900 font-medium placeholder:text-amber-300 focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-800 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g., (555) 123-4567"
                        className="w-full px-4 py-3 bg-amber-50 border-2 border-amber-100 rounded-2xl text-amber-900 font-medium placeholder:text-amber-300 focus:border-amber-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 bg-amber-100 text-amber-700 rounded-2xl font-semibold hover:bg-amber-200 active:scale-[0.97] transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!petName || !ownerName || !phone || isLoading}
                      className="flex-1 py-3 bg-amber-500 text-white rounded-2xl font-semibold shadow-[0_4px_16px_rgba(217,119,6,0.25)] hover:bg-amber-600 active:scale-[0.97] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          <PawPrint className="w-5 h-5" />
                          Confirm Booking
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-[24px] flex items-center justify-center mx-auto mb-6 shadow-[0_8px_24px_rgba(16,185,129,0.2)]">
                <Check className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">Booking Confirmed! 🎉</h3>
              <p className="text-amber-700/60 mb-6">
                We'll send a confirmation to your phone. See you soon!
              </p>
              <div className="bg-amber-50 rounded-2xl p-4 mb-6 text-left">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-600">Service</span>
                    <span className="font-medium text-amber-900">
                      {services.find((s) => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-600">Date</span>
                    <span className="font-medium text-amber-900">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-600">Time</span>
                    <span className="font-medium text-amber-900">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-600">Pet</span>
                    <span className="font-medium text-amber-900">{petName}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="w-full py-3 bg-amber-500 text-white rounded-2xl font-semibold shadow-[0_4px_16px_rgba(217,119,6,0.25)] hover:bg-amber-600 active:scale-[0.97] transition-all"
              >
                Done
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
