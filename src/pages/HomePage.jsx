import React from 'react';

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
            <Carousel/>
            <Features/>
            <About/>
            <Facts/>
            <Services/>
            <Booking/>
            <Testimonials/>
        </>
    );
};

export default HomePage;
