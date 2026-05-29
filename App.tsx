import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Roadmap from './components/Roadmap';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar onBookNow={() => setIsBookingOpen(true)} />
      <main>
        <Hero onBookNow={() => setIsBookingOpen(true)} />
        <Services onBookNow={() => setIsBookingOpen(true)} />
        <Roadmap onBookNow={() => setIsBookingOpen(true)} />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal onClose={() => setIsBookingOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
