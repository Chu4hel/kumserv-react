import React from 'react';

import Topbar from '@/components/layout/Topbar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Carousel from '@/components/sections/Carousel';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Facts from '@/components/sections/Facts';
import Services from '@/components/sections/Services';
import Booking from '@/components/sections/Booking';
import Testimonials from '@/components/sections/Testimonials';

const HomePage = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carousel />
      <Features />
      <About />
      <Facts />
      <Services />
      <Booking />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomePage;
